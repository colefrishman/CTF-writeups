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
	Sleep 83 ; Make this number higher for slower clicks, lower for faster.
	Send {Up}
	Sleep 83 ; Make this number higher for slower clicks, lower for faster.
	Send {Enter}
	Sleep 500 ; Make this number higher for slower clicks, lower for faster.
}