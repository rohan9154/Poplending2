define(['ojs/ojcore', 'ojs/ojmodel', 'knockout'], function (oj, ko) {

    //var partyid =ko.observable(this.partyid());
//    createPartyModel1: function() {
//        $.get('http://129.146.2.73:32766/party/1', function(data, status) {
//                    console.log(data);
//                }, 'json');
//        
//    } 


    var PartyFactory = {

        //partyid: ko.observable(this.partyId),
        resourceUrl: "http://129.146.23.163:32035/party/",

        createPartyModel: function (partyId, partyname) {
            console.log(partyId);
            console.log(partyname);
            

//        if(partyId === undefined || partyId > 499) {
//                
//                return false;
//            }
            if (partyname !== null) {
                    var Party = oj.Model.extend({urlRoot: this.resourceUrl + "match/" + partyname,
                        idAttribute: partyId});
                    return new Party();
            } else if (partyId !== null) {
                    var Party = oj.Model.extend({urlRoot: this.resourceUrl + partyId,
                        idAttribute: partyId});
                    return new Party();
            }

        }
    }
    return PartyFactory;
});