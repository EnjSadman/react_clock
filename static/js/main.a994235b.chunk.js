(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),i=n(3),r=n(5),l=n(4),s=n(1),u=n.n(s),m=(n(12),n(0)),h=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={time:""},t.timerId=void 0,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){var e=new Date;t.setState({time:e.toLocaleTimeString()})}),1e3)}},{key:"componentWillUnmount",value:function(){this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){return Object(m.jsxs)("p",{id:"clock",style:{display:"block"},children:["Current time:"," ","".concat(this.state.time)]})}}]),n}(u.a.Component),b=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={clockName:t.props.name},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){console.log("start name for clock ".concat(this.state.clockName))}},{key:"componentDidUpdate",value:function(t){console.log("name changed from ".concat(t.name," to ").concat(this.props.name))}},{key:"render",value:function(){return""}}]),n}(u.a.Component),j=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={isClockVisible:!0,clockName:Math.floor(10*Math.random())},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.state.isClockVisible;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),e&&Object(m.jsx)(h,{}),Object(m.jsx)("button",{type:"button",onClick:function(){t.setState({isClockVisible:!0})},children:"Show"}),Object(m.jsx)("button",{type:"button",onClick:function(){t.setState({isClockVisible:!1})},children:"Hide"}),Object(m.jsx)("button",{type:"button",onClick:function(){t.setState({clockName:Math.floor(10*Math.random())})},children:"Random Name"}),Object(m.jsx)(b,{name:this.state.clockName})]})}}]),n}(u.a.Component),p=j;a.a.render(Object(m.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a994235b.chunk.js.map