(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{19:function(e,t,a){e.exports={contactMe:"Contact_contactMe__1y04n",container:"Contact_container__2C7kC",content:"Contact_content__2tR4t",myContacts:"Contact_myContacts__2tcb7",contactMeLinks:"Contact_contactMeLinks__3sEI5",main:"Contact_main__bQVZI",left:"Contact_left__2I7gQ",socialIcons:"Contact_socialIcons__3joE7",socialIcon:"Contact_socialIcon__35uzf"}},26:function(e,t,a){e.exports={contactForm:"ContactForm_contactForm__3x5Ns",form:"ContactForm_form__XTh6J",inputs:"ContactForm_inputs__2ndR4",myInput:"ContactForm_myInput__2CeVq",myTextarea:"ContactForm_myTextarea__3oa3y"}},29:function(e,t,a){e.exports={about:"About_about__3nh3O",container:"About_container__NKRdY",mainInfo:"About_mainInfo__1pPFE",photo:"About_photo__BUhNI",personalInfo:"About_personalInfo__fMQ4b",dataAboutMe:"About_dataAboutMe__rCb-C"}},34:function(e,t,a){e.exports={portfolio:"Portfolio_portfolio__2vPKT",container:"Portfolio_container__8oLbH",svgWrap:"Portfolio_svgWrap__2ZDox"}},38:function(e,t,a){e.exports={main:"Main_main__39sT0",container:"Main_container__3izrY",title:"Main_title__1ZziP",socialLinks:"Main_socialLinks__34Oj-"}},42:function(e,t,a){e.exports={btnWrapper:"SuperButton_btnWrapper__nLrHH",buttonText:"SuperButton_buttonText__1H0xa",icon:"SuperButton_icon__2xn9J"}},52:function(e,t,a){e.exports={sectionTitle:"SectionTitle_sectionTitle__3z3pJ"}},62:function(e,t,a){},63:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(51),o=a.n(c),s=(a(62),a(33)),r=(a(63),a(38)),l=a.n(r),d=a(39),j=a.n(d),u=a(79),b=a.p+"static/media/gitMain.c76d2949.svg",m=a.p+"static/media/fbMain.c1f592f7.svg",p=a.p+"static/media/instMain.471a3563.svg",h=a(2),x=[{icon:b,link:"https://github.com/LitvintsevIgor"},{icon:m,link:"https://www.facebook.com/igor.litvintsev.5"},{icon:p,link:"https://www.instagram.com/litvintsev_igor"}],O={in:{opacity:1},out:{opacity:0}},_={duration:1},v=function(){var e=Object(n.useState)(window.innerHeight),t=Object(s.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){window.addEventListener("resize",(function(){i(window.innerHeight)}))}),[a]),Object(h.jsx)(u.a.div,{className:l.a.main,style:{height:a},initial:"out",exit:"out",animate:"in",variants:O,transition:_,children:Object(h.jsxs)("div",{className:l.a.container,children:[Object(h.jsx)("div",{className:l.a.title,children:Object(h.jsx)(j.a,{options:{autoStart:!0,loop:!0,delay:140},onInit:function(e){e.typeString("Hi, I am Igor Litvintsev").callFunction((function(){console.log("String typed out!")})).pauseFor(2500).deleteChars(16).pauseFor(500).typeString(" frontend developer").pauseFor(2500).deleteChars(19).pauseFor(500).typeString(" Igor Litvintsev").pauseFor(2500).callFunction((function(){console.log("All strings were deleted")})).start()}})}),Object(h.jsx)("div",{className:l.a.socialLinks,children:Object(h.jsx)("ul",{children:x.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:e.link,children:Object(h.jsx)("img",{src:e.icon,alt:""})})})}))})})]})})},f=a(36),g=a(9),N=a.n(g),y=a.p+"static/media/home.d02fe4f7.svg",w=a.p+"static/media/letter.cc1374f1.svg",C=a.p+"static/media/suitcase.55df8c14.svg",M=a.p+"static/media/user.d1b1d743.svg",F=function(e){var t=[{icon:y,name:"Home",path:"/main",style:N.a.iconHome},{icon:M,name:"About",path:"/about",style:N.a.iconAbout},{icon:C,name:"Portfolio",path:"/portfolio",style:N.a.iconPortfolio},{icon:w,name:"Contact",path:"/contact",style:N.a.iconContact}],a=N.a.swatch,i=Object(n.useState)(0),c=Object(s.a)(i,2),o=c[0],r=c[1];return Object(n.useEffect)((function(){window.onscroll=function(){r(window.pageYOffset)}}),[]),o>50&&(a="".concat(N.a.swatch," + ").concat(N.a.swatchActive)),Object(h.jsxs)("div",{className:N.a.header,children:[Object(h.jsx)("div",{className:a,children:Object(h.jsx)("div",{className:e.mobileMenuOpen?"".concat(N.a.burgerWrapper," + ").concat(N.a.burgerActive):N.a.burgerWrapper,onClick:function(){return e.setMobileMenuOpen(!e.mobileMenuOpen)},children:Object(h.jsx)("div",{className:e.mobileMenuOpen?"".concat(N.a.burger," + ").concat(N.a.burgerActive):N.a.burger,children:Object(h.jsx)("span",{})})})}),Object(h.jsx)("ul",{className:e.mobileMenuOpen?"".concat(N.a.iconMenu," + ").concat(N.a.iconMenuActive):N.a.iconMenu,children:t.map((function(t){return Object(h.jsx)(f.b,{activeClassName:N.a.activeLink,to:t.path,onClick:function(){return e.setMobileMenuOpen(!e.mobileMenuOpen)},children:Object(h.jsx)("li",{className:N.a.iconBox,children:Object(h.jsxs)("a",{className:N.a.iconLink,href:"#",children:[Object(h.jsx)("div",{className:N.a.buttonText,children:t.name}),Object(h.jsx)("div",{className:N.a.icon,children:Object(h.jsx)("img",{src:t.icon,alt:""})})]})})})}))})]})},I=a(29),k=a.n(I),T=a.p+"static/media/download.e1e89308.svg",A=a(52),S=a.n(A),L=(a(69),function(e){return Object(h.jsx)("div",{className:S.a.sectionTitle,children:Object(h.jsx)(j.a,{options:{autoStart:!0,loop:!0,delay:140},onInit:function(t){t.typeString(e.allTitle).callFunction((function(){console.log("String typed out!")})).pauseFor(2500).deleteChars(e.deleteChars).pauseFor(2500).typeString(e.partOFTitle).pauseFor(2500).deleteChars(e.deleteChars).pauseFor(2500).typeString(e.partOFTitle).pauseFor(2500).callFunction((function(){console.log("All strings were deleted")})).start()}})})}),H=a(42),D=a.n(H),P=function(e){var t=e.text,a=e.icon,n=e.path;return Object(h.jsx)("div",{className:D.a.btnWrapper,children:Object(h.jsxs)("a",{href:n,children:[Object(h.jsx)("span",{className:D.a.buttonText,children:t}),Object(h.jsx)("span",{className:D.a.icon,children:Object(h.jsx)("img",{src:a,alt:""})})]})})},E=a.p+"static/media/menu.d976f93e.pdf",Y=[{point:"First Name:",myData:" Igor"},{point:"Last Name:",myData:" Litvintsev"},{point:"Age:",myData:" 27"},{point:"Nationality:",myData:" Russian"},{point:"Freelance:",myData:" Available"},{point:"Address:",myData:" Voronezh"},{point:"Phone:",myData:" +79515642759"},{point:"Email:",myData:" litvincevi@mail.ru"},{point:"Skype:",myData:" Litvintsev.Igor"},{point:"Languages:",myData:" Russian, English"}],B={in:{opacity:1,x:0},out:{opacity:0,x:"-100%"}},W={in:{opacity:1,x:0},out:{opacity:0,x:"+100%"}},z={duration:1},J=function(){return Object(h.jsx)("div",{className:k.a.about,children:Object(h.jsxs)("div",{className:k.a.container,children:[Object(h.jsx)(L,{allTitle:"About me",partOFTitle:" me",deleteChars:3}),Object(h.jsxs)("div",{className:k.a.mainInfo,children:[Object(h.jsxs)(u.a.div,{className:k.a.personalInfo,initial:"out",exit:"out",animate:"in",variants:B,transition:z,children:[Object(h.jsx)("h2",{children:"Personal info"}),Object(h.jsx)("div",{className:k.a.dataAboutMe,children:Object(h.jsx)("ul",{children:Y.map((function(e){return Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:e.point}),Object(h.jsx)("span",{children:e.myData})]})}))})}),Object(h.jsx)("a",{href:E,target:"_blank",rel:"noopener noreferrer",download:!0,children:Object(h.jsx)(P,{text:"Download CV",icon:T})})]}),Object(h.jsx)(u.a.div,{className:k.a.photo,initial:"out",exit:"out",animate:"in",variants:W,transition:z})]})]})})},V=a(10),R=a(81),Z=a(78),K=a(80),Q=a(75),q=a(76),G=a(77),U=a.p+"static/media/dashboard.9b92f207.svg",X=a.p+"static/media/meeting.57b0ade9.svg",$=a.p+"static/media/todo.8e579387.svg",ee=(a(70),a(34)),te=a.n(ee);a(71);K.a.use([Q.a,q.a,G.a]);var ae={in:{opacity:1},out:{opacity:0}},ne={duration:2},ie=function(){var e=[{pic:U,name:"Some project"},{pic:X,name:"Social Network"},{pic:$,name:"Todo List"}];return Object(h.jsx)("div",{className:te.a.portfolio,children:Object(h.jsxs)("div",{className:te.a.container,children:[Object(h.jsx)(L,{allTitle:"Work I have done",partOFTitle:" I have done",deleteChars:12}),Object(h.jsx)(u.a.div,{initial:"out",exit:"out",animate:"in",variants:ae,transition:ne,className:te.a.wrapperTest,children:Object(h.jsx)(R.a,{tag:"section",wrapperTag:"ul",navigation:!0,keyboard:{enabled:!0},pagination:{clickable:!0},spaceBetween:0,slidesPerView:1,children:e.map((function(e){return Object(h.jsx)("div",{className:te.a.test,children:Object(h.jsx)(Z.a,{tag:"li",children:Object(h.jsxs)("div",{className:te.a.svgWrap,children:[Object(h.jsx)("img",{src:e.pic,alt:"",style:{listStyle:"none"}}),Object(h.jsx)("h2",{children:e.name}),Object(h.jsxs)("div",{children:[Object(h.jsx)("a",{href:"",children:"git"}),Object(h.jsx)("a",{href:"",children:"demo"})]})]})})})}))})})]})})},ce=a(82),oe=a(19),se=a.n(oe),re=a(26),le=a.n(re),de=a(30),je=a.p+"static/media/telegram.71490585.svg",ue=function(){return Object(h.jsx)("div",{className:le.a.contactForm,children:Object(h.jsx)(de.c,{initialValues:{firstName:"",email:"",subject:""},onSubmit:function(e,t){var a=t.setSubmitting;setTimeout((function(){console.log(e.email),alert(JSON.stringify(e,null,2)),a(!1)}),500)},children:Object(h.jsxs)(de.b,{className:le.a.form,children:[Object(h.jsxs)("div",{className:le.a.inputs,children:[Object(h.jsx)("div",{className:le.a.myInput,children:Object(h.jsx)(de.a,{id:"firstName",name:"firstName",placeholder:"Your name"})}),Object(h.jsx)("div",{className:le.a.myInput,children:Object(h.jsx)(de.a,{id:"email",name:"email",placeholder:"Your email",type:"email"})}),Object(h.jsx)("div",{className:le.a.myInput,children:Object(h.jsx)(de.a,{id:"subject",name:"subject",placeholder:"Your subject"})})]}),Object(h.jsx)("div",{className:le.a.myTextarea,children:Object(h.jsx)(de.a,{as:"textarea",id:"message",name:"message",placeholder:"Your message"})}),Object(h.jsx)("div",{children:Object(h.jsx)(P,{path:"#",text:"Send message",icon:je})})]})})})},be=a.p+"static/media/mail.71a56cb8.svg",me=a.p+"static/media/phone-call.41b97c9c.svg",pe=a.p+"static/media/free-icon-facebook-2111392.a5be2ddf.svg",he=a.p+"static/media/free-icon-instagram-1384031.a0a693c5.svg",xe=a.p+"static/media/free-icon-linkedin-letters-25325.ee24476d.svg",Oe=a.p+"static/media/vk.e8e9cc26.svg",_e=function(){var e=[{icon:be,name:"Mail me",href:"mailto:litvincevi@mail.ru",text:"litvincevi@mail.ru"},{icon:me,name:"Call me",href:"tel:+79515642759",text:"+7 (951) 564-27-59"}],t=[pe,he,xe,Oe];return Object(h.jsx)("div",{className:se.a.contactMe,children:Object(h.jsxs)("div",{className:se.a.container,children:[Object(h.jsx)(L,{allTitle:"Contact me",partOFTitle:" me",deleteChars:3}),Object(h.jsxs)("div",{className:se.a.content,children:[Object(h.jsxs)("div",{className:se.a.myContacts,children:[Object(h.jsx)("h3",{children:"DON'T BE SHY !"}),Object(h.jsx)("p",{children:"Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions."}),Object(h.jsx)("div",{className:se.a.contactMeLinks,children:Object(h.jsx)("ul",{children:e.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:e.href,children:Object(h.jsxs)("div",{className:se.a.main,children:[Object(h.jsx)("div",{className:se.a.left,children:Object(h.jsx)("img",{src:e.icon,alt:""})}),Object(h.jsxs)("div",{className:se.a.right,children:[Object(h.jsx)("h3",{children:e.name}),e.text]})]})})})}))})}),Object(h.jsx)("div",{className:se.a.socialIcons,children:t.map((function(e){return Object(h.jsx)("div",{className:se.a.socialIcon,children:Object(h.jsx)("a",{href:"",children:Object(h.jsx)("img",{src:e,className:se.a.forImg})})})}))})]}),Object(h.jsx)(ue,{})]})]})})},ve=a(55);var fe=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){a?document.body.style.overflow="hidden":(document.body.style.overflow="visible",window.scrollTo(0,0))}),[a]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)(ve.a,{children:[Object(h.jsx)("title",{children:"Litvintsev"}),Object(h.jsx)("meta",{name:"viewport",content:"initial-scale=1, viewport-fit=cover"})]}),Object(h.jsx)(F,{mobileMenuOpen:a,setMobileMenuOpen:i}),Object(h.jsx)(ce.a,{exitBeforeEnter:!0,children:Object(h.jsxs)(V.d,{children:[Object(h.jsx)(V.b,{path:"/main",render:function(){return Object(h.jsx)(v,{})}}),Object(h.jsx)(V.b,{path:"/about",render:function(){return Object(h.jsx)(J,{})}}),Object(h.jsx)(V.b,{path:"/portfolio",render:function(){return Object(h.jsx)(ie,{})}}),Object(h.jsx)(V.b,{path:"/contact",render:function(){return Object(h.jsx)(_e,{})}}),Object(h.jsx)(V.a,{from:"/",to:"/main"})]})})]})},ge=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,83)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),c(e),o(e)}))};o.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(f.a,{children:Object(h.jsx)(fe,{})})}),document.getElementById("root")),ge()},9:function(e,t,a){e.exports={header:"Header_header__1G2jx",lock:"Header_lock__F6I71",iconMenu:"Header_iconMenu__33Yv7",iconMenuActive:"Header_iconMenuActive__1JY2C",iconLink:"Header_iconLink__2aN8i",buttonText:"Header_buttonText__3A2qg",activeLink:"Header_activeLink__f2c-3",icon:"Header_icon__GwzZ0",burgerWrapper:"Header_burgerWrapper__200P5",swatch:"Header_swatch__1YkE7",swatchActive:"Header_swatchActive__2xWVB",burger:"Header_burger__ZONYx",burgerPulse:"Header_burgerPulse__2YBK8",burgerActive:"Header_burgerActive__1l6Dc"}}},[[72,1,2]]]);
//# sourceMappingURL=main.11f0935f.chunk.js.map