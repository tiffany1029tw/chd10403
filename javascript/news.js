document.addEventListener('DOMContentLoaded', function() {
    initialSetup();
});

const topInfo = { //設定內容
    1: { //頁碼一的內容
        section1: {
            title: "不管氣溫有多低，喵物永遠懂你心！",
            main: "2023冬日裡的暖暖小確幸！<br>今年的冬天讓貓奴與主子，再冷也覺得溫暖到心坎裡～<br>來喵物找尋屬於你們家貓貓的寶物！<br>12/1~12/31 單筆訂單滿1800元即贈限量小禮物！<br>數量有限！送完為止<br>",
            imgSrc: "img/sc_1_new.png"
        },
        section2: {
            title: "貓奴與主子的2023年終獎！",
            main: "喵物超讚過年大禮包預購開跑！<br>超澎湃的各式好禮都在大禮包內！<br>送貓友或貓主子自用兩相宜～<br>現在預購再送限量紅包袋五入一組！<br>心動不如馬上行動！一起迎接美好的2024吧！",
            imgSrc: "img/sc_2_new.png"
        }
    },
    2: { //頁碼二的內容
        section1: {
            title: "喵物年末大特賣！貓奴必須看過來！",
            main: "2023年終大特賣來了！今年是不是還沒買夠？<br>快來喵物大特賣搶便宜吧！<br>各種款式的貓咪專屬日常必備用品！<br>12/1~12/31 年末的優惠大放送！<br>CP值絕對超高！別等了快點買起來！<br>",
            imgSrc: "img/scnew3.png"
        },
        section2: {
            title: "吃可愛長大的幼貓專屬優惠到！",
            main: "從小就要細心呵護的幼貓，<br>總是讓鏟屎官緊張不已！<br>但別擔心～喵物提供最棒的幼貓飼料優惠！<br>即日起購買幼貓飼料滿1288元，<br>即贈幼貓專屬餵食照護寶典，以及可愛的小玩具！<br>",
            imgSrc: "img/scnew4.png"
        }
    }
};

function switchPage(page) { // 切換頁面內容
    
    document.querySelector('.sc_1 img').src = topInfo[page].section1.imgSrc;
    document.querySelector('.sc_1 .title').innerHTML = topInfo[page].section1.title;
    document.querySelector('.sc_1 .main').innerHTML = topInfo[page].section1.main;

    document.querySelector('.sc_2 img').src = topInfo[page].section2.imgSrc;
    document.querySelector('.sc_2 .title').innerHTML = topInfo[page].section2.title;
    document.querySelector('.sc_2 .main').innerHTML = topInfo[page].section2.main;

    // 切換頁碼按鈕樣式
    document.querySelector('.btn_p1 button').classList.remove('active');
    document.querySelector('.btn_p2 button').classList.remove('active');
    document.querySelector('.btn_p' + page + ' button').classList.add('active');

}

function nextPage() { //下一頁的功能 點按後可以到下一頁
    const currentPage = document.querySelector('.btn_top .active').innerText; //找到.btn_top下有active類別的元素 去知道當前的頁面

    const nextPage = currentPage === '1' ? '2' : '1'; //確認目前的頁碼是哪一頁

    switchPage(nextPage); //呼叫switchPage 並提供下一頁的參數
}

function initialSetup() { // 初始設定

    // ">"按鈕要可以換到下一頁
    // document.querySelector('.btn_next button').addEventListener('click', nextPage);

    // 初始頁面的按鈕不要有任何樣式
    // document.querySelector('.btn_p1 button').classList.remove('active');
    document.querySelector('.btn_p2 button').classList.remove('active');

}

// ------區塊二-----

document.addEventListener('DOMContentLoaded', function() {
    initialSetup2();
});

const bottomInfo = { //設定內容
    1: { //頁碼一的內容
        section3: {
            title: "貓咪為什麼在貓砂盆裡睡覺？",
            main: "有以下幾點可能：<br>1. 對環境感到安全或是覺得很溫暖舒服<br>2. 剛換環境不太適應，覺得貓砂盆是最熟悉的味道<br>3. 身體不適或感到有壓力<br>請觀察這個狀態是否持續很久或有無其他異常情形！<br>也建議可以去諮詢獸醫，以確保貓咪身心靈都是健康的！<br>",
            imgSrc: "img/kl_1_new.png"
        },
        section4: {
            title: "貓咪為什麼發出呼嚕聲呢？",
            main: "以下是可能的原因：<br>1. 覺得很放鬆，像抱抱、拍屁股都會感到很舒服！<br>2. 撒嬌的表現，有些貓咪會以呼嚕來表達對主人的愛！<br>但也需要注意貓咪是否因身體不適、疼痛或不安而呼嚕，<br>若聲音伴隨其他異常行為，<br>建議諮詢獸醫評估是否身體有異狀！",
            imgSrc: "img/kl_2_new.png"
        }
    },
    2: { //頁碼二的內容
        section3: {
            title: "貓咪為甚麼會一直舔毛呢？",
            main: "大部分的原因如下：<br>幫身體做清潔的動作，帶刺的舌頭可清除髒汙跟廢毛！<br>冬天保溫、夏天則是散熱！<br>可能因情緒緊張，所以透過舔毛來放鬆情緒！<br>將身上氣味做調整，可以讓自己感到安心！<br>若有皮膚的問題要記得諮詢獸醫喔！",
            imgSrc: "img/klnew3.png"
        },
        section4: {
            title: "貓咪總是喜歡被摸下巴耶～",
            main: "有點像臉部按摩的感覺！<br>當然也不是每個貓咪都喜歡！請特別留意<br>有些貓咪不喜歡人家觸碰牠的臉(小心被咬)<br>對於喜歡的貓咪來說，感覺是主人在疼愛牠<br>或者是會獲得獎勵跟想要陪伴的感覺！<br>不得不承認撸貓真的很幸福耶～",
            imgSrc: "img/klnew4.png"
        }
    }
};

function changePage(page) { // 切換頁面內容
    
    document.querySelector('.kl_1 img').src = bottomInfo[page].section3.imgSrc;
    document.querySelector('.kl_1 .title').innerHTML = bottomInfo[page].section3.title;
    document.querySelector('.kl_1 .main').innerHTML = bottomInfo[page].section3.main;

    document.querySelector('.kl_2 img').src = bottomInfo[page].section4.imgSrc;
    document.querySelector('.kl_2 .title').innerHTML = bottomInfo[page].section4.title;
    document.querySelector('.kl_2 .main').innerHTML = bottomInfo[page].section4.main;

    // 切換頁碼按鈕樣式
    document.querySelector('.btn_b_p1 button').classList.remove('active2');
    document.querySelector('.btn_b_p2 button').classList.remove('active2');
    document.querySelector('.btn_b_p' + page + ' button').classList.add('active2');

}

function nextPage2() { //下一頁的功能 點按後可以到下一頁
    const currentPage2 = document.querySelector('.btn_bottom .active2').innerText; //找到.btn_bottom下有active2類別的元素 去知道當前的頁面

    const nextPage2 = currentPage2 === '1' ? '2' : '1'; //確認目前的頁碼是哪一頁

    changePage(nextPage2); //呼叫changePage 並提供下一頁的參數
}

function initialSetup2() { // 初始設定

    document.querySelector('.btn_b_p2 button').classList.remove('active2');

}