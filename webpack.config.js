const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const glob = require('glob');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
let entryList = {};
async function markList(dirPath,list){
    const files = glob.sync(`${dirPath}/**/index.js`);
    for(let file of files){
        const component = file.split(/[/.]/)[2];
       list[component] = `./${file}`
    }
}
markList('components',entryList)
module.exports = {
    mode:'production',
    entry:entryList,
    output:{
        filename:'js/[name].umd.js',
        path:path.resolve(__dirname,'dist'),
        library:'azure-ui',
        libraryTarget:'umd',
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new CleanWebpackPlugin()
    ]
}