from pydantic import BaseModel
from typing import List

class OrderItemCreate(BaseModel):
    id: int
    quantity: int
    price: float

class OrderCreate(BaseModel):
    items: List[OrderItemCreate]
    total: float

class OrderItemResponse(BaseModel):
    id: int
    item_id: int
    quantity: int
    price: float

    class Config:
        from_attributes = True

class OrderResponse(BaseModel):
    id: int
    total: float
    status: str
    estimated_time: int
    items: List[OrderItemResponse] = []

    class Config:
        from_attributes = True

class OrderStatusUpdate(BaseModel):
    status: str
    estimated_time: int
