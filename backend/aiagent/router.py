from fastapi import APIRouter
from aiagent.aiapplication import AiApplication
a=AiApplication()
ai_router=APIRouter()

@ai_router.get("/api/books/{id}/analysis")
def get_review(id):
    data=a.getAiGeneratedSummary(id)
    return data

@ai_router.get("/api/recommendations")
def get_recommendations():
    pass
