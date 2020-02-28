/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import bean.Categoria;
import conection.ConnectionFactory;
import static dao.CategoriaDAO.conn;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

/**
 *
 * @author depaula
 */
public class CursoHasCategoriaDAO {    
    
    private final static String GETCATBYCURSO = "select cat.* " +
                                                "from Curso_has_Categoria as c_cat, Categoria as cat, Curso as c " +
                                                "where c.id = ? and cat.id = c_cat.idCategoria and c.id = c_cat.idCurso";
    
    static Connection conn = null;
    static PreparedStatement pstm = null;
    static ResultSet rs = null;
    
    //Lista com categorias por curso
    public static ArrayList<Categoria> getCategoriasByCurso(int idCurso){
        conn = null;
        pstm = null;
        rs = null;
        ArrayList<Categoria> categorias = new ArrayList<>();
        
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETCATBYCURSO);
            pstm.setInt(1, idCurso);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                Categoria categoria = new Categoria();
                
                categoria.setId(rs.getInt("id"));
                categoria.setNome(rs.getString("nome"));
                categoria.setDescricao(rs.getString("descricao"));
                
                categorias.add(categoria);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return categorias;
    }
}
