import React from 'react'
import { connect } from 'react-redux'

import { Field, Form } from 'react-final-form'

import { loadProduct, loadUpdatedProduct } from '../store/product'

export class AdminSingleProductView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            stock: 0.0,
            price: 0.0,
            imageURL: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    componentDidMount() {
        this.props._loadProduct(this.props.match.params.coffeeId);
    }

    componentDidUpdate(prevProps) {
        
        if (this.props.product[0] && !prevProps.product[0]) {
            this.setState({
                name: this.props.product[0].name,
                description: this.props.product[0].description,
                stock: this.props.product[0].stock,
                price: this.props.product[0].price,
                imageURL: this.props.product[0].imageURL,
            })
        }
    }

    handleClick(event) {
        console.log(event.target)
        this.setState({ [event.target.name]: event.target.value }) 
    }

    handleSave(event) {
        event.preventDefault();
        this.props.updateProduct({ ...this.state, id: this.props.product[0].id })
    }

    render() {

        let name = '';
        let description = '';
        let stock = 0.0;
        let price = 0.0;
        let imageURL = '';

        if (this.props.product.length) {
            name = this.props.product[0].name;
            description = this.props.product[0].description;
            stock = this.props.product[0].stock;
            price = this.props.product[0].price;
            imageURL = this.props.product[0].imageURL;
        } 

        return (
            <div>
                <input
                type = "text" 
                name = "name"
                value = {this.state.name}
                onChange= { this.handleClick } /> 

                <br />
                <input
                type = "text" 
                name = "description"
                value = {this.state.description}
                onChange= { this.handleClick } /> 

                <br />
                <input
                type = "text" 
                name = "stock"
                value = {this.state.stock}
                onChange= { this.handleClick } /> 

                <br />
                <input
                type = "text" 
                name = "price"
                value = {this.state.price}
                onChange= { this.handleClick } /> 

                <br />
                <input
                type = "text" 
                name = "imageURL"
                value = { this.state.imageURL || 'imageURL.com' }
                onChange= { this.handleClick } />    

                <br />
                <button onClick = { this.handleSave }>Save</button>       
                <p>To edit more coffees, click the Back button on your browser</p>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        product: state.product
    }
}

function mapDispatchToProps(dispatch) {
    return {
        _loadProduct(prodId) {
            dispatch(loadProduct(prodId));
        },
        updateProduct(updatedProduct) {
            dispatch(loadUpdatedProduct(updatedProduct))
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminSingleProductView)