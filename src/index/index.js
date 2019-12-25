import { Block, Form, Button, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import CustomFormField from '../components/custom-form-field'
import './index.scss'

class _C extends Taro.Component {
  config = {}

  formSubmit(e) {
    console.info('表单提交携带数据', e.detail.value);
    Taro.showToast({ title: JSON.stringify(e.detail.value), icon: "none" });
  }

  render() {
    return (
      <Form onSubmit={this.formSubmit}>
        自定义组件：<CustomFormField name="custom-name" value='out' />
        原生：<Input name='yuansheng' value='原123' />
        <Button formType="submit">提交</Button>
      </Form>
    )
  }
}

export default _C
