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
import { BudgetPlanProcesses } from './BudgetPlanProcesses';

/**
 * Request builder class for operations supported on the {@link BudgetPlanProcesses} entity.
 */
export class BudgetPlanProcessesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetPlanProcesses<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetPlanProcesses` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetPlanProcesses` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetPlanProcesses<T>, T> {
    return new GetAllRequestBuilder<BudgetPlanProcesses<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BudgetPlanProcesses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetPlanProcesses`.
   */
  create(
    entity: BudgetPlanProcesses<T>
  ): CreateRequestBuilder<BudgetPlanProcesses<T>, T> {
    return new CreateRequestBuilder<BudgetPlanProcesses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetPlanProcesses` entity based on its keys.
   * @param name Key property. See {@link BudgetPlanProcesses.name}.
   * @returns A request builder for creating requests to retrieve one `BudgetPlanProcesses` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetPlanProcesses<T>, T> {
    return new GetByKeyRequestBuilder<BudgetPlanProcesses<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetPlanProcesses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetPlanProcesses`.
   */
  update(
    entity: BudgetPlanProcesses<T>
  ): UpdateRequestBuilder<BudgetPlanProcesses<T>, T> {
    return new UpdateRequestBuilder<BudgetPlanProcesses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanProcesses`.
   * @param name Key property. See {@link BudgetPlanProcesses.name}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanProcesses`.
   */
  delete(name: string): DeleteRequestBuilder<BudgetPlanProcesses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanProcesses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanProcesses` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetPlanProcesses<T>
  ): DeleteRequestBuilder<BudgetPlanProcesses<T>, T>;
  delete(nameOrEntity: any): DeleteRequestBuilder<BudgetPlanProcesses<T>, T> {
    return new DeleteRequestBuilder<BudgetPlanProcesses<T>, T>(
      this.entityApi,
      nameOrEntity instanceof BudgetPlanProcesses
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
