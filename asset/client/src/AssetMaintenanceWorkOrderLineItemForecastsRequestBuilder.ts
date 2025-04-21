/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { AssetMaintenanceWorkOrderLineItemForecasts } from './AssetMaintenanceWorkOrderLineItemForecasts';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWorkOrderLineItemForecasts} entity.
 */
export class AssetMaintenanceWorkOrderLineItemForecastsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceWorkOrderLineItemForecasts<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWorkOrderLineItemForecasts` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWorkOrderLineItemForecasts` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceWorkOrderLineItemForecasts<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceWorkOrderLineItemForecasts<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWorkOrderLineItemForecasts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWorkOrderLineItemForecasts`.
   */
  create(
    entity: AssetMaintenanceWorkOrderLineItemForecasts<T>
  ): CreateRequestBuilder<AssetMaintenanceWorkOrderLineItemForecasts<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceWorkOrderLineItemForecasts<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWorkOrderLineItemForecasts` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.dataAreaId}.
   * @param projectLinePropertyId Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.projectLinePropertyId}.
   * @param productColorId Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.productColorId}.
   * @param productConfigurationId Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.productConfigurationId}.
   * @param productSizeId Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.productSizeId}.
   * @param productStyleId Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.productStyleId}.
   * @param productVersionId Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.productVersionId}.
   * @param storageSiteId Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.storageSiteId}.
   * @param storageLocationId Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.storageLocationId}.
   * @param storageWarehouseId Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.storageWarehouseId}.
   * @param itemId Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.itemId}.
   * @param workOrderId Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.workOrderId}.
   * @param workOrderLineNumber Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.workOrderLineNumber}.
   * @param salesQuantity Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.salesQuantity}.
   * @param salesUnitId Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.salesUnitId}.
   * @param costPrice Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.costPrice}.
   * @param currency Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.currency}.
   * @param modelId Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.modelId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWorkOrderLineItemForecasts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projectLinePropertyId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productVersionId: DeserializedType<T, 'Edm.String'>,
    storageSiteId: DeserializedType<T, 'Edm.String'>,
    storageLocationId: DeserializedType<T, 'Edm.String'>,
    storageWarehouseId: DeserializedType<T, 'Edm.String'>,
    itemId: DeserializedType<T, 'Edm.String'>,
    workOrderId: DeserializedType<T, 'Edm.String'>,
    workOrderLineNumber: DeserializedType<T, 'Edm.Int64'>,
    salesQuantity: DeserializedType<T, 'Edm.Decimal'>,
    salesUnitId: DeserializedType<T, 'Edm.String'>,
    costPrice: DeserializedType<T, 'Edm.Decimal'>,
    currency: DeserializedType<T, 'Edm.String'>,
    modelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceWorkOrderLineItemForecasts<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceWorkOrderLineItemForecasts<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ProjectLinePropertyId: projectLinePropertyId,
      ProductColorId: productColorId,
      ProductConfigurationId: productConfigurationId,
      ProductSizeId: productSizeId,
      ProductStyleId: productStyleId,
      ProductVersionId: productVersionId,
      StorageSiteId: storageSiteId,
      StorageLocationId: storageLocationId,
      StorageWarehouseId: storageWarehouseId,
      ItemId: itemId,
      WorkOrderId: workOrderId,
      WorkOrderLineNumber: workOrderLineNumber,
      SalesQuantity: salesQuantity,
      SalesUnitId: salesUnitId,
      CostPrice: costPrice,
      Currency: currency,
      ModelId: modelId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWorkOrderLineItemForecasts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWorkOrderLineItemForecasts`.
   */
  update(
    entity: AssetMaintenanceWorkOrderLineItemForecasts<T>
  ): UpdateRequestBuilder<AssetMaintenanceWorkOrderLineItemForecasts<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceWorkOrderLineItemForecasts<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderLineItemForecasts`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.dataAreaId}.
   * @param projectLinePropertyId Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.projectLinePropertyId}.
   * @param productColorId Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.productColorId}.
   * @param productConfigurationId Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.productConfigurationId}.
   * @param productSizeId Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.productSizeId}.
   * @param productStyleId Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.productStyleId}.
   * @param productVersionId Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.productVersionId}.
   * @param storageSiteId Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.storageSiteId}.
   * @param storageLocationId Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.storageLocationId}.
   * @param storageWarehouseId Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.storageWarehouseId}.
   * @param itemId Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.itemId}.
   * @param workOrderId Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.workOrderId}.
   * @param workOrderLineNumber Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.workOrderLineNumber}.
   * @param salesQuantity Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.salesQuantity}.
   * @param salesUnitId Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.salesUnitId}.
   * @param costPrice Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.costPrice}.
   * @param currency Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.currency}.
   * @param modelId Key property. See {@link AssetMaintenanceWorkOrderLineItemForecasts.modelId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderLineItemForecasts`.
   */
  delete(
    dataAreaId: string,
    projectLinePropertyId: string,
    productColorId: string,
    productConfigurationId: string,
    productSizeId: string,
    productStyleId: string,
    productVersionId: string,
    storageSiteId: string,
    storageLocationId: string,
    storageWarehouseId: string,
    itemId: string,
    workOrderId: string,
    workOrderLineNumber: BigNumber,
    salesQuantity: BigNumber,
    salesUnitId: string,
    costPrice: BigNumber,
    currency: string,
    modelId: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLineItemForecasts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderLineItemForecasts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderLineItemForecasts` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWorkOrderLineItemForecasts<T>
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLineItemForecasts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projectLinePropertyId?: string,
    productColorId?: string,
    productConfigurationId?: string,
    productSizeId?: string,
    productStyleId?: string,
    productVersionId?: string,
    storageSiteId?: string,
    storageLocationId?: string,
    storageWarehouseId?: string,
    itemId?: string,
    workOrderId?: string,
    workOrderLineNumber?: BigNumber,
    salesQuantity?: BigNumber,
    salesUnitId?: string,
    costPrice?: BigNumber,
    currency?: string,
    modelId?: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLineItemForecasts<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceWorkOrderLineItemForecasts<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceWorkOrderLineItemForecasts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjectLinePropertyId: projectLinePropertyId!,
            ProductColorId: productColorId!,
            ProductConfigurationId: productConfigurationId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!,
            ProductVersionId: productVersionId!,
            StorageSiteId: storageSiteId!,
            StorageLocationId: storageLocationId!,
            StorageWarehouseId: storageWarehouseId!,
            ItemId: itemId!,
            WorkOrderId: workOrderId!,
            WorkOrderLineNumber: workOrderLineNumber!,
            SalesQuantity: salesQuantity!,
            SalesUnitId: salesUnitId!,
            CostPrice: costPrice!,
            Currency: currency!,
            ModelId: modelId!
          }
    );
  }
}
