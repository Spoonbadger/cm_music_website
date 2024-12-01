from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index-view"),
    path("home-view", views.index, name="index-view"),
    # path("login", views.login, name="login"),
    # path("logout", views.login, name="logout"),
    # path("register", views.register, name="register"),
    path("bio-view", views.bio, name="bio-view"),
    path("contact-view", views.contact_page, name="contact-view"),
    path("links-view", views.links, name="links-view"),
    path("music-view", views.music, name="music-view"),
    path("invest-view", views.invest, name="invest-view")
]