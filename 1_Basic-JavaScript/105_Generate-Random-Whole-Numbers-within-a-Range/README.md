<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>Instead of generating a random whole number between zero and a given number like we did before, we can generate a random whole number that falls within a range of two specific numbers.</p>
<p>To do this, we'll define a minimum number <code>min</code> and a maximum number <code>max</code>.</p>
<p>Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:</p>
<pre class="language-js"><code class="language-js">Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>max <span class="token operator">-</span> min <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> min
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>Create a function called <code>randomRange</code> that takes a range <code>myMin</code> and <code>myMax</code> and returns a random whole number that's greater than or equal to <code>myMin</code>, and is less than or equal to <code>myMax</code>, inclusive.</p>
</section></div><hr/></div>