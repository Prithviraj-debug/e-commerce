var $brand = 'brandisbrand';

const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">laptops</a></li>
            <li class="link-item"><a href="#" class="link">macs</a></li>
            <li class="link-item"><a href="#" class="link">desktops</a></li>
            <li class="link-item"><a href="#" class="link">components and accessories</a></li>
        </ul>
        <div class="nav">
            <div class="brand-logo">
                <p>brandisbrand</p>
            </div>
            <div class="nav-items">
                <div class="search">
                    <input type="search" class="search-box" placeholder="search brand, product">
                    <i class="fas fa-search"></i>
                </div>
                <a href="#"><i class="fas fa-user-circle"></i></a>
                <a href="#"><i class="fas fa-shopping-cart"></i></a>
            </div>
        </div>

    `;
}

createNav();