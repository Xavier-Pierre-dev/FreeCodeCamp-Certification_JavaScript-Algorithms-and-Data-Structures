<div class="challenge-instructions es6"><div><section id="description">
<p>You can obtain values from an object and set the value of a property within an object.</p>
<p>These are classically called <dfn>getters</dfn> and <dfn>setters</dfn>.</p>
<p>Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.</p>
<p>Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Book</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">author</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_author <span class="token operator">=</span> author<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// getter</span>
  <span class="token keyword">get</span> <span class="token function">writer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_author<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// setter</span>
  <span class="token keyword">set</span> <span class="token function">writer</span><span class="token punctuation">(</span><span class="token parameter">updatedAuthor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_author <span class="token operator">=</span> updatedAuthor<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> novel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token string">'anonymous'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>novel<span class="token punctuation">.</span>writer<span class="token punctuation">)</span><span class="token punctuation">;</span>
novel<span class="token punctuation">.</span>writer <span class="token operator">=</span> <span class="token string">'newAuthor'</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>novel<span class="token punctuation">.</span>writer<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The console would display the strings <code>anonymous</code> and <code>newAuthor</code>.</p>
<p>Notice the syntax used to invoke the getter and setter. They do not even look like functions. Getters and setters are important because they hide internal implementation details.</p>
<p><strong>Note:</strong> It is convention to precede the name of a private variable with an underscore (<code>_</code>). However, the practice itself does not make a variable private.</p>
</section></div><hr/><div><section id="instructions">
<p>Use the <code>class</code> keyword to create a <code>Thermostat</code> class. The <code>constructor</code> accepts a Fahrenheit temperature.</p>
<p>In the class, create a <code>getter</code> to obtain the temperature in Celsius and a <code>setter</code> to set the temperature in Celsius.</p>
<p>Remember that <code>C = 5/9 * (F - 32)</code> and <code>F = C * 9.0 / 5 + 32</code>, where <code>F</code> is the value of temperature in Fahrenheit, and <code>C</code> is the value of the same temperature in Celsius.</p>
<p><strong>Note:</strong> When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.</p>
<p>This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.</p>
<p>In other words, you are abstracting implementation details from the user.</p>
</section></div><hr/></div>