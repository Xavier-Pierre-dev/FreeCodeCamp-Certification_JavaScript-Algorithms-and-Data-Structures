<div class="challenge-instructions object-oriented-programming"><div><section id="description">
<p>There is a special <code>constructor</code> property located on the object instances <code>duck</code> and <code>beagle</code> that were created in the previous challenges:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> duck <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bird</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> beagle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>duck<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Bird<span class="token punctuation">)</span><span class="token punctuation">;</span> 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>beagle<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Dog<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Both of these <code>console.log</code> calls would display <code>true</code> in the console.</p>
<p>Note that the <code>constructor</code> property is a reference to the constructor function that created the instance. The advantage of the <code>constructor</code> property is that it's possible to check for this property to find out what kind of object it is. Here's an example of how this could be used:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">joinBirdFraternity</span><span class="token punctuation">(</span><span class="token parameter">candidate</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>candidate<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Bird<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<p><strong>Note:</strong> Since the <code>constructor</code> property can be overwritten (which will be covered in the next two challenges) it’s generally better to use the <code>instanceof</code> method to check the type of an object.</p>
</section></div><hr/><div><section id="instructions">
<p>Write a <code>joinDogFraternity</code> function that takes a <code>candidate</code> parameter and, using the <code>constructor</code> property, return <code>true</code> if the candidate is a <code>Dog</code>, otherwise return <code>false</code>.</p>
</section></div><hr/></div>