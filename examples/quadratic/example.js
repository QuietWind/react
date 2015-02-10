var QuadraticCalculator = React.createClass({
  getInitialState: function() {
    return {
      a: 1,
      b: 3,
      c: -4
    };
  },
  handleChange: function(event) {
    this.setState({
      a: parseFloat(this.refs.a.getDOMNode().value),
      b: parseFloat(this.refs.b.getDOMNode().value),
      c: this.refs.c.getDOMNode().value
    });
  },
  render: function() {
    var a = this.state.a;
    var b = this.state.b;
    var c = this.state.c
    var x1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    var x2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    return (
      <div>
        <strong>
          <em>ax</em><sup>2</sup> + <em>bx</em> + <em>c</em> = 0
        </strong>
        <h4>Solve for <em>x</em>:</h4>
        <p>
          <label>
            a: <input type="number" value={a} ref="a" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            b: <input type="number" value={b} ref="b" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            c: <input type="number" value={c} ref="c" onChange={this.handleChange} />
          </label>
          <br />
          x: <strong>{x1}, {x2}</strong>
        </p>
      </div>
    );
  }
});

React.render(
  <QuadraticCalculator />,
  document.getElementById('container')
);
