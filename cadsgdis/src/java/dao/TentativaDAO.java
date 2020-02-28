/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import bean.Tentativa;
import conection.ConnectionFactory;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

/**
 *
 * @author depaula
 */
public class TentativaDAO {
    private final static String GETQTDETENTBYCAND = "select count(idtAluno) as qtdeTentativas " +
                                                    "from Tentativa " +
                                                    "where idtAluno = ?";
    
    private final static String GETTENTBYCAND = "select t.* " +
                                                "from Tentativa as t " +
                                                "where t.idtAluno = ?";
    
    static Connection conn = null;
    static PreparedStatement pstm = null;
    static ResultSet rs = null;
    
    //Lista com tentativas por curso
    public static int getQtdeTentativasCand(String idtCandidato){
        conn = null;
        pstm = null;
        rs = null;
        int qtdeTentativas = 0;
        
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETQTDETENTBYCAND);
            pstm.setString(1, idtCandidato);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                qtdeTentativas = rs.getInt("qtdeTentativas");
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return qtdeTentativas;
    }
    
    //Lista com tentativas por curso
    public static ArrayList<Tentativa> getTentativasByCand(String idtCandidato){
        conn = null;
        pstm = null;
        rs = null;
        ArrayList<Tentativa> tentativas = new ArrayList<>();
        
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETTENTBYCAND);
            pstm.setString(1, idtCandidato);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                Tentativa tentativa = new Tentativa();
                
                tentativa.setId(rs.getInt("id"));
                tentativa.setAno(rs.getString("ano"));
                tentativa.setMtvDeslg(rs.getString("mtvDeslg"));
                tentativa.setFaseDeslg(rs.getString("faseDeslg"));
                tentativa.setIdPostoGraduacaoCand(rs.getInt("idPostoGraduacaoAluno"));
                tentativa.setIdtCand(rs.getString("idtAluno"));
                tentativa.setIdOM(rs.getInt("idOM"));
                
                tentativas.add(tentativa);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return tentativas;
    }
}
