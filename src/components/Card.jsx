import React from 'react';


class Card extends React.Component {
constructor(props){
    super(props);
}
render() {
    return (
        <div className="github-profile">
            {/* One github profile.... */}
            <img src={this.props.avatar_url} />
            <div className="info">
                <div className="name">{this.props.name}</div>
                <div className="company">{this.props.company}</div>
            </div>
        </div>
    )
}
}

export default Card;