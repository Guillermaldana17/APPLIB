import React, { Component } from 'react'
import Items from './Items'
class List extends Component {

  render() {
    return (
      <div className='col-sm-12'>
        <div className='container-fluid'>
          <div className='row'>
            {

              this.props.items.map(item =>
                <div className='col-sm-2 mt-2'>
                  <Items
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    rating={item.rating}
                    
                    onupdaterating={this.props.onupdaterating}
                    onremove={this.props.onremove}
                    />
                </div>

              )
            }
          </div>
        </div>

      </div>
    )
  }

}

export default List;