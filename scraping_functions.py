import os
import json
import requests
from bs4 import BeautifulSoup

def scrape_admitsee():
    URL = "https://www.admitsee.com/blog/10-fun-facts-about-tufts-university"
    
    headers = {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Language': 'en-US,en;q=0.9',
        'Connection': 'keep-alive',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'Cookie': 'PHPSESSID=tl2ltpmv2mv5bn6615s29sqadm; admitsee__cartthrob_session_id=8dbf5a080c1a0d926e0278d60ad99ac7; admitsee__last_activity=1740259748; admitsee__last_visit=1424899748; admitsee__tracker=a%3A1%3A%7Bi%3A0%3Bs%3A40%3A%22blog%2F10-fun-facts-about-tufts-university%22%3B%7D'
    }

    response = requests.request("GET", URL, headers=headers)
    soup = BeautifulSoup(response.text, "html.parser")
    container = soup.find('div', class_='entry-content')
    fun_facts = [span.text[2:].strip() for span in container.find_all("span") if span.text.strip()]
    fun_facts_dict = {"span_texts": fun_facts}

    file_path_directory = os.path.join("data", "tufts_interesting_facts.json")
    with open(file_path_directory, "w", encoding="utf-8") as f:
        json.dump(fun_facts_dict, f, indent=4, ensure_ascii=False)


    return fun_facts_dict


results = scrape_admitsee()