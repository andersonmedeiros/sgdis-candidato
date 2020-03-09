/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import bean.GrauParentesco;
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
public class GrauParentescoDAO {
    private final static String GETGRAUSPARENTESCO = "select * " +
                                                     "from GrauParentesco";
    
    public static List<GrauParentesco> getGrausParentesco(){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        List<GrauParentesco> grausparentesco = new ArrayList<>();
        
        try{
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETGRAUSPARENTESCO);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
               GrauParentesco grauparentesco = new GrauParentesco();
               
               grauparentesco.setId(rs.getInt("id"));
               grauparentesco.setNome(rs.getString("nome"));
               
               grausparentesco.add(grauparentesco);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return grausparentesco;
    }
}
