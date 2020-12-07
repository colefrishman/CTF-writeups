## CTF - 12/04/2020 - 12/06/2020

### misc/not-stego

I was aided on this one by noopnoop, who suggested that the bytes in the data section should interpreted as text. 

This ctf did not have individually linked challenges, so I could not link to the challenge. The ctf was hosted at https://ctf.perfect.blue/.

#### Description:

​	Hallmark of a good CTF is inclusion of Steganography. You asked and we delivered, or didn't we?

#### Solution:

1. A disassembled .data section of a file was included as an image. 
2. Typing the hex byte data into a converter, we got a string of text: "Here's my my link: https://pastebin.com/j6Xd9GNM  <-- Hehe! See if you can RE me"
3. Following the link had a file with the contents: "Here's a flag for your efforts: pbctf{3nc0d1ng_w1th_ass3mbly}."

pbctf{3nc0d1ng_w1th_ass3mbly}

