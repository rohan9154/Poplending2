/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your application specific code will go here
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojrouter', 'ojs/ojknockout', 'ojs/ojarraytabledatasource',
    'ojs/ojoffcanvas'],
        function (oj, ko) {
            function ControllerViewModel() {
                var self = this;
                self.router = oj.Router.rootInstance;
                self.router.configure({
                    'Poplending': {label: 'pop', value: 'Poplending', isDefault: true},
                    'party': {label: 'search', value: 'party'},
                    'development': {label: 'dev', value: 'development' },
                    'monitor': {label: 'monitor', value: 'monitor'},
                    'sampleParty': {label: 'sample', value: 'sampleParty'}         
                });
                oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();
            }
            return new ControllerViewModel();
        }
);
