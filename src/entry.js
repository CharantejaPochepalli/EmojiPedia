
function entry(props){
    return(
      
               <div className="term"> <div className="term">
                    <dt>
                        <span className="emoji" role="img" >
                        
                    {props.emoji}
                        </span>
                        <span>{props.name}</span>
                    </dt>
                    <dd>
                        {props.description}
                    </dd>
                </div>
        </div>
    );
}
export default entry