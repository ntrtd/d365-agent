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
import { ReqItemCoverageDecouplingPointPeriodSettings } from './ReqItemCoverageDecouplingPointPeriodSettings';

/**
 * Request builder class for operations supported on the {@link ReqItemCoverageDecouplingPointPeriodSettings} entity.
 */
export class ReqItemCoverageDecouplingPointPeriodSettingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReqItemCoverageDecouplingPointPeriodSettings<T>, T> {
  /**
   * Returns a request builder for querying all `ReqItemCoverageDecouplingPointPeriodSettings` entities.
   * @returns A request builder for creating requests to retrieve all `ReqItemCoverageDecouplingPointPeriodSettings` entities.
   */
  getAll(): GetAllRequestBuilder<
    ReqItemCoverageDecouplingPointPeriodSettings<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ReqItemCoverageDecouplingPointPeriodSettings<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ReqItemCoverageDecouplingPointPeriodSettings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReqItemCoverageDecouplingPointPeriodSettings`.
   */
  create(
    entity: ReqItemCoverageDecouplingPointPeriodSettings<T>
  ): CreateRequestBuilder<ReqItemCoverageDecouplingPointPeriodSettings<T>, T> {
    return new CreateRequestBuilder<
      ReqItemCoverageDecouplingPointPeriodSettings<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ReqItemCoverageDecouplingPointPeriodSettings` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReqItemCoverageDecouplingPointPeriodSettings.dataAreaId}.
   * @param itemNumber Key property. See {@link ReqItemCoverageDecouplingPointPeriodSettings.itemNumber}.
   * @param coverageWarehouseLocationId Key property. See {@link ReqItemCoverageDecouplingPointPeriodSettings.coverageWarehouseLocationId}.
   * @param coverageItemBatchNumber Key property. See {@link ReqItemCoverageDecouplingPointPeriodSettings.coverageItemBatchNumber}.
   * @param coverageProductColorId Key property. See {@link ReqItemCoverageDecouplingPointPeriodSettings.coverageProductColorId}.
   * @param coverageProductSizeId Key property. See {@link ReqItemCoverageDecouplingPointPeriodSettings.coverageProductSizeId}.
   * @param coverageProductStyleId Key property. See {@link ReqItemCoverageDecouplingPointPeriodSettings.coverageProductStyleId}.
   * @param coverageProductVersionId Key property. See {@link ReqItemCoverageDecouplingPointPeriodSettings.coverageProductVersionId}.
   * @param coverageWarehouseId Key property. See {@link ReqItemCoverageDecouplingPointPeriodSettings.coverageWarehouseId}.
   * @param coverageItemSerialNumber Key property. See {@link ReqItemCoverageDecouplingPointPeriodSettings.coverageItemSerialNumber}.
   * @param coverageSiteId Key property. See {@link ReqItemCoverageDecouplingPointPeriodSettings.coverageSiteId}.
   * @param coverageInventoryStatusId Key property. See {@link ReqItemCoverageDecouplingPointPeriodSettings.coverageInventoryStatusId}.
   * @param coverageProductConfigurationId Key property. See {@link ReqItemCoverageDecouplingPointPeriodSettings.coverageProductConfigurationId}.
   * @param fromDate Key property. See {@link ReqItemCoverageDecouplingPointPeriodSettings.fromDate}.
   * @returns A request builder for creating requests to retrieve one `ReqItemCoverageDecouplingPointPeriodSettings` entity based on its keys.
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
    coverageProductConfigurationId: DeserializedType<T, 'Edm.String'>,
    fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<
    ReqItemCoverageDecouplingPointPeriodSettings<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      ReqItemCoverageDecouplingPointPeriodSettings<T>,
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
      CoverageProductConfigurationId: coverageProductConfigurationId,
      FromDate: fromDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ReqItemCoverageDecouplingPointPeriodSettings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReqItemCoverageDecouplingPointPeriodSettings`.
   */
  update(
    entity: ReqItemCoverageDecouplingPointPeriodSettings<T>
  ): UpdateRequestBuilder<ReqItemCoverageDecouplingPointPeriodSettings<T>, T> {
    return new UpdateRequestBuilder<
      ReqItemCoverageDecouplingPointPeriodSettings<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ReqItemCoverageDecouplingPointPeriodSettings`.
   * @param dataAreaId Key property. See {@link ReqItemCoverageDecouplingPointPeriodSettings.dataAreaId}.
   * @param itemNumber Key property. See {@link ReqItemCoverageDecouplingPointPeriodSettings.itemNumber}.
   * @param coverageWarehouseLocationId Key property. See {@link ReqItemCoverageDecouplingPointPeriodSettings.coverageWarehouseLocationId}.
   * @param coverageItemBatchNumber Key property. See {@link ReqItemCoverageDecouplingPointPeriodSettings.coverageItemBatchNumber}.
   * @param coverageProductColorId Key property. See {@link ReqItemCoverageDecouplingPointPeriodSettings.coverageProductColorId}.
   * @param coverageProductSizeId Key property. See {@link ReqItemCoverageDecouplingPointPeriodSettings.coverageProductSizeId}.
   * @param coverageProductStyleId Key property. See {@link ReqItemCoverageDecouplingPointPeriodSettings.coverageProductStyleId}.
   * @param coverageProductVersionId Key property. See {@link ReqItemCoverageDecouplingPointPeriodSettings.coverageProductVersionId}.
   * @param coverageWarehouseId Key property. See {@link ReqItemCoverageDecouplingPointPeriodSettings.coverageWarehouseId}.
   * @param coverageItemSerialNumber Key property. See {@link ReqItemCoverageDecouplingPointPeriodSettings.coverageItemSerialNumber}.
   * @param coverageSiteId Key property. See {@link ReqItemCoverageDecouplingPointPeriodSettings.coverageSiteId}.
   * @param coverageInventoryStatusId Key property. See {@link ReqItemCoverageDecouplingPointPeriodSettings.coverageInventoryStatusId}.
   * @param coverageProductConfigurationId Key property. See {@link ReqItemCoverageDecouplingPointPeriodSettings.coverageProductConfigurationId}.
   * @param fromDate Key property. See {@link ReqItemCoverageDecouplingPointPeriodSettings.fromDate}.
   * @returns A request builder for creating requests that delete an entity of type `ReqItemCoverageDecouplingPointPeriodSettings`.
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
    coverageProductConfigurationId: string,
    fromDate: Moment
  ): DeleteRequestBuilder<ReqItemCoverageDecouplingPointPeriodSettings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReqItemCoverageDecouplingPointPeriodSettings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReqItemCoverageDecouplingPointPeriodSettings` by taking the entity as a parameter.
   */
  delete(
    entity: ReqItemCoverageDecouplingPointPeriodSettings<T>
  ): DeleteRequestBuilder<ReqItemCoverageDecouplingPointPeriodSettings<T>, T>;
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
    coverageProductConfigurationId?: string,
    fromDate?: Moment
  ): DeleteRequestBuilder<ReqItemCoverageDecouplingPointPeriodSettings<T>, T> {
    return new DeleteRequestBuilder<
      ReqItemCoverageDecouplingPointPeriodSettings<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReqItemCoverageDecouplingPointPeriodSettings
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
            CoverageProductConfigurationId: coverageProductConfigurationId!,
            FromDate: fromDate!
          }
    );
  }
}
