import React, { useState } from 'react'

export default function WeatherApp() {
  const [city,setCity]=useState("")
  const [locationData,setLocationData]=useState(null)

  const GeoNamesData=()=>{
    const urlapi=`http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=divyapunitharaj`
   fetch(urlapi)
    .then(res=>res.json())
    .then((data)=>setLocationData(data.geonames[0]))
    .catch(err=>setLocationData(err))    
      
      setCity("")
     }
     

  return (
    <div>
        <input 
         type='text'
         placeholder='Enter city name'
          value={city}
          onChange={(e)=>(setCity(e.target.value))}
        />
        <button onClick={GeoNamesData}>Search</button>
         {locationData && (<>
        <div>Location Info</div>
        <div>City : {locationData.name}</div>
        <div>Lat : {locationData.lat}</div>
        <div>Long : {locationData.lng}</div>
        <div>Country : {locationData.countryName}</div>
         </>)}
        
    </div>
  )
}



// import React, { useState } from 'react';

// export default function WeatherApp() {
//   const [city, setCity] = useState("");
//   const [locationData, setLocationData] = useState(null);
//   const [suggestion, setSuggestion] = useState([]);

//   const GeoNamesData = () => {
//     const urlapi = `http://api.geonames.org/searchJSON?q=${city}&maxRows=10&username=divyapunitharaj`;
//     fetch(urlapi)
//       .then(res => res.json())
//       .then((data) => {
//         setSuggestion(data.geonames); // Set the suggestions for the dropdown
//         setLocationData(null); // Clear previous location data
//       })
//       .catch(err => setLocationData(err));
//   };

//   const handleSelectCity = (selectedCity) => {
//     setCity(selectedCity.name); // Set the input field to the selected city
//     setLocationData(selectedCity); // Set the location data for the selected city
//     setSuggestion([]); // Clear the suggestions after selection
//   };

//   return (
//     <div>
//       <input 
//         type='text'
//         placeholder='Enter city name'
//         value={city}
//         onChange={(e) => {
//           setCity(e.target.value);
//           if (e.target.value.length > 2) {
//             GeoNamesData(); // Fetch suggestions when user types
//           } else {
//             setSuggestion([]); // Clear suggestions if input is too short
//           }
//         }}
//       />

//       {/* Display suggestions in a dropdown */}
//       {suggestion.length > 0 && (
//         <ul style={{ listStyleType: 'none', padding: 0, maxHeight: '150px', overflowY: 'scroll', border: '1px solid #ccc' }}>
//           {suggestion.map((city, index) => (
//             <li 
//               key={index}
//               onClick={() => handleSelectCity(city)}
//               style={{ cursor: 'pointer', padding: '5px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #ddd' }}
//             >
//               {city.name}, {city.countryName}
//             </li>
//           ))}
//         </ul>
//       )}
      
//       <button onClick={GeoNamesData}>Search</button>
      
//       {/* Display selected city information */}
//       {locationData && (
//         <>
//           <div>Location Info</div>
//           <div>City: {locationData.name}</div>
//           <div>Lat: {locationData.lat}</div>
//           <div>Long: {locationData.lng}</div>
//           <div>Country: {locationData.countryName}</div>
//         </>
//       )}
//     </div>
//   );
// }
