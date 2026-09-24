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
// New Articles（最新3件を動的生成）
// =========================
const newsList = document.getElementById("newsList");

if (newsList && typeof articles !== "undefined") {
    // 既存の静的コンテンツをクリア
    newsList.innerHTML = "";

    // 公開中の記事だけを取得し、日付の新しい順に並べる
    const latestArticles = articles
        .filter(item => item.published === true)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);

    // 最新3件をカードとして表示
    latestArticles.forEach(item => {
        const card = document.createElement("a");
        card.href = item.url;
        card.className = "post-card";

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

    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const searchResults = document.getElementById("searchResults");

    if (!searchInput || !searchBtn || !searchResults) return;

    function performSearch() {

        const keyword = searchInput.value.trim().toLowerCase();
        searchResults.innerHTML = "";

        if (keyword === "") {
            searchResults.innerHTML = "<p>キーワードを入力してください。</p>";
            return;
        }

        const filteredArticles = articles.filter(item => {

            const title =
                (item.title || "").toLowerCase();

            const description =
                (item.description || "").toLowerCase();

            // category が配列でも文字列でも対応
            const category =
                Array.isArray(item.category)
                    ? item.category.join(" ").toLowerCase()
                    : (item.category || "").toLowerCase();

            return (
                title.includes(keyword) ||
                description.includes(keyword) ||
                category.includes(keyword)
            );

        });

        if (filteredArticles.length === 0) {
            searchResults.innerHTML =
                "<p>該当する記事が見つかりませんでした。</p>";
            return;
        }

        const ul = document.createElement("ul");
        ul.className = "search-result-list";

        filteredArticles.forEach(item => {

            const li = document.createElement("li");

           li.innerHTML = `
           <a href="${item.url}" class="search-result-link">
            <span class="search-result-title">${item.title}</span>
            </a>
             <span class="search-divider">｜</span>
              <span class="search-result-description">
              ${item.description}
              </span>
              `;

            ul.appendChild(li);

        });

        searchResults.appendChild(ul);

    }

    searchBtn.addEventListener("click", performSearch);

    searchInput.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            performSearch();
        }
    });

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