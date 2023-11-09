package controller;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.Cadastro;
import model.DAO;
import model.Login;

import java.io.IOException;

/**
 * Servlet implementation class Controller
 */
@WebServlet(urlPatterns = {"/controller","/views/cadastrar", "/views/login"})
public class Controller extends HttpServlet {
	private static final long serialVersionUID = 1L;
	DAO dao = new DAO();
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Controller() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String action = request.getServletPath();
		System.out.println(action);
		if (action.equals("/views/cadastrar")) {
			cadastrar(request, response);
		}else if (action.equals("/views/login")) {
				login(request, response);
			}else {
			response.sendRedirect("../index.html");
		}
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	private void login(HttpServletRequest request, HttpServletResponse response) {
		try {
		Login login = new Login(request.getParameter("email"), request.getParameter("senha"));
		if(dao.verificaCadastro(login)) {
			System.out.println("Login Realizado");
		}
		response.sendRedirect("../index.html");
		} catch (IOException e) {
			System.out.println(e); 
		}
		
	}

	private void cadastrar(HttpServletRequest request, HttpServletResponse response) throws IOException {
		System.out.println(request.getParameter("name"));
		System.out.println(request.getParameter("nomeSocial"));
		System.out.println(request.getParameter("cpf"));
		System.out.println(request.getParameter("cep"));
		System.out.println(request.getParameter("rua"));
		System.out.println(request.getParameter("bairro"));
		System.out.println(request.getParameter("cidade"));
		System.out.println(request.getParameter("numeroCasa"));
		System.out.println(request.getParameter("email_cadastro"));
		System.out.println(request.getParameter("senha_cadastro"));
		Cadastro cadastro = new Cadastro(request.getParameter("name"),
				request.getParameter("nomeSocial"),
				request.getParameter("cpf"),
				request.getParameter("cep"),
				request.getParameter("rua"),
				request.getParameter("bairro"),
				request.getParameter("cidade"),
				request.getParameter("numeroCasa"),
				request.getParameter("email_cadastro"),
				request.getParameter("senha_cadastro"));
		dao.inserirCadastro(cadastro);
		
		response.sendRedirect("../index.html");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
