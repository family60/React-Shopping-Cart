import React from 'react';

//Sign In portion is not ment for function, it is purley for demo purposes

export default function Header(props){
    const {countCartItems} = props;
    return (
    <header className="row block center">
        <div>
            <a href="#/">
                <h1>Small Shopping Center</h1>
            </a>
        </div>
        <div>
            <a href="#/Cart">
                
                Cart { ' '}
                {countCartItems? (
                    <button className="badge">{countCartItems}</button>
                ):('')}
            
            </a>{' '}
            <a href="#/signin"> SignIn</a>
        </div>
    </header>
    );
}