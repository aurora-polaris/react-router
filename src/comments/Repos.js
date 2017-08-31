/**
 * Created by lenovo on 2017/8/31.
 */
import React,{Component} from 'react'
import {Link} from 'react-router'
export default class Repos extends Component{
    state={
        repos: [
            {username: 'faceback', repoName: 'react'},
            {username: 'faceback', repoName: 'react-router'},
            {username: 'Angular', repoName: 'angular'},
            {username: 'Angular', repoName: 'angular-cli'}
        ]
    }
    render(){
        return(
            <div>
            <h2>Repos组件</h2>
                {
                    /*要产生多个列表，注意这里的箭头函数后要使用（），如果使用{}则不会有效果*/
                   this.state.repos.map((repo,index)=>(
                       <li key={index}>
                           {/*定义一个repo组件，映射一个路由，to后面才能进行拼串*/}
                           <Link to={`/repos/${repo.username}/${repo.repoName}`}>{repo.repoName}</Link>
                       </li>
                   ))

                }
                {/*显示当前路由组件*/}
                {this.props.children}
            </div>
        )



    }
}