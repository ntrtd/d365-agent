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
import { BudgetPlanColumns } from './BudgetPlanColumns';

/**
 * Request builder class for operations supported on the {@link BudgetPlanColumns} entity.
 */
export class BudgetPlanColumnsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetPlanColumns<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetPlanColumns` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetPlanColumns` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetPlanColumns<T>, T> {
    return new GetAllRequestBuilder<BudgetPlanColumns<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BudgetPlanColumns` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetPlanColumns`.
   */
  create(
    entity: BudgetPlanColumns<T>
  ): CreateRequestBuilder<BudgetPlanColumns<T>, T> {
    return new CreateRequestBuilder<BudgetPlanColumns<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetPlanColumns` entity based on its keys.
   * @param name Key property. See {@link BudgetPlanColumns.name}.
   * @returns A request builder for creating requests to retrieve one `BudgetPlanColumns` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetPlanColumns<T>, T> {
    return new GetByKeyRequestBuilder<BudgetPlanColumns<T>, T>(this.entityApi, {
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetPlanColumns`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetPlanColumns`.
   */
  update(
    entity: BudgetPlanColumns<T>
  ): UpdateRequestBuilder<BudgetPlanColumns<T>, T> {
    return new UpdateRequestBuilder<BudgetPlanColumns<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanColumns`.
   * @param name Key property. See {@link BudgetPlanColumns.name}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanColumns`.
   */
  delete(name: string): DeleteRequestBuilder<BudgetPlanColumns<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanColumns`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanColumns` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetPlanColumns<T>
  ): DeleteRequestBuilder<BudgetPlanColumns<T>, T>;
  delete(nameOrEntity: any): DeleteRequestBuilder<BudgetPlanColumns<T>, T> {
    return new DeleteRequestBuilder<BudgetPlanColumns<T>, T>(
      this.entityApi,
      nameOrEntity instanceof BudgetPlanColumns
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
