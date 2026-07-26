// =====================================
// CATEGORY PAGE
// category.js
// =====================================

// URLパラメータ取得
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

// HTML取得
const title = document.getElementById("categoryTitle");
const description = document.getElementById("categoryDescription");
const categoryList = document.getElementById("categoryList");

// 必須要素確認
if (
    !title ||
    !description ||
    !categoryList ||
    typeof articles === "undefined"
) {

    console.error("category.html の読み込みに失敗しました。");

} else {

    // -----------------------------
    // タイトル表示
    // -----------------------------
    title.textContent = category || "CATEGORY";

    if (
        typeof categoryMaster !== "undefined" &&
        categoryMaster[category]
    ) {
        description.textContent = categoryMaster[category];
    } else {
        description.textContent = "";
    }

    // -----------------------------
    // カテゴリ一致記事取得
    // -----------------------------
    const filteredArticles = articles.filter(article => {

        if (Array.isArray(article.category)) {
            return article.category.includes(category);
        }

        return article.category === category;

    });

    // -----------------------------
    // 記事がない場合
    // -----------------------------
    if (filteredArticles.length === 0) {

        categoryList.innerHTML = `
            <p class="emptyMessage">
                該当する記事はまだありません。
            </p>
        `;

    } else {

        filteredArticles.forEach(article => {

            const card = document.createElement("a");

            card.href = article.url;
            card.className = "post-card";

            // カテゴリ表示
            const categoryText = Array.isArray(article.category)
                ? article.category.join(" / ")
                : article.category;

            card.innerHTML = `
                <div class="post-card-img">
                    <img src="${article.image}" alt="${article.title}">
                </div>

                <div class="post-card-body">

                    <span class="post-category">
                        ${categoryText}
                    </span>

                    <h3 class="post-title">
                        ${article.title}
                    </h3>

                    <p class="post-text">
                        ${article.description}
                    </p>

                    <div class="post-arrow">
                        <span class="material-symbols-outlined">
                            arrow_forward
                        </span>
                    </div>

                </div>
            `;

            categoryList.appendChild(card);

        });

    }

}