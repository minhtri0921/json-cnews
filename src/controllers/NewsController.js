const mysql = require('mysql');

const configDB = {
    host: "localhost",
    user: "root",
    password: "123456",
    database: "cnews"
};

class NewsController {

    // [GET] /news
    async getListNews(req, res) {
        try {
            var conn = mysql.createConnection(configDB);

            const sqlSelect = "SELECT * FROM news";
            const listNews = await new Promise((resolve, reject) => {
                conn.query(sqlSelect, function (err, results) {
                    if (err) reject(err);
                    resolve(results);
                });
            });
            res.status(200).send(listNews);
        } catch (err) {
            res.status(500).send(err);
        } finally {
            conn.end();
        }
    }

    // [GET] /news/newsbycat
    // async getListNewsByCat(req, res) {
    //     var catId = req.query.cid;
    //     try {
    //         const listNewsByCat = await News.find({ cat_id: catId });
    //         res.status(200).json(listNewsByCat);
    //     } catch (err) {
    //         res.status(500).json(err);
    //     } finally {
    //         // db.close();
    //     }
    // }

    // // [GET] /news/newsbyid
    // async getNewsById(req, res) {
    //     var id = req.query.id;
    //     try {
    //         const newsById = await News.findOne({ id });
    //         res.status(200).json(newsById);
    //     } catch (err) {
    //         res.status(500).json(err);
    //     } finally {
    //         // db.close();
    //     }
    // }

    // // [POST] /news/contact
    // async postContact(req, res) {
    //     const { name, phone, web, gender, content, file } = req.form_data;
    //     function generateUuid() {
    //         return 'xxxx-xxxx-xxx-xxxx'.replace(/[x]/g, function (c) {
    //             var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    //             return v.toString(16);
    //         });
    //     }
    //     try {
    //         const newBook = await Contact.create({
    //             id: generateUuid(),
    //             name,
    //             phone,
    //             web,
    //             gender,
    //             content,
    //             picture: file
    //         });
    //         res.status(200).send(newBook);
    //     } catch (err) {
    //         res.status(500).send(err);
    //     } finally {
    //         // db.close();
    //     }
    // }
}

module.exports = new NewsController();
