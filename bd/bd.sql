CREATE DATABASE BO_Solucoes;
USE BO_Solucoes;

CREATE TABLE User(
    Id_User INT         NOT NULL	AUTO_INCREMENT,
    Nome    VARCHAR(90) NOT NULL,
    Email   VARCHAR(90) NOT NULL,
    Senha   VARCHAR(90) NOT NULL,
    
    CONSTRAINT PK_User PRIMARY KEY(id_user)
);

CREATE TABLE Produto(
    Id_Produto      INT         NOT NULL	AUTO_INCREMENT,
    Img_Produto     BLOB        NOT NULL,
    Nm_Produto      VARCHAR(90) NOT NULL,
    Preco_Produto   DECIMAL(10,2),
    
    CONSTRAINT PK_Produto PRIMARY KEY(id_produto)
);

CREATE TABLE Carrinho(
	Id_Carrinho 		INT				NOT NULL	AUTO_INCREMENT,
    Id_User      		INT				NOT NULL,
    Valor_Carrinho		DECIMAL(10,2)	NOT NULL,
    
    CONSTRAINT PK_Carrinho PRIMARY KEY(Id_Carrinho),
    CONSTRAINT FK_User FOREIGN KEY(Id_User) REFERENCES User(Id_User)
);



SELECT * FROM User;
SELECT * FROM Produto;
SELECT * FROM Carrinho;
SELECT * FROM ProdutoCarrinho;


DROP DATABASE BO_Solucoes;