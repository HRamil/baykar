'use client';

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

// Sample marker data
const markers = [
    { coordinates: [-122.4194, 37.7749], label: "San Francisco, USA" },
    { coordinates: [-46.6333, -23.5505], label: "Sao Paulo, Brazil" },
    { coordinates: [139.6917, 35.6895], label: "Tokyo, Japan" },
    { coordinates: [-0.1278, 51.5074], label: "London, UK" },
    { coordinates: [151.2093, -33.8688], label: "Sydney, Australia" },
];

// Import CSS for styling
import './shoesCollectedMap.scss';

export default function ShoesCollectedMap() {
    return (
       <div className="shoesCollectedMap">
         <div className="container-fluid">
            <div className="map">
                <ComposableMap>
                    <Geographies geography="/features.json">
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                // Access color from geo properties
                                const countryColor = geo.properties.color || "#D6D6DA"; // default color if none provided
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        style={{
                                            default: { fill: countryColor, outline: "none" },
                                            hover: { fill: "#F53", outline: "none" },
                                            pressed: { fill: "#E42", outline: "none" },
                                        }}
                                    />
                                );
                            })
                        }
                    </Geographies>

                    {/* Add markers to the map */}
                    {markers.map((marker, index) => (
                        <Marker key={index} coordinates={marker.coordinates}>
                            <circle r={8} fill="limegreen" stroke="#fff" strokeWidth={2} />
                            <text
                                textAnchor="middle"
                                y={20}
                                style={{ fontFamily: "system-ui", fill: "#fff", fontSize: "10px" }}
                            >
                                {marker.label}
                            </text>
                        </Marker>
                    ))}
                </ComposableMap>
            </div>
        </div>
       </div>
    );
}
