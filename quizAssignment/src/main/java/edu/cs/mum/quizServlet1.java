package edu.cs.mum;

import Entities.Quiz;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/quiz2")
public class quizServlet1 extends HttpServlet {
    String[] pi = {"3,1,4,1,5"};
    String[] fibonacci = {"1,1,2,3,5"};
    String[] squares = {"1,4,9,16,25"};
    String[] primes = {"2,3,5,7,11"};
    String[] powerOf2 = {"1,2,4,8,16"};
    Quiz pi_quiz = new Quiz(pi,9);
    Quiz fib = new Quiz(fibonacci,8);
    Quiz sqrt = new Quiz(squares,36);
    String nextQuestion = sqrt.getQuestions();
    Quiz pri = new Quiz(primes,13);
    Quiz powerOfTwo = new Quiz(powerOf2,32);

    protected void doGet(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {
        res.setContentType("text/html");
        PrintWriter out = res.getWriter();
        int answer_input = Integer.parseInt(req.getParameter("answer2"));
        int counter = (Integer)req.getServletContext().getAttribute("counter");
        if(answer_input == fib.getAnswers()){
            counter++;
        }
        out.println("<body>\n" +
                "<form action=\"quiz3\" method=\"get\">\n" +
                "<h1>The Number Quiz</h1>\n" +
                "<p>Your current score is <span>"+counter+"</span></p>\n" +
                "<p>"+ nextQuestion.substring(1,11) +"</p>\n" +
                "<span>Your Answer</span> <input type=\"number\" name=\"answer3\" >\n" +
                "<div>\n" +
                "<input type=\"submit\" value=\"submit\">\n" +
                "</div>\n" +
                "</form>\n" +
                "</body>");

        req.getServletContext().setAttribute("counter",counter);
    }
}
