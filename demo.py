import re






ll = re.sub(b'[^\x20-\x7e]', bytes('.', 'UTF-8'), bytes('hello' + chr(0x0) + chr(0x18) + 'end', 'UTF-8'))
print(str(ll, encoding = "utf-8"))




    
