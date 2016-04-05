$(document).ready(function() {
    $("#demo").textillate();
    $("#demo2").textillate();
    
});
var esegui =  $("#demo");

esegui.textillate({
        
        loop:false,
        Autostart:true,
        in:{
            effect: 'swing',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false,
            reverse: false,
            
                }
        
    });
var api = esegui.data('textillate');
$("#demo").click(function() {
    $("#demo").textillate({     
        in:{effect: 'swing'}
     })
    
   api.start();
});

var ap;
var ap2;
var ap3;
var ap4;
var opened = -1;
function eseguito(){
   opened += 1;
    if (opened % 2 == 0){
        
        
            $("#maincontenuto").css ('margin-left', '20%');
          $("#menu").css ('visibility', 'visible');
         $("#1").css ('display', 'block');
         $("#12").css ('display', 'block');
         $("#13").css ('display', 'block');
         $("#14").css ('display', 'block');
        
          var es = $("#1").textillate({
          loop:false,
          Autostart:false,
        in:{
            effect: 'wobble',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false,
            reverse: false,
        }
        });

          ap = es.data('textillate');

 var es2 = $("#12").textillate({
          loop:false,
          Autostart:false,
        in:{
            effect: 'wobble',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false,
            reverse: false,
        }
        });

          ap2 = es2.data('textillate');

 var es3 = $("#13").textillate({
          loop:false,
          Autostart:false,
        in:{
            effect: 'wobble',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false,
            reverse: false,
        }
        });

          ap3 = es3.data('textillate');

 var es4 = $("#14").textillate({
          loop:false,
          Autostart:false,
        in:{
            effect: 'wobble',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false,
            reverse: false,
        }
        });

          ap4 = es4.data('textillate');


    }else{
            $("#menu").css ('visibility', 'hidden');
            $("#maincontenuto").css ('margin', 'auto');
            $("#1").css ('display', 'none');
         $("#12").css ('display', 'none');
         $("#13").css ('display', 'none');
         $("#14").css ('display', 'none');
        
    }
};

$("#1").mouseenter(function(){    
   
        if (opened % 2 == 0){    
            ap.start();
        }
    
    });
$("#12").mouseenter(function(){    
    if (opened % 2 == 0){    
    ap2.start();
    }
    });
$("#13").mouseenter(function(){    
    if (opened % 2 == 0){    
    ap3.start();
    }
    });
$("#14").mouseenter(function(){    
    if (opened % 2 == 0){    
    ap4.start();
    }
    });

















