import React from 'react';
import axios from 'axios';
import Check from "react-bootstrap/FormCheck";
import Container from 'react-bootstrap/Container';

const UpdateMenuItem = () => {
    const generateEmptyData = () => {
        return {
            item_id: '',
            name: '',
            description: '',
            price: 0,
            type: '',
            in_stock: false,
            img: '',
        };
    }

    const [data, setData] = React.useState(generateEmptyData());
    // 0 for not sent, 1 for sent and success, 2 for sent and failed
    const [dataSent, setDataSent] = React.useState(0);
    const [menuFetched, setMenuFetched] = React.useState(false);
    const [menuItems, setMenuItems] = React.useState([]);

    if (!menuFetched) {
        axios.get('http://localhost:3000/get_menu')
            .then(response => {
                const data = response.data.menu;

                setMenuItems(data);
                setMenuFetched(true);
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    const onValueChanged = (fieldName) => (e) => {
        setData({
            ...data,
            [fieldName]: e.target.value
        });
    }

    const onItemSelected = (e) => {
        axios.get(`http://localhost:3000/menu_item/${e.target.value}`)
            .then(response => {
                setData({
                    ...response.data,
                    item_id: e.target.value
                });
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(data);

        axios.post('http://localhost:3000/update_menu_item/' + data.item_id, data)
            .then(res => {
                console.log(res.data);

                setDataSent(res.status === 200 ? 1 : 2);
            });
    }

    // FIXME: Error on submit unhandled

    return (

        <div>
            <br></br>
            <Container style={{height: '80px', width : '600px'}}>
            <h3>Update Menu Item</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Item Name: </label>
                    <select required
                            className="form-control"
                            onChange={onItemSelected}>
                        <option>(Select an item)</option>
                        {
                            menuItems.map((item) => <option value={item.item_id}>{item.name}</option>)
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label>Item Description: </label>
                    <input type="text"
                           required
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
                    <Check type="checkbox" label="Item in stock" checked={data.in_stock}
                           onChange={onValueChanged('in_stock')}/>
                </div>
                <div className="form-group">
                    <label>Image URL: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={data.img}
                        onChange={onValueChanged('img')}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Edit Menu Item" className="btn btn-primary"/>
                    <div className="d-inline ml-3">
                        {dataSent === 1 && <span className="text-success">Item Created!</span>}
                        {dataSent === 2 && <span className="text-danger">Item failed to create.</span>}
                    </div>
                </div>
            </form>
            </Container>
        </div>
    )
}


export default UpdateMenuItem;
