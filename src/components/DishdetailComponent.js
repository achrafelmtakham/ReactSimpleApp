import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from "reactstrap"


class Dishdetail extends Component {
    
    renderDish(dish){
        if(dish!== null){
            return(
                <div className="col-12 col-md-5 m-2">
                    <Card>
                        <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }    
    }
    renderComments(comments){
        if(comments== null){
            return <div></div>
        }
            const cmnts = comments.map(comment=>{
                return(
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>{comment.author}, 
                                &nbsp;
                                {new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: '2-digit'
                                }).format(new Date(comment.date))}</p>
                            </li>
                )
            })
            return (
                <div className='col-12 col-md-5 m-2'>
                    <h4> Comments </h4>
                    <ul className='list-unstyled'>
                        {cmnts}
                    </ul>
                </div>
            )
    }
    render() { 
        const dish = this.props.dish
        if(dish===null){
            return <div></div>
        }
        const dishItem = this.renderDish(dish)
        const dishComments =this.renderComments(dish.comments)
        console.log(dishComments);
        return ( 
            <div className="row">
                {dishItem}
                {dishComments}
            </div>
         );
    }
}
 
export default Dishdetail;