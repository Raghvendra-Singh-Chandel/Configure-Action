
describe('uploading file plugin',() =>
{
    it.skip('uploading file by clicking',() =>
    {
        cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')
        cy.get('form').find('[type=file]').attachFile('../info.txt')
        cy.get('input[type=submit]').click()
    })
    it('upload file ',() =>
    {
        cy.visit('https://designmodo.com/file-uploader/#easy-file-uploading')
        cy.get('#attachment_339026').find('a').invoke('removeAttr', 'target').click()
        cy.get('#droply-filedrag-mas').attachFile('Mountain.jpg',{subjectType : "drag-n-drop"})
    })
})