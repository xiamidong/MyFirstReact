/**
 * Created by lvjunxia on 2016/3/28.
 */

/*院感头部最外层*/
var LteHead=React.createClass({
      render:function () {
        return (
          <div className="header">
              <HeadLogo userTitle={this.props.userTitle}  />
              <NavBar userName={this.props.userName} url={this.props.url} />
           </div>
        );
      }
});
var HeadLogo=React.createClass({
  render:function () {
    return (
      <a href="#" className="logo">{this.props.userTitle}</a>
    );
  }
});
/*创建头部导航组件*/
var NavBar=React.createClass({
  render:function(){
    return(
        <div className="navbar">
            <SideBarButton />
            <NavBarMenu userName={this.props.userName} url={this.props.url} />
        </div>
      );
  }
});
/*创建左边按钮切换*/
var SideBarButton=React.createClass({
    render:function(){
      return(
          <a href="#" className="sidebarbutton"><i className="icon-reorder"></i></a>
        );
    }
});
/*创建头部右侧导航菜单链接外框*/
var NavBarMenu=React.createClass({
    render:function(){
      return (
            <div className="navbarmenu">
                <ul className="navbar-nav">
                    <li className="navmenulist"><MessageMenu /><MessageBoard /></li>
                    <li className="navmenulist"><NotificationsMenu /></li>
                    <li className="navmenulist"><TasksMenu /></li>
                    <li className="navmenulist"><PersonMenu userName={this.props.userName} url={this.props.url} /></li>
                    <li className="navmenulist"><ControlSidebar /></li>
                </ul>
            </div>
        );
    }
});
/*创建信息图标*/
var MessageMenu=React.createClass({
  render:function(){
    return(
          <a href="#" className="navbarlsta messagemenu">
              <i className="icon-envelope-alt " />
              <span className="label label-success">4</span>
          </a>
      );
  }
});
/*创建通知图标*/
var NotificationsMenu=React.createClass({
  render:function(){
    return(
          <a href="#" className="navbarlsta notifications">
              <i className="icon-bell-alt" />
              <span className="label label-warning">4</span>
          </a>
      );
  }
});
/*创建任务图标*/
var TasksMenu=React.createClass({
  render:function(){
    return(
          <a href="#" className="navbarlsta tasksmenu">
              <i className="icon-flag" />
              <span className="label label-danger">4</span>
          </a>
      );
  }
});
/*个人中心*/
var PersonMenu=React.createClass({
    render:function(){
      return (
            <a href="#" className="navbarlsta personmenu">
              <img src={this.props.url} /><span>{this.props.userName}</span>
            </a>
        );
    }
});
/*创建头部右侧设置图标*/
var ControlSidebar=React.createClass({
    render:function(){
      return(
            <a href="#" className="navbarlsta controlsidebar">
                <i className="icon-cogs" />
            </a>
        );
    }

});
/*创建信息下拉列表*/
var MessageBoard=React.createClass({
  render:function(){
    return (
         <ul className="messageboard dropboard">
              <li className="messageheader">You have 4 messages</li>
              <li>
                  <ul className="messagelist">
                      <li>
                          <a href="#">
                              <div className="messageimg">
                                  <img src="images/user.jpg" className="img-circle" alt="User Image" />
                              </div>
                              <h4>
                                Support Team
                                <small><i className="icon-time"></i> 5 mins</small>
                              </h4>
                              <p>Why not buy a new awesome theme?</p>
                          </a>
                      </li>
                  </ul>
              </li>
              <li className="messagefooter"><a href="#">See All Messages</a></li>
         </ul>
      );
  }
});


ReactDOM.render(
  <LteHead userTitle="AdminLte" url="images/user.jpg" userName="Alexander Pierce"  />,
  document.getElementById("content")

);
