from pydantic import BaseModel, EmailStr, Field, ConfigDict
from datetime import datetime, timezone
from typing import Optional
import uuid


class EmployerFormBase(BaseModel):
    company_name: str
    contact_person: str
    country: str
    phone: str
    email: EmailStr
    worker_type: str
    quantity: int
    requirements: Optional[str] = None


class EmployerFormCreate(EmployerFormBase):
    pass


class EmployerFormInDB(EmployerFormBase):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class CandidateFormBase(BaseModel):
    full_name: str
    origin_country: str
    whatsapp: str
    email: EmailStr
    position: str
    experience: str


class CandidateFormCreate(CandidateFormBase):
    pass


class CandidateFormInDB(CandidateFormBase):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
