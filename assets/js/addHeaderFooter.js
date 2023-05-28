document.onload = function addHeaderFooter() {
    let headerHTML = "header.html"
    let header = document.getElementById('header').innerHTML = headerHTML;
    let footer = document.getElementById('footer');


}
/*
async function addFooter() {
    const resp = await fetch("footer.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("beforeend", html);
}*/