import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loadProducts, loadProduct } from "../store/product";
import { Button, Card } from "react-bootstrap";

// this is just stolen from past projects it will probably need to be modified but we are just trting to display all our coffee

class Coffees extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.bootstrap();
  }
  render() {
    const coffees = this.props.product;
    return (
      //maybe instead of a link it coyuld be a function would I need to send the
      // coffee id to the store so made a function but then moved this to the navbar
      //but still not sure how to make it work so will probably need to remake the function
      <div className={"list"}>
        {coffees.map((coffee) => {
          return (
            <Card
              className="bg-dark text-white"
              style={{ width: "18rem" }}
              key={coffee.id}
            >
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>
                  <Link to={`/coffee/${coffee.id}`}>{coffee.name}</Link>{" "}
                </Card.Title>
                <Card.Text>Place Holder Text Maybe</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}
//maybe a detailed view can just go here?? or at the end of the return statement with
//an if statement??

const mapStateToProps = (state) => {
  return state;
};

//call loadStudents here, now need to add a load async
//nick showed me how to simplfy the logic, don't have time to impliment it but hope to go back to it latter
const mapDispatchToProps = (dispatch) => {
  return {
    bootstrap: () => {
      //may need to change the name
      dispatch(loadProducts());
    },
    sendCoffeeId: (id) => {
      //may need to change the name
      dispatch(loadProduct(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Coffees);
