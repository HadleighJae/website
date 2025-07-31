<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="3.0"
    xmlns="http://www.w3.org/1999/xhtml">
    
    <xsl:output method="xhtml" html-version="5" omit-xml-declaration="yes" include-content-type="no" indent="yes"/>
    
    <xsl:variable name="si" as="document-node()+" select="collection('https://digitalmitford.org/si.xml')"/>
    
    <xsl:template match="/">
        <html lang="en">
            <head>
                <base target="_top">
                    <meta charset="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                            
                            <title>Quick Start - Leaflet</title>
                            
                            <link rel="shortcut icon" type="image/x-icon" href="docs/images/favicon.ico" />
                            
                            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/>
                            <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
                            
                            <style>
                                html, body {
                                height: 100%;
                                margin: 0;
                                }
                                .leaflet-container {
                                height: 400px;
                                width: 600px;
                                max-width: 100%;
                                max-height: 100%;
                                }
                            </style>
                            
                            
            </head>
            <body>
                
                
                
                <div id="map" style="width: 600px; height: 400px;"></div>
                <script>
                    
                    const map = L.map('map').setView([51.505, -0.09], 13);
                    
                    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    }).addTo(map);
                    
                    marker = L.marker([51.5, -0.09]).addTo(map)
                    .bindPopup('<b>Hello world!</b><br />I am a popup.').openPopup();
                    
                    map.on('click', onMapClick);
                    
                </script>
                
                
                
            </body>
        </html>
    </xsl:template>
    
</xsl:stylesheet>