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
import { ItemCoverageSettingsV2 } from './ItemCoverageSettingsV2';

/**
 * Request builder class for operations supported on the {@link ItemCoverageSettingsV2} entity.
 */
export class ItemCoverageSettingsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItemCoverageSettingsV2<T>, T> {
  /**
   * Returns a request builder for querying all `ItemCoverageSettingsV2` entities.
   * @returns A request builder for creating requests to retrieve all `ItemCoverageSettingsV2` entities.
   */
  getAll(): GetAllRequestBuilder<ItemCoverageSettingsV2<T>, T> {
    return new GetAllRequestBuilder<ItemCoverageSettingsV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ItemCoverageSettingsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemCoverageSettingsV2`.
   */
  create(
    entity: ItemCoverageSettingsV2<T>
  ): CreateRequestBuilder<ItemCoverageSettingsV2<T>, T> {
    return new CreateRequestBuilder<ItemCoverageSettingsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ItemCoverageSettingsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ItemCoverageSettingsV2.dataAreaId}.
   * @param itemNumber Key property. See {@link ItemCoverageSettingsV2.itemNumber}.
   * @param coverageWarehouseLocationId Key property. See {@link ItemCoverageSettingsV2.coverageWarehouseLocationId}.
   * @param coverageItemBatchNumber Key property. See {@link ItemCoverageSettingsV2.coverageItemBatchNumber}.
   * @param coverageProductColorId Key property. See {@link ItemCoverageSettingsV2.coverageProductColorId}.
   * @param coverageProductSizeId Key property. See {@link ItemCoverageSettingsV2.coverageProductSizeId}.
   * @param coverageProductStyleId Key property. See {@link ItemCoverageSettingsV2.coverageProductStyleId}.
   * @param coverageProductVersionId Key property. See {@link ItemCoverageSettingsV2.coverageProductVersionId}.
   * @param coverageWarehouseId Key property. See {@link ItemCoverageSettingsV2.coverageWarehouseId}.
   * @param coverageItemSerialNumber Key property. See {@link ItemCoverageSettingsV2.coverageItemSerialNumber}.
   * @param coverageSiteId Key property. See {@link ItemCoverageSettingsV2.coverageSiteId}.
   * @param coverageInventoryStatusId Key property. See {@link ItemCoverageSettingsV2.coverageInventoryStatusId}.
   * @param coverageProductConfigurationId Key property. See {@link ItemCoverageSettingsV2.coverageProductConfigurationId}.
   * @returns A request builder for creating requests to retrieve one `ItemCoverageSettingsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    coverageWarehouseLocationId: DeserializedType<T, 'Edm.String'>,
    coverageItemBatchNumber: DeserializedType<T, 'Edm.String'>,
    coverageProductColorId: DeserializedType<T, 'Edm.String'>,
    coverageProductSizeId: DeserializedType<T, 'Edm.String'>,
    coverageProductStyleId: DeserializedType<T, 'Edm.String'>,
    coverageProductVersionId: DeserializedType<T, 'Edm.String'>,
    coverageWarehouseId: DeserializedType<T, 'Edm.String'>,
    coverageItemSerialNumber: DeserializedType<T, 'Edm.String'>,
    coverageSiteId: DeserializedType<T, 'Edm.String'>,
    coverageInventoryStatusId: DeserializedType<T, 'Edm.String'>,
    coverageProductConfigurationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ItemCoverageSettingsV2<T>, T> {
    return new GetByKeyRequestBuilder<ItemCoverageSettingsV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber,
        CoverageWarehouseLocationId: coverageWarehouseLocationId,
        CoverageItemBatchNumber: coverageItemBatchNumber,
        CoverageProductColorId: coverageProductColorId,
        CoverageProductSizeId: coverageProductSizeId,
        CoverageProductStyleId: coverageProductStyleId,
        CoverageProductVersionId: coverageProductVersionId,
        CoverageWarehouseId: coverageWarehouseId,
        CoverageItemSerialNumber: coverageItemSerialNumber,
        CoverageSiteId: coverageSiteId,
        CoverageInventoryStatusId: coverageInventoryStatusId,
        CoverageProductConfigurationId: coverageProductConfigurationId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ItemCoverageSettingsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemCoverageSettingsV2`.
   */
  update(
    entity: ItemCoverageSettingsV2<T>
  ): UpdateRequestBuilder<ItemCoverageSettingsV2<T>, T> {
    return new UpdateRequestBuilder<ItemCoverageSettingsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemCoverageSettingsV2`.
   * @param dataAreaId Key property. See {@link ItemCoverageSettingsV2.dataAreaId}.
   * @param itemNumber Key property. See {@link ItemCoverageSettingsV2.itemNumber}.
   * @param coverageWarehouseLocationId Key property. See {@link ItemCoverageSettingsV2.coverageWarehouseLocationId}.
   * @param coverageItemBatchNumber Key property. See {@link ItemCoverageSettingsV2.coverageItemBatchNumber}.
   * @param coverageProductColorId Key property. See {@link ItemCoverageSettingsV2.coverageProductColorId}.
   * @param coverageProductSizeId Key property. See {@link ItemCoverageSettingsV2.coverageProductSizeId}.
   * @param coverageProductStyleId Key property. See {@link ItemCoverageSettingsV2.coverageProductStyleId}.
   * @param coverageProductVersionId Key property. See {@link ItemCoverageSettingsV2.coverageProductVersionId}.
   * @param coverageWarehouseId Key property. See {@link ItemCoverageSettingsV2.coverageWarehouseId}.
   * @param coverageItemSerialNumber Key property. See {@link ItemCoverageSettingsV2.coverageItemSerialNumber}.
   * @param coverageSiteId Key property. See {@link ItemCoverageSettingsV2.coverageSiteId}.
   * @param coverageInventoryStatusId Key property. See {@link ItemCoverageSettingsV2.coverageInventoryStatusId}.
   * @param coverageProductConfigurationId Key property. See {@link ItemCoverageSettingsV2.coverageProductConfigurationId}.
   * @returns A request builder for creating requests that delete an entity of type `ItemCoverageSettingsV2`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    coverageWarehouseLocationId: string,
    coverageItemBatchNumber: string,
    coverageProductColorId: string,
    coverageProductSizeId: string,
    coverageProductStyleId: string,
    coverageProductVersionId: string,
    coverageWarehouseId: string,
    coverageItemSerialNumber: string,
    coverageSiteId: string,
    coverageInventoryStatusId: string,
    coverageProductConfigurationId: string
  ): DeleteRequestBuilder<ItemCoverageSettingsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItemCoverageSettingsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemCoverageSettingsV2` by taking the entity as a parameter.
   */
  delete(
    entity: ItemCoverageSettingsV2<T>
  ): DeleteRequestBuilder<ItemCoverageSettingsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    coverageWarehouseLocationId?: string,
    coverageItemBatchNumber?: string,
    coverageProductColorId?: string,
    coverageProductSizeId?: string,
    coverageProductStyleId?: string,
    coverageProductVersionId?: string,
    coverageWarehouseId?: string,
    coverageItemSerialNumber?: string,
    coverageSiteId?: string,
    coverageInventoryStatusId?: string,
    coverageProductConfigurationId?: string
  ): DeleteRequestBuilder<ItemCoverageSettingsV2<T>, T> {
    return new DeleteRequestBuilder<ItemCoverageSettingsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ItemCoverageSettingsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            CoverageWarehouseLocationId: coverageWarehouseLocationId!,
            CoverageItemBatchNumber: coverageItemBatchNumber!,
            CoverageProductColorId: coverageProductColorId!,
            CoverageProductSizeId: coverageProductSizeId!,
            CoverageProductStyleId: coverageProductStyleId!,
            CoverageProductVersionId: coverageProductVersionId!,
            CoverageWarehouseId: coverageWarehouseId!,
            CoverageItemSerialNumber: coverageItemSerialNumber!,
            CoverageSiteId: coverageSiteId!,
            CoverageInventoryStatusId: coverageInventoryStatusId!,
            CoverageProductConfigurationId: coverageProductConfigurationId!
          }
    );
  }
}
