import NewCard from '../components/NewCard';
import detectNetwork from '../lib/cards';



class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      network: ""
    }
  }
  handleChange(e){
    this.setState({network: detectNetwork(e.target.value)})
  }

  render(){
    return (<div>
        <h1>Card Networks</h1>
        <NewCard onChange = {this.handleChange.bind(this)} />
        <p>{this.state.network}</p>
      </div>
    )
  }
  
}


export default Home;
