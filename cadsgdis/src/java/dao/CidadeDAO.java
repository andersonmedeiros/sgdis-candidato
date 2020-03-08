/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import bean.Cidade;
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
public class CidadeDAO {
    private final static String GETCIDADES = "select * " +
                                             "from Cidade " +
                                             "where idEstado = ?";
    
    public static List<Cidade> getCidadesByEstado(int idEstado){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        List<Cidade> cidades = new ArrayList<>();
        
        try{
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETCIDADES);
            pstm.setInt(1, idEstado);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
               Cidade cidade = new Cidade();
               
               cidade.setId(rs.getInt("id"));
               cidade.setNome(rs.getString("nome"));
               cidade.setIdEstado(rs.getInt("idEstado"));
                
               cidades.add(cidade);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return cidades;
    }
}
