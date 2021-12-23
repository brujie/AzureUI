//完整组件列表地址 https://github.com/ElemeFE/element/blob/master/components.json
/* element组件 */
import Vue from 'vue'
import {
    Button, Loading, Container, Header, Aside, Footer, Menu,
    Submenu, MenuItem, MenuItemGroup, Table, TableColumn, main,
    Row, Col, Pagination, Dropdown, DropdownMenu, DropdownItem,
    Form, FormItem, Input, Checkbox, Image, Tooltip, Card,
    Tabs, TabPane, Select, Option, DatePicker, TimePicker, Tag, Steps,
    Progress, Dialog, Step, Tree,Radio,RadioGroup,Cascader,CascaderPanel,
    Slider,Upload
} from 'element-ui'

const Element = {
    install(Vue) {
        Vue.use(Button)
            .use(Loading)
            .use(Container)
            .use(Header)
            .use(Aside)
            .use(Footer)
            .use(Menu)
            .use(Submenu)
            .use(MenuItem)
            .use(MenuItemGroup)
            .use(Table)
            .use(TableColumn)
            .use(main)
            .use(Dropdown)
            .use(DropdownMenu)
            .use(DropdownItem)
            .use(Row)
            .use(Col)
            .use(Pagination)
            .use(Form)
            .use(FormItem)
            .use(Input)
            .use(Checkbox)
            .use(Image)
            .use(Tooltip)
            .use(Card)
            .use(Tabs)
            .use(TabPane)
            .use(Select)
            .use(Option)
            .use(DatePicker)
            .use(TimePicker)
            .use(Tag)
            .use(Progress)
            .use(Dialog)
            .use(Steps)
            .use(Step)
            .use(Tree)
            .use(Radio)
            .use(RadioGroup)
            .use(Cascader)
            .use(CascaderPanel)
            .use(Slider)
            .use(Upload)
        // 将组件挂载到Vue实例的原型对下
    }
}

export default Element