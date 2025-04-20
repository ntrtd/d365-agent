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
import { ItemCoverageSettings } from './ItemCoverageSettings';

/**
 * Request builder class for operations supported on the {@link ItemCoverageSettings} entity.
 */
export class ItemCoverageSettingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItemCoverageSettings<T>, T> {
  /**
   * Returns a request builder for querying all `ItemCoverageSettings` entities.
   * @returns A request builder for creating requests to retrieve all `ItemCoverageSettings` entities.
   */
  getAll(): GetAllRequestBuilder<ItemCoverageSettings<T>, T> {
    return new GetAllRequestBuilder<ItemCoverageSettings<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ItemCoverageSettings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemCoverageSettings`.
   */
  create(
    entity: ItemCoverageSettings<T>
  ): CreateRequestBuilder<ItemCoverageSettings<T>, T> {
    return new CreateRequestBuilder<ItemCoverageSettings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ItemCoverageSettings` entity based on its keys.
   * @param dataAreaId Key property. See {@link ItemCoverageSettings.dataAreaId}.
   * @param itemNumber Key property. See {@link ItemCoverageSettings.itemNumber}.
   * @param coverageWarehouseLocationId Key property. See {@link ItemCoverageSettings.coverageWarehouseLocationId}.
   * @param coverageItemBatchNumber Key property. See {@link ItemCoverageSettings.coverageItemBatchNumber}.
   * @param coverageProductColorId Key property. See {@link ItemCoverageSettings.coverageProductColorId}.
   * @param coverageProductSizeId Key property. See {@link ItemCoverageSettings.coverageProductSizeId}.
   * @param coverageProductStyleId Key property. See {@link ItemCoverageSettings.coverageProductStyleId}.
   * @param coverageWarehouseId Key property. See {@link ItemCoverageSettings.coverageWarehouseId}.
   * @param coverageItemSerialNumber Key property. See {@link ItemCoverageSettings.coverageItemSerialNumber}.
   * @param coverageSiteId Key property. See {@link ItemCoverageSettings.coverageSiteId}.
   * @param coverageInventoryStatusId Key property. See {@link ItemCoverageSettings.coverageInventoryStatusId}.
   * @param coverageProductConfigurationId Key property. See {@link ItemCoverageSettings.coverageProductConfigurationId}.
   * @returns A request builder for creating requests to retrieve one `ItemCoverageSettings` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    coverageWarehouseLocationId: DeserializedType<T, 'Edm.String'>,
    coverageItemBatchNumber: DeserializedType<T, 'Edm.String'>,
    coverageProductColorId: DeserializedType<T, 'Edm.String'>,
    coverageProductSizeId: DeserializedType<T, 'Edm.String'>,
    coverageProductStyleId: DeserializedType<T, 'Edm.String'>,
    coverageWarehouseId: DeserializedType<T, 'Edm.String'>,
    coverageItemSerialNumber: DeserializedType<T, 'Edm.String'>,
    coverageSiteId: DeserializedType<T, 'Edm.String'>,
    coverageInventoryStatusId: DeserializedType<T, 'Edm.String'>,
    coverageProductConfigurationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ItemCoverageSettings<T>, T> {
    return new GetByKeyRequestBuilder<ItemCoverageSettings<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber,
        CoverageWarehouseLocationId: coverageWarehouseLocationId,
        CoverageItemBatchNumber: coverageItemBatchNumber,
        CoverageProductColorId: coverageProductColorId,
        CoverageProductSizeId: coverageProductSizeId,
        CoverageProductStyleId: coverageProductStyleId,
        CoverageWarehouseId: coverageWarehouseId,
        CoverageItemSerialNumber: coverageItemSerialNumber,
        CoverageSiteId: coverageSiteId,
        CoverageInventoryStatusId: coverageInventoryStatusId,
        CoverageProductConfigurationId: coverageProductConfigurationId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ItemCoverageSettings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemCoverageSettings`.
   */
  update(
    entity: ItemCoverageSettings<T>
  ): UpdateRequestBuilder<ItemCoverageSettings<T>, T> {
    return new UpdateRequestBuilder<ItemCoverageSettings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemCoverageSettings`.
   * @param dataAreaId Key property. See {@link ItemCoverageSettings.dataAreaId}.
   * @param itemNumber Key property. See {@link ItemCoverageSettings.itemNumber}.
   * @param coverageWarehouseLocationId Key property. See {@link ItemCoverageSettings.coverageWarehouseLocationId}.
   * @param coverageItemBatchNumber Key property. See {@link ItemCoverageSettings.coverageItemBatchNumber}.
   * @param coverageProductColorId Key property. See {@link ItemCoverageSettings.coverageProductColorId}.
   * @param coverageProductSizeId Key property. See {@link ItemCoverageSettings.coverageProductSizeId}.
   * @param coverageProductStyleId Key property. See {@link ItemCoverageSettings.coverageProductStyleId}.
   * @param coverageWarehouseId Key property. See {@link ItemCoverageSettings.coverageWarehouseId}.
   * @param coverageItemSerialNumber Key property. See {@link ItemCoverageSettings.coverageItemSerialNumber}.
   * @param coverageSiteId Key property. See {@link ItemCoverageSettings.coverageSiteId}.
   * @param coverageInventoryStatusId Key property. See {@link ItemCoverageSettings.coverageInventoryStatusId}.
   * @param coverageProductConfigurationId Key property. See {@link ItemCoverageSettings.coverageProductConfigurationId}.
   * @returns A request builder for creating requests that delete an entity of type `ItemCoverageSettings`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    coverageWarehouseLocationId: string,
    coverageItemBatchNumber: string,
    coverageProductColorId: string,
    coverageProductSizeId: string,
    coverageProductStyleId: string,
    coverageWarehouseId: string,
    coverageItemSerialNumber: string,
    coverageSiteId: string,
    coverageInventoryStatusId: string,
    coverageProductConfigurationId: string
  ): DeleteRequestBuilder<ItemCoverageSettings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItemCoverageSettings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemCoverageSettings` by taking the entity as a parameter.
   */
  delete(
    entity: ItemCoverageSettings<T>
  ): DeleteRequestBuilder<ItemCoverageSettings<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    coverageWarehouseLocationId?: string,
    coverageItemBatchNumber?: string,
    coverageProductColorId?: string,
    coverageProductSizeId?: string,
    coverageProductStyleId?: string,
    coverageWarehouseId?: string,
    coverageItemSerialNumber?: string,
    coverageSiteId?: string,
    coverageInventoryStatusId?: string,
    coverageProductConfigurationId?: string
  ): DeleteRequestBuilder<ItemCoverageSettings<T>, T> {
    return new DeleteRequestBuilder<ItemCoverageSettings<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ItemCoverageSettings
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            CoverageWarehouseLocationId: coverageWarehouseLocationId!,
            CoverageItemBatchNumber: coverageItemBatchNumber!,
            CoverageProductColorId: coverageProductColorId!,
            CoverageProductSizeId: coverageProductSizeId!,
            CoverageProductStyleId: coverageProductStyleId!,
            CoverageWarehouseId: coverageWarehouseId!,
            CoverageItemSerialNumber: coverageItemSerialNumber!,
            CoverageSiteId: coverageSiteId!,
            CoverageInventoryStatusId: coverageInventoryStatusId!,
            CoverageProductConfigurationId: coverageProductConfigurationId!
          }
    );
  }
}
