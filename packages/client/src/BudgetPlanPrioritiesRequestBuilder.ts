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
import { BudgetPlanPriorities } from './BudgetPlanPriorities';

/**
 * Request builder class for operations supported on the {@link BudgetPlanPriorities} entity.
 */
export class BudgetPlanPrioritiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetPlanPriorities<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetPlanPriorities` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetPlanPriorities` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetPlanPriorities<T>, T> {
    return new GetAllRequestBuilder<BudgetPlanPriorities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BudgetPlanPriorities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetPlanPriorities`.
   */
  create(
    entity: BudgetPlanPriorities<T>
  ): CreateRequestBuilder<BudgetPlanPriorities<T>, T> {
    return new CreateRequestBuilder<BudgetPlanPriorities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetPlanPriorities` entity based on its keys.
   * @param name Key property. See {@link BudgetPlanPriorities.name}.
   * @returns A request builder for creating requests to retrieve one `BudgetPlanPriorities` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetPlanPriorities<T>, T> {
    return new GetByKeyRequestBuilder<BudgetPlanPriorities<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetPlanPriorities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetPlanPriorities`.
   */
  update(
    entity: BudgetPlanPriorities<T>
  ): UpdateRequestBuilder<BudgetPlanPriorities<T>, T> {
    return new UpdateRequestBuilder<BudgetPlanPriorities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanPriorities`.
   * @param name Key property. See {@link BudgetPlanPriorities.name}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanPriorities`.
   */
  delete(name: string): DeleteRequestBuilder<BudgetPlanPriorities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanPriorities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanPriorities` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetPlanPriorities<T>
  ): DeleteRequestBuilder<BudgetPlanPriorities<T>, T>;
  delete(nameOrEntity: any): DeleteRequestBuilder<BudgetPlanPriorities<T>, T> {
    return new DeleteRequestBuilder<BudgetPlanPriorities<T>, T>(
      this.entityApi,
      nameOrEntity instanceof BudgetPlanPriorities
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
