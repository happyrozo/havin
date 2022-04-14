/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


$(document).ready(function(){
    
    //CODES TO DISPALY PRODUCT SUB CATEGORY
    $("#prod-label").mouseenter(function(){
        $(this).addClass("label-huva");
        $("#prod-label-hover").css("display","block");
        
    });
    
      $("#prod-label").mouseleave(function(){
        $(this).removeClass("label-huva");
        $("#prod-label-hover").css("display","none");    
    });
    
      $("#prod-label-hover").mouseenter(function(){
        $(this).removeClass("label-huva");
        $("#prod-label-hover").css("display","block");    
    });
    
       $("#prod-label-hover").mouseleave(function(){
        $(this).removeClass("label-huva");
        $("#prod-label-hover").css("display","none");    
    });
    
    
      //CODES TO DISPALY HOME SUB CATEGORY
    $("#hm-label").mouseenter(function(){
        $(this).addClass("label-huva");
        $("#hm-label-hover").css("display","block");
        
    });
    
      $("#hm-label").mouseleave(function(){
        $(this).removeClass("label-huva");
        $("#hm-label-hover").css("display","none");    
    });
    
      $("#hm-label-hover").mouseenter(function(){
        $(this).removeClass("label-huva");
        $("#hm-label-hover").css("display","block");    
    });
    
       $("#hm-label-hover").mouseleave(function(){
        $(this).removeClass("label-huva");
        $("#hm-label-hover").css("display","none");    
    });
    
         //CODES TO DISPALY HOME SUB CATEGORY
    $("#hm-label").mouseenter(function(){
        $(this).addClass("label-huva");
        $("#hm-label-hover").css("display","block");
        
    });
    
      $("#hm-label").mouseleave(function(){
        $(this).removeClass("label-huva");
        $("#hm-label-hover").css("display","none");    
    });
    
           //CODES TO DISPALY AND CLOSE LOGIN FORM
    $("#sign-button").click(function(){
        $("#sign-form").css("display","block");
        
    });
    
      $(".close").click(function(){
         $("#sign-form").css("display","none");    
    });
    
               //CODES TO DISPALY AND CLOSE REGISTER FORM
    $("#reg-button").click(function(){
        $("#reg-form").css("display","block");
        
    });
    
      $(".close").click(function(){
         $("#reg-form").css("display","none");    
    });
    
               //CODES TO DISPALY REGISTER FORM AND CLOSE LOGIN FORM
    $("#form-reg-label").click(function(){
        $("#sign-form").css("display","none");
        $("#reg-form").css("display","block");   
    });
    
               //CODES TO DISPALY LOGIN FORM AND CLOSE REG FORM
    $("#form-lgn-label").click(function(){
        $("#reg-form").css("display","none");
        $("#sign-form").css("display","block");   
    });
    
              //CODES TO DISPALY AND CLOSE LOGIN FORM FROM THE MEMBER DIV
     $("#mem-sign").click(function(){
        $("#sign-form").css("display","block");
        
    });
    
      $(".close").click(function(){
         $("#sign-form").css("display","none");    
    });
    
              //CODES TO DISPALY AND CLOSE LOGIN FORM FROM THE MEMBER DIV
     $("#mem-logn").click(function(){
        $("#reg-form").css("display","block");
        
    });
    
      $(".close").click(function(){
         $("#reg-form").css("display","none");    
    });
});