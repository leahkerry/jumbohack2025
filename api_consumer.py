#### Consuming all the publicly accessible APIs available to us that fits our needs

import os
import json
import config
import requests

DATA_DIRECTORY = "data"

def get_historical_events(text):
    """
    Example text: 'roman empire'
    """

    api_url = 'https://api.api-ninjas.com/v1/historicalevents?text={}'.format(text)
    response = requests.get(api_url, headers={'X-Api-Key': config.API_NINJAS})
    historical_events = []

    if response.status_code == requests.codes.ok:
        data = json.loads(response.text)
        
        for d in data:
            event_date = f"{d['month']}/{d['day']}/{d['year']}"
            event_text = d['event']
            event_text_split = event_text.split(" ")
            event_text_split[0] = event_text_split[0].lower()
            event_text = " ".join(event_text_split)
            final_string = f"On {event_date}, {event_text}"
            historical_events.append({
                "content": final_string
            })

        file_name = "_".join(text.split(" "))
        file_path_directory = os.path.join(DATA_DIRECTORY, f"{file_name}.json")
        with open(file_path_directory, "w", encoding="utf-8") as f:
            json.dump(historical_events, f, indent=4, ensure_ascii=False)

        return historical_events
    else:
        print("Error:", response.status_code, response.text)