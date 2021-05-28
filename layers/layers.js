ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32632").setExtent([-120832.050255, 204063.901542, 1890779.570092, 1411928.914652]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Aire_protge_1 = new ol.format.GeoJSON();
var features_Aire_protge_1 = format_Aire_protge_1.readFeatures(json_Aire_protge_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_Aire_protge_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aire_protge_1.addFeatures(features_Aire_protge_1);
var lyr_Aire_protge_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aire_protge_1, 
                style: style_Aire_protge_1,
                interactive: true,
                title: '<img src="styles/legend/Aire_protge_1.png" /> Aire_protégée'
            });
var format_Limite_rgionales_2 = new ol.format.GeoJSON();
var features_Limite_rgionales_2 = format_Limite_rgionales_2.readFeatures(json_Limite_rgionales_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_Limite_rgionales_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_rgionales_2.addFeatures(features_Limite_rgionales_2);
var lyr_Limite_rgionales_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limite_rgionales_2, 
                style: style_Limite_rgionales_2,
                interactive: true,
                title: '<img src="styles/legend/Limite_rgionales_2.png" /> Limite_régionales'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Aire_protge_1.setVisible(true);lyr_Limite_rgionales_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Aire_protge_1,lyr_Limite_rgionales_2];
lyr_Aire_protge_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'INDICATIF': 'INDICATIF', 'AFF_CODE': 'AFF_CODE', 'TOPONYME': 'TOPONYME', 'SUP_SIG': 'SUP_SIG', 'STATUT': 'STATUT', 'NOM': 'NOM', 'CLASS_UICN': 'CLASS_UICN', 'REMARQUES': 'REMARQUES', 'DATE_CREAT': 'DATE_CREAT', 'SUPERFICIE': 'SUPERFICIE', 'DATE_PLANA': 'DATE_PLANA', 'AGENT': 'AGENT', 'GESTION': 'GESTION', 'N°_Acte_cl': 'N°_Acte_cl', 'Type_acte': 'Type_acte', 'Date_class': 'Date_class', 'Plan_amena': 'Plan_amena', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Limite_rgionales_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SCE_GEO': 'SCE_GEO', 'SCE_SEM': 'SCE_SEM', 'DATE_': 'DATE_', 'ORIGINE': 'ORIGINE', 'NOM': 'NOM', 'SUPERFICIE': 'SUPERFICIE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'NAME': 'NAME', });
lyr_Aire_protge_1.set('fieldImages', {'OBJECTID': 'Range', 'INDICATIF': 'TextEdit', 'AFF_CODE': 'TextEdit', 'TOPONYME': 'TextEdit', 'SUP_SIG': 'TextEdit', 'STATUT': 'TextEdit', 'NOM': 'TextEdit', 'CLASS_UICN': 'TextEdit', 'REMARQUES': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'DATE_PLANA': 'TextEdit', 'AGENT': 'TextEdit', 'GESTION': 'TextEdit', 'N°_Acte_cl': 'TextEdit', 'Type_acte': 'TextEdit', 'Date_class': 'TextEdit', 'Plan_amena': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Limite_rgionales_2.set('fieldImages', {'OBJECTID': 'Range', 'SCE_GEO': 'TextEdit', 'SCE_SEM': 'TextEdit', 'DATE_': 'DateTime', 'ORIGINE': 'TextEdit', 'NOM': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'NAME': 'TextEdit', });
lyr_Aire_protge_1.set('fieldLabels', {'OBJECTID': 'no label', 'INDICATIF': 'no label', 'AFF_CODE': 'no label', 'TOPONYME': 'inline label', 'SUP_SIG': 'no label', 'STATUT': 'no label', 'NOM': 'no label', 'CLASS_UICN': 'no label', 'REMARQUES': 'no label', 'DATE_CREAT': 'no label', 'SUPERFICIE': 'no label', 'DATE_PLANA': 'no label', 'AGENT': 'no label', 'GESTION': 'no label', 'N°_Acte_cl': 'no label', 'Type_acte': 'no label', 'Date_class': 'no label', 'Plan_amena': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Limite_rgionales_2.set('fieldLabels', {'OBJECTID': 'no label', 'SCE_GEO': 'no label', 'SCE_SEM': 'no label', 'DATE_': 'no label', 'ORIGINE': 'no label', 'NOM': 'no label', 'SUPERFICIE': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'NAME': 'no label', });
lyr_Limite_rgionales_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});