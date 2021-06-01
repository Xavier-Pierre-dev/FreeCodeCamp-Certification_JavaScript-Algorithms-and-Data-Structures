<div class="challenge-instructions es6"><div><section id="description">
<p>The <code>const</code> declaration has many use cases in modern JavaScript.</p>
<p>Some developers prefer to assign all their variables using <code>const</code> by default, unless they know they will need to reassign the value. Only in that case, they use <code>let</code>.</p>
<p>However, it is important to understand that objects (including arrays and functions) assigned to a variable using <code>const</code> are still mutable. Using the <code>const</code> declaration only prevents reassignment of the variable identifier.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
s <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
s<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">45</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><code>s = [1, 2, 3]</code> will result in an error. The <code>console.log</code> will display the value <code>[5, 6, 45]</code>.</p>
<p>As you can see, you can mutate the object <code>[5, 6, 7]</code> itself and the variable <code>s</code> will still point to the altered array <code>[5, 6, 45]</code>. Like all arrays, the array elements in <code>s</code> are mutable, but because <code>const</code> was used, you cannot use the variable identifier <code>s</code> to point to a different array using the assignment operator.</p>
</section></div><hr/><div><section id="instructions">
<p>An array is declared as <code>const s = [5, 7, 2]</code>. Change the array to <code>[2, 5, 7]</code> using various element assignments.</p>
</section></div><hr/></div>