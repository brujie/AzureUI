# 快速开始

#### 安装组件库
```bash
npm i azure-ui 
```

#### 引用组件库
> 在main.js中引入组件库
```javascript
// 全部引入

import 'azure-ui/dist/css/index.css';
import AzureUI from 'azure-ui';

Vue.use(AzureUI);
```

```javascript
// 按需引入

import 'azure-ui/dist/css/card.css';
import { card } from 'azure-ui';

Vue.use(card);
```