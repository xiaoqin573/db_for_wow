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

// Необходима функция questinfo
require_once('includes/allquests.php');
require_once('includes/page.php');

$smarty->config_load($conf_file, 'quests');

// Разделяем из запроса класс и подкласс квестов
point_delim($podrazdel, $Type, $ZoneOrSort);

$cache_str = (empty($Type) ? 'x' : intval($Type)) . '_' . (empty($ZoneOrSort) ? 'x' : intval($ZoneOrSort));

//if (!$quests = load_cache(12, $cache_str)) {
if (1) {
    unset($quests);

    global $DB, $quest_class, $quest_cols;

    $total = $DB->select('
        SELECT count(*) as t
        FROM ?_quest_template q
        WHERE
            1 = 1
            { AND ZoneOrSort = ? }
            { AND ZoneOrSort IN (?a) }
        ', (IsSet($ZoneOrSort)) ? $ZoneOrSort : DBSIMPLE_SKIP, ((!IsSet($ZoneOrSort)) and $Type) ? $quest_class[$Type] : DBSIMPLE_SKIP
    );

    $_page = new Page($total[0]['t'],50);

    $rows = $DB->select('
		SELECT ?#
		FROM ?_quest_template q
		WHERE
			1 = 1
			{ AND ZoneOrSort = ? }
			{ AND ZoneOrSort IN (?a) }
		ORDER BY Title
		LIMIT '.$_page->firstRow.',50
		', $quest_cols[2], (IsSet($ZoneOrSort)) ? $ZoneOrSort : DBSIMPLE_SKIP, ((!IsSet($ZoneOrSort)) and $Type) ? $quest_class[$Type] : DBSIMPLE_SKIP
    );
    $quests = array();
    foreach ($rows as $numRow => $row)
        $quests[] = GetQuestInfo($row, QUEST_DATAFLAG_LISTINGS);

    //save_cache(12, $cache_str, $quests);
}

global $page;
$page = array(
    'Mapper' => false,
    'Book' => false,
    'Title' => $smarty->get_config_vars('Quests'),
    'tab' => 0,
    'type' => 0,
    'typeid' => 0,
    'path' => '[0, 3,' . $Type . ' ,' . $ZoneOrSort . ']'
);
$smarty->assign('page', $page);
$smarty->assign('pagenew', $_page->show());

// Если хоть одна информация о вещи найдена - передаём массив с информацией о вещях шаблонизатору
if ($allitems)
    $smarty->assign('allitems', $allitems);
if ($quests)
    $smarty->assign('quests', $quests);
// Количество MySQL запросов
$smarty->assign('mysql', $DB->getStatistics());
// Загружаем страницу
$smarty->display('quests.tpl');