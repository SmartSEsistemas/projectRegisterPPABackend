import { Router } from "express";
import planningMarkerController from "../../controllers/funcClassification/PlanningMarkerController.js";
const planningMarkerRouter = Router();

/**
 * @swagger
 * tags:
 *   name:  Planning_marker
 *   description: Operações relacionadas aos planejamentos de marcador
 * components:
 *   schemas:
 *     Marker:
 *       type: object
 *       properties:
 *         description:
 *             type: string
 *         default:
 *             type: boolean
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
 * /func_classification/marker:
 *   post:
 *     summary: Criar marcador
 *     description: Criar marcador
 *     tags: [Planning_marker]
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
 *         name: create_marker
 *         description: Criar marcador
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Marker'
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
planningMarkerRouter.post("/", planningMarkerController.register);
/**
 * @swagger
 *
 * /func_classification/marker:
 *   put:
 *     summary: Atualizar marcador
 *     description: Atualizar marcador
 *     tags: [Planning_marker]
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
 *         name: update_marker
 *         description: Atualizar marcador
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             marker_id:
 *               type: number
 *             marker:
 *               $ref: '#/components/schemas/Marker'
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
planningMarkerRouter.put("/", planningMarkerController.update);
/**
 * @swagger
 *
 * /func_classification/marker/:id:
 *   get:
 *     summary: Pegar informações sobre um marcador
 *     description: Pegar informações sobre um marcador
 *     tags: [Planning_marker]
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
 *         description: Pegar informações sobre um marcador
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Marcador
 *         schema:
 *           $ref: '#/components/schemas/Marker'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
planningMarkerRouter.get("/:id", planningMarkerController.show);
/**
 * @swagger
 *
 * /func_classification/marker/:id:
 *   delete:
 *     summary: Deletar marcador
 *     description: Deletar marcador
 *     tags: [Planning_marker]
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
 *         description: Deletar marcador
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
planningMarkerRouter.delete("/:id", planningMarkerController.delete);

export default planningMarkerRouter;