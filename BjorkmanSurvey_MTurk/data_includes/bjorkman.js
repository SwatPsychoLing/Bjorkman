//var shuffleSequence = seq("i1","i2","setcounter","sep",sepWith("sep", seq("p1","p2","exp4","ep3","p4","exp5","i3", rshuffle("filler",rshuffle("AFEWC","AFEWIC","FEWCIC","FEWC","NEARLYALLC","NEARLYALLIC","NOTALLIC","NOTALLC")))));
var shuffleSequence = seq("i1","i2","setcounter","sep",sepWith("sep", seq("p1","p2","p3", "exp4","p5","exp5","i3",rshuffle("inanimate",rshuffle("gnoun","ngnoun","gfamily","gname","ngname","spkknows","quantifier","plural")))));
var completionMessage = "Congratulations! You're done with this part of the experiment. Copy and paste this link into your browser to move on to the first survey: https://swarthmore.az1.qualtrics.com/jfe/form/SV_9pBq1ePlb0rTeWV";
var showProgressBar = true;
var equalGroupSizes = false;



var defaults = [
        
        "Separator", {
            transfer: "keypress",
            normalMessage: "Press any key to continue on to the next item.",
            ignoreFailure: true
        },
        "DashedSentence", {
            mode: "self-paced reading",
            display: "dashed",
            wordPauseTime: 0,
            hideProgressBar: true

        },
        "Question", {
            q: "On a scale of 1 to 7, how well did the second sentence follow from the first?",
            as: ["1", "2", "3", "4", "5", "6", "7"],
            autoFirstChar: true,
            showNumbers: false,
            presentAsScale: true,
            hideProgressBar: true,  
            presentHorizontally: true,
            randomOrder: false,
            leftComment: "(Not naturally at all)", rightComment: "(Very naturally)",
            hasCorrect: 0,
        },
        "AcceptabilityJudgment", {
            as: ["1", "2", "3", "4", "5", "6", "7"], 
            presentAsScale: true, 
            instructions: "Use number keys or click boxes to answer.",
            leftComment: "(Not naturally at all)", rightComment: "(Very naturally)"
        },
        "Message", {
            hideProgressBar: true,
            transfer: "keypress"
        },
        "Form", {
            hideProgressBar: true,
            continueOnReturn: true,
            saveReactionTime: true
        }
        ];

