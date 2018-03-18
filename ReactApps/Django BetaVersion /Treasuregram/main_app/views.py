from django.shortcuts import render

# Create your views here.

def index(request):
    name = 'Gold Nuggests'
    value = 1000.0
    context = {
        'treasueName':name,
        'treasureValue':value,
    }
    return render(request,'index.html',context)

class Location:
    def __init__(self, name, predators, num_restaurants, img_url):
        self.name = name
        self.predators = predators
        self.num_restaurants = num_restaurants
        self.img_ur

        l = img_url

