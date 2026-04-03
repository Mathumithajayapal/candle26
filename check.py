import re
import glob

files = ["about.html", "contact.html", "experience.html", "giftSet.html", "personalize.html", "servicedetail.html"]

for f in files:
    try:
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
            # find </header> or <div class="mobile-menu"
            # find first <section> after the header
            body_start = content.find('<body')
            if body_start == -1:
                continue
            
            section_match = re.search(r'(<!--.*?hero.*?-->\s*)?<section[^>]*>.*?</section>', content[body_start:], re.IGNORECASE | re.DOTALL)
            if section_match:
                print(f"--- {f} ---")
                print(section_match.group(0)[:300] + "...\n")
                
    except Exception as e:
        print(f"Error reading {f}: {e}")
