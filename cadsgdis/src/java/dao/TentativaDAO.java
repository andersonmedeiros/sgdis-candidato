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
    
    private final static String GETTENTBYCANDANDCURSO = "select t.* " +
                                                      "from Tentativa as t, Aluno as a, Curso as c " +
                                                      "where t.idtAluno = a.identidade and t.idtAluno = ? and t.idCurso = c.id and t.idCurso = ?";
    
    private final static String GETQTDETENTBYCANDANDCURSO = "select count(t.id) as qtde " +
                                                      "from Tentativa as t, Aluno as a, Curso as c " +
                                                      "where t.idtAluno = a.identidade and t.idtAluno = ? and t.idCurso = c.id and t.idCurso = ?";
    
    static Connection conn = null;
    static PreparedStatement pstm = null;
    static ResultSet rs = null;
    
    //Quantidade de tentativas por candidato
    public static int getQtdeTentativasByCandidatoAndCurso(String idtCandidato, int idCurso){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        int qtdeTentativas = 0;
        
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETQTDETENTBYCANDANDCURSO);
            pstm.setString(1, idtCandidato);
            pstm.setInt(2, idCurso);
            
           
            rs = pstm.executeQuery();
            if(rs.next()){
                qtdeTentativas = rs.getInt("qtde");
            }
                
            
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return qtdeTentativas;
    }
    
    //Lista com tentativas por candidato
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
                
                tentativa.setId(rs.getInt("t.id"));
                tentativa.setAno(rs.getString("t.ano"));
                tentativa.setMtvDeslg(rs.getString("t.mtvDeslg"));
                tentativa.setFaseDeslg(rs.getString("t.faseDeslg"));
                tentativa.setIdPostoGraduacaoCand(rs.getInt("t.idPostoGraduacaoAluno"));
                tentativa.setIdtCand(rs.getString("t.idtAluno"));
                tentativa.setIdOM(rs.getInt("t.idOM"));
                
                tentativas.add(tentativa);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return tentativas;
    }
    
    //Lista com tentativas por candidato & curso
    public static ArrayList<Tentativa> getTentativasByCandidatoAndCurso(String idtCandidato, int idCurso){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        ArrayList<Tentativa> tentativas = new ArrayList<>();
        
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETTENTBYCANDANDCURSO);
            pstm.setString(1, idtCandidato);
            pstm.setInt(2, idCurso);
           
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
                tentativa.setIdCurso(rs.getInt("idCurso"));
                
                tentativas.add(tentativa);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return tentativas;
    }
}
