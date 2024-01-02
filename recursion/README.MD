## Recursion

# What is Recursion ?

- recursion is actually not a algotythm. It is a concept to create other algorythm
- recursion is when you define something in terms of itself, simply it's a function that refers

# When to use Recursion?

Every time you are using tree or converting Something into a tree, consider recursioin

- Divided into a number of subproblems that aresmaller instances of the same problem
- each instance of the subproblem is identical in nature
- THe solutions of each subprobelm can be combned to solve the problem at hand

# Pros Vs Cons

Pros

- Bridge the gap between elegance and complexity
- Reduces the need for complex loop and auxilary data structures
- can reduce time coplexity easily with memorization
- works really well with recursive structure like `trees` and `graph`

Cons

- Slowness due CPU overhead
- Can lead to out of memory errors / stack overflow exceptions
- can be unnecessarily complex if proofly constructed

# How To Approach a Recursion Problem

1. Identify if you can break down problem into smaller problem
2. Write the recurence relation if needed
3. Draw the recursive tree
4. About the Tree
   - see the flow of function, see how they are getting in stack
   - identify and focus on left tree cals and right tree cals
   - draw the tree and position again and again using pen and paper
   - use a debugger to see the flow
5. see how the values are returned at each step
