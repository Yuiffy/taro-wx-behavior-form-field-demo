import { Block, Input, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './custom-form-field.scss'

class _C extends Taro.Component {
  static defaultProps = {
    value: 'default!',
    name: 'nameme'
  }

  constructor(props) {
    super(props);
    const name = this.props.name; // taro bug，必须要读一下name才能使behaviors生效。
    this.state = { value: this.props.value };
    console.log("custom-form-field name=", name);
  }

  static behaviors = ['wx://form-field']

  render() {
    const { value } = this.state;
    console.log("render", value);
    return <View>
      <Input value={value} onInput={(e) => {
        // 这里用onInput而不是onChange，因为Taro的这两个实际上并不相同，onChange在失去焦点才会触发。
        const newVal = e.target.value;
        this.setState({ value: newVal });
      }}
      />
    </View>
  }
}

export default _C
