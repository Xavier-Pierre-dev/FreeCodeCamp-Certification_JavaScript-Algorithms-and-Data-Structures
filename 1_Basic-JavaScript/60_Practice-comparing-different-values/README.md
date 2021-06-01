<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>In the last two challenges, we learned about the equality operator (<code>==</code>) and the strict equality operator (<code>===</code>). Let's do a quick review and practice using these operators some more.</p>
<p>If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.</p>
<p><strong>Examples</strong></p>
<p><code>3 == '3'</code> returns <code>true</code> because JavaScript performs type conversion from string to number. <code>3 === '3'</code> returns false because the types are different and type conversion is not performed.</p>
<p><strong>Note:</strong> In JavaScript, you can determine the type of a variable or a value with the <code>typeof</code> operator, as follows:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">typeof</span> <span class="token number">3</span>
<span class="token keyword">typeof</span> <span class="token string">'3'</span>
</code></pre>
<p><code>typeof 3</code> returns the string <code>number</code>, and <code>typeof '3'</code> returns the string <code>string</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>The <code>compareEquality</code> function in the editor compares two values using the equality operator. Modify the function so that it returns the string <code>Equal</code> only when the values are strictly equal.</p>
</section></div><hr/></div>