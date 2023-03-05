import React, { Component } from "react";

class Product extends Component {
  state = {
    name: "Burger",
    count: 4,
    imgUrl: "../public/logo192.png",
    names: ["Ahmed", "Merhan", "Amr"],
  };

  getClasses() {
    return this.state.count === 0
      ? "badge bg-warning m-2"
      : "badge bg-primary m-2";
  }

  renderNames() {
    if (this.state.names.length === 0) {
      return <h2>No names</h2>;
    }

    return (
      <ul>
        {this.state.names.map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
    );
  }

  incrementHandler = (num) => {
    this.setState({ count: this.state.count + num });
  };

  increment = () => {
    this.incrementHandler(2);
  };

  render() {
    return (
      <div>
        <span style={{ color: "red" }}>{this.state.name}</span>
        <span className={this.getClasses()}>{this.state.count}</span>
        <button
          onClick={() => {
            this.incrementHandler(2);
          }}
          className="btn btn-primary btn-sm"
        >
          +
        </button>

        {/* conditional rendering 1 with function */}
        {this.renderNames()}

        {/* conditional rendering 2 with && */}
        {this.state.names.length === 0 && <h4>No Names</h4>}
        <ul>
          {this.state.names.map((name) => {
            return <li key={name}>{name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Product;
