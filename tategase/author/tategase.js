document.addEventListener('DOMContentLoaded', function () {
    // すべてのトグルボタンにイベントリスナーを設定する
    var toggleButtons = document.querySelectorAll('.toggle-button');
    toggleButtons.forEach(function (button) {
        // 元のテキストをdata属性に格納する
        var originalText = button.textContent;
        button.setAttribute('data-original-text', originalText);

        button.addEventListener('click', function () {
            var content = this.nextElementSibling;
            var isClosed = content.style.maxHeight && content.style.maxHeight !== '0px';

            // 高さを切り替える
            if (isClosed) {
                content.style.maxHeight = null;
                content.style.overflowY = 'hidden'; // スクロールバーを隠す
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.overflowY = 'auto'; // スクロールバーを表示する
            }

            // ボタンのテキストを切り替える
            if (isClosed) {
                // 元のテキストを設定
                this.textContent = this.getAttribute('data-original-text');
            } else {
                // 閉じるテキストを設定
                this.textContent = '▼ ' + this.getAttribute('data-toggle-text') + ' を閉じる';
            }
        });
    });
});
