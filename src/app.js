import { Block } from '@tarojs/components'
import Taro from '@tarojs/taro'

class App extends Taro.Component {
  config = {
    pages: ['index/index'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    // sitemapLocation: 'sitemap.json'
  }

  render() {
    return null
  }
}

export default App;
Taro.render(<App />, document.getElementById('app'))
