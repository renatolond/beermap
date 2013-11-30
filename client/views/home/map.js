Template.map.rendered = function() {
    if (! Session.get('map'))
        gmaps.initialize();

    Deps.autorun(function() {
        var places = [{id:1, lat:-22.9508554407987,lng:-43.18303942680359,title:"Café e Bar Águia dos Andes"}, {id:2, lat:-22.950713,lng:-43.182708, title:"Bar Odorico"}];
        Template.map.addPlaces(places);
    });
}

Template.map.addPlaces = function(places) {
        _.each(places, function(place) {
                // check if marker already exists
                if (!gmaps.markerExists('id', place.id))
                    gmaps.addMarker(place);

        });
        gmaps.calcBounds();
}

Template.map.destroyed = function() {
    Session.set('map', false);
}
