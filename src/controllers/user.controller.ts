import { Router } from 'express';
import { StudentService } from '../services/user.service';

const router = Router();
const studentService = new StudentService();

router.get('/', async (req, res, next) => {
    try { res.json(await studentService.getAll()); }
    catch (err) { next(err); }
});

router.get('/:id', async (req, res, next) => {
    try { res.json(await studentService.getById(Number(req.params.id))); }
    catch (err) { next(err); }
});

router.post('/', async (req, res, next) => {
    try { 
        await studentService.create(req.body);
        res.json({ message: "user created" }); 
    }
    catch (err) { next(err); }
});

router.put('/:id', async (req, res, next) => {
    try { res.json(await studentService.update(Number(req.params.id), req.body)); }
    catch (err) { next(err); }
});

router.delete('/:id', async (req, res, next) => {
    try { res.json(await studentService.delete(Number(req.params.id))); }
    catch (err) { next(err); }
});

export default router;