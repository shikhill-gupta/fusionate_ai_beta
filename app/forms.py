"""
Definition of forms.
"""

from django import forms
from django.contrib.auth.forms import AuthenticationForm
#from django.utils.translation import ugettext_lazy as _ <- DEPRACATED
from django.utils.translation import gettext_lazy as _

from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import *



class BootstrapAuthenticationForm(AuthenticationForm):
    """Authentication form which uses boostrap CSS."""
    username = forms.CharField(max_length=254,
                               widget=forms.TextInput({
                                   'class': 'form-control',
                                   'placeholder': 'User name'}))
    password = forms.CharField(label=_("Password"),
                               widget=forms.PasswordInput({
                                   'class': 'form-control',
                                   'placeholder':'Password'}))



class RegistrationForm(UserCreationForm):
    email = forms.EmailField()
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']


class FileUploadForm(forms.ModelForm):
    class Meta:
        model = File
        fields = ['user', 'file']