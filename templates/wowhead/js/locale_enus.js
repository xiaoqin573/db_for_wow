var mn_items = [[2, "武器", , [[0, "单手斧"], [1, "双手斧"], [2, "弓"], [3, "枪"], [4, "单手锤"], [5, "双手锤"], [6, "长柄武器"], [7, "单手剑"], [8, "双手剑"], [10, "法杖"], [13, "拳套"], [14, "杂物"], [15, "匕首"], [16, "投掷武器"], [18, "弩"], [19, "魔杖"], [20, "鱼竿"]], , "INV_Sword_27"], [4, "护甲", , [[1, "布甲" /*, , [[5, "Chest", "?items=4.1&filter=sl=5"], [8, "Feet", "?items=4.1&filter=sl=8"], [10, "Hands", "?items=4.1&filter=sl=10"], [1, "Head", "?items=4.1&filter=sl=1"], [7, "Legs", "?items=4.1&filter=sl=7"], [3, "Shoulder", "?items=4.1&filter=sl=3"], [6, "Waist", "?items=4.1&filter=sl=6"], [9, "Wrist", "?items=4.1&filter=sl=9"]]*/ ], [2, "皮甲" /*, , [[5, "Chest", "?items=4.2&filter=sl=5"], [8, "Feet", "?items=4.2&filter=sl=8"], [10, "Hands", "?items=4.2&filter=sl=10"], [1, "Head", "?items=4.2&filter=sl=1"], [7, "Legs", "?items=4.2&filter=sl=7"], [3, "Shoulder", "?items=4.2&filter=sl=3"], [6, "Waist", "?items=4.2&filter=sl=6"], [9, "Wrist", "?items=4.2&filter=sl=9"]]*/ ], [3, "锁甲" /*, , [[5, "Chest", "?items=4.3&filter=sl=5"], [8, "Feet", "?items=4.3&filter=sl=8"], [10, "Hands", "?items=4.3&filter=sl=10"], [1, "Head", "?items=4.3&filter=sl=1"], [7, "Legs", "?items=4.3&filter=sl=7"], [3, "Shoulder", "?items=4.3&filter=sl=3"], [6, "Waist", "?items=4.3&filter=sl=6"], [9, "Wrist", "?items=4.3&filter=sl=9"]]*/ ], [4, "板甲" /*, , [[5, "Chest", "?items=4.4&filter=sl=5"], [8, "Feet", "?items=4.4&filter=sl=8"], [10, "Hands", "?items=4.4&filter=sl=10"], [1, "Head", "?items=4.4&filter=sl=1"], [7, "Legs", "?items=4.4&filter=sl=7"], [3, "Shoulder", "?items=4.4&filter=sl=3"], [6, "Waist", "?items=4.4&filter=sl=6"], [9, "Wrist", "?items=4.4&filter=sl=9"]]*/ ], /*[ - 3, "Amulets"], [ - 6, "Cloaks"], [ - 2, "Rings"], [ - 4, "Trinkets"], [ - 5, "Off-hand Frills"],*/ [6, "盾牌"], [7, "圣契"], [8, "神像"], [9, "图腾"], [0, "其他"]], , "INV_Chest_Plate16"], [1, "容器", , [[0, "包"], [1, "灵魂袋"], [2, "草药袋"], [3, "附魔材料袋"], [4, "工程学材料袋"], [7, "制皮材料包"]], , "INV_Misc_Bag_13"], [0, "消耗品", , [[0, "消耗品"], [1, "药水"], [2, "药剂", , /*[[1, "Battle"], [2, "Guardian"]]*/ ], [3, "合剂"], [4, "卷轴"], [5, "食物和饮料"], [6, "物品强化"], /*[ - 3, "Temporary Item Enhancements"],*/ [7, "绷带"], [8, "其他"]], , "INV_Potion_07"], [7, "商品", , [[1, "零件"], [2, "爆炸物"], [3, "装置"], [5, "布料"], [6, "皮革"], [7, "金属和矿石"], [8, "肉类"], [9, "草药"], [10, "元素"], [12, "附魔材料"], [13, "原料"], [11, "其他"]], , "INV_Gizmo_BronzeFramework_01"], [6, "弹药", , [[2, "箭矢"], [3, "子弹"]], , "INV_Ammo_Bullet_02"], [11, "弹药袋", , [[2, "箭袋"], [3, "弹药袋"]], , "INV_Misc_Quiver_08"], [9, "配方", , [[0, "书籍"], [6, "炼金术"], [4, "锻造"], [5, "烹饪"], [8, "工程学"], [3, "工程学"], [7, "急救"], [9, "钓鱼"], [1, "制皮"], [2, "裁缝"]], , "INV_Scroll_04"], [15, "杂物", , [[0, "垃圾"], [1, "Reagents"], [3, "节日"], /*[ - 4, "Mounts"], [ - 7, "Flying Mounts"], [ - 6, "Combat Pets"],*/ [2, "宠物小伙伴"], /*[ - 2, "Armor Tokens"],*/ [4, "其他"]], , "INV_Qiraj_JewelBlessed"], [12, "任务", , , , "INV_Misc_Bone_OrcSkull_01"], [13, "钥匙", , , , "INV_Misc_Key_04"]];
var mn_itemSets = [[11, "德鲁伊"], [3, "猎人"], [8, "法师"], [2, "圣骑士"], [5, "牧师"], [4, "盗贼"], [7, "萨满祭司"], [9, "术士"], [1, "战士"]];
var mn_npcs = [[1, "野兽"], [8, "动物"], [3, "恶魔"], [2, "龙类"], [4, "元素"], [5, "巨人"], [7, "人类"], [9, "机械"], [12, "小动物"], [6, "亡灵"], [10, "未指定"]];
var mn_objects = [[9, "书籍"], [3, "容器"], [-5, "储物箱"], [-3, "草药"], [-4, "矿物"], [-2, "任务相关"]];
var mn_quests = [[0, "东部王国", , [[36, "奥特兰克山脉"], [45, "阿拉希高地"], [3, "荒芜之地"], [25, "黑石山"], [4, "诅咒之地"], [46, "燃烧平原"], [41, "逆风小径"], [2257, "矿道地铁"], [1, "丹莫罗"], [10, "暮色森林"], [139, "东瘟疫之地"], [12, "艾尔文森林"], [267, "希尔斯布莱德丘陵"], [1537, "铁炉堡"], [38, "洛克莫丹"], [44, "赤脊山"], [51, "灼热峡谷"], [130, "银松森林"], [1519, "暴风城"], [33, "荆棘谷"], [8, "悲伤沼泽"], [47, "辛特兰"], [85, "提瑞斯法林地"], [1497, "幽暗城"], [28, "西瘟疫之地"], [40, "西部荒野"], [11, "湿地"]]], [1, "卡利姆多", , [[331, "灰谷"], [16, "艾萨拉"], [148, "黑海岸"], [1657, "达纳苏斯"], [405, "凄凉之地"], [14, "杜隆塔尔"], [15, "尘泥沼泽"], [361, "费伍德森林"], [357, "菲拉斯"], [493, "月光林地"], [215, "莫高雷"], [1637, "奥格瑞玛"], [1377, "希利苏斯"], [406, "石爪山脉"], [440, "塔纳利斯"], [141, "泰达希尔"], [17, "贫瘠之地"], [400, "千针石林"], [1638, "雷霆崖"], [1216, "木喉要塞"], [490, "安戈洛环形山"], [618, "冬泉谷"]]], [2, "地下城", , [[719, "黑暗深渊"], [1584, "黑石深渊"], [1583, "黑石塔"], [2557, "厄运之槌"], [133, "诺莫瑞根"], [2100, "玛拉顿"], [2437, "怒焰裂谷"], [722, "剃刀高地"], [491, "剃刀沼泽"], [796, "血色修道院"], [2057, "通灵学院"], [209, "影牙城堡"], [2017, "斯坦索姆"], [1581, "死亡矿井"], [717, "暴风城监狱"], [1337, "奥达曼"], [718, "哀嚎洞穴"], [978, "祖尔法拉克"]]], [3, "团队副本", , [[2677, "黑翼之巢"], [2717, "熔火之心"], [3456, "纳克萨玛斯"], [2159, "奥妮克希亚的巢穴"], [3429, "安其拉废墟"], [3428, "安其拉神庙"], [19, "祖尔格拉布"]]], [4, "职业", , [[-263, "德鲁伊"], [-261, "猎人"], [-161, "法师"], [-141, "圣骑士"], [-262, "牧师"], [-162, "盗贼"], [-82, "萨满祭司"], [-61, "术士"], [-81, "战士"]]], [5, "专业", , [[-181, "炼金术"], [-121, "锻造"], [-304, "烹饪"], [-201, "工程学"], [-324, "急救"], [-101, "钓鱼"], [-24, "草药学"], [-182, "制皮"], [-264, "裁缝"]]], [6, "战场", , [[-25, "全部"], [3358, "阿拉希盆地"], [2597, "奥特兰克山谷"], [3277, "战歌峡谷"]]], [9, "节日", , [[-364, "暗月马戏团"], [-1003, "万圣节"], [-366, "Lunar Festival"], [-369, "火焰节"]]], [7, "其他", , [[-365, "安其拉战争"], [-241, "银白联赛"], [-1, "史诗"], [-344, "传奇"], [-367, "声望"]]], [-2, "未分类"]];
var mn_spells = [[7, "种族技能", , [[11, "德鲁伊", , [[574, "平衡"], [134, "野性战斗"], [573, "恢复"]]], [3, "猎人", , [[50, "野兽之王"], [163, "射击"], [51, "生存"]]], [8, "法师", , [[237, "奥术"], [8, "火焰"], [6, "冰霜"]]], [2, "圣骑士", , [[594, "神圣"], [267, "防护"], [184, "惩戒"]]], [5, "牧师", , [[613, "Discipline"], [56, "Holy"], [78, "Shadow Magic"]]], [4, "盗贼", , [[253, "Assassination"], [38, "Combat"], [633, "Lockpicking"], [39, "Subtlety"]]], [7, "萨满祭司", , [[375, "Elemental Combat"], [373, "Enhancement"], [374, "Restoration"]]], [9, "术士", , [[355, "Affliction"], [354, "Demonology"], [593, "Destruction"]]], [1, "战士", , [[26, "Arms"], [256, "Fury"], [257, "Protection"]]]]], [-3, "宠物技能", , [[782, "食尸鬼"], [, "猎人"], [270, "通用技能"], [653, "蝙蝠"], [210, "熊"], [655, "猛禽"], [211, "野猪"], [213, "秃鹰"], [209, "猫"], [780, "Chimera"], [787, "熔火恶犬"], [214, "螃蟹"], [212, "鳄鱼"], [781, "魔暴龙"], [763, "龙鹰"], [215, "大猩猩"], [654, "土狼"], [775, "蛾"], [217, "迅猛龙"], [767, "掠夺者"], [786, "犀牛"], [236, "蝎子"], [768, "蛇"], [783, "异种蝎"], [203, "蜘蛛"], [788, "灵魂兽"], [765, "龙"], [218, "鸵鸟"], [251, "乌龟"], [766, "扭曲行者"], [785, "Wasp"], [656, "风蛇"], [208, "狼"], [784, "蠕虫"], [, "术士"], [761, "恶魔守卫"], [189, "地狱猎犬"], [188, "小鬼"], [205, "魅魔"], [204, "虚空行者"]]], [11, "专业", , [[171, "炼金术"], [164, "锻造", , [[9788, "Armorsmithing"], [9787, "Weaponsmithing"], [17041, "Master Axesmithing"], [17040, "Master Hammersmithing"], [17039, "Master Swordsmithing"]]], [333, "附魔"], [202, "工程学", , [[20219, "Gnomish Engineering"], [20222, "Goblin Engineering"]]], [182, "草药学"], [165, "制皮", , [[10656, "Dragonscale Leatherworking"], [10658, "Elemental Leatherworking"], [10660, "部落制革"]]], [186, "采矿"], [393, "剥皮"], [197, "裁缝", , [[26798, "月布裁缝"], [26801, "Shadoweave Tailoring"], [26797, "Spellfire Tailoring"]]]]], [9, "辅助专业", , [[185, "烹饪"], [129, "急救"], [356, "钓鱼"], [762, "骑术"]]], [8, "护甲精通"], [10, "语言技能"], [-4, "种族特征"], [6, "武器技能"], [0, "未分类"]];
var mn_zones = [[0, "东部王国"], [1, "卡利姆多"], [2, "地下城"], [3, "团队副本"], [6, "战场"]];
var mn_talentCalc = [["0", "德鲁伊"], ["c", "猎人"], ["o", "法师"], ["s", "圣骑士"], ["b", "牧师"], ["f", "盗贼"], ["h", "萨满祭司"], ["I", "术士"], ["L", "战士"]];
var mn_database = [/*[, "Browse"],*/ [0, "物品", "?items", mn_items], [2, "套装", "?itemsets" ], [4, "NPC", "?npcs", mn_npcs], [5, "道具", "?objects", mn_objects], [3, "任务", "?quests", mn_quests], [1, "技能", "?spells", mn_spells], /*[6, "Zones", "?zones", mn_zones],*/ [7, "声望", "?factions"], [, "工具"], [30, "最新评论", "?latest=comments"] /*, [31, "Latest Screenshots", "?latest=screenshots"] */ ];
var mn_tools = [ /*[0, "Talent Calculator", "?talent", mn_talentCalc],*/ [1, "Maps", "?maps"]];
var mn_path = [[0, "NFU社区60数据库", , mn_database], [1, "Tools", , mn_tools]];
var g_chr_classes = {
    11: "Druid",
    3: "Hunter",
    8: "Mage",
    2: "Paladin",
    5: "Priest",
    4: "Rogue",
    7: "Shaman",
    9: "Warlock",
    1: "Warrior"
};
var g_chr_races = {
    3: "Dwarf",
    7: "Gnome",
    1: "Human",
    4: "Night Elf",
    2: "Orc",
    6: "Tauren",
    8: "Troll",
    5: "Undead"
};
var g_item_slots = {
    1: "head",
    2: "Neck",
    3: "Shoulder",
    4: "Shirt",
    5: "Chest",
    6: "Waist",
    7: "Legs",
    8: "Feet",
    9: "Wrist",
    10: "Hands",
    11: "Finger",
    12: "Trinket",
    13: "One-Hand",
    14: "Shield",
    15: "Ranged",
    16: "Back",
    17: "Two-Hand",
    18: "Bag",
    19: "Tabard",
    21: "Main Hand",
    22: "Off Hand",
    23: "Held In Off-hand",
    24: "Projectile",
    25: "Thrown",
    28: "Relic"
};
var g_item_classes = {
    5: "Reagent",
    12: "Quest",
    13: "Key"
};
var g_item_subclasses = {
    0: {
        0: "消耗品",
        1: "药剂",
        2: "药水",
        3: "瓶",
        4: "卷轴",
        5: "食物和饮料",
        6: "Perm. Enhancement",
        "-3": "Temp. Enhancement",
        7: "绷带",
        8: "其他(耗材)"
    },
    1: {
        0: "包",
        1: "灵魂袋",
        2: "草药袋",
        3: "附魔材料袋",
        4: "工程学材料袋",
        5: "制皮材料包"
    },
    2: {
        0: "单手斧",
        1: "双手斧",
        2: "弓",
        3: "枪械",
        4: "单手锤",
        5: "双手锤",
        6: "长柄武器",
        7: "单手剑",
        8: "双手剑",
        10: "法杖",
        13: "拳套",
        14: "其他",
        15: "匕首",
        16: "投掷武器",
        18: "弩",
        19: "魔杖",
        20: "鱼杆"
    },
    4: {
        "-6": "Cloak",
        "-5": "Off-hand Frill",
        "-4": "Trinket",
        "-3": "Amulet",
        "-2": "Ring",
        0: "Miscellaneous",
        1: "Cloth",
        2: "Leather",
        3: "Mail",
        4: "Plate",
        6: "Shield",
        7: "Libram",
        8: "Idol",
        9: "Totem"
    },
    6: {
        2: "Arrow",
        3: "Bullet"
    },
    7: {
        1: "Part",
        2: "Explosive",
        3: "Device",
        5: "Cloth",
        6: "Leather",
        7: "Metal & Stone",
        8: "Meat",
        9: "Herb",
        10: "Elemental",
        12: "Enchanting",
        11: "Other (Trade Goods)"
    },
    9: {
        0: "Book",
        1: "Leatherworking",
        2: "Tailoring",
        3: "Engineering",
        4: "Blacksmithing",
        5: "Cooking",
        6: "Alchemy",
        7: "First Aid",
        8: "Enchanting",
        9: "Fishing",
    },
    11: {
        2: "Quiver",
        3: "Ammo Pouch"
    },
    15: {
        "-6": "Combat Pet",
        "-4": "Mount",
        "-2": "Armor Token",
        0: "Junk",
        1: "Reagent",
        2: "Small Pet",
        3: "Holiday",
        4: "Other (Miscellaneous)"
    }
};
var g_item_subsubclasses = {
    0: {
        2: {
            1: "Battle Elixir",
            2: "Guardian Elixir"
        }
    }
};
var g_itemset_types = {
    1: "布甲",
    2: "皮甲",
    3: "锁甲",
    4: "板甲",
    5: "匕首",
    6: "戒指",
    7: "拳套",
    8: "单手斧",
    9: "单手锤",
    10: "单手剑",
    11: "饰品",
    12: "Amulet"
};
var g_itemset_notes = {
    1: "Dungeon Set 1",
    2: "Dungeon Set 2",
    3: "Tier 1 Raid Set",
    4: "Tier 2 Raid Set",
    5: "Tier 3 Raid Set",
    6: "Level 60 PvP Rare Set",
    7: "Level 60 PvP Rare Set (Old)",
    8: "Level 60 PvP Epic Set",
    15: "Arathi Basin Set",
    9: "Ruins of Ahn'Qiraj Set",
    10: "Temple of Ahn'Qiraj Set",
    11: "Zul'Gurub Set"
};
var g_npc_classifications = {
    0: "普通",
    1: "精英",
    2: "稀有精英",
    3: "首领",
    4: "罕见"
};
var g_npc_types = {
    1: "野兽",
    8: "Critter",
    3: "恶魔",
    4: "元素",
    2: "龙类",
    5: "巨人",
    7: "人形",
    9: "机械",
    6: "亡灵",
    10: "未分类",
    12: "小动物"
};
var g_object_types = {
    9: "书籍",
    3: "容器",
    "-5": "宝箱",
    "-3": "草药",
    "-4": "矿石",
    "-2": "任务相关"
};
var g_reputation_standings = {
    0: "令人讨厌的",
    1: "敌对",
    2: "不好善",
    3: "中立",
    4: "友好",
    5: "尊敬",
    6: "崇敬",
    7: "崇拜"
};
var g_quest_sorts = {
    1: "史诗",
    24: "草药学",
    25: "全部战场",
    61: "术士",
    81: "战士",
    82: "萨满祭司",
    101: "钓鱼",
    121: "锻造",
    141: "圣骑士",
    161: "法师",
    162: "盗贼",
    181: "Alchemy",
    182: "制皮",
    201: "工程学",
    221: "Treasure Map",
    261: "猎人",
    262: "牧师",
    263: "德鲁伊",
    264: "裁缝",
    284: "Special",
    304: "烹饪",
    324: "急救",
    344: "Legendary",
    364: "暗月马戏团",
    365: "安其拉战争",
    366: "Lunar Festival",
    367: "声望",
    369: "仲夏火焰节",
    370: "啤酒节",
    373: "珠宝加工",
    1001: "冬幕节",
    1002: "儿童节",
    1003: "万圣节",
    1004: "情人节",
    1005: "收获节",
    1006: "除夕"
};
var g_quest_types = {
    0: "普通",
    1: "五人副本",
    81: "地下城",
    62: "团队副本",
    41: "PvP",
    82: "世界事件",
    84: "护送任务",
    85: "Heroic"
};
var g_sides = {
    1: "联盟",
    2: "部落",
    3: "全部"
};
var g_sources = {
    1: "Crafted",
    2: "Drop",
    3: "PvP",
    4: "Quest",
    5: "Vendor",
    6: "Trainer",
    7: "Discovery",
    8: "Redemption"
};
var g_spell_resistances = {
    0: "Physical",
    1: "Holy",
    2: "Fire",
    3: "Nature",
    4: "Frost",
    5: "Shadow",
    6: "Arcane"
};
var g_spell_skills = {
    6: "冰霜",
    8: "火焰",
    26: "武器",
    38: "战斗",
    39: "敏锐",
    40: "毒药",
    43: "剑",
    44: "斧",
    45: "弓",
    46: "枪械",
    50: "野兽控制",
    51: "生存",
    54: "锤",
    55: "双手剑",
    56: "神圣",
    78: "暗影",
    95: "防护",
    98: "Common",
    101: "矮人语",
    109: "兽人语",
    111: "矮人",
    113: "达纳苏斯",
    115: "牛头人语",
    118: "双手武器",
    124: "牛头人",
    125: "兽人",
    126: "暗夜精灵",
    129: "急救",
    134: "野性战斗",
    136: "法杖",
    137: "Thalassian",
    138: "Draconic",
    139: "Demon Tongue",
    140: "泰坦",
    141: "古代语",
    142: "生存",
    148: "Horse Riding",
    149: "Wolf Riding",
    150: "Tiger Riding",
    152: "Ram Riding",
    155: "游泳",
    160: "双手锤",
    162: "缴械",
    163: "射击",
    164: "锻造",
    165: "制皮",
    171: "炼金术",
    172: "Two-Handed Axes",
    173: "Daggers",
    176: "Thrown",
    182: "Herbalism",
    183: "GENERIC (DND)",
    184: "惩戒",
    185: "Cooking",
    186: "Mining",
    188: "Imp",
    189: "Felhunter",
    197: "Tailoring",
    202: "Engineering",
    203: "Spider",
    204: "Voidwalker",
    205: "Succubus",
    206: "Infernal",
    207: "Doomguard",
    208: "Wolf",
    209: "Cat",
    210: "Bear",
    211: "Boar",
    212: "Crocilisk",
    213: "Carrion Bird",
    214: "Crab",
    215: "Gorilla",
    217: "Raptor",
    218: "Tallstrider",
    220: "Undead",
    226: "Crossbows",
    228: "Wands",
    229: "Polearms",
    236: "Scorpid",
    237: "Arcane",
    251: "Turtle",
    253: "刺杀",
    256: "狂暴",
    257: "防护",
    261: "野兽控制",
    267: "防护",
    270: "通用",
    293: "板甲",
    313: "侏儒",
    315: "巨魔",
    333: "Enchanting",
    354: "恶魔",
    355: "痛苦",
    356: "钓鱼",
    373: "增强",
    374: "恢复",
    375: "元素",
    393: "Skinning",
    413: "锁甲",
    414: "皮甲",
    415: "布甲",
    433: "盾牌",
    473: "拳套",
    533: "迅猛龙",
    553: "机械陆行鸟",
    554: "骸骨战马",
    573: "恢复",
    574: "平衡",
    593: "毁灭",
    594: "神圣",
    613: "惩戒",
    633: "开锁",
    653: "蝙蝠",
    654: "土狼",
    655: "猛禽",
    656: "Wind Serpent",
    673: "亡灵语",
    713: "科多兽",
    733: "巨魔",
    753: "侏儒",
    754: "人类",
    758: "Remote Control",
    762: "骑术",
};
var g_zones = {
    1: "丹莫罗",
    3: "荒芜之地",
    4: "诅咒之地",
    8: "悲伤沼泽",
    9: "北郡山谷",
    10: "暮色森林",
    11: "湿地",
    12: "艾尔文森林",
    14: "杜隆塔尔",
    15: "尘泥沼泽",
    16: "艾萨拉",
    17: "贫瘠之地",
    19: "祖尔格拉布",
    24: "北郡修道院",
    25: "黑石山",
    28: "西瘟疫之地",
    33: "荆棘谷",
    35: "藏宝海湾",
    36: "奥特兰克山脉",
    38: "洛克莫丹",
    40: "西部荒野",
    41: "逆风小径",
    44: "赤脊山",
    45: "阿拉希高地",
    46: "燃烧平原",
    47: "辛特兰",
    51: "灼热峡谷",
    65: "龙骨荒野",
    66: "祖尔德拉克",
    67: "风暴峭壁",
    85: "提瑞斯法林地",
    130: "银松森林",
    131: "卡拉诺斯",
    132: "寒脊山谷",
    133: "诺莫瑞根",
    139: "东瘟疫之地",
    141: "泰达希尔",
    148: "黑海岸",
    154: "丧钟镇",
    188: "幽影谷",
    209: "影牙要塞",
    210: "Icecrown",
    215: "莫高雷",
    220: "红云台地",
    221: "纳拉奇营地",
    267: "希尔斯布莱德丘陵",
    279: "Dalaran Crater",
    331: "灰谷",
    357: "菲拉斯",
    361: "费伍德森林",
    363: "试练谷",
    394: "灰熊丘陵",
    400: "千针石林",
    405: "凄凉之地",
    406: "石爪山脉",
    440: "塔纳利斯",
    457: "迷雾之海",
    490: "安戈洛环形山",
    491: "剃刀沼泽",
    493: "月光林地",
    495: "嚎风峡湾",
    618: "冬泉谷",
    702: "鲁瑟兰村",
    717: "暴风城监狱",
    718: "哀嚎洞穴",
    719: "黑暗深渊",
    722: "剃刀高地",
    796: "血色修道院",
    978: "祖尔法拉克",
    1116: "羽月要塞",
    1216: "木喉要塞",
    1337: "奥达曼",
    1377: "希利苏斯",
    1417: "沉没的神庙",
    1497: "幽暗城",
    1519: "暴风城",
    1537: "铁炉堡",
    1581: "死亡矿井",
    1583: "黑石山",
    1584: "黑石深渊",
    1637: "奥格瑞玛",
    1638: "雷霆崖",
    1657: "达纳苏斯",
    1941: "时光之穴",
    2017: "斯坦索姆",
    2057: "通灵学院",
    2079: "奥卡兹岛",
    2100: "玛拉顿",
    2159: "奥妮克希亚的巢穴",
    2257: "矿道地铁",
    2366: "黑色沼泽",
    2367: "旧希尔斯布莱德",
    2437: "怒焰裂谷",
    2557: "厄运之槌",
    2562: "卡拉赞",
    2597: "奥特兰克山谷",
    2677: "黑翼之巢",
    2717: "熔火之心",
    2817: "晶歌森林",
    2917: "传说大厅",
    2918: "勇士大厅",
    3277: "战歌峡谷",
    3358: "阿拉希盆地",
    3428: "安其拉神庙",
    3429: "安其拉废墟",
};
var g_zone_categories = {
    0: "东部王国",
    1: "卡利姆多",
    2: "地下城",
    3: "团队副本",
    6: "战场",
};
var g_zone_instancetypes = {
    1: "Transit",
    2: "Dungeon",
    3: "大型副本",
    4: "战场",
    5: "Dungeon",
};
var g_zone_territories = {
    0: "Alliance",
    1: "Horde",
    2: "Contested",
    3: "Sanctuary",
    4: "PvP"
};
var g_user_roles = {
    1: "Tester",
    2: "Administrator",
    3: "Editor",
    4: "Moderator",
    5: "Bureaucrat"
};
var LANG = {
    comma: ", ",
    ellipsis: "...",
    dash: " " + String.fromCharCode(8211) + " ",
    hyphen: " - ",
    colon: ": ",
    qty: " ($1)",
    date_on: "on ",
    date_ago: "$1 ago",
    date_at: " at ",
    date_simple: "$2/$1/$3",
    armor: "Armor",
    author: "Author",
    category: "位置",
    classes: "职业",
    cost: "价格",
    count: "Count",
    daily: "Daily",
    dps: "DPS",
    group: "Group",
    instancetype: "Instance type",
    lastpost: "Last post",
    level: "等级",
    location: "位置",
    name: "名称",
    react: "React",
    reagents: "材料",
    rep: "Rep.",
    req: "需求等级",
    reputation: "Reputation",
    rewards: "奖励",
    petfamily: "Pet family",
    pieces: "部件",
    posted: "Posted",
    preview: "Preview",
    replies: "Replies",
    school: "School",
    side: "Side",
    source: "Source",
    skill: "技能",
    skin: "Skin",
    slot: "Slot",
    slots: "Slots",
    speed: "Speed",
    stack: "Stack",
    standing: "Standing",
    stock: "数量",
    subject: "Subject",
    territory: "Territory",
    tp: "TP",
    type: "类型",
    views: "Views",
    male: "Male",
    female: "Female",
    infobox_noneyet: "None yet &ndash; $1!",
    infobox_submitone: "Submit one",
    infobox_showall: "Show all ($1)",
    lvcomment_add: "Add your comment",
    lvcomment_sort: "Sort comments by: ",
    lvcomment_sortdate: "Date",
    lvcomment_sortrating: "Highest rated first",
    lvcomment_by: "By ",
    lvcomment_patch1: " (Patch ",
    lvcomment_patch2: ")",
    lvcomment_show: "Show comment",
    lvcomment_hide: "Hide comment",
    lvcomment_rating: "Rating: ",
    lvcomment_lastedit: "Last edited by ",
    lvcomment_nedits: "edited $1 times",
    lvcomment_edit: "Edit",
    lvcomment_delete: "Delete",
    lvcomment_detach: "Detach",
    lvcomment_reply: "Reply",
    lvdrop_outof: "out of $1",
    lvitem_reqlevel: "Req. ",
    lvnpc_alliance: "联盟",
    lvnpc_horde: "部落",
    lvquest_daily: "Daily $1",
    lvquest_pickone: "Pick one:",
    lvquest_alsoget: "Also get:",
    lvquest_xp: "$1 XP",
    lvzone_xman: "$1-man",
    lvzone_xvx: "$1v$2",
    lvpage_of: " 到 ",
    lvpage_first: " 首页",
    lvpage_previous: "上一页",
    lvpage_next: "下一页 ",
    lvpage_last: "末页 ",
    lvscreenshot_submit: "Submit a screenshot",
    lvscreenshot_from: "From ",
    lvscreenshot_hires: "View",
    lvscreenshot_hires2: " higher resolution version ($1x$2)",
    lvnodata: "There is no data to display.",
    lvnodata_co1: "No comments have been posted yet.",
    lvnodata_co2: "Be the first to <a>add a comment</a> to this page!",
    lvnodata_co3: "Please <a>sign in</a> to add your comment, or <a>sign up</a> if you don't already have an account.",
    lvnodata_ss1: "No screenshots have been submitted yet.",
    lvnodata_ss2: "Be the first to <a>submit a screenshot</a> for this page!",
    lvnodata_ss3: "Please <a>sign in</a> to submit a screenshot, or <a>sign up</a> if you don't already have an account.",
    lvnote_tryfiltering: 'Try <a href="javascript:;" onclick="fi_Toggle()">filtering</a> your results',
    lvnote_trynarrowing: "Try narrowing your search",
    lvnote_itemsfound: "$1 items found",
    lvnote_itemsetsfound: "$1 item sets found",
    lvnote_npcsfound: "$1 NPCs found",
    lvnote_objectsfound: "$1 objects found",
    lvnote_questsfound: "$1 quests found",
    lvnote_spellsfound: "$1 spells found",
    lvnote_zonesfound: "$1 zones found",
    lvnote_factionsfound: "$1 factions found",
    lvnote_createafilter: '<small><a href="$1">Create a filter</a></small>',
    lvnote_questgivers: '<small><a href="?zone=$1">View</a> quest givers in <b>$2</b> &nbsp;<b>|</b>&nbsp; <a href="?items&filter=cr=126;crs=$3;crv=0">Filter</a> quest rewards</small>',
    lvnote_allpets: '<small><a href="?npcs&filter=fa=$1">Browse</a> all available <b>$2</b> pets</small>',
    lvnote_zonequests: '<small><a href="?quests=$1.$2">Browse quests</a> in the <b>$3</b> category &nbsp;<b>|</b>&nbsp; <a href="?items&filter=cr=126;crs=$4;crv=0">Filter</a> quest rewards</small>',
    lvnote_itemdisenchanting: "This item has been disenchanted $1 times.",
    lvnote_itemdropsinnormalonly: "This item only drops in Normal mode.",
    lvnote_itemdropsinheroiconly: "This item only drops in Heroic mode.",
    lvnote_itemdropsinnormalheroic: "This item drops in both Normal and Heroic modes.",
    lvnote_itemopening: "This item has been opened $1 times.",
    lvnote_itemprospecting: "This mineral ore has been prospected $1 times.",
    lvnote_npcdrops: "This NPC has been looted $1 times.",
    lvnote_npcdropsnormal: "This NPC has been looted $1 times in Normal mode.",
    lvnote_npcdropsheroic: "This NPC has been looted $1 times in Heroic mode.",
    lvnote_npcherbgathering: "This NPC has been skinned with Herbalism $1 times.",
    lvnote_npcmining: "This NPC has been skinned with Mining $1 times.",
    lvnote_npcpickpocketing: "This NPC has been pickpocketed $1 times.",
    lvnote_npcskinning: "This NPC has been skinned $1 times.",
    lvnote_objectherbgathering: "This herb has been gathered $1 times.",
    lvnote_objectmining: "This mineral vein has been mined $1 times.",
    lvnote_objectopening: "This object has been opened $1 times.",
    lvnote_objectopeningnormal: "This object has been opened $1 times in Normal mode.",
    lvnote_objectopeningheroic: "This object has been opened $1 times in Heroic mode.",
    lvnote_zonefishing: "Waters in this zone have been fished $1 times.",
    lvnote_usercomments: "This user has posted a total of $1 comments.",
    lvnote_userscreenshots: "This user has submitted a total of $1 screenshots.",
    lvnote_usertopics: "This user has posted a total of $1 topics.",
    lvnote_userreplies: "This user has posted a total of $1 replies.",
    message_ajaxnotsupported: "Please upgrade to a modern browser (such as Firefox) that supports 'Ajax' requests.",
    message_codenotentered: "You did not enter the code.",
    message_cantdeletecomment: "This comment has been automatically purged due to a negative rating. It cannot be deleted.",
    message_cantdetachcomment: "This comment has already been detached.",
    message_commentdetached: "This comment is now detached.",
    message_noscreenshot: "Please select the screenshot to upload.",
    message_forumposttooshort: "Your post is empty!",
    message_commenttooshort: "Your comment must be at least 10 characters long.\n\nPlease elaborate a little.",
    message_descriptiontooshort: "Your description must be at least 10 characters long.\n\nPlease elaborate a little.",
    message_ingamelink: "Shift-click this to place a link into a chat message: $1",
    message_entercurrpass: "Please enter your current password.",
    message_enternewpass: "Please enter your new password.",
    message_newpassdifferent: "Your new password must be different than your previous one.",
    message_passwordsdonotmatch: "Passwords do not match.",
    message_enternewemail: "Please enter your new email address.",
    message_newemaildifferent: "Your new email address must be different than your previous one.",
    message_emailnotvalid: "That email address is not valid.",
    message_enterusername: "Please enter your username.",
    message_enterpassword: "Please enter your password.",
    message_enteremail: "Please enter your email address.",
    message_usernamenotvalid: "Your username can only contain letters and numbers.",
    message_usernamemin: "Your username must be at least 4 characters long.",
    message_passwordmin: "Your password must be at least 6 characters long.",
    message_saved: "Saved.",
    confirm_deletecomment: "Are you sure that you want to delete this comment?",
    confirm_detachcomment: "Are you sure that you want to make this comment a standalone one?",
    confirm_commenttoolong: "Your comment is longer than 7500 characters and will be truncated after:\n\n$1\n\nDo you want to proceed anyway?",
    confirm_descriptiontoolong: "Your description is longer than 7500 characters and will be truncated after:\n\n$1\n\nDo you want to proceed anyway?",
    confirm_forumposttoolong: "Your post is longer than 7500 characters and will be truncated after:\n\n$1\n\nDo you want to proceed anyway?",
    confirm_signaturetoolong: "Your signature is longer than 250 characters and will be truncated after:\n\n$1\n\nDo you want to proceed anyway?",
    confirm_signaturetoomanylines: "Your signature contains more than 3 lines and will be truncated.\n\nDo you want to proceed anyway?",
    prompt_customrating: "Please enter a rating value between -$1 and $2:",
    prompt_linkurl: "Please enter the URL of your link:",
    prompt_ratinglevel: "Please enter the level used in the calculation (1 - 70):",
    prompt_ingamelink: "Copy/paste the following to your in-game chat window:",
    tooltip_dailyquest: "You may complete up to<br />25 daily quests per day.",
    tooltip_extendedquestsearch: "Check this option to search in the<br />objectives and description as well.",
    tooltip_extendedspellsearch: "Check this option to search in the<br />description and buff as well.",
    tooltip_sellsfor: "Sells for $1",
    tooltip_zonelink: "Clicking on this link will<br />take you to the zone page.",
    tooltip_combatrating: "$1&nbsp;@&nbsp;L$2",
    tooltip_armorbonus: "Has $1 more armor than the default<br />range for this armor type.",
    tooltip_reqlevel: "Required level",
    tooltip_repgain: "Reputation gain",
    tooltip_trainingpoints: "Training points",
    tooltip_honorpoints: "Honor Points",
    tooltip_arenapoints: "Arena Points",
    tooltip_customrating: "Custom rating",
    tooltip_uprate: "Insightful/funny",
    tooltip_downrate: "Poor/redundant",
    tooltip_normal: "Normal",
    tooltip_sticky: "Sticky",
    tooltip_pending: "Pending",
    tooltip_totaldatauploads: "Total size of all data uploads",
    tooltip_totalratings: "Sum of the ratings of all of their comments",
    tooltip_avgmoneycontained: "Average money contained",
    tooltip_avgmoneydropped: "Average money dropped",
    tooltip_buyoutprice: "Average buyout price (AH)",
    tooltip_reqenchanting: "Required enchanting skill",
    tooltip_reqjewelcrafting: "Required jewelcrafting skill",
    tooltip_reqlockpicking: "Required lockpicking skill",
    tooltip_partyloot: "When this item drops, each<br />member of the group can loot one.",
    tooltip_loading: "Loading...",
    tooltip_noresponse: "No response from server :(",
    tooltip_itemnotfound: "Item not found :(",
    tooltip_questnotfound: "Quest not found :(",
    tooltip_spellnotfound: "Spell not found :(",
    tooltip_captcha: "Click to generate a new one",
    tab_items: "Items",
    tab_itemsets: "Item sets",
    tab_npcs: "NPCs",
    tab_objects: "Objects",
    tab_quests: "Quests",
    tab_zones: "Zones",
    tab_abilities: "Abilities",
    tab_recipes: "Recipes",
    tab_skills: "Skills",
    tab_uncategorizedspells: "Uncategorized spells",
    tab_factions: "Factions",
    tab_articles: "Articles",
    tab_bosses: "Bosses",
    tab_canbeplacedin: "Can be placed in",
    tab_cancontain: "Can contain",
    tab_comments: "Comments",
    tab_containedin: "Contained in",
    tab_contains: "Contains",
    tab_createdby: "Created by",
    tab_currencyfor: "Currency for",
    tab_disenchantedfrom: "Disenchanted from",
    tab_disenchanting: "Disenchanting",
    tab_droppedby: "Dropped by",
    tab_drops: "Drops",
    tab_ends: "Ends",
    tab_fishedin: "Fished in",
    tab_fishing: "Fishing",
    tab_gatheredfrom: "Gathered from",
    tab_herbalism: "Herbalism",
    tab_heroicdrops: "Heroic drops",
    tab_latestcomments: "Latest comments",
    tab_latestreplies: "Latest replies",
    tab_latestscreenshots: "Latest screenshots",
    tab_latesttopics: "Latest topics",
    tab_members: "Members",
    tab_minedfrom: "Mined from",
    tab_mining: "Mining",
    tab_normaldrops: "Normal drops",
    tab_objectiveof: "Objective of",
    tab_pickpocketedfrom: "Pickpocketed from",
    tab_pickpocketing: "Pickpocketing",
    tab_prospectedfrom: "Prospected from",
    tab_prospecting: "Prospecting",
    tab_providedfor: "Provided for",
    tab_questrewards: "Quest rewards",
    tab_reagentfor: "Reagent for",
    tab_replies: "Replies",
    tab_rewardfrom: "Reward from",
    tab_samemodelas: "Same model as",
    tab_screenshots: "Screenshots",
    tab_seealso: "See also",
    tab_sharedcooldown: "Shared cooldown",
    tab_skinnedfrom: "Skinned from",
    tab_skinning: "Skinning",
    tab_sells: "Sells",
    tab_soldby: "Sold by",
    tab_starts: "Starts",
    tab_taughtby: "Taught by",
    tab_teaches: "Teaches",
    tab_toolfor: "Tool for",
    tab_topics: "Topics",
    tab_triggeredby: "Triggered by",
    tab_unlocks: "Unlocks",
    tab_usedby: "Used by",
    tab_addyourcomment: "Add your comment",
    tab_submitascreenshot: "Submit a screenshot",
    book_of: " of ",
    book_previous: " Previous",
    book_next: "Next ",
    mapper_tipzoom: "Tip: Click map to zoom",
    mapper_tippin: "Tip: Click map to add/remove pins",
    mapper_hidepins: "[hide pins]",
    mapper_showpins: "[show pins]",
    showonmap: "Show on map...",
    som_questgivers: "Quest givers",
    markup_b: "Bold",
    markup_i: "Italic",
    markup_u: "Underline",
    markup_s: "Strikethrough",
    markup_small: "Small text",
    markup_url: "Link",
    markup_quote: "Quote box",
    markup_code: "Code box",
    markup_ul: "Unordered list (bullets)",
    markup_ol: "Ordered list (numbers)",
    markup_li: "List item",
    markup_said: "said:",
    compose_mode: "Mode:",
    compose_edit: "Edit",
    compose_preview: "Preview",
    compose_livepreview: "Live Preview",
    compose_save: "Save",
    compose_cancel: "Cancel",
    compose_limit: "Up to $1 characters.",
    compose_limit2: "Up to $1 characters and/or 3 lines.",
    user_nodescription: "This user hasn't composed one yet.",
    user_nodescription2: "You haven't composed one yet.",
    user_composeone: "Compose one now!",
    user_editdescription: "Edit",
    myaccount_passmatch: "Passwords match",
    myaccount_passdontmatch: "Passwords do not match",
    types: {
        1: ["NPC", "NPC", "NPCs", "NPCs"],
        2: ["Object", "object", "Objects", "objects"],
        3: ["Item", "item", "Items", "items"],
        4: ["Item Set", "item set", "Item Sets", "item sets"],
        5: ["Quest", "quest", "Quests", "quests"],
        6: ["Spell", "spell", "Spells", "spells"],
        7: ["Zone", "zone", "Zones", "zones"],
        8: ["Faction", "faction", "Factions", "factions"]
    },
    timeunitssg: ["year", "month", "week", "day", "hour", "minute", "second"],
    timeunitspl: ["years", "months", "weeks", "days", "hours", "minutes", "seconds"],
    timeunitsab: ["yr", "mo", "wk", "", "hr", "min", "sec"]
};
