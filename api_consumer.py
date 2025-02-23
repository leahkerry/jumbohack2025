#### Consuming all the publicly accessible APIs available to us that fits our needs

# 1. API Ninjas

import config
import requests

def get_animal_facts(animal_name):
    """ 
    Get animal facts. animal_name needs to be the animal's common name in lowercase
    Examples: cheetah, fox 
    
    The API supports partial matches, so 'fox' will return information for 'gray fox' as well as 'red fox' 
    """

    api_url = 'https://api.api-ninjas.com/v1/animals?name={}'.format(animal_name)
    response = requests.get(api_url, headers={'X-Api-Key': config.API_NINJAS})
    if response.status_code == requests.codes.ok:
        return response.text
    
    else:
        print("Error:", response.status_code, response.text)


def get_space_facts(star_name=None):
    """
    Get space (only stars currently) facts. We get detailed information on that star. 
    We can do all 30 stars if we want. Honestly, only 3 or 4 should be enough because otherwise it
    would only be interesting to star fanatics!

    Common star names can be passed. Examples, vega or sirius
    """

    URL = f"https://api.api-ninjas.com/v1/stars?name={star_name}"
    response = requests.get(URL, headers={'X-Api-Key': config.API_NINJAS})

    if response.status_code == requests.codes.ok:
        return response.text
    else:
        print("Error:", response.status_code, response.text)

def get_planet_facts(planet_name):
    api_url = 'https://api.api-ninjas.com/v1/planets?name={}'.format(planet_name)

    response = requests.get(api_url, headers={'X-Api-Key': config.API_NINJAS})
    if response.status_code == requests.codes.ok:
        return response.text
    else:
        print("Error:", response.status_code, response.text)


def get_historical_events(text):
    """
    Example text: 'roman empire'
    """

    api_url = 'https://api.api-ninjas.com/v1/historicalevents?text={}'.format(text)

    response = requests.get(api_url, headers={'X-Api-Key': config.API_NINJAS})

    if response.status_code == requests.codes.ok:
        return response.text
    else:
        print("Error:", response.status_code, response.text)