package br.com.sotos.controller;

import br.com.sotos.DAO.DrOrdemProducaoDAO;
import br.com.sotos.model.DrEtapaProducao;
import br.com.sotos.model.DrOrdemProducao;
import br.com.sotos.model.DrOrdemProdutos;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.google.gson.reflect.TypeToken;
import java.util.Date;
import java.util.List;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

/**
 *
 * @author Augusto
 */
@Path("DrOrdemProducaoController")
public class DrOrdemProducaoController {

    private final DrOrdemProducaoDAO dao = new DrOrdemProducaoDAO(DrOrdemProducao.class);
    private final Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'").create();

    @GET
    @Path("insert")
    @Produces(MediaType.APPLICATION_JSON)
    public String insert(@QueryParam("json") String json) {
        DrOrdemProducao drOrdemProducao = gson.fromJson(json, DrOrdemProducao.class);
        dao.insert(drOrdemProducao);

        return gson.toJson(drOrdemProducao, DrOrdemProducao.class);
    }

    @GET
    @Path("delete")
    @Produces(MediaType.APPLICATION_JSON)
    public String delete(@QueryParam("json") String json) {
        DrOrdemProducao drOrdemProducao = gson.fromJson(json, DrOrdemProducao.class);
        dao.delete(drOrdemProducao);

        return gson.toJson(drOrdemProducao, DrOrdemProducao.class);
    }

    @GET
    @Path("update")
    @Produces(MediaType.APPLICATION_JSON)
    public String update(@QueryParam("json") String json) {
        DrOrdemProducao drOrdemProducao = gson.fromJson(json, DrOrdemProducao.class);
        dao.update(drOrdemProducao);

        return gson.toJson(drOrdemProducao, DrOrdemProducao.class);
    }

    @GET
    @Path("findById")
    @Produces(MediaType.APPLICATION_JSON)
    public String findById(@QueryParam("id") int id) {
        DrOrdemProducao drOrdemProducao = dao.findById(id);

        return gson.toJson(drOrdemProducao, DrOrdemProducao.class);
    }

    @GET
    @Path("findAll")
    @Produces(MediaType.APPLICATION_JSON)
    public String findByAll() {
        List<DrOrdemProducao> lstDrOrdemProducao = dao.findAll();

        return gson.toJson(lstDrOrdemProducao);
    }
    
    @GET
    @Path("findByOrdSituacao")
    @Produces(MediaType.APPLICATION_JSON)
    public String findByOrdSituacao(@QueryParam("ord_situacao") String ord_situacao, @QueryParam("dataInicio") String dataInicio, @QueryParam("dataFim") String dataFim) {
        List<DrOrdemProducao> lstDrOrdemProducao = dao.findByOrdSituacao(ord_situacao, new Date(Long.parseLong(dataInicio)), new Date(Long.parseLong(dataFim)));

        return gson.toJson(lstDrOrdemProducao);
    }

    @GET
    @Path("refreshOrdSituacao")
    @Produces(MediaType.APPLICATION_JSON)
    public String refreshOrdSituacao() {
        List<DrOrdemProducao> lstDrOrdemProducao = dao.findByOrdSituacao("P");
        for (DrOrdemProducao item : lstDrOrdemProducao) {
            if (item.getOrd_dataproducao().before(new Date())){
                item.setOrd_situacao("A");
                dao.update(item);
            }
        }
        lstDrOrdemProducao = dao.findAll();
        return gson.toJson(lstDrOrdemProducao);
    }

    @GET
    @Path("insertOrders")
    @Produces(MediaType.APPLICATION_JSON)

    public String insertOrders(@QueryParam("json") String json, @QueryParam("drOrdemProducao") String drOrdemProducaoJson) throws Exception {
        List<JsonObject> objects = gson.fromJson(json, new TypeToken<List<JsonObject>>() {
        }.getType());

        DrOrdemProducao drOrdemProducao = gson.fromJson(drOrdemProducaoJson, DrOrdemProducao.class);

        dao.insertOrders(objects, drOrdemProducao);

        return gson.toJson(objects);
    }
}
