import React, { Component } from 'react';
import Dishdetail from "./DishdetailComponent"
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from "reactstrap"

class Menu extends Component {

    constructor(props){
        super(props)
        this.state ={
            selectedDish: null
        }
       console.log("Menu component constructor is invocked");
    }

    componentDidMount(){
        console.log("componentDidMount is invocked");
    }
    onDishSelect(dish){
        this.setState({selectedDish:dish})
    }

    

    render(){
        const menu= this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-2">
                    <Card onClick={()=>this.onDishSelect(dish)}>
                        <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        }) ;
        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <Dishdetail dish={this.state.selectedDish}/>
                </div>
            </div>
        );
    }
    
}
 
export default Menu;