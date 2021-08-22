import React from 'react'

import Card from '../../shared/components/UIElements/card'
import "./PlaceList.css"
import PlaceItem from './PlaceItem'
const PlaceList = props => {
 if (props.items.length === 0){
     return <div className="place-list center">
                <Card>
                    <h2>No places found. May be create one? </h2>
                    <button>SHare Places</button>
                </Card>
            </div>
 }
 return (
     <ul className="place-list">
         {props.items.map(place => ( 
                <PlaceItem 
                    key={place.id} 
                    id = {place.id} 
                    imageUrl={place.imageUrl} 
                    title={place.title} 
                    desc = {place.desc}
                    address = {place.address}
                    creatorId = {place.creator}
                    coordinates = {place.location}
                /> 
         ))}
     </ul>
 );
}

export default PlaceList;