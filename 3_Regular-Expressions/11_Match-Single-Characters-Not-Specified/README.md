<div class="challenge-instructions regular-expressions"><div><section id="description">
<p>So far, you have created a set of characters that you want to match, but you could also create a set of characters that you do not want to match. These types of character sets are called <dfn>negated character sets</dfn>.</p>
<p>To create a negated character set, you place a caret character (<code>^</code>) after the opening bracket and before the characters you do not want to match.</p>
<p>For example, <code>/[^aeiou]/gi</code> matches all characters that are not a vowel. Note that characters like <code>.</code>, <code>!</code>, <code>[</code>, <code>@</code>, <code>/</code> and white space are matched - the negated vowel character set only excludes the vowel characters.</p>
</section></div><hr/><div><section id="instructions">
<p>Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.</p>
</section></div><hr/></div>