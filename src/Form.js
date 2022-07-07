import React, {Component} from 'react'
import FishData from './FishData'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      user: '',
      favoriteColor: '',
      location: '',

    }
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }
  render() {
    return(
      <form>
        <label>What's Your Name Land Dweller?</label>
        <br/>
        <input onChange={this.handleChange} type='text' name='user' placeholder='Whats your name?'/>
        <br/>
        <h1> Select your fave color you biped(derogatory):</h1>
        <select onClick={this.handleChange} name='favoriteColor'>
        <br/>
          <option>--Please Select--</option>
          <option>Scarlet</option>
          <option>Olive</option>
          <option>Emerald</option>
          <option>Silver</option>
          <option>Chestnut</option>
          <option>Navy</option>
          <option>Cream</option>
          <option>Pearl</option>
          <option>Cyan</option>
          <option>Pink</option>
          <option>Black</option>
          <option>Yellow</option>
          <option>Orange</option>
          <option>Purple</option>
          <option>Chaos(I hate all colors)</option>
          <option>Pure(I love all colors)</option>
        </select>
        <br/>
        <h1> What type of place do you prefer to live(although it would be on land, so lame):</h1>
        <br/>
        <input onChange={this.handleChange} type='radio' name='location' value='desert'/>
        <label> I like dry, hot and dusty!</label>
            <br/>
        <input onChange={this.handleChange} type='radio' name='location' value='pacific northwest'/>
        <label> I love the rain, and like to keep the temp pretty avg all year</label>
            <br/>
        <input onChange={this.handleChange} type='radio' name='location' value='midwest'/>
        <label> I want all four seasons, I love snow and I love summer</label>
            <br/>
        <input onChange={this.handleChange} type='radio' name='location' value='New England'/>
        <label> I prefer the cold! Keep it snowy</label>
            <br/>
        <input onChange={this.handleChange}  type='radio' name='location' value='mountain west'/>
        <label> I like it dry but I can't live without snow</label>
            <br/>
        <input onChange={this.handleChange} type='radio' name='location' value='southeast coast'/>
        <label> I like it hot but cant do without rain!</label>
        <br/>
        <br/>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    )

  }
}
export default Form
