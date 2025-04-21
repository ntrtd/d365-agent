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
import { ItemCoverageWithDerivedSettingsEntity } from './ItemCoverageWithDerivedSettingsEntity';

/**
 * Request builder class for operations supported on the {@link ItemCoverageWithDerivedSettingsEntity} entity.
 */
export class ItemCoverageWithDerivedSettingsEntityRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItemCoverageWithDerivedSettingsEntity<T>, T> {
  /**
   * Returns a request builder for querying all `ItemCoverageWithDerivedSettingsEntity` entities.
   * @returns A request builder for creating requests to retrieve all `ItemCoverageWithDerivedSettingsEntity` entities.
   */
  getAll(): GetAllRequestBuilder<ItemCoverageWithDerivedSettingsEntity<T>, T> {
    return new GetAllRequestBuilder<
      ItemCoverageWithDerivedSettingsEntity<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ItemCoverageWithDerivedSettingsEntity` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemCoverageWithDerivedSettingsEntity`.
   */
  create(
    entity: ItemCoverageWithDerivedSettingsEntity<T>
  ): CreateRequestBuilder<ItemCoverageWithDerivedSettingsEntity<T>, T> {
    return new CreateRequestBuilder<
      ItemCoverageWithDerivedSettingsEntity<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ItemCoverageWithDerivedSettingsEntity` entity based on its keys.
   * @param dataAreaId Key property. See {@link ItemCoverageWithDerivedSettingsEntity.dataAreaId}.
   * @param itemNumber Key property. See {@link ItemCoverageWithDerivedSettingsEntity.itemNumber}.
   * @param coverageWarehouseLocationId Key property. See {@link ItemCoverageWithDerivedSettingsEntity.coverageWarehouseLocationId}.
   * @param coverageItemBatchNumber Key property. See {@link ItemCoverageWithDerivedSettingsEntity.coverageItemBatchNumber}.
   * @param coverageProductColorId Key property. See {@link ItemCoverageWithDerivedSettingsEntity.coverageProductColorId}.
   * @param coverageProductSizeId Key property. See {@link ItemCoverageWithDerivedSettingsEntity.coverageProductSizeId}.
   * @param coverageProductStyleId Key property. See {@link ItemCoverageWithDerivedSettingsEntity.coverageProductStyleId}.
   * @param coverageProductVersionId Key property. See {@link ItemCoverageWithDerivedSettingsEntity.coverageProductVersionId}.
   * @param coverageWarehouseId Key property. See {@link ItemCoverageWithDerivedSettingsEntity.coverageWarehouseId}.
   * @param coverageItemSerialNumber Key property. See {@link ItemCoverageWithDerivedSettingsEntity.coverageItemSerialNumber}.
   * @param coverageSiteId Key property. See {@link ItemCoverageWithDerivedSettingsEntity.coverageSiteId}.
   * @param coverageInventoryStatusId Key property. See {@link ItemCoverageWithDerivedSettingsEntity.coverageInventoryStatusId}.
   * @param coverageProductConfigurationId Key property. See {@link ItemCoverageWithDerivedSettingsEntity.coverageProductConfigurationId}.
   * @returns A request builder for creating requests to retrieve one `ItemCoverageWithDerivedSettingsEntity` entity based on its keys.
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
  ): GetByKeyRequestBuilder<ItemCoverageWithDerivedSettingsEntity<T>, T> {
    return new GetByKeyRequestBuilder<
      ItemCoverageWithDerivedSettingsEntity<T>,
      T
    >(this.entityApi, {
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
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ItemCoverageWithDerivedSettingsEntity`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemCoverageWithDerivedSettingsEntity`.
   */
  update(
    entity: ItemCoverageWithDerivedSettingsEntity<T>
  ): UpdateRequestBuilder<ItemCoverageWithDerivedSettingsEntity<T>, T> {
    return new UpdateRequestBuilder<
      ItemCoverageWithDerivedSettingsEntity<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemCoverageWithDerivedSettingsEntity`.
   * @param dataAreaId Key property. See {@link ItemCoverageWithDerivedSettingsEntity.dataAreaId}.
   * @param itemNumber Key property. See {@link ItemCoverageWithDerivedSettingsEntity.itemNumber}.
   * @param coverageWarehouseLocationId Key property. See {@link ItemCoverageWithDerivedSettingsEntity.coverageWarehouseLocationId}.
   * @param coverageItemBatchNumber Key property. See {@link ItemCoverageWithDerivedSettingsEntity.coverageItemBatchNumber}.
   * @param coverageProductColorId Key property. See {@link ItemCoverageWithDerivedSettingsEntity.coverageProductColorId}.
   * @param coverageProductSizeId Key property. See {@link ItemCoverageWithDerivedSettingsEntity.coverageProductSizeId}.
   * @param coverageProductStyleId Key property. See {@link ItemCoverageWithDerivedSettingsEntity.coverageProductStyleId}.
   * @param coverageProductVersionId Key property. See {@link ItemCoverageWithDerivedSettingsEntity.coverageProductVersionId}.
   * @param coverageWarehouseId Key property. See {@link ItemCoverageWithDerivedSettingsEntity.coverageWarehouseId}.
   * @param coverageItemSerialNumber Key property. See {@link ItemCoverageWithDerivedSettingsEntity.coverageItemSerialNumber}.
   * @param coverageSiteId Key property. See {@link ItemCoverageWithDerivedSettingsEntity.coverageSiteId}.
   * @param coverageInventoryStatusId Key property. See {@link ItemCoverageWithDerivedSettingsEntity.coverageInventoryStatusId}.
   * @param coverageProductConfigurationId Key property. See {@link ItemCoverageWithDerivedSettingsEntity.coverageProductConfigurationId}.
   * @returns A request builder for creating requests that delete an entity of type `ItemCoverageWithDerivedSettingsEntity`.
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
  ): DeleteRequestBuilder<ItemCoverageWithDerivedSettingsEntity<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItemCoverageWithDerivedSettingsEntity`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemCoverageWithDerivedSettingsEntity` by taking the entity as a parameter.
   */
  delete(
    entity: ItemCoverageWithDerivedSettingsEntity<T>
  ): DeleteRequestBuilder<ItemCoverageWithDerivedSettingsEntity<T>, T>;
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
  ): DeleteRequestBuilder<ItemCoverageWithDerivedSettingsEntity<T>, T> {
    return new DeleteRequestBuilder<
      ItemCoverageWithDerivedSettingsEntity<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof ItemCoverageWithDerivedSettingsEntity
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
