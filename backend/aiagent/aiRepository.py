from sqlmodel import select
from datetime import datetime
from Infrastructure.database import database
from aiagent.aiEntity import AiEntity
db=database()

class AiRepository:
    def getAnalysis(self,bookId):
        session=db.get_session()
        statement=select(AiEntity).where(AiEntity.bookId==bookId)
        results=session.exec(statement)
        entity=results.first()
        return entity
    
    def saveAnalysis(self,Analysis:AiEntity):
        session=db.get_session()
        entity=self.getAnalysis(Analysis.bookId)
        if entity is None:
            session.add(Analysis)
            session.commit()
        else:
            statement =select(AiEntity).where(AiEntity.bookId==Analysis.bookId)
            result=session.exec(statement)
            entity:AiEntity=result.first()
            entity.aiSummary=Analysis.aiSummary
            session.add(entity)
            session.commit()

            
        
        