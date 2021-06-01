<div class="challenge-instructions es6"><div><section id="description">
<p>As seen in the previous challenge, <code>const</code> declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function <code>Object.freeze</code> to prevent data mutation.</p>
<p>Once the object is frozen, you can no longer add, update, or delete properties from it. Any attempt at changing the object will be rejected without an error.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span><span class="token string">"FreeCodeCamp"</span><span class="token punctuation">,</span>
  review<span class="token operator">:</span><span class="token string">"Awesome"</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>review <span class="token operator">=</span> <span class="token string">"bad"</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>newProp <span class="token operator">=</span> <span class="token string">"Test"</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre>
<p>The <code>obj.review</code> and <code>obj.newProp</code> assignments will result in errors, and the console will display the value <code>{ name: "FreeCodeCamp", review: "Awesome" }</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>In this challenge you are going to use <code>Object.freeze</code> to prevent mathematical constants from changing. You need to freeze the <code>MATH_CONSTANTS</code> object so that no one is able to alter the value of <code>PI</code>, add, or delete properties.</p>
</section></div><hr/></div>