function AddFavoriteMovie(data) {
  
  return {
    type: "SET_FAVORITE",
    payload: data,
    //NEW VALUE
  };
}


export default AddFavoriteMovie ;
