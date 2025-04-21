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
import { WarehouseInventoryOwners } from './WarehouseInventoryOwners';

/**
 * Request builder class for operations supported on the {@link WarehouseInventoryOwners} entity.
 */
export class WarehouseInventoryOwnersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WarehouseInventoryOwners<T>, T> {
  /**
   * Returns a request builder for querying all `WarehouseInventoryOwners` entities.
   * @returns A request builder for creating requests to retrieve all `WarehouseInventoryOwners` entities.
   */
  getAll(): GetAllRequestBuilder<WarehouseInventoryOwners<T>, T> {
    return new GetAllRequestBuilder<WarehouseInventoryOwners<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WarehouseInventoryOwners` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehouseInventoryOwners`.
   */
  create(
    entity: WarehouseInventoryOwners<T>
  ): CreateRequestBuilder<WarehouseInventoryOwners<T>, T> {
    return new CreateRequestBuilder<WarehouseInventoryOwners<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WarehouseInventoryOwners` entity based on its keys.
   * @param dataAreaId Key property. See {@link WarehouseInventoryOwners.dataAreaId}.
   * @param sourceSystemId Key property. See {@link WarehouseInventoryOwners.sourceSystemId}.
   * @param sourceSystemInventOwnerId Key property. See {@link WarehouseInventoryOwners.sourceSystemInventOwnerId}.
   * @returns A request builder for creating requests to retrieve one `WarehouseInventoryOwners` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceSystemId: DeserializedType<T, 'Edm.String'>,
    sourceSystemInventOwnerId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WarehouseInventoryOwners<T>, T> {
    return new GetByKeyRequestBuilder<WarehouseInventoryOwners<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceSystemId: sourceSystemId,
        SourceSystemInventOwnerId: sourceSystemInventOwnerId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WarehouseInventoryOwners`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehouseInventoryOwners`.
   */
  update(
    entity: WarehouseInventoryOwners<T>
  ): UpdateRequestBuilder<WarehouseInventoryOwners<T>, T> {
    return new UpdateRequestBuilder<WarehouseInventoryOwners<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehouseInventoryOwners`.
   * @param dataAreaId Key property. See {@link WarehouseInventoryOwners.dataAreaId}.
   * @param sourceSystemId Key property. See {@link WarehouseInventoryOwners.sourceSystemId}.
   * @param sourceSystemInventOwnerId Key property. See {@link WarehouseInventoryOwners.sourceSystemInventOwnerId}.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseInventoryOwners`.
   */
  delete(
    dataAreaId: string,
    sourceSystemId: string,
    sourceSystemInventOwnerId: string
  ): DeleteRequestBuilder<WarehouseInventoryOwners<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WarehouseInventoryOwners`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseInventoryOwners` by taking the entity as a parameter.
   */
  delete(
    entity: WarehouseInventoryOwners<T>
  ): DeleteRequestBuilder<WarehouseInventoryOwners<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceSystemId?: string,
    sourceSystemInventOwnerId?: string
  ): DeleteRequestBuilder<WarehouseInventoryOwners<T>, T> {
    return new DeleteRequestBuilder<WarehouseInventoryOwners<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WarehouseInventoryOwners
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceSystemId: sourceSystemId!,
            SourceSystemInventOwnerId: sourceSystemInventOwnerId!
          }
    );
  }
}
