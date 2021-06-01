<div class="challenge-instructions functional-programming"><div><section id="description">
<p>So far, we have seen two distinct principles for functional programming:</p>
<ol>
<li>
<p>Don't alter a variable or object - create new variables and objects and return them if need be from a function. Hint: using something like <code>var newArr = arrVar</code>, where <code>arrVar</code> is an array will simply create a reference to the existing variable and not a copy. So changing a value in <code>newArr</code> would change the value in <code>arrVar</code>.</p>
</li>
<li>
<p>Declare function parameters - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable.</p>
</li>
</ol>
<p>Adding one to a number is not very exciting, but we can apply these principles when working with arrays or more complex objects.</p>
</section></div><hr/><div><section id="instructions">
<p>Rewrite the code so the global array <code>bookList</code> is not changed inside either function. The <code>add</code> function should add the given <code>bookName</code> to the end of the array passed to it and return a new array (list). The <code>remove</code> function should remove the given <code>bookName</code> from the array passed to it.</p>
<p><strong>Note:</strong> Both functions should return an array, and any new parameters should be added before the <code>bookName</code> parameter.</p>
</section></div><hr/></div>