(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[80],{1006:function(e,a,t){e.exports=t.p+"static/media/05.f45463a1.jpg"},1160:function(e,a,t){e.exports=t.p+"static/media/01.68c25447.jpg"},1161:function(e,a,t){e.exports=t.p+"static/media/02.28f1f6c1.jpg"},1162:function(e,a,t){e.exports=t.p+"static/media/04.142989c0.jpg"},1343:function(e,a,t){e.exports=t.p+"static/media/03.f098ec19.jpg"},1344:function(e,a,t){e.exports=t.p+"static/media/06.788aa261.jpg"},2106:function(e,a,t){"use strict";t.r(a);var n=t(13),i=t(14),r=t(16),l=t(15),c=t(0),s=t.n(c),o=t(1240),m=t(1241),d=t(801),u=t(914),g=t(1242),p=t(1243),v=t(1244),E=t(815),x=t(791),f=t(792),h=t(1245),b=t(816),I=t(817),C=t(982),T=t(984),S=t(985),k=t(4),j=t.n(k),y=t(321),N=t(293),w=s.a.createElement("pre",null,s.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {\n  Carousel,\n  CarouselItem,\n  CarouselControl,\n  CarouselIndicators\n} from "reactstrap"\nimport sliderImage1 from "../../../assets/img/slider/01.jpg"\nimport sliderImage2 from "../../../assets/img/slider/02.jpg"\nimport sliderImage3 from "../../../assets/img/slider/03.jpg"\n\nconst images = [\n  {\n    src: sliderImage1,\n    id: 1\n  },\n  {\n    src: sliderImage2,\n    id: 2\n  },\n  {\n    src: sliderImage3,\n    id: 3\n  }\n]\n\nclass CarouselBasic extends React.Component {\n  state = {\n    activeIndex: 0\n  }\n\n  onExiting = () => {\n    this.animating = true\n  }\n\n  onExited = () => {\n    this.animating = false\n  }\n\n  next = () => {\n    if (this.animating) return\n    const nextIndex =\n      this.state.activeIndex === images.length - 1\n        ? 0\n        : this.state.activeIndex + 1\n    this.setState({ activeIndex: nextIndex })\n  }\n\n  previous = () => {\n    if (this.animating) return\n    const nextIndex =\n      this.state.activeIndex === images.length - 1\n        ? 0\n        : this.state.activeIndex - 1\n    this.setState({ activeIndex: nextIndex })\n  }\n\n  goToIndex = newIndex => {\n    if (this.animating) return\n    this.setState({ activeIndex: newIndex })\n  }\n\n  render() {\n    const { activeIndex } = this.state\n\n    const slides = images.map(item => {\n      return (\n        <CarouselItem\n          onExiting={this.onExiting}\n          onExited={this.onExited}\n          key={item.id}\n        >\n          <img src={item.src} className="img-fluid" alt={item.id} />\n        </CarouselItem>\n      )\n    })\n    return (\n      <React.Fragment>\n        <Carousel\n            activeIndex={activeIndex}\n            next={this.next}\n            previous={this.previous}\n        >\n            <CarouselIndicators\n            items={images}\n            activeIndex={activeIndex}\n            onClickHandler={this.goToIndex}\n            />\n            {slides}\n            <CarouselControl\n            direction="prev"\n            directionText="Previous"\n            onClickHandler={this.previous}\n            />\n            <CarouselControl\n            direction="next"\n            directionText="Next"\n            onClickHandler={this.next}\n            />\n        </Carousel>\n    </React.Fragment>\n    )\n  }\n}\nexport default CarouselBasic\n\n    ')),O=s.a.createElement("pre",null,s.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {\n  Carousel,\n  CarouselItem,\n  CarouselControl,\n  CarouselIndicators,\n  CarouselCaption\n} from "reactstrap"\nimport sliderImage1 from "../../../assets/img/slider/03.jpg"\nimport sliderImage2 from "../../../assets/img/slider/04.jpg"\nimport sliderImage3 from "../../../assets/img/slider/05.jpg"\n\nconst images = [\n  {\n      src: sliderImage1,\n      id: 1,\n      header: "Slide 1",\n      caption: "Cupcake ipsum dolor sit amet toffee lemon drops bonbon."\n  },\n  {\n      src: sliderImage2,\n      id: 2,\n      header: "Slide 2",\n      caption: "Cheesecake caramels wafer pie lollipop."\n  },\n  {\n      src: sliderImage3,\n      id: 3,\n      header: "Slide 3",\n      caption: "Candy canes toffee gummies souffl\xe9 fruitcake drag\xe9e icing."\n  }\n]\n\nclass CarouselCaption extends React.Component {\n  state = {\n    activeIndex: 0\n  }\n\n  onExiting = () => {\n    this.animating = true\n  }\n\n  onExited = () => {\n    this.animating = false\n  }\n\n  next = () => {\n    if (this.animating) return\n    const nextIndex =\n      this.state.activeIndex === images.length - 1\n        ? 0\n        : this.state.activeIndex + 1\n    this.setState({ activeIndex: nextIndex })\n  }\n\n  previous = () => {\n    if (this.animating) return\n    const nextIndex =\n      this.state.activeIndex === images.length - 1\n        ? 0\n        : this.state.activeIndex - 1\n    this.setState({ activeIndex: nextIndex })\n  }\n\n  goToIndex = newIndex => {\n    if (this.animating) return\n    this.setState({ activeIndex: newIndex })\n  }\n\n  render() {\n    const { activeIndex } = this.state\n\n    const slides = images.map(item => {\n      return (\n        <CarouselItem\n          onExiting={this.onExiting}\n          onExited={this.onExited}\n          key={item.id}\n        >\n          <img src={item.src} className="img-fluid" alt={item.id} />\n          <CarouselCaption captionText={item.caption} captionHeader={item.header} />\n        </CarouselItem>\n      )\n    })\n    return (\n      <React.Fragment>\n        <Carousel\n            activeIndex={activeIndex}\n            next={this.next}\n            previous={this.previous}\n        >\n            <CarouselIndicators\n            items={images}\n            activeIndex={activeIndex}\n            onClickHandler={this.goToIndex}\n            />\n            {slides}\n            <CarouselControl\n            direction="prev"\n            directionText="Previous"\n            onClickHandler={this.previous}\n            />\n            <CarouselControl\n            direction="next"\n            directionText="Next"\n            onClickHandler={this.next}\n            />\n        </Carousel>\n    </React.Fragment>\n    )\n  }\n}\nexport default CarouselCaption\n\n    ')),H=s.a.createElement("pre",null,s.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport { UncontrolledCarousel } from "reactstrap"\nimport sliderImage1 from "../../../assets/img/slider/03.jpg"\nimport sliderImage2 from "../../../assets/img/slider/04.jpg"\nimport sliderImage3 from "../../../assets/img/slider/05.jpg"\n\nconst images = [\n  {\n      src: sliderImage1,\n      id: 1,\n      header: "Slide 1",\n      caption: "Cupcake ipsum dolor sit amet toffee lemon drops bonbon."\n  },\n  {\n      src: sliderImage2,\n      id: 2,\n      header: "Slide 2",\n      caption: "Cheesecake caramels wafer pie lollipop."\n  },\n  {\n      src: sliderImage3,\n      id: 3,\n      header: "Slide 3",\n      caption: "Candy canes toffee gummies souffl\xe9 fruitcake drag\xe9e icing."\n  }\n]\n\nclass CarouselUncontrolled extends React.Component {\n  state = {\n    activeTab: "1",\n  }\n\n  render() {\n    return (\n      <React.Fragment>\n        <UncontrolledCarousel items={images} />\n    </React.Fragment>\n    )\n  }\n}\nexport default CarouselUncontrolled\n\n        ')),R=s.a.createElement("pre",null,s.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport { UncontrolledCarousel } from "reactstrap"\nimport sliderImage1 from "../../../assets/img/slider/05.jpg"\nimport sliderImage2 from "../../../assets/img/slider/02.jpg"\nimport sliderImage3 from "../../../assets/img/slider/03.jpg"\n\nconst images = [\n  {\n      src: sliderImage1,\n      id: 1,\n      header: "Slide 1",\n      caption: "Cupcake ipsum dolor sit amet toffee lemon drops bonbon."\n  },\n  {\n      src: sliderImage2,\n      id: 2,\n      header: "Slide 2",\n      caption: "Cheesecake caramels wafer pie lollipop."\n  },\n  {\n      src: sliderImage3,\n      id: 3,\n      header: "Slide 3",\n      caption: "Candy canes toffee gummies souffl\xe9 fruitcake drag\xe9e icing."\n  }\n]\n\nclass CarouselInterval extends React.Component {\n  state = {\n    activeTab: "1",\n  }\n\n  render() {\n    return (\n      <React.Fragment>\n        <UncontrolledCarousel interval="500" items={images} />\n    </React.Fragment>\n    )\n  }\n}\nexport default CarouselInterval')),F=s.a.createElement("pre",null,s.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport { UncontrolledCarousel } from "reactstrap"\nimport sliderImage1 from "../../../assets/img/slider/05.jpg"\nimport sliderImage2 from "../../../assets/img/slider/01.jpg"\nimport sliderImage3 from "../../../assets/img/slider/03.jpg"\n\nconst images = [\n  {\n      src: sliderImage1,\n      id: 1,\n      header: "Slide 1",\n      caption: "Cupcake ipsum dolor sit amet toffee lemon drops bonbon."\n  },\n  {\n      src: sliderImage2,\n      id: 2,\n      header: "Slide 2",\n      caption: "Cheesecake caramels wafer pie lollipop."\n  },\n  {\n      src: sliderImage3,\n      id: 3,\n      header: "Slide 3",\n      caption: "Candy canes toffee gummies souffl\xe9 fruitcake drag\xe9e icing."\n  }\n]\n\nclass CarouselKeyboard extends React.Component {\n  state = {\n    activeTab: "1",\n  }\n\n  render() {\n    return (\n      <React.Fragment>\n        <UncontrolledCarousel keyboard={false} items={images} />\n    </React.Fragment>\n    )\n  }\n}\nexport default CarouselKeyboard\n\n            ')),U=s.a.createElement("pre",null,s.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport { UncontrolledCarousel } from "reactstrap"\nimport sliderImage1 from "../../../assets/img/slider/05.jpg"\nimport sliderImage2 from "../../../assets/img/slider/01.jpg"\nimport sliderImage3 from "../../../assets/img/slider/03.jpg"\n\nconst images = [\n  {\n      src: sliderImage1,\n      id: 1,\n      header: "Slide 1",\n      caption: "Cupcake ipsum dolor sit amet toffee lemon drops bonbon."\n  },\n  {\n      src: sliderImage2,\n      id: 2,\n      header: "Slide 2",\n      caption: "Cheesecake caramels wafer pie lollipop."\n  },\n  {\n      src: sliderImage3,\n      id: 3,\n      header: "Slide 3",\n      caption: "Candy canes toffee gummies souffl\xe9 fruitcake drag\xe9e icing."\n  }\n]\n\nclass CarouselKeyboard extends React.Component {\n  state = {\n    activeTab: "1",\n  }\n\n  render() {\n    return (\n      <React.Fragment>\n        <UncontrolledCarousel pause items={images} />\n    </React.Fragment>\n    )\n  }\n}\nexport default CarouselPause')),z=t(1160),A=t.n(z),P=t(1161),K=t.n(P),B=t(1343),J=t.n(B),D=[{src:A.a,id:1},{src:K.a,id:2},{src:J.a,id:3}],M=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1",activeIndex:0},e.onExiting=function(){e.animating=!0},e.onExited=function(){e.animating=!1},e.next=function(){if(!e.animating){var a=e.state.activeIndex===D.length-1?0:e.state.activeIndex+1;e.setState({activeIndex:a})}},e.previous=function(){if(!e.animating){var a=0===e.state.activeIndex?D.length-1:e.state.activeIndex-1;e.setState({activeIndex:a})}},e.goToIndex=function(a){e.animating||e.setState({activeIndex:a})},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.state.activeIndex,t=D.map((function(a){return s.a.createElement(u.a,{onExiting:e.onExiting,onExited:e.onExited,key:a.id},s.a.createElement("img",{src:a.src,className:"img-fluid",alt:a.id}))}));return s.a.createElement(s.a.Fragment,null,s.a.createElement(g.a,null,s.a.createElement(p.a,null,s.a.createElement(v.a,null,"Basic Example"),s.a.createElement("div",{className:"views"},s.a.createElement(E.a,{tabs:!0},s.a.createElement(x.a,null,s.a.createElement(f.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},s.a.createElement(y.a,{size:15}))),s.a.createElement(x.a,null,s.a.createElement(f.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},s.a.createElement(N.a,{size:15})))))),s.a.createElement(h.a,null,s.a.createElement(b.a,{activeTab:this.state.activeTab},s.a.createElement(I.a,{tabId:"1"},s.a.createElement(C.a,{activeIndex:a,next:this.next,previous:this.previous},s.a.createElement(T.a,{items:D,activeIndex:a,onClickHandler:this.goToIndex}),t,s.a.createElement(S.a,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),s.a.createElement(S.a,{direction:"next",directionText:"Next",onClickHandler:this.next}))),s.a.createElement(I.a,{className:"component-code",tabId:"2"},w)))))}}]),t}(s.a.Component),Y=t(983),q=t(1162),G=t.n(q),L=t(1006),Q=t.n(L),V=[{src:J.a,id:1,header:"Slide 1",caption:"Cupcake ipsum dolor sit amet toffee lemon drops bonbon."},{src:G.a,id:2,header:"Slide 2",caption:"Cheesecake caramels wafer pie lollipop."},{src:Q.a,id:3,header:"Slide 3",caption:"Candy canes toffee gummies souffl\xe9 fruitcake drag\xe9e icing."}],W=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1",activeIndex:0},e.onExiting=function(){e.animating=!0},e.onExited=function(){e.animating=!1},e.next=function(){if(!e.animating){var a=e.state.activeIndex===V.length-1?0:e.state.activeIndex+1;e.setState({activeIndex:a})}},e.previous=function(){if(!e.animating){var a=0===e.state.activeIndex?V.length-1:e.state.activeIndex-1;e.setState({activeIndex:a})}},e.goToIndex=function(a){e.animating||e.setState({activeIndex:a})},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.state.activeIndex,t=V.map((function(a){return s.a.createElement(u.a,{onExiting:e.onExiting,onExited:e.onExited,key:a.id},s.a.createElement("img",{src:a.src,className:"img-fluid",alt:a.id}),s.a.createElement(Y.a,{captionText:a.caption,captionHeader:a.header}))}));return s.a.createElement(s.a.Fragment,null,s.a.createElement(g.a,null,s.a.createElement(p.a,null,s.a.createElement(v.a,null,"Captions Example"),s.a.createElement("div",{className:"views"},s.a.createElement(E.a,{tabs:!0},s.a.createElement(x.a,null,s.a.createElement(f.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},s.a.createElement(y.a,{size:15}))),s.a.createElement(x.a,null,s.a.createElement(f.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},s.a.createElement(N.a,{size:15})))))),s.a.createElement(h.a,null,s.a.createElement(b.a,{activeTab:this.state.activeTab},s.a.createElement(I.a,{tabId:"1"},s.a.createElement(C.a,{activeIndex:a,next:this.next,previous:this.previous},s.a.createElement(T.a,{items:V,activeIndex:a,onClickHandler:this.goToIndex}),t,s.a.createElement(S.a,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),s.a.createElement(S.a,{direction:"next",directionText:"Next",onClickHandler:this.next}))),s.a.createElement(I.a,{className:"component-code",tabId:"2"},O)))))}}]),t}(s.a.Component),X=t(1119),Z=t(1344),$=t.n(Z),_=[{src:$.a,altText:"Slide 1",caption:"Slide 1",header:"Slide 1 Header"},{src:K.a,altText:"Slide 2",caption:"Slide 2",header:"Slide 2 Header"},{src:Q.a,altText:"Slide 3",caption:"Slide 3",header:"Slide 3 Header"}],ee=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(g.a,null,s.a.createElement(p.a,null,s.a.createElement(v.a,null,"Uncontrolled Example"),s.a.createElement("div",{className:"views"},s.a.createElement(E.a,{tabs:!0},s.a.createElement(x.a,null,s.a.createElement(f.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},s.a.createElement(y.a,{size:15}))),s.a.createElement(x.a,null,s.a.createElement(f.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},s.a.createElement(N.a,{size:15})))))),s.a.createElement(h.a,null,s.a.createElement("p",null,"You don't have to manage state with"," ",s.a.createElement("code",null,"UncontrolledCarousel")," all you have to do is return it with your content."),s.a.createElement(b.a,{activeTab:this.state.activeTab},s.a.createElement(I.a,{tabId:"1"},s.a.createElement(X.a,{items:_})),s.a.createElement(I.a,{className:"component-code",tabId:"2"},H)))))}}]),t}(s.a.Component),ae=[{src:Q.a,id:1,altText:"Slide 1",caption:"Slide 1",header:"Slide 1 Header"},{src:G.a,id:2,altText:"Slide 2",caption:"Slide 2",header:"Slide 2 Header"},{src:A.a,id:3,altText:"Slide 3",caption:"Slide 3",header:"Slide 3 Header"}],te=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(g.a,null,s.a.createElement(p.a,null,s.a.createElement(v.a,null,"Interval Example"),s.a.createElement("div",{className:"views"},s.a.createElement(E.a,{tabs:!0},s.a.createElement(x.a,null,s.a.createElement(f.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},s.a.createElement(y.a,{size:15}))),s.a.createElement(x.a,null,s.a.createElement(f.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},s.a.createElement(N.a,{size:15})))))),s.a.createElement(h.a,null,s.a.createElement("p",null,"Use ",s.a.createElement("code",null,"Interval")," attribute to set interval between slides. default interval is ",s.a.createElement("strong",null,"5000"),"."),s.a.createElement(b.a,{activeTab:this.state.activeTab},s.a.createElement(I.a,{tabId:"1"},s.a.createElement(X.a,{items:ae,interval:"500"})),s.a.createElement(I.a,{className:"component-code",tabId:"2"},R)))))}}]),t}(s.a.Component),ne=[{src:G.a,id:1,altText:"Slide 1",caption:"Slide 1",header:"Slide 1 Header"},{src:A.a,id:2,altText:"Slide 2",caption:"Slide 2",header:"Slide 2 Header"},{src:Q.a,id:3,altText:"Slide 3",caption:"Slide 3",header:"Slide 3 Header"}],ie=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(g.a,null,s.a.createElement(p.a,null,s.a.createElement(v.a,null,"Keyboard Example"),s.a.createElement("div",{className:"views"},s.a.createElement(E.a,{tabs:!0},s.a.createElement(x.a,null,s.a.createElement(f.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},s.a.createElement(y.a,{size:15}))),s.a.createElement(x.a,null,s.a.createElement(f.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},s.a.createElement(N.a,{size:15})))))),s.a.createElement(h.a,null,s.a.createElement("p",null,"Use ",s.a.createElement("code",null,"Keyboard")," attribute to control carousel with keyboard default is ",s.a.createElement("code",null,"true"),"."),s.a.createElement(b.a,{activeTab:this.state.activeTab},s.a.createElement(I.a,{tabId:"1"},s.a.createElement(X.a,{items:ne,keyboard:!1})),s.a.createElement(I.a,{className:"component-code",tabId:"2"},F)))))}}]),t}(s.a.Component),re=[{src:K.a,id:1,altText:"Slide 1",caption:"Slide 1",header:"Slide 1 Header"},{src:$.a,id:2,altText:"Slide 2",caption:"Slide 2",header:"Slide 2 Header"},{src:Q.a,id:3,altText:"Slide 3",caption:"Slide 3",header:"Slide 3 Header"}],le=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(g.a,null,s.a.createElement(p.a,null,s.a.createElement(v.a,null,"Pause Example"),s.a.createElement("div",{className:"views"},s.a.createElement(E.a,{tabs:!0},s.a.createElement(x.a,null,s.a.createElement(f.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},s.a.createElement(y.a,{size:15}))),s.a.createElement(x.a,null,s.a.createElement(f.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},s.a.createElement(N.a,{size:15})))))),s.a.createElement(h.a,null,s.a.createElement("p",null,"Use ",s.a.createElement("code",null,"Pause")," attribute to pause carousel on hover."),s.a.createElement(b.a,{activeTab:this.state.activeTab},s.a.createElement(I.a,{tabId:"1"},s.a.createElement(X.a,{items:re,pause:"hover"})),s.a.createElement(I.a,{className:"component-code",tabId:"2"},U)))))}}]),t}(s.a.Component),ce=t(804),se=t.n(ce),oe=(t(805),function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"componentDidMount",value:function(){se.a.highlightAll()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{breadCrumbTitle:"Carousel",breadCrumbParent:"Components",breadCrumbActive:"Carousel"}),s.a.createElement(o.a,null,s.a.createElement(m.a,{md:"6",sm:"12"},s.a.createElement(M,null)),s.a.createElement(m.a,{md:"6",sm:"12"},s.a.createElement(W,null)),s.a.createElement(m.a,{md:"6",sm:"12"},s.a.createElement(ee,null)),s.a.createElement(m.a,{md:"6",sm:"12"},s.a.createElement(te,null)),s.a.createElement(m.a,{md:"6",sm:"12"},s.a.createElement(ie,null)),s.a.createElement(m.a,{md:"6",sm:"12"},s.a.createElement(le,null))))}}]),t}(s.a.Component));a.default=oe}}]);
//# sourceMappingURL=80.967d34ae.chunk.js.map