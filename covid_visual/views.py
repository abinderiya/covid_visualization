from django.shortcuts import render
from .helper import get_covid_data

# Create your views here.
def index(request):
    data = get_covid_data()

    context = {
        'cases': data['timeline']['cases'],
        'recovered': data['timeline']['recovered'],
        'cases_today': max(data['timeline']['cases'].values()),
        'recovered_today': max(data['timeline']['recovered'].values()),
        'hospitalized': max(data['timeline']['cases'].values()) - max(data['timeline']['recovered'].values())
    }
    return render(request, 'index.html', context=context)