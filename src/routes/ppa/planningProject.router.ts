import { Router } from "express";
import planningProjectController from "../../controllers/ppa/PlanningProjectController.js";
import { permission } from "../../middlewares/permissions.js";

const planningProjectRouter = Router();

/**
 * @swagger
 * tags:
 *   name:  Ppa_project
 *   description: Operações relacionadas aos PPA - projeto
 * components:
 *   schemas:
 *     Project:
 *       type: object
 *       properties:
 *         quadrennium:
 *             type: string
 *         control_cost:
 *             type: string
 *         control_revenue:
 *             type: string
 *         has_subaction:
 *             type: boolean
 *         sent:
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
 * /ppa/project:
 *   post:
 *     summary: Criar projeto
 *     description: Criar projeto
 *     tags: [Ppa_project]
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
 *         name: create_project
 *         description: Criar projeto
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Project'
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
planningProjectRouter.post("/", permission(["create_project"]), planningProjectController.register);
/**
 * @swagger
 *
 * /ppa/project:
 *   put:
 *     summary: Atualizar projeto
 *     description: Atualizar projeto
 *     tags: [Ppa_project]
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
 *         name: update_project
 *         description: Atualizar projeto
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             project_id:
 *               type: number
 *             project:
 *               $ref: '#/components/schemas/Project'
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
planningProjectRouter.put("/", permission(["update_project"]), planningProjectController.update);
/**
 * @swagger
 *
 * /ppa/project/:id:
 *   get:
 *     summary: Pegar informações sobre uma projeto
 *     description: Pegar informações sobre uma projeto
 *     tags: [Ppa_project]
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
 *         description: Pegar informações sobre uma projeto
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Projeto
 *         schema:
 *           $ref: '#/components/schemas/Project'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
planningProjectRouter.get("/:id", permission(["get_project"]), planningProjectController.show);
/**
 * @swagger
 *
 * /ppa/project/:id:
 *   delete:
 *     summary: Deletar projeto
 *     description: Deletar projeto
 *     tags: [Ppa_project]
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
 *         description: Deletar projeto
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
planningProjectRouter.delete("/:id", permission(["delete_project"]), planningProjectController.delete);

export default planningProjectRouter;