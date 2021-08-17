module.exports.iniciaChat = function(application, req, res){

    var dadosForm = req.body;

    /* Validando o campo usando o atributo Name */
    req.assert('apelido', 'Nome ou apelido é obrigatorio').notEmpty();
    req.assert('apelido', 'Nome ou apelido deve conter entre 3 e 15 caracteres').len(3, 15);

    var erros = req.validationErrors();

    if(erros){
        res.render("index", {validacao : erros});
        return;
    }


    res.render("chat");

}