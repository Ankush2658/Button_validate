Problem Statement:- 

Create three buttons with initial values "0" as text and one button as "Validate".

Requirement :-

1: Onclick of any of the three buttons,value of that particular button should be increased by 1.
Requirement 2: Onclick of Validate button : (i) The value of unclicked buttons (among three buttons) should get increased by 1.
(ii) If all the three buttons are clicked , the value of oldest (first) clicked button (among three buttons) should get increased by 1.

Expected Result (Test Case) :-

Button 1	Button 2	Button 3	Validate Button	Expected Result
Test Case	Not Click	Not Click	Not Click	Click 	All button will be increased by 1.
Click	Not Click	Not Click	Click	Button 1 increased by 1 i.e now count is 2 of  button 1 and Both unclick button will increase by 1 i.e.count of unclick button is 2.
Click	Click	Not Click	Not Click	Button 1 increases by 1 i.e. 2 now and  button 2 increase by 1 i.e 3
Click	Click	Click	Not Click	Button 1 increases i.e 2 , button 2 also increases i.e. 3 and button 3 increases by 3
After this condition refresh 	Click	Click	Click	Click	"Oldest click button 1 will be increased by 1 i.e count is 3.
"
