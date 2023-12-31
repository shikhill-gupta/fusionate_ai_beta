"""
Definition of urls for fusionate_ai_beta.
"""

from datetime import datetime
from django.urls import path
from django.contrib import admin
from django.contrib.auth.views import LoginView, LogoutView
from app import forms, views

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/files/<int:user_id>/', views.FileListAPIView.as_view(), name='file-list'),

    path('upload_files', views.handle_file_upload, name='upload_files'),
    path('', views.home, name='home'),
    path('ask/', views.askQuestion, name='ask'),
    path('contact/', views.contact, name='contact'),
    path('about/', views.about, name='about'),
    path('register/', views.register, name='register'),
    path('login/',
         LoginView.as_view
         (
             template_name='app/login.html',
             authentication_form=forms.BootstrapAuthenticationForm,
             extra_context=
             {
                 'title': 'Log in',
                 'year' : datetime.now().year,
                 'registration_form': forms.RegistrationForm(),
             }
         ),
         name='login'),
    path('logout/', LogoutView.as_view(next_page='/'), name='logout'),
    path('admin/', admin.site.urls),
]


