
#set text(top-edge: 0.7em, bottom-edge: -0.3em, size: 12pt)
#set par(leading: 1em, first-line-indent: 1.5em)
#show heading.where(level: 1): set align(center)
#import "@preview/cetz:0.5.0"
#import "@preview/versatile-apa:7.2.0": *



$N$ = total number of strings

== 1 strings

$E[l | n = 1] =  1 times 1 = 1$

== 2 strings (simple)

// 1/3 for 2 loops, 2/3 for 1 loop.

$E[l | n = 2] = 2 times frac(1, 3) + 1 times frac(2, 3) = frac(4, 3)$

== 2 strings

$E[l | n = 2] = (frac(1, 2 times 2-1))(1+1) + (1 - frac(1, 2 times 2-1))(1)$

$E[l | n = 2] = (frac(1, 3) times 2) + (1 - frac(1, 3))$

== 3 strings

$E[l | n = 3] = frac(1, (2n - 1)) + sum_(n = 1)^(N - 1)(e_n + 1)$


$+ (1 - frac(1, (2n - 1)) * frac(4, 3))$


== k strings (paul)
$E[l | n = k] = (frac(1, (2k - 1))) (E[l | n = k-1] + 1)$

$+ (1 - frac(1, (2k - 1))) E[l | n = k-1]$

== Notation change

$f(k) = E[l | k]$

== k strings recursive definition

$f(1) = 1$

$f(k) = frac(1, 2k - 1) times (f(k-1) + 1) + (1 - frac(1, 2k - 1)) f(k-1)$

$f(k) = frac(f(k-1), 2k - 1) + frac(1, 2k-1) + f(k-1) - frac(f(k-1), 2k-1)$

$f(k) = frac(1, 2k-1) + f(k-1)$

// $f(k) = frac(1, 2k-1) + frac(f(k-1)(2k-1), 2k-1)$

// $f(k) = frac(1 + f(k-1)(2k-1), 2k-1)$

// $f(k + 1) = frac(1 + f(k)(2(k+1)-1), 2(k+1)-1)$

// $f(k + 1) = frac(1 + f(k)(2k+1), 2k+1)$


== Fabio's formula

Let $N$ represent the total number of strings. Then, the expected number of $L$ loops given $N$ strings is given by

$E[L | N] = sum_(n = 1)^(N) frac(1, (2 n - 1))$




// (1/(n*2 - 1)) * (4/3 + 1)
// +
// (1 - 1/(n*2 - 1)) * (4/3)


// (1/5) * (7/3)
// +
// (4/5) * (4/3)




// n strings:

// there are n*2 "ends"

// without loss of generality, we can assume the first end you grab, is one from the new string.

// two cases

// A: the new string forms a loop with itself.
//    Now you have 1 loop, and n-1 strings
// 
// 1/(n*2 - 1)   <- probability of A
// 
// In case A, you have 1 extra loop.

// B: the new string forms a segment with another string.
//    Now you have n-1 strings
// 
//    1 - prob(A)     <- probability of B
// 
// In case B, you have the same number of loops.