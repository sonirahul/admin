		var angleSec = 0;
        var angleMin = 0;
        var angleHour = 0;

        $(document).ready(function () {
		if(!$.browser.msie)
		{
            $("#sec").rotate(angleSec);
            $("#min").rotate(angleMin);
            $("#hour").rotate(angleHour);

            $("#sec1").rotate(angleSec);
            $("#min1").rotate(angleMin);
            $("#hour1").rotate(angleHour);

            $("#sec2").rotate(angleSec);
            $("#min2").rotate(angleMin);
            $("#hour2").rotate(angleHour);
			
			$("#sec3").rotate(angleSec);
            $("#min3").rotate(angleMin);
            $("#hour3").rotate(angleHour);
			
            $("#sec4").rotate(angleSec);
            $("#min4").rotate(angleMin);
            $("#hour4").rotate(angleHour);

            $("#sec5").rotate(angleSec);
            $("#min5").rotate(angleMin);
            $("#hour5").rotate(angleHour);

            $("#sec6").rotate(angleSec);
            $("#min6").rotate(angleMin);
            $("#hour6").rotate(angleHour);

            $("#sec7").rotate(angleSec);
            $("#min7").rotate(angleMin);
            $("#hour7").rotate(angleHour);

            $("#sec8").rotate(angleSec);
            $("#min8").rotate(angleMin);
            $("#hour8").rotate(angleHour);	
		}

        });

        setInterval(function () {
		if(!$.browser.msie)
		{		
            var d = new Date;

            angleSec = (d.getUTCSeconds() * 6);
            $("#sec").rotate(angleSec);
            $("#sec1").rotate(angleSec);
            $("#sec2").rotate(angleSec);
			$("#sec3").rotate(angleSec);
			$("#sec4").rotate(angleSec);
			$("#sec5").rotate(angleSec);
			$("#sec6").rotate(angleSec);
			$("#sec7").rotate(angleSec);
			$("#sec8").rotate(angleSec);

            angleMin = (d.getUTCMinutes() * 6);
			
			 if (d.getUTCMinutes()+30>60)  {angleMin1 = ((d.getUTCMinutes()+30) * 6);} else{
                angleMin1 = ((d.getUTCMinutes()+30) * 6)}
		
            $("#min").rotate(angleMin);
            $("#min1").rotate(angleMin);
            $("#min2").rotate(angleMin);
			$("#min3").rotate(angleMin);
			$("#min4").rotate(angleMin);
			$("#min5").rotate(angleMin);
			$("#min6").rotate(angleMin1);
			$("#min7").rotate(angleMin);
			$("#min8").rotate(angleMin);

            angleHour = (((d.getUTCHours()) * 5 + d.getUTCMinutes() / 12) * 6);

            if (d.getUTCHours()+3>24)  {angleHour1 = (((d.getUTCHours()+3-24) * 5 + d.getUTCMinutes() / 12) * 6);} else{
                angleHour1 = (((d.getUTCHours()+3) * 5 + d.getUTCMinutes() / 12) * 6)}

            if (d.getUTCHours()+4>24)  {angleHour2 = (((d.getUTCHours()+4-24) * 5 + d.getUTCMinutes() / 12) * 6);} else{
                angleHour2 = (((d.getUTCHours()+4) * 5 + d.getUTCMinutes() / 12) * 6)}
				
            if (d.getUTCHours()+4>24)  {angleHour3 = (((d.getUTCHours()+4-24) * 5 + d.getUTCMinutes() / 12) * 6);} else{
                angleHour3 = (((d.getUTCHours()+4) * 5 + d.getUTCMinutes() / 12) * 6)}
				
            if (d.getUTCHours()+2>24)  {angleHour4 = (((d.getUTCHours()+2-24) * 5 + d.getUTCMinutes() / 12) * 6);} else{
                angleHour4 = (((d.getUTCHours()+2) * 5 + d.getUTCMinutes() / 12) * 6)}

            if (d.getUTCHours()+2>24)  {angleHour5 = (((d.getUTCHours()+2-24) * 5 + d.getUTCMinutes() / 12) * 6);} else{
                angleHour5 = (((d.getUTCHours()+2) * 5 + d.getUTCMinutes() / 12) * 6)}

            if (d.getUTCHours()+5>24)  {angleHour6 = (((d.getUTCHours()+5-24) * 5 + d.getUTCMinutes() / 12) * 6);} else{
                angleHour6 = (((d.getUTCHours()+5) * 5 + d.getUTCMinutes() / 12) * 6)}

            if (d.getUTCHours()+2>24)  {angleHour7 = (((d.getUTCHours()+2-24) * 5 + d.getUTCMinutes() / 12) * 6);} else{
                angleHour7 = (((d.getUTCHours()+2) * 5 + d.getUTCMinutes() / 12) * 6)}

            if (d.getUTCHours()+10>24)  {angleHour8 = (((d.getUTCHours()+10-24) * 5 + d.getUTCMinutes() / 12) * 6);} else{
                angleHour8 = (((d.getUTCHours()+10) * 5 + d.getUTCMinutes() / 12) * 6)}				

				

            $("#hour").rotate(angleHour);
            $("#hour1").rotate(angleHour1);
            $("#hour2").rotate(angleHour2);
			$("#hour3").rotate(angleHour3);
			$("#hour4").rotate(angleHour4);
			$("#hour5").rotate(angleHour5);
			$("#hour6").rotate(angleHour6);
			$("#hour7").rotate(angleHour7);
			$("#hour8").rotate(angleHour8);
		}
        }, 1000);