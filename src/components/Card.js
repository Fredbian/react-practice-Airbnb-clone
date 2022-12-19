import React from 'react'
// import katie from '../images/katie-zaferes.png'
import star from '../images/star.png'

const style = {
    bord: {
        fontWeight: '600'
    },
    padding: {
        paddingLeft: '5px'
    }
}
export default function Card(props) {
    let tag 
    if (props.openSpots === 0) {
        tag = 'Sold Out'
    } else if (props.location === 'Online') {
        tag = 'Online'
    }

    return (
        <div className='card-continer'>
            {/* if you don't want to import an local image and show it, need to use require() */}
            {props.openSpot === 0 && <div className='card--tag'>{tag}</div>}
            {props.location === 'Online' && <div className='card--tag'>{tag}</div>}
            {/* <div className='card--tag'>{tag}</div> */}
            <img className='card--img' alt='card' src={require(`../images/${props.coverImg}`)}/>
            <div className='card-info'>
                <img className='card--star' alt='star' src={star}/> 
                <div style={style.padding}>{props.stats.rating} {`(${props.stats.reviewCount})`} • {props.location}</div> 
            </div>
            <p>{props.title}</p>
            <p><span style={style.bord}>From ${props.price}</span> / person</p>
        </div>
    )
}