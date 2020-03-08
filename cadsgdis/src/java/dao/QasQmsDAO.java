/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import bean.QasQms;
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
public class QasQmsDAO {
    private final static String GETQASQMS = "SELECT * " +
                                            "FROM QasQms;";
    
    public static List<QasQms> getQasQms(){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        List<QasQms> qasqms = new ArrayList<>();
        
        try{
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETQASQMS);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
               QasQms qq = new QasQms();
               
               qq.setId(rs.getInt("id"));
               qq.setNome(rs.getString("nome"));
               qq.setAbreviatura(rs.getString("abreviatura"));
                
               qasqms.add(qq);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return qasqms;
    }
}
