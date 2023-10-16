from django.shortcuts import render
from django.contrib.auth.decorators import login_required
import requests
import environ  # Initialise environment variables


# env = environ.Env()
# environ.Env.read_env('.env')
# access_token = env('SOCIAL_AUTH_GITHUB_SECRET')

def login(request):
    return render(request, 'login.html')

@login_required
def home(request):
    return render(request,'home.html', )

def all_users(request):
    repository_url = 'https://api.github.com/users'
    # Make a request to the GitHub API to fetch repository details
    response = requests.get(repository_url,) #, headers=headers)

    repository_details = response.json()
    return render(request, 'github_users.html', {'repository_details':repository_details})


def logout(request):
    return render(request, 'logout.html')

