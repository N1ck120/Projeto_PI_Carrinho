CREATE DATABASE BO_Solucoes;
USE BO_Solucoes;

CREATE TABLE User(
	Id_User INT         NOT NULL    AUTO_INCREMENT,
    Nome    VARCHAR(90) NOT NULL,
    Email   VARCHAR(90) NOT NULL,
    Senha   VARCHAR(90) NOT NULL,
    
    CONSTRAINT PK_User PRIMARY KEY(Id_user)
);

CREATE TABLE Produto(
    Id_Produto      INT         NOT NULL    AUTO_INCREMENT,
    Nm_Produto      VARCHAR(90) NOT NULL,
    Preco_Produto   DECIMAL(10,2),
    
    CONSTRAINT PK_Produto PRIMARY KEY(Id_produto)
);

CREATE TABLE Carrinho(
    Id_Carrinho			INT					NOT NULL    AUTO_INCREMENT,
    Id_User             INT                	NOT NULL,
    Valor_Carrinho      DECIMAL(10,2)    	NOT NULL,
    
    CONSTRAINT PK_Carrinho PRIMARY KEY(Id_Carrinho),
    CONSTRAINT FK_User FOREIGN KEY(Id_User) REFERENCES User(Id_User)
);

CREATE TABLE ProdutoCarrinho(
	Id_ProdutoCarrinho 	INT	NOT NULL	AUTO_INCREMENT,
    Id_Carrinho			INT	NOT NULL,
    Id_Produto			INT	NOT NULL,
    
    PRIMARY KEY(Id_ProdutoCarrinho, Id_Carrinho, Id_Produto),
    FOREIGN KEY(Id_Carrinho) REFERENCES Carrinho(Id_Carrinho),
    FOREIGN KEY(Id_Produto) REFERENCES Produto(Id_Produto)
);

INSERT INTO Produto(Nm_Produto, Preco_Produto) VALUES
	('Central Amplificador Ascael', 600.00),
    ('Alarme de Incêndio Ascael', 500.00),
    
    ('Boroeira Endereçável Ascael', 440.00),
    ('Acionador Manual BIX3000 Ascael', 590.00),
    
    ('Detector de Fumaça Endereçável Ascael', 430.00),
    ('Central Alarme de Incêndio CAX-i Ascael', 690.00),
    ('Central de Iluminação de Emergência', 490.00),
    ('Central Endereçável Ascael', 710.00),
    ('Módulo Horus 3000 Ascael', 645.00),
    ('Central de Endereçmento Individual Ascael', 435.00),
    
    ('Sirene Audiovisual Ascael', 475.00);

SELECT * FROM User;
SELECT * FROM Produto;
SELECT * FROM Carrinho;

SHOW TABLES;

DROP DATABASE BO_Solucoes;