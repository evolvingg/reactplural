import React from 'react';
import Card from './Card';
import {users} from '../data/users';

const CardList = (props) => {
    console.log(props,'............',users)
    return (
        <div>
            {props.users.map((item,index) => {
                return (<Card {...item} key={index}/>)
            })}
        </div>
    )
}

export default CardList;