# Ski DIN Calculator

## Motivation
The Ski DIN Calculator is designed to help ski technicians and enthusiasts quickly and accurately calculate the DIN settings for ski bindings. This tool aims to simplify the process of determining the appropriate DIN value based on a skier's weight, height, age, skier type, and boot sole length. By providing an easy-to-use interface, this calculator ensures that users can obtain the necessary information efficiently, reducing the time spent on manual calculations.

## Live Demo
Check out the live demo of the project [here](https://ski-calc.up.railway.app/).

## Features
- **User-Friendly Interface**: Simple and intuitive form to input skier details.
- **Accurate Calculations**: Utilizes a well-defined algorithm to calculate the DIN value.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.

## Installation
To run this project locally, follow these steps:

1. **Clone the Repository**
   ```
   bash
   git clone <repository-url>
   cd ski-din-calc/ski-calc-client
   ```
2. **Install Dependencies**
    ```
    pnpm install
    ```
3. **Run the Development Server**
    ```
    pnpm run dev
    ```
## Usage
    1. Open the application in your browser.
    2. Fill in the required fields: weight, height, age, skier type, and boot sole length. Common values are selected by default.
    3. Click on the "Calculate DIN" button to get the result.
## API Endpoints
    - Calculate DIN
        - 
The backend API for calculating DIN values is built using FastAPI. The main endpoint is:

Calculate DIN
Endpoint: /calculate_din
Method: POST
Request Body:
Response:

## Disclaimer
This DIN calculator is for reference purposes only. It is recommended to always have your bindings mounted, tested, and adjusted by a professional ski technician with the equipment to appropriately measure the release forces. The creators of this tool are not responsible for any liability arising from the use of this calculator.