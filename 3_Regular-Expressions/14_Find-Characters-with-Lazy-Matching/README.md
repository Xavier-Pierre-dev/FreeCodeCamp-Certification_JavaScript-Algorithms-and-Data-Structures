<div class="challenge-instructions regular-expressions"><div><section id="description">
<p>In regular expressions, a <dfn>greedy</dfn> match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a <dfn>lazy</dfn> match, which finds the smallest possible part of the string that satisfies the regex pattern.</p>
<p>You can apply the regex <code>/t[a-z]*i/</code> to the string <code>"titanic"</code>. This regex is basically a pattern that starts with <code>t</code>, ends with <code>i</code>, and has some letters in between.</p>
<p>Regular expressions are by default greedy, so the match would return <code>["titani"]</code>. It finds the largest sub-string possible to fit the pattern.</p>
<p>However, you can use the <code>?</code> character to change it to lazy matching. <code>"titanic"</code> matched against the adjusted regex of <code>/t[a-z]*?i/</code> returns <code>["ti"]</code>.</p>
<p><strong>Note:</strong> Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string with regular expressions is completely fine.</p>
</section></div><hr/><div><section id="instructions">
<p>Fix the regex <code>/&lt;.*&gt;/</code> to return the HTML tag <code>&lt;h1&gt;</code> and not the text <code>"&lt;h1&gt;Winter is coming&lt;/h1&gt;"</code>. Remember the wildcard <code>.</code> in a regular expression matches any character.</p>
</section></div><hr/></div>