"""
Definition of models.
"""

from django.db import models
from django.contrib.auth.models import User
import os
from django.conf import settings
from django.utils import timezone
# Create your models here.


def get_upload_path(instance, filename):
    # Get the username from the instance
    username = instance.user.username

    # Create the directory path for the user
    user_directory = os.path.join(settings.STATIC_ROOT, username)
    os.makedirs(user_directory, exist_ok=True)

    # Append the current timestamp to the filename
    timestamp = timezone.now().strftime('%Y%m%d%H%M%S')
    filename = f'{timestamp}_{filename}'

    # Return the complete file path
    return os.path.join(user_directory, filename)

class File(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    file = models.FileField(upload_to=get_upload_path)

    def __str__(self):
        return self.file.name

