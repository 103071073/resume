(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n,l=t(0),s=t.n(l),r=t(8),c=t.n(r),i=(t(14),t(1)),m=t(2),o=t(4),u=t(3),h=t(5),E=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return s.a.createElement(s.a.Fragment,null,s.a.createElement("header",{id:"home"},s.a.createElement("nav",{id:"nav-wrap"},s.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),s.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),s.a.createElement("ul",{id:"nav",className:"nav"},s.a.createElement("li",{className:"current"},s.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),s.a.createElement("li",null,s.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),s.a.createElement("li",null,s.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),s.a.createElement("li",null,s.a.createElement("a",{className:"smoothscroll",href:"#quotes"},"Quotes")))),s.a.createElement("div",{className:"row banner"},s.a.createElement("div",{className:"banner-text"},s.a.createElement("h1",{className:"responsive-headline"},"I am ",e.name,"."),s.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},e.roleDescription),s.a.createElement("hr",null),s.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return s.a.createElement("li",{key:e.name},s.a.createElement("a",{href:e.url,target:"_blank"},s.a.createElement("i",{className:e.className})))})))),s.a.createElement("p",{className:"scrolldown"},s.a.createElement("a",{className:"smoothscroll",href:"#about"},s.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(l.Component),p=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return s.a.createElement("section",{id:"about"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"three columns"},s.a.createElement("img",{className:"profile-pic",src:"./images/r07723026.jpg",alt:""})),s.a.createElement("div",{className:"nine columns main-col"},s.a.createElement("h2",null,"About Me"),s.a.createElement("p",null,e.aboutme),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"columns contact-details"},s.a.createElement("h2",null,"Contact Details"),s.a.createElement("p",{className:"address"},s.a.createElement("span",null,s.a.createElement("i",{class:"fa fa-user",style:{color:"white"}})," ",e.name),s.a.createElement("br",null),s.a.createElement("span",null,s.a.createElement("i",{class:"fa fa-map-marker",style:{color:"white"}}," ")," ",e.address),s.a.createElement("br",null),s.a.createElement("span",null,s.a.createElement("i",{class:"fa fa-bookmark","aria-hidden":"true",style:{color:"white"}})," ",e.website),s.a.createElement("br",null),s.a.createElement("span",null,s.a.createElement("i",{class:"fa fa-envelope","aria-hidden":"true",style:{color:"white"}}," ")," ",e.mail)))))))}}]),a}(l.Component),d=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return s.a.createElement("section",{id:"resume"},s.a.createElement("div",{className:"row education"},s.a.createElement("div",{className:"three columns header-col"},s.a.createElement("h1",null,s.a.createElement("span",null,"Education"))),s.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return s.a.createElement("div",{className:"row item"},s.a.createElement("div",{className:"twelve columns"},s.a.createElement("h3",null,e.UniversityName),s.a.createElement("p",{className:"info"},e.specialization,s.a.createElement("span",null,"\u2022")," ",s.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),s.a.createElement("p",null,e.Achievements)))}))),s.a.createElement("div",{className:"row work"},s.a.createElement("div",{className:"three columns header-col"},s.a.createElement("h1",null,s.a.createElement("span",null,"Work"))),s.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return s.a.createElement("div",{className:"row item"},s.a.createElement("div",{className:"twelve columns"},s.a.createElement("h3",null,e.CompanyName),s.a.createElement("p",{className:"info"},e.specialization,s.a.createElement("span",null,"\u2022")," ",s.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),s.a.createElement("p",null,e.Achievements)))}))),s.a.createElement("div",{className:"row work"},s.a.createElement("div",{className:"row skills"},s.a.createElement("div",{className:"three columns header-col"},s.a.createElement("h1",null,s.a.createElement("span",null,"Technical skills"))),s.a.createElement("div",{className:"nine columns main-col"},s.a.createElement("div",{className:"bars"},s.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return s.a.createElement("li",null,s.a.createElement("span",{className:"bar-expand ".concat(e.stylename.toLowerCase())}),s.a.createElement("em",null,e.skillname))})))))),s.a.createElement("div",{className:"row skill"},s.a.createElement("div",{className:"three columns header-col"},s.a.createElement("h1",null,s.a.createElement("span",null,"Languages"))),s.a.createElement("div",{className:"nine columns main-col"},s.a.createElement("div",{className:"bars"},s.a.createElement("ul",{className:"skills"},e.languages&&e.languages.map(function(e){return s.a.createElement("li",null,s.a.createElement("span",{className:"bar-expand ".concat(e.stylename.toLowerCase())}),s.a.createElement("em",null,e.skillname))}))))))}}]),a}(l.Component),f=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){this.props.resumeData;return s.a.createElement("section",{id:"portfolio"})}}]),a}(l.Component),v=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return s.a.createElement("section",{id:"quotes"},s.a.createElement("div",{className:"text-container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"two columns header-col"},s.a.createElement("h1",null,s.a.createElement("span",null,"Quotes"))),s.a.createElement("div",{className:"ten columns flex-container"},s.a.createElement("div",{className:"flexslider"},s.a.createElement("ul",{className:"slides"},e.testimonials&&e.testimonials.map(function(e){return s.a.createElement("li",null,s.a.createElement("blockquote",null,s.a.createElement("p",null,e.description),s.a.createElement("cite",null,e.name)))})))," ")," ")," "),"  ")}}]),a}(l.Component),g=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){this.props.resumeData;return s.a.createElement("section",{id:"contact"},s.a.createElement("h4",{className:"text-center"},s.a.createElement("a",{target:"_blank",href:"#"},"Get in touch")))}}]),a}(l.Component),N=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return s.a.createElement("footer",null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"twelve columns"},s.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return s.a.createElement("li",null,s.a.createElement("a",{href:e.url},s.a.createElement("i",{className:e.className})))}))),s.a.createElement("div",{id:"go-top"},s.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},s.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(l.Component),b=t(6),w={imagebaseurl:"",name:"Haw-Ya, Yeh",role:"Financial Engineer (MS)",roleDescription:"Financial Engineer (MS) focusing on using Mathematical methods to solve Financial problems,     especially those related to Investment Strategizing and Risk Management.",socialLinks:[{name:"linkedin",url:"#",className:"fa fa-linkedin"}],aboutme:"I'm a persistent, detail-oriented, enthusiastic, responsible.     An independent as well as a team worker.      Once I have a clear goal, all my efforts will be aligned to achieve it.     I worked previously as an Intern at the Shanghai Stock Exchange and the Bank of China.      Currently, I am doing another Internship at Eastpring Investments.",className:"fa fa-map-marker",address:"Taipei, Taiwan",website:"https://103071073.github.io/resume",mail:"Email: josmyfaure@gmail.com",education:[{UniversityName:"National Taiwan University",specialization:"Financial Engineering",MonthOfPassing:"June",YearOfPassing:"2020",Achievements:"Master of Science"},{UniversityName:"National Tsing Hua University",specialization:"Quantitative Finance",MonthOfPassing:"June",YearOfPassing:"2018",Achievements:"Bachelor Degree"}],work:[{CompanyName:"Eastpring Investments",specialization:"Research and Investment Intern",MonthOfLeaving:"Ongoing",Achievements:"The bulk of my work consists in writing research reports about various companies and assisting the Fund Managers in their trading        decisions."},{CompanyName:"Shanghai Stock Exchange",specialization:"Securities Intern",MonthOfLeaving:"August",YearOfLeaving:"2017",Achievements:"Our main project and case study was about SWAP and market        research in China."},{CompanyName:"Bank of China",specialization:"Associate Intern",MonthOfLeaving:"August",YearOfLeaving:"2016",Achievements:"Cross-Department Internship program where I had to work and gain knowledge and know-how from         the Business Center, Information Technology, Personal Banking and Corporate Finance Departments."}],certifications:[{certName:"Deep Learning Specialization",organization:"deeplearning.ai",issueMonth:"November",issueYear:"2019",link:"https://www.coursera.org/account/accomplishments/specialization/certificate/NKKHVW8HEP7Z"},{certName:"Data-Driven Decision Making",organization:"PwC",issueMonth:"May",issueYear:"2019",link:"https://www.coursera.org/account/accomplishments/certificate/5FL2H58FRQ6J"},{certName:"SQL for Data Science",organization:"University of California, Davis",issueMonth:"May",issueYear:"2019",link:"https://www.coursera.org/account/accomplishments/certificate/R9RJ7B7AD7RD"}],skills:[{skillname:"Stata",stylename:"stata"},{skillname:"Matlab",stylename:"matlab"},{skillname:"Python",stylename:"python"},{skillname:"Excel (VBA)",stylename:"excel"}],languages:[{skillname:"Chinese",stylename:"chinese"},{skillname:"English",stylename:"english"},{skillname:"Spanish",stylename:"spanish"}],portfolio:[],testimonials:[{description:"Rule No.1: Never lose money. Rule No.2: Never forget rule No.1.",name:"Warren Buffet"},{description:"Never spend your money before you have it.",name:"Thomas Jefferson"},{description:"Don\u2019t let the fear of losing be greater than the excitement of winning.",name:"Robert Kiyosaki"}],contact:[(n={name:""},Object(b.a)(n,"name",""),Object(b.a)(n,"message",""),n)]},k=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(E,{resumeData:w}),s.a.createElement(p,{resumeData:w}),s.a.createElement(d,{resumeData:w}),s.a.createElement(f,{resumeData:w}),s.a.createElement(v,{resumeData:w}),s.a.createElement(g,{resumeData:w}),s.a.createElement(N,{resumeData:w}))}}]),a}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.62d98c4f.chunk.js.map