/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { PositionForecastDimensionValidations } from './PositionForecastDimensionValidations';

/**
 * Request builder class for operations supported on the {@link PositionForecastDimensionValidations} entity.
 */
export class PositionForecastDimensionValidationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PositionForecastDimensionValidations<T>, T> {
  /**
   * Returns a request builder for querying all `PositionForecastDimensionValidations` entities.
   * @returns A request builder for creating requests to retrieve all `PositionForecastDimensionValidations` entities.
   */
  getAll(): GetAllRequestBuilder<PositionForecastDimensionValidations<T>, T> {
    return new GetAllRequestBuilder<PositionForecastDimensionValidations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PositionForecastDimensionValidations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PositionForecastDimensionValidations`.
   */
  create(
    entity: PositionForecastDimensionValidations<T>
  ): CreateRequestBuilder<PositionForecastDimensionValidations<T>, T> {
    return new CreateRequestBuilder<PositionForecastDimensionValidations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PositionForecastDimensionValidations` entity based on its keys.
   * @param positionId Key property. See {@link PositionForecastDimensionValidations.positionId}.
   * @param budgetPlanningProcessName Key property. See {@link PositionForecastDimensionValidations.budgetPlanningProcessName}.
   * @param budgetPlanScenarioName Key property. See {@link PositionForecastDimensionValidations.budgetPlanScenarioName}.
   * @returns A request builder for creating requests to retrieve one `PositionForecastDimensionValidations` entity based on its keys.
   */
  getByKey(
    positionId: DeserializedType<T, 'Edm.String'>,
    budgetPlanningProcessName: DeserializedType<T, 'Edm.String'>,
    budgetPlanScenarioName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PositionForecastDimensionValidations<T>, T> {
    return new GetByKeyRequestBuilder<
      PositionForecastDimensionValidations<T>,
      T
    >(this.entityApi, {
      PositionId: positionId,
      BudgetPlanningProcessName: budgetPlanningProcessName,
      BudgetPlanScenarioName: budgetPlanScenarioName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PositionForecastDimensionValidations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PositionForecastDimensionValidations`.
   */
  update(
    entity: PositionForecastDimensionValidations<T>
  ): UpdateRequestBuilder<PositionForecastDimensionValidations<T>, T> {
    return new UpdateRequestBuilder<PositionForecastDimensionValidations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PositionForecastDimensionValidations`.
   * @param positionId Key property. See {@link PositionForecastDimensionValidations.positionId}.
   * @param budgetPlanningProcessName Key property. See {@link PositionForecastDimensionValidations.budgetPlanningProcessName}.
   * @param budgetPlanScenarioName Key property. See {@link PositionForecastDimensionValidations.budgetPlanScenarioName}.
   * @returns A request builder for creating requests that delete an entity of type `PositionForecastDimensionValidations`.
   */
  delete(
    positionId: string,
    budgetPlanningProcessName: string,
    budgetPlanScenarioName: string
  ): DeleteRequestBuilder<PositionForecastDimensionValidations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PositionForecastDimensionValidations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PositionForecastDimensionValidations` by taking the entity as a parameter.
   */
  delete(
    entity: PositionForecastDimensionValidations<T>
  ): DeleteRequestBuilder<PositionForecastDimensionValidations<T>, T>;
  delete(
    positionIdOrEntity: any,
    budgetPlanningProcessName?: string,
    budgetPlanScenarioName?: string
  ): DeleteRequestBuilder<PositionForecastDimensionValidations<T>, T> {
    return new DeleteRequestBuilder<PositionForecastDimensionValidations<T>, T>(
      this.entityApi,
      positionIdOrEntity instanceof PositionForecastDimensionValidations
        ? positionIdOrEntity
        : {
            PositionId: positionIdOrEntity!,
            BudgetPlanningProcessName: budgetPlanningProcessName!,
            BudgetPlanScenarioName: budgetPlanScenarioName!
          }
    );
  }
}
