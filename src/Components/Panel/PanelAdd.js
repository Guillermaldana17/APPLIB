import React, { Component } from 'react'
import '../List/Items.css'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

class PanelAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : '',
            image :'',
            rating :''
        }
    }
    onChangeTitle = (e) => {
        this.setState({ title: e.target.value })
    }
    onChangeImage = (e) => {
        this.setState({ image: e.target.value })
    }
    onChangeRating = (e) => {
        const rating = parseInt(e.target.value)
        this.setState({ rating: rating })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const Title = this.state.title;
        const Rating = this.state.rating;
        const Image = this.state.image;

        this.props.onadd({title: Title, rating: Rating, image: Image})
        this.props.oncancel();
    }
    render() {
        return (

            <div className="card card-body form">
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'><p>
                        <label>Titulo del libro</label>
                        <input onChange={this.onChangeTitle} type="text" name="title" className='form-control' /></p>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Image</label>
                        <input onChange={this.onChangeImage} type="text" name="image" className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Rating</label>
                        <select onChange={this.onChangeRating} className='form-control'>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                    </div>

                    <div className='form-group'>
                        <input type="submit" className="form-control btn btn-success btn-sm mt-3" value='Registrar libro' />
                        <button type="button" onClick={this.props.oncancel} className='btn btn-sm form-control mt-3'>Cancel</button>
                    </div>
                </form>
            </div>

        )

    }

}


export default PanelAll;