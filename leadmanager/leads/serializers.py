from rest_framework import serializers
from .models import Lead

#Lead Serializers
class LeadSerializers(serializers.ModelSerializer):
    class Meta :
        model = Lead
        fields = '__all__'