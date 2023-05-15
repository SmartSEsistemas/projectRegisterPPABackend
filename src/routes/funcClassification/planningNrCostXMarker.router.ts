import { Router } from "express";
import planningNrCostXMarkerController from "../../controllers/funcClassification/PlanningNrCostXMarkerController.js";
import { permission } from "../../middlewares/permissions.js";

const planningNrCostXMarkerRouter = Router();

/**
   * @swagger
   * tags:
   *   name:  Planning_nrcost_x_marker
   *   description: Operações relacionadas aos planejamentos de natureza de despesa X marcador
   * components:
   *   schemas:
   *     Cost_marker:
   *       type: object
   *       properties:
   *         planning_nature_cost_id:
   *             type: number
   *         planning_marker_id:
   *             type: number
   *     Message:
   *       type: object
   *       properties:
   *         status:
   *             type: string
   *         message:
   *             type: string
   */
/**
   * @swagger
   *
   * /func_classification/nrcost_x_marker:
   *   post:
   *     summary: Criar natureza de despesa X marcador
   *     description: Criar natureza de despesa X marcador
   *     tags: [Planning_nrcost_x_marker]
   *     security:
   *       - entityNameHeader: []
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: header
   *         name: Entity-Name
   *         description: Nome da entidade a ser consultada
   *         required: true
   *         type: string
   *         default: Nome da entidade
   *       - in: body
   *         name: create_nrcost_x_marker
   *         description: Criar recurso X natureza de despesa X marcador
   *         required: true
   *         schema:
   *           $ref: '#/components/schemas/Cost_marker'
   *     responses:
   *       201:
   *         description: Mensagem
   *         schema:
   *           $ref: '#/components/schemas/Message'
   *       400:
   *         description: Error
   *         schema:
   *           $ref: '#/components/schemas/Message'
   */
planningNrCostXMarkerRouter.post("/", permission(["create_nrcost_x_marker"]), planningNrCostXMarkerController.register);
/**
 * @swagger
 *
 * /func_classification/nrcost_x_marker:
 *   put:
 *     summary: Atualizar natureza de despesa X marcador
 *     description: Atualizar natureza de despesa X marcador
 *     tags: [Planning_nrcost_x_marker]
 *     security:
 *       - entityNameHeader: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: header
 *         name: Entity-Name
 *         description: Nome da entidade a ser consultada
 *         required: true
 *         type: string
 *         default: Nome da entidade
 *       - in: body
 *         name: update_nrcost_x_marker
 *         description: Atualizar natureza de despesa X marcador
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             nrcost_marker_id:
 *               type: number
 *             nrcost_marker:
 *               $ref: '#/components/schemas/Cost_marker'
 *     responses:
 *       200:
 *         description: Mensagem
 *         schema:
 *           $ref: '#/components/schemas/Message'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
planningNrCostXMarkerRouter.put("/", permission(["update_nrcost_x_marker"]), planningNrCostXMarkerController.update);
/**
 * @swagger
 *
 * /func_classification/nrcost_x_marker/:id:
 *   get:
 *     summary: Pegar informações sobre um natureza de despesa X marcador
 *     description: Pegar informações sobre um natureza de despesa X marcador
 *     tags: [Planning_nrcost_x_marker]
 *     security:
 *       - entityNameHeader: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: header
 *         name: Entity-Name
 *         description: Nome da entidade a ser consultada
 *         required: true
 *         type: string
 *         default: Nome da entidade
 *       - in: param
 *         name: id
 *         description: Pegar informações sobre um natureza de despesa X marcador
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: natureza de despesa X marcador
 *         schema:
 *           $ref: '#/components/schemas/Cost_marker'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
planningNrCostXMarkerRouter.get("/:id", permission(["get_nrcost_x_marker"]), planningNrCostXMarkerController.show);
/**
 * @swagger
 *
 * /func_classification/nrcost_x_marker/:id:
 *   delete:
 *     summary: Deletar natureza de despesa X marcador
 *     description: Deletar natureza de despesa X marcador
 *     tags: [Planning_nrcost_x_marker]
 *     security:
 *       - entityNameHeader: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: header
 *         name: Entity-Name
 *         description: Nome da entidade a ser consultada
 *         required: true
 *         type: string
 *         default: Nome da entidade
 *       - in: param
 *         name: id
 *         description: Deletar natureza de despesa X marcador
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Message
 *         schema:
 *           $ref: '#/components/schemas/Message'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
planningNrCostXMarkerRouter.delete("/:id", permission(["delete_nrcost_x_marker"]), planningNrCostXMarkerController.delete);

export default planningNrCostXMarkerRouter;