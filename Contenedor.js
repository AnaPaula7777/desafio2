const fs = require('fs');

class Contenedor {
    constructor(archivo) {
      this.archivo = archivo;
    }

    save(obj) {
        let sizeObj = 0;

        fs.readFile('./'+`${this.archivo}`, 'utf-8', (err, data) => {
            if(err) throw 'Error al leer';
             objData = JSON.parse(data);
             objData.child = obj;
             jsonData = JSON.stringify(dataObj);
             sizeObj = objData.length;
            console.log(typeof data)
        })
            
             data = JSON.parse(data);
             objData.child = obj;
             jsonData = JSON.stringify(dataObj);
             sizeObj = objData.length
             fs.writeFile('./'+`${this.archivo}`,`${jsonData}, id: ${sizeObj}`, 'utf-8', (err) => {
                 if(err) throw 'Error al anadir objeto';
             })
         
         return sizeObj++;
     }

    // getById(id) {
    //     fs.readFile('./'+`${this.archivo}`, 'utf-8', (err, data) => {
    //         if(err) throw 'Error al leer';
    //         if(data.length > 0){
    //          data.map((obj) => {
    //             return obj.id == id ?  obj : 'Objeto no encontrado'})
    //         }else if(data.length == 0){
    //          return 'Archivo vacio'}
    //     })
    // }
  }

  let example = new Contenedor('test.txt')
  example.save( {
    title: 'Calculadora',
    price: 58.45,
    thumbnail: 'rtgr'
})