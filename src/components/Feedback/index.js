// Write your React code here.
import './index.css'
import {Component} from 'react'

class Feedback extends Component {
  state = {isFeedbackGiven: false}

  onDisplay = () =>
    this.setState(prevState => ({isFeedbackGiven: !prevState.isFeedbackGiven}))

  render() {
    const {resources} = this.props
    const {isFeedbackGiven} = this.state
    const {emojis, loveEmojiUrl} = resources
    const {id, name, imageUrl} = emojis

    if (isFeedbackGiven) {
      return (
        <div className="thank-you-container">
          <img className="img" src={loveEmojiUrl} alt="love emoji" />
          <h1 className="heading">Thank You</h1>
          <p className="emoji-head">
            We will use your feedback to improve our customer support{' '}
          </p>
        </div>
      )
    }

    return (
      <div className="card-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <div className="imojis">
          <li className="margin">
            <img
              src={emojis[0].imageUrl}
              alt={emojis[0].name}
              className="img"
              onClick={this.onDisplay}
            />
            <p className="emoji-head">{emojis[0].name}</p>
          </li>
          <li className="margin">
            <img
              src={emojis[1].imageUrl}
              alt={emojis[1].name}
              className="img"
              onClick={this.onDisplay}
            />
            <p className="emoji-head">{emojis[1].name}</p>
          </li>
          <li className="margin">
            <img
              src={emojis[2].imageUrl}
              alt={emojis[2].name}
              className="img"
              onClick={this.onDisplay}
            />
            <p className="emoji-head">{emojis[2].name}</p>
          </li>
        </div>
      </div>
    )
  }
}

export default Feedback
