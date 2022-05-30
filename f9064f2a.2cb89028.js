(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{389:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var i=n(2),o=n(6),a=(n(0),n(402)),r=n(404),l=n(406),c={id:"swipeable",title:"Swipeable",sidebar_label:"Swipeable"},s={unversionedId:"api/components/swipeable",id:"version-1.10.3/api/components/swipeable",isDocsHomePage:!1,title:"Swipeable",description:'This component allows for implementing swipeable rows or similar interaction. It renders its children within a panable container allows for horizontal swiping left and right. While swiping one of two "action" containers can be shown depends on whether user swipes left or right (containers can be rendered by renderLeftActions or renderRightActions props).',source:"@site/versioned_docs/version-1.10.3/api/components/swipeable.md",slug:"/api/components/swipeable",permalink:"/react-native-gesture-handler/docs/1.10.3/api/components/swipeable",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-1.10.3/api/components/swipeable.md",version:"1.10.3",sidebar_label:"Swipeable",sidebar:"version-1.10.3/docs",previous:{title:"Buttons",permalink:"/react-native-gesture-handler/docs/1.10.3/api/components/buttons"},next:{title:"Touchables",permalink:"/react-native-gesture-handler/docs/1.10.3/api/components/touchables"}},p=[{value:"Usage:",id:"usage",children:[]},{value:"Properties",id:"properties",children:[{value:"<code>friction</code>",id:"friction",children:[]},{value:"<code>leftThreshold</code>",id:"leftthreshold",children:[]},{value:"<code>rightThreshold</code>",id:"rightthreshold",children:[]},{value:"<code>overshootLeft</code>",id:"overshootleft",children:[]},{value:"<code>overshootRight</code>",id:"overshootright",children:[]},{value:"<code>overshootFriction</code>",id:"overshootfriction",children:[]},{value:"<code>onSwipeableLeftOpen</code>",id:"onswipeableleftopen",children:[]},{value:"<code>onSwipeableRightOpen</code>",id:"onswipeablerightopen",children:[]},{value:"<code>onSwipeableOpen</code>",id:"onswipeableopen",children:[]},{value:"<code>onSwipeableClose</code>",id:"onswipeableclose",children:[]},{value:"<code>onSwipeableLeftWillOpen</code>",id:"onswipeableleftwillopen",children:[]},{value:"<code>onSwipeableRightWillOpen</code>",id:"onswipeablerightwillopen",children:[]},{value:"<code>onSwipeableWillOpen</code>",id:"onswipeablewillopen",children:[]},{value:"<code>onSwipeableWillClose</code>",id:"onswipeablewillclose",children:[]},{value:"<code>renderLeftActions</code>",id:"renderleftactions",children:[]},{value:"<code>renderRightActions</code>",id:"renderrightactions",children:[]},{value:"<code>containerStyle</code>",id:"containerstyle",children:[]},{value:"<code>childrenContainerStyle</code>",id:"childrencontainerstyle",children:[]},{value:"<code>enableTrackpadTwoFingerGesture</code> (iOS only)",id:"enabletrackpadtwofingergesture-ios-only",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>close</code>",id:"close",children:[]},{value:"<code>openLeft</code>",id:"openleft",children:[]},{value:"<code>openRight</code>",id:"openright",children:[]},{value:"Example:",id:"example",children:[]}]}],d={rightToc:p};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(l.a,{mdxType:"GifGallery"},Object(a.b)("img",{src:Object(r.a)("gifs/sampleswipeable.gif"),height:"120"})),Object(a.b)("p",null,'This component allows for implementing swipeable rows or similar interaction. It renders its children within a panable container allows for horizontal swiping left and right. While swiping one of two "action" containers can be shown depends on whether user swipes left or right (containers can be rendered by ',Object(a.b)("inlineCode",{parentName:"p"},"renderLeftActions")," or ",Object(a.b)("inlineCode",{parentName:"p"},"renderRightActions")," props)."),Object(a.b)("h3",{id:"usage"},"Usage:"),Object(a.b)("p",null,"Similarly to the ",Object(a.b)("inlineCode",{parentName:"p"},"DrawerLayout"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Swipeable")," component isn't exported by default from the ",Object(a.b)("inlineCode",{parentName:"p"},"react-native-gesture-handler")," package. To use it, import it in the following way:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"import Swipeable from 'react-native-gesture-handler/Swipeable';\n")),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"friction"},Object(a.b)("inlineCode",{parentName:"h3"},"friction")),Object(a.b)("p",null,'a number that specifies how much the visual interaction will be delayed compared to the gesture distance. e.g. value of 1 will indicate that the swipeable panel should exactly follow the gesture, 2 means it is going to be two times "slower".'),Object(a.b)("h3",{id:"leftthreshold"},Object(a.b)("inlineCode",{parentName:"h3"},"leftThreshold")),Object(a.b)("p",null,"distance from the left edge at which released panel will animate to the open state (or the open panel will animate into the closed state). By default it's a half of the panel's width."),Object(a.b)("h3",{id:"rightthreshold"},Object(a.b)("inlineCode",{parentName:"h3"},"rightThreshold")),Object(a.b)("p",null,"distance from the right edge at which released panel will animate to the open state (or the open panel will animate into the closed state). By default it's a half of the panel's width."),Object(a.b)("h3",{id:"overshootleft"},Object(a.b)("inlineCode",{parentName:"h3"},"overshootLeft")),Object(a.b)("p",null,"a boolean value indicating if the swipeable panel can be pulled further than the left actions panel's width. It is set to ",Object(a.b)("inlineCode",{parentName:"p"},"true")," by default as long as the left panel render method is present."),Object(a.b)("h3",{id:"overshootright"},Object(a.b)("inlineCode",{parentName:"h3"},"overshootRight")),Object(a.b)("p",null,"a boolean value indicating if the swipeable panel can be pulled further than the right actions panel's width. It is set to ",Object(a.b)("inlineCode",{parentName:"p"},"true")," by default as long as the right panel render method is present."),Object(a.b)("h3",{id:"overshootfriction"},Object(a.b)("inlineCode",{parentName:"h3"},"overshootFriction")),Object(a.b)("p",null,"a number that specifies how much the visual interaction will be delayed compared to the gesture distance at overshoot. Default value is 1, it mean no friction, for a native feel, try 8 or above."),Object(a.b)("h3",{id:"onswipeableleftopen"},Object(a.b)("inlineCode",{parentName:"h3"},"onSwipeableLeftOpen")),Object(a.b)("p",null,"method that is called when left action panel gets open."),Object(a.b)("h3",{id:"onswipeablerightopen"},Object(a.b)("inlineCode",{parentName:"h3"},"onSwipeableRightOpen")),Object(a.b)("p",null,"method that is called when right action panel gets open."),Object(a.b)("h3",{id:"onswipeableopen"},Object(a.b)("inlineCode",{parentName:"h3"},"onSwipeableOpen")),Object(a.b)("p",null,"method that is called when action panel gets open (either right or left)."),Object(a.b)("h3",{id:"onswipeableclose"},Object(a.b)("inlineCode",{parentName:"h3"},"onSwipeableClose")),Object(a.b)("p",null,"method that is called when action panel is closed."),Object(a.b)("h3",{id:"onswipeableleftwillopen"},Object(a.b)("inlineCode",{parentName:"h3"},"onSwipeableLeftWillOpen")),Object(a.b)("p",null,"method that is called when left action panel starts animating on open."),Object(a.b)("h3",{id:"onswipeablerightwillopen"},Object(a.b)("inlineCode",{parentName:"h3"},"onSwipeableRightWillOpen")),Object(a.b)("p",null,"method that is called when right action panel starts animating on open."),Object(a.b)("h3",{id:"onswipeablewillopen"},Object(a.b)("inlineCode",{parentName:"h3"},"onSwipeableWillOpen")),Object(a.b)("p",null,"method that is called when action panel starts animating on open (either right or left)."),Object(a.b)("h3",{id:"onswipeablewillclose"},Object(a.b)("inlineCode",{parentName:"h3"},"onSwipeableWillClose")),Object(a.b)("p",null,"method that is called when action panel starts animating on close."),Object(a.b)("h3",{id:"renderleftactions"},Object(a.b)("inlineCode",{parentName:"h3"},"renderLeftActions")),Object(a.b)("p",null,"method that is expected to return an action panel that is going to be revealed from the left side when user swipes right.\nThis map describes the values to use as inputRange for extra interpolation:\nAnimatedValue: ","[startValue, endValue]"),Object(a.b)("p",null,"progressAnimatedValue: ","[0, 1]","\ndragAnimatedValue: ","[0, +]"),Object(a.b)("p",null,"To support ",Object(a.b)("inlineCode",{parentName:"p"},"rtl")," flexbox layouts use ",Object(a.b)("inlineCode",{parentName:"p"},"flexDirection")," styling."),Object(a.b)("h3",{id:"renderrightactions"},Object(a.b)("inlineCode",{parentName:"h3"},"renderRightActions")),Object(a.b)("p",null,"method that is expected to return an action panel that is going to be revealed from the right side when user swipes left.\nThis map describes the values to use as inputRange for extra interpolation:\nAnimatedValue: ","[startValue, endValue]"),Object(a.b)("p",null,"progressAnimatedValue: ","[0, 1]","\ndragAnimatedValue: ","[0, -]"),Object(a.b)("p",null,"To support ",Object(a.b)("inlineCode",{parentName:"p"},"rtl")," flexbox layouts use ",Object(a.b)("inlineCode",{parentName:"p"},"flexDirection")," styling."),Object(a.b)("h3",{id:"containerstyle"},Object(a.b)("inlineCode",{parentName:"h3"},"containerStyle")),Object(a.b)("p",null,"style object for the container (Animated.View), for example to override ",Object(a.b)("inlineCode",{parentName:"p"},"overflow: 'hidden'"),"."),Object(a.b)("h3",{id:"childrencontainerstyle"},Object(a.b)("inlineCode",{parentName:"h3"},"childrenContainerStyle")),Object(a.b)("p",null,"style object for the children container (Animated.View), for example to apply ",Object(a.b)("inlineCode",{parentName:"p"},"flex: 1"),"."),Object(a.b)("h3",{id:"enabletrackpadtwofingergesture-ios-only"},Object(a.b)("inlineCode",{parentName:"h3"},"enableTrackpadTwoFingerGesture")," (iOS only)"),Object(a.b)("p",null,"Enables two-finger gestures on supported devices, for example iPads with trackpads. If not enabled the gesture will require click + drag, with enableTrackpadTwoFingerGesture swiping with two fingers will also trigger the gesture."),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("p",null,"Using reference to ",Object(a.b)("inlineCode",{parentName:"p"},"Swipeable")," it's possible to trigger some actions on it"),Object(a.b)("h3",{id:"close"},Object(a.b)("inlineCode",{parentName:"h3"},"close")),Object(a.b)("p",null,"method that closes component."),Object(a.b)("h3",{id:"openleft"},Object(a.b)("inlineCode",{parentName:"h3"},"openLeft")),Object(a.b)("p",null,"method that opens component on left side."),Object(a.b)("h3",{id:"openright"},Object(a.b)("inlineCode",{parentName:"h3"},"openRight")),Object(a.b)("p",null,"method that opens component on right side."),Object(a.b)("h3",{id:"example"},"Example:"),Object(a.b)("p",null,"See the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/blob/main/examples/Example/src/swipeable/index.tsx"}),"swipeable example")," from ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/1.10.3/example"}),"GestureHandler Example App")," or view it directly on your phone by visiting ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://snack.expo.io/@adamgrzybowski/react-native-gesture-handler-demo"}),"our expo demo"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"import React, { Component } from 'react';\nimport { Animated, StyleSheet, View } from 'react-native';\nimport { RectButton } from 'react-native-gesture-handler';\nimport Swipeable from 'react-native-gesture-handler/Swipeable';\n\nclass AppleStyleSwipeableRow extends Component {\n  renderLeftActions = (progress, dragX) => {\n    const trans = dragX.interpolate({\n      inputRange: [0, 50, 100, 101],\n      outputRange: [-20, 0, 0, 1],\n    });\n    return (\n      <RectButton style={styles.leftAction} onPress={this.close}>\n        <Animated.Text\n          style={[\n            styles.actionText,\n            {\n              transform: [{ translateX: trans }],\n            },\n          ]}>\n          Archive\n        </Animated.Text>\n      </RectButton>\n    );\n  };\n  render() {\n    return (\n      <Swipeable renderLeftActions={this.renderLeftActions}>\n        <Text>\"hello\"</Text>\n      </Swipeable>\n    );\n  }\n}\n")))}b.isMDXComponent=!0},402:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,u=d["".concat(r,".").concat(h)]||d[h]||b[h]||a;return n?o.a.createElement(u,l(l({ref:t},s),{},{components:n})):o.a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},403:function(e,t,n){"use strict";var i=n(0),o=n(20);t.a=function(){var e=Object(i.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},404:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var i=n(403),o=n(405);function a(){var e=Object(i.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var a=void 0===i?{}:i,r=a.forcePrependBaseUrl,l=void 0!==r&&r,c=a.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(l)return t+n;var p=!n.startsWith(t)?t+n.replace(/^\//,""):n;return s?e+p:p}(a,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},405:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}))},406:function(e,t,n){"use strict";var i=n(0),o=n.n(i),a={container:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"},img:{border:"1px solid #acacac",borderRadius:"6px",boxShadow:"0 0 20px #acacac",marginTop:"1em",marginBottom:"1em"}};t.a=function(e){var t=e.children;return o.a.createElement("div",{style:a.container},i.Children.map(t,(function(e){return Object(i.cloneElement)(e,Object.assign({},e.props.style,{style:a.img}))})))}}}]);