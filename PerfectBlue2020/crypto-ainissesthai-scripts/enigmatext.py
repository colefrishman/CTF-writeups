import sys

text = "\""
for line in sys.stdin:
    text = text + line
    if len(text)>=899:
        break

text = text.replace('\n', '')
text = text + "\",\n"

outF = open("alltxt.txt", "a")
outF.write(text)
print(text)
