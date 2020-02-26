/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bean;

import dao.CategoriaDAO;
import dao.CursoDAO;
import java.util.List;

/**
 *
 * @author depaula
 */
public class teste {
    public static void main(String[] args) throws Throwable {
        CategoriaDAO catDAO = new CategoriaDAO();
        
        System.out.println(catDAO.getCategorias().get(0).nome);
    }
}
