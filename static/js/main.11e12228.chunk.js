(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{18:function(e,t,a){e.exports={contactMe:"Contact_contactMe__1y04n",container:"Contact_container__2C7kC",content:"Contact_content__2tR4t",myContacts:"Contact_myContacts__2tcb7",contactMeLinks:"Contact_contactMeLinks__3sEI5",main:"Contact_main__bQVZI",left:"Contact_left__2I7gQ",socialIcons:"Contact_socialIcons__3joE7",socialIcon:"Contact_socialIcon__35uzf"}},25:function(e,t,a){e.exports={contactForm:"ContactForm_contactForm__3x5Ns",form:"ContactForm_form__XTh6J",inputs:"ContactForm_inputs__2ndR4",myInput:"ContactForm_myInput__2CeVq",myTextarea:"ContactForm_myTextarea__3oa3y"}},28:function(e,t,a){e.exports={about:"About_about__3nh3O",container:"About_container__NKRdY",mainInfo:"About_mainInfo__1pPFE",photo:"About_photo__BUhNI",personalInfo:"About_personalInfo__fMQ4b",dataAboutMe:"About_dataAboutMe__rCb-C"}},32:function(e,t,a){e.exports={portfolio:"Portfolio_portfolio__2vPKT",container:"Portfolio_container__8oLbH",svgWrap:"Portfolio_svgWrap__2ZDox"}},36:function(e,t,a){e.exports={main:"Main_main__39sT0",container:"Main_container__3izrY",title:"Main_title__1ZziP",socialLinks:"Main_socialLinks__34Oj-"}},41:function(e,t,a){e.exports={btnWrapper:"SuperButton_btnWrapper__nLrHH",buttonText:"SuperButton_buttonText__1H0xa",icon:"SuperButton_icon__2xn9J"}},52:function(e,t,a){e.exports={sectionTitle:"SectionTitle_sectionTitle__3z3pJ"}},59:function(e,t,a){},60:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(51),s=a.n(c),o=(a(59),a(40)),r=(a(60),a(36)),l=a.n(r),d=a(37),j=a.n(d),u=a(76),m=a.p+"static/media/gitMain.c76d2949.svg",b=a.p+"static/media/fbMain.c1f592f7.svg",p=a.p+"static/media/instMain.471a3563.svg",h=a(2),x=[{icon:m,link:"https://github.com/LitvintsevIgor"},{icon:b,link:"https://www.facebook.com/igor.litvintsev.5"},{icon:p,link:"https://www.instagram.com/litvintsev_igor"}],_={in:{opacity:1},out:{opacity:0}},O={duration:1},v=function(){var e=window.innerHeight;return Object(h.jsx)(u.a.div,{className:l.a.main,style:{height:e},initial:"out",exit:"out",animate:"in",variants:_,transition:O,children:Object(h.jsxs)("div",{className:l.a.container,children:[Object(h.jsx)("div",{className:l.a.title,children:Object(h.jsx)(j.a,{options:{autoStart:!0,loop:!0,delay:140},onInit:function(e){e.typeString("Hi, I am Igor Litvintsev").callFunction((function(){console.log("String typed out!")})).pauseFor(2500).deleteChars(16).pauseFor(500).typeString(" frontend developer").pauseFor(2500).deleteChars(19).pauseFor(500).typeString(" Igor Litvintsev").pauseFor(2500).callFunction((function(){console.log("All strings were deleted")})).start()}})}),Object(h.jsx)("div",{className:l.a.socialLinks,children:Object(h.jsx)("ul",{children:x.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:e.link,children:Object(h.jsx)("img",{src:e.icon,alt:""})})})}))})})]})})},f=a(34),g=a(8),N=a.n(g),y=a.p+"static/media/home.d02fe4f7.svg",C=a.p+"static/media/letter.cc1374f1.svg",w=a.p+"static/media/suitcase.55df8c14.svg",M=a.p+"static/media/user.d1b1d743.svg",F=function(e){var t=[{icon:y,name:"Home",path:"/main",style:N.a.iconHome},{icon:M,name:"About",path:"/about",style:N.a.iconAbout},{icon:w,name:"Portfolio",path:"/portfolio",style:N.a.iconPortfolio},{icon:C,name:"Contact",path:"/contact",style:N.a.iconContact}],a=N.a.swatch,i=Object(n.useState)(0),c=Object(o.a)(i,2),s=c[0],r=c[1];return Object(n.useEffect)((function(){window.onscroll=function(){r(window.pageYOffset)}}),[]),s>50&&(a="".concat(N.a.swatch," + ").concat(N.a.swatchActive)),Object(h.jsxs)("div",{className:N.a.header,children:[Object(h.jsx)("div",{className:a}),Object(h.jsx)("div",{className:e.mobileMenuOpen?"".concat(N.a.burgerWrapper," + ").concat(N.a.burgerActive):N.a.burgerWrapper,onClick:function(){return e.setMobileMenuOpen(!e.mobileMenuOpen)},children:Object(h.jsx)("div",{className:e.mobileMenuOpen?"".concat(N.a.burger," + ").concat(N.a.burgerActive):N.a.burger,children:Object(h.jsx)("span",{})})}),Object(h.jsx)("ul",{className:e.mobileMenuOpen?"".concat(N.a.iconMenu," + ").concat(N.a.iconMenuActive):N.a.iconMenu,children:t.map((function(t){return Object(h.jsx)(f.b,{activeClassName:N.a.activeLink,to:t.path,onClick:function(){return e.setMobileMenuOpen(!e.mobileMenuOpen)},children:Object(h.jsx)("li",{className:N.a.iconBox,children:Object(h.jsxs)("a",{className:N.a.iconLink,href:"#",children:[Object(h.jsx)("div",{className:N.a.buttonText,children:t.name}),Object(h.jsx)("div",{className:N.a.icon,children:Object(h.jsx)("img",{src:t.icon,alt:""})})]})})})}))})]})},I=a(28),k=a.n(I),T=a.p+"static/media/download.e1e89308.svg",A=a(52),S=a.n(A),L=(a(66),function(e){return Object(h.jsx)("div",{className:S.a.sectionTitle,children:Object(h.jsx)(j.a,{options:{autoStart:!0,loop:!0,delay:140},onInit:function(t){t.typeString(e.allTitle).callFunction((function(){console.log("String typed out!")})).pauseFor(2500).deleteChars(e.deleteChars).pauseFor(2500).typeString(e.partOFTitle).pauseFor(2500).deleteChars(e.deleteChars).pauseFor(2500).typeString(e.partOFTitle).pauseFor(2500).callFunction((function(){console.log("All strings were deleted")})).start()}})})}),H=a(41),D=a.n(H),P=function(e){var t=e.text,a=e.icon;return Object(h.jsx)("div",{className:D.a.btnWrapper,children:Object(h.jsxs)("a",{href:"#",children:[Object(h.jsx)("span",{className:D.a.buttonText,children:t}),Object(h.jsx)("span",{className:D.a.icon,children:Object(h.jsx)("img",{src:a,alt:""})})]})})},Y=[{point:"First Name:",myData:" Igor"},{point:"Last Name:",myData:" Litvintsev"},{point:"Age:",myData:" 27"},{point:"Nationality:",myData:" Russian"},{point:"Freelance:",myData:" Available"},{point:"Address:",myData:" Voronezh"},{point:"Phone:",myData:" +79515642759"},{point:"Email:",myData:" litvincevi@mail.ru"},{point:"Skype:",myData:" Litvintsev.Igor"},{point:"Languages:",myData:" Russian, English"}],B={in:{opacity:1,x:0},out:{opacity:0,x:"-100%"}},W={in:{opacity:1,x:0},out:{opacity:0,x:"+100%"}},E={duration:1},J=function(){return Object(h.jsx)("div",{className:k.a.about,children:Object(h.jsxs)("div",{className:k.a.container,children:[Object(h.jsx)(L,{allTitle:"About me",partOFTitle:" me",deleteChars:3}),Object(h.jsxs)("div",{className:k.a.mainInfo,children:[Object(h.jsxs)(u.a.div,{className:k.a.personalInfo,initial:"out",exit:"out",animate:"in",variants:B,transition:E,children:[Object(h.jsx)("h2",{children:"Personal info"}),Object(h.jsx)("div",{className:k.a.dataAboutMe,children:Object(h.jsx)("ul",{children:Y.map((function(e){return Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:e.point}),Object(h.jsx)("span",{children:e.myData})]})}))})}),Object(h.jsx)(P,{text:"Download CV",icon:T})]}),Object(h.jsx)(u.a.div,{className:k.a.photo,initial:"out",exit:"out",animate:"in",variants:W,transition:E})]})]})})},V=a(9),z=a(78),R=a(75),Z=a(77),K=a(72),Q=a(73),q=a(74),G=a.p+"static/media/dashboard.9b92f207.svg",U=a.p+"static/media/meeting.57b0ade9.svg",X=a.p+"static/media/todo.8e579387.svg",$=(a(67),a(32)),ee=a.n($);a(68);Z.a.use([K.a,Q.a,q.a]);var te={in:{opacity:1},out:{opacity:0}},ae={duration:2},ne=function(){var e=[{pic:G,name:"Some project"},{pic:U,name:"Social Network"},{pic:X,name:"Todo List"}];return Object(h.jsx)("div",{className:ee.a.portfolio,children:Object(h.jsxs)("div",{className:ee.a.container,children:[Object(h.jsx)(L,{allTitle:"Work I have done",partOFTitle:" I have done",deleteChars:12}),Object(h.jsx)(u.a.div,{initial:"out",exit:"out",animate:"in",variants:te,transition:ae,className:ee.a.wrapperTest,children:Object(h.jsx)(z.a,{tag:"section",wrapperTag:"ul",navigation:!0,keyboard:{enabled:!0},pagination:{clickable:!0},spaceBetween:0,slidesPerView:1,children:e.map((function(e){return Object(h.jsx)("div",{className:ee.a.test,children:Object(h.jsx)(R.a,{tag:"li",children:Object(h.jsxs)("div",{className:ee.a.svgWrap,children:[Object(h.jsx)("img",{src:e.pic,alt:"",style:{listStyle:"none"}}),Object(h.jsx)("h2",{children:e.name}),Object(h.jsxs)("div",{children:[Object(h.jsx)("a",{href:"",children:"git"}),Object(h.jsx)("a",{href:"",children:"demo"})]})]})})})}))})})]})})},ie=a(79),ce=a(18),se=a.n(ce),oe=a(25),re=a.n(oe),le=a(29),de=a.p+"static/media/telegram.71490585.svg",je=function(){return Object(h.jsx)("div",{className:re.a.contactForm,children:Object(h.jsx)(le.c,{initialValues:{firstName:"",email:"",subject:""},onSubmit:function(e,t){var a=t.setSubmitting;setTimeout((function(){console.log(e.email),alert(JSON.stringify(e,null,2)),a(!1)}),500)},children:Object(h.jsxs)(le.b,{className:re.a.form,children:[Object(h.jsxs)("div",{className:re.a.inputs,children:[Object(h.jsx)("div",{className:re.a.myInput,children:Object(h.jsx)(le.a,{id:"firstName",name:"firstName",placeholder:"Your name"})}),Object(h.jsx)("div",{className:re.a.myInput,children:Object(h.jsx)(le.a,{id:"email",name:"email",placeholder:"Your email",type:"email"})}),Object(h.jsx)("div",{className:re.a.myInput,children:Object(h.jsx)(le.a,{id:"subject",name:"subject",placeholder:"Your subject"})})]}),Object(h.jsx)("div",{className:re.a.myTextarea,children:Object(h.jsx)(le.a,{as:"textarea",id:"message",name:"message",placeholder:"Your message"})}),Object(h.jsx)("div",{children:Object(h.jsx)(P,{text:"Send message",icon:de})})]})})})},ue=a.p+"static/media/mail.71a56cb8.svg",me=a.p+"static/media/phone-call.41b97c9c.svg",be=a.p+"static/media/free-icon-facebook-2111392.a5be2ddf.svg",pe=a.p+"static/media/free-icon-instagram-1384031.a0a693c5.svg",he=a.p+"static/media/free-icon-linkedin-letters-25325.ee24476d.svg",xe=a.p+"static/media/vk.e8e9cc26.svg",_e=function(){var e=[{icon:ue,name:"Mail me",href:"mailto:litvincevi@mail.ru",text:"litvincevi@mail.ru"},{icon:me,name:"Call me",href:"tel:+79515642759",text:"+7 (951) 564-27-59"}],t=[be,pe,he,xe];return Object(h.jsx)("div",{className:se.a.contactMe,children:Object(h.jsxs)("div",{className:se.a.container,children:[Object(h.jsx)(L,{allTitle:"Contact me",partOFTitle:" me",deleteChars:3}),Object(h.jsxs)("div",{className:se.a.content,children:[Object(h.jsxs)("div",{className:se.a.myContacts,children:[Object(h.jsx)("h3",{children:"DON'T BE SHY !"}),Object(h.jsx)("p",{children:"Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions."}),Object(h.jsx)("div",{className:se.a.contactMeLinks,children:Object(h.jsx)("ul",{children:e.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:e.href,children:Object(h.jsxs)("div",{className:se.a.main,children:[Object(h.jsx)("div",{className:se.a.left,children:Object(h.jsx)("img",{src:e.icon,alt:""})}),Object(h.jsxs)("div",{className:se.a.right,children:[Object(h.jsx)("h3",{children:e.name}),e.text]})]})})})}))})}),Object(h.jsx)("div",{className:se.a.socialIcons,children:t.map((function(e){return Object(h.jsx)("div",{className:se.a.socialIcon,children:Object(h.jsx)("a",{href:"",children:Object(h.jsx)("img",{src:e,className:se.a.forImg})})})}))})]}),Object(h.jsx)(je,{})]})]})})};var Oe=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){a?document.body.style.overflow="hidden":(document.body.style.overflow="visible",window.scrollTo(0,0))}),[a]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(F,{mobileMenuOpen:a,setMobileMenuOpen:i}),Object(h.jsx)(ie.a,{exitBeforeEnter:!0,children:Object(h.jsxs)(V.d,{children:[Object(h.jsx)(V.b,{path:"/main",render:function(){return Object(h.jsx)(v,{})}}),Object(h.jsx)(V.b,{path:"/about",render:function(){return Object(h.jsx)(J,{})}}),Object(h.jsx)(V.b,{path:"/portfolio",render:function(){return Object(h.jsx)(ne,{})}}),Object(h.jsx)(V.b,{path:"/contact",render:function(){return Object(h.jsx)(_e,{})}}),Object(h.jsx)(V.a,{from:"/",to:"/main"})]})})]})},ve=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,80)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),c(e),s(e)}))};s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(f.a,{children:Object(h.jsx)(Oe,{})})}),document.getElementById("root")),ve()},8:function(e,t,a){e.exports={header:"Header_header__1G2jx",lock:"Header_lock__F6I71",iconMenu:"Header_iconMenu__33Yv7",iconMenuActive:"Header_iconMenuActive__1JY2C",iconLink:"Header_iconLink__2aN8i",buttonText:"Header_buttonText__3A2qg",activeLink:"Header_activeLink__f2c-3",icon:"Header_icon__GwzZ0",burgerWrapper:"Header_burgerWrapper__200P5",swatch:"Header_swatch__1YkE7",swatchActive:"Header_swatchActive__2xWVB",burger:"Header_burger__ZONYx",burgerPulse:"Header_burgerPulse__2YBK8",burgerActive:"Header_burgerActive__1l6Dc"}}},[[69,1,2]]]);
//# sourceMappingURL=main.11e12228.chunk.js.map