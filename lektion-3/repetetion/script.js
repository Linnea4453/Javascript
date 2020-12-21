/* 
    Data Types
    JS              C#
    ----------------------------------------------------
    String          String,
    Number          int, long, double, decimal, float
    Boolean         bool (Boolean)
    Object          object, null
    JS
    ARRAY, OBJECT, NULL = Object
*/
    // let datatype = []
    // console.log(typeof datatype)


/* String */
    // var stringVarable = ""
    // var stringVarable = ''
    // var stringVarable = ``  //  <=     shift + ´

    // var fullName = 'Hans'
    // var greeting = 'Hej jag heter ' + fullName + '.'
    // var greeting = `Hej jag heter ${fullName}. `
    // console.log(greeting)

    // console.log(greeting.length)
    // console.log(greeting.toLocaleLowerCase())
    // console.log(greeting.toLocaleUpperCase())
    // console.log(greeting.indexOf('Hans'))
    // console.log(greeting.concat(' Jag bor i Farsta'))
    // console.log(greeting.trim())


/* Number */
    // var value = 1
    // var value = 1.1
    // var value = 1e-5
    // var value = 1e5
    // var value = 0.123123123
    // console.log(value)


/* Boolean */
    // var status = true
    // console.log(status)


/* Object */
    // let objectValue = {}

    // let person1 = {
    //     firstName: 'Hans',
    //     lastName: 'Mattin-Lassei',
    //     age: 36,
    //     skills: ['C#', 'Javascript', 'HTML och CSS'],
    //     address: {
    //         addressLine: 'Havsörnsgränd 2',
    //         zipCode: '123 49',
    //         city: 'Farsta'
    //     },
    //     fullName: function() {
    //         return `${this.firstName} ${this.lastName}`
    //     }
    // }

    // console.log(person1.fullName())
    // console.log(person1.skills)
    // console.log(person1.skills[0])
    // console.log(person1.address)
    // console.log(person1.address.addressLine)

    // /* Convert to JSON */
    // let json = JSON.stringify(person1)
    // console.log(json)

    // /* Convert from JSON */
    // let person2 = JSON.parse(json)
    // console.log(person2)


/* Classes */
    // class Address {
    //     constructor(addressLine, zipCode, city) {
    //         this.addressLine = addressLine
    //         this.zipCode = zipCode
    //         this.city = city
    //     }
    // }


    // class Person {
    //     constructor(firstName = '', lastName = '', age = 0, skills = [], address = new Address()) {
    //         this.firstName = firstName
    //         this.lastName = lastName
    //         this.age = age
    //         this.skills = skills
    //         this.address = address
    //     }

    //     fullName() {
    //         return `${this.firstName} ${this.lastName}`
    //     }
    // }

    // let person1 = new Person()
    // let person2 = new Person('Hans','Mattin-Lassei', 36, ['C#','HTML'], new Address('Havsörnsgränd 2', '123 49', 'Farsta'))
    // console.log(person2.fullName())
    // console.log(person2.address)
    // console.log(person2.address.addressLine)
    // console.log(person2.skills)


/* Functions - var/function = GLOBAL, let/const = LOCAL */
    // function greeting1(name) {
    //     return `Välkommen ${name}!`
    // }

    // const greeting2 = (name) => {
    //     return `Välkommen ${name}!`
    // }

    // console.log(greeting1('Hans'))
    // console.log(greeting2('Hans'))