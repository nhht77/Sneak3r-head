import React, { Component } from 'react';
import Dropzone, { useDropZone } from 'react-dropzone';
import axios from 'axios';
// import isEmpty from "../../utils/is-empty";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'


class UploadFile extends Component {
    constructor(){
        super();
        this.state = {
            imgs:[],
        }
    }  
    
    onImgDisplay = () => {

    }

    onDrop = imgs => {
        let formData = new FormData();
        console.log(imgs);
        const config = { header: {'content-type':'multipart/form-data'} }
        formData.append(imgs[0].name, imgs[0]);
    
        // config?
        axios.post('/api/products/upload',formData,config)
        .then(res => {
            console.log(res);
            // this.setState({ imgs:[...this.state.imgs, res.data] })
            // console.log(this.state.imgs);
            // this.props.onImgDisplay(this.state.imgs);
        })
    }
    
  render() {
    return (
    <section>
    <div className="dropzone clear">
        <Dropzone className="dropzone-box" onDrop={this.onDrop}>
        {({getRootProps, getInputProps}) => (
            <div className="dropzone-box" {...getRootProps()}>
                <input {...getInputProps()} />
                <FontAwesomeIcon className="wrap" icon={faPlusCircle}/>
            </div>
        )}
        </Dropzone>  
    </div>
    </section>
    )
  }
}

export default UploadFile;
