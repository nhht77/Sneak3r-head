import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import DoubleRingSpiner from './double-ring-spinner.gif';
import Spinner from "./Spinner";


class UploadFile extends Component {
    constructor(){
        super();
        this.state = {
            imgs:[],
            isUploading:false
        }
    }  
    
    onDisplayUploadedImg = () => (
        this.state.imgs.map( item => (
            <div className="dropzone-box"
                key={item.public_id}
                onClick={ () => this.onRemove(item.public_id)}>
                <div 
                    className="wrap"
                    style={{background:`url(${item.url}) no-repeat`}}>
                </div>
            </div>
            // console.log({"public_id":item.public_id, "src":item.url})
            // console.log(item.public_id)
        ))
    )

    onDrop = files => {
        this.setState({isUploading: true})
        let formData = new FormData();
        const config = { header: {'content-type':'multipart/form-data'} }
        formData.append("file", files[0]);
        // config?
        axios.post('/api/products/upload',formData,config)
        .then(res => {
            this.setState({ imgs:[...this.state.imgs, res.data], isUploading:false })
            // console.log(this.state.imgs);
            this.props.onHandleImg(this.state.imgs);
        })
        .catch(err => {
            console.log(err)
            this.setState({ isUploading:false })
        })
        // .then( () => this.props.onHandleImg(this.state.imgs))
    }

    onRemove = (id) => {
        axios.get(`/api/products/removeImg?public_id=${id}`).then( res => {
            let imgs = this.state.imgs.filter(item => item.public_id !== id);
            this.setState({imgs});
            this.props.onHandleImg(this.state.imgs);
        })
    }
    
  render() {
    return (
    <section>
    <div className="dropzone clear">
        <Dropzone className="dropzone-box" onDrop={e => this.onDrop(e)}>
        {({getRootProps, getInputProps}) => (
            <div className="dropzone-box" {...getRootProps()}>
                <input {...getInputProps()} />
                <FontAwesomeIcon className="wrap" icon={faPlusCircle}/>
            </div>
        )}
        </Dropzone>  
        {this.onDisplayUploadedImg()}
        {
            this.state.isUploading 
            ? <div className="dropbox-box"> <div className="wrap"> <Spinner src={DoubleRingSpiner} width="30%" /> </div></div>   
            : null
        }
    </div>
    </section>
    )
  }
}

export default UploadFile;
