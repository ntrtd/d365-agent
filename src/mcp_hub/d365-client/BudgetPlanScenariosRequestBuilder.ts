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
import { BudgetPlanScenarios } from './BudgetPlanScenarios';

/**
 * Request builder class for operations supported on the {@link BudgetPlanScenarios} entity.
 */
export class BudgetPlanScenariosRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetPlanScenarios<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetPlanScenarios` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetPlanScenarios` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetPlanScenarios<T>, T> {
    return new GetAllRequestBuilder<BudgetPlanScenarios<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BudgetPlanScenarios` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetPlanScenarios`.
   */
  create(
    entity: BudgetPlanScenarios<T>
  ): CreateRequestBuilder<BudgetPlanScenarios<T>, T> {
    return new CreateRequestBuilder<BudgetPlanScenarios<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetPlanScenarios` entity based on its keys.
   * @param name Key property. See {@link BudgetPlanScenarios.name}.
   * @returns A request builder for creating requests to retrieve one `BudgetPlanScenarios` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetPlanScenarios<T>, T> {
    return new GetByKeyRequestBuilder<BudgetPlanScenarios<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetPlanScenarios`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetPlanScenarios`.
   */
  update(
    entity: BudgetPlanScenarios<T>
  ): UpdateRequestBuilder<BudgetPlanScenarios<T>, T> {
    return new UpdateRequestBuilder<BudgetPlanScenarios<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanScenarios`.
   * @param name Key property. See {@link BudgetPlanScenarios.name}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanScenarios`.
   */
  delete(name: string): DeleteRequestBuilder<BudgetPlanScenarios<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanScenarios`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanScenarios` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetPlanScenarios<T>
  ): DeleteRequestBuilder<BudgetPlanScenarios<T>, T>;
  delete(nameOrEntity: any): DeleteRequestBuilder<BudgetPlanScenarios<T>, T> {
    return new DeleteRequestBuilder<BudgetPlanScenarios<T>, T>(
      this.entityApi,
      nameOrEntity instanceof BudgetPlanScenarios
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
