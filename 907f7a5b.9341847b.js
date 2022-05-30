(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{283:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),s=(n(0),n(402)),i={id:"interactions",title:"Cross handler interactions",sidebar_label:"Cross handler interactions"},o={unversionedId:"gesture-handlers/basics/interactions",id:"gesture-handlers/basics/interactions",isDocsHomePage:!1,title:"Cross handler interactions",description:'Gesture handlers can "communicate" with each other to support complex gestures and control how they activate in certain scenarios.',source:"@site/docs/gesture-handlers/basics/interactions.md",slug:"/gesture-handlers/basics/interactions",permalink:"/react-native-gesture-handler/docs/next/gesture-handlers/basics/interactions",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/docs/gesture-handlers/basics/interactions.md",version:"current",sidebar_label:"Cross handler interactions",sidebar:"docs",previous:{title:"About Gesture Handlers",permalink:"/react-native-gesture-handler/docs/next/gesture-handlers/basics/about-handlers"},next:{title:"Testing with Jest",permalink:"/react-native-gesture-handler/docs/next/guides/testing"}},c=[{value:"Simultaneous recognition",id:"simultaneous-recognition",children:[{value:"Use cases",id:"use-cases",children:[]},{value:"Example",id:"example",children:[]}]},{value:"Awaiting other handlers",id:"awaiting-other-handlers",children:[{value:"Use cases",id:"use-cases-1",children:[]},{value:"Example",id:"example-1",children:[]}]}],l={rightToc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,'Gesture handlers can "communicate" with each other to support complex gestures and control how they ',Object(s.b)("em",{parentName:"p"},Object(s.b)("a",Object(a.a)({parentName:"em"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/basics/state#active"}),"activate"))," in certain scenarios."),Object(s.b)("p",null,"There are two means of achieving that described in the sections below.\nIn each case, it is necessary to provide a reference of one handler as a property to the other.\nGesture handler relies on ref objects created using ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/refs-and-the-dom.html"}),Object(s.b)("inlineCode",{parentName:"a"},"React.createRef()"))," and introduced in ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/blog/2018/03/29/react-v-16-3.html#createref-api"}),"React 16.3"),"."),Object(s.b)("h2",{id:"simultaneous-recognition"},"Simultaneous recognition"),Object(s.b)("p",null,"By default, only one gesture handler is allowed to be in the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/basics/state#active"}),Object(s.b)("inlineCode",{parentName:"a"},"ACTIVE"))," state.\nSo when a gesture handler recognizes a gesture it ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/basics/state#cancelled"}),"cancels")," all other handlers in the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/basics/state#began"}),Object(s.b)("inlineCode",{parentName:"a"},"BEGAN"))," state and prevents any new handlers from receiving a stream of touch events as long as it remains ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/basics/state#active"}),Object(s.b)("inlineCode",{parentName:"a"},"ACTIVE")),"."),Object(s.b)("p",null,"This behavior can be altered using the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/api/common-gh#simultaneousHandlers"}),Object(s.b)("inlineCode",{parentName:"a"},"simultaneousHandlers"))," property (available for all types of handlers).\nThis property accepts a ref or an array of refs to other handlers.\nHandlers connected in this way will be allowed to remain in the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/basics/state#active"}),Object(s.b)("inlineCode",{parentName:"a"},"ACTIVE"))," state at the same time."),Object(s.b)("h3",{id:"use-cases"},"Use cases"),Object(s.b)("p",null,"Simultaneous recognition needs to be used when implementing a photo preview component that supports zooming (scaling) the photo, rotating and panning it while zoomed in.\nIn this case we would use a ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/api/pinch-gh"}),Object(s.b)("inlineCode",{parentName:"a"},"PinchGestureHandler")),", ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/api/rotation-gh"}),Object(s.b)("inlineCode",{parentName:"a"},"RotationGestureHandler"))," and ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/api/pan-gh"}),Object(s.b)("inlineCode",{parentName:"a"},"PanGestureHandler"))," that would have to simultaneously recognize gestures."),Object(s.b)("h3",{id:"example"},"Example"),Object(s.b)("p",null,"See the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/blob/main/example/src/recipes/scaleAndRotate/index.tsx"}),'"Scale, rotate & tilt" example')," from the GestureHandler Example App or view it directly on your phone by visiting ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://snack.expo.io/@adamgrzybowski/react-native-gesture-handler-demo"}),"our expo demo"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class PinchableBox extends React.Component {\n  // ...take a look on full implementation in an Example app\n  render() {\n    const imagePinch = React.createRef();\n    const imageRotation = React.createRef();\n    return (\n      <RotationGestureHandler\n        ref={imageRotation}\n        simultaneousHandlers={imagePinch}\n        onGestureEvent={this._onRotateGestureEvent}\n        onHandlerStateChange={this._onRotateHandlerStateChange}>\n        <Animated.View>\n          <PinchGestureHandler\n            ref={imagePinch}\n            simultaneousHandlers={imageRotation}\n            onGestureEvent={this._onPinchGestureEvent}\n            onHandlerStateChange={this._onPinchHandlerStateChange}>\n            <Animated.View style={styles.container} collapsable={false}>\n              <Animated.Image\n                style={[\n                  styles.pinchableImage,\n                  {\n                    /* events-related transformations */\n                  },\n                ]}\n              />\n            </Animated.View>\n          </PinchGestureHandler>\n        </Animated.View>\n      </RotationGestureHandler>\n    );\n  }\n}\n")),Object(s.b)("h2",{id:"awaiting-other-handlers"},"Awaiting other handlers"),Object(s.b)("h3",{id:"use-cases-1"},"Use cases"),Object(s.b)("p",null,"A good example where awaiting is necessary is when we want to have single and double tap handlers registered for one view (a button).\nIn such a case we need to make single tap handler await a double tap.\nOtherwise if we try to perform a double tap the single tap handler will fire just after we hit the button for the first time, consequently ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/basics/state#cancelled"}),"cancelling")," the double tap handler."),Object(s.b)("h3",{id:"example-1"},"Example"),Object(s.b)("p",null,"See the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/blob/main/example/src/basic/multitap/index.tsx"}),'"Multitap" example')," from GestureHandler Example App or view it directly on your phone by visiting ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://snack.expo.io/@adamgrzybowski/react-native-gesture-handler-demo"}),"our expo demo"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const doubleTap = React.createRef();\nconst PressBox = () => (\n  <TapGestureHandler\n    onHandlerStateChange={({ nativeEvent }) =>\n      nativeEvent.state === State.ACTIVE && Alert.alert('Single tap!')\n    }\n    waitFor={doubleTap}>\n    <TapGestureHandler\n      ref={doubleTap}\n      onHandlerStateChange={({ nativeEvent }) =>\n        nativeEvent.state === State.ACTIVE && Alert.alert(\"You're so fast\")\n      }\n      numberOfTaps={2}>\n      <View style={styles.box} />\n    </TapGestureHandler>\n  </TapGestureHandler>\n);\n")))}d.isMDXComponent=!0},402:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=a,h=u["".concat(i,".").concat(b)]||u[b]||p[b]||s;return n?r.a.createElement(h,o(o({ref:t},l),{},{components:n})):r.a.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);