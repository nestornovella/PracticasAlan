
const { coloresPrimarios, verifyAge } = require("../funciones");



test('verificar edad', ()=>{
    expect(verifyAge(20)).toBe(false)
})