/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import bean.Militar;
import conection.ConnectionFactory;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *
 * @author anderson
 */
public class MilitarDAO {
    public static List selectAllMilitar() throws Throwable, Exception{
        List<Militar> dadosMilitarList = new ArrayList();
        PreparedStatement stmt = null;
        ResultSet rs = null;

        stmt = ConnectionFactory.getConnection().prepareStatement("select * from Militar order by nome asc");
        rs = stmt.executeQuery();

        Militar mil = null;
        while(rs.next()){
            mil = new Militar();

            String identidade = rs.getString("identidade");
            String nome = rs.getString("nome");
            String nomeguerra = rs.getString("nomeguerra");
            String idade = rs.getString("idade");
            mil.setIdentidade(identidade);
            mil.setNome(nome);
            mil.setNomeguerra(nomeguerra);
            mil.setIdade(idade);

            dadosMilitarList.add(mil);
        }

        stmt.close();
        rs.close();
        
       return dadosMilitarList;
    }
    /**
    * Executa um select na tabela pessoa e retorna um Map com os
    valores(id, nome)
    *
    * @return mapResult - Map com os dados do select.
    *
    * @throws Throwable
    * @throws Exception
    */
    public static Map selectMilitarMap() throws Throwable, Exception{
        Map dadosMilitar= new HashMap();
        PreparedStatement stmt = null;
        ResultSet rs = null;

        stmt = ConnectionFactory.getConnection().prepareStatement("select * from militar order by nome asc");
        rs = stmt.executeQuery();

        while(rs.next()){
            String identidade = rs.getString("identidade");
            String nome = rs.getString("nome");
            dadosMilitar.put(identidade, nome);
        }

        stmt.close();
        rs.close();

        return dadosMilitar;
    }
}
