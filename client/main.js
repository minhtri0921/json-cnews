async function display() {
    let listNews = await axios('http://localhost:3000/pages')
    listNews = listNews.data
    console.log(listNews);
    let str = ''
    for (const news of listNews) {
        str += renderNews(news)
    }
    $("ul#listNews").html(str)
}
display()
function renderNews(el) {
    return `
    <div class="item">
            <h2><a href="detail.html" title="">${el.content}</a></h2>
            <img src="${el.img}" alt="" width="585" height="156" />
            <div class="clr"></div>
            <p>${el.detail}</p>
          </div>
    `
}
async function displayDanhMuc() {
    let danhmuc = await axios('http://localhost:3004/categories')
    danhmuc = danhmuc.data

    let str = ''
    for (const el of danhmuc) {
        str += renderDanhMuc(el)
    }
    $("ul#danhmuc").html(str)
    console.log(str);
}
displayDanhMuc()
function renderDanhMuc(el) {
    return `
    <li><a href="cat.html">${el.title}</a></li>
  `
}
