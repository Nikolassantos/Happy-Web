import React from 'react'
import mapMarker from '../assets/svg/map-marker.svg'
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import '../styles/pages/orphanage-map.css'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { mapKey } from '../utils/config'
import leaflet from 'leaflet'

const mapICon = leaflet.icon({
  iconUrl: mapMarker,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
})

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarker} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>{`Muitas crianças estão esperando a sua visita :)`}</p>
        </header>

        <footer>
          <strong>Dracena</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map
        center={[-21.4902181, -51.5370124]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}>
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${mapKey}`}
        />
        <Marker icon={mapICon} position={[-21.4902181, -51.5370124]}>
          <Popup
            closeButton={false}
            minWidth={240}
            max-width={240}
            className="map-poopup">
            {`Lar das Meninas`}
            <Link to="/orphanages/1">
              <FiArrowRight size={20} color="#FFFF" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  )
}
export default OrphanagesMap
