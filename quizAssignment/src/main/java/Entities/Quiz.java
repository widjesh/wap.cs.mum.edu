package Entities;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;

public class Quiz {
    String[] questions;
    Integer answers;

    public Quiz(String[] questions, Integer answers) {
        this.questions = questions;
        this.answers = answers;
    }


    public String getQuestions() {
        return Arrays.toString(questions);
    }

    public Integer getAnswers() {
        return answers;
    }


}
