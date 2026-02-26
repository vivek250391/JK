from uuid import UUID,uuid4
from aiagent.aiRepository import AiRepository
from aiagent.aiModel import AiModel
from aiagent.aiEntity import AiEntity

r=AiRepository()
class AiApplication:
    def getAiGeneratedSummary(self,id:UUID):
        entity=r.getAnalysis(bookId=id)
        model=AiModel()
        model.id=entity.id
        model.aiSummary=entity.aiSummary
        model.bookID=entity.bookId
        return model
    
    def saveAiGeneratedSummary(self,bookId:UUID,Analysis:str):
        entity= AiEntity()
        entity.aiSummary=Analysis
        entity.id=uuid4()
        entity.bookId=bookId
        r.saveAnalysis(entity)

