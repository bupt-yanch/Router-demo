const { Component } = require("react");


class RandomShow extends Component {
    render() {
        const str = this.props.location.state.str + this.props.location.state.rand;
        return(
            <div style={{ background: '#fff', padding: 24, minHeight: 360 }}>
              {str}
            </div>
        )
    }
}

export default RandomShow;