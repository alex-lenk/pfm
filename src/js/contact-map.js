/* ----------------------------------------------------------- */
/*  Contact Map
/* -----------------------------------------------------------*/

$(document).ready(function () {
    if ($('#map').length > 0) {

        var contactmap = {
            lat: 55.776811,
            lng: 37.63972
        };

        $('#map')
            .gmap3({
                zoom: 16,
                center: contactmap,
                scrollwheel: false,
                mapTypeId: "shadeOfGrey",
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
                }
            })

            .styledmaptype(
                "shadeOfGrey", [

                    {
                        "featureType": "administrative",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                            "color": "#fefefe"
                        }, {
                            "lightness": 17
                        }, {
                            "weight": 1.2
                        }]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#fefefe"
                        }, {
                            "lightness": 20
                        }]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#f2f2f2"
                        }, {
                            "lightness": 19
                        }]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "saturation": 36
                        }, {
                            "color": "#333333"
                        }, {
                            "lightness": 40
                        }]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text.stroke",
                        "stylers": [{
                            "visibility": "on"
                        }, {
                            "color": "#ffffff"
                        }, {
                            "lightness": 16
                        }]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#f5f5f5"
                        }, {
                            "lightness": 21
                        }]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#ffffff"
                        }, {
                            "lightness": 16
                        }]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#ffffff"
                        }, {
                            "lightness": 18
                        }]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                            "color": "#ffffff"
                        }, {
                            "lightness": 29
                        }, {
                            "weight": 0.2
                        }]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#ffffff"
                        }, {
                            "lightness": 17
                        }]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#f5f5f5"
                        }, {
                            "lightness": 20
                        }]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#e9e9e9"
                        }, {
                            "lightness": 17
                        }]
                    }
                ], {
                    name: "HQ"
                }
            )

            .marker({
                position: contactmap,
                icon: 'img/marker.svg'
            })

            .infowindow({
                position: contactmap,
                content: "129090, Москва, Грохольский переулок, д. 28"
            })

            .then(function (infowindow) {
                var map = this.get(0);
                var marker = this.get(1);
                marker.addListener('click', function () {
                    infowindow.open(map, marker);
                });
            });
    }
});
