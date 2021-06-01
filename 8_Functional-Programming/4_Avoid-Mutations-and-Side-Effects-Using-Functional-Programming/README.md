<div class="challenge-instructions functional-programming"><div><section id="description">
<p>If you haven't already figured it out, the issue in the previous challenge was with the <code>splice</code> call in the <code>tabClose()</code> function. Unfortunately, <code>splice</code> changes the original array it is called on, so the second call to it used a modified array, and gave unexpected results.</p>
<p>This is a small example of a much larger pattern - you call a function on a variable, array, or an object, and the function changes the variable or something in the object.</p>
<p>One of the core principles of functional programming is to not change things. Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.</p>
<p>The previous example didn't have any complicated operations but the <code>splice</code> method changed the original array, and resulted in a bug.</p>
<p>Recall that in functional programming, changing or altering things is called <dfn>mutation</dfn>, and the outcome is called a <dfn>side effect</dfn>. A function, ideally, should be a <dfn>pure function</dfn>, meaning that it does not cause any side effects.</p>
<p>Let's try to master this discipline and not alter any variable or object in our code.</p>
</section></div><hr/><div><section id="instructions">
<p>Fill in the code for the function <code>incrementer</code> so it returns the value of the global variable <code>fixedValue</code> increased by one.</p>
</section></div><hr/></div>