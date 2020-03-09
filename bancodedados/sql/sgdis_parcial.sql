-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema sgdis
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema sgdis
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sgdis` DEFAULT CHARACTER SET utf8 ;
USE `sgdis` ;

-- -----------------------------------------------------
-- Table `sgdis`.`Estado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgdis`.`Estado` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `sigla` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sgdis`.`Cidade`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgdis`.`Cidade` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `idEstado` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Cidade_Estado1_idx` (`idEstado` ASC),
  CONSTRAINT `fk_Cidade_Estado1`
    FOREIGN KEY (`idEstado`)
    REFERENCES `sgdis`.`Estado` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sgdis`.`Endereco`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgdis`.`Endereco` (
  `id` INT(11) NOT NULL,
  `cep` VARCHAR(8) NOT NULL,
  `descricao` VARCHAR(50) NOT NULL,
  `complemento` VARCHAR(75) NOT NULL,
  `pontoreferencia` VARCHAR(50) NOT NULL,
  `bairro` VARCHAR(45) NOT NULL,
  `idCidade` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Endereco_Cidadde1_idx` (`idCidade` ASC),
  CONSTRAINT `fk_Endereco_Cidadde1`
    FOREIGN KEY (`idCidade`)
    REFERENCES `sgdis`.`Cidade` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sgdis`.`Forca`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgdis`.`Forca` (
  `id` INT(11) NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `sigla` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sgdis`.`Forca_has_Estado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgdis`.`Forca_has_Estado` (
  `idForca` INT(11) NOT NULL,
  `idEstado` INT(11) NOT NULL,
  PRIMARY KEY (`idForca`, `idEstado`),
  INDEX `fk_Forca_has_Estado_Estado1_idx` (`idEstado` ASC),
  INDEX `fk_Forca_has_Estado_Forca1_idx` (`idForca` ASC),
  CONSTRAINT `fk_Forca_has_Estado_Estado1`
    FOREIGN KEY (`idEstado`)
    REFERENCES `sgdis`.`Estado` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Forca_has_Estado_Forca1`
    FOREIGN KEY (`idForca`)
    REFERENCES `sgdis`.`Forca` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sgdis`.`OM`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgdis`.`OM` (
  `id` INT(11) NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `abreviatura` VARCHAR(10) NOT NULL,
  `numendereco` VARCHAR(10) NOT NULL,
  `idForca` INT(11) NOT NULL,
  `idEstado` INT(11) NOT NULL,
  `idEndereco` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_OM_Forca_has_Estado1_idx` (`idForca` ASC, `idEstado` ASC),
  INDEX `fk_OM_Endereco1_idx` (`idEndereco` ASC),
  CONSTRAINT `fk_OM_Endereco1`
    FOREIGN KEY (`idEndereco`)
    REFERENCES `sgdis`.`Endereco` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_OM_Forca_has_Estado1`
    FOREIGN KEY (`idForca` , `idEstado`)
    REFERENCES `sgdis`.`Forca_has_Estado` (`idForca` , `idEstado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sgdis`.`Categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgdis`.`Categoria` (
  `id` INT(11) NOT NULL,
  `nome` VARCHAR(2) NOT NULL,
  `descricao` VARCHAR(70) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sgdis`.`PostoGraduacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgdis`.`PostoGraduacao` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `abreviatura` VARCHAR(10) NOT NULL,
  `circulo` VARCHAR(20) NOT NULL,
  `idForca` INT(11) NOT NULL,
  `idCategoria` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_PostoGraduacao_Forca_idx` (`idForca` ASC),
  INDEX `fk_PostoGraduacao_Categoria_idx` (`idCategoria` ASC),
  CONSTRAINT `fk_PostoGraduacao_Categoria`
    FOREIGN KEY (`idCategoria`)
    REFERENCES `sgdis`.`Categoria` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_PostoGraduacao_Forca`
    FOREIGN KEY (`idForca`)
    REFERENCES `sgdis`.`Forca` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 126
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sgdis`.`QasQms`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgdis`.`QasQms` (
  `id` INT(11) NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `abreviatura` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sgdis`.`EstadoCivil`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgdis`.`EstadoCivil` (
  `id` INT(11) NOT NULL,
  `nome` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sgdis`.`Comportamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgdis`.`Comportamento` (
  `id` INT NOT NULL,
  `nome` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sgdis`.`Aluno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgdis`.`Aluno` (
  `identidade` VARCHAR(10) NOT NULL,
  `nome` VARCHAR(75) NOT NULL,
  `nomeguerra` VARCHAR(45) NOT NULL,
  `idPostoGraduacao` INT(11) NOT NULL,
  `idOM` INT(11) NOT NULL,
  `idQasQms` INT(11) NOT NULL,
  `idEstadoCivil` INT(11) NOT NULL,
  `idComportamento` INT NOT NULL,
  PRIMARY KEY (`identidade`),
  INDEX `fk_Aluno_OM1_idx` (`idOM` ASC),
  INDEX `fk_Aluno_PostoGraduacao_idx` (`idPostoGraduacao` ASC),
  INDEX `fk_Aluno_QasQms2_idx` (`idQasQms` ASC),
  INDEX `fk_Aluno_EstadoCivil1_idx` (`idEstadoCivil` ASC),
  INDEX `fk_Aluno_Comportamento1_idx` (`idComportamento` ASC),
  CONSTRAINT `fk_Aluno_OM1`
    FOREIGN KEY (`idOM`)
    REFERENCES `sgdis`.`OM` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Aluno_PostoGraduacao`
    FOREIGN KEY (`idPostoGraduacao`)
    REFERENCES `sgdis`.`PostoGraduacao` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Aluno_QasQms2`
    FOREIGN KEY (`idQasQms`)
    REFERENCES `sgdis`.`QasQms` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Aluno_EstadoCivil1`
    FOREIGN KEY (`idEstadoCivil`)
    REFERENCES `sgdis`.`EstadoCivil` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Aluno_Comportamento1`
    FOREIGN KEY (`idComportamento`)
    REFERENCES `sgdis`.`Comportamento` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sgdis`.`Curso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgdis`.`Curso` (
  `id` INT(11) NOT NULL,
  `nome` VARCHAR(60) NOT NULL,
  `sigla` VARCHAR(10) NOT NULL,
  `portaria` VARCHAR(80) NOT NULL,
  `descricao` VARCHAR(250) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sgdis`.`Curso_has_Categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgdis`.`Curso_has_Categoria` (
  `idCurso` INT(11) NOT NULL,
  `idCategoria` INT(11) NOT NULL,
  PRIMARY KEY (`idCurso`, `idCategoria`),
  INDEX `fk_Curso_has_Categoria_Categoria1_idx` (`idCategoria` ASC),
  INDEX `fk_Curso_has_Categoria_Curso1_idx` (`idCurso` ASC),
  CONSTRAINT `fk_Curso_has_Categoria_Categoria1`
    FOREIGN KEY (`idCategoria`)
    REFERENCES `sgdis`.`Categoria` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Curso_has_Categoria_Curso1`
    FOREIGN KEY (`idCurso`)
    REFERENCES `sgdis`.`Curso` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sgdis`.`Tentativa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgdis`.`Tentativa` (
  `id` INT(11) NOT NULL,
  `ano` VARCHAR(4) NOT NULL,
  `mtvDeslg` VARCHAR(45) NOT NULL,
  `faseDeslg` VARCHAR(45) NOT NULL,
  `idPostoGraduacaoAluno` INT(11) NOT NULL,
  `idtAluno` VARCHAR(10) NOT NULL,
  `idOM` INT(11) NOT NULL,
  `idCurso` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Tentativa_OM1_idx` (`idOM` ASC),
  INDEX `fk_Tentativa_Curso1_idx` (`idCurso` ASC),
  INDEX `fk_Tentativa_Aluno1_idx` (`idtAluno` ASC),
  CONSTRAINT `fk_Tentativa_Aluno1`
    FOREIGN KEY (`idtAluno`)
    REFERENCES `sgdis`.`Aluno` (`identidade`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Tentativa_Curso1`
    FOREIGN KEY (`idCurso`)
    REFERENCES `sgdis`.`Curso` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Tentativa_OM1`
    FOREIGN KEY (`idOM`)
    REFERENCES `sgdis`.`OM` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sgdis`.`EscolaFormacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgdis`.`EscolaFormacao` (
  `id` INT(11) NOT NULL,
  `nome` VARCHAR(50) NOT NULL,
  `abreviatura` VARCHAR(10) NOT NULL,
  `idForca` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_EscolaFormacao_Forca1_idx` (`idForca` ASC),
  CONSTRAINT `fk_EscolaFormacao_Forca1`
    FOREIGN KEY (`idForca`)
    REFERENCES `sgdis`.`Forca` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
