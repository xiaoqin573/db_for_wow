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

require_once('includes/allspells.php');
require_once('includes/page.php');

$smarty->config_load($conf_file, 'spells');

global $DB;
global $UDWBaseconf;
global $spell_cols;

@list($s1, $s2, $s3) = explode('.', $podrazdel);

$cache_str = (!isset($s1) ? 'x' : intval($s1)) . '_' . (!isset($s2) ? 'x' : intval($s2)) . '_' . (!isset($s3) ? 'x' : intval($s3));

//if (!$spells = load_cache(15, $cache_str)) {
if (1) {
    unset($spells);

    $spells = array();
    if ($s1 == 7) {
        $title = $smarty->get_config_vars('Class_spells');

        $total = $DB->select('
                SELECT count(*) as t
                FROM ?_aowow_spell s, ?_aowow_skill_line_ability sla, ?_aowow_spellicons i, ?_aowow_skill sk
                WHERE
                    s.spellID = sla.spellID
                    AND s.levelspell >= 1
                    AND i.id=s.spellicon
                    {AND sla.classmask = ?d}
                    {AND sla.skillID=?d}
                    AND sla.skillID=sk.skillID
            ', (isset($s2)) ? pow(2, ($s2 - 1)) : DBSIMPLE_SKIP, (isset($s3)) ? $s3 : DBSIMPLE_SKIP
        );

        $_page = new Page($total[0]['t'],50);

        // Классовые
        $rows = $DB->select('
				SELECT ?#, s.`spellID`, sk.skillID
				FROM ?_aowow_spell s, ?_aowow_skill_line_ability sla, ?_aowow_spellicons i, ?_aowow_skill sk
				WHERE
					s.spellID = sla.spellID
					AND s.levelspell >= 1
					AND i.id=s.spellicon
					{AND sla.classmask = ?d}
					{AND sla.skillID=?d}
					AND sla.skillID=sk.skillID
				ORDER BY s.levelspell
				LIMIT '.$_page->firstRow.',50
			', $spell_cols[2], (isset($s2)) ? pow(2, ($s2 - 1)) : DBSIMPLE_SKIP, (isset($s3)) ? $s3 : DBSIMPLE_SKIP
        );
    } elseif ($s1 > 0) {
        switch ($s1) {
            case 6:
                $title = $smarty->get_config_vars('Оружейные навыки');
                break;
            case 8:
                $title = $smarty->get_config_vars('Специализации брони');
                break;
            case 10:
                $title = $smarty->get_config_vars('Языки');
                break;
            case 9:
                $title = $smarty->get_config_vars('Вспомогательные профессии');
                break;
            case 11:
                $title = $smarty->get_config_vars('Профессии');
                break;
            default:
                $title = '???';
                break;
        }
        $spells['sort'] = "'skill', 'name'";

        $total = $DB->select('
            SELECT
               count(*) as t
            FROM ?_aowow_spell s, ?_aowow_skill_line_ability sla, ?_aowow_spellicons i, ?_aowow_skill sk
            WHERE
                s.spellID = sla.spellID
                AND i.id=s.spellicon
                {AND sk.categoryID=?d}
                {AND sla.skillID=?d}
                AND sla.skillID=sk.skillID
        ', $s1, (isset($s2)) ? $s2 : DBSIMPLE_SKIP
        );
        $_page = new Page($total[0]['t'],50);

        // Профессии & other
        $rows = $DB->select('
			SELECT
				?#, `s`.`spellID`,
				sla.skillID, sla.min_value, sla.max_value
			FROM ?_aowow_spell s, ?_aowow_skill_line_ability sla, ?_aowow_spellicons i, ?_aowow_skill sk
			WHERE
				s.spellID = sla.spellID
				AND i.id=s.spellicon
				{AND sk.categoryID=?d}
				{AND sla.skillID=?d}
				AND sla.skillID=sk.skillID
			LIMIT '.$_page->firstRow.',50
		', $spell_cols[2], $s1, (isset($s2)) ? $s2 : DBSIMPLE_SKIP
        );
    } elseif ($s1 == -3) {
        $title = $smarty->get_config_vars('Pet_spells');
        // Петы
        $spells['sort'] = "'name'";
        if (!isset($s2))
            $pets = array(270, 653, 210, 211, 213, 209, 214, 212, 763, 215, 654, 764, 655, 217, 767, 236, 768, 203, 218, 251, 766, 656, 208, 761, 189, 188, 205, 204);

        $total = $DB->select('
                SELECT
                   count(*) as t
                FROM ?_aowow_spell s, ?_aowow_skill_line_ability sla, ?_aowow_spellicons i, ?_aowow_skill sk
                WHERE
                    s.spellID = sla.spellID
                    AND s.levelspell > 0
                    AND i.id=s.spellicon
                    {AND sla.skillID=?d}
                    {AND sla.skillID IN (?a)}
                    AND sla.skillID=sk.skillID
            ', (isset($s2)) ? $s2 : DBSIMPLE_SKIP, (isset($pets)) ? $pets : DBSIMPLE_SKIP
        );
        $_page = new Page($total[0]['t'],50);

        $rows = $DB->select('
				SELECT
					?#, `s`.`spellID`, sk.skillID
				FROM ?_aowow_spell s, ?_aowow_skill_line_ability sla, ?_aowow_spellicons i, ?_aowow_skill sk
				WHERE
					s.spellID = sla.spellID
					AND s.levelspell > 0
					AND i.id=s.spellicon
					{AND sla.skillID=?d}
					{AND sla.skillID IN (?a)}
					AND sla.skillID=sk.skillID
				LIMIT '.$_page->firstRow.',50
			', $spell_cols[2], (isset($s2)) ? $s2 : DBSIMPLE_SKIP, (isset($pets)) ? $pets : DBSIMPLE_SKIP
        );
    }
    elseif ($s1 == -4) {
        $title = $smarty->get_config_vars('Racial_spells');
        $spells['sort'] = "'name'";

        $total = $DB->select('
            SELECT
                count(*) as t
            FROM ?_aowow_spell s, ?_aowow_spellicons i
            WHERE
                s.spellID IN (SELECT spellID FROM ?_aowow_skill_line_ability WHERE racemask>0)
                AND i.id=s.spellicon
      
            '
        );
        $_page = new Page($total[0]['t'],50);

        // Racial Traits
        $rows = $DB->select('
			SELECT
				?#, `s`.`spellID`
			FROM ?_aowow_spell s, ?_aowow_spellicons i
			WHERE
				s.spellID IN (SELECT spellID FROM ?_aowow_skill_line_ability WHERE racemask>0)
				AND i.id=s.spellicon
			LIMIT '.$_page->firstRow.',50
			', $spell_cols[2]
        );
    } elseif ($s1 == -2) {
        // Talents
        // todo
    } else {
        $spells['sort'] = "'name'";

        $total = $DB->select('
            SELECT
                count(*) as t
            FROM ?_aowow_spell s, ?_aowow_spellicons i
            WHERE
                i.id=s.spellicon
        '
        );
        $_page = new Page($total[0]['t'],50);

        // просто спеллы
        $rows = $DB->select('
			SELECT
				?#, `s`.`spellID`
			FROM ?_aowow_spell s, ?_aowow_spellicons i
			WHERE
				i.id=s.spellicon
			LIMIT '.$_page->firstRow.',50
		', $spell_cols[2]
        );
    }

    foreach ($rows as $i => $row)
        $spells['data'][] = spellinfo2($row);

    //save_cache(15, $cache_str, $spells);
}
global $page;
$page = array(
    'Mapper' => false,
    'Book' => false,
    'Title' => ($title ? $title . ' - ' : '') . $smarty->get_config_vars('Spells'),
    'tab' => 0,
    'type' => 6,
    'typeid' => 0,
    'path' => "[0, 1, " . intval($s1) . ", " . intval($s2) . ", " . intval($s3) . "]",
    'sort' => isset($spells['sort']) ? $spells['sort'] : "'level','name'"
);
$smarty->assign('page', $page);
$smarty->assign('pagenew', $_page->show());

// Статистика выполнения mysql запросов
$smarty->assign('mysql', $DB->getStatistics());
// Если хоть одна информация о вещи найдена - передаём массив с информацией о вещях шаблонизатору
if (isset($allitems))
    $smarty->assign('allitems', $allitems);
if (count($allspells) >= 0)
    $smarty->assign('allspells', $allspells);
if (count($spells) >= 0)
    $smarty->assign('spells', $spells['data']);
// Загружаем страницу
$smarty->display('spells.tpl');