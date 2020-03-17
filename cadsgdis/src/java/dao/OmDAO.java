/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import bean.Estado;
import bean.EstadoForca;
import bean.Om;
import conection.ConnectionFactory;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author anderson
 */
public class OmDAO {
    private final static String GETOMBYFORCAANDESTADO = "select * " +
                                                        "from OM " +
                                                        "where idForca = ? and idEstado = ?";
    
    private final static String GETABREVOM = "select abreviatura " +
                                             "from OM " +
                                             "where id = ?";
    
    private final static String GETOM = "select * " +
                                             "from OM " +
                                             "where id = ?";
    private final static String GETOMAMAZONIA = "select * " +
                                             "from OM " +
                                             "where idForca = ? and (idEstado = 1 or idEstado = 3 or idEstado = 21 or idEstado = 22)";
    
    public static List<Om> getOmsByForcaAndEstado(int idForca, int idEstado){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        List<Om> oms = new ArrayList<>();
        
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETOMBYFORCAANDESTADO);
            pstm.setInt(1, idForca);
            pstm.setInt(2, idEstado);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
               Om om = new Om();
               
               om.setId(rs.getInt("id"));
               om.setNome(rs.getString("nome"));
               om.setAbreviatura(rs.getString("abreviatura"));
               om.setNumEndereco(rs.getString("numendereco"));
               om.setIdForca(rs.getInt("idForca"));
               om.setIdEstado(rs.getInt("idEstado"));
               om.setIdEndereco(rs.getInt("idEndereco"));
                
               oms.add(om);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return oms;
    }
    public static List<Om> getOmsAmazonia(int idForca){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        List<Om> oms = new ArrayList<>();
        
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETOMAMAZONIA);
            pstm.setInt(1, idForca);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
               Om om = new Om();
               
               om.setId(rs.getInt("id"));
               om.setNome(rs.getString("nome"));
               om.setAbreviatura(rs.getString("abreviatura"));
               om.setNumEndereco(rs.getString("numendereco"));
               om.setIdForca(rs.getInt("idForca"));
               om.setIdEstado(rs.getInt("idEstado"));
               om.setIdEndereco(rs.getInt("idEndereco"));
                
               oms.add(om);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return oms;
    }
    public static String getAbreviaturaOM(int idOM){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        String abreviatura = "";
        
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETABREVOM);
            pstm.setInt(1, idOM);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
               
               abreviatura = rs.getString("abreviatura");
               
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return abreviatura;
    }
    public static Om getOM(int idOM){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        Om om = new Om();
        
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETOM);
            pstm.setInt(1, idOM);
           
            rs = pstm.executeQuery();
            while (rs.next()) {   
               om.setId(rs.getInt("id"));
               om.setNome(rs.getString("nome"));
               om.setAbreviatura(rs.getString("abreviatura"));
               om.setNumEndereco(rs.getString("numendereco"));
               om.setIdForca(rs.getInt("idForca"));
               om.setIdEstado(rs.getInt("idEstado"));
               om.setIdEndereco(rs.getInt("idEndereco"));
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return om;
    }
}
