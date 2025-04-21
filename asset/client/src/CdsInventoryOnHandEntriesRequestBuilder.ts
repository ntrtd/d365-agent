/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { CdsInventoryOnHandEntries } from './CdsInventoryOnHandEntries';

/**
 * Request builder class for operations supported on the {@link CdsInventoryOnHandEntries} entity.
 */
export class CdsInventoryOnHandEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsInventoryOnHandEntries<T>, T> {
  /**
   * Returns a request builder for querying all `CdsInventoryOnHandEntries` entities.
   * @returns A request builder for creating requests to retrieve all `CdsInventoryOnHandEntries` entities.
   */
  getAll(): GetAllRequestBuilder<CdsInventoryOnHandEntries<T>, T> {
    return new GetAllRequestBuilder<CdsInventoryOnHandEntries<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CdsInventoryOnHandEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsInventoryOnHandEntries`.
   */
  create(
    entity: CdsInventoryOnHandEntries<T>
  ): CreateRequestBuilder<CdsInventoryOnHandEntries<T>, T> {
    return new CreateRequestBuilder<CdsInventoryOnHandEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsInventoryOnHandEntries` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsInventoryOnHandEntries.dataAreaId}.
   * @param requestId Key property. See {@link CdsInventoryOnHandEntries.requestId}.
   * @param inventorySiteId Key property. See {@link CdsInventoryOnHandEntries.inventorySiteId}.
   * @param inventoryWarehouseId Key property. See {@link CdsInventoryOnHandEntries.inventoryWarehouseId}.
   * @param atpDate Key property. See {@link CdsInventoryOnHandEntries.atpDate}.
   * @returns A request builder for creating requests to retrieve one `CdsInventoryOnHandEntries` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    requestId: DeserializedType<T, 'Edm.String'>,
    inventorySiteId: DeserializedType<T, 'Edm.String'>,
    inventoryWarehouseId: DeserializedType<T, 'Edm.String'>,
    atpDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<CdsInventoryOnHandEntries<T>, T> {
    return new GetByKeyRequestBuilder<CdsInventoryOnHandEntries<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RequestId: requestId,
        InventorySiteId: inventorySiteId,
        InventoryWarehouseId: inventoryWarehouseId,
        ATPDate: atpDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsInventoryOnHandEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsInventoryOnHandEntries`.
   */
  update(
    entity: CdsInventoryOnHandEntries<T>
  ): UpdateRequestBuilder<CdsInventoryOnHandEntries<T>, T> {
    return new UpdateRequestBuilder<CdsInventoryOnHandEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsInventoryOnHandEntries`.
   * @param dataAreaId Key property. See {@link CdsInventoryOnHandEntries.dataAreaId}.
   * @param requestId Key property. See {@link CdsInventoryOnHandEntries.requestId}.
   * @param inventorySiteId Key property. See {@link CdsInventoryOnHandEntries.inventorySiteId}.
   * @param inventoryWarehouseId Key property. See {@link CdsInventoryOnHandEntries.inventoryWarehouseId}.
   * @param atpDate Key property. See {@link CdsInventoryOnHandEntries.atpDate}.
   * @returns A request builder for creating requests that delete an entity of type `CdsInventoryOnHandEntries`.
   */
  delete(
    dataAreaId: string,
    requestId: string,
    inventorySiteId: string,
    inventoryWarehouseId: string,
    atpDate: Moment
  ): DeleteRequestBuilder<CdsInventoryOnHandEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsInventoryOnHandEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsInventoryOnHandEntries` by taking the entity as a parameter.
   */
  delete(
    entity: CdsInventoryOnHandEntries<T>
  ): DeleteRequestBuilder<CdsInventoryOnHandEntries<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    requestId?: string,
    inventorySiteId?: string,
    inventoryWarehouseId?: string,
    atpDate?: Moment
  ): DeleteRequestBuilder<CdsInventoryOnHandEntries<T>, T> {
    return new DeleteRequestBuilder<CdsInventoryOnHandEntries<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsInventoryOnHandEntries
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RequestId: requestId!,
            InventorySiteId: inventorySiteId!,
            InventoryWarehouseId: inventoryWarehouseId!,
            ATPDate: atpDate!
          }
    );
  }
}
