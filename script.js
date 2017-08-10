
$(document).ready(function quiz(){
  var questionNum = 0, correct = 0;

      $(".info").hide();
      $(".question").text("Test your knolwedge of Everton Football Club with this quiz.");
      $('.image').prepend('<img style="width:500px;" src="http://i2.liverpoolecho.co.uk/incoming/article9121728.ece/ALTERNATES/s1227b/JS62150830.jpg">');
      $('.btn').append('<input type="button" value="Start Quiz" class="button"/>');
      $('.btn').on('click','.button',function(){
        questionNum =1;


        //Question ONE
        $('.button').fadeOut(0);
        $(".question-number").text('Question:' + questionNum + '/4').fadeIn(0);
        $(".question").text("Which American international, and former Everton player, never scored a goal while representing the Toffees?");
        $("img").remove();
        $(".image").prepend('<img style="width:500px;" src="http://worldsoccertalk.com/wp-content/uploads/2014/12/EFC-USA.jpg">');
        $(".answer-1").append('<input type="button" value="Cody Arnoux" class="answer" style="width: 200px;"/>');
        $('.answer-1').on('click','.answer',function(){
          correct ++;
          $(".answer-1").fadeOut(200);
          $(".answer-2").fadeOut(200);
          $(".answer-3").fadeOut(200);
          $(".answer-4").fadeOut(200);
          $(".answer").remove();
          setTimeout(function(){
            $('.info').fadeIn(200).text('Correct. Cody Arnoux joined Everton on a one-year deal in the summer of 2009 before moving on at the end of the season. He featured several times for the reserves, but never played for the first team.');
          }, 200);
          setTimeout(function(){
            $('.btn').append('<input type="button" value="Next question" class="next-1"/>');
          }, 600);
        });
        $(".answer-2").append('<input type="button" value="Tim Howard" class="answer" style="width: 200px;"/>');
        $('.answer-2').on('click','.answer',function(){
          $(".answer-1").fadeOut(200);
          $(".answer-2").fadeOut(200);
          $(".answer-3").fadeOut(200);
          $(".answer-4").fadeOut(200);
          setTimeout(function(){
            $('.info').fadeIn(200).text("Incorrect. The USA international became the fourth goalkeeper to score in the Premier League when his wind-assisted clearance bounced over Bolton's keeper during the 2011-2012 season.");
          }, 200);
          setTimeout(function(){
            $('.btn').append('<input type="button" value="Next question" class="next-1"/>');
          }, 600);
        });
        $(".answer-3").append('<input type="button" value="Joe-Max Moore" class="answer" style="width: 200px;"/>');
        $('.answer-3').on('click','.answer',function(){
          $(".answer-1").fadeOut(200);
          $(".answer-2").fadeOut(200);
          $(".answer-3").fadeOut(200);
          $(".answer-4").fadeOut(200);
          setTimeout(function(){
            $('.info').fadeIn(200).text("Incorrect. Oklahoma-born Joe-Max Moore reached scored 10 goals in 54 apperances during an injury-plagued three-year spell at Goodison Park.");
          }, 200);
          setTimeout(function(){
            $('.btn').append('<input type="button" value="Next question" class="next-1"/>');
          }, 600);
        });
        $(".answer-4").append('<input type="button" value="Landon Donovan" class="answer" style="width: 200px;"/>');
        $('.answer-4').on('click','.answer',function(){
          $(".answer-1").fadeOut(200);
          $(".answer-2").fadeOut(200);
          $(".answer-3").fadeOut(200);
          $(".answer-4").fadeOut(200);
          setTimeout(function(){
            $('.info').fadeIn(200).text("Incorrect. The USNT all-time record apperance holder scored 2 goals on 22 apperances staggered over two short-term loans.");
          }, 200);
          setTimeout(function(){
            $('.btn').append('<input type="button" value="Next question" class="next-1"/>');
          }, 600);
        });
      });


      //Question 2
      $('.btn').on('click','.next-1',function(){
        $('.next-1').fadeOut(0);
        questionNum = 2;
        $(".question-number").text('Question:' + questionNum + '/4');
        $(".question").text("During which year did Everton win their most recent major Trophy?");
        $(".info").hide();
        $("img").remove();
        $(".image").prepend('<img style="width:500px;" src="http://d2qsy1h1438jt3.cloudfront.net/~/media/83270a5f9fba42e88afe1c800888e865.jpg?bc=white&as=1&w=750">');
        $(".answer-5").append('<input type="button" value="1994" class="answer" style="width: 200px;"/>').show();
        $('.answer-5').on('click','.answer',function(){
          $(".answer-5").fadeOut(200);
          $(".answer-6").fadeOut(200);
          $(".answer-7").fadeOut(200);
          $(".answer-8").fadeOut(200);
          $(".answer").remove();
          setTimeout(function(){
            $('.info').fadeIn(200).text("Incorrect. Everton's most notable achivement of the '94 season was narrowly avoiding relegation on the final day.");
          }, 200);
          setTimeout(function(){
            $('.btn').append('<input type="button" value="Next question" class="next-2"/>');
          }, 600);
        });
        $(".answer-6").append('<input type="button" value="1995" class="answer" style="width: 200px;"/>').show();
        $('.answer-6').on('click','.answer',function(){
          correct ++;
          $(".answer-5").fadeOut(200);
          $(".answer-6").fadeOut(200);
          $(".answer-7").fadeOut(200);
          $(".answer-8").fadeOut(200);
          $(".answer").remove();
          setTimeout(function(){
            $('.info').fadeIn(200).text("Correct. At the end of the 1995 season, Everton beat Manchester United to win the FA Cup, their first trophy in 8 Years.");
          }, 200);
          setTimeout(function(){
            $('.btn').append('<input type="button" value="Next question" class="next-2"/>');
          }, 600);
        });
        $(".answer-7").append('<input type="button" value="1996" class="answer" style="width: 200px;"/>').show();
        $('.answer-7').on('click','.answer',function(){
          $(".answer-5").fadeOut(200);
          $(".answer-6").fadeOut(200);
          $(".answer-7").fadeOut(200);
          $(".answer-8").fadeOut(200);
          $(".answer").remove();
          setTimeout(function(){
            $('.info').fadeIn(200).text("Incorrect. Although Everton won the Charity Shield and finished a respectable 6th in the premier leuage, they could not replicate their FA Cup performance.");
          }, 200);
          setTimeout(function(){
            $('.btn').append('<input type="button" value="Next question" class="next-2"/>');
          }, 600);
        });
        $(".answer-8").append('<input type="button" value="1997" class="answer" style="width: 200px;"/>').show();
        $('.answer-8').on('click','.answer',function(){
          $(".answer-5").fadeOut(200);
          $(".answer-6").fadeOut(200);
          $(".answer-7").fadeOut(200);
          $(".answer-8").fadeOut(200);
          $(".answer").remove();
          setTimeout(function(){
            $('.info').fadeIn(200).text("Incorrect. 1996-1997 was an unremarkable season for Everton in both the Leauge and Domestic cups.");
          }, 200);
          setTimeout(function(){
            $('.btn').append('<input type="button" value="Next question" class="next-2"/>');
          }, 600);
        });
      });


      //Question 3
      $('.btn').on('click','.next-2',function(){
        $('.next-2').fadeOut(0);
        questionNum = 3;
        $(".question-number").text('Question:' + questionNum + '/4');
        $(".question").text("Which player who featured for both Everton and Arsenal also spent a season playing for Floriana F.C?");
        $(".info").hide();
        $("img").remove();
        $(".image").prepend('<img style="width:500px;" src="http://www.mfa.com.mt/dynimage/gallerylarge/11942/image.jpg">');
        $(".answer-9").append('<input type="button" value="Mikel Arteta" class="answer" style="width: 200px;"/>').show();
        $('.answer-9').on('click','.answer',function(){
          $(".answer-9").fadeOut(200);
          $(".answer-10").fadeOut(200);
          $(".answer-11").fadeOut(200);
          $(".answer-12").fadeOut(200);
          $(".answer").remove();
          setTimeout(function(){
            $('.info').fadeIn(200).text("Incorrect. Arteta initially went to Everton on loan from Real Sociedad, before making the move permanent the following season. He went on to Appear 174 times for the blues before moving to Arsenal.");
          }, 200);
          setTimeout(function(){
            $('.btn').append('<input type="button" value="Next question" class="next-3"/>');
          }, 600);
        });
        $(".answer-10").append('<input type="button" value="Francis Jeffers" class="answer" style="width: 200px;"/>').show();
        $('.answer-10').on('click','.answer',function(){
          correct ++;
          $(".answer-9").fadeOut(200);
          $(".answer-10").fadeOut(200);
          $(".answer-11").fadeOut(200);
          $(".answer-12").fadeOut(200);
          $(".answer").remove();
          setTimeout(function(){
            $('.info').fadeIn(200).text("Correct. Shortly before calling time on his professional career in 2013, Francis made 2 apperances for the Maltese Premier Leauge side.");
          }, 200);
          setTimeout(function(){
            $('.btn').append('<input type="button" value="Next question" class="next-3"/>');
          }, 600);
        });
        $(".answer-11").append('<input type="button" value="Shkodran Mustafi" class="answer" style="width: 200px;"/>').show();
        $('.answer-11').on('click','.answer',function(){
          $(".answer-9").fadeOut(200);
          $(".answer-10").fadeOut(200);
          $(".answer-11").fadeOut(200);
          $(".answer-12").fadeOut(200);
          $(".answer").remove();
          setTimeout(function(){
            $('.info').fadeIn(200).text("Incorrect. The three years spent at Everton were incredibly frustrating for Mustafi, who only made 1 apperance and featured on the bench a handful of times.");
          }, 200);
          setTimeout(function(){
            $('.btn').append('<input type="button" value="Next question" class="next-3"/>');
          }, 600);
        });
        $(".answer-12").append('<input type="button" value="Philippe Senderos" class="answer" style="width: 200px;"/>').show();
        $('.answer-12').on('click','.answer',function(){
          $(".answer-9").fadeOut(200);
          $(".answer-10").fadeOut(200);
          $(".answer-11").fadeOut(200);
          $(".answer-12").fadeOut(200);
          $(".answer").remove();
          setTimeout(function(){
            $('.info').fadeIn(200).text("Incorrect. Senderos was loaned by Arsenal to Everton in January 2010, making three apperances.");
          }, 200);
          setTimeout(function(){
            $('.btn').append('<input type="button" value="Next question" class="next-3"/>');
          }, 600);
        });
      });

      //Question 4
      $('.btn').on('click','.next-3',function(){
        $('.next-3').fadeOut(0);
        questionNum = 4;
        $(".question-number").text('Question:' + questionNum + '/4');
        $(".question").text("What name is commonly given to the Lock-Up on the Everton crest?");
        $(".info").hide();
        $("img").remove();
        $(".image").prepend('<img style="width:500px;" src="http://i2.liverpoolecho.co.uk/incoming/article6672557.ece/ALTERNATES/s1227b/at040214flockup-1.jpg">');
        $(".answer-13").append('<input type="button" value="Prince Edward’s Tower" class="answer" style="width: 200px;"/>').show();
        $('.answer-13').on('click','.answer',function(){
          $(".answer-13").fadeOut(200);
          $(".answer-14").fadeOut(200);
          $(".answer-15").fadeOut(200);
          $(".answer-16").fadeOut(200);
          $(".answer").remove();
          setTimeout(function(){
            $('.info').fadeIn(200).text("Incorrect. The Grade II-listed building was originally opened in 1787.");
          }, 200);
          setTimeout(function(){
            $('.btn').append('<input type="button" value="Finish" class="finish"/>');
          }, 600);
        });
        $(".answer-14").append('<input type="button" value="Prince William’s Tower" class="answer" style="width: 200px;"/>').show();
        $('.answer-14').on('click','.answer',function(){
          $(".answer-13").fadeOut(200);
          $(".answer-14").fadeOut(200);
          $(".answer-15").fadeOut(200);
          $(".answer-16").fadeOut(200);
          $(".answer").remove();
          setTimeout(function(){
            $('.info').fadeIn(200).text("Incorrect. A depiction of the Everton Lock-Up has appeared on the crest of professional football club Everton F.C. since 1938.");
          }, 200);
          setTimeout(function(){
            $('.btn').append('<input type="button" value="Finish" class="finish"/>');
          }, 600);
        });
        $(".answer-15").append('<input type="button" value="Prince Henry’s Tower" class="answer" style="width: 200px;"/>').show();
        $('.answer-15').on('click','.answer',function(){
          $(".answer-13").fadeOut(200);
          $(".answer-14").fadeOut(200);
          $(".answer-15").fadeOut(200);
          $(".answer-16").fadeOut(200);
          $(".answer").remove();
          setTimeout(function(){
            $('.info').fadeIn(200).text("Incorrect. Since Febuary 2014, the Lock-Up has been permanently illuminated blue at night.");
          }, 200);
          setTimeout(function(){
            $('.btn').append('<input type="button" value="Finish" class="finish"/>');
          }, 600);
        });
        $(".answer-16").append('<input type="button" value="Prince Rupert’s Tower" class="answer" style="width: 200px;"/>').show();
        $('.answer-16').on('click','.answer',function(){
          correct++;
          $(".answer-13").fadeOut(200);
          $(".answer-14").fadeOut(200);
          $(".answer-15").fadeOut(200);
          $(".answer-16").fadeOut(200);
          $(".answer").remove();
          setTimeout(function(){
            $('.info').fadeIn(200).text("Correct. The towers nickname stems from a commander during the English Civil War.");
          }, 200);
          setTimeout(function(){
            $('.btn').append('<input type="button" value="Finish" class="finish"/>');
          }, 600);
        });
      });

      //finish
      $('.btn').on('click','.finish',function(){
        $('.finish').fadeOut(0);
        questionNum = 4;
        $(".question-number").fadeOut(0);
        $(".question").text("You Got " + correct + " out of 4 Correct");
        $(".info").hide();
        $("img").remove();
        $(".image").prepend('<img style="width:500px;" src="https://marketingweek.imgix.net/content/uploads/2014/11/EvertonFC.jpg?auto=compress,format,&crop=faces,entropy,edges&fit=crop&q=60&w=590&h=330">');
        $('.btn').append('<input type="button" value="Try again" class="try-again"/>');
      });

    $('.btn').on('click','.try-again', function(){
      location.reload();
    });

});
