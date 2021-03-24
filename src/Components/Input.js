import React from 'react'

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Amount: "",
      Service: "Excellent",
      customerName: "",
      latestTip: "",
      NameAndlatestTip: [],
      Tip: []

    }
    //  and here i access the user value
    this.handleAmount = (event) => {
      this.setState({ Amount: event.target.value })
    }

    this.handleService = (event) => {
      this.setState({ Service: event.target.value })
    }

    this.handlecustomerName = (event) => {
      this.setState({ customerName: event.target.value })
    }
    console.log(this.state.customerName)

    this.handleClick = () => {
      let billAmount = Number(this.state.Amount);

      let servicePercentage = 20

      if (this.state.Service === "Excellent") {
        servicePercentage = 20;
      } else if (this.state.Service === "Good") {
        servicePercentage = 15;
      } else if (this.state.Service === "Not so Good") {
        servicePercentage = 10;
      } else {
        return;
      }

      this.setState({ latestTip: billAmount * (servicePercentage / 100) })
      this.setState({ NameAndlatestTip: [...this.state.NameAndlatestTip, [this.state.customerName, billAmount * (servicePercentage / 100)]] })
      this.setState({ Tip: [...this.state.Tip, billAmount * (servicePercentage / 100)] })
    }
    //try to push values in array




  }
  render() {
    return (
      <div className="tent">
        <div >
          {/* i take he the  input from user means render   */}
          <input type="text" placeholder="Enter Amount" value={this.state.Amount}
            onChange={this.handleAmount} />
        </div>

        <select Name="Service" value={this.state.Service}
          onChange={this.handleService.bind(this)}>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Not so Good">Not so Good</option>
        </select>

        <lable>Enter The Name</lable>

        <input type="text" value={this.state.customerName}
          onChange={this.handlecustomerName} /><br/>

      <div ><input type="button"
          value="Calculate Tip"
          onClick={this.handleClick.bind(this)} /></div>
        

        <h1 style={{ display: this.state.latestTip ? "block" : "none" }}>
          Tip Generated :{this.state.latestTip}
        </h1>

        <ul>
          {this.state.NameAndlatestTip.map((item) => (
            <li>
              {item[0]} Offered {item[1]}
            </li>
          ))}
        </ul>

        <div className="tabless"><table>
          <th>
            TotalCustomerName
        </th>
          <th>
            TotalTip
        </th>

          <tr>
            <td>{this.state.Tip.length}</td>
            <td>{this.state.Tip.reduce((a, b) => a + b, 0)}</td>
          </tr>


        </table>
        </div>
      </div>
    )
  }
}

export default Input