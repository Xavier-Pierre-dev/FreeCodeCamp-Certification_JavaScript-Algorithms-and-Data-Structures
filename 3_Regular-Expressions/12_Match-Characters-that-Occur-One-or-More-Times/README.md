<div class="challenge-instructions regular-expressions"><div><section id="description">
<p>Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.</p>
<p>You can use the <code>+</code> character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.</p>
<p>For example, <code>/a+/g</code> would find one match in <code>abc</code> and return <code>["a"]</code>. Because of the <code>+</code>, it would also find a single match in <code>aabc</code> and return <code>["aa"]</code>.</p>
<p>If it were instead checking the string <code>abab</code>, it would find two matches and return <code>["a", "a"]</code> because the <code>a</code> characters are not in a row - there is a <code>b</code> between them. Finally, since there is no <code>a</code> in the string <code>bcd</code>, it wouldn't find a match.</p>
</section></div><hr/><div><section id="instructions">
<p>You want to find matches when the letter <code>s</code> occurs one or more times in <code>Mississippi</code>. Write a regex that uses the <code>+</code> sign.</p>
</section></div><hr/></div>