<div class="challenge-instructions regular-expressions"><div><section id="description">
<p>Time to pause and test your new regex writing skills. A group of criminals escaped from jail and ran away, but you don't know how many. However, you do know that they stay close together when they are around other people. You are responsible for finding all of the criminals at once.</p>
<p>Here's an example to review how to do this:</p>
<p>The regex <code>/z+/</code> matches the letter <code>z</code> when it appears one or more times in a row. It would find matches in all of the following strings:</p>
<pre class="language-js"><code class="language-js"><span class="token string">"z"</span>
<span class="token string">"zzzzzz"</span>
<span class="token string">"ABCzzzz"</span>
<span class="token string">"zzzzABC"</span>
<span class="token string">"abczzzzzzzzzzzzzzzzzzzzzabc"</span>
</code></pre>
<p>But it does not find matches in the following strings since there are no letter <code>z</code> characters:</p>
<pre class="language-js"><code class="language-js"><span class="token string">""</span>
<span class="token string">"ABC"</span>
<span class="token string">"abcabc"</span>
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter <code>C</code>.</p>
</section></div><hr/></div>