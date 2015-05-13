angular.module('gestor.services', [])
.service('agencyData', function (){
	this.agencyId = {};
	
	
	this.setId = function (id){
		this.agencyId = id;
	}
	
	this.getId = function (){
		return this.agencyId
	}
	
	
	
})
.service('apiCalls', function (){
	
	//Returns all the agencies from the database.
	function GetAllAgencies() {
		$.get("https://hackaton2015.azure-mobile.net/tables/agencia", function (data) {
			$.each(data, function(key, value) { 
				console.log("Id: " + value.id + " " + "Nombre: " + value.nombre);
		    });
        });
	}

//Returns all the gestions and periods from the database.
	function GetAllGestionPeriods() {
		$.get("https://hackaton2015.azure-mobile.net/api/gestion_periodo", function (data) {
			$.each(data, function(key, value) { 
				console.log("Nombre: " + value.nombre + " " + "Fecha Desde: " + value.fechadesde + " " + "Fecha Hasta: " + value.fechahasta);
		    });
        });
	}

//Get gestion by name.
	function SearchGestionByAgencyId(agencyId) {
		var url = "https://hackaton2015.azure-mobile.net/api/gestion?agenciaid=" + agencyId;
		$.get(url, function (data) {
			$.each(data, function(key, value) { 
				console.log("Nombre: " + value.nombre);
			});
		})
	}

	
})
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  },{
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
