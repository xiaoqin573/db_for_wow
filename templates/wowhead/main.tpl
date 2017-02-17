{config_load file="$conf_file"}
<html>
<head>
	{include file='head.tpl'}
	<style type="text/css">
{literal}
		.menu-buttons a { border-color: black }
		.news { position: relative; text-align: left; width: 415px; height: 191px; margin: 30px auto 0 auto; background: url(templates/wowhead/images/mainpage-bg-news-{/literal}{$language}{literal}.jpg) no-repeat }
		.news-list { padding: 26px 0 0 26px; margin: 0 }
		.news-list li { line-height: 2em }
		.news-img1 { position: absolute; left: 60px; top: 155px; width: 172px; height: 17px }
		.news-img2 { position: absolute; left: 246px; top: 48px; width: 145px; height: 127px }
		.news-talent { position: absolute; left: 240px; top: 29px; width: 152px; height: 146px }
{/literal}
	</style>
</head>
<body>
	<div id="layers"></div>
	<noscript><div id="noscript-bg"></div><div id="noscript-text"><b>{#js_err#}</div></noscript>
	<div id="home">
		<h1>{$title}</h1>
		<span id="menu-buttons-generic" class="menu-buttons" style="display:none;"></span>
		<script type="text/javascript">
			Menu.addButtons(ge('menu-buttons-generic'), mn_path);
		</script>
		<div class="pad"></div>

		<div id="toplinks" class="toplinks">
	{if $user}<a href="?user={$user.name}">{$user.name}</a>|<a href="?account=signout">{#Sign_out#}</a>{else}<a href="?account=signin">{#Sign_in#}</a>{/if}|<a href="javascript:;" id="language-changer">{#Language#} <small>&#9660;</small></a>
		</div>

		<script type="text/javascript">g_initLanguageChanger()</script>

		<div class="text-menu222 clearfix"></div>

		<div class="pad"></div>
		<div class="w380index">
		<form class="indexsrh clearfix" method="get" action="?" onsubmit="if(trim(this.elements[0].value) == '') return false">
			<input class="indexsrhbox" type="text" name="search" size="38" id="search-generic" /><input class="subbtn" type="submit" value="立即搜索" />
		</form>
		</div>
		<div class="indexhotsrh">
			热门搜索：
			<a href="" target="_blank">世界各地的宝箱刷新点</a><em>|</em>
			<a href="" target="_blank">职业套装</a><em>|</em>
			<a href="" target="_blank">五人副本</a><em>|</em>
			<a href="" target="_blank">团队副本</a><em>|</em>
			<a href="" target="_blank">草药刷新点</a><em>|</em>
			<a href="" target="_blank">矿石刷新点</a><em>|</em>
			
			<a href="" target="_blank">暗月马戏团</a>
		</div>
		<div class="indextongzhitxt">
			<a href="">1.12你必须知道的几件事</a>
		</div>
		
		<div class="w655index">
			<div class="w655allbox">
				<div>
					<p class="changyongtit">
						常用其他应用
					</p>
					<div class="changyonggj clearfix">
                        <a href="http://www.nfuwow.com/html/zhanshi/index.html" target="_blank">
                            <span class="tfm">
                                
                            </span>
                            <span>
                                天赋模拟器
                            </span>
                        </a>
                        <a href="http://www.nfuwow.com/plugin/lists.html" target="_blank">
                            <span class="chajian">
                                
                            </span>
                            <span>
                                插件下载站
                            </span>
                        </a>
                        <a href="http://www.nfuwow.com/search/lists.html?search_string=%E5%AE%8F%E5%91%BD%E4%BB%A4" target="_blank">
                            <span class="hml">
                                
                            </span>
                            <span>
                                宏命令库
                            </span>
                        </a>
                        <a href="http://www.nfuwow.com/Simple/detail/artid/148.html" target="_blank">
                            <span class="dyc">
                                
                            </span>
                            <span>
                                第一次玩
                            </span>
                        </a>
                        <a href="http://www.nfuwow.com/Simple/detail/artid/75.html" target="_blank">
                            <span class="khd">
                                
                            </span>
                            <span>
                                客户端下载
                            </span>
                        </a>
                      
                    </div>
				</div>
			</div>
			
		</div>
{if $news}
		<!--<div class="news">
			<div class="news-list text">
				<ul>
{foreach from=$news item=item}
					<li><div>{$item.text}</div></li>
{/foreach}
				</ul>
			</div>
		</div>-->
{/if}

		<script type="text/javascript">
			var _ = ge('search-generic');
			LiveSearch.attach(_);
			_.focus()
		</script>

                <div id="footer">
                {foreach from=$version item=item}
                    {$item.text}.
                {/foreach}
                    <br />用全球历史最悠久最好最全的魔兽数据库开源库WOWhead和Mangos，为此表示衷心的感谢。由NFU社区修复后开发，欢迎来到NFU社区<span style="color: #f00;">魔兽60级1.12版数据库-60级魔兽数据库</span>
                  
                </div>



{literal}
<script src="templates/wowhead/js/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript">

$(function(){
	var html = '<ul class="menu_1">';
	for(var i in mn_database){
		var twoHtml = '';
		if(typeof mn_database[i][3] != 'undefined') {
			var menu2 = mn_database[i][3];
			twoHtml += '<ul class="menu_2">';
				for(var ii in menu2){
					var threeHtml = '';
					if(typeof menu2[ii][3] != 'undefined') {
						var menu3 = menu2[ii][3];
						threeHtml += '<ul class="menu_3">';
						for(var iii in menu3){
							threeHtml += '<li><a href="'+menu3[iii][2]+'" style="color:purple;">'+menu3[iii][1]+'</a></li>';
						}
						threeHtml += '</ul>';
					}
					twoHtml += '<li><a href="'+menu2[ii][2]+'" style="color:blue;">'+menu2[ii][1]+threeHtml+'</a></li>';
				}
			twoHtml += '</ul>';
		}
		html += '<li><a href="'+mn_database[i][2]+'" style="color:red;">'+mn_database[i][1]+twoHtml+'</a></li>';
	}
	html += '</ul>';

	$(".text-menu222").html(html);


});
</script>
{/literal}
</body>
</html>