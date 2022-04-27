angular.module('alzheimer-app')

    .factory('Memory', function ($state) {

        function isLocalStorageNameSupported() {
            try {
                var supported = window.localStorage;
                if (supported) {
                    window.localStorage.setItem("storage", "");
                    window.localStorage.removeItem("storage");
                    return true;
                }
                return false;
            }
            catch(err) {
                if(window.localStorage.length==0 && err.code === DOMException.QUOTA_EXCEEDED_ERR) {
                    /*
                     * User in private mode
                     * Do nothing
                     */

                    return false;
                }
                throw err;
            }
        }


        var ls =  isLocalStorageNameSupported() ? window.localStorage : {};

        var stateData = {};

        return {

            set: function (key, value) {

                ls[key] = value;

            },

            get: function (key) {

                return ls[key];

            },

            getJSON: function(key) {

                var json = ls[key];

                if(json) {

                    return(JSON.parse(json));

                }

                return {};

            },

            setJSON: function(key, value) {

                ls[key] = JSON.stringify(value, function( key, value ) {
                        
                    if( key === "$$hashKey") {
                        return undefined;
                    }

                    return value;
                });

            },

            getSetJSON: function(key, value) {
                if (ls[key]) {
                    return JSON.parse(ls[key]);
                }
                ls[key] = JSON.stringify(value);
                return value;
            },

            unSet: function (key) {

                delete ls[key];

            },

            getSet: function (key, def) {

                if (ls[key]) {
                    return ls[key];
                }

                ls[key] = def;
                return ls[key];

            },

            goWithData: function(state, params, data) {

                stateData[state] = data;

                $state.go(state, params);

            },

            getStateData: function(state) {

                if(stateData[state]) {

                    return stateData[state];

                }

                return null;

            }

        };

    })