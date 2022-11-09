import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"
import Categories from "./components/Categories"
import ShowFullItem from "./components/ShowFullItem"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Цзин Лун',
          img: 'Цзин Лун.jpg',
          desc: 'Прекрасний варіант для непосидьків, мандрівників по життю. Через постійні локдауни закордон їздити виходить не дуже. Але це додатковий привід вивчити свою країну. Випити чашечку Пу Ера в Карпатах.',
          category: 'Пуер',
          price: '270'
        },
        {
          id: 2,
          title: 'Молочний улун',
          img: 'Молочний улун.jpg',
          desc: 'На свіжий молочний улун чекають багато клієнтів. Цей чай обожнюють усі дівчата. ',
          category: 'Улун',
          price: '190'
        },
        {
          id: 3,
          title: 'Зелений мохіто',
          img: 'Зелений мохіто.jpg',
          desc: 'Доведіть до смаку коричневим цукром та газованою текілою! :-) Або пийте смачний безалкогольний корисний зелений чай!',
          category: 'Композиційний чай',
          price: '135'
        },
        {
          id: 4,
          title: 'Золото Імператора',
          img: 'Золото Імператора.jpg',
          desc: 'Це найкрасивіший з чаїв, які я бачила. На мій смак. Дуже добре, що мій смак збігається з імператорським',
          category: "Зв'язаний чай",
          price: '65'
        },
        {
          id: 5,
          title: 'Бай Хао Інь Чжень',
          img: 'Бай Хао Інь Чжень.jpg',
          desc: 'Найвишуканіший білий чай. Історично це був чай китайських аристократів. Дозволити собі його могли далеко не всі. На виготовлення цього напою йде лише найцінніша верхня брунька. Без листочків. Та сама брунька, яка вкрита тисячами дрібних ворсинок білого кольору.',
          category: 'Білий чай',
          price: '350'
        }

      
        
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer/>
      </div>
    )
  }


  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'Усі') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }
  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({ orders: [...this.state.orders, item]})
  }
}

export default App;
