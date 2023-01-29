export function phonetic(input) {

    var mapObj = {
      a:"Alfa|",b:"Bravo|",c:"Charlie|",d:"Delta|",e:"Echo|",f:"Foxtrot|",g:"Golf|",h:"Hotel|",i:"India|",j:"Juliett|",k:"Kilo|",l:"Lima|",m:"Mike|",
      n:"November|",o:"Oscar|",p:"Papa|",q:"Quebec|",r:"Romeo|",s:"Sierra|",t:"Tango|",u:"Uniform|",v:"Victor|",w:"Whiskey|",x:"X-Ray|",y:"Yankee|",z:"Zulu|",1:"One|",2:"Two|",3:"Three|",4:"Four|",5:"Five|",6:"Six|",7:"Seven|",8:"Eight|",9:"Niner|",0:"Zero|",
    };
    var substitute = input.replace(/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|0|1|2|3|4|5|6|7|8|9/ig, function(matched) {
      return mapObj[matched];
    });
    var final = substitute.replace(/ /g, " [space] ").replace(/[|]/g, " ").replace(/[.]/g, "[STOP/DECIMAL]").replace(/ [-]/g, " [DASH] ").replace(/ ,/g, ",").replace(/  /g, " ")
    return final;
}