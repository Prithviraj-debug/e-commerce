const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
    <p>developed by &copy; Prithviraj. All rights reserved.</p>
    <img src="./img/bIb.png" alt="" class="logo">
</div>

<!-- <p class="footer-title">about company</p>
<p class="info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatem ducimus impedit. Beatae molestias recusandae ab voluptatem, earum ipsum velit.</p>
<p class="info">support emails - brand@isbrand.com</p>
<p class="info">telephone - 0690 6900 0609</p>

<div class="footer-social-container">
    <div>
        <a href="#" class="social-link">terms & services</a>
        <a href="#" class="social-link">privacy page</a>
    </div>
    <div>
        <a href="#" class="social-link">instagram</a>
        <a href="#" class="social-link">facebook</a>
        <a href="#" class="social-link">twitter</a>
    </div>
</div> -->
    `;
}

createFooter();