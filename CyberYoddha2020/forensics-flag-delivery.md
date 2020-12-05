## CyberYoddha CTF 2020 - 10/30/2020 - 11/01/2020

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


