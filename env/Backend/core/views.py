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

    


    def loadImages(loc):
        imagesList = listdir(loc)
        for image in imagesList:
            T_TO_S.update({
                image[:-4]: image
            })

        return T_TO_S


    T_TO_S = loadImages(loc)



    def text_to_sign(self, request):
        lettres=dict()
        ArL=['ع','ال','ا','ب','د','ض','ض',' ','ف','ك','غ','ح','حا','ج','ك','خ','ل','ل','م','ن','ر','ص','س','ش','ت','تا','ظ','ذ','توت','و','ي','ي','ز']
        i=0
        for itm in T_TO_S.keys():
            lettres.update({ArL[i]:itm})
            i+=1
        text = request.query_params.get('text')
        t=list(text)
        signs=[]
        if t:
            for e in t:
                itm=lettres[e]
                img=T_TO_S[itm]
                signs.append(img)
            return Response(signs)
        return Response('BAD RESPONSE')

        




    