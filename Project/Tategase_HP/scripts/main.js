// scripts/main.js

// ハンバーガーアイコンとサイドバー
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

hamburger.addEventListener("click", () => {
    // アイコンの変形（≡→×）は .active クラスで
    hamburger.classList.toggle("active");
    // サイドバー開閉
    sidebar.classList.toggle("open");
});

// 簡易検索ボタン(以前のサンプル同様)
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const articles = [
    { title: "新年のご挨拶", content: "2025年の始まり..." },
    { title: "イラスト作品追加", content: "..." },
];

searchBtn.addEventListener("click", () => {
    const keyword = searchInput.value.trim();
    if (!keyword) {
        alert("検索キーワードを入力してください");
        return;
    }
    const results = articles.filter(
        (a) => a.title.includes(keyword) || a.content.includes(keyword)
    );
    if (results.length > 0) {
        alert(`「${keyword}」に該当する記事が${results.length}件見つかりました。`);
    } else {
        alert("該当する記事がありません。");
    }
});

// 背景色を変更するボタンたち
const themeButtons = document.querySelectorAll(".theme-btn");

themeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const theme = btn.getAttribute("data-theme");
        // いったん既存のテーマclassを消してから、新しいテーマclassを追加
        document.body.classList.remove(
        "theme-white",
        "theme-black",
        "theme-kinari"
        );
        document.body.classList.add(`theme-${theme}`);
    });
});
