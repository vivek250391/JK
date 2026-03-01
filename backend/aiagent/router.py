from nomic import embed
import faiss
import numpy as np
from fastapi import APIRouter
from aiagent.aiapplication import AiApplication
from book.bookapplication import bookApplication
a=AiApplication()
ai_router=APIRouter()
b=bookApplication()

@ai_router.get("/api/books/{id}/analysis")
def get_review(id):
    data=a.getAiGeneratedSummary(id)
    return data

@ai_router.get("/api/recommendations")
def get_recommendations():
    books=b.get()
    query_text = "title22"

    output = embed.text(
            texts=[query_text],
            model='nomic-embed-text-v1.5', # Or other Nomic model
        task_type='search_query',
        inference_mode="local"
    )

    # The resulting vector is in output['embeddings'][0]
    query_vector = output['embeddings']
    index = faiss.read_index("nomic_faiss_index.bin")
    k = 2
    query_vector_np=np.array(query_vector)
    # 3. Perform the search
    # D = distances, I = indices of nearest neighbors
    d,i = index.search(query_vector_np, k)

    print("Nearest neighbor indices:", d)
    print("Distances:", i)
    book_data=[]
    for i, index_id in enumerate(i[0]):
    # Use the retrieved index to access the original sentence from the list
        original_text = books[index_id]
        book_data.append(original_text.title)
        distance = d[0][i]
        print(f"* Neighbor {i+1}: {original_text} (Distance: {distance:.4f})")
    return book_data