(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"Optimus Prime",image:"https://vignette.wikia.nocookie.net/transformers/images/3/37/Optimusg1.jpg/revision/latest?cb=20170218231038",chosen:!1},{id:2,name:"Megatron",image:"https://vignette.wikia.nocookie.net/transformers/images/9/99/Megatronguido.jpg/revision/latest?cb=20161205225156",chosen:!1},{id:3,name:"Bumblebee",image:"https://vignette.wikia.nocookie.net/transformers/images/3/36/Bumblebeeg1.jpg/revision/latest?cb=20060306024234",chosen:!1},{id:4,name:"Shockwave",image:"https://vignette.wikia.nocookie.net/transformers/images/d/d2/Shockwave-G1-animemodel.jpg/revision/latest?cb=20150913093332",chosen:!1},{id:5,name:"Sideswipe",image:"https://vignette.wikia.nocookie.net/transformers/images/5/52/G1Sideswipe_MTMTE.jpg/revision/latest?cb=20080315045555",chosen:!1},{id:6,name:"Soundwave",image:"https://vignette.wikia.nocookie.net/transformers/images/7/78/G1_soundwave.png/revision/latest?cb=20100504224025",chosen:!1},{id:7,name:"Starscream",image:"https://vignette.wikia.nocookie.net/transformers/images/7/79/Starscreamg1.jpg/revision/latest?cb=20060816201203",chosen:!1},{id:8,name:"Laserbeak",image:"https://vignette.wikia.nocookie.net/transformers/images/4/48/Laserbeak-calendar.jpg/revision/latest?cb=20060406212919",chosen:!1},{id:9,name:"Ironhide",image:"https://vignette.wikia.nocookie.net/transformers/images/2/25/Ironhideg1guido.jpg/revision/latest?cb=20060816201257",chosen:!1},{id:10,name:"Jazz",image:"https://vignette.wikia.nocookie.net/transformers/images/c/c7/Jazzg1.jpg/revision/latest?cb=20090924090113",chosen:!1},{id:11,name:"Rumble",image:"https://vignette.wikia.nocookie.net/transformers/images/0/0d/Mtmte1_rumble_robotmode.jpeg/revision/latest?cb=20141011173546",chosen:!1},{id:12,name:"Wheeljack",image:"https://vignette.wikia.nocookie.net/transformers/images/6/6b/Wheeljackg1.jpg/revision/latest?cb=20060806160740",chosen:!1}]},,,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(2),r=a.n(o),s=a(3),c=a(4),m=a(8),g=a(5),l=a(9);a(16);var d=function(e){return i.a.createElement("div",{className:"card",onClick:function(){return e.pickCard(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})))};a(17);var u=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};a(18);var p=function(e){return i.a.createElement("div",null,i.a.createElement("div",{className:"board"},i.a.createElement("div",{className:"title"},"Clicky Game"),i.a.createElement("div",{className:"dialogue"},e.message),i.a.createElement("div",{className:"score"},"Score: ",e.score," | Top Score: ",e.topScore)))},v=a(6),h=a(7),k=a.n(h),f=0,b=0,w="Click Image to Begin",j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(i)))).state={cards:v},a.pickCard=function(e){var t=a.state.cards;t.forEach(function(t){t.id===e&&(t.chosen?a.wrongCard():(w="Correct! Choose another...",t.chosen=!0,f++))}),a.setState({cards:t})},a.wrongCard=function(){var e=a.state.cards;w="Incorrect! Try Again",e.forEach(function(e){return e.chosen=!1}),f>b&&(b=f),f=0,a.setState({cards:e})},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log()}},{key:"render",value:function(){var e=this,t=k()(this.state.cards);return console.log(t),i.a.createElement("div",null,i.a.createElement(p,{message:w,score:f,topScore:b}),i.a.createElement(u,null,t.map(function(t){return i.a.createElement(d,{pickCard:e.pickCard,id:t.id,key:t.id,name:t.name,image:t.image})})))}}]),t}(n.Component);a(19);r.a.render(i.a.createElement(j,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.45ad464d.chunk.js.map