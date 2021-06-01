<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>We can access the data inside arrays using <dfn>indexes</dfn>.</p>
<p>Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use <dfn>zero-based</dfn> indexing, so the first element in an array has an index of <code>0</code>.</p>
<br/>
<p><strong>Example</strong></p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">,</span><span class="token number">60</span><span class="token punctuation">,</span><span class="token number">70</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> data <span class="token operator">=</span> array<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre>
<p><code>array[0]</code> is now <code>50</code>, and <code>data</code> has the value <code>60</code>.</p>
<p><strong>Note:</strong> There shouldn't be any spaces between the array name and the square brackets, like <code>array [0]</code>. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.</p>
</section></div><hr/><div><section id="instructions">
<p>Create a variable called <code>myData</code> and set it to equal the first value of <code>myArray</code> using bracket notation.</p>
</section></div><hr/></div>