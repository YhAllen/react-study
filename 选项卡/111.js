let TabsControl = React.createClass({
  getInitialState: function(){
    return {currentIndex: 0}
  },
  getTitleItemCssClasses: function(index){
    return index === this.state.currentIndex ? "tab-title-item active" : "tab-title-item";
  },
  
  getContentItemCssClasses: function(index){
    return index === this.state.currentIndex ? "tab-content-item active" : "tab-content-item";
  },
  
  render: function(){
    let that = this;
    let {baseWidth} = this.props;
    let childrenLength = this.props.children.length;
    return (
      <div>
        <nav className="tab-title-items">
          {React.Children.map(this.props.children, (element, index) => {
            return (<div onClick={() => {this.setState({currentIndex: index})}} className={that.getTitleItemCssClasses(index)}>{element.props.name}</div>)
          })}
        </nav>
        <div className="tab-content-items">
          {React.Children.map(this.props.children, (element, index) => {
            return (<div className={that.getContentItemCssClasses(index)}>{element}</div>)
          })}  
        </div>
      </div>
    )
  }
});
let Tab = React.createClass({
  render: function(){
    return (<div>{this.props.children}</div>);
  }
});
let App = React.createClass({
  render:function(){
    return (<div className="container">
              <TabsControl baseWidth={400}>
                <Tab name="red">
                  <div className="red">我是红色的标签页</div>
                </Tab>
                <Tab name="blue">
                  <div className="blue">我是蓝色的标签页</div>
                </Tab>
                <Tab name="yellow">
                  <div className="yellow">我是黄色的标签页</div>
                </Tab>
              </TabsControl>
            </div>);
  }
});
ReactDOM.render(
  <App/>,
  document.getElementById('app')
);