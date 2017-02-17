<?php

/*
 * UDWBase: WOWDB Web Interface
 *
 * © UDW 2009-2011
 *
 * Released under the terms and conditions of the
 * GNU General Public License (http://gnu.org).
 *
 */

require_once('includes/allitemsets.php');
require_once('includes/page.php');

$smarty->config_load($conf_file);

global $DB;
global $allitems;
global $itemset_col;
global $UDWBaseconf;

//if (!$itemsets = load_cache(9, 'x')) {
if(1){
    unset($itemsets);

    $total = $DB->select('
        SELECT count(*) as t
        FROM ?_aowow_itemset
        ORDER by name_loc' . $_SESSION['locale'] . '
        {LIMIT ?d}',  ($UDWBaseconf['limit'] != 0) ? $UDWBaseconf['limit'] : DBSIMPLE_SKIP
    );

    $_page = new Page($total[0]['t'],50);

    $rows = $DB->select('
		SELECT ?#
		FROM ?_aowow_itemset
		ORDER by name_loc' . $_SESSION['locale'] . '
		LIMIT '.$_page->firstRow.',50', $itemset_col[0]
    );

    $itemsets = array();
    foreach ($rows as $numRow => $row)
        $itemsets[] = itemsetinfo2($row);

   // save_cache(9, 'x', $itemsets);
}
$smarty->assign('itemsets', $itemsets);
global $page;
$page = array(
    'Mapper' => false,
    'Book' => false,
    'Title' => $smarty->get_config_vars('Item_Sets'),
    'tab' => 0,
    'type' => 0,
    'typeid' => 0,
    'path' => '[0, 2]'
);
$smarty->assign('page', $page);
$smarty->assign('pagenew', $_page->show());

// --Передаем данные шаблонизатору--
// Количество MySQL запросов
$smarty->assign('mysql', $DB->getStatistics());
// Если хоть одна информация о вещи найдена - передаём массив с информацией о вещях шаблонизатору
if (isset($allitems))
    $smarty->assign('allitems', $allitems);
// Запускаем шаблонизатор
$smarty->display('itemsets.tpl');