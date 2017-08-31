import React,{Component} from 'react'
export default class Repo extends Component{

    render(){
    //const {name,repo}=this.props.params
        return (
            <div>

               用户名：{this.props.params.name},仓库名：{this.props.params.repo}
            </div>

        )


    }
}
