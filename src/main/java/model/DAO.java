package model;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class DAO {
	/** Modulo de Conexão **/
// Parametros de Conexão
	private String driver = "com.mysql.cj.jdbc.Driver";
	private String url = "jdbc:mysql://127.0.0.1:3306/db_bodestores?useTimezone=true&serverTimezone=UTC";
	private String user = "root";
	private String password = "senha123";

// Método de Conexão
	private Connection conectar() {
		Connection con = null;
		try {
			Class.forName(driver);
			con = DriverManager.getConnection(url, user, password);
			return con;
		} catch (Exception e) {
			System.out.println(e); 
			return null;
		}
	}

// **CRUD - CREATE**
	public void inserirCadastro(Cadastro cadastro) {
		String create = "INSERT INTO usuarios (nome,nomeSocial,cpf,cep,rua,bairro,cidade,numeroCasa,email,senha) VALUES (?,?,?,?,?,?,?,?,?,?)";
		try {
// Abrir a conexão
			Connection con = conectar();
// Preparar a Query para execução no banco de dados
			PreparedStatement pst = con.prepareStatement(create);
// Substituir os parametros ?,?,? pelo conteúdo das variáveis Cadastro
			pst.setString(1, cadastro.getNome());
			pst.setString(2, cadastro.getNomeSocial());
			pst.setString(3, cadastro.getCpf());
			pst.setString(4, cadastro.getCep());
			pst.setString(5, cadastro.getRua());
			pst.setString(6, cadastro.getBairro());
			pst.setString(7, cadastro.getCidade());
			pst.setString(8, cadastro.getNumeroCasa());
			pst.setString(9, cadastro.getEmail());
			pst.setString(10, cadastro.getSenha());
			
// Executar a Query
			pst.executeUpdate();
			System.out.println("QUERY EXECUTADA");
// Encerrar a Conexão
			con.close();

		} catch (Exception e) {
			System.out.println(e);
		}
	}
	
	public boolean verificaCadastro(Login login) {
		String read = "select * from usuarios where email=? and senha=?";
		
		try {
			Connection con = conectar();
			PreparedStatement pst = con.prepareStatement(read);
			String email = "";
			String senha = "";
			String nomeSocial = "";
			pst.setString(1, login.getEmail());
			pst.setString(2, login.getSenha());
			System.out.println(pst.toString());
			ResultSet rs = pst.executeQuery();
			if(rs.next()){
				   email = rs.getString(10);
				   senha = rs.getString(11);
				   nomeSocial = rs.getString(3);
				}
			if (email.equals(login.getEmail())
					&& senha.equals(login.getSenha())) {
				return true;
			}
			System.setProperty("nomeSocial", nomeSocial);
			con.close();
		} catch (Exception e) {
			System.out.println(e);
			return false;
		}
		return false;
		
	}

}
