(this["webpackJsonppraveenorugantitech-random-quote"]=this["webpackJsonppraveenorugantitech-random-quote"]||[]).push([[0],{18:function(e,t,n){e.exports=n(46)},23:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),u=(n(23),n(5)),l={width:400,background:"black",color:"white",borderRadius:"50%",padding:"3rem 4rem",margin:"1.5rem",textAlign:"center"},i={display:"flex",flexFlow:"row wrap",justifyContent:"center",alignItems:"center",height:280},s=function(e){return r.a.createElement("div",{style:i},r.a.createElement("h2",{style:l},e.quote," ",r.a.createElement("br",null)," ",r.a.createElement("br",null),"- ",e.author,"."))},m=n(60),f=n(15),d=n.n(f),h=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),l=Object(u.a)(o,2),i=l[0],f=l[1];Object(a.useEffect)((function(){h()}),[]);var h=function(){d.a.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(e){var t=e.data.quotes,n=t[Math.floor(Math.random()*t.length)];c(n.quote),f(n.author)})).catch((function(e){console.log(e)}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,{quote:n,author:i}),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",bottom:"-5em",position:"relative"}},r.a.createElement(m.a,{variant:"contained",onClick:h},"New Quote")))};n(45);var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h2",null,"Random Quote"),r.a.createElement(h,null))};o.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[18,1,2]]]);