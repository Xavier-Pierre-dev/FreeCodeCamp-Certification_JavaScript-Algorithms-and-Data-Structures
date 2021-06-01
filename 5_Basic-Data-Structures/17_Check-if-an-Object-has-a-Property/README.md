<div class="challenge-instructions basic-data-structures"><div><section id="description">
<p>Now we can add, modify, and remove keys from objects. But what if we just wanted to know if an object has a specific property? JavaScript provides us with two different ways to do this. One uses the <code>hasOwnProperty()</code> method and the other uses the <code>in</code> keyword. If we have an object <code>users</code> with a property of <code>Alan</code>, we could check for its presence in either of the following ways:</p>
<pre class="language-js"><code class="language-js">users<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">'Alan'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token string">'Alan'</span> <span class="token keyword">in</span> users<span class="token punctuation">;</span>
</code></pre>
<p>Both of these would return <code>true</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Finish writing the function so that it returns true if the object passed to it contains all four names, <code>Alan</code>, <code>Jeff</code>, <code>Sarah</code> and <code>Ryan</code> and returns false otherwise.</p>
</section></div><hr/></div>