# API Documentation

This API provides endpoints for creating, retrieving, updating, and deleting tasks. It allows you to manage your task list efficiently by performing CRUD operations on it.

## Base URL

```
https://localhost:5000/api/v1/
```

## Endpoints

The API supports the following endpoints:

---

### Note

**Requests must be made with JSON type**

```
Content-Type: application/json
```

---

**Retrive all tasks**

```HTTP
GET /api/v1/tasks
```

- **Response**: JSON array containing all the tasks.
  - Example response:
    ```JSON
    [
      {
        "id": 1,
        "Content": "Don't miss to buy vegetables",
        "completed": false
      },
      {
        "id": 2,
        "content": "Don't miss to walk the dog",
        "completed": true
      }
    ]
    ```

**Create task**

```HTTP
POST /api/v1/tasks
```

- **Request body**: JSON object containing the task data.
  - Example request:
    ```JSON
     {
       "Content": "Don't miss to buy vegetables",
       "completed": false
     }
    ```
- **Response**: JSON object representing the created task.
  - Example response:
    ```JSON
      {
        "id": 1,
        "Content": "Don't miss to buy vegetables",
        "completed": false
      }
    ```

**Retive specefic task**

```HTTP
GET /api/v1/tasks/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | The unique identifier of the task |

- **Response**: JSON object representing the requested task.
  - Example request:
    ```HTTP
    GET /api/v1/tasks/1
    ```
  - Example response:
    ```JSON
      {
        "id": 1,
        "Content": "Don't miss to buy vegetables",
        "completed": false
      }
    ```

**Update task**

```HTTP
PATCH /api/v1/tasks/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | The unique identifier of the task |

- **Request body**: JSON object containing the updated task data.
  - Example request:
    ```HTTP
    PATCH /api/v1/tasks/:id
    ```
    ```JSON
      {
        "Content": "Don't miss to buy vegetables",
        "completed": true
      }
    ```
- **Response**: JSON object representing the updated task.
  - Example response:
    ```JSON
      {
        "id": 1,
        "Content": "Don't miss to buy vegetables",
        "completed": true
      }
    ```

**Delete task**

```HTTP
DELETE /api/v1/tasks/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | The unique identifier of the task |

- **Response**: JSON object indicating the success or failure of the deletion operation.
  - Example request:
    ```HTTP
    DELETE /api/v1/tasks/:id
    ```
  - Example response:
    ```JSON
    {
      "message": "task has been deleted"
    }
    ```

## Errors

This API uses the following error codes:

- `404 Not Found` &rarr; The requested resource was not found.
