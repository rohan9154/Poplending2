/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojchart'],
    function (oj, ko, $)
    {
        function viewModel() {
            var self = this;
            self.pieSeriesValue = ko.observableArray(
                        [{name: "Health Monitoring", items: [8]},
                            {name: "Development", items: [7]}
                            ]);
            var converterFactory = oj.Validation.converterFactory('number');
            self.percentConverter = converterFactory.createConverter({style: 'decimal', maximumFractionDigits: 0});
            
            self.dashboardItems = ko.observableArray([
                    
                    {"name": "Item9", "title": "Attrition History", "target": "me", "sizeClass": "oj-masonrylayout-tile-1x1"}
                    
                ]);
            
            
        }
        return viewModel;
    });

