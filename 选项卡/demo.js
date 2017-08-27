let TabsControl = React.createClass({
  getInitialState: function(){
    return {currentIndex: 0}
  },
  getTitleItemCssClasses: function(index){
    return index === this.state.currentIndex ? "tab-title-item active" : "tab-title-item";
  },
  getTitleLineCssClasses: function(index){
    return index === this.state.currentIndex ? "tab-title-line active" : "tab-title-line";
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
            return (<div onClick={() => {this.setState({currentIndex: index})}} className={that.getTitleItemCssClasses(index)}><img src={element.props.src}></img>{element.props.name}</div>);
          })}
        </nav>
        <div className="tab-title-lines">
            {React.Children.map(this.props.children, (element, index) => {
            return (<div onClick={() => {this.setState({currentIndex: index})}} className={that.getTitleLineCssClasses(index)}></div>);
          })}
        </div>
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
                <Tab name="工程建设" src="./img/吊车.png">
                  <div className="first">我是第一个标签页</div>
                </Tab>
                <Tab name="政府采购" src="./img/采购.png">
                  <div className="second">我是第二个标签页</div>
                </Tab>
                <Tab name="土地拍卖" src="./img/拍卖.png">
                  <div className="third">我是第三个标签页</div>
                </Tab>
                <Tab name="矿产交易" src="./img/矿产.png">
                  <div className="fourth">我是第四个标签页</div>
                </Tab>
              </TabsControl>
            </div>);
  }
});
ReactDOM.render(
  <App/>,
  document.getElementById('app')
);