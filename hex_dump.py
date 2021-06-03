import re
def hex_dump(data, newline = "\n"): 
    width = 16
    by = bytes(data, 'UTF-8') 
    hex_str = by.hex() 
    hex_list = [hex_str[i: i + width * 2] for i in range(0, len(hex_str), width * 2)]

    chars_b = re.sub(b'[^\x20-\x7e]', bytes('.', 'UTF-8'), by)
    chars_str = str(chars_b, encoding='UTF-8')
    chars = [chars_str[i: i + width] for i in range(0, len(chars_str), width)]

    offset = 0

    for index, item in enumerate(hex_list):
        str_print = hex(offset) + ' : ' + ' '.join([item[i: i + 2] for i in range(0, len(item), 2)]) + ' [' + chars[index] + ']'
        offset += width
        print(str_print)


hex_dump("hello world!!!hello world!!!hello world!!!hello world!!!hello world!!!hello world!!!" + chr(0x19))