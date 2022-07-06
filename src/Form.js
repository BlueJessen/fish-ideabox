import React, {Component} from 'react'
import FishData from './FishData'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return(
      <form>
        <label>What's Your Name Land Dweller?</label>
        <input type='text' name='user' placeholder='Whats your name?'/>
        <br/>
        <select name='favoriteColor'>
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
      </form>
    )

  }
}
export default Form
