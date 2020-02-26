/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import bean.EstadoForca;
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
public class EstadoForcaDAO {
    public static List selectAllEstadoByForca(int id_forca) throws Throwable, Exception{
        List<EstadoForca> dadosEstadoList = new ArrayList();
        PreparedStatement stmt = null;
        ResultSet rs = null;

        stmt = ConnectionFactory.getConnection().prepareStatement("select * from estadoForca where idForca = ? order by id");
        stmt.setInt(1, id_forca);
        rs = stmt.executeQuery();
        
        EstadoForca estforca = null;
        while(rs.next()){
            estforca = new EstadoForca();
            
            int id = rs.getInt("id");
            int idForca = rs.getInt("idForca");
            String nome = rs.getString("nome");
            String sigla = rs.getString("sigla");
            estforca.setId(id);
            estforca.setIdForca(idForca);
            estforca.setNome(nome);
            estforca.setSigla(sigla);

            dadosEstadoList.add(estforca);
        }

        stmt.close();
        rs.close();
        
       return dadosEstadoList;
    }
}
