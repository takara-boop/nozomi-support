// =========================
// Drawer Menu (スマホ用メニューの開閉)
// =========================
const menuButton = document.querySelector(".menu-trigger");
const drawerMenu = document.getElementById("drawerMenu");

if (menuButton && drawerMenu) {
    menuButton.addEventListener("click", () => {
        drawerMenu.classList.toggle("open");
    });
}

// =========================
// New Articles (デザイン再現用の動的カード生成)
// =========================
const newsList = document.getElementById("newsList");

if (newsList && typeof articles !== "undefined") {
    // 既存の静的コンテンツがある場合は一度クリアする
    newsList.innerHTML = "";

    // 最新の3件を取得してループ処理
    articles.slice(0, 3).forEach(item => {
        const card = document.createElement("a");
        card.href = item.url;
        card.className = "post-card";

        // 各記事のオブジェクト内にある image プロパティを利用する
        const imgPath = item.image || "images/default.png";

        card.innerHTML = `
            <div class="post-card-img">
                <img src="${imgPath}" alt="${item.title}">
            </div>
            <div class="post-card-body">
                <span class="post-category">${item.category}</span>
                <h3 class="post-title">${item.title}</h3>
                <p class="post-text">${item.description}</p>
                <div class="post-arrow">
                    <span class="material-symbols-outlined">arrow_forward</span>
                </div>
            </div>
        `;

        newsList.appendChild(card);
    });
}

// =========================
// Smooth Close Menu (メニューリンククリック時に閉じる)
// =========================
if (drawerMenu) {
    document.querySelectorAll("#drawerMenu a").forEach(link => {
        link.addEventListener("click", () => {
            drawerMenu.classList.remove("open");
        });
    });
}

// =========================
// Search・検索窓
// =========================
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchResults = document.getElementById('searchResults');

    if (!searchInput || !searchBtn) return;

    // 検索処理を実行する関数
    const performSearch = () => {
        const keyword = searchInput.value.trim().toLowerCase(); 
        searchResults.innerHTML = "";

        if (keyword === "") {
            searchResults.innerHTML = "<p style='color: #666;'>キーワードを入力してください。</p>";
            return;
        }

        // articles.js で定義された `articles` 配列を正しく参照します
        const filteredArticles = articles.filter(item => {
            const titleMatch = item.title && item.title.toLowerCase().includes(keyword);
            const descMatch = item.description && item.description.toLowerCase().includes(keyword);
            const catMatch = item.category && item.category.toLowerCase().includes(keyword);
            return titleMatch || descMatch || catMatch;
        });

        if (filteredArticles.length > 0) {
            const ul = document.createElement('ul');
            ul.style.listStyle = "none";
            ul.style.padding = "0";

            filteredArticles.forEach(item => {
                const li = document.createElement('li');
                li.style.padding = "10px 0";
                li.style.borderBottom = "1px dashed #ccc";
                li.innerHTML = `
                    <a href="${item.url}" style="text-decoration: none; color: #333; font-weight: bold;">
                        ${item.title}
                    </a>
                    <div style="font-size: 12px; color: #888; margin-top: 5px;">
                        <span style="background-color: #f0f0f0; padding: 2px 6px; border-radius: 4px; margin-right: 8px;">${item.category}</span>
                        ${item.description}
                    </div>
                `;
                ul.appendChild(li);
            });
            searchResults.appendChild(ul);
        } else {
            searchResults.innerHTML = "<p style='color: #666;'>該当する記事が見つかりませんでした。</p>";
        }
    };

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });

    searchBtn.addEventListener('click', performSearch);
});

// =========================
// Drawer Close
// 外側クリックで閉じる
// =========================

document.addEventListener("click", function(e){

    if(!drawerMenu) return;

    const clickMenu = drawerMenu.contains(e.target);

    const clickButton = menuButton.contains(e.target);

    if(!clickMenu && !clickButton){

        drawerMenu.classList.remove("open");

    }

});