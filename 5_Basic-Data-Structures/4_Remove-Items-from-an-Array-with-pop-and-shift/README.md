<div class="challenge-instructions basic-data-structures"><div><section id="description">
<p>Both <code>push()</code> and <code>unshift()</code> have corresponding methods that are nearly functional opposites: <code>pop()</code> and <code>shift()</code>. As you may have guessed by now, instead of adding, <code>pop()</code> <em>removes</em> an element from the end of an array, while <code>shift()</code> removes an element from the beginning. The key difference between <code>pop()</code> and <code>shift()</code> and their cousins <code>push()</code> and <code>unshift()</code>, is that neither method takes parameters, and each only allows an array to be modified by a single element at a time.</p>
<p>Let's take a look:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> greetings <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'whats up?'</span><span class="token punctuation">,</span> <span class="token string">'hello'</span><span class="token punctuation">,</span> <span class="token string">'see ya!'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

greetings<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><code>greetings</code> would have the value <code>['whats up?', 'hello']</code>.</p>
<pre class="language-js"><code class="language-js">greetings<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><code>greetings</code> would have the value <code>['hello']</code>.</p>
<p>We can also return the value of the removed element with either method like this:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> popped <span class="token operator">=</span> greetings<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><code>greetings</code> would have the value <code>[]</code>, and <code>popped</code> would have the value <code>hello</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>We have defined a function, <code>popShift</code>, which takes an array as an argument and returns a new array. Modify the function, using <code>pop()</code> and <code>shift()</code>, to remove the first and last elements of the argument array, and assign the removed elements to their corresponding variables, so that the returned array contains their values.</p>
</section></div><hr/></div>