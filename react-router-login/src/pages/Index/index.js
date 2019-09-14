import React from "react";
import  {Link}  from  'react-router-dom';

import style from "./index.css"
export default  class Index extends React.Component{
  onclickLogin = () => {
  	  localStorage.removeItem("isLogin");
  	  this.props.history.push("/login");
  }
	render(){
		return(
			 <div>
			   <div className={style["container"]+" "+style["container11"]}>
                 <div className={style["logo"]}><h1><a herf="#">门户网站</a></h1></div>
                 <ul className={style["menu"]}>
                   <li><Link to="/">产品简介</Link></li>
                   <li><Link to="/">最近的新闻</Link></li>
                   <li><Link to="/">视频内容</Link></li>
                   <li><Link to="/">艺术之家</Link></li>
                   <li><Link to="/login">登陆</Link></li>
                   <li><Link to="/" onClick={this.onclickLogin}>退出登录</Link></li>
                 </ul>
               </div>
               <section className={style["banner"]}>
                 <div className={style["banner-top1"]}>
                    <div className={style["banner_img"]}>
                       <div className={style["container"]+" "+style["conheight"]}>
                       	  <div className={style["content"]}>
                       	    <h3>2014年3月1日由中国友谊出版公司出版的图书</h3>
                       	    <h4>今天市场的一则大消息，让“茅台永远涨”的信仰受到了打击</h4>
                       	    <a href="#">内容更多</a>
                       	  </div>
                       </div>
                    </div>
                 </div>
               </section>
			 </div>
			)
	}
}
