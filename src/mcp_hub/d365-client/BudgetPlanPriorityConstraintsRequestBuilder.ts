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
import { BudgetPlanPriorityConstraints } from './BudgetPlanPriorityConstraints';

/**
 * Request builder class for operations supported on the {@link BudgetPlanPriorityConstraints} entity.
 */
export class BudgetPlanPriorityConstraintsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetPlanPriorityConstraints<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetPlanPriorityConstraints` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetPlanPriorityConstraints` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetPlanPriorityConstraints<T>, T> {
    return new GetAllRequestBuilder<BudgetPlanPriorityConstraints<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BudgetPlanPriorityConstraints` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetPlanPriorityConstraints`.
   */
  create(
    entity: BudgetPlanPriorityConstraints<T>
  ): CreateRequestBuilder<BudgetPlanPriorityConstraints<T>, T> {
    return new CreateRequestBuilder<BudgetPlanPriorityConstraints<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetPlanPriorityConstraints` entity based on its keys.
   * @param process Key property. See {@link BudgetPlanPriorityConstraints.process}.
   * @param priority Key property. See {@link BudgetPlanPriorityConstraints.priority}.
   * @returns A request builder for creating requests to retrieve one `BudgetPlanPriorityConstraints` entity based on its keys.
   */
  getByKey(
    process: DeserializedType<T, 'Edm.String'>,
    priority: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetPlanPriorityConstraints<T>, T> {
    return new GetByKeyRequestBuilder<BudgetPlanPriorityConstraints<T>, T>(
      this.entityApi,
      {
        Process: process,
        Priority: priority
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetPlanPriorityConstraints`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetPlanPriorityConstraints`.
   */
  update(
    entity: BudgetPlanPriorityConstraints<T>
  ): UpdateRequestBuilder<BudgetPlanPriorityConstraints<T>, T> {
    return new UpdateRequestBuilder<BudgetPlanPriorityConstraints<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanPriorityConstraints`.
   * @param process Key property. See {@link BudgetPlanPriorityConstraints.process}.
   * @param priority Key property. See {@link BudgetPlanPriorityConstraints.priority}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanPriorityConstraints`.
   */
  delete(
    process: string,
    priority: string
  ): DeleteRequestBuilder<BudgetPlanPriorityConstraints<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanPriorityConstraints`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanPriorityConstraints` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetPlanPriorityConstraints<T>
  ): DeleteRequestBuilder<BudgetPlanPriorityConstraints<T>, T>;
  delete(
    processOrEntity: any,
    priority?: string
  ): DeleteRequestBuilder<BudgetPlanPriorityConstraints<T>, T> {
    return new DeleteRequestBuilder<BudgetPlanPriorityConstraints<T>, T>(
      this.entityApi,
      processOrEntity instanceof BudgetPlanPriorityConstraints
        ? processOrEntity
        : {
            Process: processOrEntity!,
            Priority: priority!
          }
    );
  }
}
