from rest_framework import serializers
from . models import *
  
class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = React
        fields = ['name', 'detail', 'text']

class test(serializers.ModelSerializer):
    class Meta:
        model = React
        fields = ['test']