import ollama
import os
from uuid import UUID
from dotenv import load_dotenv
from book.bookissue.bookissueapplication import BookIssueApplication

async def greet_message():
    await ai_summary()
    print("hello world 2026")
    return "hello world 2026"

async def get_comments(bookId):
    data=BookIssueApplication.getReivewbybookId(bookId)
    arrayofcommentsbyspaces=""
    if len(data)==0:
        return
    for entry in data:
        arrayofcommentsbyspaces+=entry.review
        print(arrayofcommentsbyspaces)
    return arrayofcommentsbyspaces
    

async def ai_summary():
    text_to_summarize=get_comments()

    # Define your prompt template and text
    system_prompt = "You are an expert summarizer. Provide a concise summary of the given text."
    text_to_summarize = text_to_summarize
    user_prompt = f"{system_prompt}\n\nText to summarize:\n{text_to_summarize}"

    # Send the prompt to Ollama
    response = ollama.chat(
        model=os.getenv("AI_MODEL"), # Specify the model to use
        messages=[
            {'role': 'user', 'content': user_prompt},
        ],
    )

    # Print the generated summary
    print(response['message']['content'])
