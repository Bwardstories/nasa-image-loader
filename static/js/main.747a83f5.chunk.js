(this.webpackJsonpshopifyassessment=this.webpackJsonpshopifyassessment||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(17),s=a.n(c),r=(a(26),a(27),a(19)),l=a.n(r),o=a(21),u=a(11),d=(a(29),a(2)),j=function(e){var t=e.hdurl,a=e.date,i=e.explanation,c=e.title,s=e.thumbnail_url,r=e.media_type,l=Object(n.useState)(!1),o=Object(u.a)(l,2),j=o[0],b=o[1];return Object(d.jsxs)("div",{className:"card",children:["video"===r?Object(d.jsx)("img",{className:"space-img",src:s,alt:c}):Object(d.jsx)("img",{className:"space-img",src:t,alt:c}),Object(d.jsx)("p",{className:"title",children:c}),Object(d.jsx)("p",{className:"date",children:a}),Object(d.jsx)("p",{className:"explanation",children:i}),Object(d.jsxs)("div",{className:"like-container",children:[j?Object(d.jsx)("button",{className:"like-button",onClick:function(){return b(!1)},children:"Unlike"}):Object(d.jsx)("button",{className:"like-button",onClick:function(){return b(!0)},children:"Like"}),Object(d.jsxs)("p",{className:"like-counter",children:["Likes : ",j?1:0]})]})]})},b=(a(31),a.p+"static/media/loading.c7d9f081.gif"),p=(a(32),function(){return Object(d.jsx)("div",{className:"loader",children:Object(d.jsx)("img",{src:b,alt:"loading gif"})})}),h=a(39),m=(a(33),function(e){var t=e.children,a=e.onClick;return Object(d.jsx)(h.a.div,{className:"backdrop",onClick:a,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:t})}),x=function(e){var t=e.startDate,a=e.endDate,n=e.handleStartDate,i=e.handleEndDate,c=e.apiRequest,s=e.loading,r=e.close;return Object(d.jsx)(m,{onClick:r,children:Object(d.jsx)(h.a.div,{onClick:function(e){return e.stopPropagation()},variants:{hidden:{y:"-100vh",opacity:0},visible:{y:"0",opacity:1,transition:{duration:.1,type:"spring",damping:100,stiffness:300}},exit:{y:"100vh",opacity:0,transition:{duration:2,damping:100,stiffness:300}}},initial:"hidden",animate:"visible",exit:"exit",className:"date-selection-wrapper",children:s?Object(d.jsx)(p,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"start-date-wrapper",children:[Object(d.jsx)("p",{children:"1.) Pick your Start Date"}),Object(d.jsx)("label",{htmlFor:"startDate",children:"Start Date"}),Object(d.jsx)("input",{type:"date",name:"startDate",value:t,onChange:n})]}),Object(d.jsxs)("div",{className:"end-date-wrapper",children:[Object(d.jsx)("p",{children:"2.) Pick your End Date range (optional)"}),Object(d.jsx)("label",{htmlFor:"endDate",children:"End Date"}),Object(d.jsx)("input",{type:"date",name:"endDate",value:a,onChange:i})]}),Object(d.jsxs)("div",{className:"button-wrapper",children:[Object(d.jsx)("p",{children:"3.) Submit your request for some amazing pictures!"}),Object(d.jsx)("button",{onClick:function(){c(),r()},className:"send-button",children:"Send"})]})]})})})},O=(a(34),a(40)),f=a(16),g=(a(35),"Ze2PF4OO9h40LpEQxLNIA7KoAApmxuZDZLWfAuKB"),v=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(""),s=Object(u.a)(c,2),r=s[0],b=s[1],m=Object(n.useState)(!1),v=Object(u.a)(m,2),y=v[0],k=v[1],N=Object(n.useState)(),D=Object(u.a)(N,2),w=D[0],S=D[1],_=Object(n.useState)([]),C=Object(u.a)(_,2),E=C[0],I=C[1],P=Object(n.useState)(!1),T=Object(u.a)(P,2),A=T[0],L=T[1],F=function(){return L(!1)},q=new Date(a).getTime(),B=new Date(r).getTime(),R=new Date;if(q>R||B>R)return i(""),b(""),void f.b.error("Sorry, you can't pull images from the future",{toastId:"custom-id-yes",position:f.b.POSITION.TOP_CENTER});var W=function(){var e=Object(o.a)(l.a.mark((function e(t,n){var i,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a||!r){e.next=10;break}return k(!0),e.next=4,fetch("https://api.nasa.gov/planetary/apod?api_key=".concat(g,"&start_date=").concat(a,"&end_date=").concat(r,"&thumbs=true"));case 4:return n=e.sent,e.next=7,n.json();case 7:i=e.sent,k(!1),I(i);case 10:return e.next=12,fetch("https://api.nasa.gov/planetary/apod?api_key=".concat(g,"&date=").concat(a));case 12:return n=e.sent,e.next=15,n.json();case 15:c=e.sent,S(c);case 17:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"main-wrapper",children:[Object(d.jsxs)("div",{className:"intro-wrapper",children:[Object(d.jsx)("h1",{children:"Welcome to Spacetagram"}),Object(d.jsx)("h3",{children:"where you can bring all of the images of space right to your home"}),Object(d.jsxs)("h5",{className:"tooltips",children:["How It Works",Object(d.jsx)("span",{className:"tooltiptext",children:"This App uses an API that stores 1 image every day. Click on the button below to either enter 1 specific date, or a range of dates. You cannot pull images from the future, we are good, but not that good"})]}),Object(d.jsx)(h.a.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"open-button",onClick:A?F:function(){return L(!0)},children:"Enter Dates"})]}),Object(d.jsx)(O.a,{initial:!1,exitBeforeEnter:!0,children:A&&Object(d.jsx)(x,{loading:y,startDate:a,handleStartDate:function(e){i(e.target.value)},endDate:r,handleEndDate:function(e){b(e.target.value)},apiRequest:W,close:F})}),y?Object(d.jsx)(p,{}):Object(d.jsxs)("div",{className:"image-card-container",children:[E&&E.map((function(e){return Object(d.jsx)(j,{date:e.date,explanation:e.explanation,hdurl:e.hdurl,title:e.title,thumbnail_url:e.thumbnail_url?e.thumbnail_url:"",url:e.url,media_type:e.media_type})})),w&&Object(d.jsx)(j,{date:w.date,explanation:w.explanation,hdurl:w.hdurl,title:w.title,thumbnail_url:w.thumbnail_url?w.thumbnail_url:"",url:w.url,media_type:w.media_type})]})]})};var y=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(v,{}),Object(d.jsx)(f.a,{})]})};a(36);s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.747a83f5.chunk.js.map