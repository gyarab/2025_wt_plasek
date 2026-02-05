#!/usr/bin/env python3
import httpx, sys

cnb_url = "https://www.cnb.cz/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/denni_kurz.txt"

r = httpx.get(cnb_url)
lines = r.text.split('\n')

line_euro = ""

for line in lines:
	if "EUR" in line:
		line_euro = line
		break

rate_str = line_euro.split('|')[-1].replace(',', '.')
rate = float(rate_str)

print("Kurz eura je", rate)
print("\033[1mCurrency exchange thingy\033[0m")

choice = input("What currency ya wanna convert? [EUR/CZK] ")
if choice == "EUR" or choice == "CZK":
	amount = input(f"How much of it? ")
	if (int(amount) < 0):
		print("\033[0;31mEnter a \033[1mnon-negative number\033[0m")
		sys.exit(65)

	if choice == "EUR":
		print(f"Your amount is \033[1m{(int(amount) * rate):.3}\033[0m CZK")
	elif choice == "CZK":
		print(f"Your amount is \033[1m{(int(amount) / rate):.3}\033[0m EUR")
else:
	print("\033[1;31mDo a real currency!\033[0m")
	sys.exit(65)
