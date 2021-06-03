# notes
function hex_dump($data, $newline="\n") { 
static $from = '';   
static $to = '';    
static $width = 16; static $pad = '.';  
 if ($from==='')   {     
     for ($i=0; $i<=0xFF; $i++)  { 
         $from .= chr($i);       
         $to .= ($i >= 0x20 && $i <= 0x7E) ? chr($i) : $pad;   
     }   
 }    
$hex = str_split(bin2hex($data), $width*2);   
$chars = str_split(strtr($data, $from, $to), $width);    
$offset = 0;   
foreach ($hex as $i => $line)   {     
    echo sprintf('%6X',$offset).' : '.implode(' ', str_split($line,2)) . ' [' . $chars[$i] . ']' . $newline;    
   $offset += $width;   
  } 
} 
def hex_dump(data, newline = "\n"):
    width = 16
    by = bytes(data, 'UTF-8')
    hex_str = by.hex()
    hex_list = [hex_str[i: i + width * 2] for i in range(0, len(hex_str), width * 2)]
    chars = [data[i: i + width] for i in range(0, len(data), width)]

    offset = 0

    for index, item in enumerate(hex_list):
        str_print = hex(offset) + ' : ' + ' '.join([item[i: i + 2] for i in range(0, len(item), 2)]) + ' [' + chars[index] + ']'
        offset += width
        print(str_print)


hex_dump("hello world!!!hello world!!!hello world!!!hello world!!!hello world!!!hello world!!!")
