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
import { AggregatedDemands } from './AggregatedDemands';
import { ReqDemPlanDemandCategory } from './ReqDemPlanDemandCategory';

/**
 * Request builder class for operations supported on the {@link AggregatedDemands} entity.
 */
export class AggregatedDemandsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AggregatedDemands<T>, T> {
  /**
   * Returns a request builder for querying all `AggregatedDemands` entities.
   * @returns A request builder for creating requests to retrieve all `AggregatedDemands` entities.
   */
  getAll(): GetAllRequestBuilder<AggregatedDemands<T>, T> {
    return new GetAllRequestBuilder<AggregatedDemands<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AggregatedDemands` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AggregatedDemands`.
   */
  create(
    entity: AggregatedDemands<T>
  ): CreateRequestBuilder<AggregatedDemands<T>, T> {
    return new CreateRequestBuilder<AggregatedDemands<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AggregatedDemands` entity based on its keys.
   * @param dataAreaId Key property. See {@link AggregatedDemands.dataAreaId}.
   * @param demandCategory Key property. See {@link AggregatedDemands.demandCategory}.
   * @param customerAddressCountryRegionCode Key property. See {@link AggregatedDemands.customerAddressCountryRegionCode}.
   * @param customerAddressStateId Key property. See {@link AggregatedDemands.customerAddressStateId}.
   * @param customerGroupId Key property. See {@link AggregatedDemands.customerGroupId}.
   * @param customerAccountNumber Key property. See {@link AggregatedDemands.customerAccountNumber}.
   * @param productAllocationKeyId Key property. See {@link AggregatedDemands.productAllocationKeyId}.
   * @param productConfigurationId Key property. See {@link AggregatedDemands.productConfigurationId}.
   * @param itemNumber Key property. See {@link AggregatedDemands.itemNumber}.
   * @param productColorId Key property. See {@link AggregatedDemands.productColorId}.
   * @param productSizeId Key property. See {@link AggregatedDemands.productSizeId}.
   * @param productStyleId Key property. See {@link AggregatedDemands.productStyleId}.
   * @param deliveringWarehouseId Key property. See {@link AggregatedDemands.deliveringWarehouseId}.
   * @param deliveringSiteId Key property. See {@link AggregatedDemands.deliveringSiteId}.
   * @param inventoryStatusId Key property. See {@link AggregatedDemands.inventoryStatusId}.
   * @param demandDate Key property. See {@link AggregatedDemands.demandDate}.
   * @returns A request builder for creating requests to retrieve one `AggregatedDemands` entity based on its keys.
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
    deliveringWarehouseId: DeserializedType<T, 'Edm.String'>,
    deliveringSiteId: DeserializedType<T, 'Edm.String'>,
    inventoryStatusId: DeserializedType<T, 'Edm.String'>,
    demandDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<AggregatedDemands<T>, T> {
    return new GetByKeyRequestBuilder<AggregatedDemands<T>, T>(this.entityApi, {
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
      DeliveringWarehouseId: deliveringWarehouseId,
      DeliveringSiteId: deliveringSiteId,
      InventoryStatusId: inventoryStatusId,
      DemandDate: demandDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AggregatedDemands`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AggregatedDemands`.
   */
  update(
    entity: AggregatedDemands<T>
  ): UpdateRequestBuilder<AggregatedDemands<T>, T> {
    return new UpdateRequestBuilder<AggregatedDemands<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AggregatedDemands`.
   * @param dataAreaId Key property. See {@link AggregatedDemands.dataAreaId}.
   * @param demandCategory Key property. See {@link AggregatedDemands.demandCategory}.
   * @param customerAddressCountryRegionCode Key property. See {@link AggregatedDemands.customerAddressCountryRegionCode}.
   * @param customerAddressStateId Key property. See {@link AggregatedDemands.customerAddressStateId}.
   * @param customerGroupId Key property. See {@link AggregatedDemands.customerGroupId}.
   * @param customerAccountNumber Key property. See {@link AggregatedDemands.customerAccountNumber}.
   * @param productAllocationKeyId Key property. See {@link AggregatedDemands.productAllocationKeyId}.
   * @param productConfigurationId Key property. See {@link AggregatedDemands.productConfigurationId}.
   * @param itemNumber Key property. See {@link AggregatedDemands.itemNumber}.
   * @param productColorId Key property. See {@link AggregatedDemands.productColorId}.
   * @param productSizeId Key property. See {@link AggregatedDemands.productSizeId}.
   * @param productStyleId Key property. See {@link AggregatedDemands.productStyleId}.
   * @param deliveringWarehouseId Key property. See {@link AggregatedDemands.deliveringWarehouseId}.
   * @param deliveringSiteId Key property. See {@link AggregatedDemands.deliveringSiteId}.
   * @param inventoryStatusId Key property. See {@link AggregatedDemands.inventoryStatusId}.
   * @param demandDate Key property. See {@link AggregatedDemands.demandDate}.
   * @returns A request builder for creating requests that delete an entity of type `AggregatedDemands`.
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
    deliveringWarehouseId: string,
    deliveringSiteId: string,
    inventoryStatusId: string,
    demandDate: Moment
  ): DeleteRequestBuilder<AggregatedDemands<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AggregatedDemands`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AggregatedDemands` by taking the entity as a parameter.
   */
  delete(
    entity: AggregatedDemands<T>
  ): DeleteRequestBuilder<AggregatedDemands<T>, T>;
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
    deliveringWarehouseId?: string,
    deliveringSiteId?: string,
    inventoryStatusId?: string,
    demandDate?: Moment
  ): DeleteRequestBuilder<AggregatedDemands<T>, T> {
    return new DeleteRequestBuilder<AggregatedDemands<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AggregatedDemands
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
            DeliveringWarehouseId: deliveringWarehouseId!,
            DeliveringSiteId: deliveringSiteId!,
            InventoryStatusId: inventoryStatusId!,
            DemandDate: demandDate!
          }
    );
  }
}
