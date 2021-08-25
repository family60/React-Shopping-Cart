import React from 'react';
import Item from './Item';

export default function Main(props){
    const {items, onAdd} = props;
    return (
        <main className="block col-2">
            <h2>Items</h2>
            <div className="row">
                {items.map((item) => (
                <Item key={item.id} item={item} onAdd={onAdd}></Item>
                ))}
            </div>
        </main>
    );
}