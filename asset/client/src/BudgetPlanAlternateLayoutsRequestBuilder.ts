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
import { BudgetPlanAlternateLayouts } from './BudgetPlanAlternateLayouts';

/**
 * Request builder class for operations supported on the {@link BudgetPlanAlternateLayouts} entity.
 */
export class BudgetPlanAlternateLayoutsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetPlanAlternateLayouts<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetPlanAlternateLayouts` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetPlanAlternateLayouts` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetPlanAlternateLayouts<T>, T> {
    return new GetAllRequestBuilder<BudgetPlanAlternateLayouts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BudgetPlanAlternateLayouts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetPlanAlternateLayouts`.
   */
  create(
    entity: BudgetPlanAlternateLayouts<T>
  ): CreateRequestBuilder<BudgetPlanAlternateLayouts<T>, T> {
    return new CreateRequestBuilder<BudgetPlanAlternateLayouts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetPlanAlternateLayouts` entity based on its keys.
   * @param budgetPlanLayout Key property. See {@link BudgetPlanAlternateLayouts.budgetPlanLayout}.
   * @param budgetPlanningProcess Key property. See {@link BudgetPlanAlternateLayouts.budgetPlanningProcess}.
   * @param budgetPlanningWorkflow Key property. See {@link BudgetPlanAlternateLayouts.budgetPlanningWorkflow}.
   * @param budgetPlanningStage Key property. See {@link BudgetPlanAlternateLayouts.budgetPlanningStage}.
   * @returns A request builder for creating requests to retrieve one `BudgetPlanAlternateLayouts` entity based on its keys.
   */
  getByKey(
    budgetPlanLayout: DeserializedType<T, 'Edm.String'>,
    budgetPlanningProcess: DeserializedType<T, 'Edm.String'>,
    budgetPlanningWorkflow: DeserializedType<T, 'Edm.String'>,
    budgetPlanningStage: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetPlanAlternateLayouts<T>, T> {
    return new GetByKeyRequestBuilder<BudgetPlanAlternateLayouts<T>, T>(
      this.entityApi,
      {
        BudgetPlanLayout: budgetPlanLayout,
        BudgetPlanningProcess: budgetPlanningProcess,
        BudgetPlanningWorkflow: budgetPlanningWorkflow,
        BudgetPlanningStage: budgetPlanningStage
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetPlanAlternateLayouts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetPlanAlternateLayouts`.
   */
  update(
    entity: BudgetPlanAlternateLayouts<T>
  ): UpdateRequestBuilder<BudgetPlanAlternateLayouts<T>, T> {
    return new UpdateRequestBuilder<BudgetPlanAlternateLayouts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanAlternateLayouts`.
   * @param budgetPlanLayout Key property. See {@link BudgetPlanAlternateLayouts.budgetPlanLayout}.
   * @param budgetPlanningProcess Key property. See {@link BudgetPlanAlternateLayouts.budgetPlanningProcess}.
   * @param budgetPlanningWorkflow Key property. See {@link BudgetPlanAlternateLayouts.budgetPlanningWorkflow}.
   * @param budgetPlanningStage Key property. See {@link BudgetPlanAlternateLayouts.budgetPlanningStage}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanAlternateLayouts`.
   */
  delete(
    budgetPlanLayout: string,
    budgetPlanningProcess: string,
    budgetPlanningWorkflow: string,
    budgetPlanningStage: string
  ): DeleteRequestBuilder<BudgetPlanAlternateLayouts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanAlternateLayouts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanAlternateLayouts` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetPlanAlternateLayouts<T>
  ): DeleteRequestBuilder<BudgetPlanAlternateLayouts<T>, T>;
  delete(
    budgetPlanLayoutOrEntity: any,
    budgetPlanningProcess?: string,
    budgetPlanningWorkflow?: string,
    budgetPlanningStage?: string
  ): DeleteRequestBuilder<BudgetPlanAlternateLayouts<T>, T> {
    return new DeleteRequestBuilder<BudgetPlanAlternateLayouts<T>, T>(
      this.entityApi,
      budgetPlanLayoutOrEntity instanceof BudgetPlanAlternateLayouts
        ? budgetPlanLayoutOrEntity
        : {
            BudgetPlanLayout: budgetPlanLayoutOrEntity!,
            BudgetPlanningProcess: budgetPlanningProcess!,
            BudgetPlanningWorkflow: budgetPlanningWorkflow!,
            BudgetPlanningStage: budgetPlanningStage!
          }
    );
  }
}
