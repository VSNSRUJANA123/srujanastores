// Write your code here
import {Component} from 'react'
import './index.css'

class AppItem extends Component {
  render() {
    const {appsList} = this.props
    return (
      <li className="appLiContainer">
        <img src={appsList.imageUrl} alt={appsList.appName} />
        <p>{appsList.appName}</p>
      </li>
    )
  }
}
export default AppItem
