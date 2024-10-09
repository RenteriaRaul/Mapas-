var wms_layers = [];


        var lyr_MapzenGlobalTerrain_0 = new ol.layer.Tile({
            'title': 'Mapzen Global Terrain',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelite_2 = new ol.layer.Tile({
            'title': 'Google Satelite ',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Puntos_colima_3 = new ol.format.GeoJSON();
var features_Puntos_colima_3 = format_Puntos_colima_3.readFeatures(json_Puntos_colima_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntos_colima_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntos_colima_3.addFeatures(features_Puntos_colima_3);
var lyr_Puntos_colima_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntos_colima_3, 
                style: style_Puntos_colima_3,
                popuplayertitle: "Puntos_colima",
                interactive: true,
                title: '<img src="styles/legend/Puntos_colima_3.png" /> Puntos_colima'
            });

lyr_MapzenGlobalTerrain_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_GoogleSatelite_2.setVisible(true);lyr_Puntos_colima_3.setVisible(true);
var layersList = [lyr_MapzenGlobalTerrain_0,lyr_OpenStreetMap_1,lyr_GoogleSatelite_2,lyr_Puntos_colima_3];
lyr_Puntos_colima_3.set('fieldAliases', {'No': 'No', 'Nombre': 'Nombre', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Altitud': 'Altitud', });
lyr_Puntos_colima_3.set('fieldImages', {'No': '', 'Nombre': '', 'Latitud': '', 'Longitud': '', 'Altitud': '', });
lyr_Puntos_colima_3.set('fieldLabels', {'No': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'Latitud': 'inline label - always visible', 'Longitud': 'inline label - always visible', 'Altitud': 'inline label - always visible', });
lyr_Puntos_colima_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});