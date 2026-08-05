// =====================================
// Category Master
// カテゴリ・困りごと表示名
// =====================================

const categoryMaster = {

    "ADHD": "エイディーエイチディー",
    "ASD": "エーエスディー",

    "学校": "がっこうせいかつ",
    "勉強": "べんきょう",
    "生活": "せいかつ",
    "友達": "ともだちかんけい",

    "忘れ物": "わすれもの",
    "集中できない": "しゅうちゅうできない",
    "宿題": "しゅくだい",
    "朝起きられない": "あさおきられない",
    "生活リズム": "せいかつリズム",

};

const articles = [
    {
        id: "adhd-001",
        category: "ADHD",
        title: "ADHDってどんな特性？",
        description: "忘れ物や集中できない理由をわかりやすく解説します。",
        image: "images/post-adhd.png",
        date: "2026-07-27",
        url: "articles/adhd/adhd-001.html",
        published:true
    },
    {
        id: "school-001",
        category:["学校","ADHD"],
        title: "忘れ物が多いあなたのトリセツ",
        description: "忘れ物を仕組みで減らす方法を紹介します。",
        date: "2026-07-27",
        image: "images/post-school.png",
        url: "articles/adhd/adhd-002.html",
        published:true
    },
    {
        id: "study-001",
        category: ["勉強","ADHD"],
        title: "宿題が始められないあなたへ",
        description: "最初の5分を乗り切るコツを紹介します。",
        date: "2026-07-27",
        image: "images/post-study.png",
        url: "articles/adhd/adhd-003.html",
        published:true
    },
    {
        id: "adhd-004",
        category:["ADHD","生活","忘れ物"],
        title: "片付けられないあなたのトリセツ",
        description: "散らかる理由を知って、仕組みで解決する",
        date: "2026-08-05",
        image: "images/post-adhd.png",
        url: "articles/adhd/adhd-004.html",
        published:true
    },
    {
        id: "adhd-005",
        category:["ADHD","生活"],
        title: "気持ちの切り替えが苦手なあなたのトリセツ",
        description: "頭では分かっているのに動けない時の工夫",
        date: "2026-08-05",
        image: "images/post-adhd.png",
        url: "articles/adhd/adhd-005.html",
        published:true
    },
    {
        id: "adhd-006",
        category:["ADHD","生活"],
        title: "時間を忘れてしまうのは なぜ？",
        description: "ADHDの人が時間を忘れやすい理由と、時間管理のコツを紹介します。",
        date: "2026-08-05",
        image: "images/post-adhd.png",
        url: "articles/adhd/adhd-006.html",
        published:true
    },
    {
        id: "adhd-007",
        category:["ADHD","生活"],
        title: "やることが多いと 動けないのはなぜ？",
        description: "やることが多いと頭がいっぱいになってしまう理由と、整理する方法を紹介します。",
        date: "2026-08-05",
        image: "images/post-adhd.png",
        url: "articles/adhd/adhd-007.html",
        published:true
    },
    {
        id: "adhd-008",
        category: "ADHD",
        title: "「あとでやろう」が 増えてしまうのはなぜ？",
        description: "先延ばしをしてしまう理由と、今日からできる対策を紹介します。",
        date: "2026-07-06",
        image: "images/post-adhd.png",
        url: "articles/adhd/adhd-008.html",
        published:true
    },
    {
        id: "adhd-009",
        category: "ADHD",
        title: "片付けが苦手なのはなぜ？",
        description: "片付けが苦手な理由と、ADHDの人が続けやすい片付けの工夫を紹介します。",
        date: "2026-07-05",
        image: "images/post-adhd.png",
        url: "articles/adhd/adhd-009.html",
        published:true
    },
    {
        id: "adhd-010",
        category: "ADHD",
        title: "やることが多すぎて動けない？「頭の中の整理」が苦手なときのトリセツ",
        description: "「やらなきゃ」と思っているのに、なぜか動けないとき、小さなステップで解決する工夫。",
        date: "2026-07-04",
        image: "images/post-adhd.png",
        url: "articles/adhd/adhd-010.html",
        published:true
    },
    {
        id: "adhd-011",
        category:["学校","ADHD","忘れ物"],
        title: "忘れ物対策 「覚えておく」意外の方法を試してみる",
        description: "忘れない仕組みづくりを試してみる",
        date: "2026-07-03",
        image: "images/post-school.png",
        url: "articles/adhd/adhd-011.html",
        published:true
    },
    {
        id: "adhd-012",
        category:["ADHD","生活"],
        title: "時間が足りないのはなぜ？「時間感覚」のトリセツ",
        description: "体感時間は人それぞれ。アイテムを活用して「間に合わない」を解決",
        date: "2026-07-02",
        image: "images/post-adhd.png",
        url: "articles/adhd/adhd-012.html",
        published:true
    },
    {
        id: "adhd-013",
        category:["ADHD","生活","勉強","集中できない"],
        title: "集中できない？「集中力を作る環境」のトリセツ",
        description: "自分の集中しやすい環境を知る",
        date: "2026-07-01",
        image: "images/post-adhd.png",
        url: "articles/adhd/adhd-013.html",
        published:true
    },
    {
        id: "adhd-014",
        category:["ADHD","生活","忘れ物"],
        title: "今日から始める整理整頓",
        description: "片付け実践編",
        date: "2026-07-26",
        image: "images/post-adhd.png",
        url: "articles/adhd/adhd-014.html",
        published:true
    },
    {
        id: "adhd-015",
        category:["勉強","ADHD","集中できない"],
        title: "授業についていけない？「聞く・書く・覚える」のトリセツ",
        description: "自分に合う学び方を見つけることが、勉強を続ける力になる",
        date: "2026-06-29",
        image: "images/post-study.png",
        url: "articles/adhd/adhd-015.html",
        published:true
    },
    {
        id: "adhd-016",
        category:["勉強","ADHD","集中できない"],
        title: "やる気があるのに、体が動かないあなたのトリセツ",
        description: "始められないのは、やる気ではなく脳の特性かもしれません",
        date: "2026-06-28",
        image: "images/post-study.png",
        url: "articles/adhd/adhd-016.html",
        published:true
    },
    {
        id: "adhd-017",
        category:["ADHD","ASD"],
        title: "予定変更が苦手？「気持ちを切り替える」トリセツ",
        description: "急な予定変更でパニックになるときの対処法",
        date: "2026-06-27",
        image: "images/post-adhd.png",
        url: "articles/adhd/adhd-017.html",
        published:true
    },
    {
        id: "adhd-018",
        category: "ADHD",
        title: "イライラが止まらない？「気持ちを整える」トリセツ",
        description: "感情の波を穏やかにするためのクールダウンのコツ",
        date: "2026-06-26",
        image: "images/post-adhd.png",
        url: "articles/adhd/adhd-018.html",
        published:true
    },
    {
        id: "adhd-019",
        category: "ADHD",
        title: "苦手探しだけで終わらない。「自分の得意」を見つける",
        description: "短所をカバーするより、得意な領域を伸ばす視点",
        date: "2026-06-25",
        image: "images/post-adhd.png",
        url: "articles/adhd/adhd-019.html",
        published:true
    },
    {
        id: "adhd-020",
        category: "ADHD",
        title: "自分のトリセツを作ろう。困りごとを「工夫」に変える方法",
        description: "自分だけの取扱説明書の作り方",
        date: "2026-06-24",
        image: "images/post-adhd.png",
        url: "articles/adhd/adhd-020.html",
        published:true
    },
    {
        id: "adhd-021",
        category:["友達","ASD","学校"],
        title: "友達とうまく話せない？「人との距離感」のトリセツ",
        description: "コミュニケーションで気をつけるポイント",
        date: "2026-06-23",
        image: "images/post-friends.png",
        url: "articles/adhd/adhd-021.html",
        published:true
    },
    {
        id: "adhd-022",
        category:["友達","ASD","学校"],
        title: "相手の気持ちが分からない？「気持ちを想像する」",
        description: "相手の立場に立って考えるためのヒント",
        date: "2026-06-22",
        image: "images/post-friends.png",
        url: "articles/adhd/adhd-022.html",
        published:true
    },
    {
        id: "adhd-023",
        category: ["ADHD,忘れ物"],
        title: "約束を忘れてしまう？「予定を守る仕組み」のトリセツ",
        description: "スケジュールのダブルブッキングやうっかり忘れを防ぐ",
        date: "2026-06-21",
        image: "images/post-adhd.png",
        url: "articles/adhd/adhd-023.html",
        published:true
    },
    {
        id: "adhd-024",
        category: ["学校","生活"],
        title: "困っていても言えない？「お願いする力」をつける",
        description: "上手にSOSを出すためのコミュニケーション",
        date: "2026-06-20",
        image: "images/post-school.png",
        url: "articles/adhd/adhd-024.html",
        published:false
    },
    {
        id: "adhd-025",
        category: "ADHD",
        title: "注意されるとつらい？「失敗から立ち直る」トリセツ",
        description: "叱られたときのショックを和らげる考え方",
        date: "2026-06-19",
        image: "images/post-adhd.png",
        url: "articles/adhd/adhd-025.html",
        published:false
    },
    {
        id: "adhd-026",
        category:["学校","ASD"],
        title: "みんなと同じが苦しい？「自分のペース」のトリセツ",
        description: "周囲と比べずに自分らしく過ごす方法",
        date: "2026-06-18",
        image: "images/post-school.png",
        url: "articles/adhd/adhd-026.html",
        published:false
    },
    {
        id: "adhd-027",
        category:["学校","ASD"],
        title: "学校のルールが苦しい？「集団生活」のトリセツ",
        description: "学校生活での息抜きのコツ",
        date: "2026-06-17",
        image: "images/post-school.png",
        url: "articles/adhd/adhd-027.html",
        published:false
    },
    {
        id: "adhd-028",
        category:["ADHD","ASD","集中できない"],
        title: "音が気になる？「感覚とうまく付き合う」トリセツ",
        description: "音や光の刺激への対策とリフレッシュ法",
        date: "2026-06-16",
        image: "images/post-adhd.png",
        url: "articles/adhd/adhd-028.html",
        published:false
    },
    {
        id: "adhd-029",
        category: ["ADHD","生活","朝起きられない","生活リズム"],
        title: "朝起きられないあなたのトリセツ",
        description: "「早く寝たのに起きられない…」そんな朝が続くあなたへ",
        date: "2026-07-26",
        image: "images/post-adhd.png",
        url: "articles/adhd/adhd-029.html",
        published:false
    },
    {
        id: "adhd-030",
        category: "ADHD",
        title: "困った時は相談していい。「助けを借りる力」のトリセツ",
        description: "一人で抱え込まずに周りを頼る方法",
        date: "2026-06-14",
        image: "images/post-adhd.png",
        url: "articles/adhd/adhd-030.html",
        published:false
    }
];

// 日付順（新しい順）
articles.sort((a, b) => new Date(b.date) - new Date(a.date));