<div class="challenge-instructions es6"><div><section id="description">
<p>The keyword <code>let</code> is not the only new way to declare variables. In ES6, you can also declare variables using the <code>const</code> keyword.</p>
<p><code>const</code> has all the awesome features that <code>let</code> has, with the added bonus that variables declared using <code>const</code> are read-only. They are a constant value, which means that once a variable is assigned with <code>const</code>, it cannot be reassigned.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token constant">FAV_PET</span> <span class="token operator">=</span> <span class="token string">"Cats"</span><span class="token punctuation">;</span>
<span class="token constant">FAV_PET</span> <span class="token operator">=</span> <span class="token string">"Dogs"</span><span class="token punctuation">;</span>
</code></pre>
<p>The console will display an error due to reassigning the value of <code>FAV_PET</code>.</p>
<p>As you can see, trying to reassign a variable declared with <code>const</code> will throw an error. You should always name variables you don't want to reassign using the <code>const</code> keyword. This helps when you accidentally attempt to reassign a variable that is meant to stay constant. A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.</p>
<p><strong>Note:</strong> It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays). In a later challenge you will see an example of a lowercase variable identifier being used for an array.</p>
</section></div><hr/><div><section id="instructions">
<p>Change the code so that all variables are declared using <code>let</code> or <code>const</code>. Use <code>let</code> when you want the variable to change, and <code>const</code> when you want the variable to remain constant. Also, rename variables declared with <code>const</code> to conform to common practices, meaning constants should be in all caps.</p>
</section></div><hr/></div>