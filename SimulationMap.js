
// keep track of all open map overlays
var simulationMaps = new Array();

// and the main google map
var googleMap = '';

// and the shapes we have
var countyShapes = new Array();

// FIPS county mapping
var fipsIdToNodeId = new Object();

// one-time initialization
$(document).ready(function() {

    // setup the html for the maps tab
    var htmlString = '';

    htmlString += '<div id="googleMapDivId" style="position: absolute; top: 0px; bottom: 75px; left: 5px; right: 5px;"> </div>';
    htmlString += '<div class="slider"> <input type="text" id="id_slider_label" style="border:0; background-color:transparent; font-weight:bold;" /> <div id="id_slider"> </div> </div>';

    $('#map').html(htmlString);

    // setup the google map
    var mapCenterLatLng = new google.maps.LatLng(31.5, -100);

    var mapOptions = {
        zoom: 6,
        center: mapCenterLatLng,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    googleMap = new google.maps.Map(document.getElementById("googleMapDivId"), mapOptions);

    // setup the time slider
    $( "#id_slider" ).slider({
        range: false,
        min: 0,
        max: 365,
        values: [0],
        slide: function( event, ui ) {
            $( "#id_slider_label" ).val( "timestep: " + ui.values[ 0 ] );
            simulationUpdateTimestep(ui.values[0]);
        }
    });

    $( "#id_slider_label" ).val( "timestep: " + $( "#id_slider" ).slider( "values", 0 ) );

    // load the shapes
    $.ajax({
        url: rootUrl + 'shapes/counties/',
        success: function(data) {

            // this fills the countyShapes array directly
            eval(data);

            // create map polygon with default options for each shape
            $.each(countyShapes, function(index, shape) {
                countyShapes[index].polygon = new google.maps.Polygon({
                    paths: shape.coordinates,
                    strokeColor: "rgb(0,0,0)",
                    strokeOpacity: 0.5,
                    strokeWeight: 1,
                    fillColor: "rgb(255,255,255)",
                    fillOpacity: 0.2
                });

                countyShapes[index].polygon.setMap(googleMap);
            });
        }
    });
});

// reset all global variables that keep the state of the maps
function clearSimulationMaps()
{
    simulationMaps = new Array();
}

function redrawSimulationMaps()
{
    // redraw each map
    $.each(simulationMaps, function(smIndex, sm) {
        sm.redraw();
    });
}

function initializeSimulationMaps(simulationId)
{
    // clear existing simulation maps
    clearSimulationMaps();

    // build FIPS county id mapping
    $.getJSON('simulations/' + simulationId + '/nodes/', function(data) {

        $.each(data, function(key, val) {
            fipsIdToNodeId[val['fipsId']] = key;
        });

        // now, load the map
        new SimulationMap(simulationId);
    });
}

function SimulationMap(simulationId)
{
    this.redraw = function()
    {
        // recolor each polygon according to the current timestep
        // todo: need to handle FIPS county code here
        $.each(countyShapes, function(index, shape) {
            if(shape.polygon != undefined)
            {
                var nodeIndex = parseInt(fipsIdToNodeId[shape.fipsId]);

                shape.polygon.setOptions({fillColor:getColor(parseFloat(that.dataTable.getValue(simulationTimestep,nodeIndex+1)) / 0.01)});
            }
        });
    }

    this.drawMapCallback = function(response)
    {
        that.dataTable = response.getDataTable();
        that.redraw();
    }

    this.drawMap = function()
    {
        var url = 'simulations/' + that.simulationId + '/timeseries/*/infected/?fractions=1';
        var query= new google.visualization.Query(url);

        query.send(that.drawMapCallback);
    }

    // constructor actions

    // add to global array
    simulationMaps.push(this);

    // keep track of "this" for use in callbacks, since "this" won't refer to this object in those contexts
    var that = this;

    // currently bound simulation
    this.simulationId = simulationId;

    // keep track of dataTable for later use
    this.dataTable = 0;

    // draw the map on initialization
    this.drawMap();
}
