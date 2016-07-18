/* Defining schema for database*/
Candidates = new Mongo.Collection('Candidates');
Candidates.allow({
  insert: function(userId, doc) {
    return !!userId; 
  }
});

Skills = new SimpleSchema({
   skill: {
      type: String
   },
   proficiency: {
    type: String
   }

});

CandidatesSchema = new SimpleSchema({
   
   name: {
       type: String,
       label: "Name"
   },

  linkedIn: {
       type: String,
       label: "LinkedIn"
   },

   title: {

       type: String,
       label: "Title"
   },

   experience: {

        type: String,
        allowedValues: ['Less than 1 year', '1 - 2 years', '3 - 5 years', '5 - 10 years', '10+ years' ],
        label: "Years of Experience"

   },

   degree: {
      type: String,
      label: "Degree"

   },
   
   location: {
      type: String,
      label: "Location"

   },
   

    skills: {
       type: [Skills]

    },

    phone: {

       type: String,
       label: "Phone"
   },

    email: {

       type: String,
       label: "E-mail"
   },

   relocation: {

        type: String,
        allowedValues: ['Yes','No' ],
        label: "Willing to Relocate?"

   },


   addedAt:{
      type: Date,
      label: "Added At",

      autoValue: function(){
        
        return new Date()
      }, 
      autoform: {
        type: "hidden"
      } 
   }

});
Candidates.attachSchema(CandidatesSchema);