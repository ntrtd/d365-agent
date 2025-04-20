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
import { SalesOrderLines } from './SalesOrderLines';

/**
 * Request builder class for operations supported on the {@link SalesOrderLines} entity.
 */
export class SalesOrderLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderLines<T>, T> {
  /**
   * Returns a request builder for querying all `SalesOrderLines` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderLines` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderLines<T>, T> {
    return new GetAllRequestBuilder<SalesOrderLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesOrderLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderLines`.
   */
  create(
    entity: SalesOrderLines<T>
  ): CreateRequestBuilder<SalesOrderLines<T>, T> {
    return new CreateRequestBuilder<SalesOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesOrderLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesOrderLines.dataAreaId}.
   * @param inventoryLotId Key property. See {@link SalesOrderLines.inventoryLotId}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventoryLotId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesOrderLines<T>, T> {
    return new GetByKeyRequestBuilder<SalesOrderLines<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      InventoryLotId: inventoryLotId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOrderLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderLines`.
   */
  update(
    entity: SalesOrderLines<T>
  ): UpdateRequestBuilder<SalesOrderLines<T>, T> {
    return new UpdateRequestBuilder<SalesOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOrderLines`.
   * @param dataAreaId Key property. See {@link SalesOrderLines.dataAreaId}.
   * @param inventoryLotId Key property. See {@link SalesOrderLines.inventoryLotId}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderLines`.
   */
  delete(
    dataAreaId: string,
    inventoryLotId: string
  ): DeleteRequestBuilder<SalesOrderLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderLines` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOrderLines<T>
  ): DeleteRequestBuilder<SalesOrderLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventoryLotId?: string
  ): DeleteRequestBuilder<SalesOrderLines<T>, T> {
    return new DeleteRequestBuilder<SalesOrderLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesOrderLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventoryLotId: inventoryLotId!
          }
    );
  }
}
