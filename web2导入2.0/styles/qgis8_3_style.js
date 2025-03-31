var size = 0;
var placement = 'point';
function categories_qgis8_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'M（工业）':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(227,26,28,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'MB（工业兼商务）':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(239,92,64,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'S（道路）':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(226,124,180,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'U（供电）':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(226,124,180,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(178,223,138,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_qgis8_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("地类");
    var labelFont = "13.0px \'华文仿宋\', sans-serif";
    var labelFill = "#e31a1c";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("'地块: ' || \"地块名称\" || 
'\n用途: ' || \"用途\" || 
'\n实际成交价: ' || \"实际地面/楼面单价\"  || 
'\n成交时间: ' || \"成交时间\" ") !== null) {
        labelText = String(feature.get("'地块: ' || \"地块名称\" || 
'\n用途: ' || \"用途\" || 
'\n实际成交价: ' || \"实际地面/楼面单价\"  || 
'\n成交时间: ' || \"成交时间\" "));
    }
    
    var style = categories_qgis8_3(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
