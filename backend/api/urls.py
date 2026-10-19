from django.urls import path
from .views import get_aquatic_data

urlpatterns = [
    path('data/', get_aquatic_data, name='aquatic-data'),
]