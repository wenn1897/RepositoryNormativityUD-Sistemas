export const queries = {
    getAllNormas: 'SELECT * FROM res_normas',
    addNewNorma: 'INSERT INTO res_normas (id, numero_norma, tipo_norma, tema, actor, fecha_inicio, fecha_final) VALUES (@id, @numero_norma, @tipo_norma, @tema, @actor, @fecha_inicio, @fecha_final)',
    getNormaById: 'SELECT * FROM res_normas WHERE id= @id',
    updateNormaById: 'UPDATE res_normas SET fecha_final= @fecFin WHERE id= @id',
}