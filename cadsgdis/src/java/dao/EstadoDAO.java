/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import bean.Estado;
import conection.ConnectionFactory;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;



/**
 *
 * @author depaula
 */
public class EstadoDAO {
    private final static String GETESTADOS = "select * " +
                                            "from Estado";
    
    public static List<Estado> getEstados(){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        List<Estado> estados = new ArrayList<>();
        
        try{
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETESTADOS);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
               Estado estado = new Estado();
               
               estado.setId(rs.getInt("id"));
               estado.setNome(rs.getString("nome"));
               estado.setSigla(rs.getString("sigla"));
                
               estados.add(estado);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return estados;
    }
}
