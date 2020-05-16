define({ "api": [
    {
    "type": "GET",
    "url": "https://my-films-list.herokuapp.com/posts",
    "title": "Get Films List",
    "version": "0.3.0",
    "name": "getFilmsList",
    "group": "Films",
    "permission": [
      {
        "name": "Every user"
      }
    ],
    "description": "<p>Get films list</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://my-films-list.herokuapp.com/posts",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the film</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "genre",
            "description": "<p>genre of the film</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "year",
            "description": "<p>release year</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"post\":{\n         \"title\": \"Titanic\",\n         \"genre\": \"Epic romance and disaster\",\n         \"year\": \"1997\",\n},\n     \"success\": \"true\",\n     \"message\": \"retrieved successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Film doesn't exist</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"success\": \"false\",\n  \"message\": \"Film does not exist\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./route/posts.js",
    "groupTitle": "Film"
    }
] });
