import Vue from 'vue'
import MessageComponent from '~/components/Message.vue'

const Message = {}

// 注册Message
Message.install = function (Vue) {
  // 生成一个Vue的子类
  // 同时这个子类也就是组件
  const MessageConstructor = Vue.extend(MessageComponent)
  // 生成一个该子类的实例
  const instance = new MessageConstructor()

  // 将这个实例挂载在我创建的div上
  // 并将此div加入全局挂载点内部
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)
  // 通过Vue的原型注册一个方法
  // 让所有实例共享这个方法
  Vue.prototype.$message = (msg, type = 'info', duration = 2000) => {
    instance.message = msg
    instance.type = type
    instance.show = true
    setTimeout(() => {
      instance.show = false
    }, duration)
  }
}

Vue.use(Message)
