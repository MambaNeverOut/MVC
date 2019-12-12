import EventBus from './EventBus.js'

class Model extends EventBus {
  constructor(options) {
    super()
    const keys = ['data', 'update', 'create', 'delete', 'get']
    keys.forEach((key) => {
      if (key in options) {
        this[key] = options[key]
      }
    })
    // this.data = option.data
    // this.create = option.create
    // this.delete = option.delete
    // this.update = option.update
    // this.get = option.get
  }
  create() {
    console && console.error && console.error("你还没有实现 create 方法");
    // 新语法：console ? .error ? .('你还没有实现create方法')
  }
  delete() {
    console && console.error && console.error("你还没有实现 delete 方法");
  }
  update() {
    console && console.error && console.error("你还没有实现 update 方法");
  }
  get() {
    console && console.error && console.error("你还没有实现 get 方法");
  }
}

export default Model;