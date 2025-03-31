var wms_layers = [];


    var projection_2022_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_2022_0 = projection_2022_0.getExtent();
    var size_2022_0 = ol.extent.getWidth(projectionExtent_2022_0) / 256;
    var resolutions_2022_0 = new Array(14);
    var matrixIds_2022_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_2022_0[z] = size_2022_0 / Math.pow(2, z);
        matrixIds_2022_0[z] = z;
    }
    var lyr_2022_0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://maps.liuxs.pro/tweak/GD/gd_dom.xml",
                                attributions: ' ',
                                "layer": "广东省2022年影像电子地图",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_2022_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_2022_0),
                resolutions: resolutions_2022_0,
                matrixIds: matrixIds_2022_0
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: '广东省 2022 年影像电子地图',
                            opacity: 1.0,
                            
                            
                          });

        var lyr__1 = new ol.layer.Tile({
            'title': '天地图-影像注记',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://t7.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileCol={x}&TileRow={y}&TileMatrix={z}&tk=754c8d645addd26aab2b11faaa5f3f9c'
            })
        });

        var lyr__2 = new ol.layer.Tile({
            'title': '天地图-地形注记',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://t2.tianditu.gov.cn/cta_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cta&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileCol={x}&TileRow={y}&TileMatrix={z}&tk=754c8d645addd26aab2b11faaa5f3f9c'
            })
        });
var format_qgis8_3 = new ol.format.GeoJSON();
var features_qgis8_3 = format_qgis8_3.readFeatures(json_qgis8_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_qgis8_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_qgis8_3.addFeatures(features_qgis8_3);
var lyr_qgis8_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_qgis8_3, 
                style: style_qgis8_3,
                popuplayertitle: 'qgis8',
                interactive: true,
    title: 'qgis8<br />\
    <img src="styles/legend/qgis8_3_0.png" /> M（工业）<br />\
    <img src="styles/legend/qgis8_3_1.png" /> MB（工业兼商务）<br />\
    <img src="styles/legend/qgis8_3_2.png" /> S（道路）<br />\
    <img src="styles/legend/qgis8_3_3.png" /> U（供电）<br />\
    <img src="styles/legend/qgis8_3_4.png" /> <br />' });

lyr_2022_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr_qgis8_3.setVisible(true);
var layersList = [lyr_2022_0,lyr__1,lyr__2,lyr_qgis8_3];
lyr_qgis8_3.set('fieldAliases', {'转让/挂牌文号': '转让/挂牌文号', '区域': '区域', '地块编号': '地块编号', '地块名称': '地块名称', '用途': '用途', '地类': '地类', '实际地面/楼面单价': '实际地面/楼面单价', '成交时间': '成交时间', '竞得人': '竞得人', '出让年限': '出让年限', });
lyr_qgis8_3.set('fieldImages', {'转让/挂牌文号': 'TextEdit', '区域': 'TextEdit', '地块编号': 'TextEdit', '地块名称': 'TextEdit', '用途': 'TextEdit', '地类': 'TextEdit', '实际地面/楼面单价': 'Range', '成交时间': 'TextEdit', '竞得人': 'TextEdit', '出让年限': 'TextEdit', });
lyr_qgis8_3.set('fieldLabels', {'转让/挂牌文号': 'header label - always visible', '区域': 'no label', '地块编号': 'no label', '地块名称': 'header label - always visible', '用途': 'header label - always visible', '地类': 'no label', '实际地面/楼面单价': 'header label - always visible', '成交时间': 'header label - always visible', '竞得人': 'header label - always visible', '出让年限': 'header label - always visible', });
lyr_qgis8_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});