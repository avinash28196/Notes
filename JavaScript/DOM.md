* [MDN Reference](#mdn-reference)
* [The Host Object](#the-host-object)
* [Core Concepts](#core-concepts)
* [The Window Object](#the-window-object)
* [The Document Object](#the-document-object)
* [Nodes](#nodes)
* [HTML Elements](#html-elements)
* [Text Nodes](#text-nodes)
* [Collections](#collections)
    * [HTMLCollection](#htmlcollection)
    * [NodeList](#nodelist)
* [Events](#events)
    * [Phases](#phases)
    * [Cancel and Stop](#cancel-and-stop)
    * [Adding Event Listeners](#adding-event-listeners)
    * [EventTarget](#eventtarget)
    * [Event](#event)

---

The DOM (Document Object Model) is the standardized API provided by browsers to JavaScript code that runs in the browser, such as when loaded from a web page.

## MDN Reference

**General**

> [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/) |
[Introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) |
[Whitespace](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Whitespace_in_the_DOM) |
[Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)

**Interfaces**

> [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document) |
[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) |
[Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) |
[EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) |
[HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) |
[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node) |
[NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) |
[Text](https://developer.mozilla.org/en-US/docs/Web/API/Text) |
[Window](https://developer.mozilla.org/en-US/docs/Web/API/Window)

## The Host Object

JavaScript has a concept called the _host object_ (or _global object_), which is an object provided by the host environment, rather than built-in to the language.  This object's properties are in-scope for all code.

In the browser, the host object is the window object.  When you access the built-in `alert()` method or `localStorage` property, you are actually accessing properties on the window object.  You can make your code more explicit by saying `window.alert()` (`window` is a property on the window object that points back to it), but it's usually not necessary.

> The fact that JavaScript is designed to live in an a host environment that provides a host object is one of the reasons it is so common to see it embedded into all kinds of servers and applications.  For example, JavaScript is frequently the shell for NoSQL data stores, with the database providing a host object to enable interacting with it.
>
> Node.js has a different host object than browsers because Node.js doesn't have a window, and has different needs.

## Core Concepts

**The HTML Document**

The DOM provides a representation of the HTML document _(`Document`)_ as a tree of nodes _(`Node`)_ possessing various properties and methods.  HTML elements _(`Element` + `HTMLElement`)_, text _(`Text`)_, and comments _(`Comment`)_ are all nodes in the tree.  Even the attributes _(`Attr`)_ on HTML elements (like `id` and `class`) are nodes, though you rarely use them as such.

**Whitespace**

All whitespace in the text content of the original document is represented in the DOM (not including whitespace within tags).

* There will be some text nodes that contain only whitespace.
* Some text nodes will have whitespace at the beginning or end.

**Events**

Nodes can also have event handlers _(`EventTarget`)_ attached to them, and once an event _(`Event`)_ is triggered, the event handlers get executed.  Events that aren't handled by that element "bubble up", triggering the event handlers of parent elements recursively until the event is handled (or discarded if not).

**Base URL**

The base URL is used to resolve relative URLs, and is the URL up to the last `/`.  If your location is `http://example.com/foo/bar.html`, the base URL is `http://example.com/foo/`, and a link to `style.css` will resolve to `http://example.com/foo/style.css`.

**Selector Strings**

There are several DOM methods that take a _selector string_ to return a list of HTML elements (ex: `getElementsByClass()`).  Selector strings contain one or more comma-separated CSS selectors, and will return any element that matches any selector.

Examples:

* `p.warning, p.note` -> _returns all p elements whose class is either 'warning' or 'note'_
* `#main, #basic, #exclamation` -> _returns first element whose ID is one of 'main', 'basic', or 'exclamation'_

## The Window Object

Since the [window](https://developer.mozilla.org/en-US/docs/Web/API/Window) object is the global object, you don't need to use `window.` to access its properties and methods, though sometimes it helps to make the situation more clear to others reading your code.

**Useful Properties**

* `console` — the [Console](https://developer.mozilla.org/en-US/docs/Web/API/Console) object, which you will frequently use to write messages to the console while debugging your code (`console.log(msg)`)
* `document` — the [Document](https://developer.mozilla.org/en-US/docs/Web/API/document) object
* `history` — the [History](https://developer.mozilla.org/en-US/docs/Web/API/History) object
* `innerHeight` — the height (in pixels) of the viewport, including the horizontal scrollbar (if rendered)
* `innerWidth` — the width (in pixels) of the viewport, including the vertical scrollbar (if rendered)
* `localStorage` — the [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) API
* `location` — the [Location](https://developer.mozilla.org/en-US/docs/Web/API/Location) object, which you can use to get/set the current location (the URL in the location bar)
* `scrollX` — the number of pixels that the document has already been scrolled horizontally
* `scrollY` — the number of pixels that the document has already been scrolled vertically

**Useful Methods**

* `alert( msg )` — pops open a dialog box with the specified message
* `close()` — closes window (only works on windows opened by a script in the first place)
* `confirm( msg )` — like alert(), but with OK and Cancel buttons; returns boolean result
* `open( url, name, options )` — creates and returns new window object; see [open() docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/open) for details
* `prompt( msg, default )` — like alert(), but prompts user for input, which is returned
* `scrollBy( x, y )` — scroll document by given amount
* `scrollTo( x, y )` — scroll document until coordinates are in top-left corner

## The Document Object

The [document](https://developer.mozilla.org/en-US/docs/Web/API/Document) object is the root node in the DOM tree, and is accessible via the `document` property on the window object.

**Useful Properties**

* `activeElement` — the currently focused element (or body/null of no element focused)
* `body` — the &lt;body&gt; or &lt;frameset&gt; element
* `documentElement` — the document's first child [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) (normally the &lt;html&gt; element)
* `forms` — list of all &lt;form&gt; elements (list -> [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) object)
* `head` — the &lt;head&gt; element
* `images` — an list of all images (list -> [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) object)
* `lastModified` — the timestamp (string) on which the document was last modified
* `links` — list of all hyperlinks (list -> [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) object)
* `referrer` — the referring URI
* `title` — sets/gets document title

**Useful Methods**

* `createAttribute( name )` — creates and returns [Attr](https://developer.mozilla.org/en-US/docs/Web/API/Attr) node
* `createComment( content )` — creates and returns [Comment](https://developer.mozilla.org/en-US/docs/Web/API/Comment) node
* `createElement( tag )` — creates and returns appropriate [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) node ([HTMLUnknownElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLUnknownElement) if tag not recognized)
* `createEvent( type )` — creates and returns [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) object (see docs for types)
* `createTextNode( content )` — creates and returns [Text](https://developer.mozilla.org/en-US/docs/Web/API/Text) node
* `elementFromPoint(  x, y )` — returns the topmost element at the specified coordinates
* `hasFocus()` — returns true if the focus is currently located anywhere inside the document
* `getElementById( id )` — returns specified [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement), or null
* `getElementsByClassName( names )` — returns [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) of elements with given class names (whitespace-separated)
* `getElementsByName( name )` — returns live [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) of matching elements
* `getElementsByTagName( name )` — returns live [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) of elements with given tag name (or '*' for all)
* `normalizeDocument( ? )` — replaces entities, normalizes text nodes, etc.
* `querySelector( selector )` — returns first matching [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
* `querySelectorAll( selector )` — returns non-live [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) all matching [HTMLElements](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

## Nodes

HTML elements (tags), attributes (like `id` and `class`), comments, and even text are all represented as nodes in the DOM tree.
Thus, while each type has its own interface custom interface, they all inherit and implement the [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node) interface.

**Useful Properties**

* `childNodes` — live [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) with children
* `firstChild` — first child Node or null
* `innerText` — the text content of node _and_ its descendants (setting this property removes all children and replaces them with a single text node)
* `lastChild` — last child Node or null
* `nextSibling` — next sibling Node or null
* `nodeName` — the Node's name (examples: `H1`, `#text`, `#document`)
* `nodeType` — the Node type as an int value
* `nodeValue` — the text content for [Comment](https://developer.mozilla.org/en-US/docs/Web/API/Comment)/[Text](https://developer.mozilla.org/en-US/docs/Web/API/Text) nodes, null otherwise
* `parentNode` — the parent Node or null
* `previousSibling` — previous sibling Node or null

**Useful Methods**

* `appendChild( Node )` — adds Node to end of children (if Node already exists somewhere else in the document, it will be moved to the new position)
* `cloneNode( deep )` — returns copy of node (including children if deep -> true) (doesn't include event listeners)
* `contains( Node )` — returns whether Node is a descendant
* `hasChildNodes()` — returns true/false
* `insertBefore( newNode, refNode )` — inserts newNode before refNode
* `removeChild( Node )` — removes child
* `replaceChild( newNode, oldNode )` — replaces oldNode with newNode

Additionally...

**ChildNode**

All nodes except [Attr](https://developer.mozilla.org/en-US/docs/Web/API/Attr) (attribute) implement the methods of the [ChildNode](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode) interface:

* `after( Nodes|strings )` — inserts after this node
* `before( Nodes|strings )` — inserts before this node
* `remove()` — removes node from parent
* `replaceWith( Nodes|strings )` — replace node

**ParentNode**

[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) nodes implement the methods of the [ParentNode](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode) interface:

* `append( Nodes|strings )` — inserts after last child [EXPERIMENTAL]
* `prepend( Nodes|strings )` — inserts before first child [EXPERIMENTAL]
* `querySelector( selector_string )` — first matching [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) in subtree
* `querySelectorAll( selector_string )` — non-live [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) of matching [Elements](https://developer.mozilla.org/en-US/docs/Web/API/Element) in subtree

## HTML Elements

There are subtypes for each kind of tag, like [HTMLParagraphElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLParagraphElement) for &lt;p&gt; tags and [HTMLImageElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement) for &lt;img&gt; tags, each with their own unique properties and methods.

However, they all inherit the [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) interface, which in turn inherits the [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) interface.
For our purposes, we will consider Element and HTMLElement two halves of the same common HTML element object interface, and both halves will be combined here in a single list.
(The difference only matters if you plan to work with XML or SVG documents.)

**Useful Properties**

* `attributes` — live [NamedNodeMap](https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap) collection of attributes (like `id` and `name`)
* `classList` — live [DOMTokenList](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList) collection of class names
* `className` — value of `class` attribute
* `dataset` — a [DOMStringMap](https://developer.mozilla.org/en-US/docs/Web/API/DOMStringMap) collection of data attributes (`data-*`)
* `id` — value of `id` attribute
* `innerHTML` — the element's descendants as HTML
* `isContentEditable` — true/false
* `name` — value of `name` attribute (only for: a, applet, button, form, frame, iframe, img, input, map, meta, object, param, select, textarea)
* `outerHTML` — the element _and_ its descendants as HTML
* `style` — a [CSSStyleDeclaration](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration) object that represents only the element's inline `style` attribute; can be set by assigning a string directly, which forwards it as `style.cssText = value`
* `tabIndex` — tab order of element
* `tagName` — the tag name, uppercased (example: `DIV`)
* `title` — value of `title` attribute, which is displayed as a "tool tip" on mouse hover

**Useful Methods**

* `blur()` — removes focus
* `click()` — simulates a mouse click on the element (exception: will not cause an &lt;a&gt; element to initiate navigation)
* `closest( selector_string )` — returns closest matching ancestor element or null [EXPERIMENTAL]
* `focus()` — sets focus on element if focusable
* `getAttribute( name )` — returns attribute value
* `getElementsByClassName( names )` — returns [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) of elements in subtree with given class names (whitespace-separated)
* `getElementsByTagName( name )` — returns live [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) of elements in subtree with given tag name (or '*' for all)
* `hasAttribute( name )` — true/false
* `hasAttributes()` — true/false
* `matches( selector_string )` — true if element matches selector string
* `removeAttribute( name )` — what it says
* `setAttribute( name, value )` — boolean attributes are considered to be true if they're present on the element at all, regardless of their actual value; as a rule, you should specify the empty string (`""`) in value

## Text Nodes

The [Text](https://developer.mozilla.org/en-US/docs/Web/API/Text) interface inherits from the [CharacterData](https://developer.mozilla.org/en-US/docs/Web/API/CharacterData) interface, but for simplicity's sake, both interfaces will be combined here.

**Useful Properties**

* `data` — string with text contents of node
* `length` — length of `data`

**Useful Methods**

* `appendData( string )` — appends the string to `data`
* `deleteData( ? )` — remove the specified amount of characters starting at the specified offset in `data`
* `insertData( ? )` — insert the specified characters at the specified offset in `data`
* `replaceData( ? )` — replace the specified amount of characters starting at the specified offset in `data`
* `splitText( offset )` — breaks the Text node into two nodes at the specified offset, keeping both nodes in the tree as siblings
* `substringData( ? )` — returns substring of `data` using specified length and offset

## Collections

You may have noticed that many properties and methods return more objects with their own interfaces, especially when returning a collection of items.
The two most important collection interfaces are [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) and [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList).

**Live vs Non-Live**

If a property or method says it returns a "live" collection, it means that collection will continue to be updated to reflect the current state of the DOM even after it is returned to you.

### HTMLCollection

Most commonly returned by:

* `document.getElementsByClassName()`
* `document.getElementsByTagName()`
* `document.forms`
* `document.images`
* `<element>.getElementsByClassName()`
* `<element>.getElementsByTagName()`

**Useful Properties**

* `length` — returns number of elements in collection

**Useful Methods**
* `item( index )` — same as `collection[index]`
* `namedItem( name )` — returns first element matched by `id` or `name` attribute
* `.<name>` — exposes property-style access to elements (example: `document.forms.myForm`)

HTMLCollection objects can also be indexed like an array:

    myCollection[4]

### NodeList

Most commonly returned by:

* `document.getElementsByName()`
* `document.links`
* `<node>.childNodes`
* `<node>.querySelectorAll()`

**Useful Properties**

* `length` — returns number of elements in collection

**Useful Methods**

* `entries()` — returns iterator for index/Node pairs (example: `for (var entry of list.entries()) {}`)
* `forEach( callback )` — callback receives: `currentValue`, `currentIndex`, `listObj`
* `item( index )` — same as `nodelist[index]`
* `keys()` — returns iterator for index values (example: `for (var index of list.keys()) {}`)
* `values()` — returns iterator for Node values (example: `for (var node of list.values()) {}`)

NodeList objects can also be indexed like an array:

    nodeList[4]

## Events

When an event occurs (like a mouse click), an event object is created and then propagated through the DOM in a particular order in two phases.

In each phase, event listeners in the propagation path configured for that phase with be triggered.

Finally, if the event has a default action associated with it (like a form submit), that action will taken.

### Phases

**Capturing Phase**

In the capturing phase, the event is passed first to the window object, then the document object, then the &lt;html&gt; element, and so on down the path to the target — in the case of a `click` event, to the element that was clicked.

At each step, if the object receiving the event has any event listeners configured for that event type, they will be triggered one after another.

This is an older phase, and is no longer recommended.
Set your event listeners to use the _bubbling phase_ instead.

**Bubbling Phase**

The bubbling phase is like the capturing phase, but in reverse order — the event is passed to the target element first, then "bubbles" up the DOM from parent to parent until reaching document and finally window.

### Cancel and Stop

* **cancel** — To cancel an event is to prevent the default action from occurring.
* **stop** — To stop an event is to prevent the event from propagating further.

### Adding Event Listeners

There are three ways to add an event listener.

**Inline**

You can specify an event listener right in your HTML:

    <button onclick="alert('Hello world!')">

But it's not very readable or maintainable.

**Handler Properties**

This is an older way that only allows one handler per element/event combination:

    myButton.onclick = function (event) { alert('Hello world'); };

**addEventListener()**

    myButton.addEventListener(
        'click',
        function (event) { alert('Hello world'); },
        false
    );

This is a method on the [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) interface, and is the recommended way.

### EventTarget

The [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) interface is implemented by all objects that can receive events and may have listeners for them, including [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window), [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document), and all [Nodes](https://developer.mozilla.org/en-US/docs/Web/API/Node).

**Useful Methods**

* `addEventListener( type, listener[, options|useCapture] )`
    * type -> string (example: `click`)
    * listener -> function
    * options -> object
        * capture -> true = dispatch to listener before child targets
        * once -> true = remove listener after first invocation
        * passive -> true = listener will never call `preventDefault()`
    * useCapture -> true = dispatch to listener before child targets
* `dispatchEvent( event )` — dispatches event at target; returns false if any event handlers called `preventDefault()`, else true
* `removeEventListener( ... )` — expects same arguments as `addEventListener()`

### Event

Each type of event has its own interface which may include unique properties and methods.
However, they all inherit from the Event interface — some directly (like [submit](https://developer.mozilla.org/en-US/docs/Web/Events/submit)), some indirectly (like [click](https://developer.mozilla.org/en-US/docs/Web/Events/click), which inherits from [MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent), which inherits from [UIEvent](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent), which inherits from Event).

See the [Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events) for a list of all events.

**Useful Properties**

* `bubbles` — boolean indicating whether the event bubbles up through the DOM or not
* `cancelable` — boolean indicating whether the event is cancelable
* `currentTarget` — the current target for the event, as the event traverses the DOM (it always refers to the element to which the event handler has been attached, as opposed to `event.target` which identifies the element on which the event occurred)
* `deepPath` — an array of DOM Nodes through which the event has bubbled [EXPERIMENTAL]
* `defaultPrevented` — indicates whether or not preventDefault() has been called on the event
* `eventPhase` — integer indicating which phase of the event flow is being processed (see chart below)
* `isTrusted` — boolean indicating whether or not the event was initiated by the browser (after a user click for instance) or by a script
* `target` — reference to the target to which the event was originally dispatched
* `timeStamp` — the time at which the event was created, in milliseconds since epoch
* `type` — the name of the event (case-insensitive)

**Useful Methods**

* `preventDefault()` — cancels the event (if it is cancelable) without stopping further propagation of the event
* `stopImmediatePropagation()` — if several listeners are attached to the same element for the same event type and one of them calls `stopImmediatePropagation()`, no remaining listeners will be called
* `stopPropagation()` — prevents further propagation of the current event in the capturing and bubbling phases without canceling the default action

**Phase Constants**

* `Event.NONE` (0) -> No event is being processed at this time.
* `Event.CAPTURING_PHASE` (1) -> The event is being propagated through the target's ancestor objects.  This process starts with the Window, then Document, then the HTMLHtmlElement, and so on.
* `Event.AT_TARGET` (2) -> The event has arrived at the event's target.  If `event.bubbles` is false, processing the event is finished after this phase is complete.
* `Event.BUBBLING_PHASE` (3) -> The event is propagating back up through the target's ancestors in reverse order, starting with the parent, and eventually reaching the containing Window.

