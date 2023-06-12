// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generate = () => {
    const random = Math.ceil(Math.random() * 100)
    // console.log(random)
    this.setState({number: random})
  }

  render() {
    const {number} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h2 className="heading">Random Number</h2>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" onClick={this.generate}>
            Generate
          </button>
          <p className="para">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
