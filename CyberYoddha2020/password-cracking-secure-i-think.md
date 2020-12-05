## CyberYoddha CTF 2020 - 10/30/2020 - 11/01/2020

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
