import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isUser: false}

  onClickButton = () => {
    this.setState(prevState => ({isUser: !prevState.isUser}))
  }
  getButtonText = () => {
    const {isUser} = this.state

    return isUser ? 'Subscribed' : 'Subscribe'
  }
  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        <button className="button" onClick={this.onClickButton}>
          {buttonText}
        </button>
      </div>
    )
  }
}
export default Welcome
