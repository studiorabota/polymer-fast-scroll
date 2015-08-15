#Polymer Fast Scroll
> fast-scroll for a core-list component.

#### What is a Fast Scroll

See [demo](http:://www.studiorabota.com/polymer-contact-app.html).
[Git repo](https://gitlab.com/studio.rabota/polymer-contact-app) of this demo.

## Getting started

#### Adding it to Bower

```js
"rab-fast-scroll": "https://gitlab.com/studio.rabota/polymer-fast-scroll.git#~0.0.1"
```

```shell
bower update
```

#### Implementing the component

Check contact-list.html in the demo for a complete implementation.

```html
<core-list data="{{data}}" groups="{{groups}}" id="scrollWindow" runwayFactor="2000"></core-list>
<rab-fast-scroll pin="true" target="{{scrollTarget}}"></rab-fast-scroll>
```

```js
ready: function() {
    this.scrollTarget = '#scrollWindow';
},
```

## Contributing to fast-scroll

```shell
npm install
grunt
grunt build
```

## Open issues
- Actual faster scroll
- On load scrollbar does not scroll with normal scroll
- React to resize window
- Make setting Runway factor to high not necessary
- When first window scroll and then scrollbar scroll - first white

