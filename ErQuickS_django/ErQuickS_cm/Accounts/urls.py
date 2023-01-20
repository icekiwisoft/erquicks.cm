from django.urls import path
from Accounts import views

urlpatterns = [
    path('', views.Login ,name="Login"),
]