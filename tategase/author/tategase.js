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

    let logo = document.getElementById("logo");
    let cha = document.getElementById("cha");

    let m_img = ["../image/mouse_2.jpg", "../image/mouse_1.jpg"];
    let c_img = ["../image/cha_2.jpg",  "../image/cha_1.jpg"];

    logo.addEventListener("click", (e) => {
	let count = e.target.getAttribute("data-count") || 0;
	count += 1;
	e.target.src = m_img[count];
	e.target.setAttribute("data-count", count);
    });

    cha.addEventListener("click", (e) => {
	let count = e.target.getAttribute("data-count") || 0;
	count += 1;
	e.target.src = m_img[count];
	e.target.setAttribute("data-count", count);
    });
});

/*
function imagechange1() {
    document.getElementById('logo').src = "../image/mouse_2.jpg";
}
function imagechange2() {
    document.getElementById('logo').src = "../image/mouse_1.jpg";
}
function imagechange3() {
    document.getElementById('cha').src = "../image/cha_2.jpg";
}
function imagechange4() {
    document.getElementById('cha').src = "../image/cha_1.jpg";
}
*/
