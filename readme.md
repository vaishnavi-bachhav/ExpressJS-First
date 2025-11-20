## What is JSON?
JSON, or JavaScript Object Notation, is a lightweight, human-readable text format for data interchange. It is used to store and transmit data objects consisting of name-value pairs and arrays, making it a popular choice for transferring data between a server and a web application.

# Math API Documentation

A collection of simple mathematical APIs for calculating circle properties, rectangle properties, and exponentiation operations.
All responses return JSON, and errors are handled gracefully.

## Circle API
# 1. Calculate Circle Area & Circumference

**Request Type:** GET

**Request Format:** /math/circle/:r

**Description:**  Returns the area and circumference of a circle based on the given radius.

**Path Parameters:**
| Parameter | Type	| Description         |
|----------:|-------|---------------------|
| r	        |Number	|Radius of the circle |

**Example Request:** `/math/circle/5`

**Example Response:**
```json
{
  "area": 78.53981633974483,
  "circumference": 31.41592653589793
}
```
**Error Handling:**
| Status Code | Meaning         | Example Response |
|------------:|------------     |------------------|
|     400     | Invalid radius  |{"error": "Invalid radius. Please provide a numeric value."} |
|     500     | Server error    |{"error": "Something went wrong; please try again."} |

----------------------------------------------------------------------------------------

## Rectangle API
# 2. Calculate Rectangle Area & Perimeter

**Request Type:** GET

**Request Format:** /math/rectangle/:width/:height

**Description:**  Returns the area and perimeter of a rectangle.

**Path Parameters:**
| Parameter | Type	| Description         |
|----------:|-------|---------------------|
| width	    | Number	| Width of the rectangle |
| height    | Number | Height of the rectangle |

**Example Request:** `/math/rectangle/4/7`

**Example Response:**
```json
{
  "area": 28,
  "perimeter": 22
}
```
**Error Handling:**
| Status Code | Meaning         | Example Response |
|------------:|------------     |------------------|
|     400     | Invalid width or height  |{"error": "Invalid width or height. Please provide numeric values."} |
|     500     | Server error    |{"error": "Something went wrong; please try again."} |

----------------------------------------------------------------------------------------

## Power API
## 3. Calculate Power (with Optional Square Root)
**Request Format:** `/math/power/:base/:exponent`

**Request Type:** GET

**Returned Data Format**: JSON

**Description:** Calculates base^exponent.
If root=true is passed, also returns the square root of the base.

**Example Request:** `/math/power/4/2`

**Path Parameters:**
| Parameter | Type	| Description         |
|----------:|-------|---------------------|
| base	    | Number| Base number |
| exponent  | Number | Exponent |

**Query Parameters:**
| Parameter | Required | Type	| Description         |
|----------:|----------|--------|---------------------|
| root	    | No       |Boolean (true)	| Returns square root of base if included |

**Example Response:**
```json
{
    "result": 16
}
```

**Example Request with Root:** `/math/power/9/2?root=true`

**Example Response with Root:**
```json
{
    "result": 81,
    "root": 3
}
```

**Error Handling:**
| Status Code | Meaning         | Example Response |
|------------:|------------     |------------------|
|     400     | Invalid base or exponent  |{"error": "Invalid base or exponent. Please provide numeric values."} |
|     500     | Server error    |{"error": "Something went wrong; please try again."} |
----------------------------------------------------------------------------------------
