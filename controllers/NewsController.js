const mysql2 = require('mysql2')
var configDB = {
    host: 'localhost',
    user: "root",
    password: "mt2109",
    database: 'cnews'
};

class NewsController {


    async index(req, res) {
        try {
            var con = mysql2.createConnection(configDB);// Tạo connection
            var news = await new Promise((resolve, rejects) => {
                con.query('SELECT * FROM news', function (err, result) {
                    if (err) rejects(err);
                    resolve(result)
                })

            })
            res.status(200).send(news);

        } catch (err) {
            res.status(500).send(err);
        } finally {
            con.end();// Đóng connection
        }
    }
    async getCategories(req, res) {
        try {
            var con = mysql2.createConnection(configDB);// Tạo connection
            var categories = await new Promise((resolve, rejects) => {
                con.query('SELECT * FROM danhmuc', function (err, result) {
                    if (err) rejects(err);
                    resolve(result)
                })

            })
            res.status(200).send(categories);

        } catch (err) {
            res.status(500).send(err);
        } finally {
            con.end();// Đóng connection
        }
    }

}

module.exports = new NewsController();