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
import { DemandForecasts } from './DemandForecasts';

/**
 * Request builder class for operations supported on the {@link DemandForecasts} entity.
 */
export class DemandForecastsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DemandForecasts<T>, T> {
  /**
   * Returns a request builder for querying all `DemandForecasts` entities.
   * @returns A request builder for creating requests to retrieve all `DemandForecasts` entities.
   */
  getAll(): GetAllRequestBuilder<DemandForecasts<T>, T> {
    return new GetAllRequestBuilder<DemandForecasts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DemandForecasts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DemandForecasts`.
   */
  create(
    entity: DemandForecasts<T>
  ): CreateRequestBuilder<DemandForecasts<T>, T> {
    return new CreateRequestBuilder<DemandForecasts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DemandForecasts` entity based on its keys.
   * @param dataAreaId Key property. See {@link DemandForecasts.dataAreaId}.
   * @param itemNumber Key property. See {@link DemandForecasts.itemNumber}.
   * @param forecastStartDate Key property. See {@link DemandForecasts.forecastStartDate}.
   * @param productAllocationKeyId Key property. See {@link DemandForecasts.productAllocationKeyId}.
   * @param customerAccountNumber Key property. See {@link DemandForecasts.customerAccountNumber}.
   * @param customerGroupId Key property. See {@link DemandForecasts.customerGroupId}.
   * @param forecastModelId Key property. See {@link DemandForecasts.forecastModelId}.
   * @param deliveringSiteId Key property. See {@link DemandForecasts.deliveringSiteId}.
   * @param deliveringWarehouseId Key property. See {@link DemandForecasts.deliveringWarehouseId}.
   * @param productConfigurationId Key property. See {@link DemandForecasts.productConfigurationId}.
   * @param productColorId Key property. See {@link DemandForecasts.productColorId}.
   * @param productSizeId Key property. See {@link DemandForecasts.productSizeId}.
   * @param productStyleId Key property. See {@link DemandForecasts.productStyleId}.
   * @returns A request builder for creating requests to retrieve one `DemandForecasts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    forecastStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    productAllocationKeyId: DeserializedType<T, 'Edm.String'>,
    customerAccountNumber: DeserializedType<T, 'Edm.String'>,
    customerGroupId: DeserializedType<T, 'Edm.String'>,
    forecastModelId: DeserializedType<T, 'Edm.String'>,
    deliveringSiteId: DeserializedType<T, 'Edm.String'>,
    deliveringWarehouseId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DemandForecasts<T>, T> {
    return new GetByKeyRequestBuilder<DemandForecasts<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ItemNumber: itemNumber,
      ForecastStartDate: forecastStartDate,
      ProductAllocationKeyId: productAllocationKeyId,
      CustomerAccountNumber: customerAccountNumber,
      CustomerGroupId: customerGroupId,
      ForecastModelId: forecastModelId,
      DeliveringSiteId: deliveringSiteId,
      DeliveringWarehouseId: deliveringWarehouseId,
      ProductConfigurationId: productConfigurationId,
      ProductColorId: productColorId,
      ProductSizeId: productSizeId,
      ProductStyleId: productStyleId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DemandForecasts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DemandForecasts`.
   */
  update(
    entity: DemandForecasts<T>
  ): UpdateRequestBuilder<DemandForecasts<T>, T> {
    return new UpdateRequestBuilder<DemandForecasts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DemandForecasts`.
   * @param dataAreaId Key property. See {@link DemandForecasts.dataAreaId}.
   * @param itemNumber Key property. See {@link DemandForecasts.itemNumber}.
   * @param forecastStartDate Key property. See {@link DemandForecasts.forecastStartDate}.
   * @param productAllocationKeyId Key property. See {@link DemandForecasts.productAllocationKeyId}.
   * @param customerAccountNumber Key property. See {@link DemandForecasts.customerAccountNumber}.
   * @param customerGroupId Key property. See {@link DemandForecasts.customerGroupId}.
   * @param forecastModelId Key property. See {@link DemandForecasts.forecastModelId}.
   * @param deliveringSiteId Key property. See {@link DemandForecasts.deliveringSiteId}.
   * @param deliveringWarehouseId Key property. See {@link DemandForecasts.deliveringWarehouseId}.
   * @param productConfigurationId Key property. See {@link DemandForecasts.productConfigurationId}.
   * @param productColorId Key property. See {@link DemandForecasts.productColorId}.
   * @param productSizeId Key property. See {@link DemandForecasts.productSizeId}.
   * @param productStyleId Key property. See {@link DemandForecasts.productStyleId}.
   * @returns A request builder for creating requests that delete an entity of type `DemandForecasts`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    forecastStartDate: Moment,
    productAllocationKeyId: string,
    customerAccountNumber: string,
    customerGroupId: string,
    forecastModelId: string,
    deliveringSiteId: string,
    deliveringWarehouseId: string,
    productConfigurationId: string,
    productColorId: string,
    productSizeId: string,
    productStyleId: string
  ): DeleteRequestBuilder<DemandForecasts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DemandForecasts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DemandForecasts` by taking the entity as a parameter.
   */
  delete(
    entity: DemandForecasts<T>
  ): DeleteRequestBuilder<DemandForecasts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    forecastStartDate?: Moment,
    productAllocationKeyId?: string,
    customerAccountNumber?: string,
    customerGroupId?: string,
    forecastModelId?: string,
    deliveringSiteId?: string,
    deliveringWarehouseId?: string,
    productConfigurationId?: string,
    productColorId?: string,
    productSizeId?: string,
    productStyleId?: string
  ): DeleteRequestBuilder<DemandForecasts<T>, T> {
    return new DeleteRequestBuilder<DemandForecasts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DemandForecasts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            ForecastStartDate: forecastStartDate!,
            ProductAllocationKeyId: productAllocationKeyId!,
            CustomerAccountNumber: customerAccountNumber!,
            CustomerGroupId: customerGroupId!,
            ForecastModelId: forecastModelId!,
            DeliveringSiteId: deliveringSiteId!,
            DeliveringWarehouseId: deliveringWarehouseId!,
            ProductConfigurationId: productConfigurationId!,
            ProductColorId: productColorId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!
          }
    );
  }
}
