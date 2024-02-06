// Write your code here
import {Component} from 'react'

import './index.css'

class TabItem extends Component {
  render() {
    const {tabsList, getTabId, isActive} = this.props
    const displayTabId = () => {
      getTabId(tabsList.tabId)
    }

    const activeResult = isActive ? 'isActive' : ''

    return (
      <li className="tabItems">
        <button className={`button ${activeResult}`} onClick={displayTabId}>
          {tabsList.displayText}
        </button>
      </li>
    )
  }
}
export default TabItem
