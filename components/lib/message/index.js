import Vue from 'vue';
import main from './src/main.vue';
const constructor = Vue.extend(main);
let instance;
let instanceList = [];
const Message = function (options) {
    options = options || {};
    if (typeof options === "string") {
        options = {
            message: options
        }
    }
    instance = new constructor({
        data: options
    })
    instance.$mount();
    document.body.appendChild(instance.$el);
    let verticalOffset = options.offset || 20;
    instance.offset = verticalOffset;
    instance.visible = true;
    instance.$el.style.zIndex = 100;
    instanceList.push(instance);
    return instance;
}
let typeList = ['success', 'warning', 'info', 'error'];
typeList.forEach( type => {
    Message[type] = function(options) {
        if (typeof options === 'string') {
            return Message({
                type,
                message: options
            });
        }
        return Message({
            ...options,
            type
        });
    }
});
export default Message;