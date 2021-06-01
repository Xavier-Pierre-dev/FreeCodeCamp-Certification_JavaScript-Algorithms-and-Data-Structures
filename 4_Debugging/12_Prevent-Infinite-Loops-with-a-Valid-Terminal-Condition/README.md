<div class="challenge-instructions debugging"><div><section id="description">
<p>The final topic is the dreaded infinite loop. Loops are great tools when you need your program to run a code block a certain number of times or until a condition is met, but they need a terminal condition that ends the looping. Infinite loops are likely to freeze or crash the browser, and cause general program execution mayhem, which no one wants.</p>
<p>There was an example of an infinite loop in the introduction to this section - it had no terminal condition to break out of the <code>while</code> loop inside <code>loopy()</code>. Do NOT call this function!</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">loopy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Hello, world!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<p>It's the programmer's job to ensure that the terminal condition, which tells the program when to break out of the loop code, is eventually reached. One error is incrementing or decrementing a counter variable in the wrong direction from the terminal condition. Another one is accidentally resetting a counter or index variable within the loop code, instead of incrementing or decrementing it.</p>
</section></div><hr/><div><section id="instructions">
<p>The <code>myFunc()</code> function contains an infinite loop because the terminal condition <code>i != 4</code> will never evaluate to <code>false</code> (and break the looping) - <code>i</code> will increment by 2 each pass, and jump right over 4 since <code>i</code> is odd to start. Fix the comparison operator in the terminal condition so the loop only runs for <code>i</code> less than or equal to 4.</p>
</section></div><hr/></div>