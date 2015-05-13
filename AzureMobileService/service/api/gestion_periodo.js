exports.post = function(request, response) {
    // Use "request.service" to access features of your mobile service, e.g.:
    //   var tables = request.service.tables;
    //   var push = request.service.push;

    response.send(statusCodes.OK, { message : 'Hello World!' });
};

exports.get = function(request, response) {
    //  "select *, [gestion].nombre from [periodo] inner JOIN [gestion]  on [periodo].id = [gestion].agenciaid"
    request.service.mssql.query("select * from [hackaton2015].periodo join [hackaton2015].gestion on periodo.gestionid = gestion.id", {
        success: function(data) {
           response.send(statusCodes.OK, data); 
        }
    })
    
    
    //response.send(statusCodes.OK, { message : 'Hello World!' });
};