function showPage(pageId) {
    //to hide pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    //to show selected page
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add('active');
    }
}

//defaultly show home page
window.onload = () => showPage('home');