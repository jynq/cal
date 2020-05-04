import React from "react";

class Kalkulator extends React.Component {
  state = {
    wynik: "0",
    znak: "",
  };

  handleClick = (e) => {
    let { name, value, className, id } = e.target;

    let wynik = this.state.wynik;
    this.setState({
      wynik: name,
      znak: name,
    });
  };

  render() {
    return (
      <div>
        <span>{this.state.wynik}</span>
        <br />
        <button onClick={this.handleClick} name="backspace">
          (-
        </button>
        <button onClick={this.handleClick} name="wyczysc">
          CE
        </button>
        <button onClick={this.handleClick} name="skasuj">
          C
        </button>
        <button onClick={this.handleClick} name="odwroc">
          +-
        </button>
        <br />
        <button onClick={this.handleClick} name="7">
          7
        </button>
        <button onClick={this.handleClick} name="8">
          8
        </button>
        <button onClick={this.handleClick} name="9">
          9
        </button>
        <button onClick={this.handleClick} name="/">
          /
        </button>
        <br />
        <button onClick={this.handleClick} name="cztery">
          4
        </button>
        <button onClick={this.handleClick} name="piec">
          5
        </button>
        <button onClick={this.handleClick} name="szesc">
          6
        </button>
        <button onClick={this.handleClick} name="razy">
          *
        </button>
        <br />
        <button onClick={this.handleClick} name="jeden">
          1
        </button>
        <button onClick={this.handleClick} name="dwa">
          2
        </button>
        <button onClick={this.handleClick} name="trzy">
          3
        </button>
        <button onClick={this.handleClick} name="-">
          -
        </button>
        <br />
        <button onClick={this.handleClick} name="zero">
          0
        </button>
        <button onClick={this.handleClick} name="przecinek">
          ,
        </button>
        <button onClick={this.handleClick} name="+">
          +
        </button>
        <button onClick={this.handleClick} name="wynik">
          =
        </button>
        <br />
      </div>
    );
  }
}

export default Kalkulator;
