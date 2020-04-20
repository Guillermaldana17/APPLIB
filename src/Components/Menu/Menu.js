import React, { Component } from 'react'
import Search from '../Search'
import PanelAll from '../Panel'
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { newItemPanel: false }

    }
    add = () => {
        this.setState({ newItemPanel: true })
        console.log('Funciona')
    }
    onCancel = (e) => {
        console.log('Cancel');
        this.setState({ newItemPanel: false })
    }

    render() {
        return (

            <div className='col-sm-12 navbar navbar-dark bg-dark'>
                <div className='container-fluid row'>

                    <div className='col-sm-4 text-right text-light font-weight-bold'>
                        {this.props.title}
                    </div>
                    <div className='col-sm-4 text-center'>
                        <Search  onsearch={this.props.onsearch}/>
                    </div>
                    <div className='col-sm-4'>
                        <button onClick={this.add} className='btn btn-secondary btn-sm'> + Agregar Libro</button>
                    </div>
                    <div className='col-sm-12'>
                        {
                            (this.state.newItemPanel) ? 
                            <PanelAll oncancel={this.onCancel} onadd={this.props.onadd} /> 
                            : ''
                        }
                    </div>

                </div>

            </div>
        )

    }

}


export default Menu;