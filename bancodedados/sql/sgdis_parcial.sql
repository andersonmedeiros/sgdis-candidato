-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema sgdis
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `sgdis` ;

-- -----------------------------------------------------
-- Schema sgdis
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sgdis` DEFAULT CHARACTER SET utf8 ;
USE `sgdis` ;

-- -----------------------------------------------------
-- Table `sgdis`.`Forca`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgdis`.`Forca` (
  `id` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `sigla` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sgdis`.`Estado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgdis`.`Estado` (
  `id` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `sigla` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sgdis`.`Forca_has_Estado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgdis`.`Forca_has_Estado` (
  `idForca` INT NOT NULL,
  `idEstado` INT NOT NULL,
  PRIMARY KEY (`idForca`, `idEstado`),
  INDEX `fk_Forca_has_Estado_Estado1_idx` (`idEstado` ASC),
  INDEX `fk_Forca_has_Estado_Forca1_idx` (`idForca` ASC),
  CONSTRAINT `fk_Forca_has_Estado_Forca1`
    FOREIGN KEY (`idForca`)
    REFERENCES `sgdis`.`Forca` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Forca_has_Estado_Estado1`
    FOREIGN KEY (`idEstado`)
    REFERENCES `sgdis`.`Estado` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sgdis`.`Cidadde`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgdis`.`Cidadde` (
  `id` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `idEstado` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Cidadde_Estado1_idx` (`idEstado` ASC),
  CONSTRAINT `fk_Cidadde_Estado1`
    FOREIGN KEY (`idEstado`)
    REFERENCES `sgdis`.`Estado` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sgdis`.`Endereco`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgdis`.`Endereco` (
  `id` INT NOT NULL,
  `cep` VARCHAR(8) NOT NULL,
  `descricao` VARCHAR(50) NOT NULL,
  `complemento` VARCHAR(75) NOT NULL,
  `pontoreferencia` VARCHAR(50) NOT NULL,
  `bairro` VARCHAR(45) NOT NULL,
  `idCidadde` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Endereco_Cidadde1_idx` (`idCidadde` ASC),
  CONSTRAINT `fk_Endereco_Cidadde1`
    FOREIGN KEY (`idCidadde`)
    REFERENCES `sgdis`.`Cidadde` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sgdis`.`OM`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgdis`.`OM` (
  `id` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `abreviatura` VARCHAR(10) NOT NULL,
  `numendereco` VARCHAR(10) NOT NULL,
  `idForca` INT NOT NULL,
  `idEstado` INT NOT NULL,
  `idEndereco` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_OM_Forca_has_Estado1_idx` (`idForca` ASC, `idEstado` ASC),
  INDEX `fk_OM_Endereco1_idx` (`idEndereco` ASC),
  CONSTRAINT `fk_OM_Forca_has_Estado1`
    FOREIGN KEY (`idForca` , `idEstado`)
    REFERENCES `sgdis`.`Forca_has_Estado` (`idForca` , `idEstado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_OM_Endereco1`
    FOREIGN KEY (`idEndereco`)
    REFERENCES `sgdis`.`Endereco` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sgdis`.`PostoGraduacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgdis`.`PostoGraduacao` (
  `id` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `abreviatura` VARCHAR(10) NOT NULL,
  `categoria` VARCHAR(20) NOT NULL,
  `circulo` VARCHAR(20) NOT NULL,
  `idForca` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_PostoGraduacao_Forca_idx` (`idForca` ASC),
  CONSTRAINT `fk_PostoGraduacao_Forca`
    FOREIGN KEY (`idForca`)
    REFERENCES `sgdis`.`Forca` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sgdis`.`Aluno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgdis`.`Aluno` (
  `identidade` INT NOT NULL,
  `nome` VARCHAR(75) NOT NULL,
  `nomeguerra` VARCHAR(45) NOT NULL,
  `idPostoGraduacao` INT NOT NULL,
  `idOM` INT NOT NULL,
  PRIMARY KEY (`identidade`),
  INDEX `fk_Aluno_PostoGraduacao1_idx` (`idPostoGraduacao` ASC),
  INDEX `fk_Aluno_OM1_idx` (`idOM` ASC),
  CONSTRAINT `fk_Aluno_PostoGraduacao1`
    FOREIGN KEY (`idPostoGraduacao`)
    REFERENCES `sgdis`.`PostoGraduacao` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Aluno_OM1`
    FOREIGN KEY (`idOM`)
    REFERENCES `sgdis`.`OM` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sgdis`.`Curso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgdis`.`Curso` (
  `id` INT NOT NULL,
  `nome` VARCHAR(60) NOT NULL,
  `sigla` VARCHAR(10) NOT NULL,
  `portaria` VARCHAR(80) NOT NULL,
  `descricao` VARCHAR(250) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sgdis`.`Tentativa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgdis`.`Tentativa` (
  `id` INT NOT NULL,
  `ano` VARCHAR(4) NOT NULL,
  `mtvDeslg` VARCHAR(45) NOT NULL,
  `faseDeslg` VARCHAR(45) NOT NULL,
  `idPostoGraduacaoAluno` INT NOT NULL,
  `idAluno` INT NOT NULL,
  `idOM` INT NOT NULL,
  `idCurso` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Tentativa_Aluno1_idx` (`idAluno` ASC),
  INDEX `fk_Tentativa_OM1_idx` (`idOM` ASC),
  INDEX `fk_Tentativa_Curso1_idx` (`idCurso` ASC),
  CONSTRAINT `fk_Tentativa_Aluno1`
    FOREIGN KEY (`idAluno`)
    REFERENCES `sgdis`.`Aluno` (`identidade`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Tentativa_OM1`
    FOREIGN KEY (`idOM`)
    REFERENCES `sgdis`.`OM` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Tentativa_Curso1`
    FOREIGN KEY (`idCurso`)
    REFERENCES `sgdis`.`Curso` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sgdis`.`Categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgdis`.`Categoria` (
  `id` INT NOT NULL,
  `nome` VARCHAR(2) NOT NULL,
  `descricao` VARCHAR(70) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sgdis`.`Curso_has_Categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgdis`.`Curso_has_Categoria` (
  `idCurso` INT NOT NULL,
  `idCategoria` INT NOT NULL,
  PRIMARY KEY (`idCurso`, `idCategoria`),
  INDEX `fk_Curso_has_Categoria_Categoria1_idx` (`idCategoria` ASC),
  INDEX `fk_Curso_has_Categoria_Curso1_idx` (`idCurso` ASC),
  CONSTRAINT `fk_Curso_has_Categoria_Curso1`
    FOREIGN KEY (`idCurso`)
    REFERENCES `sgdis`.`Curso` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Curso_has_Categoria_Categoria1`
    FOREIGN KEY (`idCategoria`)
    REFERENCES `sgdis`.`Categoria` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
