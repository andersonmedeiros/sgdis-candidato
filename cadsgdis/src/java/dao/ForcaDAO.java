/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import bean.Forca;
import bean.Militar;
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
public class ForcaDAO {
    private final static String GETFORCAS = "select * from Forca";
    public static List selectAllForca() throws Throwable, Exception{
        List<Militar> dadosMilitarList = new ArrayList();
        List<Forca> dadosForcaList = new ArrayList();
        PreparedStatement stmt = null;
        ResultSet rs = null;

        stmt = ConnectionFactory.getConnection().prepareStatement("select * from Forca order by id");
        rs = stmt.executeQuery();

        Militar mil = null;
        Forca forca = null;
        while(rs.next()){
            mil = new Militar();
            forca = new Forca();
            
            int id = rs.getInt("id");
            String nome = rs.getString("nome");
            String sigla = rs.getString("sigla");
            forca.setId(id);
            forca.setNome(nome);
            forca.setSigla(sigla);

            dadosForcaList.add(forca);
        }

        stmt.close();
        rs.close();
        
       return dadosForcaList;
    }
    
    public static List<Forca> getForcas(){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        List<Forca> forcas = new ArrayList<>();
        
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETFORCAS);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                Forca forca = new Forca();
                
                forca.setId(rs.getInt("id"));
                forca.setNome(rs.getString("nome"));
                forca.setSigla(rs.getString("sigla"));
                
                
                forcas.add(forca);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return forcas;
    }
}
