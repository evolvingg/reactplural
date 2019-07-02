import React from 'react';
import {gitUsers} from '../data/git-users';
import Pagination from './Pagination';

class Grid extends React.Component {
constructor(props){
    super(props);
}
render() {
    console.log(gitUsers);
    const list = gitUsers.map((item) => 
    <div>
        <span>{item.login}</span>
        <div><img src={item.avatar_url} /></div>
    </div>);
    console.log(list);
    return (
        <div className="main-container">
            {/* {gitUsers} */}
            
            {list}
            <Pagination totalRecords ={46} pageLimit ={30} pageNeighbours={2} />
        </div>
    );
}
}

export default Grid;