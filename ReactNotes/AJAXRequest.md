#  AJAX Request.
We can use any AJAX library you like with React.
1. [axios](https://github.com/axios/axios)
2. [jquery ajax](https://api.jquery.com/jQuery.ajax/)
3. built in [window.fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

## Note.

1. You should populate data with AJAX calls in the componentDidMount lifecycle method. This is so you can use setState to update your component when the data is retrieved.

