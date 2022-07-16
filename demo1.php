<?php

// $a = 'abc22345aaaaaaaaaa019A334bc';

// $str = null;
// fscanf(STDIN, '%s', $str);

// $str_arr = str_split($str);

// $str_length = count($str_arr);

// $len = 0;

// for($i = 0; $i < $str_length; $i++) {
//     if (!is_numeric($str_arr[$i])) {
//        continue;
//     }
    
//     $_len = 1;
//     for($j = $i; $j < $str_length - 1; $j++) {
//         if (!is_numeric($str_arr[$j + 1])) {
//             break;
//         }
//         $diff = intval($str_arr[$j + 1]) - intval($str_arr[$j]);
   
//         if ($diff >= 0 and $diff <=1) {
//             $_len++;
//             if ($_len > $len) {
//                 $len = $_len;
//             }
//         } else {
//             break;
//         }
//     }
// }

// printf('%d', $len);

// $str = '123 123 125 121 119 122 126 123';

// $count = 8;

// fscanf(STDIN, '%d', $count);


// $arr = explode(' ', $str);
// var_dump($str);

// foreach($arr as &$item) {
//     $item = intval(trim($item));
// }

// for($i = 0; $i < $count; $i++) {
//     $friends[$i] = 0;
//     for($j = $i + 1; $j < $count; $j++) {
//         if ($arr[$j] > $arr[$i]) {
//             $friends[$i] = $j;
//             break;
//         }
//     }
// }

// printf("%s", join(' ', $friends));

// $flaw = 0;
// $str = '';
// fscanf(STDIN, '%d', $flaw);
// fscanf(STDIN, '%s', $str);


// $arr = str_split($str);

// $vowels = ['a', 'e', 'i', 'o', 'u'];

// $count = count($arr);

// $len = 0;
// for($i = 0; $i < $count; $i++) {


//     if ($i != 4) {
//         continue;
//     }


//     // 第一步，找到一个元音
//     if(!in_array($arr[$i], $vowels)) {
//         continue;
//     }
//     // 第二步，找瑕疵
//     $_v_c = 0;
//     for($j = $i + 1; $j < $count; $j += 1) {
//         if ($_v_c === $flaw) {
//             break;
//         }
//         if (!in_array($arr[$j], $vowels)) {
//             $_v_c++;
//         }
//     }

//     // var_dump($_v_c);

   
//     // 没找到足够的瑕疵
//     if ($_v_c !== $flaw) {
//         break;
//     }


   
//     // 第三步，找连续的元音
//     for($j += 1; $j < $count; $j += 1) {
//         if (in_array($arr[$j], $vowels)) {
//             continue;
//         }
//         // 此时 j 已经不是元音了
//         if ($j - $i > $len) {
//             $len = $j - $i;
//         }
//     }
// }

// printf('%d', $len);


// $arr = [
// 	[
// 		"id"=>1,
// 		"parent_id"=>100,
// 		"name"=>"dir1"
// 	],
// 	[
// 		"id"=>2,
// 		"parent_id"=>100,
// 		"name"=>"dir",
// 	],
// 	[
// 		"id"=>100,
// 		"parent_id"=>10,
// 		"name"=>"dir100"
// 	]
// ];

// $arr = array_column($arr, null, 'id');
// // var_dump($arr);

// foreach($arr as $key => &$item) {
// 	if (isset($item['parent_id']) && isset($arr[$item['parent_id']])) {
// 		$arr[$item['parent_id']]['children'][] = $item;
// 		unset($arr[$key]);
// 	}
// }

// var_dump($arr);




