/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bean;

/**
 *
 * @author anderson
 */
public class PostoGraduacao {
    int id, idForca, idCategoria;
    String nome, abreviatura, circulo;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIdForca() {
        return idForca;
    }

    public void setIdForca(int idForca) {
        this.idForca = idForca;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getAbreviatura() {
        return abreviatura;
    }

    public void setAbreviatura(String abreviatura) {
        this.abreviatura = abreviatura;
    }

    public int getIdCategoria() {
        return idCategoria;
    }

    public void setIdCategoria(int idCategoria) {
        this.idCategoria = idCategoria;
    }

    public String getCirculo() {
        return circulo;
    }

    public void setCirculo(String circulo) {
        this.circulo = circulo;
    } 
}
