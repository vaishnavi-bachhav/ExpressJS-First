## Quotes API Documentation

This document explains all available API endpoints for the Quotes service.

**Base path:** `/quotebook`

## Categories

**Request Type:** GET

**Request Format:** /quotebook/categories

**Description:**  Returns the list of valid categories.

**Example Response:**
**Response — 200 OK (text/html)**
`A possible category is successQuotes`
`A possible category is perseveranceQuotes`  
`A possible category is happinessQuotes`

**Response — 500 Internal Server Error**
```json
{
  "error": "Something went wrong; please try again."
}
```
----------------------------------------------------------------------------------------
## Quotes

**Request Type:** GET

**Request Format:** /quotebook/quote/:category

**Description:**  Returns a random quote from the selected category.

**URL Parameters:**
| Parameter | Type | Required	| Description         |
|----------:|------|--------|---------------------|
| category	|string|yes	    | One of: successQuotes, perseveranceQuotes, happinessQuotes |

**Example Request**
GET `/quotebook/quote/successQuotes`

**Success Response — 200 OK**
```json
{
  "quote": "The way to get started is to quit talking and begin doing.",
  "author": "Walt Disney"
}
```

**Error Response — 404 Not Found**
```json
{
  "error": "no category listed for <category>"
}
```

**Error — 500 Internal Server Error**
```json
{
  "error": "Something went wrong; please try again."
}
```
----------------------------------------------------------------------------------------
## Add a New Quote

**Request Type:** POST

**Request Format:** /quotebook/quote/new

**Description:**  Adds a new quote to a given category.

**Body Parameters (JSON)**
| Field | Type | Required	| Description         |
|----------:|------|--------|---------------------|
| category	|string|yes	    | Must exist in categories list |
| quote     | string | yes | The quote text |
| author    | string | yes | Name of the author |

**Example Request Body**
```json
{
  "category": "successQuotes",
  "quote": "Success usually comes to those who are too busy to be looking for it.",
  "author": "Henry David Thoreau"
}
```

**Success Response — 200 OK**
Success!

**Error Response — 400 Bad Request**
```json
{
  "error": "invalid or insufficient user input"
}
```
----------------------------------------------------------------------------------------
## Valid Categories

`successQuotes  `
`perseveranceQuotes`  
`happinessQuotes`