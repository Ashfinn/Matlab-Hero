# Character Counter

Write a function called char_counter that counts the number of a certain character in a text file. The function takes two input arguments, fname, a char vector of the filename and character, the char it counts in the file. The function returns charnum, the number of characters found. If the file is not found or character is not a valid char, the function return -1. 

As an example, consider the following run. The file "simple.txt" contains a single line: "This file should have exactly three a-s..."

```
charnum = char_counter('simple.txt','a')
charnum = 
   3
```

You may find it helpful to use the files for testing and dubugging in MATLAB.
[simple.txt](22. Character Counter\simple.txt)
[Frankenstein-by-Shelley.txt](22. Character Counter\Frankenstein-by-Shelley.txt)
