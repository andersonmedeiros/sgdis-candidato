/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import bean.EstadoForca;
import bean.Om;
import conection.ConnectionFactory;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author anderson
 */
public class OmDAO {
    public static List selectAllOmByEstadoForca(int id_estforca) throws Throwable, Exception{
        List<Om> dadosOmList = new ArrayList();
        PreparedStatement stmt = null;
        ResultSet rs = null;

        stmt = ConnectionFactory.getConnection().prepareStatement("select * from om where idEstadoForca = ? order by id");
        stmt.setInt(1, id_estforca);
        rs = stmt.executeQuery();
        
        Om om = null;
        while(rs.next()){
            om = new Om();
            
            int id = rs.getInt("id");
            int idEstadoForca = rs.getInt("idEstadoForca");
            String nome = rs.getString("nome");
            String abreviatura = rs.getString("abreviatura");
            om.setId(id);
            om.setIdEstadoForca(idEstadoForca);
            om.setNome(nome);
            om.setAbreviatura(abreviatura);

            dadosOmList.add(om);
        }

        stmt.close();
        rs.close();
        
       return dadosOmList;
    }
    public static Om selectOmById(int id_om) throws Throwable, Exception{
        PreparedStatement stmt = null;
        ResultSet rs = null;

        stmt = ConnectionFactory.getConnection().prepareStatement("select * from om where id = ?");
        stmt.setInt(1, id_om);
        rs = stmt.executeQuery();
        
        Om om = null;
        while(rs.next()){
            om = new Om();
            
            int id = rs.getInt("id");
            int idEstadoForca = rs.getInt("idEstadoForca");
            String nome = rs.getString("nome");
            String abreviatura = rs.getString("abreviatura");
            om.setId(id);
            om.setIdEstadoForca(idEstadoForca);
            om.setNome(nome);
            om.setAbreviatura(abreviatura);
        }

        stmt.close();
        rs.close();
        
       return om;
    }
}
