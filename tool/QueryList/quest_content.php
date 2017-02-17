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
$intPage = 1;
$intNum = 1;
if(!empty($_GET['page'])) {
    $page = '/page/'.$_GET['page'];
    $intPage = intval($_GET['page']);
}

if(!empty($_GET['num'])) {
    //$num = '/num/'.$_GET['num'];
    $intNum = intval($_GET['num']);
}

$intTotal = 54;


//$intTotal = 10;
//
//
//
//

//
$intNumberTotal = 81;


if($intPage >= $intTotal) {
    exit('alldone');
}

if($intNum>=$intNumberTotal){
    $intPage++;
    $intNum=1;
}

$arrIDs = json_decode(file_get_contents('quests/'.$intPage.'.php'));

$sqldata=array();

//采集某页面所有的图片
//
//

$sql = '';

//foreach($arrIDs as $id){
//
// php
$id=$arrIDs[$intNum-1];
    $data = QueryList::Query('http://cn.60wdb.com/quest/'.$id,

    array(
        'title' => array('.quest_info_list .content','text',''),
    ))->data;

    //foreach($data as $key=>$arrTemp) {
        
   // }


    //exit();

    //foreach($data as $key=>$temp){
        //$sql.=''
        $sql .= "UPDATE `wow`.`quest_template` SET `Objectives_chi` = \"".addslashes($data[0]['title'])."\",`Details_chi` = \"".addslashes($data[1]['title'])."\",`RequestItemsText_chi` = \"".addslashes($data[2]['title'])."\",`OfferRewardText_chi` = \"".addslashes($data[3]['title'])."\" WHERE `quest_template`.`entry` = \"".$id."\"; \r\n"; 

   // }
//echo $sql;
   // exit();
//}

//exit();
//exit();

//exit();

//echo $sql;
//
//

//file_put_contents('items.sql',$sql);

// 要写入的文件名字
$filename = 'quests_content.sql';

error_log($sql, 3, $filename);

//sleep(1);

?>

<script type="text/javascript">setTimeout(function() { window.location.href='http://localhost:8888/wowhead/tool/QueryList/quest_content.php?page=<?php echo ($intPage);?>&num=<?php echo ($intNum+1);?>'; }, 1000);</script>
正在跳转到 <?php echo ($intPage);?> 页
正在跳转到 <?php echo ($intNum+1);?> 条

