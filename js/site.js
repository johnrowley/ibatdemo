$(function () {
    
    $('#btnLoadMovies').on('click', function () {

      //  console.log(`loading the movies`);

        $.getJSON('https://college-movies.herokuapp.com/',function(movieData){

            console.log(`loading the movies with json call`);
            htmlString = [];
            console.log(movieData);
            for(i = 0; i < movieData.length; i++) {

                console.log(`Title is ${movieData[i]['title']}`);

                htmlString.push(`<p> ${movieData[i]['title']}</p>`)

                cast = movieData[i]['cast'].split(",")
                console.log(cast);
                htmlString.push(`<ol>`)
                for(const member of cast) {

                    console.log(`Member  is ${member}`);
                    htmlString.push(`<li>Cast: ${member}</li>`)


                }
                htmlString.push(`</ol>`)

            } // for

            $('#messagePanel').html(htmlString.join(' '));
          
        

        })









    } );


   
}) // end init funciton 