<div class="challenge-instructions object-oriented-programming"><div><section id="description">
<p>Here's the <code>Bird</code> constructor from the previous challenge:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">Bird</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"Albert"</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>color  <span class="token operator">=</span> <span class="token string">"blue"</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>numLegs <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> blueBird <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bird</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><strong>NOTE:</strong> <code>this</code> inside the constructor always refers to the object being created.</p>
<p>Notice that the <code>new</code> operator is used when calling a constructor. This tells JavaScript to create a new instance of <code>Bird</code> called <code>blueBird</code>. Without the <code>new</code> operator, <code>this</code> inside the constructor would not point to the newly created object, giving unexpected results. Now <code>blueBird</code> has all the properties defined inside the <code>Bird</code> constructor:</p>
<pre class="language-js"><code class="language-js">blueBird<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
blueBird<span class="token punctuation">.</span>color<span class="token punctuation">;</span>
blueBird<span class="token punctuation">.</span>numLegs<span class="token punctuation">;</span>
</code></pre>
<p>Just like any other object, its properties can be accessed and modified:</p>
<pre class="language-js"><code class="language-js">blueBird<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'Elvira'</span><span class="token punctuation">;</span>
blueBird<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>Use the <code>Dog</code> constructor from the last lesson to create a new instance of <code>Dog</code>, assigning it to a variable <code>hound</code>.</p>
</section></div><hr/></div>