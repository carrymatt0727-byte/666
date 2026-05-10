document.addEventListener('DOMContentLoaded', function() {
    // 頁籤切換邏輯
    const tabButtons = document.querySelectorAll('.tab-btn');
    const newsContents = document.querySelectorAll('.news-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            newsContents.forEach(content => content.classList.remove('active'));
            
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // 字體縮放邏輯
    const html = document.documentElement;
    document.getElementById('font-sm')?.addEventListener('click', () => {
        updateFontSize('font-sm');
        html.style.fontSize = '14px';
    });
    document.getElementById('font-md')?.addEventListener('click', () => {
        updateFontSize('font-md');
        html.style.fontSize = '16px';
    });
    document.getElementById('font-lg')?.addEventListener('click', () => {
        updateFontSize('font-lg');
        html.style.fontSize = '18px';
    });

    function updateFontSize(id) {
        document.querySelectorAll('.font-btn').forEach(btn => btn.classList.remove('active'));
        document.getElementById(id).classList.add('active');
    }
});
