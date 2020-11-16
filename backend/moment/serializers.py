from rest_framework import serializers
from .models import Moment

class MomentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Moment
        fields = ('id','title','author','caption','created_on','image')