<div class="challenge-instructions functional-programming"><div><section id="description">
<p>The last challenge was a step closer to functional programming principles, but there is still something missing.</p>
<p>We didn't alter the global variable value, but the function <code>incrementer</code> would not work without the global variable <code>fixedValue</code> being there.</p>
<p>Another principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.</p>
<p>There are several good consequences from this principle. The function is easier to test, you know exactly what input it takes, and it won't depend on anything else in your program.</p>
<p>This can give you more confidence when you alter, remove, or add new code. You would know what you can or cannot change and you can see where the potential traps are.</p>
<p>Finally, the function would always produce the same output for the same set of inputs, no matter what part of the code executes it.</p>
</section></div><hr/><div><section id="instructions">
<p>Let's update the <code>incrementer</code> function to clearly declare its dependencies.</p>
<p>Write the <code>incrementer</code> function so it takes an argument, and then returns a result after increasing the value by one.</p>
</section></div><hr/></div>