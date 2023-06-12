"""
Definition of views.
"""

from datetime import datetime
from django.shortcuts import render
from django.http import HttpRequest
from django.http import HttpResponse
import json
import os
from django import *
from langchain import *
from bardapi import Bard

from langchain.document_loaders import CSVLoader
from langchain.indexes import VectorstoreIndexCreator
from langchain.chains import RetrievalQA
from langchain.llms import OpenAI
import os

from langchain.document_loaders import PDFMinerLoader
from langchain.chains import RetrievalQA
from langchain.llms import OpenAI
import os


os.environ["OPENAI_API_KEY"] = ""
os.environ["HUGGINGFACEHUB_API_TOKEN"] = ""


#TOKENS


class AISection:

    def __init__(self):
        pass


    def giveResponse(self, response_message):


        list_of_response = [response_message]

        json_response = {
            "message": list_of_response
        }

        json_string = json.dumps(json_response)
        response = HttpResponse(json_string, content_type='application/json')
        return response


    def useBard(self, message, api_key = 'XAgmCMSjzlW6gfVCdohc3Su_SHJj-OJ8nHgLzWRT_RJzBDg76z6jgr83kmx4D0zoXCsd6A.'):
        try:
            os.environ['_BARD_API_KEY'] = api_key
            my_question = str(message)
            return Bard().get_answer(my_question)['content']
        except Exception as e:
            print(e)
            return str(e)


    def useHuggingface(self, message, define_model = "google/flan-t5-base"):

        try:

            llm = HuggingFaceHub(repo_id = define_model, model_kwargs={"temperature":0.9})
            template = """Question: {question} Let's think step by step. Answer: """
            prompt = PromptTemplate(template=template, input_variables=["question"])
            llm_chain = LLMChain(prompt=prompt, llm=llm)
            answer = llm_chain.run(message)
            print(answer, "IS THE ANSWER")
            return answer
        except Exception as e:
            print(e)
            return str(e)


def askQuestion(request):

    if request.method == 'POST':
        print(request.POST.get('question'), "IS THE QUESTION")
        MyAI = AISection()
        response = MyAI.useHuggingface(str(request.POST.get('question')))
        #response = MyAI.useBard(request.POST.get('question'))
        import re


        matches = re.findall(r"```([\s\S]*?)```", response)
        values = [match.strip() for match in matches]
        print(len(values))
        if len(values) > 0:
            return MyAI.giveResponse(values)
        else:
            return MyAI.giveResponse(response)








def home(request):
    """Renders the home page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/index.html',
        {
            'title':'Home Page',
            'year':datetime.now().year,
        }
    )

def contact(request):
    """Renders the contact page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/contact.html',
        {
            'title':'Contact',
            'message':'Your contact page.',
            'year':datetime.now().year,
        }
    )

def about(request):
    """Renders the about page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/about.html',
        {
            'title':'About',
            'message':'Your application description page.',
            'year':datetime.now().year,
        }
    )


def register(request):
    from .forms import RegistrationForm
    list_of_request = []
    for x in request.POST:
        list_of_request.append(str(request.POST.get(x)))

    if request.method == 'POST':

        form = RegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            print("Valid")
            return shortcuts.redirect('login')
        else:
            print("Invalid")
    else:
        form = RegistrationForm()

    return shortcuts.redirect('login')