import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  // eslint-disable-next-line prettier/prettier
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {
    // Complete aqui

    try {
      const { user_id } = request.params;

      const result = this.showUserProfileUseCase.execute({ user_id } as {
        user_id: string;
      });

      return response.json(result);
    } catch (err) {
      return response.status(404).json({
        error: err.message,
      });
    }
  }
}

export { ShowUserProfileController };
