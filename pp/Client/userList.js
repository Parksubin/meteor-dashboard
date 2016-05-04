if (Meteor.isClient) {

Template.Input.events({


   'click button' :function (evt,tmpl) {


       Users.insert({
          no:tmpl.find('input[name=no]').value,
           name:tmpl.find('input[name=name]').value,
           email:tmpl.find('input[name=email]').value

       });
      if(input[name=no])
      {
          evt.target.text.value=" ";
      }
   }

});


 Template.userList.helpers({
listname:function () {
    return "사용자 목록";
},
     list :function () {

   /*      var arr = [
             {no:20111779, name:"박수빈1" , email:"tnqls8336@gmail.com"},
             {no:20111778, name:"박re수빈2" , email:"tnqls8336@gmail.com"},
             {no:20111777, name:"박수빈3" , email:"tnqls8336@gmail.com"},
             {no:20111776, name:"박수빈4" , email:"tnqls8336@gmail.com"}

         ];
         arr=_.sortBy(arr,function (obj){
             return obj.no;
         }); /!*no기준으로 오름차순 정렬해주는 함수 외워두기*!/
*/
         /*return arr;*/

         return Users.find();
     }
     
 });

    Template.userList.events({
       
        
    });


    Template.userListItem.events({
        'click button' :function (evt,tml) {
            alert(this.no + this.name +this.email);




        }

    });
}



if (Meteor.isServer) {

}
