/* 
    CONSOLE
    Används för felsökning. Är typ den enda felsökningsmetoden vi har
    att använda oss utav.

    Ska bara användas i utvecklingsmiljön. Inte i produktionsmiljön.
    Dock finns vissa undantag.

    Det finns andra typer av felsökningsverktyg som heter ESLint.

    I Webbläsaren: Granska/Inspektera -> Console

    Sätt att felsöka på:
    myfunc()

    function myfunc() {
        console.logg('1')

        if(false) {
            console.log('2')

        } else {
            console.log('3')
        }
    }

*/
console.log(".log() = informationstext")
console.warn('.warn = varningsmeddelande')
console.error('.error = felmeddelande')

