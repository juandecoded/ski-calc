import os
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
from .calculate_din import calculate_din

load_dotenv()

app = FastAPI()

# Get environment variables
env = os.getenv("ENV", "production")
dev_client_url = os.getenv("DEV_CLIENT_URL")
prod_client_url = os.getenv("PROD_CLIENT_URL", "https://ski-calc.up.railway.app")

# Define allowed origins based on environment
if env == "production":
    allowed_origins = [prod_client_url]
else:
    allowed_origins = [dev_client_url]

# Add CORS middleware with restricted origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["GET", "POST"],  # Restrict to necessary methods
    allow_headers=["*"],
)

class SkiDinRequest(BaseModel):
    weight: float
    height: float
    age: int
    skier_type: int
    sole_length: float

class SkiDinResponse(BaseModel):
    skier_code: str
    din: Optional[float] = None

@app.post("/calculate_din", response_model=SkiDinResponse)
def calculate_din_endpoint(request: SkiDinRequest):
    result = calculate_din(request.weight, request.height, request.age, request.skier_type, request.sole_length)
    skier_code, din = result
    
    if din is None:
        return SkiDinResponse(skier_code=skier_code, din=None)
    return SkiDinResponse(skier_code=skier_code, din=float(din))