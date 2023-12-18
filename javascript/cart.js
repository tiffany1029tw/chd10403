function $(id){
    return document.getElementById(id);
} 

function init(){ // 按鈕加減數量
let btnMinus = document.getElementsByClassName("minus");
let btnPlus = document.getElementsByClassName("plus");
let qty = document.getElementsByClassName("numberbox"); //數值

    for(let i=0 ; i < btnMinus.length; i++){
        btnMinus[i].onclick = function(){
            let qtyobj = qty[i];
            let quantity = parseInt(qtyobj.value);
            if(quantity>0){
                qtyobj.value = quantity -1
                changeprice();
                changeprice1();
                sumprice();
            }
        }
        btnPlus[i].onclick = function(){
            let qtyobj=qty[i];
            let quantity = parseInt(qtyobj.value);
            qtyobj.value = quantity +1
            changeprice();
            changeprice1();
            sumprice();
        }
    }
} 
window.addEventListener("load", init, false); 

function changeprice() { //商品一小計
    let num = $('count1').value;
    let price = parseInt($('product-price1').textContent);
    let total = num*price;
    $('subtotal1').innerHTML = total;
    
}
window.addEventListener("load", changeprice, false); 

function changeprice1() { //商品二小計
    let num = $('count2').value;
    let price = parseInt($('product-price2').textContent);
    let total = num*price;
    $('subtotal2').innerHTML=total;
    
}
window.addEventListener("load", changeprice1, false);  

function sumprice() { //總計
    let priceElement = $('subtotal1');
    let price1Element = $('subtotal2');
    let totalPriceElement = $('total-price');

    console.log(priceElement);
    console.log(price1Element);
    console.log(totalPriceElement);

    if(priceElement == null){ //刪除商品後=null無法加減
        priceElement = 0; //給值=0
    }

    if(price1Element == null){
        price1Element = 0;
    }

//檢查元素是否存在
    // if (priceElement && price1Element && totalPriceElement) {

        let p1 = parseInt(priceElement.innerHTML) || 0;
        let p2 = parseInt(price1Element.innerHTML) || 0;
        let prices = p1 + p2;
        totalPriceElement.innerHTML = prices;

        if (prices >= 1000) {
            totalPriceElement.innerHTML = prices.toLocaleString();
        } else {
            totalPriceElement.innerHTML = prices;
        }
    }
// }

window.addEventListener("load", sumprice, false);  

//刪除按鈕
let deleteButtons = document.querySelectorAll('.delete'); //抓刪除按鈕元素

deleteButtons.forEach(function(button) { // 按鈕點擊事件
    button.addEventListener('click', function() {
        let row = this.closest('.dtls'); //抓到父元素

        if (row) { // 確認存在再刪除
            row.remove();
            sumprice();  // 刪除後重新計算總價
        }
    });
});