## DamCTF - 10/09/2020 - 10/11/2020

### misc/pretty-good (OSINT)

This was an asynchronous group effort, but I'm not sure if the other people were in CIS4024

The website at damctf.xyz is no longer up, so I could not link to the challenge.

#### Description:

​	Nothing like getting a project assignment on a Friday afternoon.

​	Flag is the IP address (ex: dam{169.254.42.42})

#### Solution:

1. A rules document was linked here: https://docs.google.com/document/d/199VdTFQ9BAn8ewlsoV7_LEeFbh1LqHCixX9v7_fXlSw/
2. Following the attached pdf (no longer can be found), there was an attached picture. A reverse image search led to a blog, whose archive we found here: https://web.archive.org/web/20201005005536/https://rayhaanhodgson.com/. 
3. It was mentioned on the blog that the author had a github profile.
4. Opening up GitHub pages related to the author's name and email revealed a github commit with deleted sensitive info. (The relevant github page is no longer up)
5. Viewing the diff showed an IP address, which was the flag. 

dam{182.24.89.5}