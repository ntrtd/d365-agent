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
import { VoidedSalesOrderLines } from './VoidedSalesOrderLines';

/**
 * Request builder class for operations supported on the {@link VoidedSalesOrderLines} entity.
 */
export class VoidedSalesOrderLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VoidedSalesOrderLines<T>, T> {
  /**
   * Returns a request builder for querying all `VoidedSalesOrderLines` entities.
   * @returns A request builder for creating requests to retrieve all `VoidedSalesOrderLines` entities.
   */
  getAll(): GetAllRequestBuilder<VoidedSalesOrderLines<T>, T> {
    return new GetAllRequestBuilder<VoidedSalesOrderLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VoidedSalesOrderLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VoidedSalesOrderLines`.
   */
  create(
    entity: VoidedSalesOrderLines<T>
  ): CreateRequestBuilder<VoidedSalesOrderLines<T>, T> {
    return new CreateRequestBuilder<VoidedSalesOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VoidedSalesOrderLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link VoidedSalesOrderLines.dataAreaId}.
   * @param inventoryLotId Key property. See {@link VoidedSalesOrderLines.inventoryLotId}.
   * @returns A request builder for creating requests to retrieve one `VoidedSalesOrderLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventoryLotId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VoidedSalesOrderLines<T>, T> {
    return new GetByKeyRequestBuilder<VoidedSalesOrderLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InventoryLotId: inventoryLotId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VoidedSalesOrderLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VoidedSalesOrderLines`.
   */
  update(
    entity: VoidedSalesOrderLines<T>
  ): UpdateRequestBuilder<VoidedSalesOrderLines<T>, T> {
    return new UpdateRequestBuilder<VoidedSalesOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VoidedSalesOrderLines`.
   * @param dataAreaId Key property. See {@link VoidedSalesOrderLines.dataAreaId}.
   * @param inventoryLotId Key property. See {@link VoidedSalesOrderLines.inventoryLotId}.
   * @returns A request builder for creating requests that delete an entity of type `VoidedSalesOrderLines`.
   */
  delete(
    dataAreaId: string,
    inventoryLotId: string
  ): DeleteRequestBuilder<VoidedSalesOrderLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VoidedSalesOrderLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VoidedSalesOrderLines` by taking the entity as a parameter.
   */
  delete(
    entity: VoidedSalesOrderLines<T>
  ): DeleteRequestBuilder<VoidedSalesOrderLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventoryLotId?: string
  ): DeleteRequestBuilder<VoidedSalesOrderLines<T>, T> {
    return new DeleteRequestBuilder<VoidedSalesOrderLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VoidedSalesOrderLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventoryLotId: inventoryLotId!
          }
    );
  }
}
