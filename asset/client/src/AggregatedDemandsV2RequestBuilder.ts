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
import { AggregatedDemandsV2 } from './AggregatedDemandsV2';
import { ReqDemPlanDemandCategory } from './ReqDemPlanDemandCategory';

/**
 * Request builder class for operations supported on the {@link AggregatedDemandsV2} entity.
 */
export class AggregatedDemandsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AggregatedDemandsV2<T>, T> {
  /**
   * Returns a request builder for querying all `AggregatedDemandsV2` entities.
   * @returns A request builder for creating requests to retrieve all `AggregatedDemandsV2` entities.
   */
  getAll(): GetAllRequestBuilder<AggregatedDemandsV2<T>, T> {
    return new GetAllRequestBuilder<AggregatedDemandsV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AggregatedDemandsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AggregatedDemandsV2`.
   */
  create(
    entity: AggregatedDemandsV2<T>
  ): CreateRequestBuilder<AggregatedDemandsV2<T>, T> {
    return new CreateRequestBuilder<AggregatedDemandsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AggregatedDemandsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link AggregatedDemandsV2.dataAreaId}.
   * @param demandCategory Key property. See {@link AggregatedDemandsV2.demandCategory}.
   * @param customerAddressCountryRegionCode Key property. See {@link AggregatedDemandsV2.customerAddressCountryRegionCode}.
   * @param customerAddressStateId Key property. See {@link AggregatedDemandsV2.customerAddressStateId}.
   * @param customerGroupId Key property. See {@link AggregatedDemandsV2.customerGroupId}.
   * @param customerAccountNumber Key property. See {@link AggregatedDemandsV2.customerAccountNumber}.
   * @param productAllocationKeyId Key property. See {@link AggregatedDemandsV2.productAllocationKeyId}.
   * @param productConfigurationId Key property. See {@link AggregatedDemandsV2.productConfigurationId}.
   * @param itemNumber Key property. See {@link AggregatedDemandsV2.itemNumber}.
   * @param productColorId Key property. See {@link AggregatedDemandsV2.productColorId}.
   * @param productSizeId Key property. See {@link AggregatedDemandsV2.productSizeId}.
   * @param productStyleId Key property. See {@link AggregatedDemandsV2.productStyleId}.
   * @param productVersionId Key property. See {@link AggregatedDemandsV2.productVersionId}.
   * @param deliveringWarehouseId Key property. See {@link AggregatedDemandsV2.deliveringWarehouseId}.
   * @param deliveringSiteId Key property. See {@link AggregatedDemandsV2.deliveringSiteId}.
   * @param inventoryStatusId Key property. See {@link AggregatedDemandsV2.inventoryStatusId}.
   * @param demandDate Key property. See {@link AggregatedDemandsV2.demandDate}.
   * @returns A request builder for creating requests to retrieve one `AggregatedDemandsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    demandCategory: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.ReqDemPlanDemandCategory'
    >,
    customerAddressCountryRegionCode: DeserializedType<T, 'Edm.String'>,
    customerAddressStateId: DeserializedType<T, 'Edm.String'>,
    customerGroupId: DeserializedType<T, 'Edm.String'>,
    customerAccountNumber: DeserializedType<T, 'Edm.String'>,
    productAllocationKeyId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productVersionId: DeserializedType<T, 'Edm.String'>,
    deliveringWarehouseId: DeserializedType<T, 'Edm.String'>,
    deliveringSiteId: DeserializedType<T, 'Edm.String'>,
    inventoryStatusId: DeserializedType<T, 'Edm.String'>,
    demandDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<AggregatedDemandsV2<T>, T> {
    return new GetByKeyRequestBuilder<AggregatedDemandsV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DemandCategory: demandCategory,
        CustomerAddressCountryRegionCode: customerAddressCountryRegionCode,
        CustomerAddressStateId: customerAddressStateId,
        CustomerGroupId: customerGroupId,
        CustomerAccountNumber: customerAccountNumber,
        ProductAllocationKeyId: productAllocationKeyId,
        ProductConfigurationId: productConfigurationId,
        ItemNumber: itemNumber,
        ProductColorId: productColorId,
        ProductSizeId: productSizeId,
        ProductStyleId: productStyleId,
        ProductVersionId: productVersionId,
        DeliveringWarehouseId: deliveringWarehouseId,
        DeliveringSiteId: deliveringSiteId,
        InventoryStatusId: inventoryStatusId,
        DemandDate: demandDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AggregatedDemandsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AggregatedDemandsV2`.
   */
  update(
    entity: AggregatedDemandsV2<T>
  ): UpdateRequestBuilder<AggregatedDemandsV2<T>, T> {
    return new UpdateRequestBuilder<AggregatedDemandsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AggregatedDemandsV2`.
   * @param dataAreaId Key property. See {@link AggregatedDemandsV2.dataAreaId}.
   * @param demandCategory Key property. See {@link AggregatedDemandsV2.demandCategory}.
   * @param customerAddressCountryRegionCode Key property. See {@link AggregatedDemandsV2.customerAddressCountryRegionCode}.
   * @param customerAddressStateId Key property. See {@link AggregatedDemandsV2.customerAddressStateId}.
   * @param customerGroupId Key property. See {@link AggregatedDemandsV2.customerGroupId}.
   * @param customerAccountNumber Key property. See {@link AggregatedDemandsV2.customerAccountNumber}.
   * @param productAllocationKeyId Key property. See {@link AggregatedDemandsV2.productAllocationKeyId}.
   * @param productConfigurationId Key property. See {@link AggregatedDemandsV2.productConfigurationId}.
   * @param itemNumber Key property. See {@link AggregatedDemandsV2.itemNumber}.
   * @param productColorId Key property. See {@link AggregatedDemandsV2.productColorId}.
   * @param productSizeId Key property. See {@link AggregatedDemandsV2.productSizeId}.
   * @param productStyleId Key property. See {@link AggregatedDemandsV2.productStyleId}.
   * @param productVersionId Key property. See {@link AggregatedDemandsV2.productVersionId}.
   * @param deliveringWarehouseId Key property. See {@link AggregatedDemandsV2.deliveringWarehouseId}.
   * @param deliveringSiteId Key property. See {@link AggregatedDemandsV2.deliveringSiteId}.
   * @param inventoryStatusId Key property. See {@link AggregatedDemandsV2.inventoryStatusId}.
   * @param demandDate Key property. See {@link AggregatedDemandsV2.demandDate}.
   * @returns A request builder for creating requests that delete an entity of type `AggregatedDemandsV2`.
   */
  delete(
    dataAreaId: string,
    demandCategory: ReqDemPlanDemandCategory,
    customerAddressCountryRegionCode: string,
    customerAddressStateId: string,
    customerGroupId: string,
    customerAccountNumber: string,
    productAllocationKeyId: string,
    productConfigurationId: string,
    itemNumber: string,
    productColorId: string,
    productSizeId: string,
    productStyleId: string,
    productVersionId: string,
    deliveringWarehouseId: string,
    deliveringSiteId: string,
    inventoryStatusId: string,
    demandDate: Moment
  ): DeleteRequestBuilder<AggregatedDemandsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AggregatedDemandsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AggregatedDemandsV2` by taking the entity as a parameter.
   */
  delete(
    entity: AggregatedDemandsV2<T>
  ): DeleteRequestBuilder<AggregatedDemandsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    demandCategory?: ReqDemPlanDemandCategory,
    customerAddressCountryRegionCode?: string,
    customerAddressStateId?: string,
    customerGroupId?: string,
    customerAccountNumber?: string,
    productAllocationKeyId?: string,
    productConfigurationId?: string,
    itemNumber?: string,
    productColorId?: string,
    productSizeId?: string,
    productStyleId?: string,
    productVersionId?: string,
    deliveringWarehouseId?: string,
    deliveringSiteId?: string,
    inventoryStatusId?: string,
    demandDate?: Moment
  ): DeleteRequestBuilder<AggregatedDemandsV2<T>, T> {
    return new DeleteRequestBuilder<AggregatedDemandsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AggregatedDemandsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DemandCategory: demandCategory!,
            CustomerAddressCountryRegionCode: customerAddressCountryRegionCode!,
            CustomerAddressStateId: customerAddressStateId!,
            CustomerGroupId: customerGroupId!,
            CustomerAccountNumber: customerAccountNumber!,
            ProductAllocationKeyId: productAllocationKeyId!,
            ProductConfigurationId: productConfigurationId!,
            ItemNumber: itemNumber!,
            ProductColorId: productColorId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!,
            ProductVersionId: productVersionId!,
            DeliveringWarehouseId: deliveringWarehouseId!,
            DeliveringSiteId: deliveringSiteId!,
            InventoryStatusId: inventoryStatusId!,
            DemandDate: demandDate!
          }
    );
  }
}
