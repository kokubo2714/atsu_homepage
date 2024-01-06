document.addEventListener('DOMContentLoaded', function () {
    // トグルボタンを取得
    var toggleButton = document.querySelector('.toggle-button');
    // トグルで表示するコンテンツを取得
    var toggleContent = document.querySelector('.toggle-content');

    // トグルボタンのクリックイベントリスナー
    toggleButton.addEventListener('click', function () {
        // コンテンツの高さが0の場合は開く
        var isClosed = toggleContent.style.maxHeight === '0px' || toggleContent.style.maxHeight === '';
        toggleContent.style.maxHeight = isClosed ? `${toggleContent.scrollHeight}px` : '0px';
        // ボタンのテキストを変更
        toggleButton.textContent = isClosed ? '▼ 作業環境 を閉じる' : '▶ 作業環境 を開く';
    });
}); 

document.addEventListener('DOMContentLoaded', function () {
    // すべてのトグルボタンを取得
    var toggleButtons = document.querySelectorAll('.toggle-button');

    // トグルボタンごとにイベントリスナーを設定
    toggleButtons.forEach(function (toggleButton) {
        toggleButton.addEventListener('click', function () {
            // 対応するトグルコンテンツを取得
            var toggleContent = this.nextElementSibling;

            // コンテンツの高さが0の場合は開く
            var isClosed = toggleContent.style.maxHeight === '0px' || toggleContent.style.maxHeight === '';
            toggleContent.style.maxHeight = isClosed ? `${toggleContent.scrollHeight}px` : '0px';
            // ボタンのテキストを変更
            this.textContent = isClosed ? '▼ 詳細を閉じる' : '▶ 詳細を表示';
        });
    });
});
