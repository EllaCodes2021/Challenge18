const { User, Thoughts, Reactions }

const thougthController = {
    addThought({ params, body }, res){
        console.log(params);
        Comment.create(body)
        .then(({  }) =>{
            return Thoughts.findOneAndUpdate(
                { _id:}
            )
        })
    }
}