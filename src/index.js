export default function wrapLines(container, opentag, closingtag) {
        
    wrapWords = (str, tmpl) => str.replace(/\S+/g, tmpl || "<n>$&</n>");

    container.innerHTML = (wrapWords(container.textContent)); 

    var spans = container.children, 
        top = 0,
        tmp = '';

    for (let i = 0; i < spans.length; i++) {

        var rect = spans[i].getBoundingClientRect().top;
        if (top === 0) {
            top = rect;
            tmp = opentag;
        }

        if (top < rect) {
            tmp += closingtag + opentag;
            top = rect;
        }
        
        tmp += spans[i].textContent + ' ';    
    }    
    
    tmp += closingtag;
    
    container.innerHTML = tmp

}
