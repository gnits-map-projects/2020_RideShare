package models;

import javax.persistence.*;

@Entity
public class Cride {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    public Long id;

    public String rollno;
    public String rtime;
    public String src;
    public String dest;
    public String rdate;

    public void setRollno(String rollno) {
        this.rollno = rollno;
    }

    public String getRollno() {
        return rollno;
    }

    public String getRtime() {
        return rtime;
    }

    public void setRtime(String rtime) {
        this.rtime = rtime;
    }

    public String getSrc() {
        return src;
    }

    public void setSrc(String src) {
        this.src = src;
    }

    public String getDest() {
        return dest;
    }

    public void setDest(String dest) {
        this.dest = dest;
    }

    public String getRdate() {
        return rdate;
    }

    public void setRdate(String rdate) {
        this.rdate = rdate;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}