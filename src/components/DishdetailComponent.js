import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle ,BreadcrumbItem, Breadcrumb} from 'reactstrap';
import {Link} from 'react-router-dom'
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
function RenderComments({comments}){
    
    const commentItem=comments.map((comment)=>{
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
    console.log(commentItem);
    return commentItem;
}
    const DishDetailComponent =(props) =>{
        if(props.dish!=null){
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>

                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                        <div  className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish}/>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            <RenderComments comments={props.comments}/>
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