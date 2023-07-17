from rest_framework import serializers
from .models import File
from os.path import basename
class FileSerializer(serializers.ModelSerializer):
    file_name = serializers.SerializerMethodField()

    class Meta:
        model = File
        fields = ('id', 'file', 'user', 'file_name')

    def get_file_name(self, obj):
        return basename(obj.file.name)