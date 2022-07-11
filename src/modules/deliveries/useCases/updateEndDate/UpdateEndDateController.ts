import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "./UpdateEndDateUseCase";

export class UpdateEndDateController {
  async handle(request: Request, response: Response) {
    const updateEndDateUseCase = new UpdateEndDateUseCase();

    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params;

    const delivery = await updateEndDateUseCase.execute({
      id_deliveryman,
      id_delivery,
    });

    return response.json(delivery);
  }
}