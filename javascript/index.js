window.onload = function(){
    
    let btns_left = document.getElementsByClassName("hs_left")[0]; //抓往左的按鈕
    let btns_right = document.getElementsByClassName("hs_right")[0]; //抓往右的按鈕

    let img = document.querySelector(".hsimg") ;
    let img_m = document.querySelector(".hsimg_m") ;
    let txt = document.querySelector(".hs_txt") ;
    let txt_m = document.querySelector(".hs_txt_m") ;
    let topContainer = document.querySelector(".hs_top1 p");
    let imgArr = [ "img/index_hotpd.png" , "img/index_hotpd_2.png" , "img/index_hotpd_3.png" ] ; //前三名圖片電腦版
    let imgArr_m = [ "img/hs_new_2.png" , "img/hs_new_4.png" , "img/hs_new_3.png" ] ; //前三名圖片手機版
    let contentArr = [
        {
            h1: "營養鮭魚主食罐",
            p: "幼母貓、成貓、術後貓皆可食用<br>補充優質蛋白質<br>增強免疫力、營養均衡<br>必買人氣口味！", //(Index: 0)
            price:"NT$60"
        },
        {
            h1: "好吃雞肉主食罐",
            p: "入口非常絲滑、慕斯質地好消化<br>貓咪一口接一口<br>促進食慾又很幫助消化<br>人氣必買口味！", //(Index: 1)
            price:"NT$60"
        },
        {
            h1: "半封閉式貓砂盆",
            p: "不再擔心貓砂盆四周貓砂飛濺！<br>讓貓貓安心如廁<br>顏色好看又非常好用！<br>喵物必買推薦！", //(Index: 2)
            price:"NT$500"
        }
    ];

    let index = 0 ;

    btns_right.onclick = function (){ //點按右鍵
        index++ ;
        if(index > imgArr.length-1) index = 0 ;
        img.src = imgArr[index] ;
        img_m.src = imgArr_m[index] ;
        changeContent(index);
    };

    btns_left.onclick = function (){ //點按左鍵
        index-- ;
        if(index<0)index = imgArr.length-1;
        img.src = imgArr[index] ;
        img_m.src = imgArr_m[index] ;
        changeContent(index);
    };

    function changeContent(index) { //內容更換
        img.src = imgArr[index];
        topContainer.innerText = "Top" + (index + 1) ;
        txt.innerHTML = `<h1>${contentArr[index].h1}</h1>
        <p class="hs_pdtext">${contentArr[index].p}</p><br>
        <p class="hs_price">${contentArr[index].price}</p>`;
        txt_m.innerHTML = `<h1>${contentArr[index].h1}</h1>
        <p class="hs_pdtext_m">${contentArr[index].p}</p><br>
        <p class="hs_price_m">${contentArr[index].price}</p>`;
    }

};


