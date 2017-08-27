        var delectItem="delectItem";
        var ItemComponent=React.createClass({
            render:function(){
                return (
                    <li className="list-group-item">
                                <div className="handle">
                                    <a href="javascript:;" onClick={this.delectHandle}>删除</a>
                                </div>
                                <p className="user"><span>{this.props.userName}</span><span>说：</span></p>
                                <p className="centence">{this.props.content}</p>
                    </li>
                )
            },
            delectHandle:function (){
						
						PubSub.publish(delectItem,this.props._id);	
					}
        });

        var ListComponent=React.createClass({
            render:function(){
                var isNone=!!this.props.listArr.length?"none":"block";
                return (
                    <div className="col-md-8">
                        <h3 className="reply">留言回复：</h3>
                        <h2 style={{display:isNone}}>暂无留言，点击左侧添加留言</h2>
                        <ul className="list-group">
                            {
                                this.props.listArr.map(function(item,index){
                                    return <ItemComponent key={index} {...item}/>
                                })
                            }
                            
                        </ul>
                    </div> 
                )
            }
        });

        var MesComponent=React.createClass({
            render:function(){
                return (
                    <div className="col-md-4">
                        <form className="form-horizontal">
                            <div className="form-group">
                                <label>用户名</label>
                                <input ref="text_user" type="text" className="form-control" placeholder="用户名"/>
                            </div>
                            <div className="form-group">
                                <label>留言内容</label>
                                <textarea ref="text_content" className="form-control" rows="6" placeholder="留言内容"></textarea>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button type="button" className="btn btn-default pull-right" onClick={this.addItemHandle}>提交</button>
                                </div>
                            </div>
                        </form>
                    </div>
                )
            },
            addItemHandle:function(){
                var userName=this.refs.text_user.value;
                var content=this.refs.text_content.value;
                this.props.addItem({
							userName:userName,
							content:content,
							_id:Date.now()
						});
                this.refs.text_user.value="";
                this.refs.text_content.value="";
                
            }
        });

        var MainComponent=React.createClass({
            getInitialState:function(){
                return {
                    listArr:this.props.listArr
                }
            },
            componentDidMount:function (){
					PubSub.subscribe(delectItem,function (evName,data){
                    var newArr=this.state.listArr.filter(function(item,index){
                        return item._id !==data
                    });
                    this.setState({listArr:newArr})
                }.bind(this))
            },
            addItem:function(data){
                this.state.listArr.push(data);
                this.setState({listArr:this.state.listArr})
               
            },
            render:function(){
                return (
                    <div className="container">
                        <MesComponent addItem= {this.addItem}/>
                        <ListComponent listArr={this.state.listArr}/>
                    </div>
                )
            }
        });

        
var listArr = [
						{
							userName:"Allen",
							content:"欢迎",
							_id:Date.now()
						},{
							userName:"Yh",
							content:"来到",
							_id:Date.now()+1
						}
					];
        ReactDOM.render(<MainComponent listArr={listArr}/>,document.getElementById("demo"));