from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from .calculate_din import calculate_din

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
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
    din: float

@app.post("/calculate_din", response_model=SkiDinResponse)
def calculate_din_endpoint(request: SkiDinRequest):
    result = calculate_din(request.weight, request.height, request.age, request.skier_type, request.sole_length)
    skier_code, din = result
    
    if din is None:
        return SkiDinResponse(skier_code=skier_code, din=None)
    return SkiDinResponse(skier_code=skier_code, din=float(din))