exports.home=function(req,res){
    res.render('home',{title:'iLoveMyCity',
                      headline:'We believe that every city have something to say'
                      });
                    }
  
  
  exports.city=function(req,res){
      var cityName=req.params.city;
      var title,heading;
      var imageCount=4;
  
      if(cityName==='hyderabad'){
         title="hyderabad";
         heading="hyderabad:  Welcome to the universe. cross the line, redefine, lose your mind. ";
      }
      else if(cityName==='chennai'){
         title="chennai";
         heading="chennai: Dying is not a solution.. I want to live with You..!";
      }
      else if(cityName==='bangalore'){
         title="bangalore";
         heading="bangalore: Buzz, namma bangalore";
      }
      else if(cityName==='delhi'){
         title="delhi";
         heading="delhi: It's the warm and fuzzy feeling on a cold December night.";
      }
     
      res.render('city',{
          title:title,
          headline:heading,
          city:cityName,
          numberOfImages:imageCount});
    }
  