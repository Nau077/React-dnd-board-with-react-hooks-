(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,a,t){e.exports=t(24)},24:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(8),d=t.n(c),o=t(1);t(6),t(3);var l=function(e){var a=function(){e.closeCardInfoHandler()};return n.a.createElement("div",{className:"popup-container",onClick:a},n.a.createElement("div",{className:"popup-content",onClick:function(e){e.stopPropagation()}},n.a.createElement("div",{className:"header"},n.a.createElement("form",null,n.a.createElement("main",null,n.a.createElement("h2",null,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0437\u0430\u0434\u0430\u0447\u0435:"),n.a.createElement("div",{className:"text-wrapper"},n.a.createElement("p",null," \u042d\u0442\u0430\u043f \u0437\u0430\u0434\u0430\u0447\u0438: ",e.board_name),n.a.createElement("p",null," \u0422\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438: ",e.card_title)),n.a.createElement("div",{className:"close-wrapper"},n.a.createElement("button",{onClick:a},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c")))))))};var i=function(e){var a=Object(r.useState)(null),t=Object(o.a)(a,2),c=t[0],d=t[1];return n.a.createElement("div",null,n.a.createElement("div",{onClick:function(){d(!0)},id:e.id,className:e.className,draggable:e.draggable,onDragStart:function(a){var t=a.target;a.dataTransfer.setData("cardId",'{"target": "'.concat(t.id,'", "id": "').concat(e.id,'", "type": "').concat(e.type,'", "title": "').concat(e.title,'", "board_id": "').concat(e.boardId,'" }'))},onDragOver:function(e){e.stopPropagation()}},n.a.createElement("p",null,e.title)),c&&n.a.createElement(l,{closeCardInfoHandler:function(){d(null)},card_id:e.id,card_title:e.title,board_name:e.board_name}))},s=n.a.createContext(),u=t(36);var p=function(e){var a=Object(r.useContext)(s).dispatch,t=Object(r.useState)(""),c=Object(o.a)(t,2),d=c[0],l=c[1],i=function(){e.setPopupValue()};return n.a.createElement("div",{className:"popup-container",onClick:i},n.a.createElement("div",{className:"popup-content",onClick:function(e){e.stopPropagation()}},n.a.createElement("div",{className:"create-wrapper"},n.a.createElement("h2",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438:"),n.a.createElement("input",{type:"text",value:d,onKeyPress:function(t){"Enter"===t.key&&d.length&&(a({type:"ADD_CARD",payload:{board_id:e.boardId,card:{title:d,id:u.a(),type:e.type,draggable:"true",className:"card"}}}),l(""),e.setPopupValue())},onChange:function(e){return l(e.target.value)}}),n.a.createElement("div",{className:"close-wrapper"},n.a.createElement("button",{onClick:i},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"),n.a.createElement("button",{onClick:function(t){t&&t.preventDefault(),d.length&&(a({type:"ADD_CARD",payload:{board_id:e.boardId,card:{title:d,id:u.a(),type:e.type,draggable:"true",className:"card"}}}),l(""),e.setPopupValue())}},"C\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443")))))},m=t(9),b=t.n(m);var f=function(e){var a=e.canBeAdded,t=e.boardName,c=e.boardId,d=e.type,l=e.colorBg,i=Object(r.useState)(null),s=Object(o.a)(i,2),u=s[0],m=s[1],f={background:l};return n.a.createElement("div",{className:"boardheader"},n.a.createElement("div",{className:"boardheader__body"},n.a.createElement("div",{className:"titlebody"},n.a.createElement("div",{className:"circle",style:f}),n.a.createElement("p",null,t)),a&&n.a.createElement(b.a,{onClick:function(){m(!0)}})),u&&n.a.createElement(p,{setPopupValue:function(){m(null)},boardId:c,type:d}))};var v=function(e){var a=e.id,t=e.className,c=e.cards,d=e.type,o=e.canBeAdded,l=e.boardName,u=e.color,p=Object(r.useContext)(s).dispatch;return n.a.createElement("div",{className:"boardwrapper"},n.a.createElement(f,{canBeAdded:o,boardName:l,boardId:a,type:d,colorBg:u}),n.a.createElement("div",{id:a,className:t,onDrop:function(e){e.preventDefault();var t,r,n=e.dataTransfer.getData("cardId"),c=JSON.parse(n);c&&(d!=c.type&&(t=d,r=c.type,t-r!=1&&t-r!=-1)||p({type:"UPDATE_CARDS",payload:{board_old_id:c.board_id,card_id:c.id,card_type:d,board_new_id:a,card:{id:c.id,className:"card",draggable:"true",type:d,title:c.title}}}))},onDragOver:function(e){e.preventDefault()}},c&&c.map((function(e){return n.a.createElement(i,Object.assign({key:e.id},e,{boardId:a,board_name:l}))}))))};var y=function(e){var a=e.boards;return n.a.createElement("main",{className:"flexbox"},a&&a.map((function(e){return n.a.createElement(v,Object.assign({key:e.id},e))})))},g=function(e,a){switch(a.type){case"UPDATE_CARDS":return e.map((function(e){if(e.id===a.payload.board_old_id){var t=e.cards.findIndex((function(e){return e.id===a.payload.card_id}));e.cards.splice(t,1)}return e.id===a.payload.board_new_id&&e.cards.push(a.payload.card),e}));case"ADD_CARD":return e.map((function(e){return e.id===a.payload.board_id&&e.cards.push(a.payload.card),e}));default:return e}},E=[{id:"board-1",type:1,className:"board",canBeAdded:!0,boardName:"\u041d\u0430\u0440\u044f\u0434\u044b",color:"grey",cards:[{id:"card-1",className:"card",draggable:"true",type:1,title:"cardOne"}]},{id:"board-2",type:2,className:"board",canBeAdded:!1,boardName:"\u0412 \u0440\u0430\u0431\u043e\u0442\u0435",color:"green",cards:[{id:"card-2",className:"card",draggable:"true",type:2,title:"cardTwo"}]},{id:"board-3",type:3,className:"board",canBeAdded:!1,boardName:"\u041f\u0440\u0438\u0451\u043c\u043a\u0430",color:"orange",cards:[{id:"card-3",className:"card",draggable:"true",type:3,title:"cardThree"}]},{id:"board-4",type:4,className:"board",canBeAdded:!1,boardName:"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043e",color:"blue",cards:[{id:"card-4",className:"card",draggable:"true",type:4,title:"cardFour"}]}];var N=function(){var e=Object(r.useReducer)(g,JSON.parse(localStorage.getItem("boards"))||E),a=Object(o.a)(e,2),t=a[0],c=a[1];return Object(r.useEffect)((function(){localStorage.setItem("boards",JSON.stringify(t))}),[t]),n.a.createElement(s.Provider,{value:{dispatch:c}},n.a.createElement("div",{className:"App"},n.a.createElement(y,{boards:t})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(n.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,a,t){},6:function(e,a,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.64e87005.chunk.js.map