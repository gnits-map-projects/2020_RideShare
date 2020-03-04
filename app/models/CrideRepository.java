package models;

import com.google.inject.ImplementedBy;

import java.util.concurrent.CompletionStage;
import java.util.stream.Stream;

@ImplementedBy(JPACrideRepository.class)
public interface CrideRepository {

    CompletionStage<Cride> add(Cride Cride);
    abstract Stream<Cride> findRide(String src, String dest);
    abstract Cride addRide(Cride Cride,String src,String dest,String rollno,String  rtime,String rdate,Long phoneNumber,String name );
}