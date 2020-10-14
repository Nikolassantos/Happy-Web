import React from 'react'
import mapMarker from '../assets/svg/map-marker.svg'
import {Link} from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import '../styles/pages/orphanage.css'
import { Map, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"


function OrphanagesMap() {
  return(
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarker} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>{`Muitas crianças estão esperando a sua visita :)`}</p>
        </header>

        <footer>
          <strong>Dracena</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map 
        center={[-21.4902181,-51.5370124]}
        zoom={15}
        style={{ width:"100%", height:"100%" }}
      >
        <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
        /> 
      </Map>
      
      <Link to="" className="create-orphanage" >
        <FiPlus size={32}  color="#FFF"/>
      </Link>
    </div>
  )
}
export default OrphanagesMap