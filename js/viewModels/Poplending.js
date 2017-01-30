/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton'],
    function (oj, ko, $)
    {
        function viewModel() {
            var self = this;
            self.partyData = ko.observable();
            self.router = oj.Router.rootInstance;
            self.buttonClick1 = function (data, event) {
                self.router.stateId('party');
                return true;
            }
            self.buttonClick2 = function (data, event) {
                self.router.stateId('monitor');
                return true;
            }
            self.buttonClick3 = function (data, event) {
                self.router.stateId('development');
                return true;
            }
            self.buttonClick4 = function (data, event) {
                self.router.stateId('sampleParty');
                return true;
            }       
        }
        return viewModel;
    });

