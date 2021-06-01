<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>It's great that we can generate random decimal numbers, but it's even more useful if we use it to generate random whole numbers.</p>
<ol><li>Use <code>Math.random()</code> to generate a random decimal.</li><li>Multiply that random decimal by <code>20</code>.</li><li>Use another function, <code>Math.floor()</code> to round the number down to its nearest whole number.</li></ol>
<p>Remember that <code>Math.random()</code> can never quite return a <code>1</code> and, because we're rounding down, it's impossible to actually get <code>20</code>. This technique will give us a whole number between <code>0</code> and <code>19</code>.</p>
<p>Putting everything together, this is what our code looks like:</p>
<pre class="language-js"><code class="language-js">Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>We are calling <code>Math.random()</code>, multiplying the result by 20, then passing the value to <code>Math.floor()</code> function to round the value down to the nearest whole number.</p>
</section></div><hr/><div><section id="instructions">
<p>Use this technique to generate and return a random whole number between <code>0</code> and <code>9</code>.</p>
</section></div><hr/></div>