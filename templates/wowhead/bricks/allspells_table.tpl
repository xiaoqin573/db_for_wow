var _ = g_spells;
{strip}
	{foreach from=$data key=id item=item}
		_[{$id}]={ldelim}icon: '{$item.icon|strtolower|trim}'{rdelim};
	{/foreach}
{/strip}