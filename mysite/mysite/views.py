from django.shortcuts import render

def index(request):
    """
    Loads the home page for the website.
    :param request:
    :return: The index.html page.
    """
    return render(request, 'index.html')
