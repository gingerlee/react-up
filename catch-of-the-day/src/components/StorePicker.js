import React from "react"
import { getFunName } from "../helpers"

class StorePicker extends React.Component {
  myInput = React.createRef()
  goToStore(event) {
    event.preventDefault()
  }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
          ref={this.myInput}
        />
        <button type="submit">Visit Store!</button>
      </form>
    )
  }
}

export default StorePicker
