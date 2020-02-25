package models;

import com.google.inject.ImplementedBy;

import java.util.concurrent.CompletionStage;
import java.util.stream.Stream;

@ImplementedBy(JPACrideRepository.class)
public interface CrideRepository {

    CompletionStage<Cride> add(Cride Cride);


}