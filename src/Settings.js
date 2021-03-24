import { Button } from "antd";
import {
    RightOutlined,
} from '@ant-design/icons';
import { withRouter } from "react-router-dom";
const { Component } = require("react");


class Settings extends Component {
    onClick = () => {
        const rand = Math.random();
        this.props.history.push({
            pathname: `/settings/${rand}`,
            state: {
                str: 'hello rand:',
                rand: rand,
            }
        })
    }
    render() {
        return([
            <div style={{ background: '#fff', padding: 24, minHeight: 360 }}>
              This is Settings
            </div>,
            <Button type="primary" icon={<RightOutlined />} onClick={this.onClick}> JUMP </Button>
        ])
    }
}

export default Settings;