import React, { Component } from 'react';
import './Items.css'

class Items extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title:'',
            image:'',
            rating:'',
            stars: []
        };
    }
    componentDidMount() {
        this.setState({
            id: this.props.id,
            title: this.props.title,
            image: this.props.image,
            rating: parseInt(this.props.rating),
            stars: Array(parseInt(this.props.rating)).fill(0)
        })
    }

    onChangeRating = (e) => {
        const rating = parseInt(e.target.value)
        
        this.setState({
            rating: parseInt(e.target.value),
            stars: Array(parseInt(e.target.value)).fill(0)
        });
        this.props.onupdaterating({id:this.state.id, title: this.state.title, image: this.props.image, rating: rating})
    }
    onremove = (e) =>{
        this.props.onremove(this.props.id);
        }
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <img src={'img/' + this.state.image} width='100%'></img>
                    <strong>{this.state.title}</strong>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <p>
                                {
                                    this.state.stars.map(x =>
                                        <img key={x} src='img/stars.png' width='32'></img>
                                    )
                                }
                            </p>
                Calificacion:
                        <select value={this.state.rating} onChange={this.onChangeRating} className='form-control-sm'>
                                
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </select>
                        </div>

                    </div>
                </div>
                <div className="card-footer">
                    <button 
                        className='btn btn-danger btn-delete' 
                        onClick={this.onremove}>
                        Eliminar
                    </button>
                </div>
            </div>
        )
    }
}


export default Items;