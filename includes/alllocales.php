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

/**
 *
 * @param type $d
 * @param type $v 
 */
function d($d, $v) {
    define($d, $v);
}

switch ($_SESSION['locale']) {
    // --- ENGLISH default LOCALE ---
    default:
        // quest
        d('LOCALE_REQUIREMENTS', 'Requirements');
        // classes
        d('LOCALE_WARRIOR', '战士');
        d('LOCALE_PALADIN', '圣骑士');
        d('LOCALE_HUNTER', '猎人');
        d('LOCALE_ROGUE', '潜行者');
        d('LOCALE_PRIEST', '牧师');
        d('LOCALE_SHAMAN', '萨满祭司');
        d('LOCALE_MAGE', '法师');
        d('LOCALE_WARLOCK', '术士');
        d('LOCALE_DRUID', '德鲁伊');
        // races
        d('LOCALE_HUMAN', 'Human');
        d('LOCALE_ORC', 'Orc');
        d('LOCALE_DWARF', 'Dwarf');
        d('LOCALE_NIGHT_ELF', 'Night Elf');
        d('LOCALE_UNDED', 'Undead');
        d('LOCALE_TAUREN', 'Tauren');
        d('LOCALE_GNOME', 'Gnome');
        d('LOCALE_TROLL', 'Troll');
        // side
        d('LOCALE_BOTH', 'Both');
        d('LOCALE_HORDE', 'Horde');
        d('LOCALE_ALLIANCE', 'Alliance');
        // reputation
        d('LOCALE_NEUTRAL', '中立');
        d('LOCALE_FRIENDLY', '友善');
        d('LOCALE_HONORED', '尊敬');
        d('LOCALE_REVERED', '崇敬');
        d('LOCALE_EXALTED', '崇拜');
        // resistances
        d('LOCALE_FIRE_RESISTANCE', '火焰抗性');
        d('LOCALE_FROST_RESISTANCE', '冰霜抗性');
        d('LOCALE_ARCANE_RESISTANCE', '奥术抗性');
        d('LOCALE_SHADOW_RESISTANCE', '暗影抗性');
        d('LOCALE_NATURE_RESISTANCE', '自然抗性');
        d('LOCALE_HOLY_RESISTANCE', 'RESISTANCE DOES NOT EXIST');
        // binds
        d('LOCALE_BIND_PICKUP', '拾取后绑定');
        d('LOCALE_BIND_EQUIP', '装备后绑定');
        d('LOCALE_BIND_USE', '使用后绑定');
        d('LOCALE_BIND_SOULBOUND', '灵魂绑定');
        d('LOCALE_BIND_QUEST_ITEM', '任务物品');
        // bags
        d('LOCALE_BAG', '容器');
        d('LOCALE_BAG_QUIVER', 'Quiver');
        d('LOCALE_BAG_AMMO', 'Ammo Pouch');
        d('LOCALE_BAG_SOUL', 'Soul Bag');
        d('LOCALE_BAG_LEATHER', 'Leatherworking Bag');
        d('LOCALE_BAG_HERB', 'Herb Bag');
        d('LOCALE_BAG_ENCHANT', 'Enchanting bag');
        d('LOCALE_BAG_ENGINEER', 'Engineering Bag');
        d('LOCALE_BAG_MINING', 'Mining Bag');
        // equip slots
        d('LOCALE_EQUIP_HEAD', '头部');
        d('LOCALE_EQUIP_NECK', '颈部');
        d('LOCALE_EQUIP_SHOULDER', '肩膀');
        d('LOCALE_EQUIP_SHIRT', '衬衫');
        d('LOCALE_EQUIP_CHEST', '胸部');
        d('LOCALE_EQUIP_WAIST', '腰部');
        d('LOCALE_EQUIP_LEGS', '腿部');
        d('LOCALE_EQUIP_FEET', '脚');
        d('LOCALE_EQUIP_WRIST', '手腕');
        d('LOCALE_EQUIP_HANDS', '手套');
        d('LOCALE_EQUIP_FINGER', '手指');
        d('LOCALE_EQUIP_TRINKET', '饰品');
        d('LOCALE_EQUIP_ONEHAND', '单手');
        d('LOCALE_EQUIP_OFFHAND', '副手');
        d('LOCALE_EQUIP_RANGED', '远程');
        d('LOCALE_EQUIP_BACK', '背部');
        d('LOCALE_EQUIP_TWOHAND', '双手');
        d('LOCALE_EQUIP_UNK0', '');
        d('LOCALE_EQUIP_TABARD', '战袍');
        d('LOCALE_EQUIP_MAINHAND', '主手');
        d('LOCALE_EQUIP_CHEST2', '胸部');
        d('LOCALE_EQUIP_OFFHAND2', '单手');
        d('LOCALE_EQUIP_HELDINOFFHAND', '副手物品');
        d('LOCALE_EQUIP_PROJECTILE', '弹药');
        d('LOCALE_EQUIP_THROWN', '远程');
        d('LOCALE_EQUIP_RANGED2', '远程');
        d('LOCALE_EQUIP_UNK1', '');
        d('LOCALE_EQUIP_RELIC', '圣物');
        // armor type
        d('LOCALE_ARMOR_CLOTH', '布甲');
        d('LOCALE_ARMOR_LEATHER', '皮甲');
        d('LOCALE_ARMOR_MAIL', '锁甲');
        d('LOCALE_ARMOR_PLATE', '板甲');
        d('LOCALE_ARMOR_BUCKLER', '');
        d('LOCALE_ARMOR_SHIELD', '盾牌');
        d('LOCALE_ARMOR_LIBRAM', '圣契');
        d('LOCALE_ARMOR_IDOL', '神像');
        d('LOCALE_ARMOR_TOTEM', '图腾');
        // weapon type
        d('LOCALE_WEAPON_AXE1H', '斧');
        d('LOCALE_WEAPON_AXE2H', '斧');
        d('LOCALE_WEAPON_BOW', '弓');
        d('LOCALE_WEAPON_GUN', '枪');
        d('LOCALE_WEAPON_MACE1H', '锤');
        d('LOCALE_WEAPON_MACE2H', '锤');
        d('LOCALE_WEAPON_POLEARM', '长柄武器');
        d('LOCALE_WEAPON_SWORD1H', '剑');
        d('LOCALE_WEAPON_SWORD2H', '剑');
        d('LOCALE_WEAPON_OBSOLETE', '');
        d('LOCALE_WEAPON_STAFF', '法杖');
        d('LOCALE_WEAPON_EXOTIC', '');
        d('LOCALE_WEAPON_EXOTIC2', '');
        d('LOCALE_WEAPON_FIST', '拳套');
        d('LOCALE_WEAPON_MISC', '杂项');
        d('LOCALE_WEAPON_DAGGER', '匕首');
        d('LOCALE_WEAPON_THROWN', '投掷武器');
        d('LOCALE_WEAPON_SPEAR', '');
        d('LOCALE_WEAPON_CROSSBOW', '弩');
        d('LOCALE_WEAPON_WAND', '魔杖');
        d('LOCALE_WEAPON_FISHINGPOLE', '鱼杆');
        // projectile type
        d('LOCALE_PROJECTILE_WAND', '');
        d('LOCALE_PROJECTILE_BOLT', '');
        d('LOCALE_PROJECTILE_ARROW', '箭矢');
        d('LOCALE_PROJECTILE_BULLET', '子弹');
        d('LOCALE_PROJECTILE_THROWN', '');
        // damage
        d('LOCALE_DAMAGE_PRE', ' ');
        d('LOCALE_DAMAGE_POST', '伤害');
        d('LOCALE_DAMAGE_HOLY', 'Holy');
        d('LOCALE_DAMAGE_FIRE', 'Fire');
        d('LOCALE_DAMAGE_FROST', 'Frost');
        d('LOCALE_DAMAGE_ARCANE', 'Arcane');
        d('LOCALE_DAMAGE_SHADOW', 'Shadow');
        d('LOCALE_DAMAGE_NATURE', 'Nature');
        // stats
        d('LOCALE_STAT_STRENGTH', ' 力量');
        d('LOCALE_STAT_STAMINA', ' 耐力');
        d('LOCALE_STAT_INTELLECT', ' 智力');
        d('LOCALE_STAT_SPIRIT', ' 精神');
        d('LOCALE_STAT_AGILITY', ' 敏捷');
        // green bonuses
        d('LOCALE_GBONUS_DEFENCE', 'Increases defense rating by %d.');
        d('LOCALE_GBONUS_DODGE', 'Increases your dodge rating by %d.');
        d('LOCALE_GBONUS_PARRY', 'Increases your parry rating by %d.');
        d('LOCALE_GBONUS_SHIELDBLOCK', 'Increases your shield block rating by %d.');
        d('LOCALE_GBONUS_SPELLHIT_RATING', 'Improves spell hit rating by %d.');
        d('LOCALE_GBONUS_MELEECRIT_RATING', 'Improves melee critical strike rating by %d.');
        d('LOCALE_GBONUS_RANGEDCRIT_RATING', 'Improves ranged critical strike rating by $d.');
        d('LOCALE_GBONUS_SPELLCRIT_RATING', 'Improves spell critical strike rating by %d.');
        d('LOCALE_GBONUS_SPELLHASTE_RATING', 'Improves spell haste rating by %d.');
        d('LOCALE_GBONUS_HIT_RATING', 'Increases your hit rating by %d.');
        d('LOCALE_GBONUS_CRIT_RATING', 'Increases your critical strike rating by %d.');
        d('LOCALE_GBONUS_RESILIENCE_RATING', 'Improves your resilience rating by %d.');
        d('LOCALE_GBONUS_HASTE_RATING', 'Improves haste rating by %d.');
        d('LOCALE_GBONUS_EXPERTISE_RATING', 'Increases your expertise rating by %d.');
        d('LOCALE_GBONUS_RESTOREMANA', 'Restores %d mana per 5 sec.');
        d('LOCALE_GBONUS_ATTACKPOWER', 'Increases attack power by %d.');
        d('LOCALE_GBONUS_ARMORPENETRATION', 'Increases your armor penetration rating by %d.');
        d('LOCALE_GBONUS_SPELLPOWER', 'Improves spell power by %d.');
        d('LOCALE_GBONUS_UNKNOWN', 'Unknown Bonus #%d');
        d('LOCALE_GBONUS_CHANCEONHIT', '击中时可能: ');
        d('LOCALE_GBONUS_EQUIP', '装备: ');
        d('LOCALE_GBONUS_USE', '使用: ');

        // misc
        d('LOCALE_SPEED', '速度');
        d('LOCALE_UNIQUE', '唯一');
        d('LOCALE_START_QUEST', 'This Item Begins a Quest');
        d('LOCALE_SLOT', ' 格 ');
        d('LOCALE_DPS', '每秒伤害');
        d('LOCALE_DPS2', '每秒伤害');
        d('LOCALE_DPS_ADDS', 'Adds');
        d('LOCALE_ARMOR', '点护甲');
        d('LOCALE_BLOCK', '点格挡');
        d('LOCALE_REQUIRES', '需求');
        d('LOCALE_REQUIRES_LEVEL', '需要等级');
        d('LOCALE_DURABILITY', '耐久度');
        d('LOCALE_CLASSES', '职业');
}