from django.db import models


class Snippet(models.Model):
	title = models.CharField(max_length=50)
	description = models.TextField()
	language = models.CharField(max_length=100)
	code = models.TextField()
	active = models.CharField(max_length=10)