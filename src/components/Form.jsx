import React from 'react';
import axios from 'axios';
class FormElement extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value:'coconut',
            userName:''
        }
    }
    handleChange = (event) => {
        console.log(event.target.name);
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit = async (event) => {
        alert(`ur fav fruit is:${this.state.value}`);
        console.log(event.target.name);
        event.preventDefault();
        console.log(this.state.userName);
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        console.log(resp.data);
        this.props.onSubmit(resp.data);
        this.setState({userName:''});
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} name="userForm" autoComplete="off" action="">
                <div className="input-holder">
                    <label>
                        Pick ur favourite fruit
                        <select name="drop" value={this.state.value} onChange={this.handleChange}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                </div>
                <div className="input-holder">
                    <label>
                        enter name
                        <input type="text" name="uname" />
                    </label>
                    <label>
                        enter lastname
                        <input type="text" name="lname" />
                    </label>
                </div>
                <div className="input-holder">
                    <label>
                        Github username
                        <input type="text" placeholder="Enter ur username" value={this.state.userName} required onChange={event => this.setState({userName : event.target.value})}/>
                    </label>
                </div>    
                <input type="submit" value="Add Card"/>
            </form>
        );
    }
}
export default FormElement;