import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory,IndexRoute} from 'react-router'
import App from './comments/App'
import About from './comments/About'
import Home from './comments/Home'
import Repos from './comments/Repos'
import Repo from './comments/Repo'


ReactDOM.render((
    <Router history={hashHistory}>
       {/*注册根路由*/}
        <Route path="/" component={App}>
            {/*注册根路由的子路由*/}
            <IndexRoute component={Home}/>  {/*设置默认子路由（下标路由）*/}
            <Route path="/about" component={About}/>
            <Route path="/repos" component={Repos}>
                {/*写入通配符，用来存储数据的key，如果不写：，则表示只能在规定的这个路径下访问*/}
                <Route path="/repos/:name/:repo" component={Repo}/>
            </Route>
        </Route>
    </Router>
), document.getElementById('root'));

