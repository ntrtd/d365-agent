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
import { InventoryItemSectionLocations } from './InventoryItemSectionLocations';

/**
 * Request builder class for operations supported on the {@link InventoryItemSectionLocations} entity.
 */
export class InventoryItemSectionLocationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryItemSectionLocations<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryItemSectionLocations` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryItemSectionLocations` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryItemSectionLocations<T>, T> {
    return new GetAllRequestBuilder<InventoryItemSectionLocations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventoryItemSectionLocations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryItemSectionLocations`.
   */
  create(
    entity: InventoryItemSectionLocations<T>
  ): CreateRequestBuilder<InventoryItemSectionLocations<T>, T> {
    return new CreateRequestBuilder<InventoryItemSectionLocations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryItemSectionLocations` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryItemSectionLocations.dataAreaId}.
   * @param itemNumber Key property. See {@link InventoryItemSectionLocations.itemNumber}.
   * @param storeNumber Key property. See {@link InventoryItemSectionLocations.storeNumber}.
   * @param sectionNumber Key property. See {@link InventoryItemSectionLocations.sectionNumber}.
   * @param shelfNumber Key property. See {@link InventoryItemSectionLocations.shelfNumber}.
   * @returns A request builder for creating requests to retrieve one `InventoryItemSectionLocations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    storeNumber: DeserializedType<T, 'Edm.String'>,
    sectionNumber: DeserializedType<T, 'Edm.String'>,
    shelfNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventoryItemSectionLocations<T>, T> {
    return new GetByKeyRequestBuilder<InventoryItemSectionLocations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber,
        StoreNumber: storeNumber,
        SectionNumber: sectionNumber,
        ShelfNumber: shelfNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryItemSectionLocations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryItemSectionLocations`.
   */
  update(
    entity: InventoryItemSectionLocations<T>
  ): UpdateRequestBuilder<InventoryItemSectionLocations<T>, T> {
    return new UpdateRequestBuilder<InventoryItemSectionLocations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryItemSectionLocations`.
   * @param dataAreaId Key property. See {@link InventoryItemSectionLocations.dataAreaId}.
   * @param itemNumber Key property. See {@link InventoryItemSectionLocations.itemNumber}.
   * @param storeNumber Key property. See {@link InventoryItemSectionLocations.storeNumber}.
   * @param sectionNumber Key property. See {@link InventoryItemSectionLocations.sectionNumber}.
   * @param shelfNumber Key property. See {@link InventoryItemSectionLocations.shelfNumber}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryItemSectionLocations`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    storeNumber: string,
    sectionNumber: string,
    shelfNumber: string
  ): DeleteRequestBuilder<InventoryItemSectionLocations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryItemSectionLocations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryItemSectionLocations` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryItemSectionLocations<T>
  ): DeleteRequestBuilder<InventoryItemSectionLocations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    storeNumber?: string,
    sectionNumber?: string,
    shelfNumber?: string
  ): DeleteRequestBuilder<InventoryItemSectionLocations<T>, T> {
    return new DeleteRequestBuilder<InventoryItemSectionLocations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryItemSectionLocations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            StoreNumber: storeNumber!,
            SectionNumber: sectionNumber!,
            ShelfNumber: shelfNumber!
          }
    );
  }
}
