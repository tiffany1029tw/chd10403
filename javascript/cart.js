document.addEventListener("DOMContentLoaded", function () { //先抓需要的元素
    const checkboxes = document.querySelectorAll('[type="checkbox"]');
    const countSelects = document.querySelectorAll('[name^="count"]');
    const priceElements = document.querySelectorAll('.price1');
    const totalElement = document.querySelector('.total_price');
    const cancelButtons = document.querySelectorAll('.cancel_btn button');

    // Function to update the total price
    function updateTotal() {
        let totalPrice = 0;
        priceElements.forEach((priceElement, index) => {
            if (checkboxes[index].checked) {
                const count = parseInt(countSelects[index].value, 10);
                const price = parseInt(priceElement.textContent.replace('NT$', ''), 10);
                totalPrice += count * price;
            }
        });
        totalElement.textContent = `NT$${totalPrice}`;
    }

    // Function to handle checkbox change
    function handleCheckboxChange() {
        updateTotal();
    }

    // Function to handle select change
    function handleSelectChange() {
        updateTotal();
    }

    // Function to handle cancel button click
    function handleCancelButtonClick(index) {
        // Remove the corresponding product row
        checkboxes[index].closest('.dtls').remove();
        updateTotal();
    }

    // Function to handle "全選" checkbox
    function handleSelectAllCheckboxChange() {
        const isChecked = checkboxes[0].checked;
        checkboxes.forEach((checkbox, index) => {
            if (index !== 0) {
                checkbox.checked = isChecked;
            }
        });
        updateTotal();
    }

    // Attach event listeners
    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', handleCheckboxChange);
    });

    countSelects.forEach(select => {
        select.addEventListener('change', handleSelectChange);
    });

    cancelButtons.forEach((button, index) => {
        button.addEventListener('click', () => handleCancelButtonClick(index));
    });

    checkboxes[0].addEventListener('change', handleSelectAllCheckboxChange);
});