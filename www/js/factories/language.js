'use strict';

angular.module('alzheimer-app')

	.factory('Language', function (Memory, $translate) {

        return {

            use: function(language) {

                if (language) {

                    $translate.use(language);

                    Memory.set('language', language);

                }

                return $translate.use();

            }

        };

	});