document.addEventListener('DOMContentLoaded', () => {
    // すべてのトグルボタンにイベントリスナーを設定する
    let observe;

    document.querySelectorAll('.toggle-button').forEach((button) => {
        // 元のテキストをdata属性に格納する
        button.addEventListener('click',  (event) => {
            let content = button.nextElementSibling;
            let isClosed = content.style.maxHeight && content.style.maxHeight !== '0px';

            if (!observe) {
                observe = new MutationObserver(() => {
                    setTimeout(() => {
                        content.style.maxHeight =  `${content.scrollHeight}px`;
                    }, 500);
                });
            }

            if (isClosed) {
                observe.takeRecords();
                observe.disconnect();
            } else {
                observe.observe(content, {attributes: true, attributeFilter: ["style"]});
            }

            // 高さを切り替える
            content.style.maxHeight = isClosed ? null : `${content.scrollHeight}px`;

            // ボタンのテキストを切り替える
            button.textContent = isClosed ? `▶ ${button.getAttribute('data-toggle-text')} を表示する`: `▼ ${button.getAttribute('data-toggle-text')} を閉じる`;
        });
    });

});

function imagechange1() {
    document.getElementById('logo').src = "/tategase/image/mouse_2.jpg";
}
function imagechange2() {
    document.getElementById('logo').src = "/tategase/image/mouse_1.jpg";
}
function imagechange3() {
    document.getElementById('cha').src = "/tategase/image/cha_2.jpg";
}
function imagechange4() {
    document.getElementById('cha').src = "/tategase/image/cha_1.jpg";
}