// TODO

// const GroceryListApp = () => (
//   <div>
//     <h2>My Grocery List</h2>
//     <GroceryListItem items={['Bread', 'Almond Butter', 'Cereal', 'Juice']}/>
//   </div>
// )

// const Bread = () => (
//   <li>Bread</li>
// )

// const AlmondButter = () => (
//   <li>Almond Butter</li>
// ) 

// Stateless Functional Component
// const GroceryListItem = (props) => (
//   <ul>
//     <li>{props.items[0]}</li>
//     <li>{props.items[1]}</li>
//     <li>{props.items[2]}</li>
//     <li>{props.items[3]}</li>
//   </ul>
// )

// ReactDOM.render(<GroceryListApp />, document.getElementById('app'));






// Refactor to Stateful Class Component
const GroceryListApp = (props) => (
  <div>
    <h2>My Grocery List</h2>
    <ul>
      {props.items.map(item =>
        <GroceryListItem item={item} />
      )}
    </ul>
  </div>
)

// Refactor into a Class component
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hovering: false
    }
  }

  // https://facebook.github.io/react/docs/events.html
  onListItemMouseEnter() {
    this.setState({
      hovering: true
    })
  }

  onListItemMouseLeave() {
    this.setState({
      hovering: false
    })
  }

  render() {

    var style = {
      fontWeight: this.state.hovering ? 'bold' : 'normal'
    };

    return(
      <li 
        style={style} 
        onMouseEnter={this.onListItemMouseEnter.bind(this)}
        onMouseLeave={this.onListItemMouseLeave.bind(this)}  
        >
        {this.props.item}
      </li>
    )
  }
}


ReactDOM.render(<GroceryListApp items={['Bread', 'Almond Butter', 'Cereal', 'Juice']}/>, document.getElementById('app'));
