// navbar.js - Enhanced Navbar HTML with JavaScript
const navbarHTML = `
<!-- Enhanced Navbar HTML -->
<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light shadow-sm">
    <div class="container">
        <a class="navbar-brand fw-bold text-primary" href="index.html">JS 套件介紹</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link text-dark" href="aos.html">AOS 動畫</a></li>
                <li class="nav-item"><a class="nav-link text-dark" href="text-to-speech.html">文字轉語音</a></li>
                <li class="nav-item"><a class="nav-link text-dark" href="lottie.html">Lottie 動畫</a></li>
                <li class="nav-item"><a class="nav-link text-dark" href="chart.html">圖表</a></li>
                <li class="nav-item"><a class="nav-link text-dark" href="lazy-loading.html">圖片懶加載</a></li>
                <li class="nav-item"><a class="nav-link text-dark" href="Anime.html">Anime 動畫</a></li>
                <li class="nav-item"><a class="nav-link text-dark" href="sweetalert.html">彈窗</a></li>
                <li class="nav-item"><a class="nav-link text-dark" href="moment.html">日期處理</a></li>
                <li class="nav-item"><a class="nav-link text-dark" href="three.html">圖形渲染</a></li>
                <li class="nav-item"><a class="nav-link text-dark" href="leaflet.html">地圖</a></li>
            </ul>
        </div>
    </div>
</nav>
`;

document.getElementById('navbar-placeholder').innerHTML = navbarHTML;
