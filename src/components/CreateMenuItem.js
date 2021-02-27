import React from 'react';
import Check from "react-bootstrap/FormCheck";
import Container from 'react-bootstrap/Container';
import axios from 'axios';

const CreateMenuItem = () => {
    const generateEmptyData = () => {
        return {
            name: '',
            description: '',
            price: 0,
            type: '',
            in_stock: true,
            img: '',
        };
    }

    const [data, setData] = React.useState(generateEmptyData());
    // 0 for not sent, 1 for sent and success, 2 for sent and failed
    const [dataSent, setDataSent] = React.useState(0);

    const onValueChanged = (fieldName) => (e) => {
        setData({
            ...data,
            [fieldName]: e.target.value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(data);

        axios.post('http://localhost:3000/create_menu_item', data)
            .then(res => {
                console.log(res.data);

                setDataSent(res.status === 200 ? 1 : 2);
            });

        setData(generateEmptyData());
    }

    return (
        <Container style={{height: '80px', width : '600px'}}>
            <br></br>
            <div>
                <h3>Create New Menu Item</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>Item Name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={data.name}
                            onChange={onValueChanged('name')}/>
                    </div>
                    <div className="form-group">
                        <label>Item Description: </label>
                        <input required
                            className="form-control"
                            value={data.description}
                            onChange={onValueChanged('description')}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price (in dollars): </label>
                        <input
                            type="text"
                            className="form-control"
                            value={data.price}
                            onChange={onValueChanged('price')}
                        />
                    </div>
                    <div className="form-group">
                        <label>Type of the Item (e.g. drink, meal, etc.)): </label>
                        <input
                            type="text"
                            className="form-control"
                            value={data.type}
                            onChange={onValueChanged('type')}
                        />
                    </div>
                    <div className="form-group">
                        <Check type="checkbox" label="Item in stock" value={data.in_stock}
                            onChange={onValueChanged('in_stock')}/>
                    </div>
                    <div className="form-group">
                        <label>Image URL</label>
                        <input
                            type="text"
                            className="form-control"
                            value={data.img}
                            onChange={onValueChanged('img')}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Menu Item" className="btn btn-primary"/>
                        <div className="d-inline ml-3">
                            {dataSent === 1 && <span className="text-success">Item Created!</span>}
                            {dataSent === 2 && <span className="text-danger">Item failed to create.</span>}
                        </div>
                    </div>
                </form>
            </div>
        </Container>
    );
}

export default CreateMenuItem;
