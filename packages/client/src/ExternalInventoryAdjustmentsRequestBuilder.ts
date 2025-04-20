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
import { ExternalInventoryAdjustments } from './ExternalInventoryAdjustments';
import { WhsExternalInventoryAdjustmentExternalSystemType } from './WhsExternalInventoryAdjustmentExternalSystemType';

/**
 * Request builder class for operations supported on the {@link ExternalInventoryAdjustments} entity.
 */
export class ExternalInventoryAdjustmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExternalInventoryAdjustments<T>, T> {
  /**
   * Returns a request builder for querying all `ExternalInventoryAdjustments` entities.
   * @returns A request builder for creating requests to retrieve all `ExternalInventoryAdjustments` entities.
   */
  getAll(): GetAllRequestBuilder<ExternalInventoryAdjustments<T>, T> {
    return new GetAllRequestBuilder<ExternalInventoryAdjustments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExternalInventoryAdjustments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExternalInventoryAdjustments`.
   */
  create(
    entity: ExternalInventoryAdjustments<T>
  ): CreateRequestBuilder<ExternalInventoryAdjustments<T>, T> {
    return new CreateRequestBuilder<ExternalInventoryAdjustments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExternalInventoryAdjustments` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExternalInventoryAdjustments.dataAreaId}.
   * @param externalSystemType Key property. See {@link ExternalInventoryAdjustments.externalSystemType}.
   * @param externalSystemId Key property. See {@link ExternalInventoryAdjustments.externalSystemId}.
   * @param inventoryAdjustmentId Key property. See {@link ExternalInventoryAdjustments.inventoryAdjustmentId}.
   * @returns A request builder for creating requests to retrieve one `ExternalInventoryAdjustments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    externalSystemType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.WHSExternalInventoryAdjustmentExternalSystemType'
    >,
    externalSystemId: DeserializedType<T, 'Edm.String'>,
    inventoryAdjustmentId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExternalInventoryAdjustments<T>, T> {
    return new GetByKeyRequestBuilder<ExternalInventoryAdjustments<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ExternalSystemType: externalSystemType,
        ExternalSystemId: externalSystemId,
        InventoryAdjustmentId: inventoryAdjustmentId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExternalInventoryAdjustments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExternalInventoryAdjustments`.
   */
  update(
    entity: ExternalInventoryAdjustments<T>
  ): UpdateRequestBuilder<ExternalInventoryAdjustments<T>, T> {
    return new UpdateRequestBuilder<ExternalInventoryAdjustments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExternalInventoryAdjustments`.
   * @param dataAreaId Key property. See {@link ExternalInventoryAdjustments.dataAreaId}.
   * @param externalSystemType Key property. See {@link ExternalInventoryAdjustments.externalSystemType}.
   * @param externalSystemId Key property. See {@link ExternalInventoryAdjustments.externalSystemId}.
   * @param inventoryAdjustmentId Key property. See {@link ExternalInventoryAdjustments.inventoryAdjustmentId}.
   * @returns A request builder for creating requests that delete an entity of type `ExternalInventoryAdjustments`.
   */
  delete(
    dataAreaId: string,
    externalSystemType: WhsExternalInventoryAdjustmentExternalSystemType,
    externalSystemId: string,
    inventoryAdjustmentId: string
  ): DeleteRequestBuilder<ExternalInventoryAdjustments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExternalInventoryAdjustments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExternalInventoryAdjustments` by taking the entity as a parameter.
   */
  delete(
    entity: ExternalInventoryAdjustments<T>
  ): DeleteRequestBuilder<ExternalInventoryAdjustments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    externalSystemType?: WhsExternalInventoryAdjustmentExternalSystemType,
    externalSystemId?: string,
    inventoryAdjustmentId?: string
  ): DeleteRequestBuilder<ExternalInventoryAdjustments<T>, T> {
    return new DeleteRequestBuilder<ExternalInventoryAdjustments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ExternalInventoryAdjustments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ExternalSystemType: externalSystemType!,
            ExternalSystemId: externalSystemId!,
            InventoryAdjustmentId: inventoryAdjustmentId!
          }
    );
  }
}
