package edu.cs.mum;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/final")
public class quizFinal extends HttpServlet {
    protected void doGet(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {
        int counter = (Integer)req.getServletContext().getAttribute("counter");
        res.setContentType("text/html");
        PrintWriter out = res.getWriter();
        out.println("<body>\n" +
                "<h1>The Number Quiz</h1>\n" +
                "<p>Your current score is <span>"+counter+"</span></p>\n" +
            "<p>You have completed the Number Quiz, with a score of <span>"+counter+"</span> out of 5</p>\n" +
                "</body>");
    }
}
