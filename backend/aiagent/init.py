import ollama
import os
from dotenv import load_dotenv
async def greet_message():
    await ai_summary()
    print("hello world 2026")
    return "hello world 2026"

async def ai_summary():
    

    # Define your prompt template and text
    system_prompt = "You are an expert summarizer. Provide a concise summary of the given text."
    text_to_summarize = "Your very long text goes here..."
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
