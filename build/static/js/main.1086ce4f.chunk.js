(this["webpackJsonpcountries-api"]=this["webpackJsonpcountries-api"]||[]).push([[0],{40:function(e,t,n){},42:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(17),i=n.n(a),r=n(18),o=n(4),s=n(6),u=n.n(s),l=(n(40),n(0)),j=function(e){var t=e.handleFilterName;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Find a country"}),Object(l.jsx)("h4",{children:"get country's statistics and capital's weather"}),Object(l.jsx)("input",{placeholder:"Type country's name",onChange:t})]})},d=(n(42),function(e){var t=e.country,n=Object(c.useState)(void 0),a=Object(o.a)(n,2),i=a[0],r=a[1];return Object(c.useEffect)((function(){u.a.get("https://api.weatherapi.com/v1/current.json?key=".concat("0eef3600e40f46eeae680210220605","&q=").concat(t.name.common,"&aqi=no")).then((function(e){return r(e.data)}))}),[t.name.common]),console.log(i),void 0===i?Object(l.jsx)("div",{children:"Fetching data..."}):Object(l.jsxs)("div",{className:"weather__container",children:[Object(l.jsxs)("h1",{children:["Weather in ",t.capital,":"]}),Object(l.jsxs)("div",{children:["It's ",i.current.condition.text.toLocaleLowerCase(),"."]}),Object(l.jsx)("p",{children:Object(l.jsx)("img",{className:"weather__logo",width:"100px",src:i.current.condition.icon,alt:t.name.capital})}),Object(l.jsxs)("div",{children:["Todays temperature: ",i.current.temp_c," \xb0C"]}),Object(l.jsxs)("div",{children:["Humidity is ",i.current.humidity,"%"]})]})}),h=function(e){var t=e.country;return console.log(t),Object(l.jsxs)("div",{className:"country__container",children:[Object(l.jsxs)("div",{className:"statistics__container",children:[Object(l.jsx)("h1",{children:t.name.common}),Object(l.jsxs)("div",{children:["Capital ",t.capital]}),Object(l.jsxs)("div",{children:["Population ",t.population]}),Object(l.jsx)("h3",{children:"Languages"}),Object.values(t.languages).map((function(e){return Object(l.jsx)("ul",{children:e},e)})),Object(l.jsx)("p",{children:Object(l.jsx)("img",{src:t.flags.svg,alt:t.name.common})})]}),Object(l.jsx)(d,{country:t})]})},m=function(e){var t=e.displayedCountries,n=e.handleShowClick,c=t.length;if(console.log("Countries length",c),c>10)return"Too many matches, specify another filter.";if(c<=10&&c>1)return Object(l.jsx)("div",{children:t.map((function(e){return Object(l.jsxs)("ul",{className:"",children:[e.name.common,Object(l.jsx)("button",{type:"button",onClick:function(){return n(e)},children:"Show country"})]},e.name.common)}))});if(1===c){var a=t[0];return Object(l.jsx)(h,{country:a})}return Object(l.jsx)("div",{children:"No matches found "})},b=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([]),s=Object(o.a)(i,2),d=s[0],h=s[1];Object(c.useEffect)((function(){u.a.get("https://restcountries.com/v3.1/all").then((function(e){a(e.data)})).catch((function(e){return console.error("Cannot fetch data")}))}),[]);return Object(l.jsxs)("div",{className:"app__container",children:[Object(l.jsx)(j,{handleFilterName:function(e){var t=e.target.value.toLocaleLowerCase(),c=Object(r.a)(n).filter((function(e){return e.name.common.toLocaleLowerCase().includes(t)}));h(c)}}),Object(l.jsx)(m,{displayedCountries:d,handleShowClick:function(e){var t=[];t.push(e),h(t)}})]})};n(43).config(),i.a.render(Object(l.jsx)(b,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.1086ce4f.chunk.js.map