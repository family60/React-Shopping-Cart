import React from 'react';

export default function Item(props){
    const {item, onAdd} = props;
    return (
        <div>
            <img className="small" src={item.image} alt={item.name}></img>
            <h3>{item.name}</h3>
            <div>${item.price}</div>
            <div>
                <button onClick={()=>onAdd(item)}>Add To Cart</button>
            </div>
        </div>
    )
}