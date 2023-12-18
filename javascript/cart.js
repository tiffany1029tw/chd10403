document.addEventListener("DOMContentLoaded", function () { 
//先抓需要的元素
    const checkboxes = document.querySelectorAll('[type="checkbox"]'); //全選的選取框框
    const countSelects = document.querySelectorAll('[name^="count"]'); //找count開頭的元素 count1
    const priceElements = document.querySelectorAll('.price1'); //找商品單價的元素
    const totalElement = document.querySelector('.total_price'); //找合計總金額的元素
    const cancelButtons = document.querySelectorAll('.cancel_btn button'); //找刪除商品的按鈕

    function updateTotal() { // 更新總金額的功能
        let totalPrice = 0;
        priceElements.forEach((priceElement, index) => {
            if (checkboxes[index].checked) { //選取框被選取後
                const count = parseInt(countSelects[index].value, 10);
                const price = parseInt(priceElement.textContent.replace('NT$', ''), 10);
                totalPrice += count * price;
            }
        });
        totalElement.textContent = `NT$${totalPrice}`; //寫出總金額
    }

    function checkboxChange() { // 控制選取框
        updateTotal(); //更新總金額
    }

    function selectChange() { //控制選單的
        updateTotal(); 
    }

    function cancelButton(index) { //控制刪除按鈕
        checkboxes[index].closest('.dtls').remove(); 
        //確認選取框是否被選取到 若有選取就刪去整行的元素(父層是.dtls)
        updateTotal(); 
    }

    function selectAllCheckboxChange() { //全選選取框功能
        const isChecked = checkboxes[0].checked; //是否有選到
        checkboxes.forEach((checkbox, index) => {
            if (index !== 0) {
                checkbox.checked = isChecked; //所有選取框都被選到的狀態就代表全選
            }
        });
        updateTotal();
    }

    // 增加每個的事件監聽器
    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', checkboxChange);
    }); //選取框被選中

    countSelects.forEach(select => {
        select.addEventListener('change', selectChange);
    }); //選單的數字有變

    cancelButtons.forEach((button, index) => {
        button.addEventListener('click', () => cancelButton(index));
    }); //刪除的按鈕被點按

    checkboxes[0].addEventListener('change', selectAllCheckboxChange);
});