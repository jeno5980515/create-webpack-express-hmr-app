import express from 'express' ;
import path from 'path' ;
import webpack from 'webpack' ;
import webpackConfig from '../webpack.config' ;
import webpackDevMiddleware from 'webpack-dev-middleware' ;
import webpackHotMiddleware from 'webpack-hot-middleware' ;


const app = express();
const port = process.env.PORT || 3000 ;
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));

app.use('/static', express.static(path.join(__dirname, '../','public'))) ;

app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname, '../','client/index.html'));
});

app.listen(port,()=>{
	console.log('Listening!');
})