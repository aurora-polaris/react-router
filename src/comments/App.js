/**
 * Created by lenovo on 2017/8/31.
 */
import React from 'react'
import {Link} from 'react-router'
export default function App(props) {
    return (
        <div>
           <h1>Hello router!</h1>
            <ul>
                <li>
                    {/*这里的to="/about" 必须要写，定义了a标签的href
                       这里的activeClassName="active" 是添加了一个class属性值，可以设置当前点击链接的颜色*/}
                    <Link to="/about" activeClassName="active">About</Link>
                </li>
                <li>
                    <Link to="/repos" activeClassName="active">Repos</Link>
                </li>
            </ul>
            {/*显示当前路由组件*/}
            {props.children}
        </div>
    )
}
