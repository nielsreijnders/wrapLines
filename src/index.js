export default function wrapLines(container, opentag, closingtag) {  
    var spans = container.children,
        top = 0,
        tmp = opentag;  
    container.innerHTML = container.textContent.replace(/\S+/g, '<n>$&</n>');     
    for (let i = 0; i < spans.length; i++) {
        var rect = spans[i].getBoundingClientRect().top;
        if (top < rect) {
            tmp += closingtag + opentag;
            top = rect;
        } 
        tmp += spans[i].textContent + ' ';   
    } 
    container.innerHTML = tmp += closingtag;
}