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
import { SalesOrderLinesV3 } from './SalesOrderLinesV3';

/**
 * Request builder class for operations supported on the {@link SalesOrderLinesV3} entity.
 */
export class SalesOrderLinesV3RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderLinesV3<T>, T> {
  /**
   * Returns a request builder for querying all `SalesOrderLinesV3` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderLinesV3` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderLinesV3<T>, T> {
    return new GetAllRequestBuilder<SalesOrderLinesV3<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesOrderLinesV3` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderLinesV3`.
   */
  create(
    entity: SalesOrderLinesV3<T>
  ): CreateRequestBuilder<SalesOrderLinesV3<T>, T> {
    return new CreateRequestBuilder<SalesOrderLinesV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesOrderLinesV3` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesOrderLinesV3.dataAreaId}.
   * @param inventoryLotId Key property. See {@link SalesOrderLinesV3.inventoryLotId}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderLinesV3` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventoryLotId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesOrderLinesV3<T>, T> {
    return new GetByKeyRequestBuilder<SalesOrderLinesV3<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      InventoryLotId: inventoryLotId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOrderLinesV3`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderLinesV3`.
   */
  update(
    entity: SalesOrderLinesV3<T>
  ): UpdateRequestBuilder<SalesOrderLinesV3<T>, T> {
    return new UpdateRequestBuilder<SalesOrderLinesV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOrderLinesV3`.
   * @param dataAreaId Key property. See {@link SalesOrderLinesV3.dataAreaId}.
   * @param inventoryLotId Key property. See {@link SalesOrderLinesV3.inventoryLotId}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderLinesV3`.
   */
  delete(
    dataAreaId: string,
    inventoryLotId: string
  ): DeleteRequestBuilder<SalesOrderLinesV3<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderLinesV3`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderLinesV3` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOrderLinesV3<T>
  ): DeleteRequestBuilder<SalesOrderLinesV3<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventoryLotId?: string
  ): DeleteRequestBuilder<SalesOrderLinesV3<T>, T> {
    return new DeleteRequestBuilder<SalesOrderLinesV3<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesOrderLinesV3
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventoryLotId: inventoryLotId!
          }
    );
  }
}
