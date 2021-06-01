<div class="challenge-instructions regular-expressions"><div><section id="description">
<p>Up until now, you've looked at regexes to do literal matches of strings. But sometimes, you might want to also match case differences.</p>
<p>Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. Examples of uppercase are <code>A</code>, <code>B</code>, and <code>C</code>. Examples of lowercase are <code>a</code>, <code>b</code>, and <code>c</code>.</p>
<p>You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the <code>i</code> flag. You can use it by appending it to the regex. An example of using this flag is <code>/ignorecase/i</code>. This regex can match the strings <code>ignorecase</code>, <code>igNoreCase</code>, and <code>IgnoreCase</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Write a regex <code>fccRegex</code> to match <code>freeCodeCamp</code>, no matter its case. Your regex should not match any abbreviations or variations with spaces.</p>
</section></div><hr/></div>