from django.contrib import admin
from .models import Match
# Register your models here.

class MatchAdmin(admin.ModelAdmin):
    list_filter = ['startDate']
    search_fields = ['home']
    list_display = ['home', 'away']

admin.site.register(Match, MatchAdmin)
