import React from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import style from "./index.css"
import 'antd/dist/antd.css';

class Index extends React.Component{
	 constructor(props){
        super(props);
    }

    handleSubmit  = (e)=>{
       e.preventDefault();
       this.props.form.validateFields((err,value)=>{
       		if(!err){
               window.localStorage.setItem("isLogin",value);
               let loca = JSON.stringify(localStorage.getItem("isLogin"));
               if(loca != ''){
               	 this.props.history.push("/")
               }
       		}
       	})
		
    }
	render(){
		const { getFieldDecorator } = this.props.form
		return(
			   <div className={style["content_box"]}>
			      <div>
			         <div className={style["login_wrapper"]}></div>
			         <ul className={style["bgBubbles"]}>
			          	<li></li>
			          	<li></li>
			          	<li></li>
			          	<li></li>
			          	<li></li>
			          	<li></li>
			          	<li></li>
			          	<li></li>
			          	<li></li>
			          	<li></li>
			          	<li></li>
			         </ul>
			      </div>
			 	  <div className={style["content_box"]}>
			 	  <div className={style["content_login"]}>
			 	   <div className={style["box"]}>
			 		<Form onSubmit={this.handleSubmit} >
			 		   <Form.Item>
			 		     {
			 		     	getFieldDecorator("userName",{
			 		     		rules:[{required:true,message:'请输入用户名'}]
			 		     	})(
			 		     	<Input
			 		      	   style={{height:"45px"}}
			 		     	   prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)' }} />}
              				   placeholder="Username" 
			 		     	/>
			 		     	)
			 		     }
			 		   </Form.Item>
			 		   <Form.Item>
			 		     {
			 		     	getFieldDecorator("password",{
			 		     		rules:[{required:true,message:'请输入密码'}]
			 		     	})(
			 		     	<Input
			 		     	   style={{height:"45px"}}
			 		     	   prefix={<Icon 
			 		     	   	type="lock" 
			 		     	   	style={{color: 'rgba(0,0,0,.25)' }} />}
			 		     	   	type="password"
              				   placeholder="password" 
			 		     	/>
			 		     	)
			 		     }
			 		   </Form.Item>
			 		   <Form.Item>
			 		     <Button
			 		     	type="primary" className={style["login-form-bottom"]} style={{height:"40",fontSize:"17px"}} htmlType="submit" >登陆</Button>
			 		   	</Form.Item>
			 			</Form>
			 		</div>
			 	  </div>
			 	</div>
			 </div>
			 	)
	}
}

const Indexcreate =  Form.create()(Index) 
export default  Indexcreate;
