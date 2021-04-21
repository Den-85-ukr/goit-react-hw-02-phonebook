(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={contact:"ListItem_contact__1iDzn"}},11:function(t,e,n){t.exports={phoneBookList:"ContactList_phoneBookList__2D1BU"}},12:function(t,e,n){t.exports={main_container:"App_main_container__2n1SL",content:"App_content__1YV6p"}},20:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(7),o=n.n(c),i=n(13),s=n(2),u=n(3),l=n(5),b=n(4),d=n(22),m=n(8),h=n(9),j=n.n(h),p=n(0),f=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(m.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(p.jsxs)("form",{onSubmit:this.handleSubmit,className:j.a.addContactForm,children:[Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"Name"}),Object(p.jsx)("input",{type:"text",value:e,onChange:this.handleChange,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(p.jsx)("span",{children:"Number"}),Object(p.jsx)("input",{type:"tel",value:n,onChange:this.handleChange,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(p.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),O=function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"Find contact by name"}),Object(p.jsx)("input",{type:"text",value:e,onChange:n,name:"filter",placeholder:"Enter name"})]})};O.defaultProps={value:""};var v=O,C=n(10),x=n.n(C),g=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.name,n=t.number,a=t.onDeleteItem;return Object(p.jsxs)("li",{children:[Object(p.jsxs)("span",{className:x.a.contact,children:[e,":",n]}),Object(p.jsx)("button",{onClick:a,type:"button",children:"Delete"})]})}}]),n}(a.Component),y=n(11),_=n.n(y),k=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.visibleContacts,n=t.onDeleteContact;return Object(p.jsx)("ul",{className:_.a.phoneBookList,children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(p.jsx)(g,{id:e,name:a,number:r,onDeleteItem:function(){return n(e)}},e)}))})}}]),n}(a.Component);k.defaultProps={visibleContacts:[]};var S=k,A=n(12),w=n.n(A),L=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleFilterChange=function(e){t.setState({filter:e.currentTarget.value})},t.findName=function(e){var n=t.state.contacts,a=e.toLowerCase();return n.find((function(t){return t.name.toLowerCase()===a}))},t.addContact=function(e){var n=e.name,a=e.number;if(t.findName(n))alert("".concat(n," is already in contacts"));else{var r={id:Object(d.a)(),name:n,number:a};t.setState((function(t){var e=t.contacts;return{contacts:[].concat(Object(i.a)(e),[r])}}))}},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,r=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(r)}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter;return Object(p.jsxs)("div",{className:w.a.main_container,children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(f,{onSubmit:this.addContact}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(v,{onChange:this.handleFilterChange,value:t}),Object(p.jsx)(S,{visibleContacts:this.getVisibleContacts(),onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);n(19);o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(L,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={addContactForm:"ContactForm_addContactForm__H3Iiy"}}},[[20,1,2]]]);
//# sourceMappingURL=main.e9f113f5.chunk.js.map