(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(7),i=n.n(r),o=(n(13),n(2)),c=n(3),l=n(1),u=n(4),h=n(5),p=(n(14),n(15),n(16),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"Business"},s.a.createElement("div",{className:"image-container"},s.a.createElement("img",{src:this.props.business.imageSrc,alt:""})),s.a.createElement("h2",null," ",this.props.business.name),s.a.createElement("div",{className:"Business-information"},s.a.createElement("div",{className:"Business-address"},s.a.createElement("p",null,this.props.business.address),s.a.createElement("p",null,this.props.business.city),s.a.createElement("p",null,"".concat(this.props.business.state," ").concat(this.props.business.zipCode))),s.a.createElement("div",{className:"Business-reviews"},s.a.createElement("h3",null,this.props.business.category),s.a.createElement("h3",{className:"rating"},"".concat(this.props.business.rating," stars")),s.a.createElement("p",null,"".concat(this.props.business.reviewCount," reviews")))))}}]),n}(s.a.Component)),d=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"BusinessList"},this.props.businesses.map((function(e){return s.a.createElement(p,{business:e,key:e.id})})))}}]),n}(s.a.Component),m=(n(17),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={term:"",location:"",sortBy:""},a.handleTermChange=a.handleTermChange.bind(Object(l.a)(a)),a.handleLocationChange=a.handleLocationChange.bind(Object(l.a)(a)),a.handleSearch=a.handleSearch.bind(Object(l.a)(a)),a.handleSortByChange=a.handleSortByChange.bind(Object(l.a)(a)),a.sortByOptions={"Best Match":"best_match","Highest Rated":"rating","Most Reviewed":"review_count"},a}return Object(c.a)(n,[{key:"getSortByClass",value:function(e){return this.state.sortBy===e?"active":""}},{key:"handleSortByChange",value:function(e){this.setState({sortBy:e})}},{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"handleLocationChange",value:function(e){this.setState({location:e.target.value})}},{key:"handleSearch",value:function(e){this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy),e.preventDefault()}},{key:"renderSortByOptions",value:function(){var e=this;return Object.keys(this.sortByOptions).map((function(t){var n=e.sortByOptions[t];return s.a.createElement("li",{key:n,className:e.getSortByClass(n),onClick:e.handleSortByChange.bind(e,n)},t," ")}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"SearchBar"},s.a.createElement("div",{className:"SearchBar-sort-options"},s.a.createElement("ul",null,this.renderSortByOptions())),s.a.createElement("div",{className:"SearchBar-fields"},s.a.createElement("input",{placeholder:"Restaurants, Hole-in-Walls, Hotels, Accountants",onChange:this.handleTermChange}),s.a.createElement("input",{placeholder:"City, State or Zip",onChange:this.handleLocationChange})),s.a.createElement("div",{className:"SearchBar-submit"},s.a.createElement("a",{onClick:this.handleSearch},"Feeling Hungry?")))}}]),n}(s.a.Component)),f={search:function(e,t,n){return fetch("https://cors-anywhere.herokuapp.com\n        https://api.yelp.com/v3/businesses/search?term=".concat(e,"&location=").concat(t,"&sort_by=").concat(n),{headers:{Authorization:"Bearer ".concat("FZyKpYS75Xap-ikJSXyHUItWQ-buINDNA1m8F1Vc9KNnvXOjoMa2tqCQp5Tkyb28fo317d3V1bq2EiSWM6jLI7eyKGUfRVRQadV7rX_naOlAJcY1tY2jFPswHn6CXnYx")}}).then((function(e){return e.json()})).then((function(e){if(e.businesses)return e.businesses.map((function(e){return{id:e.id,imageSrc:e.image_url,name:e.name,address:e.location.address1,city:e.location.city,state:e.location.state,zipCode:e.location.zip_code,category:e.categories[0].title,rating:e.rating,reviewCount:e.review_count}}))}))}},v=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={businesses:[]},a.searchYelp=a.searchYelp.bind(Object(l.a)(a)),a}return Object(c.a)(n,[{key:"searchYelp",value:function(e,t,n){var a=this;f.search(e,t,n).then((function(e){a.setState({businesses:e})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"Rudimentary Yelp Search"),s.a.createElement(m,{searchYelp:this.searchYelp}),s.a.createElement(d,{businesses:this.state.businesses}))}}]),n}(s.a.Component),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(s.a.createElement(v,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/YelpClone",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/YelpClone","/service-worker.js");b?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):g(t,e)}))}}()}],[[8,1,2]]]);
//# sourceMappingURL=main.af02b852.chunk.js.map