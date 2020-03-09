/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import bean.EscolaFormacao;
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
public class EscolaFormacaoDAO {
    private final static String GETESCOLASFORMACAO = "select * " +
                                                     "from EscolaFormacao " + 
                                                     "where idForca = ?";
    
    private final static String GETABREVESCOLA = "select abreviatura " +
                                                     "from EscolaFormacao " + 
                                                     "where id = ?";
    
    public static List<EscolaFormacao> getEscolasFormacao(int idForca){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        List<EscolaFormacao> escolas = new ArrayList<>();
        
        try{
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETESCOLASFORMACAO);
            pstm.setInt(1, idForca);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
               EscolaFormacao escolaformacao = new EscolaFormacao();
               
               escolaformacao.setId(rs.getInt("id"));
               escolaformacao.setNome(rs.getString("nome"));
               escolaformacao.setAbreviatura(rs.getString("abreviatura"));
               escolaformacao.setIdForca(rs.getInt("idForca"));
                
               escolas.add(escolaformacao);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return escolas;
    }
    
    public static String getAbreviaturaEscola(int idEscolaFormacao){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        String abreviatura = "";
        
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETABREVESCOLA);
            pstm.setInt(1, idEscolaFormacao);
           
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
}
