var Sql = require("../db/sql.js")
exports.getData = function (req,res) {
    var Query = "select razao_soc_clie, cpf_cnpj_clie from cliente"
    let promise = Sql.request(Query);
    promise.then(function (result) {
        res.json(result);
    },
    function (err) {
        res.send(err);
    });
}