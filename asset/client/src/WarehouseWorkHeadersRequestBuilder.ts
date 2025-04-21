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
import { WarehouseWorkHeaders } from './WarehouseWorkHeaders';

/**
 * Request builder class for operations supported on the {@link WarehouseWorkHeaders} entity.
 */
export class WarehouseWorkHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WarehouseWorkHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `WarehouseWorkHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `WarehouseWorkHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<WarehouseWorkHeaders<T>, T> {
    return new GetAllRequestBuilder<WarehouseWorkHeaders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WarehouseWorkHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehouseWorkHeaders`.
   */
  create(
    entity: WarehouseWorkHeaders<T>
  ): CreateRequestBuilder<WarehouseWorkHeaders<T>, T> {
    return new CreateRequestBuilder<WarehouseWorkHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WarehouseWorkHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link WarehouseWorkHeaders.dataAreaId}.
   * @param warehouseWorkId Key property. See {@link WarehouseWorkHeaders.warehouseWorkId}.
   * @returns A request builder for creating requests to retrieve one `WarehouseWorkHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    warehouseWorkId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WarehouseWorkHeaders<T>, T> {
    return new GetByKeyRequestBuilder<WarehouseWorkHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        WarehouseWorkId: warehouseWorkId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WarehouseWorkHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehouseWorkHeaders`.
   */
  update(
    entity: WarehouseWorkHeaders<T>
  ): UpdateRequestBuilder<WarehouseWorkHeaders<T>, T> {
    return new UpdateRequestBuilder<WarehouseWorkHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehouseWorkHeaders`.
   * @param dataAreaId Key property. See {@link WarehouseWorkHeaders.dataAreaId}.
   * @param warehouseWorkId Key property. See {@link WarehouseWorkHeaders.warehouseWorkId}.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseWorkHeaders`.
   */
  delete(
    dataAreaId: string,
    warehouseWorkId: string
  ): DeleteRequestBuilder<WarehouseWorkHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WarehouseWorkHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseWorkHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: WarehouseWorkHeaders<T>
  ): DeleteRequestBuilder<WarehouseWorkHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    warehouseWorkId?: string
  ): DeleteRequestBuilder<WarehouseWorkHeaders<T>, T> {
    return new DeleteRequestBuilder<WarehouseWorkHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WarehouseWorkHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WarehouseWorkId: warehouseWorkId!
          }
    );
  }
}
