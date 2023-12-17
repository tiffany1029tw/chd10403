    function checkEmail() { //檢查電子信箱欄位
        let emailInput = document.getElementById('email');
        let emailError = document.getElementById('emailError');
    
        // 驗證電子信箱格式是否正確
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = '需輸入正確電子信箱格式';
        } else {
            emailError.textContent = '';
        }
    }
    
    function correctSubmit() { //送出按鈕的檢查
        let emailInput = document.getElementById('email');
        let emailError = document.getElementById('emailError');
        let messageInput = document.getElementById('ct_txt');

        // 驗證電子信箱格式是否正確
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = '需輸入正確電子信箱格式';
            return false; // 阻止送出表單
        } else {
            emailError.textContent = '';
        }

        // 驗證訊息輸入欄位是否已填寫 不能空白
        if (messageInput.value.trim() === '') { 
        //用trim()方法去除值兩端的空白字符 再檢查去除空白後的值是不是空字串
            alert('訊息欄位不得為空白，請輸入您的訊息');
            return false; //阻止送出表單
        }

        // 確認無誤 彈出視窗成功
        alert('謝謝您的填寫！訊息已成功送出！');
        return true; //可送出表單
    }