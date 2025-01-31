// scripts/main.js

// ダークモード切り替え
const darkModeSwitch = document.getElementById('darkModeSwitch');
darkModeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', darkModeSwitch.checked);
});

// サイドバーの開閉(スマホ対応等で使う場合)
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');

sidebarToggle.addEventListener('click', () => {
    // 開閉の切り替え
    if (sidebar.style.display === 'none') {
    sidebar.style.display = 'block';
    } else {
    sidebar.style.display = 'none';
    }
});

// 簡易的な検索機能例
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

// 仮の記事リスト (タイトルや本文を配列で保持しているイメージ)
const articles = [
    { title: '新年のご挨拶', content: '2025年の始まり...' },
    { title: 'イラスト部屋に作品追加', content: '新しいイラストを2点...' },
    { title: '写真部屋の更新', content: '風景写真を追加しました...' },
];

searchBtn.addEventListener('click', () => {
    const keyword = searchInput.value.trim();
    if (!keyword) {
        alert('検索キーワードを入力してください');
        return;
    }

  // フィルタ結果をコンソール表示 (実際は検索結果ページを表示するなど)
    const results = articles.filter(article =>
        article.title.includes(keyword) || article.content.includes(keyword)
    );

    console.log('検索結果:', results);
    if (results.length === 0) {
        alert('該当する記事がありませんでした。');
    } else {
        alert(`「${keyword}」に該当する記事が${results.length}件見つかりました。コンソールを確認！`);
    }
});
