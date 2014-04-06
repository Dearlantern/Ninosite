// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery.validate
//= require jquery.validate.additional-methods
//= require bootstrap
//= require_tree .

$(function() {

    $("#user_signup_form").validate({
        rules: {
            "query[name]":{
                required: true,
                minlength: 6
            },
            "query[email]":{
                required: true,
                email: true
            },
            "query[phone]":{
                required: true,
                minlength: 7
            }

        },
        messages: {
            "query[name]":{
                required: "Заполните поле!",
                minlength: "Минимальное количество символов:6"
            },
            "query[email]":{
                required: "Заполните поле!",
                email: "Требуется действительный email адрес"
            },
            "query[phone]":{
                required: "Заполните поле!",
                minlength: "Минимальное количество символов:7"
            }

        }
    });

    $('#myCarousel').carousel({
        interval: 5500
    })

    ymaps.ready(init);

    var myMap,
        myPlacemark;

        function init(){
            myMap = new ymaps.Map ("map", {
                center: [35.852916,14.465258],
                zoom: 12
            });

            myPlacemark = new ymaps.Placemark([55.74892, 37.6523], {
                hintContent: 'Malta',
                balloonContent: 'здесь  :)'
            });

            myMap.controls.add('mapTools');
            myMap.controls.add('typeSelector');
            myMap.controls.add('zoomControl');
            myMap.geoObjects.add(myPlacemark);
        }
});

