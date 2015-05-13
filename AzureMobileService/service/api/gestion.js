exports.post = function(request, response) {
    // Use "request.service" to access features of your mobile service, e.g.:
    //   var tables = request.service.tables;
    //   var push = request.service.push;

    response.send(statusCodes.OK, { message : 'Hello World!' });
};

exports.get = function(request, response) {
    
    request.service.mssql.query("Select * from gestion where gestion.agenciaid = '" + request.query.agenciaid + "'", { 
        success: function(resp){
            response.send(statusCodes.OK, resp);
        }   
    });  
};