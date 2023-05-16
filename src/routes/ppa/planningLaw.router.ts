import { Router } from "express";
import planningLawController from "../../controllers/ppa/PlanningLawController.js";
import { permission } from "../../middlewares/permissions.js";

const planningLawRouter = Router();

/**
 * @swagger
 * tags:
 *   name:  Ppa_law
 *   description: Operações relacionadas aos PPA - Lei
 * components:
 *   schemas:
 *     Law:
 *       type: object
 *       properties:
 *         law:
 *             type: string
 *         type_local_publication:
 *             type: string
 *             enum: ['DIARIO ESTADO', 'DIARIO MUNICIPIO', 'PLACAR', 'JORNAL DE CIRCULAÇÃO', 'SITE']
 *         local_publication:
 *             type: string
 *         planning_ppa_register_id:
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
 * /ppa/law:
 *   post:
 *     summary: Criar lei
 *     description: Criar lei
 *     tags: [Ppa_law]
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
 *         name: create_law
 *         description: Criar lei
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Law'
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
planningLawRouter.post("/", permission(["create_law"]), planningLawController.register);
/**
 * @swagger
 *
 * /ppa/law:
 *   put:
 *     summary: Atualizar lei
 *     description: Atualizar lei
 *     tags: [Ppa_law]
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
 *         name: update_law
 *         description: Atualizar lei
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             law_id:
 *               type: number
 *             law:
 *               $ref: '#/components/schemas/Law'
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
planningLawRouter.put("/", permission(["update_law"]), planningLawController.update);
/**
 * @swagger
 *
 * /ppa/law/:id:
 *   get:
 *     summary: Pegar informações sobre uma lei
 *     description: Pegar informações sobre uma lei
 *     tags: [Ppa_law]
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
 *         description: Pegar informações sobre uma lei
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Lei
 *         schema:
 *           $ref: '#/components/schemas/Law'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
planningLawRouter.get("/:id", permission(["get_law"]), planningLawController.show);
/**
 * @swagger
 *
 * /ppa/law/:id:
 *   delete:
 *     summary: Deletar lei
 *     description: Deletar lei
 *     tags: [Ppa_law]
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
 *         description: Deletar lei
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
planningLawRouter.delete("/:id", permission(["delete_law"]), planningLawController.delete);

export default planningLawRouter;