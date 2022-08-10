import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Shopping = props => (
    <tr>
        <td className = {props.shopping.shopping_completed ? 'completed' : ''}>{props.shopping.shopping_description}</td>
        <td className = {props.shopping.shopping_completed ? 'completed' : ''}>{props.shopping.shopping_responsible}</td>
        <td className = {props.shopping.shopping_completed ? 'completed' : ''}>{props.shopping.shopping_priority}</td>
        <td>
            <Link to={"/edit/"+props.shopping._id}>Edit</Link>
        </td>
    </tr>
)

export default class ShoppingList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {shoppings: []};
    }
    
    componentDidMount() {
        axios.get('http://localhost:4000/shopping/')
            .then(response => {
                this.setState({ shoppings: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    shoppingList() {
        return this.state.shoppings.map(function(currentShopping, i){
            return <Shopping shopping={currentShopping} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Shopping List</h3>
                <table className="table table-striped" style = {{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.shoppingList() }
                    </tbody>
                </table>
            </div>
        )
    }
}