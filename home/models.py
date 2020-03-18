from django.db import models

# Create your models here.

class Match(models.Model):
    home = models.CharField(max_length=100)
    away = models.CharField(max_length=100)
    startDate = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.home

