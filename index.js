
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registered!");
        console.log(registration);
    }).catch(err => {
        console.log("SW Registration Failed!");
        console.log(err);
    })
}

mapboxgl.accessToken = 'pk.eyJ1IjoiYWRpdHlhMjAyMyIsImEiOiJja2tteDRzMmIxdmphMnZwZ28zNTBzYmgyIn0.1P-bsCr_lbQcBBFA4i8IMQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/aditya2023/ckkqx2u5f2j1n18mrimqk85ri'
});

map.addControl(new mapboxgl.NavigationControl());
var a = 0;

function goto() {
    if (a === 0) {
        a = 1;
        map.addControl(
            new MapboxDirections({
                accessToken: mapboxgl.accessToken
            }),
            'bottom-right'
        );
    }
}
var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
});
document.getElementById('geocoder').appendChild(geocoder.onAdd(map));




var geojson = {
    type: 'FeatureCollection',
    features: [{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [82.98798, 25.26588]
            },
            properties: {
                title: '<p style="font-size:20px;font-style:italic;font-weight:600;color:#4287f5;">NEW VISHWANATH TEMPLE BHU</p>',
                description: 'VARANASI , UTTAR PRADESH',
                url: '<img style="width:220px;height:200px" src="https://res.cloudinary.com/dajhwrmig/image/upload/v1614067117/100b1f000001gsmcdFC32_C_750_500_uhdlsv.jpg">'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [83.02453, 25.26955]
            },
            properties: {
                title: '<p  style="font-size:20px;font-style:italic;font-weight:600;color:#4287f5;" >RAMNAGAR FORT </p>',
                description: 'VARANASI UTTAR PRADESH',
                url: '<img style="width:220px;height:200px" src="https://res.cloudinary.com/dajhwrmig/image/upload/v1614067258/ramnagar-fort-750x337_xeorfh.jpg">'
            }

        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [82.99991, 25.28194]
            },
            properties: {
                title: '<p  style="font-size:20px;font-style:italic;font-weight:600;color:#4287f5;">SANKAT MOCHAN TEMPLE</p>',
                description: 'VARANASI UTTAR PRADESH',
                url: '<img style="width:220px;height:200px" src="https://res.cloudinary.com/dajhwrmig/image/upload/v1614067579/SankatMochanHanumanTemple_20200228154607_20200228154630_ds6vfo.jpg">'
            }

        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [83.00619, 25.28914]
            },
            properties: {
                title: '<p  style="font-size:20px;font-style:italic;font-weight:600;color:#4287f5;">ASSI GHAT</p>',
                description: 'VARANASI UTTAR PRADESH',
                url: '<img style="width:220px;height:200px" src="https://res.cloudinary.com/dajhwrmig/image/upload/v1614067723/a-view-of-the-ghats-taken_hgybyv.jpg">'
            }

        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [82.99927, 25.28849]
            },
            properties: {
                title: '<p  style="font-size:20px;font-style:italic;font-weight:600;color:#4287f5;">DURGA TEMPLE</p>',
                description: 'VARANASI UTTAR PRADESH',
                url: '<img style="width:220px;height:200px" src="https://res.cloudinary.com/dajhwrmig/image/upload/v1614067819/Durgakund-temple-varanasi-package_caally.jpg">'
            }

        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [83.00722, 25.29644]
            },
            properties: {
                title: '<p  style="font-size:20px;font-style:italic;font-weight:600;color:#4287f5;" >SHIVALA GHAT</p>',
                description: 'VARANASI UTTAR PRADESH',
                url: '<img style="width:220px;height:200px" src="https://res.cloudinary.com/dajhwrmig/image/upload/v1614068159/925752603s_jbahpa.jpg">'
            }

        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [83.00730, 25.29896]
            },
            properties: {
                title: '<p  style="font-size:20px;font-style:italic;font-weight:600;color:#4287f5;">KEDAR GHAT</p>',
                description: 'VARANASI UTTAR PRADESH',
                url: '<img style="width:220px;height:200px" src="https://res.cloudinary.com/dajhwrmig/image/upload/v1614068159/925752603s_jbahpa.jpg">'
            }

        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [83.01039, 25.30629]
            },
            properties: {
                title: '<p  style="font-size:20px;font-style:italic;font-weight:600;color:#4287f5;">DASASWAMEDH GHAT</p>',
                description: 'VARANASI UTTAR PRADESH',
                url: '<img style="width:220px;height:200px" src="https://res.cloudinary.com/dajhwrmig/image/upload/v1614068260/1-7_rd3rjd.jpg">'
            }

        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [83.01398, 25.31072]
            },
            properties: {
                title: '<p  style="font-size:20px;font-style:italic;font-weight:600;color:#4287f5;">MANI KARNIKA GHAT</p>',
                description: 'VARANASI UTTAR PRADESH',
                url: '<img style="width:220px;height:200px" src="https://res.cloudinary.com/dajhwrmig/image/upload/v1614068417/OJZzpSqJPEK3cCmwK_OEZ3e5TCpUZEQokgikN3deJ9G0cHx6FHAOXhO_w3O9dYfGKDlwOU6jSUIGBnsGeAtiseUcr4wdqdlfM6FetF9eSNJyWLvKhX22m2JhcOQrmD3BCDLBiz8rtE5susyjNmUv9hEefuAz1TH287FipfHDFxF8Kjv1rjuuVesvCt1-_18FREoFsqnSdoNa_hg9o8z.jpg">'
            }

        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [83.01060, 25.31073]
            },
            properties: {
                title: '<p  style="font-size:20px;font-style:italic;font-weight:600;color:#4287f5;">KASHI VISHWANATH TEMPLE</p>',
                description: 'VARANASI UTTAR PRADESH',
                url: '<img style="width:220px;height:200px" src="https://res.cloudinary.com/dajhwrmig/image/upload/v1614068623/Kashi_2BVishwanath_2BTemple_r37mw6.jpg">'
            }

        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [83.01779, 25.31522]
            },
            properties: {
                title: '<p  style="font-size:20px;font-style:italic;font-weight:600;color:#4287f5;">ALAMGIR MOSQUE</p>',
                description: 'VARANASI UTTAR PRADESH',
                url: '<img style="width:220px;height:200px" src="https://res.cloudinary.com/dajhwrmig/image/upload/v1614067385/1000X650-4_xls1cy.jpg">'
            }

        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [82.88321, 25.12746]
            },
            properties: {
                title: '<p  style="font-size:20px;font-style:italic;font-weight:600;color:#4287f5;">CHUNAR FORT VARANASI</p>',
                description: 'VARANASI UTTAR PRADESH',
                url: '<img style="width:220px;height:200px" src="https://res.cloudinary.com/dajhwrmig/image/upload/v1614068794/Chunar-Fort_kgliwr.jpg">'
            }

        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [83.02352, 25.37944]
            },
            properties: {
                title: '<p  style="font-size:20px;font-style:italic;font-weight:600;color:#4287f5;">BHARAT KALA BHAVAN MEUSEUM</p>',
                description: 'VARANASI UTTAR PRADESH',
                url: '<img style="width:220px;height:200px" src="https://res.cloudinary.com/dajhwrmig/image/upload/v1614068942/Bharat_Kala_Bhavan_Museum_2C_Banaras_Hindu_University_2C_Varanasi_tq6bns.jpg">'
            }

        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [83.02455, 25.38075]
            },
            properties: {
                title: '<p  style="font-size:20px;font-style:italic;font-weight:600;color:#4287f5;">DHAMEK STUPA</p>',
                description: 'VARANASI UTTAR PRADESH',
                url: '<img style="width:220px;height:200px" src="https://res.cloudinary.com/dajhwrmig/image/upload/v1614069052/the-stupa_pqik6h.jpg">'
            }

        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [83.02832, 25.37965]
            },
            properties: {
                title: '<p  style="font-size:20px;font-style:italic;font-weight:600;color:#4287f5;">TIBETIAN TEMPLE</p>',
                description: 'VARANASI UTTAR PRADESH',
                url: '<img style="width:220px;height:200px" src="https://res.cloudinary.com/dajhwrmig/image/upload/v1614069132/tibetan-temple-varanasi-images_nxjewn.jpg">'
            }

        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [83.02670, 25.38129]
            },
            properties: {
                title: '<p  style="font-size:20px;font-style:italic;font-weight:600;color:#4287f5;">SARNATH DEER PARK ZOO</p>',
                description: 'VARANASI UTTAR PRADESH',
                url: '<img style="width:220px;height:200px" src="images/1.jpg">'
            }

        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [82.99012, 25.26519]
            },
            properties: {
                title: '<p  style="font-size:20px;font-style:italic;font-weight:600;color:#4287f5;">BANRAS HINDU UNIVERSITY</p>',
                description: 'VARANASI UTTAR PRADESH',
                url: '<img style="width:220px;height:200px" src="https://res.cloudinary.com/dajhwrmig/image/upload/v1614069430/74012-cvanuaxays-1525433129-696x365_ocputu.jpg">'
            }

        },

    ]
};

