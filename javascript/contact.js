    function correctSubmit() {
        let emailInput = document.getElementById('email');
        let emailError = document.getElementById('emailError');
        let messageInput = document.getElementById('ct_txt');

        // 驗證電子信箱格式是否正確
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = '需輸入正確電子信箱格式';
            return;
        } else {
            emailError.textContent = '';
        }

        // 驗證訊息輸入欄位是否已填寫 不能空白
        if (messageInput.value.trim() === '') {
            alert('請輸入您的訊息');
            return;
        }

        // 確認無誤 彈出視窗成功
        alert('謝謝您的填寫！訊息已成功送出！');
    }