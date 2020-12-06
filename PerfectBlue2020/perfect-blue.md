## CTF - 12/04/2020 - 12/06/2020

### welcome/sanity-check

This was an individual effort

This ctf did not have individually linked challenges, so I could not link to the challenge. The ctf was hosted at https://ctf.perfect.blue/.

#### Description:

​	Welcome to pbctf! Please make sure to review the rules. Good luck, and have fun!

#### Solution:

1. Open the rules page
2. When hovering over the flag at the bottom of the page, Rick Astley's "Never Gonna Give You Up"
3. To avoid this, one has to manually type in the flag

pbctf{y0u_kn0w_the_ru1es_4nd_s0_d0_i}



### misc/not-stego

This was an individual effort

This ctf did not have individually linked challenges, so I could not link to the challenge. The ctf was hosted at https://ctf.perfect.blue/.

#### Description:

​	Hallmark of a good CTF is inclusion of Steganography. You asked and we delivered, or didn't we?

#### Solution:

1. A disassembled .data section of a file was included as an image. 
2. Typing the hex byte data into a converter, we got a string of text: "Here's my my link: https://pastebin.com/j6Xd9GNM  <-- Hehe! See if you can RE me"
3. Following the link had a file with the contents: "Here's a flag for your efforts: pbctf{3nc0d1ng_w1th_ass3mbly}."

pbctf{3nc0d1ng_w1th_ass3mbly}



### crypto/Ainissesthai

This was an individual effort

This ctf did not have individually linked challenges, so I could not link to the challenge. The ctf was hosted at https://ctf.perfect.blue/.

#### Description:

A team of codebreakers had to invent computers to break this cipher. Can you figure out what the flag is?

Remote: nc ainissesthai.chal.perfect.blue 1
Note: enter flag as pbctf{UPPERCASEPLAINTEXT}

#### Solution:

1. A few pieces of evidence led me to beleive that this was an Enigma Machine challenge:

   Googling "Ainissesthai" brings up a website https://wordinfo.info/results/from%20ainissesthai which mentions enigma

   The Enigma Machine generally takes in all capital letters with no other characters, 

   The provided source code had Enigma Machine in it

2. From prior knowledge, I knew the problem with the Enigma Machine was that a letter could not map to itself. By running the service that provided the enigma output multiple times, I could determine which letters *couldn't* be in the output. Once 25 letters couldn't be in any each spot, I knew what the remaining character must be. 

3. I wrote a python script that strips the newlines from the output, so I could check character-by-character:

   ```python
   import sys
   
   text = "\""
   for line in sys.stdin:
       text = text + line
       if len(text)>=899:
           break
   
   text = text.replace('\n', '')
   text = text + "\",\n"
   
   outF = open("alltxt.txt", "a")
   outF.write(text)
   print(text)
   
   ```

   To run this from the terminal, I piped the output into the python script with:

   ```bash
   nc ainissesthai.chal.perfect.blue 1 | python3 enigmatext.py
   ```

4. To run this multiple times from the terminal, I wrote an autohotkey script that repeatedly ran the above command by closing the connection and then resending the command:

   ```autohotkey
   #NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
   ; #Warn  ; Enable warnings to assist with detecting common errors.
   SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
   SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
   #MaxThreadsPerHotkey 3
   
   ^k::
   Toggle := !Toggle
   Loop
   {
   	If (!Toggle)
   		Break
   	Send ^{C}
   	Sleep 83 ;
   	Send {Up}
   	Sleep 83 ; 
   	Send {Enter}
   	Sleep 500 ; 
   }
   ```

5. After a while, I sent the input to a JavaScript file which used the previous outputs to determine which possible letters could be the ones used in the original text.

   ```javascript
   let a = [...] //nc output text entries
   let letts = [
   	"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
   ]
   
   //Array of empty arrays
   let arrs = [];
   for(let i =0; i<a[0].length; ++i){
   	arrs.push([])
   }
   
   //adds letter to spot in array if it shows up in one of the texts
   for (let i = 0; i<a.length; ++i){
   	for (let j = 0; j<a[i].length; ++j){
   		if(!arrs[j].includes(a[i][j])){
   			arrs[j].push(a[i][j])
   		}
   	}
   }
   
   
   let brrs = [];
   for(let i =0; i<a[0].length; ++i){
   	brrs.push([])
   }
   
   //adds letter to spot in array if it doesn't up in one of the texts
   for (let i = 0; i<arrs.length; ++i){
   	for (let j = 0; j<letts.length; ++j){
   		if(!arrs[i].includes(letts[j])){
   			brrs[i].push(letts[j])
   		}
   	}
   }
   
   let ans=""
   for (let i = 0; i<brrs.length; ++i){
   	if (brrs[i].length == 1){
   		ans+=brrs[i][0]
   	}
   	else{
   		ans+="_"
   	}
   }
   console.log(ans)
   
   ```

6. After running it with a long input string, I got a partially completed result:

   ```txt
   __TALFLAWINE_I_MAFATA__LA_IN__I_MA__T_L__A_INENIGMAFATAL__AW_NEN__M_FA_ALFLAW_NENIGMA_AT_LF_A_INE_I_MA____LFLA__NE_IGMAFA_ALFLAWINE__GMA_ATALFLA__N_NI_M_F_TALF_AW____I__AFA_A_FL_W__ENIG_A__TALF_A_IN__I_MAF_TA_FL_WIN_NIG_AFATALFLA_I_E__GMAFATALF_AW_NE_IG_A____LF_A__NENIG_AFATAL_LAW_N_NI_MA__TA__LA_INEN_GMAFATAL_LAW__EN__M__AT___LAWINENIGMA__TALFLA_I___I_M____ALFLAWINENI_MA___ALF_AWIN_NIG_AFATA__LAWINENIGM_FATALFLAW_N_NIGM___T__FLAWI__NIG__FAT_L__A__NENI_M_FATAL___W__ENI_MAFA__L_LAWINE_I_MAF_T_LF___I_E_I_MAFA_AL__A_INENIGMAF_T_LFLAWIN__IGMAFAT_L___W_NENI_MAF_T_LFL_W_NE__GMA_AT___LAWINENIGMAF_TA___A__NENI_MA_A____LA_IN___G__FA_ALFLAW_NENIG_AFAT____AWINE_IG_A_ATA_FLA__N_N_GMAFAT__FL_WINENI__AF__A_F__WINENIGM_FAT_L__AWINENIGMAFATALFLA_I__NIG__F_TA_FL_W__E_IG_A_A__L_LAWINEN_G_A_ATALF__WI_EN_GMAF_TA_FLAWI__NI_MAFATALF__W__ENIGM___T_L_LAW_NENI_MA
   ```

7. By inspection, this was enough to figure out that the phrase "FATALFLAWINENIGMA" was being repeated over and over again.

pbctf{FATALFLAWINENIGMA}