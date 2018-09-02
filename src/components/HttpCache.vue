"Cache-Control": 

In http request

max-age=<seconds>
max-stale=[=<seconds>]
min-refresh=<seconds>
no-cache
no-transform
only-if-cached

In http response
must-revalidate
no-cache
no-store
no-transform
public  =>  maybe cached by any cache
private =>  for a single user
proxy-revalidate
max-age=<seconds> => relative to time of request
s-maxage=<seconds> => 

"Expires" => Response Header
If there is a Cache-Control header with the "max-age" or "s-maxage" directive in the response, 
the Expires header is ignored.

Expires: <http-date>

Connection: Keep-Alive

ETag: an identifier for a specific version of a resources.
ETag: W/"<etag_value>"
ETag: "<etag_value>"

If-Match -> Request Header -> 412
