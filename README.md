movingOs
========

Create a page on which letter O moves from left-middle to top-middle to right-middle to bottom-middle
and center every second in a cycle as shown below:

+–––––––+ +–––––––+ +–––––––+ +–––––––+ +–––––––+
|       | |   O   | |       | |       | |       |
|       | |       | |       | |       | |       |
|       | |       | |       | |       | |       |
|O      | |       | |      O| |       | |   O   |
|       | |       | |       | |       | |       |
|       | |       | |       | |       | |       |
|       | |       | |       | |   O   | |       |
+–––––––+ +–––––––+ +–––––––+ +–––––––+ +–––––––+
 S0        S1        S2        S3        S4 

 Make sure it works with different screen sizes on different devices.

 +––––––––––––––––+ +––––––––––––––––+ +––––––––––––––––+ +–––––––––––––––––+ +–––––––––––––––––+ 
 |                | |       O        | |                | |                 | |                 |
 |                | |                | |                | |                 | |                 |
 |O               | |                | |               O| |                 | |        O        |
 |                | |                | |                | |                 | |                 |
 |                | |                | |                | |        O        | |                 |
 +––––––––––––––––+ +––––––––––––––––+ +––––––––––––––––+ +–––––––––––––––––+ +–––––––––––––––––+
  S0                 S1                 S2                 S3                  S4


  We encourage you to use git, regularly commit your changes and put the repository on Github so that we
  can see how you have made progress. We also encourage you to keep your code clean, simple and readable.

  After completing the above, if you'd like to go above beyond:
    
  a- Persist the location of the O on server side, so that if the page is refreshed, the O starts
  from where it was last time

  b- After each cycle add another letter O to the string, so at S5 you would show OO instead of O,
  and at S10 you would show OOO and so on

  c- Instead of the 5 spots specified in the problem (left-middle, top-middle, etc...), move the O
  between the 12 spots on an analog clock