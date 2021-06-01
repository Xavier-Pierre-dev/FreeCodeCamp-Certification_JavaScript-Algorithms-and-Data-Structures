<div class="challenge-instructions basic-data-structures"><div><section id="description">
<p>Awesome! You have just learned a ton about arrays! This has been a fairly high level overview, and there is plenty more to learn about working with arrays, much of which you will see in later sections. But before moving on to looking at <dfn>Objects</dfn>, lets take one more look, and see how arrays can become a bit more complex than what we have seen in previous challenges.</p>
<p>One of the most powerful features when thinking of arrays as data structures, is that arrays can contain, or even be completely made up of other arrays. We have seen arrays that contain arrays in previous challenges, but fairly simple ones. However, arrays can contain an infinite depth of arrays that can contain other arrays, each with their own arbitrary levels of depth, and so on. In this way, an array can very quickly become very complex data structure, known as a <dfn>multi-dimensional</dfn>, or nested array. Consider the following example:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> nestedArray <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token string">'deep'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">'deeper'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'deeper'</span><span class="token punctuation">]</span> 
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token punctuation">[</span><span class="token string">'deepest'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'deepest'</span><span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token punctuation">[</span>
        <span class="token punctuation">[</span><span class="token string">'deepest-est?'</span><span class="token punctuation">]</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre>
<p>The <code>deep</code> array is nested 2 levels deep. The <code>deeper</code> arrays are 3 levels deep. The <code>deepest</code> arrays are 4 levels, and the <code>deepest-est?</code> is 5.</p>
<p>While this example may seem convoluted, this level of complexity is not unheard of, or even unusual, when dealing with large amounts of data. However, we can still very easily access the deepest levels of an array this complex with bracket notation:</p>
<pre class="language-js"><code class="language-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nestedArray<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>This logs the string <code>deepest-est?</code>. And now that we know where that piece of data is, we can reset it if we need to:</p>
<pre class="language-js"><code class="language-js">nestedArray<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'deeper still'</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nestedArray<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Now it logs <code>deeper still</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>We have defined a variable, <code>myNestedArray</code>, set equal to an array. Modify <code>myNestedArray</code>, using any combination of <dfn>strings</dfn>, <dfn>numbers</dfn>, and <dfn>booleans</dfn> for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the third level, include the string <code>deep</code>, on the fourth level, include the string <code>deeper</code>, and on the fifth level, include the string <code>deepest</code>.</p>
</section></div><hr/></div>