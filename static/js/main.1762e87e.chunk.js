(this["webpackJsonpreact-hw-2-hooks-feedback"]=this["webpackJsonpreact-hw-2-hooks-feedback"]||[]).push([[0],[,,,,function(t,e,n){t.exports={buttonList:"FeedbackOptions_buttonList__3ty1R",button:"FeedbackOptions_button__3kI_C"}},,function(t,e,n){t.exports={title:"Section_title__2XPeH"}},function(t,e,n){t.exports={statisticsList:"Statistics_statisticsList__2jpq9"}},function(t,e,n){t.exports={Notification:"Notification_Notification__AIccQ"}},function(t,e,n){t.exports={App:"App_App__20YRb"}},,,,,,,function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),s=n(5),a=n.n(s),r=n(2),o=n(6),b=n.n(o),j=n(0),l=function(t){var e=t.title,n=t.children;return Object(j.jsxs)(j.Fragment,{children:[e&&Object(j.jsx)("h3",{className:b.a.title,children:e}),n]})};l.defaultProps={title:"There must be section heading"};var u=l,d=n(7),h=n.n(d),p=function(t){var e=t.good,n=t.neutral,c=t.bad,i=t.total,s=t.positivePercentage;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("ul",{className:h.a.statisticsList,children:[Object(j.jsx)("li",{children:Object(j.jsxs)("p",{children:["good: ",e]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("p",{children:["neutral: ",n]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("p",{children:["bad: ",c]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("p",{children:["total: ",i]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("p",{children:["positive feedback: ",s," %"]})})]})})},O=n(4),x=n.n(O),f=function(t){var e=t.options,n=t.onLeaveFeedback;return Object(j.jsx)("ul",{className:x.a.buttonList,children:e.map((function(t){return Object(j.jsx)("li",{children:Object(j.jsx)("button",{className:x.a.button,type:"button",name:t,onClick:n,children:t})},t)}))})},_=n(8),k=n.n(_),m=function(t){var e=t.message;return Object(j.jsx)("h3",{className:k.a.Notification,children:e})},v=n(9),g=n.n(v);var N=function(){var t=Object(c.useState)(0),e=Object(r.a)(t,2),n=e[0],i=e[1],s=Object(c.useState)(0),a=Object(r.a)(s,2),o=a[0],b=a[1],l=Object(c.useState)(0),d=Object(r.a)(l,2),h=d[0],O=d[1],x=function(){return n+o+h};return Object(j.jsxs)("div",{className:g.a.App,children:[Object(j.jsx)(u,{title:"Please leave feedback",children:Object(j.jsx)(f,{options:["good","neutral","bad"],onLeaveFeedback:function(t){switch(t.currentTarget.name){case"good":i((function(t){return t+1}));break;case"neutral":b((function(t){return t+1}));break;case"bad":O((function(t){return t+1}));break;default:return}}})}),x()>0?Object(j.jsx)(u,{title:"Statistics",children:Object(j.jsx)(p,{good:n,neutral:o,bad:h,total:x(),positivePercentage:Math.round([n]/x()*100)})}):Object(j.jsx)(m,{message:"No feedback given"})]})};n(15);a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.1762e87e.chunk.js.map