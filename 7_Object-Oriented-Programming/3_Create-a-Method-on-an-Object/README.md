<div class="challenge-instructions object-oriented-programming"><div><section id="description">
<p>Objects can have a special type of property, called a <dfn>method</dfn>.</p>
<p>Methods are properties that are functions. This adds different behavior to an object. Here is the <code>duck</code> example with a method:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> duck <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">"Aflac"</span><span class="token punctuation">,</span>
  numLegs<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token function-variable function">sayName</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token string">"The name of this duck is "</span> <span class="token operator">+</span> duck<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">"."</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
duck<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The example adds the <code>sayName</code> method, which is a function that returns a sentence giving the name of the <code>duck</code>. Notice that the method accessed the <code>name</code> property in the return statement using <code>duck.name</code>. The next challenge will cover another way to do this.</p>
</section></div><hr/><div><section id="instructions">
<p>Using the <code>dog</code> object, give it a method called <code>sayLegs</code>. The method should return the sentence <code>This dog has 4 legs.</code></p>
</section></div><hr/></div>