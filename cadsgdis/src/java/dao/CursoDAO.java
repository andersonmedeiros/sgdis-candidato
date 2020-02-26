/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import bean.Curso;
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
public class CursoDAO {
    //Tabela
    static String tabela = "Curso";
    
    //Atributos
    static String id = "id";
    static String nome = "nome";
    static String sigla = "sigla";
    static String portaria = "portaria";
    static String descricao = "descricao";
    
    //Insert SQL
    private final static String INSERT = "INSERT INTO " + tabela + "(" + id + "," + nome + "," + sigla + "," + portaria + "," + descricao +")"
                                    + " VALUES(?,?,?,?,?,?);";
    
    //Update SQL
    private final static String UPDATE = "UPDATE " + tabela +
                                  " SET " + nome + "=?, " + sigla + "=?, " + portaria + "=?, " + descricao + "=? " +
                                  "WHERE " + id + "=?;";
    
    //Delete SQL
    private final static String DELETE = "DELETE FROM " + tabela + " WHERE " + id + "=?;";
    
    //Consultas SQL
    private final static String GETUltimoID = "SELECT MAX(" + id + ") as ultimo_id FROM " + tabela + ";";
    private final static String GETCursoByID = "SELECT * FROM " + tabela + " WHERE " + id + "=?;";
    private final static String GETCURSOS = "SELECT * FROM "+ tabela +";";
    
    
    static Connection conn = null;
    static PreparedStatement pstm = null;
    static ResultSet rs = null;
    
    //Próximo ID a ser inserido
    public static int proxID(){
        int ultimo_id = 0;
        try{
            conn = ConnectionFactory.getConnection();
            
            pstm = conn.prepareStatement(GETUltimoID);
            rs = pstm.executeQuery();
            while (rs.next()) {
                
                ultimo_id = rs.getInt("ultimo_id");
            }
           
            ConnectionFactory.fechaConexao(conn, pstm);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return (ultimo_id+1);
    }
    
    //Insert SQL
    public static void insert(Curso curso) {
        if (curso != null) {
            try {
                conn = ConnectionFactory.getConnection();
                
                pstm = conn.prepareStatement(INSERT);
                
                pstm.setInt(1, curso.getId());
                pstm.setString(2, curso.getNome());
                pstm.setString(3, curso.getSigla());
                pstm.setString(4, curso.getPortaria());
                pstm.setString(5, curso.getDescricao());
                                              
                pstm.execute();
                
                ConnectionFactory.fechaConexao(conn, pstm);

            } catch (SQLException e) {
                throw new RuntimeException(e.getMessage());  
            }
        } else {
            throw new RuntimeException();
        }
    }
    
    //Update SQL
    public static void update(Curso curso) {
        if (curso != null) {
            try {
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(UPDATE);
                
                pstm.setString(1, curso.getNome());
                pstm.setString(2, curso.getSigla());
                pstm.setString(3, curso.getPortaria());
                pstm.setString(4, curso.getDescricao());
                pstm.setInt(5, curso.getId());
            
                pstm.execute();
                ConnectionFactory.fechaConexao(conn, pstm);

            } catch (SQLException e) {
                throw new RuntimeException(e.getMessage());  
            }
        } else {            
            throw new RuntimeException();
        }
    }
    
    //Delete SQL
    public static void delete(int id) {
        if (id != 0) {
            try {
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(DELETE);
                pstm.setInt(1, id);
            
                pstm.execute();
                ConnectionFactory.fechaConexao(conn, pstm);

            } catch (SQLException e) {
                throw new RuntimeException(e.getMessage());  
            }
        } else {            
            throw new RuntimeException();
        }
    }
    
    //Curso by ID
    public static Curso getCurso(int id){
        Curso curso = new Curso();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETCursoByID);
            pstm.setInt(1, id);
            
            rs = pstm.executeQuery();
            while (rs.next()) {
                curso.setId(rs.getInt("id"));
                curso.setNome(rs.getString(nome));
                curso.setSigla(rs.getString(sigla));
                curso.setPortaria(rs.getString(portaria));
                curso.setDescricao(rs.getString(descricao));
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return curso;
    }
    
    //Lista com todos os cursos
    public static List<Curso> getCursos(){
        List<Curso> cursos = new ArrayList<>();
        
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETCURSOS);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                Curso curso = new Curso();
                
                curso.setId(rs.getInt("id"));
                curso.setNome(rs.getString("nome"));
                curso.setSigla(rs.getString("sigla"));
                curso.setPortaria(rs.getString("portaria"));
                curso.setDescricao(rs.getString("descricao"));
                
                cursos.add(curso);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return cursos;
    }
}
