(this["webpackJsonppraveenorugantitech-random-quote"]=this["webpackJsonppraveenorugantitech-random-quote"]||[]).push([[0],{18:function(e,t,n){e.exports=n(46)},23:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),u=(n(23),n(5)),l={width:400,background:"black",color:"white",borderRadius:"50%",padding:"3rem 4rem",margin:"1.5rem",textAlign:"center"},i={display:"flex",flexFlow:"row wrap",justifyContent:"center",alignItems:"center",height:280},s=function(e){return r.a.createElement("div",{style:i},r.a.createElement("h2",{style:l},e.quote," ",r.a.createElement("br",null)," ",r.a.createElement("br",null),"- ",e.author,"."))},m=n(60),h=n(15),d=n.n(h),f=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),l=Object(u.a)(c,2),i=l[0],h=l[1];Object(a.useEffect)((function(){f()}),[]);var f=function(){d.a.get("https://raw.githubusercontent.com/praveenorugantitech/praveenorugantitech-test/master/QuotesData/quotes.json").then((function(e){var t=e.data.quotes,n=t[Math.floor(Math.random()*t.length)];o(n.quote),h(n.author)})).catch((function(e){console.log(e)}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,{quote:n,author:i}),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",bottom:"-5em",position:"relative"}},r.a.createElement(m.a,{variant:"contained",onClick:f},"New Quote")))};n(45);var p=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h2",null,"Random Quote"),r.a.createElement(f,null))};c.a.render(r.a.createElement(p,null),document.getElementById("root"))}},[[18,1,2]]]);