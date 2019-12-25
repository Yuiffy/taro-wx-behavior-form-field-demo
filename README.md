# taro-wx-behavior-form-field-demo
用Taro开发微信小程序，里面想正确使用behaviors的form-field来让Form拿到自定义组件的value需要注意一些文档没有的细节，这里给出个demo

注意点：
1. 自定义组件里必须获取一下this.props.name，不然失败。（神秘Taro问题）
2. Input变化监控用onInput而不用onChange。（Taro文档里说一样，其实不一样，onInput每次变化都会更新，onChange在失去焦点才会更新，有时候会导致更新慢了submit拿不到最新值）
