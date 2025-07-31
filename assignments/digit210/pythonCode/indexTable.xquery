<html>
{
let $conspFiles := collection('personTestingOutput')
let $ents := $conspFiles//ent
let $entTypes := $ents/@type ! string() => distinct-values()
for $e in $entTypes
return
<table id="{$e}">
{
let $namesE := $conspFiles//ent[@type=$e]
let $distNamesE := $namesE ! normalize-space() => distinct-values()
for $t in $distNamesE
let $countT := $conspFiles//ent[. ! normalize-space() = $t] => count()
where $countT > 10
return
<tr>
<td>{$t}</td>
<td>{$countT}</td>
</tr>
}

</table>
}
</html>