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
                        [{name: "Not Fitting into a Team", items: [2]},
                            {name: "No Career Progression", items: [2]},
                            {name: "Salary", items: [4]},
                            {name: "Seeking New Skills", items: [3]},
                            {name: "Personal/Family Reasons", items: [3]},
                            {name: "Work Environment", items: [1]}
                        ]);
            var converterFactory = oj.Validation.converterFactory('number');
            self.percentConverter = converterFactory.createConverter({style: 'decimal', maximumFractionDigits: 0});
            
            self.dashboardItems = ko.observableArray([
                    
                    {"name": "Item9", "title": "Attrition History", "target": "me", "sizeClass": "oj-masonrylayout-tile-1x1"}
                    
                ]);
            
            
        }
        return viewModel;
    });

