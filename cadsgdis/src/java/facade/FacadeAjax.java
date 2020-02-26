/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facade;

import bean.EstadoForca;
import bean.Forca;
import bean.Militar;
import bean.Om;
import bean.PostoGraduacao;
import dao.EstadoForcaDAO;
import dao.ForcaDAO;
import dao.MilitarDAO;
import dao.OmDAO;
import dao.PostoGraduacaoDAO;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *
 * @author anderson
 */
public class FacadeAjax {
    /*
        * Método que faz um simples select no banco e retorna um list de beans Militar.
        * @return listResult - List de Object Bean Militar
        * @throws Throwable
        * @throws Exception
    */

    public List selectAllMilitar() throws Throwable, Exception{
        List<Militar> listResult = new ArrayList();
        listResult = MilitarDAO.selectAllMilitar();
        return listResult;
    }
    
    public List selectAllForca() throws Throwable, Exception{
        List<Forca> listResult = new ArrayList();
        listResult = ForcaDAO.selectAllForca();
        return listResult;
    }
    
    public List selectAllPostoGraduacao(int id_forca) throws Throwable, Exception{
        List<PostoGraduacao> listResult = new ArrayList();
        listResult = PostoGraduacaoDAO.selectAllPGByForca(id_forca);
        return listResult;
    }
    
    public List selectAllEstadoByForca(int id_forca) throws Throwable, Exception{
        List<EstadoForca> listResult = new ArrayList();
        listResult = EstadoForcaDAO.selectAllEstadoByForca(id_forca);
        return listResult;
    }
    
    public List selectAllOmByEstadoForca(int id_estforca) throws Throwable, Exception{
        List<Om> listResult = new ArrayList();
        listResult = OmDAO.selectAllOmByEstadoForca(id_estforca);
        return listResult;
    }

    public String teste(){
        return "isso: ";
    }

    /*
        * Executa um select na tabela mil, mais so retorna um objeto Militar.
        * @return mil - Object Bean Militar.
        * @throws Throwable
        * @throws Exception
    */

    public Militar selectMilitar() throws Throwable, Exception{
        List<Militar> listResult = new ArrayList();
        Militar mil = new Militar();
        listResult = MilitarDAO.selectAllMilitar();
        mil = listResult.get(0);
        return mil;
    }
    public Om selectOM(int id_om) throws Throwable, Exception{
        Om om = OmDAO.selectOmById(id_om);

        return om;
    }

    /*
        * Executa um select na tabela mil e retorna um Map com os *valores(id, nome)
        * @return mapResult - Map com os dados do select.
        * @throws Throwable
        * @throws Exception
    */

    public Map selectMilitarMap() throws Throwable, Exception{
        Map mapResult = new HashMap<Militar, Militar>();
        mapResult = MilitarDAO.selectMilitarMap();
        return mapResult;
    }
}
