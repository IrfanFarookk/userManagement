const useSpy = jest.fn();
const listenSpy = jest.fn();
jest.mock("../src/routes");

jest.doMock('express', () => {
    return () => ({
        use: useSpy,
        listen: listenSpy
    })
})

describe('Testing index.ts', ()=>{
    test('should call use fn', ()=> {
        require('../src/index');
        expect(useSpy).toHaveBeenCalled();
    })
})