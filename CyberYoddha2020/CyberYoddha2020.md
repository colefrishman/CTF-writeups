## CyberYoddha CTF 2020 - 10/30/2020 - 11/01/2020

### trivia/Trivia 1

This was an individual effort

The website at https://cyberyoddha.baycyber.net/ is no longer up, so I could not link to the challenge.

#### Description:

​	Who created linux? {no wrapper needed}

#### Solution:

1. Googled "creator of linux"
2. The answer was Google's feature snippet 

Linus Torvalds



### trivia/Trivia 2

This was an individual effort

The website at https://cyberyoddha.baycyber.net/ is no longer up, so I could not link to the challenge.

#### Description:

​	Who’s operating system was IBM going to buy before MS-DOS? {no wrapper needed}

#### Solution:

1. Googled the description as-is
2. This led to a link at https://arstechnica.com/gadgets/2017/07/ibm-pc-history-part-2/
3. I tried every name on that website until I got an answer

Gary Kildall



### trivia/Trivia 3

This was an individual effort

The website at https://cyberyoddha.baycyber.net/ is no longer up, so I could not link to the challenge.

#### Description:

​	Which company invented the original hadoop software? {no wrapper needed}

#### Solution:

1. Searched for "hadoop" on Wikipedia
2. One of the notable companies who worked on Wikipedia in this article was Yahoo! https://en.wikipedia.org/wiki/Apache_Hadoop

Yahoo



### trivia/Trivia 4

This was an individual effort

The website at https://cyberyoddha.baycyber.net/ is no longer up, so I could not link to the challenge.

#### Description:

​	Microsoft has been threatened by a secret hacker for the last couple of years. This hacker has been infiltrating their network and exposing secret information about them to the world. Microsoft is determined to catch this hacker. They set up a computer with vulnerabilities and attempt to lure this hacker into trying to hack this computer in order to reveal his origins. What is this type of system called?{no wrapper needed}

#### Solution:

1. Googled "attempt to lure hackers"
2. This brought me to a website at https://www.csoonline.com/article/3384702/what-is-a-honeypot-a-trap-for-catching-hackers-in-the-act.html which contained the name of the term

Honeypot



### trivia/Trivia 6

This was an individual effort

The website at https://cyberyoddha.baycyber.net/ is no longer up, so I could not link to the challenge.

#### Description:

​	A Hacker infiltrated one of Microsoft's servers and set up malware inside. The malware laid dormant for months, being unnoticed by the server admins. On Thanksgiving Day, the malware was activated, and it crashed all of the servers and the entire network. What is this type of malware called?{no wrapper needed}

#### Solution:

1. Googled "dormant malware that eventually crashes servers"
2. This brought me to a website at https://www.uscybersecurity.net/logic-bombs/ whose title contained the name of the term

Logic Bomb



### trivia/Trivia 7

This was an individual effort

The website at https://cyberyoddha.baycyber.net/ is no longer up, so I could not link to the challenge.

#### Description:

​	A Hacker infiltrated one of Microsoft's servers and set up malware inside. The malware laid dormant for months, being unnoticed by the server admins. On Thanksgiving Day, the malware was activated, and it crashed all of the servers and the entire network. What is this type of malware called? {no wrapper needed}

#### Solution:

1. Googled "built-in Windows tool can you use to repair corrupted files"
2. This brought me to a Microsoft Support post at https://support.microsoft.com/en-us/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system whose title contained the name of the term

System File Checker



### trivia/Trivia 8

This was an individual effort

The website at https://cyberyoddha.baycyber.net/ is no longer up, so I could not link to the challenge.

#### Description:

​	A Hacker infiltrated one of Microsoft's servers and set up malware inside. The malware laid dormant for months, being unnoticed by the server admins. On Thanksgiving Day, the malware was activated, and it crashed all of the servers and the entire network. What is this type of malware called? {no wrapper needed}

#### Solution:

1. There was an image attached which I put into a reverse image search (image is no longer available)
2. Google's related search included the phrase "Haskell icon" and I l knew that Haskell was a programming language

Haskell



### Forensics/Flag  Delivery

This was an individual effort

The website at https://cyberyoddha.baycyber.net/ is no longer up, so I could not link to the challenge.

#### Description:

​	Our good friend Yeltsa Kcir ordered a flag for us from the renowned flag delivery service. We got their letter today, but we can’t see the flag they sent us. Apparently Yeltsa has been talking with the scientist Odec Esrom. Can you find the flag he hid for us?

#### Solution:

1. A file was attached with encoded text (the characters {"D", " ", "?", "M", "6" } were the only ones). Unfortunately, I was not able to save this file.
2. Odec Esrom is "morse code" reversed (almost). 
3. Since Morse Code has only two characters (3 with word breaks), I just had to look for two items to assign dots and dashes to. "D" and "?M6"  looked to be the two. 
4. After trying the scheme, D to dash, ?M6 to dot, we had a morse code string.
5. Decoding it revealed the flag

CYCTFR3@D_B3TW33N_TH3_L1N3S



### Password Cracking/secure (I think?)

This was an individual effort

The website at https://cyberyoddha.baycyber.net/ is no longer up, so I could not link to the challenge.

#### Description:

​	smh I can’t even crack this password: b0439fae31f8cbba6294af86234d5a28 Note: Don’t use a flag wrapper for this challenge

#### Solution:

1. We were given an hash to crack 
2. I googled "hash cracker" and that brought me to https://crackstation.net/
3. Entering the unsalted hash, revealed that it's an md5 hash and revealed the result, which was the flag.

securepassword