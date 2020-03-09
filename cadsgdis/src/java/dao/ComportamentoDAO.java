/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import bean.Comportamento;
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
public class ComportamentoDAO {
    private final static String GETCOMPORTAMENTOS = "select * " +
                                                     "from Comportamento";
    
    public static List<Comportamento> getComportamentos(){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        List<Comportamento> comportamentos = new ArrayList<>();
        
        try{
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETCOMPORTAMENTOS);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
               Comportamento comportamento = new Comportamento();
               
               comportamento.setId(rs.getInt("id"));
               comportamento.setNome(rs.getString("nome"));
                
               comportamentos.add(comportamento);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return comportamentos;
    }
}
