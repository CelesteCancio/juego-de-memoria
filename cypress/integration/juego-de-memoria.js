//1. Arrange - setup initial app state        
//2. Act - take an action
//3. Assert - make an assertion

const URL = "http://127.0.0.1:5500/index.html";
const numero_fichas = 16;
const fraseFinDeJuego = "Terminaste!";

context ("Juego de memoria", ()=>{
     before(() => {
        cy.visit(URL);
     });

     it("Se asegura que haya un tablero con fichas", () => {
        cy.get("#tablero").find(".ficha").should("have.length", numero_fichas);
     });

     it("se asegura que las fichas sean aleatorias", () => {
        cy.get(".ficha").then(fichas => {
           let clasesFichasOriginales = [];
           fichas.each(function(i,ficha){
            clasesFichasOriginales.push(ficha.className);
           });

           cy.visit(URL);

           let clasesFichasNuevas = [];
           cy.get(".ficha").then(nuevasFichas => {
              nuevasFichas.each(function(i,nuevaFicha){
                 clasesFichasNuevas.push(nuevaFicha.className);
              });
              cy.wrap(clasesFichasOriginales).should("not.deep.equal",clasesFichasNuevas);
           });           
        }); 
      });

        describe("Resuelve el juego", () => {
           let mapaDePares, listaDePares;
           it("Elige una combinación errónea", () => {
              cy.get(".ficha").then(fichas => {
                 mapaDePares = obtenerParesDeFichas(fichas);
                 listaDePares = Object.values(mapaDePares);
                 console.log(listaDePares);

                 //Combinacion erronea xq se que los iguales estan en [0][0], [1][1], etc.
                 cy.get(listaDePares[0][0]).click();
                 cy.get(listaDePares[1][0]).click();

                 cy.get(".ficha").should("have.length",numero_fichas);
              });
           });

           it("Resuelve el juego", () => {
              cy.get(".ficha").should("have.length",numero_fichas);
              listaDePares.forEach((par => {
                 cy.get(par[0]).click();
                 cy.get(par[1]).click();
              }));
              cy.get(".ficha").should("have.length",0);
              cy.get("#tablero").should("not.be.visible");
              const numeroRondas = numero_fichas/2 + 1; //xq se testeo una incorrecta
              cy.get(".finDelJuego").should("be.visible").contains(fraseFinDeJuego);
           });
        });
     
});

function obtenerParesDeFichas (fichas){
   const pares = {};
   fichas.each((i,ficha) => {
      const claseColor = ficha.className.replace("ficha h-100 ","");

      if(pares[claseColor]){
         pares[claseColor].push(ficha);
      }
      else{
         pares[claseColor]=[ficha];
         /*/Es lo mismo que poner:
         pares[claseColor] = [];
         pares[claseColor].push(ficha); /*/
      }
   });
   console.log(pares);
   return pares;
}