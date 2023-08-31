- In terms of this API being RESTful it ticks some boxes and fails some

  - [✅] `Client`- server architecture - has front and backend
  - [✅] `Statelessness` - doesn't need previous knowledge of user
  - [✅] `Layered System` - our API is calling another API but our client doesn't need to know that, we could also add additinal functionality but our contract wouldn't change.
  - [❌] `Cacheability` - we arent currently providing any caching information, although we could do if we pay attention to the headers, more code and consider some edge cases.
  - [❌] `Code on demand`(optional) - doesn't apply to this API since it doesnt return code that is runnable.
  - [❌]Uniform Design - has subsections some fail while some pass:
    - [❌] **Resource identification in requests** - we are representing all text messages as strings and absolutely no way to identify them.
    - [❌] **Resource manipulation through representations** - we dont allow any manipulation of text messages so this is also a fail.
    - [✅] **Self-descriptive messages** - By using headers we can tell that this is json, the message sent down has a type and it is clear that it should be json decoded to be used.
    - [❌] **Hypermedia as the engine of application state - HATEOAS** - The idea is that there are links provided to show of what more you can do with this and where you can get related resources; it provides URIs or links. Our doesn't need to do that.

- So this API isn't restful but can easily be.
