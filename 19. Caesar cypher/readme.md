# Caesar Cypher

Caesar's cypher is the simplest encryption algorithm. It adds a fixed value to the ASCII (unicode) value of each character of a text. In other words, it shifts the characters. Decrypting a text is simply shifting it back by the same amount, that is, it substracts the same value from the characters. Write a function called caesar that accepts two arguments: the first is the character vector to be encrypted, while  the second is the shift amount. The function returns the output argument coded, the encrypted text. The function needs to work with all the visible ASCII characters from space to ~. The ASCII codes of these are 32 through 126. If the shifted code goes outside of this range, it should wrap around. For example, if we shift ~ by 1, the result should be space. If we shift space by -1, the result should be ~. 

Here are a few things you may want to try with MATLAB before starting on this assignment:
```
double(' ')
ans =
    32
double('~')
ans =
   126
char([65 66 67])
ans =
    'ABC'
' ' : '~'
ans =
    ' !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~'
```

And here are a few example runs:
```
caesar('ABCD',1)
ans =
    'BCDE'
caesar('xyz ~',1)
ans =
    'yz{! '
caesar('xyz ~',-1)
ans =
    'wxy~}'
```