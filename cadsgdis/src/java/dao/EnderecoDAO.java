/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import bean.Endereco;
import conection.ConnectionFactory;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author depaula
 */
public class EnderecoDAO {
    private final static String GETENDERECOBYOM = "select e.* " +
                                                        "from Endereco as e, OM as om " +
                                                        "where om.idEndereco = e.id and om.id = ?";
    
    public static Endereco getEnderecoByOm(int idOM){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        Endereco endereco = new Endereco();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETENDERECOBYOM);
            pstm.setInt(1, idOM);
           
            rs = pstm.executeQuery();
            while (rs.next()) {     
               endereco.setId(rs.getInt("e.id"));
               endereco.setCep(rs.getString("e.cep"));
               endereco.setDescricao(rs.getString("e.descricao"));
               endereco.setComplemento(rs.getString("e.complemento"));
               endereco.setPontoreferencia(rs.getString("e.pontoreferencia"));
               endereco.setBairro(rs.getString("e.bairro"));
               endereco.setIdCidade(rs.getInt("e.idCidade"));                
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return endereco;
    }
}
