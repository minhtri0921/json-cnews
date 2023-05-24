var form = $('#contactform');

async function showCatList() {
    const selectElement = $('select[name="cat"]');
    var listCat = await axios.get('http://localhost:3000/cat');
    listCat.data.forEach(function (cat) {
        var htmlOptions = `<option value='${cat.id}'>${cat.name}</option>`;
        selectElement.append(htmlOptions);
    })
}
showCatList();

form.on("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData();
    for (const el of e.target) {
        if (el.files) {
            formData.append("file", el.files[0]);
        } else if (el.value) {
            formData.append(el.name, el.value);
        }
    }

    try {
        var results = await axios({
            method: "POST",
            url: "http://localhost:3000/news/add",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        });
        //handle success
        // console.log('results: ', results);
        location = 'index.html';
    } catch (err) {
        console.log('Lỗi ' + err);
        var errorElement = $('#error');
        errorElement.text('Xảy ra lỗi: ' + err);
        $(errorElement).attr('style', 'color: red; font-style: italic;');
    }

})