var items = [
         ["setcounter", "__SetCounter__", {  }],
         ["sep", "Separator", { }],
         
         ["i1", "Form", {
             html: { include: "intro1.html" }
         } ],
         
         ["i2", "Form", {
             html: { include: "intro2.html" },
         } ],
         
         //
         // Practice items
         //
         
         ["p1", "DashedSentence", {s: "This is a practice item to get you used to reading sentences like this."}],
         ["p2", "DashedSentence", {s: "The next item will be like a real experimental sentence."}],
         ["p3", "DashedSentence", {s: "The children need to brush their teeth."},
          "Question", {q: "\"The children need to brush their teeth.\"<br /><br /> On a scale of 1 to 7:  How naturally does \"their\" refer to \"the children\"?",
               hasCorrect: 0,
               timeOut: 4500
          }], 
         
         ["p5", "DashedSentence", {s: "The cup fell and they broke."},
          "Question", {q: "\"The cup fell and they broke.\"<br /><br /> On a scale of 1-7, how naturally does \"they\" refer to \"the cup\"?",
               hasCorrect: 0}],
         
         
         ["exp4", "Form", {
             html: { include: "exp4.html" },
         } ],
         
         ["exp5", "Form", {
             html: { include: "exp5.html" },
         } ],  
         
         ["i3", "Form", {
             html: { include: "endofprac.html" },
         } ],   

//
//Critical items 
[["gnoun",1],"DashedSentence",{s:"The janitor heard the stewardess say that they forgot to mail the letters."}, "Question", {q:"\"The janitor heard the stewardess say that they forgot to mail the letters.\"<br /><br /> How naturally does \"they\" refer to \"the stewardess\"?"}],
[["ngnoun",1],"DashedSentence",{s:"The janitor heard the dentist say that they forgot to mail the letters."}, "Question", {q:"\"The janitor heard the dentist say that they forgot to mail the letters.\"<br /><br /> How naturally does \"they\" refer to \"the dentist\"?"}],
[["gfamily",1],"DashedSentence",{s:"The janitor heard my sister say that they forgot to mail the letters."}, "Question", {q:"\"The janitor heard my sister say that they forgot to mail the letters.\"<br /><br /> How naturally does \"they\" refer to \"my sister\"?"}],
[["gname",1],"DashedSentence",{s:"The janitor heard Amanda say that they forgot to mail the letters."}, "Question", {q:"\"The janitor heard Amanda say that they forgot to mail the letters.\"<br /><br /> How naturally does \"they\" refer to \"Amanda\"?"}],
[["ngname",1],"DashedSentence",{s:"The janitor heard Dakota say that they forgot to mail the letters."}, "Question", {q:"\"The janitor heard Dakota say that they forgot to mail the letters.\"<br /><br /> How naturally does \"they\" refer to \"Dakota\"?"}],
[["spkknows",1],"DashedSentence",{s:"The janitor heard my cousin say that they forgot to mail the letters."}, "Question", {q:"\"The janitor heard my cousin say that they forgot to mail the letters.\"<br /><br /> How naturally does \"they\" refer to \"my cousin\"?"}],
[["quantifier",1],"DashedSentence",{s:"The janitor heard many dentists say that they forgot to mail the letters."}, "Question", {q:"\"The janitor heard many dentists say that they forgot to mail the letters.\"<br /><br /> How naturally does \"they\" refer to \"many dentists\"?"}],
[["plural",1],"DashedSentence",{s:"The janitor heard the dentists say that they forgot to mail the letters."}, "Question", {q:"\"The janitor heard the dentists say that they forgot to mail the letters.\"<br /><br /> How naturally does \"they\" refer to \"the dentists\"?"}],

          
[["gnoun",2],"DashedSentence",{s:"I would have liked the waitress more if they had been really funny."}, "Question", {q:"\"I would have liked the waitress more if they had been really funny.\"<br /><br /> How naturally does \"they\" refer to \"the waitress\"?"}],
[["ngnoun",2],"DashedSentence",{s:"I would have liked the comedian more if they had been really funny."}, "Question", {q:"\"I would have liked the comedian more if they had been really funny.\"<br /><br /> How naturally does \"they\" refer to \"the comedian\"?"}],
[["gfamily",2],"DashedSentence",{s:"I would have liked my ex-girlfriend more if they had been really funny."}, "Question", {q:"\"I would have liked my ex-girlfriend more if they had been really funny.\"<br /><br /> How naturally does \"they\" refer to \"my ex-girlfriend\"?"}],
[["gname",2],"DashedSentence",{s:"I would have liked Bridget more if they had been really funny."}, "Question", {q:"\"I would have liked Bridget more if they had been really funny.\"<br /><br /> How naturally does \"they\" refer to \"Bridget\"?"}],
[["ngname",2],"DashedSentence",{s:"I would have liked Morgan more if they had been really funny."}, "Question", {q:"\"I would have liked Morgan more if they had been really funny.\"<br /><br /> How naturally does \"they\" refer to \"Morgan\"?"}],
[["spkknows",2],"DashedSentence",{s:"I would have liked my classmate more if they had been really funny."}, "Question", {q:"\"I would have liked my classmate more if they had been really funny.\"<br /><br /> How naturally does \"they\" refer to \"my classmate\"?"}],
[["quantifier",2],"DashedSentence",{s:"I would have liked each comedian more if they had been really funny."}, "Question", {q:"\"I would have liked each comedian more if they had been really funny.\"<br /><br /> How naturally does \"they\" refer to \"each comedian\"?"}],
[["plural",2],"DashedSentence",{s:"I would have liked the comedians more if they had been really funny."}, "Question", {q:"\"I would have liked the comedians more if they had been really funny.\"<br /><br /> How naturally does \"they\" refer to \"the comedians\"?"}],

          
[["gnoun",3],"DashedSentence",{s:"The saleswoman emailed to say that they would be joining the conference call."}, "Question", {q:"\"The saleswoman emailed to say that they would be joining the conference call.\"<br /><br /> How naturally does \"they\" refer to \"the saleswoman\"?"}],
[["ngnoun",3],"DashedSentence",{s:"The salesperson emailed to say that they would be joining the conference call."}, "Question", {q:"\"The salesperson emailed to say that they would be joining the conference call.\"<br /><br /> How naturally does \"they\" refer to \"the salesperson\"?"}],
[["gfamily",3],"DashedSentence",{s:"My nephew emailed to say that they would be joining the conference call."}, "Question", {q:"\"My nephew emailed to say that they would be joining the conference call.\"<br /><br /> How naturally does \"they\" refer to \"my nephew\"?"}],
[["gname",3],"DashedSentence",{s:"Robert emailed to say that they would be joining the conference call."}, "Question", {q:"\"Robert emailed to say that they would be joining the conference call.\"<br /><br /> How naturally does \"they\" refer to \"Robert\"?"}],
[["ngname",3],"DashedSentence",{s:"Remi emailed to say that they would be joining the conference call."}, "Question", {q:"\"Remi emailed to say that they would be joining the conference call.\"<br /><br /> How naturally does \"they\" refer to \"Remi\"?"}],
[["spkknows",3],"DashedSentence",{s:"My assistant emailed to say that they would be joining the conference call."}, "Question", {q:"\"My assistant emailed to say that they would be joining the conference call.\"<br /><br /> How naturally does \"they\" refer to \"my assistant\"?"}],
[["quantifier",3],"DashedSentence",{s:"Every salesperson emailed to say that they would be joining the conference call."}, "Question", {q:"\"Every salesperson emailed to say that they would be joining the conference call.\"<br /><br /> How naturally does \"they\" refer to \"each salesperson\"?"}],
[["plural",3],"DashedSentence",{s:"The salespeople emailed to say that they would be joining the conference call."}, "Question", {q:"\"The salespeople emailed to say that they would be joining the conference call.\"<br /><br /> How naturally does \"they\" refer to \"the salespeople\"?"}],


[["gnoun",4],"DashedSentence",{s:"Bill overheard the housewife say that they would make dinner tonight."}, "Question", {q:"\"Bill overheard the housewife say that they would make dinner tonight.\"<br /><br /> How naturally does \"they\" refer to \"the housewife\"?"}],
[["ngnoun",4],"DashedSentence",{s:"Bill overheard the cashier say that they would make dinner tonight."}, "Question", {q:"\"Bill overheard the cashier say that they would make dinner tonight.\"<br /><br /> How naturally does \"they\" refer to \"the cashier\"?"}],
[["gfamily",4],"DashedSentence",{s:"Bill overheard my niece say that they would make dinner tonight."}, "Question", {q:"\"Bill overheard my niece say that they would make dinner tonight.\"<br /><br /> How naturally does \"they\" refer to \"my niece\"?"}],
[["gname",4],"DashedSentence",{s:"Bill overheard Daniel say that they would make dinner tonight."}, "Question", {q:"\"Bill overheard Daniel say that they would make dinner tonight.\"<br /><br /> How naturally does \"they\" refer to \"Daniel\"?"}],
[["ngname",4],"DashedSentence",{s:"Bill overheard Pat say that they would make dinner tonight."}, "Question", {q:"\"Bill overheard Pat say that they would make dinner tonight.\"<br /><br /> How naturally does \"they\" refer to \"Pat\"?"}],
[["spkknows",4],"DashedSentence",{s:"Bill overheard my friend say that they would make dinner tonight."}, "Question", {q:"\"Bill overheard my friend say that they would make dinner tonight.\"<br /><br /> How naturally does \"they\" refer to \"my friend\"?"}],
[["quantifier",4],"DashedSentence",{s:"Bill overheard one cashier say that they would make dinner tonight."}, "Question", {q:"\"Bill overheard one cashier say that they would make dinner tonight.\"<br /><br /> How naturally does \"they\" refer to \"one cashier\"?"}],
[["plural",4],"DashedSentence",{s:"Bill overheard my colleagues say that they would make dinner tonight."}, "Question", {q:"\"Bill overheard my colleagues say that they would make dinner tonight.\"<br /><br /> How naturally does \"they\" refer to \"my colleagues\"?"}],


[["gnoun",5],"DashedSentence",{s:"The bride said they would be coming late to dinner."}, "Question", {q:"\"The bride said they would be coming late to dinner.\"<br /><br /> How naturally does \"they\" refer to \"the bride\"?"}],
[["ngnoun",5],"DashedSentence",{s:"The guest speaker said they would be coming late to dinner."}, "Question", {q:"\"The guest speaker said they would be coming late to dinner.\"<br /><br /> How naturally does \"they\" refer to \"the guest speaker\"?"}],
[["gfamily",5],"DashedSentence",{s:"My aunt said they would be coming late to dinner."}, "Question", {q:"\"My aunt said they would be coming late to dinner.\"<br /><br /> How naturally does \"they\" refer to \"my aunt\"?"}],
[["gname",5],"DashedSentence",{s:"Zach said they would be coming late to dinner."}, "Question", {q:"\"Zach said they would be coming late to dinner.\"<br /><br /> How naturally does \"they\" refer to \"Zach\"?"}],
[["ngname",5],"DashedSentence",{s:"Casey said they would be coming late to dinner."}, "Question", {q:"\"Casey said they would be coming late to dinner.\"<br /><br /> How naturally does \"they\" refer to \"Casey\"?"}],
[["spkknows",5],"DashedSentence",{s:"My guest said they would be coming late to dinner."}, "Question", {q:"\"My guest said they would be coming late to dinner.\"<br /><br /> How naturally does \"they\" refer to \"my guest\"?"}],
[["quantifier",5],"DashedSentence",{s:"Everyone said they would be coming late to dinner."}, "Question", {q:"\"Everyone said they would be coming late to dinner.\"<br /><br /> How naturally does \"they\" refer to \"everyone\"?"}],
[["plural",5],"DashedSentence",{s:"The Johnsons said they would be coming late to dinner."}, "Question", {q:"\"The Johnsons said they would be coming late to dinner.\"<br /><br /> How naturally does \"they\" refer to \"the Johnsons\"?"}],


[["gnoun",6],"DashedSentence",{s:"I heard that the groom plays the guitar and that they are really talented."}, "Question", {q:"\"I heard that the groom plays the guitar and that they are really talented.\"<br /><br /> How naturally does \"they\" refer to \"the groom\"?"}],
[["ngnoun",6],"DashedSentence",{s:"I heard that the art teacher plays the guitar and that they are really talented."}, "Question", {q:"\"I heard that the art teacher plays the guitar and that they are really talented.\"<br /><br /> How naturally does \"they\" refer to \"the art teacher\"?"}],
[["gfamily",6],"DashedSentence",{s:"I heard that my uncle plays the guitar and that they are really talented."}, "Question", {q:"\"I heard that my uncle plays the guitar and that they are really talented.\"<br /><br /> How naturally does \"they\" refer to \"my uncle\"?"}],
[["gname",6],"DashedSentence",{s:"I heard that Molly plays the guitar and that they are really talented."}, "Question", {q:"\"I heard that Molly plays the guitar and that they are really talented.\"<br /><br /> How naturally does \"they\" refer to \"Molly\"?"}],
[["ngname",6],"DashedSentence",{s:"I heard that Dakota plays the guitar and that they are really talented."}, "Question", {q:"\"I heard that Dakota plays the guitar and that they are really talented.\"<br /><br /> How naturally does \"they\" refer to \"Dakota\"?"}],
[["spkknows",6],"DashedSentence",{s:"I heard that my business partner plays the guitar and that they are really talented."}, "Question", {q:"\"I heard that my business partner plays the guitar and that they are really talented.\"<br /><br /> How naturally does \"they\" refer to \"my business partner\"?"}],
[["quantifier",6],"DashedSentence",{s:"I heard that each art teacher plays the guitar and that they are really talented."}, "Question", {q:"\"I heard that each art teacher plays the guitar and that they are really talented.\"<br /><br /> How naturally does \"they\" refer to \"each art teacher\"?"}],
[["plural",6],"DashedSentence",{s:"I heard that the art teachers plays the guitar and that they are really talented."}, "Question", {q:"\"I heard that the art teachers play the guitar and that they are really talented.\"<br /><br /> How naturally does \"they\" refer to \"the art teachers\"?"}],


[["gnoun",7],"DashedSentence",{s:"I should greet the bellboy, and they should shake my hand."}, "Question", {q:"\"I should greet the bellboy, and they should shake my hand.\"<br /><br /> How naturally does \"they\" refer to \"the bellboy\"?"}],
[["ngnoun",7],"DashedSentence",{s:"I should greet the hotel clerk, and they should shake my hand."}, "Question", {q:"\"I should greet the hotel clerk, and they should shake my hand..\"<br /><br /> How naturally does \"they\" refer to \"the hotel clerk\"?"}],
[["gfamily",7],"DashedSentence",{s:"I should greet my uncle, and they should shake my hand."}, "Question", {q:"\"I should greet my uncle, and they should shake my hand.\"<br /><br /> How naturally does \"they\" refer to \"my uncle\"?"}],
[["gname",7],"DashedSentence",{s:"I should greet Grant, and they should shake my hand."}, "Question", {q:"\"I should greet Grant, and they should shake my hand.\"<br /><br /> How naturally does \"they\" refer to \"Grant\"?"}],
[["ngname",7],"DashedSentence",{s:"I should greet Morgan, and they should shake my hand."}, "Question", {q:"\"I should greet Morgan, and they should shake my hand.\"<br /><br /> How naturally does \"they\" refer to \"Morgan\"?"}],
[["spkknows",7],"DashedSentence",{s:"I should greet my old doctor, and they should shake my hand."}, "Question", {q:"\"I should greet my old doctor, and they should shake my hand.\"<br /><br /> How naturally does \"they\" refer to \"my old doctor\"?"}],
[["quantifier",7],"DashedSentence",{s:"I should greet every guest, and they should shake my hand."}, "Question", {q:"\"I should greet every guest, and they should shake my hand.\"<br /><br /> How naturally does \"they\" refer to \"every guest\"?"}],
[["plural",7],"DashedSentence",{s:"I should greet the hotel workers, and they should shake my hand."}, "Question", {q:"\"I should greet the hotel workers, and they should shake my hand.\"<br /><br /> How naturally does \"they\" refer to \"the hotel workers\"?"}],


[["gnoun",8],"DashedSentence",{s:"I was supposed to meet the Queen at the gala, but they never showed up."}, "Question", {q:"\"I was supposed to meet the Queen at the gala, but they never showed up.\"<br /><br /> How naturally does \"they\" refer to \"the Queen\"?"}],
[["ngnoun",8],"DashedSentence",{s:"I was supposed to meet the potential client at the gala, but they never showed up."}, "Question", {q:"\"I was supposed to meet the potential client at the gala, but they never showed up.\"<br /><br /> How naturally does \"they\" refer to \"the client\"?"}],
[["gfamily",8],"DashedSentence",{s:"I was supposed to meet my grandmother at the gala, but they never showed up."}, "Question", {q:"\"I was supposed to meet my grandmother at the gala, but they never showed up.\"<br /><br /> How naturally does \"they\" refer to \"my grandmother\"?"}],
[["gname",8],"DashedSentence",{s:"I was supposed to meet Vivian at the gala, but they never showed up."}, "Question", {q:"\"I was supposed to meet Vivian at the gala, but they never showed up.\"<br /><br /> How naturally does \"they\" refer to \"Vivian\"?"}],
[["ngname",8],"DashedSentence",{s:"I was supposed to meet Casey at the gala, but they never showed up."}, "Question", {q:"\"I was supposed to meet Casey at the gala, but they never showed up.\"<br /><br /> How naturally does \"they\" refer to \"Casey\"?"}],
[["spkknows",8],"DashedSentence",{s:"I was supposed to meet my ex at the gala, but they never showed up."}, "Question", {q:"\"I was supposed to meet my ex at the gala, but they never showed up.\"<br /><br /> How naturally does \"they\" refer to \"my ex\"?"}],
[["quantifier",8],"DashedSentence",{s:"I was supposed to meet every client at the gala, but they never showed up."}, "Question", {q:"\"I was supposed to meet every client at the gala, but they never showed up.\"<br /><br /> How naturally does \"they\" refer to \"every client\"?"}],
[["plural",8],"DashedSentence",{s:"I was supposed to meet the potential clients at the gala, but they never showed up."}, "Question", {q:"\"I was supposed to meet the potential clients at the gala, but they never showed up.\"<br /><br /> How naturally does \"they\" refer to \"the clients\"?"}],


[["gnoun",9],"DashedSentence",{s:"The milkman must have gotten ripped off when they signed up for health insurance."}, "Question", {q:"\"The milkman must have gotten ripped off when they signed up for health insurance.\"<br /><br /> How naturally does \"they\" refer to \"the milkman\"?"}],
[["ngnoun",9],"DashedSentence",{s:"The owner of this supermarket must have gotten ripped off when they signed up for health insurance."}, "Question", {q:"\"TThe owner of this supermarket must have gotten ripped off when they signed up for health insurance.\"<br /><br /> How naturally does \"they\" refer to \"the owner of this supermarket\"?"}],
[["gfamily",9],"DashedSentence",{s:"My grandson must have gotten ripped off when they signed up for health insurance."}, "Question", {q:"\"My grandson must have gotten ripped off when they signed up for health insurance.\"<br /><br /> How naturally does \"they\" refer to \"my grandson\"?"}],
[["gname",9],"DashedSentence",{s:"Amelia must have gotten ripped off when they signed up for health insurance."}, "Question", {q:"\"Amelia must have gotten ripped off when they signed up for health insurance.\"<br /><br /> How naturally does \"they\" refer to \"Amelia\"?"}],
[["ngname",9],"DashedSentence",{s:"Marley must have gotten ripped off when they signed up for health insurance."}, "Question", {q:"\"Marley must have gotten ripped off when they signed up for health insurance.\"<br /><br /> How naturally does \"they\" refer to \"Marley\"?"}],
[["spkknows",9],"DashedSentence",{s:"My hairdresser must have gotten ripped off when they signed up for health insurance."}, "Question", {q:"\"My hairdresser must have gotten ripped off when they signed up for health insurance.\"<br /><br /> How naturally does \"they\" refer to \"my hairdresser\"?"}],
[["quantifier",9],"DashedSentence",{s:"Some customer must have gotten ripped off when they signed up for health insurance."}, "Question", {q:"\"Some customer must have gotten ripped off when they signed up for health insurance.\"<br /><br /> How naturally does \"they\" refer to \"some customer\"?"}],
[["plural",9],"DashedSentence",{s:"The customers must have gotten ripped off when they signed up for health insurance."}, "Question", {q:"\"The customers must have gotten ripped off when they signed up for health insurance.\"<br /><br /> How naturally does \"they\" refer to \"the customers\"?"}],


[["gnoun",10],"DashedSentence",{s:"The businessman will probably get punched in the face at the rally, and then they will sue the coordinators."}, "Question", {q:"\"The businessman will probably get punched in the face at the rally, and then they will sue the coordinators.\"<br /><br /> How naturally does \"they\" refer to \"the businessman\"?"}],
[["ngnoun",10],"DashedSentence",{s:"The journalist from Fox News will probably get punched in the face at the rally, and then they will sue the coordinators."}, "Question", {q:"\"The journalist from Fox News will probably get punched in the face at the rally, and then they will sue the coordinators.\"<br /><br /> How naturally does \"they\" refer to \"the journalist\"?"}],
[["gfamily",10],"DashedSentence",{s:"My brother will probably get punched in the face at the rally, and then they will sue the coordinators."}, "Question", {q:"\"My brother will probably get punched in the face at the rally, and then they will sue the coordinators.\"<br /><br /> How naturally does \"they\" refer to \"my brother\"?"}],
[["gname",10],"DashedSentence",{s:"Mary will probably get punched in the face at the rally, and then they will sue the coordinators."}, "Question", {q:"\"Mary will probably get punched in the face at the rally, and then they will sue the coordinators.\"<br /><br /> How naturally does \"they\" refer to \"Mary\"?"}],
[["ngname",10],"DashedSentence",{s:"Marley will probably get punched in the face at the rally, and then they will sue the coordinators."}, "Question", {q:"\"Marley will probably get punched in the face at the rally, and then they will sue the coordinators.\"<br /><br /> How naturally does \"they\" refer to \"Marley\"?"}],
[["spkknows",10],"DashedSentence",{s:"My coworker will probably get punched in the face at the rally, and then they will sue the coordinators."}, "Question", {q:"\"My coworker will probably get punched in the face at the rally, and then they will sue the coordinators.\"<br /><br /> How naturally does \"they\" refer to \"my coworker\"?"}],
[["quantifier",10],"DashedSentence",{s:"Some journalist will probably get punched in the face at the rally, and then they will sue the coordinators."}, "Question", {q:"\"Some journalist will probably get punched in the face at the rally, and then they will sue the coordinators.\"<br /><br /> How naturally does \"they\" refer to \"some journalist\"?"}],
[["plural",10],"DashedSentence",{s:"The protesters will probably get punched in the face at the rally, and then they will sue the coordinators."}, "Question", {q:"\"The protesters will probably get punched in the face at the rally, and then they will sue the coordinators.\"<br /><br /> How naturally does \"they\" refer to \"the protesters\"?"}],


[["gnoun",11],"DashedSentence",{s:"The amount of work the pope has should stress them out."}, "Question", {q:"\"The amount of work the pope has should stress them out.\"<br /><br /> How naturally does \"them\" refer to \"the pope\"?"}],
[["ngnoun",11],"DashedSentence",{s:"The amount of work the florist at that store has should stress them out."}, "Question", {q:"\"The amount of work the florist at that store has should stress them out.\"<br /><br /> How naturally does \"them\" refer to \"the florist\"?"}],
[["gfamily",11],"DashedSentence",{s:"The amount of work my great aunt has should stress them out."}, "Question", {q:"\"The amount of work my great aunt has should stress them out.\"<br /><br /> How naturally does \"them\" refer to \"my great aunt\"?"}],
[["gname",11],"DashedSentence",{s:"The amount of work Alice has should stress them out."}, "Question", {q:"\"The amount of work Alice has should stress them out.\"<br /><br /> How naturally does \"them\" refer to \"Alice\"?"}],
[["ngname",11],"DashedSentence",{s:"The amount of work Skyler has should stress them out."}, "Question", {q:"\"The amount of work Skyler has should stress them out.\"<br /><br /> How naturally does \"them\" refer to \"Skyler\"?"}],
[["spkknows",11],"DashedSentence",{s:"The amount of work my coach has should stress them out."}, "Question", {q:"\"The amount of work my coach has should stress them out.\"<br /><br /> How naturally does \"them\" refer to \"my coach\"?"}],
[["quantifier",11],"DashedSentence",{s:"The amount of work every lawyer has should stress them out."}, "Question", {q:"\"The amount of work every lawyer has should stress them out.\"<br /><br /> How naturally does \"them\" refer to \"every lawyer\"?"}],
[["plural",11],"DashedSentence",{s:"The amount of work the lawyers at this firm have should stress them out."}, "Question", {q:"\"The amount of work the lawyers at this firm have should stress them out.\"<br /><br /> How naturally does \"them\" refer to \"the lawyers\"?"}],


[["gnoun",12],"DashedSentence",{s:"The chairwoman lied to me over email and I'm really mad at them."}, "Question", {q:"\"The chairwoman lied to me over email and I'm really mad at them.\"<br /><br /> How naturally does \"them\" refer to \"the chairwoman\"?"}],
[["ngnoun",12],"DashedSentence",{s:"The customer service rep lied to me over email and I'm really mad at them."}, "Question", {q:"\"The customer service rep lied to me over email and I'm really mad at them.\"<br /><br /> How naturally does \"them\" refer to \"the customer service rep\"?"}],
[["gfamily",12],"DashedSentence",{s:"My granddaughter lied to me over email and I'm really mad at them."}, "Question", {q:"\"My granddaughter lied to me over email and I'm really mad at them.\"<br /><br /> How naturally does \"them\" refer to \"my granddaughter\"?"}],
[["gname",12],"DashedSentence",{s:"Nicholas lied to me over email and I'm really mad at them."}, "Question", {q:"\"Nicholas lied to me over email and I'm really mad at them.\"<br /><br /> How naturally does \"them\" refer to \"Nicholas\"?"}],
[["ngname",12],"DashedSentence",{s:"Hayden lied to me over email and I'm really mad at them."}, "Question", {q:"\"Hayden lied to me over email and I'm really mad at them.\"<br /><br /> How naturally does \"them\" refer to \"Hayden\"?"}],
[["spkknows",12],"DashedSentence",{s:"My tenant lied to me over email and I'm really mad at them."}, "Question", {q:"\"My tenant lied to me over email and I'm really mad at them.\"<br /><br /> How naturally does \"them\" refer to \"my tenant\"?"}],
[["quantifier",12],"DashedSentence",{s:"Each tenant lied to me over email and I'm really mad at them."}, "Question", {q:"\"Each tenant lied to me over email and I'm really mad at them.\"<br /><br /> How naturally does \"them\" refer to \"each tenant\"?"}],
[["plural",12],"DashedSentence",{s:"The tenants lied to me over email and I'm really mad at them."}, "Question", {q:"\"The tenants lied to me over email and I'm really mad at them.\"<br /><br /> How naturally does \"them\" refer to \"the tenants\"?"}],


[["gnoun",13],"DashedSentence",{s:"I left a voicemail for the hostess and told them to call me back."}, "Question", {q:"\"I left a voicemail for the hostess and told them to call me back.\"<br /><br /> How naturally does \"them\" refer to \"the hostess\"?"}],
[["ngnoun",13],"DashedSentence",{s:"I left a voicemail for the caterer and told them to call me back."}, "Question", {q:"\"I left a voicemail for the caterer and told them to call me back.\"<br /><br /> How naturally does \"them\" refer to \"the caterer\"?"}],
[["gfamily",13],"DashedSentence",{s:"I left a voicemail for my aunt and told them to call me back."}, "Question", {q:"\"I left a voicemail for my aunt and told them to call me back.\"<br /><br /> How naturally does \"them\" refer to \"my aunt\"?"}],
[["gname",13],"DashedSentence",{s:"I left a voicemail for David and told them to call me back."}, "Question", {q:"\"I left a voicemail for David and told them to call me back.\"<br /><br /> How naturally does \"them\" refer to \"David\"?"}],
[["ngname",13],"DashedSentence",{s:"I left a voicemail for Hayden and told them to call me back."}, "Question", {q:"\"I left a voicemail for Hayden and told them to call me back.\"<br /><br /> How naturally does \"them\" refer to \"Hayden\"?"}],
[["spkknows",13],"DashedSentence",{s:"I left a voicemail for my old teammate and told them to call me back."}, "Question", {q:"\"I left a voicemail for my old teammate and told them to call me back.\"<br /><br /> How naturally does \"them\" refer to \"my old teammate\"?"}],
[["quantifier",13],"DashedSentence",{s:"I left a voicemail for each caterer and told them to call me back."}, "Question", {q:"\"I left a voicemail for each caterer and told them to call me back.\"<br /><br /> How naturally does \"them\" refer to \"each caterer\"?"}],
[["plural",13],"DashedSentence",{s:"I left a voicemail for the caterers and told them to call me back."}, "Question", {q:"\"I left a voicemail for the caterers and told them to call me back.\"<br /><br /> How naturally does \"them\" refer to \"the caterers\"?"}],


[["gnoun",14],"DashedSentence",{s:"I saw a teenage boy this morning driving in front of me and made an effort to avoid them"}, "Question", {q:"\"I saw a teenage boy this morning driving in front of me and made an effort to avoid them.\"<br /><br /> How naturally does \"them\" refer to \"a teenage boy\"?"}],
[["ngnoun",14],"DashedSentence",{s:"I saw a police officer this morning driving in front of me and made an effort to avoid them."}, "Question", {q:"\"I saw a police officer this morning driving in front of me and made an effort to avoid them.\"<br /><br /> How naturally does \"them\" refer to \"the police officer\"?"}],
[["gfamily",14],"DashedSentence",{s:"I saw my niece this morning driving in front of me and made an effort to avoid them."}, "Question", {q:"\"I saw my niece this morning driving in front of me and made an effort to avoid them..\"<br /><br /> How naturally does \"them\" refer to \"my niece\"?"}],
[["gname",14],"DashedSentence",{s:"I saw Maria this morning driving in front of me and made an effort to avoid them."}, "Question", {q:"\"I saw Maria this morning driving in front of me and made an effort to avoid them.\"<br /><br /> How naturally does \"them\" refer to \"Maria\"?"}],
[["ngname",14],"DashedSentence",{s:"I saw Frankie this morning driving in front of me and made an effort to avoid them."}, "Question", {q:"\"I saw Frankie this morning driving in front of me and made an effort to avoid them.\"<br /><br /> How naturally does \"them\" refer to \"Frankie\"?"}],
[["spkknows",14],"DashedSentence",{s:"I saw my gym teacher this morning driving in front of me and made an effort to avoid them."}, "Question", {q:"\"I saw my gym teacher this morning driving in front of me and made an effort to avoid them.\"<br /><br /> How naturally does \"them\" refer to \"my gym teacher\"?"}],
[["quantifier",14],"DashedSentence",{s:"I saw almost every student this morning driving in front of me and made an effort to avoid them."}, "Question", {q:"\"I saw almost every student this morning driving in front of me and made an effort to avoid them.\"<br /><br /> How naturally does \"them\" refer to \"every student\"?"}],
[["plural",14],"DashedSentence",{s:"I saw my students this morning driving in front of me and made an effort to avoid them."}, "Question", {q:"\"I saw my students this morning driving in front of me and made an effort to avoid them.\"<br /><br /> How naturally does \"them\" refer to \"my students\"?"}],


[["gnoun",15],"DashedSentence",{s:"The laundromat attendant told me that the cowboy did laundry today, but the machine broke on them."}, "Question", {q:"\"The laundromat attendant told me that the cowboy did laundry today, but the machine broke on them.\"<br /><br /> How naturally does \"them\" refer to \"the laundromat attendant\"?"}],
[["ngnoun",15],"DashedSentence",{s:"The laundromat attendant told me that a war vet did laundry today, but the machine broke on them."}, "Question", {q:"\"The laundromat attendant told me that a war vet did laundry today, but the machine broke on them.\"<br /><br /> How naturally does \"them\" refer to \"a war vet\"?"}],
[["gfamily",15],"DashedSentence",{s:"The laundromat attendant told me that my brother did laundry today, but the machine broke on them."}, "Question", {q:"\"The laundromat attendant told me that my brother did laundry today, but the machine broke on them.\"<br /><br /> How naturally does \"them\" refer to \"my brother\"?"}],
[["gname",15],"DashedSentence",{s:"The laundromat attendant told me that Emma did laundry today, but the machine broke on them."}, "Question", {q:"\"The laundromat attendant told me that Emma did laundry today, but the machine broke on them.\"<br /><br /> How naturally does \"them\" refer to \"Emma\"?"}],
[["ngname",15],"DashedSentence",{s:"The laundromat attendant told me that Jayden did laundry today, but the machine broke on them."}, "Question", {q:"\"The laundromat attendant told me that Jayden did laundry today, but the machine broke on them.\"<br /><br /> How naturally does \"them\" refer to \"Jayden\"?"}],
[["spkknows",15],"DashedSentence",{s:"The laundromat attendant told me that my friend did laundry today, but the machine broke on them."}, "Question", {q:"\"The laundromat attendant told me that my friend did laundry today, but the machine broke on them.\"<br /><br /> How naturally does \"them\" refer to \"my friend\"?"}],
[["quantifier",15],"DashedSentence",{s:"The laundromat attendant told me that each tenant did laundry today, but the machine broke on them."}, "Question", {q:"\"The laundromat attendant told me that each tenant did laundry today, but the machine broke on them.\"<br /><br /> How naturally does \"them\" refer to \"each tenant\"?"}],
[["plural",15],"DashedSentence",{s:"The laundromat attendant told me that the cowboys did laundry today, but the machine broke on them."}, "Question", {q:"\"The laundromat attendant told me that the cowboys did laundry today, but the machine broke on them.\"<br /><br /> How naturally does \"them\" refer to \"the cowboys\"?"}],


[["gnoun",16],"DashedSentence",{s:"The doctor told me that the young girl does gymnastics, but it isn't good for them."}, "Question", {q:"\"The doctor told me that the young girl does gymnastics, but it isn't good for them.\"<br /><br /> How naturally does \"them\" refer to \"the young girl\"?"}],
[["ngnoun",16],"DashedSentence",{s:"The doctor told me that his youngest patient does gymnastics, but it isn't good for them."}, "Question", {q:"\"The doctor told me that his youngest patient does gymnastics, but it isn't good for them.\"<br /><br /> How naturally does \"them\" refer to \"his youngest patient\"?"}],
[["gfamily",16],"DashedSentence",{s:"The doctor told me that his niece does gymnastics, but it isn't good for them."}, "Question", {q:"\"The doctor told me that his niece does gymnastics, but it isn't good for them.\"<br /><br /> How naturally does \"them\" refer to \"his niece\"?"}],
[["gname",16],"DashedSentence",{s:"The doctor told me that Jacob does gymnastics, but it isn't good for them."}, "Question", {q:"\"The doctor told me that Jacob does gymnastics, but it isn't good for them.\"<br /><br /> How naturally does \"them\" refer to \"Jacob\"?"}],
[["ngname",16],"DashedSentence",{s:"The doctor told me that Skyler does gymnastics, but it isn't good for them."}, "Question", {q:"\"The doctor told me that Skyler does gymnastics, but it isn't good for them.\"<br /><br /> How naturally does \"them\" refer to \"Skyler\"?"}],
[["spkknows",16],"DashedSentence",{s:"The doctor told me that my high school friend does gymnastics, but it isn't good for them."}, "Question", {q:"\"The doctor told me that my high school friend does gymnastics, but it isn't good for them.\"<br /><br /> How naturally does \"them\" refer to \"my high school friend\"?"}],
[["quantifier",16],"DashedSentence",{s:"The doctor told me that every young patient of his does gymnastics, but it isn't good for them."}, "Question", {q:"\"The doctor told me that every young patient of his does gymnastics, but it isn't good for them.\"<br /><br /> How naturally does \"them\" refer to \"every young patient\"?"}],
[["plural",16],"DashedSentence",{s:"The doctor told me that many of his patients do gymnastics, but it isn't good for them."}, "Question", {q:"\"The doctor told me that many of his patients do gymnastics, but it isn't good for them.\"<br /><br /> How naturally does \"them\" refer to \"many of his patients\"?"}],


[["gnoun",17],"DashedSentence",{s:"The pastor walked over to the widow and gave them a hug."}, "Question", {q:"\"The pastor walked over to the widow and gave them a hug.\"<br /><br /> How naturally does \"them\" refer to \"the widow\"?"}],
[["ngnoun",17],"DashedSentence",{s:"The pastor walked over to the mourner and gave them a hug."}, "Question", {q:"\"The pastor walked over to the mourner and gave them a hug.\"<br /><br /> How naturally does \"them\" refer to \"the mourner\"?"}],
[["gfamily",17],"DashedSentence",{s:"The pastor walked over to my son and gave them a hug."}, "Question", {q:"\"The pastor walked over to my son and gave them a hug.\"<br /><br /> How naturally does \"them\" refer to \"my son\"?"}],
[["gname",17],"DashedSentence",{s:"The pastor walked over to Lucas and gave them a hug."}, "Question", {q:"\"The pastor walked over to Lucas and gave them a hug.\"<br /><br /> How naturally does \"them\" refer to \"Lucas\"?"}],
[["ngname",17],"DashedSentence",{s:"The pastor walked over to Leighton and gave them a hug."}, "Question", {q:"\"The pastor walked over to Leighton and gave them a hug.\"<br /><br /> How naturally does \"them\" refer to \"Leighton\"?"}],
[["spkknows",17],"DashedSentence",{s:"The pastor walked over to my buddy and gave them a hug."}, "Question", {q:"\"The pastor walked over to my buddy and gave them a hug.\"<br /><br /> How naturally does \"them\" refer to \"my buddy\"?"}],
[["quantifier",17],"DashedSentence",{s:"The pastor walked over to every mourner and gave them a hug."}, "Question", {q:"\"The pastor walked over to every mourner and gave them a hug.\"<br /><br /> How naturally does \"them\" refer to \"every mourner\"?"}],
[["plural",17],"DashedSentence",{s:"The pastor walked over to the mourners and gave them hugs."}, "Question", {q:"\"The pastor walked over to the mourners and gave them hugs.\"<br /><br /> How naturally does \"them\" refer to \"the mourners\"?"}],


[["gnoun",18],"DashedSentence",{s:"After what the councilwoman wrote, I bet everyone hates them."}, "Question", {q:"\"After what the councilwoman wrote, I bet everyone hates them.\"<br /><br /> How naturally does \"them\" refer to \"the councilwoman\"?"}],
[["ngnoun",18],"DashedSentence",{s:"After what the blogger wrote, I bet everyone hates them."}, "Question", {q:"\"After what the blogger wrote, I bet everyone hates them.\"<br /><br /> How naturally does \"them\" refer to \"the blogger\"?"}],
[["gfamily",18],"DashedSentence",{s:"After what my brother wrote, I bet everyone hates them."}, "Question", {q:"\"After what my brother wrote, I bet everyone hates them.\"<br /><br /> How naturally does \"them\" refer to \"my brother\"?"}],
[["gname",18],"DashedSentence",{s:"After what Emily wrote, I bet everyone hates them."}, "Question", {q:"\"After what Emily wrote, I bet everyone hates them.\"<br /><br /> How naturally does \"them\" refer to \"Emily\"?"}],
[["ngname",18],"DashedSentence",{s:"After what Justice wrote, I bet everyone hates them."}, "Question", {q:"\"After what Justice wrote, I bet everyone hates them.\"<br /><br /> How naturally does \"them\" refer to \"Justice\"?"}],
[["spkknows",18],"DashedSentence",{s:"After what my roommate wrote, I bet everyone hates them."}, "Question", {q:"\"After what my roommate wrote, I bet everyone hates them.\"<br /><br /> How naturally does \"them\" refer to \"my roommate\"?"}],
[["quantifier",18],"DashedSentence",{s:"After what each committee member wrote, I bet everyone hates them."}, "Question", {q:"\"After what each committee member wrote, I bet everyone hates them.\"<br /><br /> How naturally does \"them\" refer to \"each committee member\"?"}],
[["plural",18],"DashedSentence",{s:"After what the committee members wrote, I bet everyone hates them."}, "Question", {q:"\"After what the committee members wrote, I bet everyone hates them.\"<br /><br /> How naturally does \"them\" refer to \"the committee members\"?"}],


[["gnoun",19],"DashedSentence",{s:"The man sent a letter but the letter got sent back to them."}, "Question", {q:"\"The man sent a letter but the letter got sent back to them.\"<br /><br /> How naturally does \"them\" refer to \"the man\"?"}],
[["ngnoun",19],"DashedSentence",{s:"A magician sent a letter but the letter got sent back to them."}, "Question", {q:"\"A magician sent a letter but the letter got sent back to them.\"<br /><br /> How naturally does \"them\" refer to \"a magician\"?"}],
[["gfamily",19],"DashedSentence",{s:"My husband sent a letter but the letter got sent back to them."}, "Question", {q:"\"My husband sent a letter but the letter got sent back to them.\"<br /><br /> How naturally does \"them\" refer to \"my husband\"?"}],
[["gname",19],"DashedSentence",{s:"John sent a letter but the letter got sent back to them."}, "Question", {q:"\"John sent a letter but the letter got sent back to them.\"<br /><br /> How naturally does \"them\" refer to \"John\"?"}],
[["ngname",19],"DashedSentence",{s:"Harper sent a letter but the letter got sent back to them."}, "Question", {q:"\"Harper sent a letter but the letter got sent back to them.\"<br /><br /> How naturally does \"them\" refer to \"Harper\"?"}],
[["spkknows",19],"DashedSentence",{s:"My chiropractor sent a letter but the letter got sent back to them."}, "Question", {q:"\"My chiropractor sent a letter but the letter got sent back to them.\"<br /><br /> How naturally does \"them\" refer to \"my chiropractor\"?"}],
[["quantifier",19],"DashedSentence",{s:"Every camper sent a letter but the letter got sent back to them."}, "Question", {q:"\"Every camper sent a letter but the letter got sent back to them.\"<br /><br /> How naturally does \"them\" refer to \"every camper\"?"}],
[["plural",19],"DashedSentence",{s:"The campers each sent a letter but the letters got sent back to them."}, "Question", {q:"\"The campers each sent a letter but the letters got sent back to them.\"<br /><br /> How naturally does \"them\" refer to \"the campers\"?"}],


[["gnoun",20],"DashedSentence",{s:"The policeman texted me, but I didn't respond to them."}, "Question", {q:"\"The policeman texted me, but I didn't respond to them.\"<br /><br /> How naturally does \"them\" refer to \"the policeman\"?"}],
[["ngnoun",20],"DashedSentence",{s:"A technician at AT&T texted me, but I didn't respond to them."}, "Question", {q:"\"A technician at AT&T texted me, but I didn't respond to them.\"<br /><br /> How naturally does \"them\" refer to \"a technician\"?"}],
[["gfamily",20],"DashedSentence",{s:"Your father texted me, but I didn't respond to them."}, "Question", {q:"\"Your father texted me, but I didn't respond to them.\"<br /><br /> How naturally does \"them\" refer to \"your father\"?"}],
[["gname",20],"DashedSentence",{s:"Elizabeth texted me, but I didn't respond to them."}, "Question", {q:"\"Elizabeth texted me, but I didn't respond to them.\"<br /><br /> How naturally does \"them\" refer to \"Elizabeth\"?"}],
[["ngname",20],"DashedSentence",{s:"Leighton texted me, but I didn't respond to them."}, "Question", {q:"\"Leighton texted me, but I didn't respond to them.\"<br /><br /> How naturally does \"them\" refer to \"Leighton\"?"}],
[["spkknows",20],"DashedSentence",{s:"My childhood babysitter texted me, but I didn't respond to them."}, "Question", {q:"\"My childhood babysitter texted me, but I didn't respond to them.\"<br /><br /> How naturally does \"them\" refer to \"my childhood babysitter\"?"}],
[["quantifier",20],"DashedSentence",{s:"Each of my family members texted me, but I didn't respond to them."}, "Question", {q:"\"Each of my family members texted me, but I didn't respond to them.\"<br /><br /> How naturally does \"them\" refer to \"each of my family members\"?"}],
[["plural",20],"DashedSentence",{s:"My family members texted me, but I didn't respond to them."}, "Question", {q:"\"My family members texted me, but I didn't respond to them.\"<br /><br /> How naturally does \"them\" refer to \"my family members\"?"}],


[["gnoun",21],"DashedSentence",{s:"The actress should know their own phone number."}, "Question", {q:"\"The actress should know their own phone number.\"<br /><br /> How naturally does \"their\" refer to \"the actress\"?"}],
[["ngnoun",21],"DashedSentence",{s:"The owner of this restaurant should know their own phone number."}, "Question", {q:"\"The owner of this restaurant should know their own phone number.\"<br /><br /> How naturally does \"their\" refer to \"the owner\"?"}],
[["gfamily",21],"DashedSentence",{s:"My mother should know their own phone number."}, "Question", {q:"\"My mother should know their own phone number.\"<br /><br /> How naturally does \"their\" refer to \"my mother\"?"}],
[["gname",21],"DashedSentence",{s:"Annabella should know their own phone number."}, "Question", {q:"\"Annabella should know their own phone number.\"<br /><br /> How naturally does \"their\" refer to \"Annabella\"?"}],
[["ngname",21],"DashedSentence",{s:"Alex should know their own phone number."}, "Question", {q:"\"Alex should know their own phone number.\"<br /><br /> How naturally does \"their\" refer to \"Alex\"?"}],
[["spkknows",21],"DashedSentence",{s:"My professor should know their own phone number."}, "Question", {q:"\"My professor should know their own phone number.\"<br /><br /> How naturally does \"their\" refer to \"my professor\"?"}],
[["quantifier",21],"DashedSentence",{s:"Every restaurant owner should know their own phone number."}, "Question", {q:"\"Every restaurant owner should know their own phone number.\"<br /><br /> How naturally does \"their\" refer to \"every restaurant owner\"?"}],
[["plural",21],"DashedSentence",{s:"The owners of this restaurant should know their own phone numbers."}, "Question", {q:"\"The owners of this restaurant should know their own phone numbers.\"<br /><br /> How naturally does \"their\" refer to \"the owners\"?"}],


[["gnoun",22],"DashedSentence",{s:"The girl must have stubbed their toe."}, "Question", {q:"\"The girl must have stubbed their toe.\"<br /><br /> How naturally does \"their\" refer to \"the girl\"?"}],
[["ngnoun",22],"DashedSentence",{s:"The doctor in the next room must have stubbed their toe."}, "Question", {q:"\"The doctor in the next room must have stubbed their toe.\"<br /><br /> How naturally does \"their\" refer to \"the doctor\"?"}],
[["gfamily",22],"DashedSentence",{s:"My wife must have stubbed their toe."}, "Question", {q:"\"My wife must have stubbed their toe.\"<br /><br /> How naturally does \"their\" refer to \"my wife\"?"}],
[["gname",22],"DashedSentence",{s:"Zoey must have stubbed their toe."}, "Question", {q:"\"Zoey must have stubbed their toe.\"<br /><br /> How naturally does \"their\" refer to \"Zoey\"?"}],
[["ngname",22],"DashedSentence",{s:"Taylor must have stubbed their toe."}, "Question", {q:"\"Taylor must have stubbed their toe.\"<br /><br /> How naturally does \"their\" refer to \"Taylor\"?"}],
[["spkknows",22],"DashedSentence",{s:"My teammate must have stubbed their toe."}, "Question", {q:"\"My teammate must have stubbed their toe.\"<br /><br /> How naturally does \"their\" refer to \"my teammate\"?"}],
[["quantifier",22],"DashedSentence",{s:"Every child walking into this room must have stubbed their toe."}, "Question", {q:"\"Every child walking into this room must have stubbed their toe.\"<br /><br /> How naturally does \"their\" refer to \"every child\"?"}],
[["plural",22],"DashedSentence",{s:"The children must have stubbed their toes."}, "Question", {q:"\"The children must have stubbed their toes.\"<br /><br /> How naturally does \"their\" refer to \"the children\"?"}],


[["gnoun",23],"DashedSentence",{s:"The prince probably broke their leg."}, "Question", {q:"\"The prince probably broke their leg.\"<br /><br /> How naturally does \"their\" refer to \"the prince\"?"}],
[["ngnoun",23],"DashedSentence",{s:"The writer of this article probably broke their leg."}, "Question", {q:"\"The writer of this article probably broke their leg.\"<br /><br /> How naturally does \"their\" refer to \"the writer\"?"}],
[["gfamily",23],"DashedSentence",{s:"My wife probably broke their leg."}, "Question", {q:"\"My wife probably broke their leg.\"<br /><br /> How naturally does \"their\" refer to \"my wife\"?"}],
[["gname",23],"DashedSentence",{s:"Elena probably broke their leg."}, "Question", {q:"\"Elena probably broke their leg.\"<br /><br /> How naturally does \"their\" refer to \"Elena\"?"}],
[["ngname",23],"DashedSentence",{s:"Harper probably broke their leg."}, "Question", {q:"\"Harper probably broke their leg.\"<br /><br /> How naturally does \"their\" refer to \"Harper\"?"}],
[["spkknows",23],"DashedSentence",{s:"My cousin probably broke their leg."}, "Question", {q:"\"My cousin probably broke their leg.\"<br /><br /> How naturally does \"their\" refer to \"my cousin\"?"}],
[["quantifier",23],"DashedSentence",{s:"Some skier probably broke their leg."}, "Question", {q:"\"Some skier probably broke their leg.\"<br /><br /> How naturally does \"their\" refer to \"some skier\"?"}],
[["plural",23],"DashedSentence",{s:"The skiers probably broke their legs."}, "Question", {q:"\"The skiers probably broke their legs.\"<br /><br /> How naturally does \"their\" refer to \"the skiers\"?"}],


[["gnoun",24],"DashedSentence",{s:"The bachelor left their sweater in the bathroom."}, "Question", {q:"\"The bachelor left their sweater in the bathroom.\"<br /><br /> How naturally does \"their\" refer to \"the bachelor\"?"}],
[["ngnoun",24],"DashedSentence",{s:"The previous guest left their sweater in the bathroom."}, "Question", {q:"\"The previous guest left their sweater in the bathroom.\"<br /><br /> How naturally does \"their\" refer to \"the previous guest\"?"}],
[["gfamily",24],"DashedSentence",{s:"My sister left their sweater in the bathroom."}, "Question", {q:"\"My sister left their sweater in the bathroom.\"<br /><br /> How naturally does \"their\" refer to \"my sister\"?"}],
[["gname",24],"DashedSentence",{s:"Brandon left their sweater in the bathroom."}, "Question", {q:"\"Brandon left their sweater in the bathroom.\"<br /><br /> How naturally does \"their\" refer to \"Brandon\"?"}],
[["ngname",24],"DashedSentence",{s:"Alex left their sweater in the bathroom."}, "Question", {q:"\"Alex left their sweater in the bathroom.\"<br /><br /> How naturally does \"their\" refer to \"Alex\"?"}],
[["spkknows",24],"DashedSentence",{s:"My friend left their sweater in the bathroom."}, "Question", {q:"\"My friend left their sweater in the bathroom.\"<br /><br /> How naturally does \"their\" refer to \"my friend\"?"}],
[["quantifier",24],"DashedSentence",{s:"Each party guest left their sweater in the bathroom."}, "Question", {q:"\"Each party guest left their sweater in the bathroom.\"<br /><br /> How naturally does \"their\" refer to \"each party guest\"?"}],
[["plural",24],"DashedSentence",{s:"The party guests left their sweaters in the bathroom."}, "Question", {q:"\"The party guests left their sweaters in the bathroom.\"<br /><br /> How naturally does \"their\" refer to \"the party guests\"?"}],


[["gnoun",25],"DashedSentence",{s:"The boy left their computer on."}, "Question", {q:"\"The boy left their computer on.\"<br /><br /> How naturally does \"their\" refer to \"the boy\"?"}],
[["ngnoun",25],"DashedSentence",{s:"The student in the class before me left their computer on."}, "Question", {q:"\"The student in the class before me left their computer on.\"<br /><br /> How naturally does \"their\" refer to \"the student\"?"}],
[["gfamily",25],"DashedSentence",{s:"My boyfriend left their computer on."}, "Question", {q:"\"My boyfriend left their computer on.\"<br /><br /> How naturally does \"their\" refer to \"my boyfriend\"?"}],
[["gname",25],"DashedSentence",{s:"Gianna left their computer on."}, "Question", {q:"\"Gianna left their computer on.\"<br /><br /> How naturally does \"their\" refer to \"Gianna\"?"}],
[["ngname",25],"DashedSentence",{s:"Sammy left their computer on."}, "Question", {q:"\"Sammy left their computer on.\"<br /><br /> How naturally does \"their\" refer to \"Sammy\"?"}],
[["spkknows",25],"DashedSentence",{s:"My manager left their computer on."}, "Question", {q:"\"My manager left their computer on.\"<br /><br /> How naturally does \"their\" refer to \"my manager\"?"}],
[["quantifier",25],"DashedSentence",{s:"Every student left their computer on."}, "Question", {q:"\"Every student left their computer on.\"<br /><br /> How naturally does \"their\" refer to \"every student\"?"}],
[["plural",25],"DashedSentence",{s:"The students left their computers on."}, "Question", {q:"\"The students left their computers on.\"<br /><br /> How naturally does \"their\" refer to \"the students\"?"}],


[["gnoun",26],"DashedSentence",{s:"When you address the nun, it’s better if you can remember their name."}, "Question", {q:"\"When you address the nun, it’s better if you can remember their name.\"<br /><br /> How naturally does \"their\" refer to \"the nun\"?"}],
[["ngnoun",26],"DashedSentence",{s:"When you address your next patient, it’s better if you can remember their name."}, "Question", {q:"\"When you address your next patient, it’s better if you can remember their name.\"<br /><br /> How naturally does \"their\" refer to \"your next patient\"?"}],
[["gfamily",26],"DashedSentence",{s:"When you address my boyfriend, it’s better if you can remember their name."}, "Question", {q:"\"When you address my boyfriend, it’s better if you can remember their name.\"<br /><br /> How naturally does \"their\" refer to \"my boyfriend\"?"}],
[["gname",26],"DashedSentence",{s:"When you address Henry, it’s better if you can remember their name."}, "Question", {q:"\"When you address Henry, it’s better if you can remember their name.\"<br /><br /> How naturally does \"their\" refer to \"Henry\"?"}],
[["ngname",26],"DashedSentence",{s:"When you address Sammy, it’s better if you can remember their name."}, "Question", {q:"\"When you address Sammy, it’s better if you can remember their name.\"<br /><br /> How naturally does \"their\" refer to \"Sammy\"?"}],
[["spkknows",26],"DashedSentence",{s:"When you address my boss, it’s better if you can remember their name."}, "Question", {q:"\"When you address my boss, it’s better if you can remember their name.\"<br /><br /> How naturally does \"their\" refer to \"my boss\"?"}],
[["quantifier",26],"DashedSentence",{s:"When you address each patient, it’s better if you can remember their name."}, "Question", {q:"\"When you address each patient, it’s better if you can remember their name.\"<br /><br /> How naturally does \"their\" refer to \"each patient\"?"}],
[["plural",26],"DashedSentence",{s:"When you address the patients, it’s better if you can remember their names."}, "Question", {q:"\"TWhen you address the patients, it’s better if you can remember their names.\"<br /><br /> How naturally does \"their\" refer to \"the patients\"?"}],


[["gnoun",27],"DashedSentence",{s:"The girl will probably wear their favorite shirt."}, "Question", {q:"\"The girl will probably wear their favorite shirt.\"<br /><br /> How naturally does \"their\" refer to \"the girl\"?"}],
[["ngnoun",27],"DashedSentence",{s:"The kid that is supposed to come will probably wear their favorite shirt."}, "Question", {q:"\"The kid that is supposed to come will probably wear their favorite shirt.\"<br /><br /> How naturally does \"their\" refer to \"the kid\"?"}],
[["gfamily",27],"DashedSentence",{s:"My girlfriend will probably wear their favorite shirt."}, "Question", {q:"\"My girlfriend will probably wear their favorite shirt.\"<br /><br /> How naturally does \"their\" refer to \"my girlfriend\"?"}],
[["gname",27],"DashedSentence",{s:"Lily will probably wear their favorite shirt."}, "Question", {q:"\"Lily will probably wear their favorite shirt.\"<br /><br /> How naturally does \"their\" refer to \"Lily\"?"}],
[["ngname",27],"DashedSentence",{s:"Payton will probably wear their favorite shirt."}, "Question", {q:"\"Payton will probably wear their favorite shirt.\"<br /><br /> How naturally does \"their\" refer to \"Payton\"?"}],
[["spkknows",27],"DashedSentence",{s:"My best friend will probably wear their favorite shirt."}, "Question", {q:"\"My best friend will probably wear their favorite shirt.\"<br /><br /> How naturally does \"their\" refer to \"my best friend\"?"}],
[["quantifier",27],"DashedSentence",{s:"Each attendee will probably wear their favorite shirt."}, "Question", {q:"\"Each attendee will probably wear their favorite shirt.\"<br /><br /> How naturally does \"their\" refer to \"each attendee\"?"}],
[["plural",27],"DashedSentence",{s:"The kids will probably wear their favorite shirts."}, "Question", {q:"\"The kids will probably wear their favorite shirts.\"<br /><br /> How naturally does \"their\" refer to \"the kids\"?"}],


[["gnoun",28],"DashedSentence",{s:"Bill saw a gentleman and commented on their outfit."}, "Question", {q:"\"Bill saw a gentleman and commented on their outfit.\"<br /><br /> How naturally does \"their\" refer to \"a gentleman\"?"}],
[["ngnoun",28],"DashedSentence",{s:"Bill saw a librarian and commented on their outfit."}, "Question", {q:"\"Bill saw a librarian and commented on their outfit.\"<br /><br /> How naturally does \"their\" refer to \"a librarian\"?"}],
[["gfamily",28],"DashedSentence",{s:"Bill saw my nephew and commented on their outfit."}, "Question", {q:"\"Bill saw my nephew and commented on their outfit.\"<br /><br /> How naturally does \"their\" refer to \"my nephew\"?"}],
[["gname",28],"DashedSentence",{s:"Bill saw Scarlett and commented on their outfit."}, "Question", {q:"\"Bill saw Scarlett and commented on their outfit.\"<br /><br /> How naturally does \"their\" refer to \"Scarlett\"?"}],
[["ngname",28],"DashedSentence",{s:"Bill saw Payton and commented on their outfit."}, "Question", {q:"\"Bill saw Payton and commented on their outfit.\"<br /><br /> How naturally does \"their\" refer to \"Payton\"?"}],
[["spkknows",28],"DashedSentence",{s:"Bill saw my classmate and commented on their outfit."}, "Question", {q:"\"Bill saw my classmate and commented on their outfit.\"<br /><br /> How naturally does \"their\" refer to \"my classmate\"?"}],
[["quantifier",28],"DashedSentence",{s:"Bill saw each partygoer and commented on their outfit."}, "Question", {q:"\"Bill saw each partygoer and commented on their outfit.\"<br /><br /> How naturally does \"their\" refer to \"each partygoer\"?"}],
[["plural",28],"DashedSentence",{s:"Bill saw the librarians and commented on their outfits."}, "Question", {q:"\"Bill saw the librarians and commented on their outfits.\"<br /><br /> How naturally does \"their\" refer to \"the librarians\"?"}],


[["gnoun",29],"DashedSentence",{s:"The boy scout must have forgotten their notebook at home."}, "Question", {q:"\"The boy scout must have forgotten their notebook at home.\"<br /><br /> How naturally does \"their\" refer to \"the boy scout\"?"}],
[["ngnoun",29],"DashedSentence",{s:"The dean must have forgotten their notebook at home."}, "Question", {q:"\"The dean must have forgotten their notebook at home.\"<br /><br /> How naturally does \"their\" refer to \"the dean\"?"}],
[["gfamily",29],"DashedSentence",{s:"My niece must have forgotten their notebook at home."}, "Question", {q:"\"My niece must have forgotten their notebook at home.\"<br /><br /> How naturally does \"their\" refer to \"my niece\"?"}],
[["gname",29],"DashedSentence",{s:"Adeline must have forgotten their notebook at home."}, "Question", {q:"\"Adeline must have forgotten their notebook at home.\"<br /><br /> How naturally does \"their\" refer to \"Adeline\"?"}],
[["ngname",29],"DashedSentence",{s:"Taylor must have forgotten their notebook at home."}, "Question", {q:"\"Taylor must have forgotten their notebook at home.\"<br /><br /> How naturally does \"their\" refer to \"Taylor\"?"}],
[["spkknows",29],"DashedSentence",{s:"My research assistant must have forgotten their notebook at home."}, "Question", {q:"\"My research assistant must have forgotten their notebook at home.\"<br /><br /> How naturally does \"their\" refer to \"my research assistant\"?"}],
[["quantifier",29],"DashedSentence",{s:"Every dean must have forgotten their notebook at home."}, "Question", {q:"\"Every dean must have forgotten their notebook at home.\"<br /><br /> How naturally does \"their\" refer to \"every dean\"?"}],
[["plural",29],"DashedSentence",{s:"The research assistants must have forgotten their notebooks at home."}, "Question", {q:"\"The research assistants must have forgotten their notebooks at home.\"<br /><br /> How naturally does \"their\" refer to \"the research assistants\"?"}],


[["gnoun",30],"DashedSentence",{s:"I heard that the congressman got a lot of presents for their birthday."}, "Question", {q:"\"I heard that the congressman got a lot of presents for their birthday.\"<br /><br /> How naturally does \"their\" refer to \"the congressman\"?"}],
[["ngnoun",30],"DashedSentence",{s:"I heard that the musician got a lot of presents for their birthday."}, "Question", {q:"\"I heard that the musician got a lot of presents for their birthday.\"<br /><br /> How naturally does \"their\" refer to \"the musician\"?"}],
[["gfamily",30],"DashedSentence",{s:"I heard that my daughter got a lot of presents for their birthday."}, "Question", {q:"\"I heard that my daughter got a lot of presents for their birthday.\"<br /><br /> How naturally does \"their\" refer to \"my daughter\"?"}],
[["gname",30],"DashedSentence",{s:"I heard that Penelope got a lot of presents for their birthday."}, "Question", {q:"\"I heard that Penelope got a lot of presents for their birthday.\"<br /><br /> How naturally does \"their\" refer to \"Penelope\"?"}],
[["ngname",30],"DashedSentence",{s:"I heard that Jordan got a lot of presents for their birthday."}, "Question", {q:"\"I heard that Jordan got a lot of presents for their birthday.\"<br /><br /> How naturally does \"their\" refer to \"Jordan\"?"}],
[["spkknows",30],"DashedSentence",{s:"I heard that my study partner got a lot of presents for their birthday."}, "Question", {q:"\"I heard that my study partner got a lot of presents for their birthday.\"<br /><br /> How naturally does \"their\" refer to \"my study partner\"?"}],
[["quantifier",30],"DashedSentence",{s:"I heard that each congressperson got a lot of presents for their birthday."}, "Question", {q:"\"I heard that each congressperson got a lot of presents for their birthday.\"<br /><br /> How naturally does \"their\" refer to \"each congressperson\"?"}],
[["plural",30],"DashedSentence",{s:"I heard that the musicians got a lot of presents for their birthdays."}, "Question", {q:"\"I heard that the musicians got a lot of presents for their birthdays.\"<br /><br /> How naturally does \"their\" refer to \"the musicians\"?"}],


[["gnoun",31],"DashedSentence",{s:"Could the hostess introduce themselves?"}, "Question", {q:"\"Could the hostess introduce themselves?\" How naturally does \"themselves\" refer to \"the hostess\"?"}],
[["ngnoun",31],"DashedSentence",{s:"Could the host of this party introduce themselves?"}, "Question", {q:"\"Could the host of this party introduce themselves?\" How naturally does \"themselves\" refer to \"the host\"?"}],
[["gfamily",31],"DashedSentence",{s:"Could my mother introduce themselves?"}, "Question", {q:"\"Could my mother introduce themselves?\" How naturally does \"themselves\" refer to \"my mother\"?"}],
[["gname",31],"DashedSentence",{s:"Could Isaac introduce themselves?"}, "Question", {q:"\"Could Isaac introduce themselves?\" How naturally does \"themselves\" refer to \"Isaac\"?"}],
[["ngname",31],"DashedSentence",{s:"Could Jordan introduce themselves?"}, "Question", {q:"\"Could Jordan introduce themselves?\" How naturally does \"themselves\" refer to \"Jordan\"?"}],
[["spkknows",31],"DashedSentence",{s:"Could my friend introduce themselves?"}, "Question", {q:"\"Could my friend introduce themselves?\" How naturally does \"themselves\" refer to \"my friend\"?"}],
[["quantifier",31],"DashedSentence",{s:"Could each of the hosts introduce themselves?"}, "Question", {q:"\"Could each of the hosts introduce themselves?\" How naturally does \"themselves\" refer to \"each of the hosts\"?"}],
[["plural",31],"DashedSentence",{s:"Could my friends introduce themselves?"}, "Question", {q:"\"Could my friends introduce themselves?\" How naturally does \"themselves\" refer to \"my friends\"?"}],


[["gnoun",32],"DashedSentence",{s:"The man should help themselves to dinner.?"}, "Question", {q:"\"The man should help themselves to dinner.\"<br /><br /> How naturally does \"themselves\" refer to \"the man\"?"}],
[["ngnoun",32],"DashedSentence",{s:"The caterer of this event should help themselves to dinner.?"}, "Question", {q:"\"The caterer of this event should help themselves to dinner.\"<br /><br /> How naturally does \"themselves\" refer to \"the caterer\"?"}],
[["gfamily",32],"DashedSentence",{s:"My brother should help themselves to dinner."}, "Question", {q:"\"My brother should help themselves to dinner.\"<br /><br /> How naturally does \"themselves\" refer to \"my brother\"?"}],
[["gname",32],"DashedSentence",{s:"Wyatt should help themselves to dinner."}, "Question", {q:"\"Wyatt should help themselves to dinner.?\" How naturally does \"themselves\" refer to \"Wyatt\"?"}],
[["ngname",32],"DashedSentence",{s:"Cameron should help themselves to dinner."}, "Question", {q:"\"Cameron should help themselves to dinner.\"<br /><br /> How naturally does \"themselves\" refer to \"Cameron\"?"}],
[["spkknows",32],"DashedSentence",{s:"My cousin should help themselves to dinner."}, "Question", {q:"\"My cousin should help themselves to dinner.\"<br /><br /> How naturally does \"themselves\" refer to \"my cousin\"?"}],
[["quantifier",32],"DashedSentence",{s:"Every guest should help themselves to dinner."}, "Question", {q:"\"Every guest should help themselves to dinner.\"<br /><br /> How naturally does \"themselves\" refer to \"every guest\"?"}],
[["plural",32],"DashedSentence",{s:"The guests should help themselves to dinner."}, "Question", {q:"\"The guests should help themselves to dinner.\"<br /><br /> How naturally does \"themselves\" refer to \"the guests\"?"}],


[["gnoun",33],"DashedSentence",{s:"I hope the king bought themselves a coffee."}, "Question", {q:"\"I hope the king bought themselves a coffee.\"<br /><br /> How naturally does \"themselves\" refer to \"the king\"?"}],
[["ngnoun",33],"DashedSentence",{s:"I hope the lawyer assigned to my case bought themselves a coffee."}, "Question", {q:"\"I hope the lawyer assigned to my case bought themselves a coffee.\"<br /><br /> How naturally does \"themselves\" refer to \"the lawyer\"?"}],
[["gfamily",33],"DashedSentence",{s:"I hope my grandpa bought themselves a coffee."}, "Question", {q:"\"I hope my grandpa bought themselves a coffee.\"<br /><br /> How naturally does \"themselves\" refer to \"my grandpa\"?"}],
[["gname",33],"DashedSentence",{s:"I hope Justin bought themselves a coffee."}, "Question", {q:"\"I hope Justin bought themselves a coffee.\"<br /><br /> How naturally does \"themselves\" refer to \"Justin\"?"}],
[["ngname",33],"DashedSentence",{s:"I hope Hayden bought themselves a coffee."}, "Question", {q:"\"I hope Hayden bought themselves a coffee.\"<br /><br /> How naturally does \"themselves\" refer to \"Hayden\"?"}],
[["spkknows",33],"DashedSentence",{s:"I hope my lover bought themselves a coffee."}, "Question", {q:"\"I hope my lover bought themselves a coffee.\"<br /><br /> How naturally does \"themselves\" refer to \"my lover\"?"}],
[["quantifier",33],"DashedSentence",{s:"I hope each lawyer bought themselves a coffee."}, "Question", {q:"\"I hope each lawyer bought themselves a coffee.\"<br /><br /> How naturally does \"themselves\" refer to \"each lawyer\"?"}],
[["plural",33],"DashedSentence",{s:"I hope the lawyers bought themselves coffee."}, "Question", {q:"\"I hope the lawyers bought themselves coffee.\"<br /><br /> How naturally does \"themselves\" refer to \"the lawyers\"?"}],


[["gnoun",34],"DashedSentence",{s:"The cowgirl probably walks ten miles by themselves everyday."}, "Question", {q:"\"The cowgirl probably walks ten miles by themselves everyday.\"<br /><br /> How naturally does \"themselves\" refer to \"the cowgirl\"?"}],
[["ngnoun",34],"DashedSentence",{s:"The farmer who grows my tomatoes probably walks ten miles by themselves everyday."}, "Question", {q:"\"The farmer who grows my tomatoes probably walks ten miles by themselves everyday.\"<br /><br /> How naturally does \"themselves\" refer to \"the farmer\"?"}],
[["gfamily",34],"DashedSentence",{s:"My grandson probably walks ten miles by themselves everyday."}, "Question", {q:"\"My grandson probably walks ten miles by themselves everyday.\"<br /><br /> How naturally does \"themselves\" refer to \"my grandson\"?"}],
[["gname",34],"DashedSentence",{s:"Joshua probably walks ten miles by themselves everyday."}, "Question", {q:"\"Joshua probably walks ten miles by themselves everyday.\"<br /><br /> How naturally does \"themselves\" refer to \"Joshua\"?"}],
[["ngname",34],"DashedSentence",{s:"Cameron probably walks ten miles by themselves everyday."}, "Question", {q:"\"Cameron probably walks ten miles by themselves everyday.\"<br /><br /> How naturally does \"themselves\" refer to \"Cameron\"?"}],
[["spkknows",34],"DashedSentence",{s:"My crush probably walks ten miles by themselves everyday."}, "Question", {q:"\"My crush probably walks ten miles by themselves everyday.\"<br /><br /> How naturally does \"themselves\" refer to \"my crush\"?"}],
[["quantifier",34],"DashedSentence",{s:"Every farmer probably walks ten miles by themselves everyday."}, "Question", {q:"\"Every farmer probably walks ten miles by themselves everyday.\"<br /><br /> How naturally does \"themselves\" refer to \"every farmer\"?"}],
[["plural",34],"DashedSentence",{s:"The farmers probably walk ten miles by themselves everyday."}, "Question", {q:"\"The farmers probably walk ten miles by themselves everyday.\"<br /><br /> How naturally does \"themselves\" refer to \"the farmers\"?"}],


[["gnoun",35],"DashedSentence",{s:"I overheard someone say that the mailman forgot to buy themselves toothpaste."}, "Question", {q:"\"I overheard someone say that the mailman forgot to buy themselves toothpaste.\"<br /><br /> How naturally does \"themselves\" refer to \"the mailman\"?"}],
[["ngnoun",35],"DashedSentence",{s:"I overheard someone say that the cook forgot to buy themselves toothpaste."}, "Question", {q:"\"I overheard someone say that the cook forgot to buy themselves toothpaste.\"<br /><br /> How naturally does \"themselves\" refer to \"the cook\"?"}],
[["gfamily",35],"DashedSentence",{s:"I overheard someone say that my husband forgot to buy themselves toothpaste."}, "Question", {q:"\"I overheard someone say that my husband forgot to buy themselves toothpaste.\"<br /><br /> How naturally does \"themselves\" refer to \"my husband\"?"}],
[["gname",35],"DashedSentence",{s:"I overheard someone say that Ella forgot to buy themselves toothpaste."}, "Question", {q:"\"I overheard someone say that Ella forgot to buy themselves toothpaste.\"<br /><br /> How naturally does \"themselves\" refer to \"Ella\"?"}],
[["ngname",35],"DashedSentence",{s:"I overheard someone say that Finley forgot to buy themselves toothpaste."}, "Question", {q:"\"I overheard someone say that Finley forgot to buy themselves toothpaste.\"<br /><br /> How naturally does \"themselves\" refer to \"Finley\"?"}],
[["spkknows",35],"DashedSentence",{s:"I overheard someone say that my lab partner forgot to buy themselves toothpaste."}, "Question", {q:"\"I overheard someone say that my lab partner forgot to buy themselves toothpaste.\"<br /><br /> How naturally does \"themselves\" refer to \"my lab partner\"?"}],
[["quantifier",35],"DashedSentence",{s:"I overheard someone say that every freshman forgot to buy themselves toothpaste."}, "Question", {q:"\"I overheard someone say that every freshman forgot to buy themselves toothpaste.\"<br /><br /> How naturally does \"themselves\" refer to \"every freshman\"?"}],
[["plural",35],"DashedSentence",{s:"I overheard someone say that the cooks forgot to buy themselves toothpaste."}, "Question", {q:"\"I overheard someone say that the cooks forgot to buy themselves toothpaste.\"<br /><br /> How naturally does \"themselves\" refer to \"the cooks\"?"}],


[["gnoun",36],"DashedSentence",{s:"Someone said that the spokesman bought a new car for themselves."}, "Question", {q:"\"Someone said that the spokesman bought a new car for themselves.\"<br /><br /> How naturally does \"themselves\" refer to \"the spokesman\"?"}],
[["ngnoun",36],"DashedSentence",{s:"Someone said that the accountant bought a new car for themselves."}, "Question", {q:"\"Someone said that the accountant bought a new car for themselves.\"<br /><br /> How naturally does \"themselves\" refer to \"the accountant\"?"}],
[["gfamily",36],"DashedSentence",{s:"Someone said that my son bought a new car for themselves."}, "Question", {q:"\"Someone said that my son bought a new car for themselves.\"<br /><br /> How naturally does \"themselves\" refer to \"my son\"?"}],
[["gname",36],"DashedSentence",{s:"Someone said that Bella bought a new car for themselves."}, "Question", {q:"\"Someone said that Bella bought a new car for themselves.\"<br /><br /> How naturally does \"themselves\" refer to \"Bella\"?"}],
[["ngname",36],"DashedSentence",{s:"Someone said that Finley bought a new car for themselves."}, "Question", {q:"\"Someone said that Finley bought a new car for themselves.\"<br /><br /> How naturally does \"themselves\" refer to \"Finley\"?"}],
[["spkknows",36],"DashedSentence",{s:"Someone said that my tutor bought a new car for themselves."}, "Question", {q:"\"Someone said that my tutor bought a new car for themselves.\"<br /><br /> How naturally does \"themselves\" refer to \"my tutor\"?"}],
[["quantifier",36],"DashedSentence",{s:"Someone said that each accountant bought a new car for themselves."}, "Question", {q:"\"Someone said that each accountant bought a new car for themselves.\"<br /><br /> How naturally does \"themselves\" refer to \"each accountant\"?"}],
[["plural",36],"DashedSentence",{s:"Someone said that the accountants bought new cars for themselves."}, "Question", {q:"\"Someone said that the accountants bought new cars for themselves.\"<br /><br /> How naturally does \"themselves\" refer to \"the accountants\"?"}],


[["gnoun",37],"DashedSentence",{s:"The heiress should cook for themselves everyday."}, "Question", {q:"\"The heiress should cook for themselves everyday.\"<br /><br /> How naturally does \"themselves\" refer to \"the heiress\"?"}],
[["ngnoun",37],"DashedSentence",{s:"Your new tenant should cook for themselves everyday."}, "Question", {q:"\"Your new tenant should cook for themselves everyday.\"<br /><br /> How naturally does \"themselves\" refer to \"your new tenant\"?"}],
[["gfamily",37],"DashedSentence",{s:"My nephew should cook for themselves everyday."}, "Question", {q:"\"Someone said that my son bought My nephew should cook for themselves everyday.\"<br /><br /> How naturally does \"themselves\" refer to \"my nephew\"?"}],
[["gname",37],"DashedSentence",{s:"Caleb should cook for themselves everyday."}, "Question", {q:"\"Caleb should cook for themselves everyday.\"<br /><br /> How naturally does \"themselves\" refer to \"Caleb\"?"}],
[["ngname",37],"DashedSentence",{s:"Landry should cook for themselves everyday."}, "Question", {q:"\"Landry should cook for themselves everyday.\"<br /><br /> How naturally does \"themselves\" refer to \"Landry\"?"}],
[["spkknows",37],"DashedSentence",{s:"My piano teacher should cook for themselves everyday."}, "Question", {q:"\"My piano teacher should cook for themselves everyday.\"<br /><br /> How naturally does \"themselves\" refer to \"my piano teacher\"?"}],
[["quantifier",37],"DashedSentence",{s:"Everyone should cook for themselves everyday."}, "Question", {q:"\"Everyone should cook for themselves everyday.\"<br /><br /> How naturally does \"themselves\" refer to \"everyone\"?"}],
[["plural",37],"DashedSentence",{s:"The neighbors should cook for themselves everyday."}, "Question", {q:"\"The neighbors should cook for themselves everyday.\"<br /><br /> How naturally does \"themselves\" refer to \"the neighbors\"?"}],


[["gnoun",38],"DashedSentence",{s:"An old man gave themselves a haircut."}, "Question", {q:"\"An old man gave themselves a haircut.\"<br /><br /> How naturally does \"themselves\" refer to \"an old man\"?"}],
[["ngnoun",38],"DashedSentence",{s:"The blogger gave themselves a haircut."}, "Question", {q:"\"The blogger gave themselves a haircut.\"<br /><br /> How naturally does \"themselves\" refer to \"the blogger\"?"}],
[["gfamily",38],"DashedSentence",{s:"My grandma gave themselves a haircut."}, "Question", {q:"\"My grandma gave themselves a haircut.\"<br /><br /> How naturally does \"themselves\" refer to \"my grandma\"?"}],
[["gname",38],"DashedSentence",{s:"Charlotte gave themselves a haircut."}, "Question", {q:"\"Charlotte gave themselves a haircut.\"<br /><br /> How naturally does \"themselves\" refer to \"Charlotte\"?"}],
[["ngname",38],"DashedSentence",{s:"Landry gave themselves a haircut."}, "Question", {q:"\"SLandry gave themselves a haircut.\"<br /><br /> How naturally does \"themselves\" refer to \"Landry\"?"}],
[["spkknows",38],"DashedSentence",{s:"My spouse gave themselves a haircut."}, "Question", {q:"\"My spouse gave themselves a haircut.\"<br /><br /> How naturally does \"themselves\" refer to \"my spouse\"?"}],
[["quantifier",38],"DashedSentence",{s:"Each sailor gave themselves a haircut."}, "Question", {q:"\"Each sailor gave themselves a haircut.\"<br /><br /> How naturally does \"themselves\" refer to \"each sailor\"?"}],
[["plural",38],"DashedSentence",{s:"The writers gave themselves haircuts."}, "Question", {q:"\"The writers gave themselves haircuts.\"<br /><br /> How naturally does \"themselves\" refer to \"the writers\"?"}],


[["gnoun",39],"DashedSentence",{s:"The princess will probably hurt themselves walking through this narrow door."}, "Question", {q:"\"The princess will probably hurt themselves walking through this narrow door.\"<br /><br /> How naturally does \"themselves\" refer to \"the princess\"?"}],
[["ngnoun",39],"DashedSentence",{s:"The next customer will probably hurt themselves walking through this narrow door."}, "Question", {q:"\"The next customer will probably hurt themselves walking through this narrow door.\"<br /><br /> How naturally does \"themselves\" refer to \"the next customer\"?"}],
[["gfamily",39],"DashedSentence",{s:"My father will probably hurt themselves walking through this narrow door."}, "Question", {q:"\"My father will probably hurt themselves walking through this narrow door.\"<br /><br /> How naturally does \"themselves\" refer to \"my father\"?"}],
[["gname",39],"DashedSentence",{s:"Aaron will probably hurt themselves walking through this narrow door."}, "Question", {q:"\"Aaron will probably hurt themselves walking through this narrow door.\"<br /><br /> How naturally does \"themselves\" refer to \"Aaron\"?"}],
[["ngname",39],"DashedSentence",{s:"Remi will probably hurt themselves walking through this narrow door."}, "Question", {q:"\"Remi will probably hurt themselves walking through this narrow door.\"<br /><br /> How naturally does \"themselves\" refer to \"Remi\"?"}],
[["spkknows",39],"DashedSentence",{s:"My spouse will probably hurt themselves walking through this narrow door."}, "Question", {q:"\"My spouse will probably hurt themselves walking through this narrow door.\"<br /><br /> How naturally does \"themselves\" refer to \"my spouse\"?"}],
[["quantifier",39],"DashedSentence",{s:"Every customer will probably hurt themselves walking through this narrow door."}, "Question", {q:"\"Every customer will probably hurt themselves walking through this narrow door.\"<br /><br /> How naturally does \"themselves\" refer to \"every customer\"?"}],
[["plural",39],"DashedSentence",{s:"The customers will probably hurt themselves walking through this narrow door."}, "Question", {q:"\"The customers will probably hurt themselves walking through this narrow door.\"<br /><br /> How naturally does \"themselves\" refer to \"the customers\"?"}],


[["gnoun",40],"DashedSentence",{s:"I hope that the lady isn't too hard on themselves."}, "Question", {q:"\"I hope that the lady isn't too hard on themselves.\"<br /><br /> How naturally does \"themselves\" refer to \"the lady\"?"}],
[["ngnoun",40],"DashedSentence",{s:"I hope that the defendant isn't too hard on themselves."}, "Question", {q:"\"I hope that the defendant isn't too hard on themselves.\"<br /><br /> How naturally does \"themselves\" refer to \"the defendant\"?"}],
[["gfamily",40],"DashedSentence",{s:"I hope that my grandpa isn't too hard on themselves."}, "Question", {q:"\"I hope that my grandpa isn't too hard on themselves.\"<br /><br /> How naturally does \"themselves\" refer to \"my grandpa\"?"}],
[["gname",40],"DashedSentence",{s:"I hope that Haley isn't too hard on themselves."}, "Question", {q:"\"I hope that Haley isn't too hard on themselves.\"<br /><br /> How naturally does \"themselves\" refer to \"Haley\"?"}],
[["ngname",40],"DashedSentence",{s:"I hope that Justice isn't too hard on themselves."}, "Question", {q:"\"I hope that Justice isn't too hard on themselves.\"<br /><br /> How naturally does \"themselves\" refer to \"Justice\"?"}],
[["spkknows",40],"DashedSentence",{s:"I hope that my childhood friend isn't too hard on themselves."}, "Question", {q:"\"I hope that my childhood friend isn't too hard on themselves.\"<br /><br /> How naturally does \"themselves\" refer to \"my childhood friend\"?"}],
[["quantifier",40],"DashedSentence",{s:"I hope that each defendant isn't too hard on themselves."}, "Question", {q:"\"I hope that each defendant isn't too hard on themselves.\"<br /><br /> How naturally does \"themselves\" refer to \"each defendant\"?"}],
[["plural",40],"DashedSentence",{s:"I hope that the defendants aren't too hard on themselves."}, "Question", {q:"\"I hope that the defendants aren't too hard on themselves.\"<br /><br /> How naturally does \"themselves\" refer to \"the defendants\"?"}],


[["inanimate",41],"DashedSentence",{s:"Each book lost their cover."}, "Question", {q:"\"Each book lost their cover.\"<br /><br /> How naturally does \"their\" refer to \"each book\"?"}],
[["inanimate",42],"DashedSentence",{s:"I like the brand of coffee I buy so much that I would recommend them to you."}, "Question", {q:"\"I like the brand of coffee I buy so much that I would recommend them to you.\"<br /><br /> How naturally does \"them\" refer to \"the brand of coffee\"?"}],
[["inanimate",43],"DashedSentence",{s:"Each tree in this yard dropped their leaves."}, "Question", {q:"\"Each tree in this yard dropped their leaves.\"<br /><br /> How naturally does \"their\" refer to \"each tree\"?"}],
[["inanimate",44],"DashedSentence",{s:"This table has their own matching chairs."}, "Question", {q:"\"This table has their own matching chairs.\"<br /><br /> How naturally does \"their\" refer to \"this table\"?"}],
[["inanimate",45],"DashedSentence",{s:"The carpet curled onto themselves."}, "Question", {q:"\"The carpet curled onto themselves.\"<br /><br /> How naturally does \"themselves\" refer to \"the carpet\"?"}],
[["inanimate",46],"DashedSentence",{s:"The light lost their brightness."}, "Question", {q:"\"The light lost their brightness.\"<br /><br /> How naturally does \"their\" refer to \"the light\"?"}],
[["inanimate",47],"DashedSentence",{s:"The wall had their paint chipped off."}, "Question", {q:"\"The wall had their paint chipped off.\"<br /><br /> How naturally does \"their\" refer to \"the wall\"?"}],
[["inanimate",48],"DashedSentence",{s:"My water bottle top fell off their bottle."}, "Question", {q:"\"My water bottle top fell off their bottle.\"<br /><br /> How naturally does \"their\" refer to \"my water bottle top\"?"}],
[["inanimate",49],"DashedSentence",{s:"The clock’s second hand got stuck with their minute hand."}, "Question", {q:"\"The clock’s second hand got stuck with their minute hand.\"<br /><br /> How naturally does \"their\" refer to \"the clock's second hand\"?"}],
[["inanimate",50],"DashedSentence",{s:"The car rolled down the street while they pulled the truck."}, "Question", {q:"\"The car rolled down the street while they pulled the truck.\"<br /><br /> How naturally does \"they\" refer to \"the car\"?"}],
[["inanimate",51],"DashedSentence",{s:"I saw a tree across the street and they were beautiful."}, "Question", {q:"\"I saw a tree across the street and they were beautiful.\"<br /><br /> How naturally does \"they\" refer to \"a tree\"?"}],
[["inanimate",52],"DashedSentence",{s:"My ankle hurts because they are sprained."}, "Question", {q:"\"My ankle hurts because they are sprained.\"<br /><br /> How naturally does \"they\" refer to \"my ankle\"?"}],
[["inanimate",53],"DashedSentence",{s:"The tree was lovely even though the leaves had fallen off of them."}, "Question", {q:"\"The tree was lovely even though the leaves had fallen off of them.\"<br /><br /> How naturally does \"them\" refer to \"the tree\"?"}],
[["inanimate",54],"DashedSentence",{s:"The car looked beautiful even though the paint was chipped off of them."}, "Question", {q:"\"The car looked beautiful even though the paint was chipped off of them.\"<br /><br /> How naturally does \"them\" refer to \"the car\"?"}],
[["inanimate",55],"DashedSentence",{s:"The floor was slippery because someone had just washed them."}, "Question", {q:"\"The floor was slippery because someone had just washed them.\"<br /><br /> How naturally does \"them\" refer to \"the floor\"?"}],
];