// add markers to map
geojson.features.forEach(function(marker) {

    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({
                offset: 25
            }) // add popups
            .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.url + '</p>'))
        .addTo(map);
});



function optimal() {

    var draw = new MapboxDraw({
        // Instead of showing all the draw tools, show only the line string and delete tools
        displayControlsDefault: false,
        controls: {
            line_string: true,
            trash: true
        },
        styles: [
            // Set the line style for the user-input coordinates
            {
                "id": "gl-draw-line",
                "type": "line",
                "filter": ["all", ["==", "$type", "LineString"],
                    ["!=", "mode", "static"]
                ],
                "layout": {
                    "line-cap": "round",
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "#438EE4",
                    "line-dasharray": [0.2, 2],
                    "line-width": 4,
                    "line-opacity": 0.7
                }
            },
            // Style the vertex point halos
            {
                "id": "gl-draw-polygon-and-line-vertex-halo-active",
                "type": "circle",
                "filter": ["all", ["==", "meta", "vertex"],
                    ["==", "$type", "Point"],
                    ["!=", "mode", "static"]
                ],
                "paint": {
                    "circle-radius": 12,
                    "circle-color": "#FFF"
                }
            },
            // Style the vertex points
            {
                "id": "gl-draw-polygon-and-line-vertex-active",
                "type": "circle",
                "filter": ["all", ["==", "meta", "vertex"],
                    ["==", "$type", "Point"],
                    ["!=", "mode", "static"]
                ],
                "paint": {
                    "circle-radius": 8,
                    "circle-color": "#438EE4",
                }
            },
        ]
    });

    // Add the draw tool to the map
    map.addControl(draw)

    // Use the coordinates you drew to make the Map Matching API request
    function updateRoute() {
        // Set the profile
        var profile = "driving";
        // Get the coordinates that were drawn on the map
        var data = draw.getAll();
        var lastFeature = data.features.length - 1;
        var coords = data.features[lastFeature].geometry.coordinates;
        // Format the coordinates
        var newCoords = coords.join(';')
        // Set the radius for each coordinate pair to 25 meters
        var radius = [];
        coords.forEach(element => {
            radius.push(25);
        });
        getMatch(newCoords, radius, profile);
    }

    // Make a Map Matching request
    function getMatch(coordinates, radius, profile) {
        // Separate the radiuses with semicolons
        var radiuses = radius.join(';')
        // Create the query
        var query = 'https://api.mapbox.com/matching/v5/mapbox/' + profile + '/' + coordinates + '?geometries=geojson&radiuses=' + radiuses + '&steps=true&access_token=' + mapboxgl.accessToken;
        console.log(query)
        $.ajax({
            method: 'GET',
            url: query
        }).done(function(data) {
            var coords = data.matchings[0].geometry;
            // Draw the route on the map
            addRoute(coords);
            getInstructions(data.matchings[0]);
        });
    }


    function addRoute(coords) {
        // If a route is already loaded, remove it
        if (map.getSource('route')) {
            map.removeLayer('route')
            map.removeSource('route')
        } else { // Add a new layer to the map
            map.addLayer({
                "id": "route",
                "type": "line",
                "source": {
                    "type": "geojson",
                    "data": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": coords
                    }
                },
                "layout": {
                    "line-join": "round",
                    "line-cap": "round"
                },
                "paint": {
                    "line-color": "#03AA46",
                    "line-width": 8,
                    "line-opacity": 0.8
                }
            });
        };
    }




    function getInstructions(data) {
        // Target the sidebar to add the instructions
        var directions = document.getElementById('directions')
        var legs = data.legs;
        var tripDirections = [];
        // Output the instructions for each step of each leg in the response object
        for (var i = 0; i < legs.length; i++) {
            var steps = legs[i].steps;
            for (var j = 0; j < steps.length; j++) {
                tripDirections.push('<br><li>' + steps[j].maneuver.instruction) + '</li>';
            }
        }
        directions.innerHTML = '<br><h2>Trip duration: ' + Math.floor(data.duration / 60) + ' min.</h2>' + tripDirections;
    }

    let pElement = document.createElement("p");
    pElement.textContent = "Draw your route using the draw tools on the right. To get the most accurate route match, draw points at regular intervals.";
    pElement.classList.add("info");
    let containerElement = document.getElementById("myContainer");
    containerElement.classList.add("info-box");
    containerElement.appendChild(pElement);


    function removeRoute() {
        if (map.getSource('route')) {
            map.removeLayer('route');
            map.removeSource('route');
        } else {
            return;
        }
    }
    map.on('draw.create', updateRoute);
    map.on('draw.update', updateRoute);
    map.on('draw.delete', removeRoute);


}


