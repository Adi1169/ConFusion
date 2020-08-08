import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
function RenderDish({dish}){
    return(
        <Card>
        <CardImg  src={dish.image} alt={dish.name} />
        <CardBody>
            <CardTitle >{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
        </CardBody>
        </Card>
     );
}
function RenderComments({dish}){
    
    const comments=dish.comments.map((comment)=>{
        const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const year=comment.date.substring(0,4);
        const month=comment.date.substring(5,7);
        const day=comment.date.substring(8,10);
        const author="-- "+comment.author+", "+months[parseInt(month)-1]+" "+day+", "+year;
        //console.log(author);
        return(
            <div key={comment.id}>
                <p>{comment.comment}</p>
                <p>{author}</p>
            </div>
        );
    });
    console.log(comments);
    return comments;
}
    const DishDetailComponent =(props) =>{
        if(props.dish!=null){
            return(
                <div className="container">
                    <div className="row">
                        <div  className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish}/>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            <RenderComments dish={props.dish}/>
                        </div>
                    </div>
                </div>
                
            );  
        }
        else
            return(
                <div></div>
            );
    }

export default DishDetailComponent;