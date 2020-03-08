/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import bean.EstadoCivil;
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
public class EstadoCivilDAO {
    private final static String GETESTADOSCIVIS = "select * " +
                                                  "from EstadoCivil";
    
    public static List<EstadoCivil> getEstadosCivis(){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        List<EstadoCivil> estadoscivis = new ArrayList<>();
        
        try{
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETESTADOSCIVIS);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
               EstadoCivil estadocivil = new EstadoCivil();
               
               estadocivil.setId(rs.getInt("id"));
               estadocivil.setNome(rs.getString("nome"));
                
               estadoscivis.add(estadocivil);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return estadoscivis;
    }
}
