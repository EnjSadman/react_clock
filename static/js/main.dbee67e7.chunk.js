(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(7),o=c.n(n),a=c(2),i=c(3),r=c(5),l=c(4),s=c(1),u=c.n(s),h=(c(12),c(0)),m=function(t){Object(r.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={time:""},t.timerId=void 0,t}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){var e=new Date;t.setState({time:e.toLocaleTimeString()})}),1e3)}},{key:"componentDidUpdate",value:function(t){t.clockName!==this.props.clockName?console.log("name changed from ".concat(t.clockName," to ").concat(this.props.clockName)):console.log(this.state.time)}},{key:"componentWillUnmount",value:function(){this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){return Object(h.jsxs)("p",{id:"clock",style:{display:"block"},children:["Current time:"," ","".concat(this.state.time)]})}}]),c}(u.a.Component),b=function(t){Object(r.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={isClockVisible:!0,clockName:Math.floor(10*Math.random())},t}return Object(i.a)(c,[{key:"render",value:function(){var t=this,e=this.state.isClockVisible;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"React clock"}),e&&Object(h.jsx)(m,{clockName:this.state.clockName}),Object(h.jsx)("button",{type:"button",onClick:function(){t.setState({isClockVisible:!0})},children:"Show"}),Object(h.jsx)("button",{type:"button",onClick:function(){t.setState({isClockVisible:!1})},children:"Hide"}),Object(h.jsx)("button",{type:"button",onClick:function(){t.setState({clockName:Math.floor(10*Math.random())})},children:"Random Name"})]})}}]),c}(u.a.Component),d=b;o.a.render(Object(h.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.dbee67e7.chunk.js.map