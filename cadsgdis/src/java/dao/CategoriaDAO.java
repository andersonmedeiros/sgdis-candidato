/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import bean.Categoria;
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
public class CategoriaDAO {    
    //Tabela
    static String tabela = "Categoria";
    
    //Atributos
    static String id = "id";
    static String nome = "nome";
    static String descricao = "descricao";
    
    //Insert SQL
    private final static String INSERT = "INSERT INTO " + tabela + "(" + id + "," + nome + "," + descricao +")"
                                    + " VALUES(?,?,?);";
    
    //Update SQL
    private final static String UPDATE = "UPDATE " + tabela +
                                  " SET " + nome + "=?, " + descricao + "=?, " +
                                  "WHERE " + id + "=?;";
    
    //Delete SQL
    private final static String DELETE = "DELETE FROM " + tabela + " WHERE " + id + "=?;";
    
    //Consultas SQL
    private final static String GETUltimoID = "SELECT MAX(" + id + ") as ultimo_id FROM " + tabela + ";";
    private final static String GETCategoriaByID = "SELECT * FROM " + tabela + " WHERE " + id + "=?;";
    private final static String GETCATEGORIAS = "SELECT * FROM "+ tabela +";";
    
    static Connection conn = null;
    static PreparedStatement pstm = null;
    static ResultSet rs = null;
    
    //Próximo ID a ser inserido
    public int proxID(){
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
    public void insert(Categoria categoria) {
        if (categoria != null) {
            try {
                conn = ConnectionFactory.getConnection();
                
                pstm = conn.prepareStatement(INSERT);
                
                pstm.setInt(1, categoria.getId());
                pstm.setString(2, categoria.getNome());
                pstm.setString(3, categoria.getDescricao());
                                                              
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
    public void update(Categoria categoria) {
        if (categoria != null) {
            try {
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(UPDATE);
                
                pstm.setString(1, categoria.getNome());
                pstm.setString(2, categoria.getDescricao());
                pstm.setInt(3, categoria.getId());
            
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
    public void delete(int id) {
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
    
    //Categoria by ID
    public Categoria getCategoria(int id){
        Categoria categoria = new Categoria();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETCategoriaByID);
            pstm.setInt(1, id);
            
            rs = pstm.executeQuery();
            while (rs.next()) {
                categoria.setId(rs.getInt("id"));
                categoria.setNome(rs.getString(nome));
                categoria.setDescricao(rs.getString(descricao));
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return categoria;
    }
    
    //Lista com todas as modalidades
    public static ArrayList<Categoria> getCategorias(){
        conn = null;
        pstm = null;
        rs = null;
        ArrayList<Categoria> categorias = new ArrayList<>();
        
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETCATEGORIAS);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                Categoria categoria = new Categoria();
                
                categoria.setId(rs.getInt(id));
                categoria.setNome(rs.getString(nome));
                categoria.setDescricao(rs.getString(descricao));
                
                categorias.add(categoria);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return categorias;
    }
}
