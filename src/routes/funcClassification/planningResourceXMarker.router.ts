import { Router } from "express";
import planningResourceXMarkerController from "../../controllers/funcClassification/PlanningResourceXMarkerController.js";
import { permission } from "../../middlewares/permissions.js";
const planningResourceXMarkerRouter = Router();

/**
   * @swagger
   * tags:
   *   name:  Planning_resource_x_marker
   *   description: Operações relacionadas aos planejamentos de recursos X marcador
   * components:
   *   schemas:
   *     ResourceMarker:
   *       type: object
   *       properties:
   *         planning_resource_id:
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
   * /func_classification/resource_x_marker:
   *   post:
   *     summary: Criar recursos X marcador
   *     description: Criar recursos X marcador
   *     tags: [Planning_resource_x_marker]
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
   *         name: create_resource_x_marker
   *         description: Criar recurso X recursos X marcador
   *         required: true
   *         schema:
   *           $ref: '#/components/schemas/ResourceMarker'
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
planningResourceXMarkerRouter.post("/", permission(["create_resource_x_marker"]), planningResourceXMarkerController.register);
/**
 * @swagger
 *
 * /func_classification/resource_x_marker:
 *   put:
 *     summary: Atualizar recursos X marcador
 *     description: Atualizar recursos X marcador
 *     tags: [Planning_resource_x_marker]
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
 *         name: update_resource_x_marker
 *         description: Atualizar recursos X marcador
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             resource_marker_id:
 *               type: number
 *             resource_marker:
 *               $ref: '#/components/schemas/ResourceMarker'
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
planningResourceXMarkerRouter.put("/", permission(["update_resource_x_marker"]), planningResourceXMarkerController.update);
/**
 * @swagger
 *
 * /func_classification/resource_x_marker/:id:
 *   get:
 *     summary: Pegar informações sobre um recursos X marcador
 *     description: Pegar informações sobre um recursos X marcador
 *     tags: [Planning_resource_x_marker]
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
 *         description: Pegar informações sobre um recursos X marcador
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: recursos X marcador
 *         schema:
 *           $ref: '#/components/schemas/Marker'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
planningResourceXMarkerRouter.get("/:id", permission(["get_resource_x_marker"]), planningResourceXMarkerController.show);
/**
 * @swagger
 *
 * /func_classification/resource_x_marker/:id:
 *   delete:
 *     summary: Deletar recursos X marcador
 *     description: Deletar recursos X marcador
 *     tags: [Planning_resource_x_marker]
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
 *         description: Deletar recursos X marcador
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
planningResourceXMarkerRouter.delete("/:id", permission(["delete_resource_x_marker"]), planningResourceXMarkerController.delete);

export default planningResourceXMarkerRouter;