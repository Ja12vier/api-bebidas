
  const Card=({datas})=>{
   
   
    console.log(datas)

       return(
       <article>

             <div className="articlet">
             <div className="img">
                <img src={datas.strDrinkThumb} alt="" />
              </div>
                <hr />
           <div className="descrip">
             <h1>{datas.strDrink}</h1>
            <p>{datas.strInstructions}</p>
         </div>

             </div>

    </article>
  )
}

export default Card