import React, {Component} from 'react'
import './FishData.css'

class FishData extends Component {
  constructor() {
    super()
    this.state = {
      fishSpecies: []
    }
}
    componentDidMount(){
      fetch('https://www.fishwatch.gov/api/species')
      .then(response => response.json())
      .then(data => this.setState({
        fishSpecies: data
      }))
    }

  render() {
    console.log(this.state.fishSpecies[3])
    return (
      <h1>Fish Data</h1>
    )
  }
}
export default FishData
