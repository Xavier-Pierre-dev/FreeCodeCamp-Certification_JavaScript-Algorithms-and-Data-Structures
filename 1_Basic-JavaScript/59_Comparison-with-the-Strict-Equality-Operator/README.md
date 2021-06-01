<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>Strict equality (<code>===</code>) is the counterpart to the equality operator (<code>==</code>). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.</p>
<p>If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.</p>
<p><strong>Examples</strong></p>
<pre class="language-js"><code class="language-js"><span class="token number">3</span> <span class="token operator">===</span>  <span class="token number">3</span>
<span class="token number">3</span> <span class="token operator">===</span> <span class="token string">'3'</span>
</code></pre>
<p>These conditions would return <code>true</code> and <code>false</code> respectively.</p>
<p>In the second example, <code>3</code> is a <code>Number</code> type and <code>'3'</code> is a <code>String</code> type.</p>
</section></div><hr/><div><section id="instructions">
<p>Use the strict equality operator in the <code>if</code> statement so the function will return the string <code>Equal</code> when <code>val</code> is strictly equal to <code>7</code></p>
</section></div><hr/></div>