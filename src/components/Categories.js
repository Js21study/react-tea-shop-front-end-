import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Усі'
                },
                {
                    key: 'puer tea',
                    name: 'Пуер'
                },
                {
                    key: 'ulun tea',
                    name: 'Улун'
                },
                {
                    key: 'composition tea',
                    name: 'Композиційний чай'
                },
                {
                    key: 'bound tea',
                    name: "Зв'язаний чай"
                },
                {
                    key: 'white tea',
                    name: 'Білий чай'
                }
            ]
        }
    }

  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.name)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories