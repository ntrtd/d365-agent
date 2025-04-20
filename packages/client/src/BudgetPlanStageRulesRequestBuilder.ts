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
import { BudgetPlanStageRules } from './BudgetPlanStageRules';

/**
 * Request builder class for operations supported on the {@link BudgetPlanStageRules} entity.
 */
export class BudgetPlanStageRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetPlanStageRules<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetPlanStageRules` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetPlanStageRules` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetPlanStageRules<T>, T> {
    return new GetAllRequestBuilder<BudgetPlanStageRules<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BudgetPlanStageRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetPlanStageRules`.
   */
  create(
    entity: BudgetPlanStageRules<T>
  ): CreateRequestBuilder<BudgetPlanStageRules<T>, T> {
    return new CreateRequestBuilder<BudgetPlanStageRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetPlanStageRules` entity based on its keys.
   * @param process Key property. See {@link BudgetPlanStageRules.process}.
   * @param workflow Key property. See {@link BudgetPlanStageRules.workflow}.
   * @param stage Key property. See {@link BudgetPlanStageRules.stage}.
   * @returns A request builder for creating requests to retrieve one `BudgetPlanStageRules` entity based on its keys.
   */
  getByKey(
    process: DeserializedType<T, 'Edm.String'>,
    workflow: DeserializedType<T, 'Edm.String'>,
    stage: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetPlanStageRules<T>, T> {
    return new GetByKeyRequestBuilder<BudgetPlanStageRules<T>, T>(
      this.entityApi,
      {
        Process: process,
        Workflow: workflow,
        Stage: stage
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetPlanStageRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetPlanStageRules`.
   */
  update(
    entity: BudgetPlanStageRules<T>
  ): UpdateRequestBuilder<BudgetPlanStageRules<T>, T> {
    return new UpdateRequestBuilder<BudgetPlanStageRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanStageRules`.
   * @param process Key property. See {@link BudgetPlanStageRules.process}.
   * @param workflow Key property. See {@link BudgetPlanStageRules.workflow}.
   * @param stage Key property. See {@link BudgetPlanStageRules.stage}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanStageRules`.
   */
  delete(
    process: string,
    workflow: string,
    stage: string
  ): DeleteRequestBuilder<BudgetPlanStageRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanStageRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanStageRules` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetPlanStageRules<T>
  ): DeleteRequestBuilder<BudgetPlanStageRules<T>, T>;
  delete(
    processOrEntity: any,
    workflow?: string,
    stage?: string
  ): DeleteRequestBuilder<BudgetPlanStageRules<T>, T> {
    return new DeleteRequestBuilder<BudgetPlanStageRules<T>, T>(
      this.entityApi,
      processOrEntity instanceof BudgetPlanStageRules
        ? processOrEntity
        : {
            Process: processOrEntity!,
            Workflow: workflow!,
            Stage: stage!
          }
    );
  }
}
