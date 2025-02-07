# README for the Backend of Ski DIN Calculator

## Overview
This backend is built using FastAPI and provides an API for calculating ski DIN values based on user input. The DIN calculation logic is implemented in Python and is accessible through a RESTful API.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd ski-din-calculator/backend
   ```

2. **Create a Virtual Environment**
   It is recommended to create a virtual environment to manage dependencies.
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install Dependencies**
   Install the required packages using pip.
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the FastAPI Application**
   Start the FastAPI server.
   ```bash
   uvicorn app.main:app --reload
   ```

   The application will be available at `http://127.0.0.1:8000`.

## API Endpoints

### Calculate DIN
- **Endpoint:** `/calculate_din`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "weight": <weight>,
    "height": <height>,
    "age": <age>,
    "skier_type": <skier_type>,
    "sole_length": <sole_length>
  }
  ```
- **Response:**
  ```json
  {
    "skier_code": "<skier_code>",
    "din": <din_value>
  }
  ```

## Usage Example
To calculate the DIN value, send a POST request to the `/calculate_din` endpoint with the required parameters. 

Example using `curl`:
```bash
curl -X POST "http://127.0.0.1:8000/calculate_din" -H "Content-Type: application/json" -d '{"weight": 160, "height": 69, "age": 30, "skier_type": 2, "sole_length": 305}'
```

## License
This project is licensed under the MIT License. See the LICENSE file for more details.