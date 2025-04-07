from django.urls import path
from . import views

urlpatterns = [
    # Add your API endpoints here
    path('test/', views.test_api, name='test-api'),
] 