function optimal1() {
    var truckLocation = [83.00013, 25.32055];
    var warehouseLocation = [83.00013, 25.32055];
    var lastQueryTime = 0;
    var lastAtRestaurant = 0;
    var keepTrack = [];
    var currentSchedule = [];
    var currentRoute = null;
    var pointHopper = {};
    var pause = true;
    var speedFactor = 50;

    mapboxgl.accessToken = 'pk.eyJ1IjoiYWRpdHlhMjAyMyIsImEiOiJja2tteDRzMmIxdmphMnZwZ28zNTBzYmgyIn0.1P-bsCr_lbQcBBFA4i8IMQ';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/aditya2023/ckkqx2u5f2j1n18mrimqk85ri', // stylesheet location
        center: truckLocation, // starting position
        zoom: 12
    });


    var warehouse = turf.featureCollection([turf.point(warehouseLocation)]);
    var dropoffs = turf.featureCollection([]);
    var nothing = turf.featureCollection([]);
    map.on('load', function() {
        var marker = document.createElement('div');
        marker.classList = 'truck';

        // Create a new marker
        truckMarker = new mapboxgl.Marker(marker)
            .setLngLat(truckLocation)
            .addTo(map);
        map.addLayer({
            id: 'warehouse-symbol',
            type: 'symbol',
            source: {
                data: warehouse,
                type: 'geojson'
            },


        });

        map.addLayer({
            id: 'dropoffs-symbol',
            type: 'symbol',
            source: {
                data: dropoffs,
                type: 'geojson'
            },
            layout: {
                'icon-allow-overlap': true,
                'icon-ignore-placement': true,
                'icon-image': 'marker-15',
            }
        });

        map.on('click', function(e) {
            // When the map is clicked, add a new drop-off point
            // and update the `dropoffs-symbol` layer
            newDropoff(map.unproject(e.point));
            updateDropoffs(dropoffs);
        });

        map.addSource('route', {
            type: 'geojson',
            data: nothing
        });

        map.addLayer({
            id: 'routeline-active',
            type: 'line',
            source: 'route',
            layout: {
                'line-join': 'round',
                'line-cap': 'round'
            },
            paint: {
                'line-color': 'black',
                'line-width': [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    12, 3,
                    22, 40
                ]
            }
        }, 'waterway-label');

        map.addLayer({
            id: 'routearrows',
            type: 'symbol',
            source: 'route',
            layout: {
                'symbol-placement': 'line',
                'text-field': '>>',
                'text-size': [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    12, 24,
                    22, 160
                ],
                'symbol-spacing': [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    12, 30,
                    22, 160
                ],
                'text-keep-upright': false
            },
            paint: {
                'text-color': 'red',
                'text-halo-color': 'hsl(55, 11%, 96%)',
                'text-halo-width': 3
            }
        }, 'waterway-label');

    });


    function newDropoff(coords) {
        // Store the clicked point as a new GeoJSON feature with
        // two properties: `orderTime` and `key`
        var pt = turf.point(
            [coords.lng, coords.lat], {
                orderTime: Date.now(),
                key: Math.random()
            }
        );
        dropoffs.features.push(pt);
        pointHopper[pt.properties.key] = pt;

        // Make a request to the Optimization API
        $.ajax({
            method: 'GET',
            url: assembleQueryURL(),
        }).done(function(data) {
            // Create a GeoJSON feature collection
            var routeGeoJSON = turf.featureCollection([turf.feature(data.trips[0].geometry)]);

            // If there is no route provided, reset
            if (!data.trips[0]) {
                routeGeoJSON = nothing;
            } else {
                // Update the `route` source by getting the route source
                // and setting the data equal to routeGeoJSON
                map.getSource('route')
                    .setData(routeGeoJSON);
            }

            if (data.waypoints.length === 12) {
                window.alert('Maximum number of points reached. Read more at docs.mapbox.com/api/navigation/#optimization.');
            }
        });
    }

    function updateDropoffs(geojson) {
        map.getSource('dropoffs-symbol')
            .setData(geojson);
    }


    function assembleQueryURL() {

        // Store the location of the truck in a variable called coordinates
        var coordinates = [truckLocation];
        var distributions = [];


        // Create an array of GeoJSON feature collections for each point
        var restJobs = objectToArray(pointHopper);

        // If there are any orders from this restaurant
        if (restJobs.length > 0) {

            // Check to see if the request was made after visiting the restaurant
            var needToPickUp = restJobs.filter(function(d, i) {
                return d.properties.orderTime > lastAtRestaurant;
            }).length > 0;

            // If the request was made after picking up from the restaurant,
            // Add the restaurant as an additional stop
            if (needToPickUp) {
                var restaurantIndex = coordinates.length;
                // Add the restaurant as a coordinate
                coordinates.push(warehouseLocation);
                // push the restaurant itself into the array
                keepTrack.push(pointHopper.warehouse);
            }

            restJobs.forEach(function(d, i) {
                // Add dropoff to list
                keepTrack.push(d);
                coordinates.push(d.geometry.coordinates);
                // if order not yet picked up, add a reroute
                if (needToPickUp && d.properties.orderTime > lastAtRestaurant) {
                    distributions.push(restaurantIndex + ',' + (coordinates.length - 1));
                }
            });
        }

        // Set the profile to `driving`
        // Coordinates will include the current location of the truck,
        return 'https://api.mapbox.com/optimized-trips/v1/mapbox/driving/' + coordinates.join(';') + '?distributions=' + distributions.join(';') + '&overview=full&steps=true&geometries=geojson&source=first&access_token=' + mapboxgl.accessToken;
    }

    function objectToArray(obj) {
        var keys = Object.keys(obj);
        var routeGeoJSON = keys.map(function(key) {
            return obj[key];
        });
        return routeGeoJSON;
    }


    let containerElement = document.getElementById("myContainer");
    containerElement.classList.remove("info-box");
}