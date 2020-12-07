## Affinity CTF Lite - 11/16/2020 - 11/17/2020

### stego/astatine

This was an individual effort

The website at https://2020.affinityctf.com/challenges is no longer up, so I could not link to the challenge.

#### Description:

​	Can you read the message?

5t4=2<(;4P0Q^YXDIYA21Ltn

#### Solution:

1. The title of the challenge, "Astatine" is a hint. Astatine is 85th on the periodic table.
2. ASCII85 is an existing encoding method
3. A converter from between text and scii85 can be found here: https://cryptii.com/pipes/ascii85-encoding . One could use this to decode and get the flag from the given string.

AFFCTF{n0t_3nc0d3d}