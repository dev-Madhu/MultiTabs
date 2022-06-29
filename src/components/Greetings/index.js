import {Component} from 'react'

import TabItem from '../TabItem'
import GreetingItem from '../GreetingItem'

import './index.css'

const tabsList = [
  {tabId: 'English', displayText: 'English'},
  {tabId: 'Tamil', displayText: 'Tamil'},
  {tabId: 'Telugu', displayText: 'Telugu'},
]

class Greetings extends Component {
  state = {activeTabId: tabsList[0].tabId}

  clickTabItem = tabValue => {
    this.setState({activeTabId: tabValue})
  }

  getFilteredProjects = () => {
    const {activeTabId} = this.state
    const {greetingsList} = this.props
    const filtered = greetingsList.find(
      eachGreet => eachGreet.buttonText === activeTabId,
    )
    return filtered
  }

  render() {
    const {activeTabId} = this.state
    const filtered = this.getFilteredProjects()
    return (
      <div className="app-container">
        <h1 className="app-heading">Multilingual Greetings</h1>
        <ul className="tabs-container">
          {tabsList.map(tabDetails => (
            <TabItem
              key={tabDetails.tabId}
              tabDetails={tabDetails}
              clickTabItem={this.clickTabItem}
              isActive={activeTabId === tabDetails.tabId}
            />
          ))}
        </ul>

        <div className="project-list-container">
          <GreetingItem greetingDetails={filtered} />
        </div>
      </div>
    )
  }
}

export default Greetings
