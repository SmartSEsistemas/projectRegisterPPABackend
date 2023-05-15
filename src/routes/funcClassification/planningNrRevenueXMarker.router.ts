import { Router } from "express";
import planningNrRevenueXMarkerController from "../../controllers/funcClassification/PlanningNrRevenueXMarkerController.js";
import { permission } from "../../middlewares/permissions.js";

const planningNrRevenueXMarkerRouter = Router();

/**
   * @swagger
   * tags:
   *   name:  Planning_nrrevenue_x_marker
   *   description: Operações relacionadas aos planejamentos de natureza da receita X marcador
   * components:
   *   schemas:
   *     Revenue_marker:
   *       type: object
   *       properties:
   *         planning_nature_revenue_id:
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
   * /func_classification/nrrevenue_x_marker:
   *   post:
   *     summary: Criar natureza da receita X marcador
   *     description: Criar natureza da receita X marcador
   *     tags: [Planning_nrrevenue_x_marker]
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
   *         description: Criar natureza da receita X marcador
   *         required: true
   *         schema:
   *           $ref: '#/components/schemas/Revenue_marker'
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
planningNrRevenueXMarkerRouter.post("/", permission(["create_nrrevenue_x_marker"]), planningNrRevenueXMarkerController.register);
/**
 * @swagger
 *
 * /func_classification/nrrevenue_x_marker:
 *   put:
 *     summary: Atualizar natureza da receita X marcador
 *     description: Atualizar natureza da receita X marcador
 *     tags: [Planning_nrrevenue_x_marker]
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
 *         description: Atualizar natureza da receita X marcador
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             nrrevenue_marker_id:
 *               type: number
 *             nrcost_marker:
 *               $ref: '#/components/schemas/Revenue_marker'
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
planningNrRevenueXMarkerRouter.put("/", permission(["update_nrrevenue_x_marker"]), planningNrRevenueXMarkerController.update);
/**
 * @swagger
 *
 * /func_classification/nrrevenue_x_marker/:id:
 *   get:
 *     summary: Pegar informações sobre um natureza da receita X marcador
 *     description: Pegar informações sobre um natureza da receita X marcador
 *     tags: [Planning_nrrevenue_x_marker]
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
 *         description: Pegar informações sobre um natureza da receita X marcador
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Natureza da receita X marcador
 *         schema:
 *           $ref: '#/components/schemas/Revenue_marker'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
planningNrRevenueXMarkerRouter.get("/:id", permission(["get_nrrevenue_x_marker"]), planningNrRevenueXMarkerController.show);
/**
 * @swagger
 *
 * /func_classification/nrrevenue_x_marker/:id:
 *   delete:
 *     summary: Deletar natureza da receita X marcador
 *     description: Deletar natureza da receita X marcador
 *     tags: [Planning_nrrevenue_x_marker]
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
 *         description: Deletar natureza da receita X marcador
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
planningNrRevenueXMarkerRouter.delete("/:id", permission(["delete_nrrevenue_x_marker"]), planningNrRevenueXMarkerController.delete);

export default planningNrRevenueXMarkerRouter;