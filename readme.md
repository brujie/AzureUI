# azure-ui 组件库

### 快速开始

#### 1.安装组件库
```bash
cnpm i azure-ui -D
```

#### 2.使用组件库
```javascript
// 全部引入
import 'azure-ui/dist/css/index.css';
import AzureUI from 'azure-ui';

Vue.use(AzureUI);

// 按需引入
import 'azure-ui/dist/css/card.css';
import { card } from 'azure-ui';
Vue.use(card);

```
