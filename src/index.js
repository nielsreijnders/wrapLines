//Giving the option for the opentag and closingtag for if you want to give a div overflow hidden
export default function wrapLines(container, opentag, closingtag) {
        
    function wrapWords(str, tmpl) {
        //\S to return every word/character otherwise it won't return the ' , . + = * ! @ # $ % ^ &
        return str.replace(/\S+/g, tmpl || "<n>$&</n>"); //replaced span tag to n tag to save 5 bytes :)
    }

    //Replace each word in a span
    container.innerHTML = (wrapWords(container.textContent));     //Get the content/text of the container

    //Set the spans in a var
    var spans = container.children, //spans
    top = 0, //Instead of NULL change it to 0 to save 2 bytes
    tmp = '';

    //Go trough each span 
    //Saved 20 bytes by using a for loop instead of a foreach
    for (let i = 0; i < spans.length; i++) {

        var rect = spans[i].getBoundingClientRect().top;

        //Set the first opentag
        if (top === 0) {
            
            top = rect;

            tmp = opentag;
        }

        //After setting the first opentag check if there is a span that has a different top/height so it knows when it has to use the closingtag
        if (top < rect) {
            //Close it and after that open a new one
            tmp += closingtag + opentag;
            //If it checked if there is a new line change the top of the new line
            top = rect;
        }

        //Add the words + space bewtween them
        tmp += spans[i].textContent + ' ';    
        
    }    
    
    //end the last line with a closingtag
    tmp += closingtag;
    
    //And finnaly add everything in the container
    container.innerHTML = tmp

}