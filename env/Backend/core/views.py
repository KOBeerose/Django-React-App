from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet
from . models import *
from rest_framework.response import Response
from . serializer import *
from deep_translator import (GoogleTranslator,
                             PonsTranslator,
                             LingueeTranslator,
                             MyMemoryTranslator,
                             YandexTranslator,
                             DeepL,
                             QCRI,
                             single_detection,
                             batch_detection)
import json
from os import listdir
from PIL import Image as PImage
import pyrebase
import cv2
import numpy
 
from tensorflow.keras.models import load_model
# Create your views here.
  
class ReactView(APIView):
    
    serializer_class = ReactSerializer
  
    def get(self, request):
        detail = [ {"name": detail.name,"detail": detail.detail, "text": detail.text} 
        for detail in React.objects.all()]
        return Response(detail)
  
    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return  Response(serializer.data)

    def translate(text, src, trg):
        translated = GoogleTranslator(source=src, target=trg).translate(text=text)
        return Response(translated)

    def test_fucntion(self, request):
        serializer = test(data=request.test)
        return Response(serializer.data)

T_TO_S=dict()
loc = "C:/Users/Admin/Desktop/dict/"
class ReactViewset(ViewSet):

    
    def translate(self, request):
        trg = request.query_params.get('trg')
        text = request.query_params.get('text')
        if text:
            translated = GoogleTranslator(source="en", target=trg).translate(text=text)
            return Response(translated)
        return Response('BAD RESPONSE')

    



   