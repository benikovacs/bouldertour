import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import axios from 'axios';
import queryString from 'query-string';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

import Footer from './Footer'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



export default class Photos extends Component {
    constructor(props) {
        super(props)
        this.flickraddress = this.flickraddress.bind(this)
        this.getImages = this.getImages.bind(this)
            this.state = {
                images: [],
                hasMoreItems: true,
                loadMore: true,
                page: 1
            }
    }

    flickraddress(page) {
        const address = "https://api.flickr.com/services/rest/?"
        return address + queryString.stringify({
            page: page,
            method: "flickr.photos.search",
            tags: "boulderbiketour, bikerace",
            api_key: 'c94b4409dcbff8b790ae737d0d37b890',
            format: 'json',
            nojsoncallback: 1,
            per_page: 10
        })
    }

    imageaddress(item) {
        if (item.farm != 0){
        return (
            'http://farm' + item.farm + '.staticflickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.jpg');
    }}

    getImages(page) {
        axios.get(this.flickraddress(page))
            .then(response => {
                    var images = this.state.images
                    response.data.photos.photo.map((image, index) => {
                        images.push(image)
                    })
            this.setState({images: images})
            this.setState((prevState, props) => ({
                page: prevState.page + 1
            })); 
            })
        .catch((error) => console.log(error))
    }


render(){
    const loader = <div className="loader">Loading ...</div>;
    var items = [];
    this.state.images.map( (data, index) => {
        items.push(
        <img className="col-12 col-md-6 col-lg-4 col-xl-3 my-3" src={this.imageaddress(data)} key={index} alt="" />

        )
    })


    
    return (
       <React.Fragment> 
            

        <InfiniteScroll
       
        pageStart={0}
        initialLoad={true}
        loadMore={this.getImages}
        hasMore={this.state.hasMoreItems}
    
        loader={<div key={0}>{loader}</div>}>
        {items}
      
        </InfiniteScroll>
        <ScrollUpButton />

        
        </React.Fragment>
          
       )
}
}