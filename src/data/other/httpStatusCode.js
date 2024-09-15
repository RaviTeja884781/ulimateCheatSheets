export default {
  Informational: [
    {
      code: 100,
      status: "Continue",
      description:
        "The server has received the request headers and the client should proceed to send the request body.",
    },
    {
      code: 101,
      status: "Switching Protocols",
      description:
        "The server is switching protocols as requested by the client.",
    },
    {
      code: 102,
      status: "Processing",
      description:
        "The server has received and is processing the request, but no response is available yet.",
    },
  ],
  Successful: [
    {
      code: 200,
      status: "OK",
      description: "The request has succeeded.",
    },
    {
      code: 201,
      status: "Created",
      description:
        "The request has succeeded and a new resource has been created.",
    },
    {
      code: 202,
      status: "Accepted",
      description:
        "The request has been accepted for processing, but the processing has not been completed.",
    },
    {
      code: 203,
      status: "Non-Authoritative Information",
      description:
        "The server successfully processed the request, but is returning information that may be from another source.",
    },
    {
      code: 204,
      status: "No Content",
      description:
        "The server successfully processed the request, but is not returning any content.",
    },
    {
      code: 205,
      status: "Reset Content",
      description:
        "The server successfully processed the request, but is not returning any content, and requires the requester to reset the document view.",
    },
    {
      code: 206,
      status: "Partial Content",
      description:
        "The server is delivering only part of the resource due to a range header sent by the client.",
    },
    {
      code: 207,
      status: "Multi-Status",
      description:
        "The message body that follows is an XML message and can contain a number of separate response codes.",
    },
    {
      code: 208,
      status: "Already Reported",
      description:
        "The members of a DAV binding have already been enumerated in a previous reply to this request.",
    },
    {
      code: 226,
      status: "IM Used",
      description:
        "The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.",
    },
  ],
  Redirection: [
    {
      code: 300,
      status: "Multiple Choices",
      description: "The request has more than one possible responses.",
    },
    {
      code: 301,
      status: "Moved Permanently",
      description:
        "The requested resource has been assigned a new permanent URI.",
    },
    {
      code: 302,
      status: "Found",
      description:
        "The requested resource resides temporarily under a different URI.",
    },
    {
      code: 303,
      status: "See Other",
      description:
        "The response to the request can be found under another URI using a GET method.",
    },
    {
      code: 304,
      status: "Not Modified",
      description: "The resource has not been modified since the last request.",
    },
    {
      code: 305,
      status: "Use Proxy",
      description:
        "The requested resource is available only through a proxy, the address for which is provided in the response.",
    },
    {
      code: 306,
      status: "Switch Proxy",
      description:
        "No longer used. Originally meant to indicate that a requested proxy must be used.",
    },
    {
      code: 307,
      status: "Temporary Redirect",
      description:
        "The request should be repeated with another URI; however, future requests should still use the original URI.",
    },
    {
      code: 308,
      status: "Permanent Redirect",
      description:
        "The request and all future requests should be repeated using another URI.",
    },
  ],
  "Client Error": [
    {
      code: 400,
      status: "Bad Request",
      description:
        "The server cannot or will not process the request due to an apparent client error.",
    },
    {
      code: 401,
      status: "Unauthorized",
      description:
        "Authentication is required and has failed or has not yet been provided.",
    },
    {
      code: 402,
      status: "Payment Required",
      description: "Reserved for future use.",
    },
    {
      code: 403,
      status: "Forbidden",
      description: "The request was valid, but the server is refusing action.",
    },
    {
      code: 404,
      status: "Not Found",
      description:
        "The requested resource could not be found but may be available in the future.",
    },
    {
      code: 405,
      status: "Method Not Allowed",
      description:
        "A request method is not supported for the requested resource.",
    },
    {
      code: 406,
      status: "Not Acceptable",
      description:
        "The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.",
    },
    {
      code: 407,
      status: "Proxy Authentication Required",
      description: "The client must first authenticate itself with the proxy.",
    },
    {
      code: 408,
      status: "Request Timeout",
      description: "The server timed out waiting for the request.",
    },
    {
      code: 409,
      status: "Conflict",
      description:
        "The request could not be completed due to a conflict with the current state of the resource.",
    },
    {
      code: 410,
      status: "Gone",
      description:
        "The requested resource is no longer available and will not be available again.",
    },
    {
      code: 411,
      status: "Length Required",
      description:
        "The request did not specify the length of its content, which is required by the requested resource.",
    },
    {
      code: 412,
      status: "Precondition Failed",
      description:
        "One or more conditions given in the request header fields evaluated to false when tested on the server.",
    },
    {
      code: 413,
      status: "Payload Too Large",
      description:
        "The request is larger than the server is willing or able to process.",
    },
    {
      code: 414,
      status: "URI Too Long",
      description: "The URI provided was too long for the server to process.",
    },
    {
      code: 415,
      status: "Unsupported Media Type",
      description:
        "The request entity has a media type which the server or resource does not support.",
    },
    {
      code: 416,
      status: "Range Not Satisfiable",
      description:
        "The client has asked for a portion of the file, but the server cannot supply that portion.",
    },
    {
      code: 417,
      status: "Expectation Failed",
      description:
        "The server cannot meet the requirements of the Expect request-header field.",
    },
    {
      code: 418,
      status: "I'm a teapot",
      description:
        "Any attempt to instruct the teapot to do something it cannot do should result in an error response.",
    },
    {
      code: 421,
      status: "Misdirected Request",
      description:
        "The request was directed at a server that is not able to produce a response.",
    },
    {
      code: 422,
      status: "Unprocessable Entity",
      description:
        "The request was well-formed but was unable to be followed due to semantic errors.",
    },
    {
      code: 423,
      status: "Locked",
      description: "The resource that is being accessed is locked.",
    },
    {
      code: 424,
      status: "Failed Dependency",
      description: "The request failed due to failure of a previous request.",
    },
    {
      code: 426,
      status: "Upgrade Required",
      description:
        "The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.",
    },
    {
      code: 428,
      status: "Precondition Required",
      description: "The origin server requires the request to be conditional.",
    },
    {
      code: 429,
      status: "Too Many Requests",
      description:
        "The user has sent too many requests in a given amount of time.",
    },
    {
      code: 431,
      status: "Request Header Fields Too Large",
      description:
        "The server is unwilling to process the request because its header fields are too large.",
    },
    {
      code: 451,
      status: "Unavailable For Legal Reasons",
      description:
        "The user requests an illegal resource, such as a website that is banned in the user's country.",
    },
  ],
  "Server Error": [
    {
      code: 500,
      status: "Internal Server Error",
      description:
        "A generic error message, given when an unexpected condition was encountered.",
    },
    {
      code: 501,
      status: "Not Implemented",
      description:
        "The server does not recognize the request method and is incapable of supporting it.",
    },
    {
      code: 502,
      status: "Bad Gateway",
      description:
        "The server was acting as a gateway or proxy and received an invalid response.",
    },
    {
      code: 503,
      status: "Service Unavailable",
      description:
        "The server is currently unavailable due to overload or maintenance.",
    },
    {
      code: 504,
      status: "Gateway Timeout",
      description:
        "The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server.",
    },
    {
      code: 505,
      status: "HTTP Version Not Supported",
      description:
        "The server does not support the HTTP protocol version that was used in the request.",
    },
    {
      code: 506,
      status: "Variant Also Negotiates",
      description:
        "Transparent content negotiation for the request results in a circular reference.",
    },
    {
      code: 507,
      status: "Insufficient Storage",
      description:
        "The server is unable to store the representation needed to complete the request.",
    },
    {
      code: 508,
      status: "Loop Detected",
      description:
        "The server detected an infinite loop while processing a request with Depth header set to infinity.",
    },
    {
      code: 510,
      status: "Not Extended",
      description:
        "Further extensions to the request are required for the server to fulfill it.",
    },
  ],
};
