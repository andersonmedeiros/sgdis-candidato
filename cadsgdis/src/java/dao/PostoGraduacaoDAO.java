/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import bean.Forca;
import bean.Militar;
import bean.PostoGraduacao;
import conection.ConnectionFactory;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author anderson
 */
public class PostoGraduacaoDAO {
    public static List selectAllPGByForca(int id_forca) throws Throwable, Exception{
        List<PostoGraduacao> dadosPGList = new ArrayList();
        PreparedStatement stmt = null;
        ResultSet rs = null;

        stmt = ConnectionFactory.getConnection().prepareStatement("select * from postograduacao where idForca = ? order by id");
        stmt.setInt(1, id_forca);
        rs = stmt.executeQuery();

        Militar mil = null;
        Forca forca = null;
        PostoGraduacao pg = null;
        while(rs.next()){
            mil = new Militar();
            forca = new Forca();
            pg = new PostoGraduacao();
            
            int id = rs.getInt("id");
            int idForca = rs.getInt("idForca");
            String nome = rs.getString("nome");
            String abreviatura = rs.getString("abreviatura");
            pg.setId(id);
            pg.setIdForaca(idForca);
            pg.setNome(nome);
            pg.setAbreviatura(abreviatura);

            dadosPGList.add(pg);
        }

        stmt.close();
        rs.close();
        
       return dadosPGList;
    }
}
