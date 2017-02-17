<?php
/**
 *  QueryList使用示例
 *  
 * 入门教程:http://doc.querylist.cc/site/index/doc/4
 * 
 * QueryList::Query(采集的目标页面,采集规则[,区域选择器][，输出编码][，输入编码][，是否移除头部])
* //采集规则
* $rules = array(
*   '规则名' => array('jQuery选择器','要采集的属性'[,"标签过滤列表"][,"回调函数"]),
*   '规则名2' => array('jQuery选择器','要采集的属性'[,"标签过滤列表"][,"回调函数"]),
*    ..........
*    [,"callback"=>"全局回调函数"]
* );
 */



require 'vendor/autoload.php';

use QL\QueryList;

//header('Content-Type: text/html; charset=UTF-8');

ini_set( 'default_charset', 'UTF-8' );

$sql = '';

$page = '';
if(!empty($_GET['page'])) {
    $page = '/page/'.$_GET['page'];
}

//采集某页面所有的图片
$data = QueryList::Query('http://cn.60wdb.com/itemsets'.$page,array(
    'link' => array('.itemset-title a','text','',function($content){
        return $content;
})))->data;

//print_r($data);

$arrNew = array(
    'e'=>array(),
    'c'=>array(),
);

foreach($data as $key=>$temp){
    $temp = trim($temp['link']);
    if(($key+1)%2 == 0) {
        $arrNew['e'][] = $temp;
    }else {
        $arrNew['c'][] = $temp;
    }
}

foreach($arrNew['c'] as $key2=>$temp){
     $sql .= "UPDATE `wow`.`aowow_itemset` SET `chinese` = '".$temp."' WHERE `aowow_itemset`.`name_loc0` = \"".$arrNew['e'][$key2]."\"; \r\n"; 
}

echo $sql;
