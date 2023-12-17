function showContent(category) {
    // 隱藏所有Q
    document.querySelectorAll('.qa_item').forEach(item => {
        item.style.display = 'none';
    });

    // 顯示對應的Q類別
    document.querySelector('.qa_container .' + category).style.display = 'block';
}

    // 增加點擊事件處理器 展開或收合問題的答案 先抓到Q
    document.querySelectorAll('.qa_item .question').forEach(question => {
    question.addEventListener('click', function () {
        // 切換A的顯示狀態
        const answer = this.nextElementSibling;
        answer.style.display = (answer.style.display === 'none' || answer.style.display === '') ? 'block' : 'none';
    });
});

showContent('order'); //初始狀態顯示所有的問題