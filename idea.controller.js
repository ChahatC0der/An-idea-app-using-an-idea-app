const ideas = require("../Ideaappmodels/idea.model")


/* 
* Search all ideas
*/
exports.fetchAllIdeas=(req,res)=>{
    res.status(200).send(ideas)
}

/* 
* Create new idea
*/
let ideacount=1;
exports.createIdea=(req,res)=>{
    // Read the request body
    const idea = req.body;

    // Need to generate the next idea no.
    idea.idea_no = ++ideacount;

    // Save it in the existing list of ideas
    ideas[ideacount]=idea;

    // return the response
    res.status(201).send(ideas[ideacount]);

}
/* 
* Update ideas
*/
exports.updateIdea=(req,res)=>{
    //I need to read the id passed in the path
    // 127.0.0.1:8080/ideaApp/v1/ideas/1
    const ideaId= req.params.id;

    //If the idea is present - modify else return error
    if(ideas[ideaId]){
        ideas[ideaId]=req.body;
        res.status(200).send(ideas[ideas]);
    }else{
        res.status(400).send({
            message:"Idea id passed was not correct"
        })
    }  
}
/* 
* Delete idea
*/
exports.deleteIdea=(req,res)=>{
    // check if idea to be deleted is present or not
    const ideaId= req.params.id;

    //If the idea is present - delete else return error
    if(ideas[ideaId]){
        delete ideas[ideaId];
        res.status(200).send({
            message:"Successfully deleted"
        });
    }else{
        res.status(400).send({
            message:"Idea id passed was not correct or not present"
        })
    }  
}
