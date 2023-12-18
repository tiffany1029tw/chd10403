// document.addEventListener("DOMContentLoaded", function () {
//     const checkboxes = document.querySelectorAll('[type="checkbox"]');
//     const countSelects = document.querySelectorAll('[name^="count"]');
//     const priceElements = document.querySelectorAll('.price1');
//     const totalElement = document.querySelector('.total_price');
//     const cancelButtons = document.querySelectorAll('.cancel_btn button');

//     function updateTotal() {
//         let totalPrice = 0;
//         priceElements.forEach((priceElement, index) => {
//             if (checkboxes[index + 1].checked) {
//                 const count = parseInt(countSelects[index].value, 10);
//                 const price = parseInt(priceElement.textContent.replace('NT$', ''), 10);
//                 totalPrice += count * price;
//             }
//         });
//         totalElement.textContent = `NT$${totalPrice}`;
//     }

//     function checkboxChange(index) {
//         updateTotal();
//     }

//     function selectChange() {
//         updateTotal();
//     }

//     function cancelButton(index) {
//         const removedItem = checkboxes[index + 1].closest('.dtls');
//         const isChecked = checkboxes[index + 1].checked;
//         //刪除被選取的商品時，選取框的狀態會先手動設為沒被選到，然後再更新合計總金額
//         removedItem.remove();

//         if (isChecked) {
//             checkboxes[index + 1].checked = false; 
//             // 手動將選取框狀態設為未選取
//         updateTotal();
//     }
//         checkboxes[index + 1].closest('.dtls').remove();
//         updateTotal();
//     }

//     function selectAllCheckboxChange() {
//         const isChecked = checkboxes[0].checked;
//         checkboxes.forEach((checkbox, index) => {
//             if (index !== 0) {
//                 checkbox.checked = isChecked;
//             }
//         });
//         updateTotal();
//     }

//     checkboxes.forEach((checkbox, index) => {
//         checkbox.addEventListener('change', () => checkboxChange(index + 1));
//     });

//     countSelects.forEach((select, index) => {
//         select.addEventListener('change', selectChange);
//     });

//     cancelButtons.forEach((button, index) => {
//         button.addEventListener('click', () => cancelButton(index));
//     });

// });

// ------------------

document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('[type="checkbox"]');
    const countSelects = document.querySelectorAll('[name^="count"]');
    const priceElements = document.querySelectorAll('.price1');
    const totalElement = document.querySelector('.total_price');
    const cancelButtons = document.querySelectorAll('.cancel_btn button');

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

    function updateSubtotal(index) {
        const count = parseInt(countSelects[index].value, 10);
        const price = parseInt(priceElements[index].textContent.replace('NT$', ''), 10);
        const subtotal = count * price;
        const subtotalElement = document.querySelector(`.dtls:nth-child(${index + 2}) .total1`);
        subtotalElement.textContent = `NT$${subtotal}`;
    }

    function checkboxChange(index) {
        updateTotal();
    }

    function selectChange(index) {
        updateSubtotal(index);
        updateTotal();
    }

    function cancelButton(index) {
        const removedItem = checkboxes[index + 1].closest('.dtls');
        const isChecked = checkboxes[index + 1].checked;
        removedItem.remove();

        if (isChecked) {
            checkboxes[index + 1].checked = false;
            updateTotal();
        }
    }

    function selectAllCheckboxChange() {
        const isChecked = checkboxes[0].checked;
        checkboxes.forEach((checkbox, index) => {
            if (index !== 0) {
                checkbox.checked = isChecked;
            }
        });
        updateTotal();
    }

    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', () => checkboxChange(index + 1));
    });

    countSelects.forEach((select, index) => {
        select.addEventListener('change', () => selectChange(index));
    });

    cancelButtons.forEach((button, index) => {
        button.addEventListener('click', () => cancelButton(index));
    });
});