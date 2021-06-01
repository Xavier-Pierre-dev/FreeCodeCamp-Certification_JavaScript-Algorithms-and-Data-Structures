<div class="challenge-instructions debugging"><div><section id="description">
<p>Branching programs, i.e. ones that do different things if certain conditions are met, rely on <code>if</code>, <code>else if</code>, and <code>else</code> statements in JavaScript. The condition sometimes takes the form of testing whether a result is equal to a value.</p>
<p>This logic is spoken (in English, at least) as "if x equals y, then ..." which can literally translate into code using the <code>=</code>, or assignment operator. This leads to unexpected control flow in your program.</p>
<p>As covered in previous challenges, the assignment operator (<code>=</code>) in JavaScript assigns a value to a variable name. And the <code>==</code> and <code>===</code> operators check for equality (the triple <code>===</code> tests for strict equality, meaning both value and type are the same).</p>
<p>The code below assigns <code>x</code> to be 2, which evaluates as <code>true</code>. Almost every value on its own in JavaScript evaluates to <code>true</code>, except what are known as the "falsy" values: <code>false</code>, <code>0</code>, <code>""</code> (an empty string), <code>NaN</code>, <code>undefined</code>, and <code>null</code>.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">=</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre>
<p>In this example, the code block within the <code>if</code> statement will run for any value of <code>y</code>, unless <code>y</code> is falsy. The <code>else</code> block, which we expect to run here, will not actually run.</p>
</section></div><hr/><div><section id="instructions">
<p>Fix the condition so the program runs the right branch, and the appropriate value is assigned to <code>result</code>.</p>
</section></div><hr/></div>