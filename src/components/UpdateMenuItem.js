import React, { Component } from 'react';
import axios from 'axios';

export default class UpdateMenuItem extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeInStock = this.onChangeInStock.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            description: '',
            price: 0,
            type: '',
            in_stock: true,
            image: '',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/get_menu'+this.props.match.params.id)
            .then(response => {
                this.setState({

                    name: response.data.name,
                    description: response.data.description,
                    price: response.data.price,
                    type: response.data.type,
                    in_stock: response.data.in_stock,
                    image: response.data.image
                })
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('http://localhost:3000/get_menu')
            .then(response => {
                this.setState({ items: response.data.map(item => item.name) });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangePrice(e) {
        this.setState({
            price: e.target.value
        });
    }

    onChangeType(e) {
        this.setState({
            type: e.target.value
        });
    }

    onChangeInStock(e) {
        this.setState({
            in_stock: e.target.value
        });
    }

    onChangeImage(e) {
        this.setState({
            image: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const menuItem = {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            type: this.state.type,
            in_stock: this.state.in_stock,
            image: this.state.image,
        };

        console.log(menuItem);

        axios.post('http://localhost:3000//update_menu_item/' + this.props.match.params.id, menuItem)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Create New Menu Item</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Item Name: </label>
                        <select ref="userInput"
                                required
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}>

                            {
                                this.state.items.map(function(item) {
                                    return <option
                                        key={item}
                                        value={item}>{item}
                                    </option>;
                                })
                            }

                        </select>
                    </div>
                    <div className="form-group">
                        <label>Item Description: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price (in dollars): </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.price}
                            onChange={this.onChangePrice}
                        />
                    </div>
                    <div className="form-group">
                        <label>Type of the Item (e.g. drink, meal, etc.)): </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.type}
                            onChange={this.onChangeType}
                        />
                    </div>
                    <div className="form-group">
                        <label>:Is the Item in Stock? </label>
                        <input
                            type="boolean"
                            className="form-control"
                            value={this.state.in_stock}
                            onChange={this.onChangeInStock}
                        />
                    </div>
                    <div className="form-group">
                        <label>:Image URL </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.image}
                            onChange={this.onChangeImage}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Edit Menu Item" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}