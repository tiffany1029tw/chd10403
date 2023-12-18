document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('[type="checkbox"]');
    const countSelects = document.querySelectorAll('[name^="count"]');
    const priceElements = document.querySelectorAll('.price1');
    const totalElement = document.querySelector('.total_price');
    const cancelButtons = document.querySelectorAll('.cancel_btn button');
    const selectAllTextElement = document.querySelector('.col.all p');

    function updateTotal() {
        let totalPrice = 0;
        priceElements.forEach((priceElement, index) => {
            if (checkboxes[index + 1].checked) {
                const count = parseInt(countSelects[index].value, 10);
                const price = parseInt(priceElement.textContent.replace('NT$', ''), 10);
                totalPrice += count * price;
            }
        });
        totalElement.textContent = `NT$${totalPrice}`;
    }

    function checkboxChange(index) {
        updateTotal();
    }

    function selectChange() {
        updateTotal();
    }

    function cancelButton(index) {
        checkboxes[index + 1].closest('.dtls').remove();
        updateTotal();
    }

    function selectAllCheckboxChange() {
        const isChecked = checkboxes[0].checked;
        checkboxes.forEach((checkbox, index) => {
            if (index !== 0) {
                checkbox.checked = isChecked;
            }
        });
        updateTotal();
        const selectAllText = isChecked ? "取消全選" : "全選";
        selectAllTextElement.textContent = selectAllText;
    }

    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', () => checkboxChange(index + 1));
    });

    countSelects.forEach((select, index) => {
        select.addEventListener('change', selectChange);
    });

    cancelButtons.forEach((button, index) => {
        button.addEventListener('click', () => cancelButton(index));
    });

    checkboxes[0].addEventListener('change', selectAllCheckboxChange);
    selectAllTextElement.textContent = "全選";
});