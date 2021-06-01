<div class="challenge-instructions basic-data-structures"><div><section id="description">
<p>The below is an example of the simplest implementation of an array data structure. This is known as a <dfn>one-dimensional array</dfn>, meaning it only has one level, or that it does not have any other arrays nested within it. Notice it contains <dfn>booleans</dfn>, <dfn>strings</dfn>, and <dfn>numbers</dfn>, among other valid JavaScript data types:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> simpleArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'one'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'three'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>simpleArray<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The <code>console.log</code> call displays <code>7</code>.</p>
<p>All arrays have a length property, which as shown above, can be very easily accessed with the syntax <code>Array.length</code>. A more complex implementation of an array can be seen below. This is known as a <dfn>multi-dimensional array</dfn>, or an array that contains other arrays. Notice that this array also contains JavaScript <dfn>objects</dfn>, which we will examine very closely in our next section, but for now, all you need to know is that arrays are also capable of storing complex objects.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> complexArray <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      one<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      two<span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      three<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      four<span class="token operator">:</span> <span class="token number">4</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      a<span class="token operator">:</span> <span class="token string">"a"</span><span class="token punctuation">,</span>
      b<span class="token operator">:</span> <span class="token string">"b"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      c<span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">,</span>
      d<span class="token operator">:</span> <span class="token string">"d"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>We have defined a variable called <code>yourArray</code>. Complete the statement by assigning an array of at least 5 elements in length to the <code>yourArray</code> variable. Your array should contain at least one <dfn>string</dfn>, one <dfn>number</dfn>, and one <dfn>boolean</dfn>.</p>
</section></div><hr/></div>