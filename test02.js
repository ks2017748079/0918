alert("자바 스크립트 대화상자");
dan = prompt("원하는 단", 2);


document.writeln("<br><br>" + dan + "단   <br><br>");
for (var i = 1; i < 10; i++)
		{
			document.write(dan + "x" + i + "=" + dan*i + "<br>");
			
		}

/*

for (var i = 2; i < 10; i++) {
	document.writeln("<br><br>" + i + "단   <br><br>");
	for (var j = 1; j < 10; j++)
		{
			document.write(i + "x" + j + "=" + j*j + "<br>");
		}
		document.writeln(" ");
	}
*/