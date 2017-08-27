var Container=React.createClass({
    render:function(){
        return (
            <div className="item">
                <h1>学员成信息表</h1>
                <div className="bs-example">
                    <div className="form-group">
                        <label>按性别筛选</label>
                        <select className="form-control">
                            <option value="all">all</option>
                            <option value="1">男</option>
                            <option value="0">女</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>按名字筛选</label>
                        <input type="text" className="form-control" placeholder="请输入名字"/>
                    </div>
                </div>
            </div>
        )
    }
});

var List=React.createClass({
    render:function(){
        return (
            <ul className="list">
                <li>欢迎</li>
                <li>欢迎</li>
                <li>欢迎</li>
                <li>欢迎</li>
                <Item/>
            </ul>
        )
    }
});

var Item=React.createClass({
    render:function(){
        return (
            <p>这是一个内容</p>
        )
}
});

ReactDOM.render(<Container/>,document.getElementById("app"));