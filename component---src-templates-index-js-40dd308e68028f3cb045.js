(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});a(198);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(149),l=a(160),c=a(154),d=a(155),u=a(151),A=function(e){return e.test?o.a.createElement("span",null,e.text):o.a.createElement(s.Link,{to:e.url},e.text)},f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.data,a=e.pageContext,n=t.site.siteMetadata.title,r=a.group,i=a.index,f=a.first,p=a.last,h=a.pageCount,g=i-1==1?"":(i-1).toString(),m=(i+1).toString(),y=i>1,b=i<h;return o.a.createElement(c.a,{location:this.props.location,title:n},o.a.createElement(d.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),o.a.createElement(l.a,null),r.map(function(e){var t=e.node;return o.a.createElement("div",{key:t.fields.slug},o.a.createElement("h3",{style:{marginBottom:Object(u.a)(.25)}},o.a.createElement(s.Link,{style:{boxShadow:"none"},to:t.fields.slug},t.frontmatter.title)),o.a.createElement("small",null,t.frontmatter.date),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}),o.a.createElement("div",{className:"pagination-row"},o.a.createElement("div",{className:"previousLink"},y&&o.a.createElement(A,{test:f,url:g,text:"Go to Previous Page"})),o.a.createElement("div",{className:"nextLink"},b&&o.a.createElement(A,{test:p,url:m,text:"Go to Next Page"}))))},t}(o.a.Component);t.default=f;var p="1097489062"},149:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return A}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(148),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var c=a(152),d=a.n(c);a.d(t,"PageRenderer",function(){return d.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var A=r.a.createContext({}),f=function(e){return r.a.createElement(A.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},151:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return c});var n=a(165),r=a.n(n),i=a(166),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var s=new r.a(o.a);var l=s.rhythm,c=s.scale},152:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},153:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(52),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},154:function(e,t,a){"use strict";a(32);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(149),l=a(151),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,n=t.title,r=t.children;return e="/kanjian/"===a.pathname?o.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},o.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},o.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},o.a.createElement("img",{src:"/kanjian/home.png",className:"home-icon"}),n)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},e,r,o.a.createElement("footer",{style:{textAlign:"center"}},"© ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},t}(o.a.Component);t.a=c},155:function(e,t,a){"use strict";var n=a(156),r=a(0),i=a.n(r),o=a(4),s=a.n(o),l=a(167),c=a.n(l),d=a(149);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title;return i.a.createElement(d.StaticQuery,{query:A,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u;var A="1025518380"},156:function(e){e.exports={data:{site:{siteMetadata:{title:"看见",description:"见证国人的生活状态而无力改变它",author:"liwenzhi"}}}}},160:function(e,t,a){"use strict";a(161);var n=a(163),r=a(0),i=a.n(r),o=a(149),s=a(164),l=a.n(s),c=a(151);var d="2959523346";t.a=function(){return i.a.createElement(o.StaticQuery,{query:d,render:function(e){var t=e.site.siteMetadata,a=t.author,n=t.social;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(2.5)}},i.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(c.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"}}),i.a.createElement("p",null,"Written by ",i.a.createElement("strong",null,a)," who lives and works abroad."," ",i.a.createElement("br",null),i.a.createElement("a",{href:"https://twitter.com/"+n.twitter},"Follow him on Twitter")))},data:n})}},161:function(e,t,a){"use strict";a(162)("fixed",function(e){return function(){return e(this,"tt","","")}})},162:function(e,t,a){var n=a(11),r=a(24),i=a(17),o=/"/g,s=function(e,t,a,n){var r=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},163:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECBAP/xAAXAQADAQAAAAAAAAAAAAAAAAABAgMA/9oADAMBAAIQAxAAAAHDaLStDCM56h2UOv8A/8QAHRAAAgIBBQAAAAAAAAAAAAAAAQIAAyEREhMiMf/aAAgBAQABBQIdmdEES7QIy7n44ckYaz2f/8QAGBEAAgMAAAAAAAAAAAAAAAAAADEBEBH/2gAIAQMBAT8BZpCr/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQEkH/2gAIAQIBAT8BKo2P/8QAGhAAAgIDAAAAAAAAAAAAAAAAAAERMSAhUf/aAAgBAQAGPwKG4RZD2OxLg8P/xAAcEAEAAgMAAwAAAAAAAAAAAAABABEhMUEQYYH/2gAIAQEAAT8hAHUrM8EOVFu7DuUzIr7KnIU5KK9xafN//9oADAMBAAIAAwAAABDTKPz/xAAYEQEAAwEAAAAAAAAAAAAAAAABABARMf/aAAgBAwEBPxAAbNTpX//EABcRAAMBAAAAAAAAAAAAAAAAAAEQITH/2gAIAQIBAT8QoiDhf//EABsQAQEAAwEBAQAAAAAAAAAAAAERACExQWFR/9oACAEBAAE/ENUUf1Thld4OlV+YrVCK6eZotck1V8xUkEem/cQDQqYxuscEEe4sWZ//2Q==",width:50,height:50,src:"/kanjian/static/2f555968b4a0f182ae40b816a37a409c/d2d31/me_160.jpg",srcSet:"/kanjian/static/2f555968b4a0f182ae40b816a37a409c/d2d31/me_160.jpg 1x,\n/kanjian/static/2f555968b4a0f182ae40b816a37a409c/0b804/me_160.jpg 1.5x,\n/kanjian/static/2f555968b4a0f182ae40b816a37a409c/753c3/me_160.jpg 2x,\n/kanjian/static/2f555968b4a0f182ae40b816a37a409c/31ca8/me_160.jpg 3x"}}},site:{siteMetadata:{author:"liwenzhi",social:{twitter:"lwz75121"}}}}}},164:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var r,i=n(a(7)),o=n(a(51)),s=n(a(158)),l=n(a(159)),c=n(a(0)),d=n(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},A={},f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return A[a]||!1},p=[];var h=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),p.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+n+r+"<img "+s+l+t+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=c.default.forwardRef(function(e,t){var a=e.style,n=e.onLoad,r=e.onError,i=(0,s.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},i,{onLoad:n,onError:r,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});m.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,r=!1,i=t.fadeIn,s=f(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,r=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:n,imgLoaded:!1,IOSupported:r,fadeIn:i,hasNoScript:l,seenBefore:s},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:f(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,A[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,A=void 0===d?{}:d,f=e.placeholderClassName,p=e.fluid,h=e.fixed,y=e.backgroundColor,b=e.Tag,E="boolean"==typeof y?"lightgray":y,w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,A),v=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),S={title:t,alt:this.state.isVisible?"":a,style:w,className:f};if(p){var x=p;return c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),x.base64&&c.default.createElement(m,(0,l.default)({src:x.base64},S)),x.tracedSVG&&c.default.createElement(m,(0,l.default)({src:x.tracedSVG},S)),E&&c.default.createElement(b,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,x.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),c.default.createElement("source",{srcSet:x.srcSet,sizes:x.sizes}),c.default.createElement(m,{alt:a,title:t,src:x.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},x))}}))}if(h){var j=h,R=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},i);return"inherit"===i.display&&delete R.display,c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},j.base64&&c.default.createElement(m,(0,l.default)({src:j.base64},S)),j.tracedSVG&&c.default.createElement(m,(0,l.default)({src:j.tracedSVG},S)),E&&c.default.createElement(b,{title:t,style:{backgroundColor:E,width:j.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:j.height}}),this.state.isVisible&&c.default.createElement("picture",null,j.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),c.default.createElement("source",{srcSet:j.srcSet,sizes:j.sizes}),c.default.createElement(m,{alt:a,title:t,width:j.width,height:j.height,src:j.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:j.width,height:j.height},j))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),E=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:b,sizes:E,fixed:b,fluid:E,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string};var w=y;t.default=w},198:function(e,t,a){"use strict";a(199);var n=a(5),r=a(74),i=a(16),o=/./.toString,s=function(e){a(18)(RegExp.prototype,"toString",e,!0)};a(24)(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?s(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!i&&e instanceof RegExp?r.call(e):void 0)}):"toString"!=o.name&&s(function(){return o.call(this)})},199:function(e,t,a){a(16)&&"g"!=/./g.flags&&a(25).f(RegExp.prototype,"flags",{configurable:!0,get:a(74)})}}]);
//# sourceMappingURL=component---src-templates-index-js-40dd308e68028f3cb045.js.map