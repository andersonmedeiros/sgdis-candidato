/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import bean.Forca;
import bean.Militar;
import bean.Om;
import bean.PostoGraduacao;
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
public class PostoGraduacaoDAO {
    private final static String GETPOSTOGRADUACAOSEMCBSD = "select pg.* " +
                                                    "from PostoGraduacao as pg, Forca as f " +
                                                    "where pg.idForca = f.id and pg.idForca = ? and pg.circulo != 'CB_SD'";
    
    public static List<PostoGraduacao> getPostoGraduacoesByForcaExcetoCbSd(int idForca){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        List<PostoGraduacao> pgs = new ArrayList<>();
        
        try{
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETPOSTOGRADUACAOSEMCBSD);
            pstm.setInt(1, idForca);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
               PostoGraduacao pg = new PostoGraduacao();
               
               pg.setId(rs.getInt("pg.id"));
               pg.setNome(rs.getString("pg.nome"));
               pg.setAbreviatura(rs.getString("pg.abreviatura"));
               pg.setCategoria(rs.getString("pg.categoria"));
               pg.setCirculo(rs.getString("pg.circulo"));
               pg.setIdForca(rs.getInt("pg.idForca"));
                
               pgs.add(pg);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return pgs;
    }
}
