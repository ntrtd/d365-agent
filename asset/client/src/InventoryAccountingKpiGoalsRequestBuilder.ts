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
import { InventoryAccountingKpiGoals } from './InventoryAccountingKpiGoals';

/**
 * Request builder class for operations supported on the {@link InventoryAccountingKpiGoals} entity.
 */
export class InventoryAccountingKpiGoalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryAccountingKpiGoals<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryAccountingKpiGoals` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryAccountingKpiGoals` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryAccountingKpiGoals<T>, T> {
    return new GetAllRequestBuilder<InventoryAccountingKpiGoals<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventoryAccountingKpiGoals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryAccountingKpiGoals`.
   */
  create(
    entity: InventoryAccountingKpiGoals<T>
  ): CreateRequestBuilder<InventoryAccountingKpiGoals<T>, T> {
    return new CreateRequestBuilder<InventoryAccountingKpiGoals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryAccountingKpiGoals` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryAccountingKpiGoals.dataAreaId}.
   * @returns A request builder for creating requests to retrieve one `InventoryAccountingKpiGoals` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventoryAccountingKpiGoals<T>, T> {
    return new GetByKeyRequestBuilder<InventoryAccountingKpiGoals<T>, T>(
      this.entityApi,
      { dataAreaId: dataAreaId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryAccountingKpiGoals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryAccountingKpiGoals`.
   */
  update(
    entity: InventoryAccountingKpiGoals<T>
  ): UpdateRequestBuilder<InventoryAccountingKpiGoals<T>, T> {
    return new UpdateRequestBuilder<InventoryAccountingKpiGoals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryAccountingKpiGoals`.
   * @param dataAreaId Key property. See {@link InventoryAccountingKpiGoals.dataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryAccountingKpiGoals`.
   */
  delete(
    dataAreaId: string
  ): DeleteRequestBuilder<InventoryAccountingKpiGoals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryAccountingKpiGoals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryAccountingKpiGoals` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryAccountingKpiGoals<T>
  ): DeleteRequestBuilder<InventoryAccountingKpiGoals<T>, T>;
  delete(
    dataAreaIdOrEntity: any
  ): DeleteRequestBuilder<InventoryAccountingKpiGoals<T>, T> {
    return new DeleteRequestBuilder<InventoryAccountingKpiGoals<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryAccountingKpiGoals
        ? dataAreaIdOrEntity
        : { dataAreaId: dataAreaIdOrEntity! }
    );
  }
}
