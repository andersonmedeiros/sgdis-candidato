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
public class ForcaHasEstadoDAO {
    private final static String GETESTADOBYFORCA = "select e.* " +
                                                   "from Forca as f, Estado as e, Forca_has_Estado as f_e " +
                                                   "where f_e.idForca = f.id and f_e.idEstado = e.id and f.id = ?";
    
    public static List<Estado> getEstadosByForca(int idForca){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        List<Estado> estados = new ArrayList<>();
        
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETESTADOBYFORCA);
            pstm.setInt(1, idForca);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                Estado estado = new Estado();
                
                estado.setId(rs.getInt("e.id"));
                estado.setNome(rs.getString("e.nome"));
                estado.setSigla(rs.getString("e.sigla"));
                
                estados.add(estado);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return estados;
    }
}
