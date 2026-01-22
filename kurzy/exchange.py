#!/usr/bin/env python3
import httpx

cnb_url = "https://www.cnb.cz/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/denni_kurz.txt"

r = httpx.get(cnb_url)
print(r.text)
print(r.status)
lines = r.text.split('\n')
print(lines[0])
