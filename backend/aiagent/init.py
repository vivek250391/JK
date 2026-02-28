import ollama
import os
import faiss
from nomic import embed
import numpy as np
import asyncio
from uuid import UUID
from dotenv import load_dotenv
from book.bookissue.bookissueapplication import BookIssueApplication
from book.bookapplication import bookApplication
from aiagent.aiapplication import AiApplication

bi=BookIssueApplication()
b=bookApplication()

def vector_index_generation():
    d = 64 # Dimensionality of vectors
    n_vectors = 10000
    
    books=b.get()
    data=[]
    if(len(books)==0):
        return
    for book in books:
        print(book.id)
        data.append(f"{book.id} {book.author} {book.genre}")
    output=embed.text(
        texts=data,
        model="nomic-embed-text-v1.5",
        inference_mode="local")
    #print(f"####{output['embeddings']}")
    embeddings=np.array(output['embeddings']).astype('float32')
    dimension=embeddings.shape[1]
    index=faiss.IndexFlatL2(dimension)
    index.add(embeddings)
    print(f"total vectors in index:{index.ntotal}")
    faiss.write_index(index,"nomic_faiss_index.bin")
    #loaded_index = faiss.read_index("nomic_faiss_index.bin")





    return 1

async def greet_message():
    vector_index_generation()
    await ai_summary()
    print("hello world 2026")
    return "hello world 2026"

def get_comments(bookId):
   
    data=bi.getReivewbybookId(bookId)
    arrayofcommentsbyspaces=""
    if data is None:
        return
    if len(data)==0:
        return
    for entry in data:
        if entry.review is not None:
            arrayofcommentsbyspaces+=entry.review
        print(arrayofcommentsbyspaces)
    return arrayofcommentsbyspaces
    

async def ai_summary():
    # get all the books
    books=b.get()
    for book in books:
        bookIdtoUse=book.id
        text_to_summarize=get_comments(bookIdtoUse)
        if text_to_summarize=="" or text_to_summarize is None:
            continue
        # Define your prompt template and text
        system_prompt = "You are an expert summarizer. Provide a concise summary of the given text."
        #text_to_summarize = text_to_summarize
        user_prompt = f"{system_prompt}\n\nText to summarize:\n{text_to_summarize}"

        # Send the prompt to Ollama
        response = ollama.chat(
            model=os.getenv("AI_MODEL"), # Specify the model to use
            messages=[
                {'role': 'user', 'content': user_prompt},
            ],
        )

        # Print the generated summary
        a=AiApplication()
        a.saveAiGeneratedSummary(bookIdtoUse,response['message']['content'])

    
