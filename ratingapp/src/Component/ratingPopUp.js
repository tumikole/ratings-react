import React, { Component } from "react";

export default class ratingPopUp extends Component {
  render() {
    return (
      <div>
        <ul>
            
    {this.props.list.map((list, index) => {
        return (

    <div key={index}>
        <li>{list.rating}</li>
    </div>

        )
    })}
        </ul>
      </div>
    );
  }
}
