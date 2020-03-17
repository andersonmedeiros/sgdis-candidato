/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facade;

import bean.Categoria;
import bean.Cidade;
import bean.Comportamento;
import bean.Curso;
import bean.Endereco;
import bean.EscolaFormacao;
import bean.Estado;
import bean.EstadoCivil;
import bean.EstadoForca;
import bean.Forca;
import bean.GrauParentesco;
import bean.Militar;
import bean.Om;
import bean.PostoGraduacao;
import bean.QasQms;
import bean.Tentativa;
import dao.CidadeDAO;
import dao.ComportamentoDAO;
import dao.CursoDAO;
import dao.CursoHasCategoriaDAO;
import dao.EnderecoDAO;
import dao.EscolaFormacaoDAO;
import dao.EstadoCivilDAO;
import dao.EstadoDAO;
import dao.EstadoForcaDAO;
import dao.ForcaDAO;
import dao.ForcaHasEstadoDAO;
import dao.GrauParentescoDAO;
import dao.MilitarDAO;
import dao.OmDAO;
import dao.PostoGraduacaoDAO;
import dao.QasQmsDAO;
import dao.TentativaDAO;
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
    
    //Curso / Categorias
    public List getCursos() throws Throwable, Exception{
        List<Curso> listCursos = new ArrayList();
        listCursos = CursoDAO.getCursos();
        return listCursos;
    }
    
    public List getCategoriasByCurso(int idCurso) throws Throwable, Exception{
        List<Categoria> listResult = new ArrayList();
        listResult = CursoHasCategoriaDAO.getCategoriasByCurso(idCurso);
        return listResult;
    }
    
    //Tentativas
    public int getQtdeTentativasByCandidatoAndCurso(String idtCandidato, int idCurso) throws Throwable, Exception{
        int qtde = 0;
        qtde = TentativaDAO.getQtdeTentativasByCandidatoAndCurso(idtCandidato, idCurso);
        return qtde;
    }
    
    public List getTentativasByCandidatoAndCurso(String idtCandidato, int idCurso) throws Throwable, Exception{
        List<Tentativa> listResult = new ArrayList();
        listResult = TentativaDAO.getTentativasByCandidatoAndCurso(idtCandidato, idCurso);
        return listResult;
    }
    
    //Forca / Estados / OM
    public List getForcas() throws Throwable, Exception{
        List<Forca> listResult = new ArrayList();
        listResult = ForcaDAO.getForcas();
        return listResult;
    }
    
    public List getEstadosByForca(int idForca) throws Throwable, Exception{
        List<Estado> listResult = new ArrayList();
        listResult = ForcaHasEstadoDAO.getEstadosByForca(idForca);
        return listResult;
    }
    
    public List getOmsByForcaAndEstado(int idForca, int idEstado) throws Throwable, Exception{
        List<Om> listResult = new ArrayList();
        listResult = OmDAO.getOmsByForcaAndEstado(idForca, idEstado);
        return listResult;
    }
    
    public List getOmsAmazonia(int idForca) throws Throwable, Exception{
        List<Om> listResult = new ArrayList();
        listResult = OmDAO.getOmsAmazonia(idForca);
        return listResult;
    }
    
    public String getAbreviaturaOM(int idOM) throws Throwable, Exception{
        String abreviatura = OmDAO.getAbreviaturaOM(idOM);
        return abreviatura;
    }
    
    public Om getOM(int idOM) throws Throwable, Exception{
        Om om = OmDAO.getOM(idOM);
        return om;
    }
    
    
    
    public Endereco getEnderecoByOM(int idOM) throws Throwable, Exception{
        Endereco endereco = EnderecoDAO.getEnderecoByOm(idOM);
        return endereco;
    }
    
    
    public List selectAllMilitar() throws Throwable, Exception{
        List<Militar> listResult = new ArrayList();
        listResult = MilitarDAO.selectAllMilitar();
        return listResult;
    }
    
    public List getPostoGraduacoesByForcaExcetoCbSd(int idForca) throws Throwable, Exception{
        List<PostoGraduacao> listResult = new ArrayList();
        listResult = PostoGraduacaoDAO.getPostoGraduacoesByForcaExcetoCbSd(idForca);
        return listResult;
    }
    
    public List getPostoGraduacoesByForcaCatA(int idForca) throws Throwable, Exception{
        List<PostoGraduacao> listResult = new ArrayList();
        listResult = PostoGraduacaoDAO.getPostoGraduacoesByForcaCatA(idForca);
        return listResult;
    }
    
    public List getPostoGraduacoesByForcaCatB(int idForca) throws Throwable, Exception{
        List<PostoGraduacao> listResult = new ArrayList();
        listResult = PostoGraduacaoDAO.getPostoGraduacoesByForcaAndCatB(idForca);
        return listResult;
    }
    
    public List getQasQms() throws Throwable, Exception{
        List<QasQms> listResult = new ArrayList();
        listResult = QasQmsDAO.getQasQms();
        return listResult;
    }
    
    public List getEstados() throws Throwable, Exception{
        List<Estado> listResult = new ArrayList();
        listResult = EstadoDAO.getEstados();
        return listResult;
    }
    
    public List getCidadesByEstado(int idEstado) throws Throwable, Exception{
        List<Cidade> listResult = new ArrayList();
        listResult = CidadeDAO.getCidadesByEstado(idEstado);
        return listResult;
    }
    
    public List getEstadosCivis() throws Throwable, Exception{
        List<EstadoCivil> listResult = new ArrayList();
        listResult = EstadoCivilDAO.getEstadosCivis();
        return listResult;
    }
    
    public List getEscolasFormacao(int idForca) throws Throwable, Exception{
        List<EscolaFormacao> listResult = new ArrayList();
        listResult = EscolaFormacaoDAO.getEscolasFormacao(idForca);
        return listResult;
    }
            
    public String getAbreviaturaEscola(int idEscolaFormacao) throws Throwable, Exception{
        String abreviatura = EscolaFormacaoDAO.getAbreviaturaEscola(idEscolaFormacao);
        return abreviatura;
    }
            
    public List getComportamentos() throws Throwable, Exception{
        List<Comportamento> listResult = new ArrayList();
        listResult = ComportamentoDAO.getComportamentos();
        return listResult;
    }
            
    public List getGrausParentesco() throws Throwable, Exception{
        List<GrauParentesco> listResult = new ArrayList();
        listResult = GrauParentescoDAO.getGrausParentesco();
        return listResult;
    }
    
    public List selectAllEstadoByForca(int id_forca) throws Throwable, Exception{
        List<EstadoForca> listResult = new ArrayList();
        listResult = EstadoForcaDAO.selectAllEstadoByForca(id_forca);
        return listResult;
    }
    
   

    /*public String teste(){
        return "isso: ";
    }*/

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
