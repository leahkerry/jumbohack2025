#### Group Jumbo Hack 2025, group orange AKA group vitamin C

import os
import json
import requests
from bs4 import BeautifulSoup


DATA_DIRECTORY = "data"


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

    response = requests.get(URL, headers=headers)
    soup = BeautifulSoup(response.text, "html.parser")
    container = soup.find('div', class_='entry-content')
    fun_facts = [span.text[2:].strip() for span in container.find_all("span") if span.text.strip()]
    fun_facts_dict = {"span_texts": fun_facts}

    file_path_directory = os.path.join(DATA_DIRECTORY, "tufts_interesting_facts1.json")
    with open(file_path_directory, "w", encoding="utf-8") as f:
        json.dump(fun_facts_dict, f, indent=4, ensure_ascii=False)


    return fun_facts_dict

def scrape_tufts_traditions():
    URL = "https://admissions.tufts.edu/discover-tufts/tufts-traditions/"

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
        'Cookie': 'PHPSESSID=4ct6tgtks3f96ffdn55a31f3ai'
    }

    response = requests.get(URL, headers=headers)
    soup = BeautifulSoup(response.text, "html.parser")
    p_tags = [p for p in soup.find_all("p") if not p.has_attr("class")]
    data = []
    current_title = None

    for p in p_tags:
        # Ignore <p> tags containing <iframe>
        if p.find("iframe"):
            continue

        strong_tag = p.find("strong")
        if strong_tag:
            current_title = strong_tag.text.strip()  # Store title
            
            # If there's additional content in the same <p> tag, extract it
            content = p.get_text(strip=True).replace(current_title, "").strip()
            if content:  
                data.append({"title": current_title, "content": content})
            continue  # Move to the next <p> tag
        
        # If there's a current title, store the following paragraph content
        if current_title:
            content = p.text.strip()
            if content:  # Ignore empty paragraphs
                data.append({"title": current_title, "content": content})

    file_path_directory = os.path.join(DATA_DIRECTORY, "tufts_interesting_facts2.json")
    with open(file_path_directory, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

    return data

def scrape_alice_in_wonderland_beano():
    URL = "https://www.beano.com/facts/books/alice-in-wonderland-facts"

    headers = {
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"'
    }

    response = requests.get(URL, headers=headers)
    soup = BeautifulSoup(response.text, "html.parser")

    figures = soup.find_all("figure", class_="wp-block-image")
    data = []
    
    for figure in figures:
        adjacent_p = figure.find_next_sibling("p")
        adjacent_h = figure.find_previous_sibling("h2")

        if adjacent_p and adjacent_h:
            content_p = adjacent_p.text.strip()
            content_h = adjacent_h.text.strip()[3:]

            if content_p: 
                data.append({"title": content_h, "content": content_p})

    file_path_directory = os.path.join(DATA_DIRECTORY, "alice_in_wonderland1.json")
    with open(file_path_directory, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

    return data

def scrape_alice_in_wonderland_booktrust():
    URL = "https://www.booktrust.org.uk/news-and-features/features/2016/may/10-crazy-things-you-need-to-know-about-alice-in-wonderland/"

    headers = {
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-language': 'en-US,en;q=0.9',
        'priority': 'u=0, i',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'Cookie': 'ASP.NET_SessionId=e3vw0knh35ps0c0qfct1tns3'
    }

    response = requests.get(URL, headers=headers)
    soup = BeautifulSoup(response.text, "html.parser")
    h4_tags = soup.find_all("h4")[1:]
    data = []

    for h4 in h4_tags:
        # Extract all <b> tags inside the <h4>
        b_tags = h4.find_all("b")

        # Ensure there are at least one or two <b> tags before proceeding
        # Skip this <h4> if it doesn't have enough <b> tags
        if len(b_tags) >= 2:
            title = b_tags[1].get_text(strip=True)  # Use second <b>
        elif len(b_tags) == 1:
            title = b_tags[0].get_text(strip=True)  # Use first <b>
        else:
            continue

        # Find the first paragraph after the <h4>
        target_p = h4.find_next_sibling("p")  # First <p>
        if target_p:
            target_p = target_p.find_next_sibling("p")  # Second <p>
        if target_p:
            target_p = target_p.find_next_sibling("p")  # Third <p>

        if target_p and target_p.text.strip():  # Ensure the paragraph has valid text
            content = target_p.text.strip()
            data.append({"title": title, "content": content})

    file_path_directory = os.path.join(DATA_DIRECTORY, "alice_in_wonderland2.json")
    with open(file_path_directory, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

    return data

