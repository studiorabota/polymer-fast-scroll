# Polymer Fast Scroll
> fast-scroll for a core-list component.

#### What is a Fast Scroll

See [demo](http://studiorabota.com/labs/polymer-fast-scroll/build/).
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

Check contact-list.html in the demo folder for a complete example.

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