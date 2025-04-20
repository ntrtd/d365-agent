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
import { InventItemPrices } from './InventItemPrices';
import { CostingVersionPriceType } from './CostingVersionPriceType';
import { NoYes } from './NoYes';

/**
 * Request builder class for operations supported on the {@link InventItemPrices} entity.
 */
export class InventItemPricesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventItemPrices<T>, T> {
  /**
   * Returns a request builder for querying all `InventItemPrices` entities.
   * @returns A request builder for creating requests to retrieve all `InventItemPrices` entities.
   */
  getAll(): GetAllRequestBuilder<InventItemPrices<T>, T> {
    return new GetAllRequestBuilder<InventItemPrices<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InventItemPrices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventItemPrices`.
   */
  create(
    entity: InventItemPrices<T>
  ): CreateRequestBuilder<InventItemPrices<T>, T> {
    return new CreateRequestBuilder<InventItemPrices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventItemPrices` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventItemPrices.dataAreaId}.
   * @param itemNumber Key property. See {@link InventItemPrices.itemNumber}.
   * @param costingVersionId Key property. See {@link InventItemPrices.costingVersionId}.
   * @param priceType Key property. See {@link InventItemPrices.priceType}.
   * @param fromDate Key property. See {@link InventItemPrices.fromDate}.
   * @param priceSiteId Key property. See {@link InventItemPrices.priceSiteId}.
   * @param productConfigurationId Key property. See {@link InventItemPrices.productConfigurationId}.
   * @param productColorId Key property. See {@link InventItemPrices.productColorId}.
   * @param productSizeId Key property. See {@link InventItemPrices.productSizeId}.
   * @param productStyleId Key property. See {@link InventItemPrices.productStyleId}.
   * @param isActive Key property. See {@link InventItemPrices.isActive}.
   * @param priceCreatedDateTime Key property. See {@link InventItemPrices.priceCreatedDateTime}.
   * @returns A request builder for creating requests to retrieve one `InventItemPrices` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    costingVersionId: DeserializedType<T, 'Edm.String'>,
    priceType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.CostingVersionPriceType'
    >,
    fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    priceSiteId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    isActive: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.NoYes'>,
    priceCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<InventItemPrices<T>, T> {
    return new GetByKeyRequestBuilder<InventItemPrices<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ItemNumber: itemNumber,
      CostingVersionId: costingVersionId,
      PriceType: priceType,
      FromDate: fromDate,
      PriceSiteId: priceSiteId,
      ProductConfigurationId: productConfigurationId,
      ProductColorId: productColorId,
      ProductSizeId: productSizeId,
      ProductStyleId: productStyleId,
      IsActive: isActive,
      PriceCreatedDateTime: priceCreatedDateTime
    });
  }

  /**
   * Returns a request builder for updating an entity of type `InventItemPrices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventItemPrices`.
   */
  update(
    entity: InventItemPrices<T>
  ): UpdateRequestBuilder<InventItemPrices<T>, T> {
    return new UpdateRequestBuilder<InventItemPrices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventItemPrices`.
   * @param dataAreaId Key property. See {@link InventItemPrices.dataAreaId}.
   * @param itemNumber Key property. See {@link InventItemPrices.itemNumber}.
   * @param costingVersionId Key property. See {@link InventItemPrices.costingVersionId}.
   * @param priceType Key property. See {@link InventItemPrices.priceType}.
   * @param fromDate Key property. See {@link InventItemPrices.fromDate}.
   * @param priceSiteId Key property. See {@link InventItemPrices.priceSiteId}.
   * @param productConfigurationId Key property. See {@link InventItemPrices.productConfigurationId}.
   * @param productColorId Key property. See {@link InventItemPrices.productColorId}.
   * @param productSizeId Key property. See {@link InventItemPrices.productSizeId}.
   * @param productStyleId Key property. See {@link InventItemPrices.productStyleId}.
   * @param isActive Key property. See {@link InventItemPrices.isActive}.
   * @param priceCreatedDateTime Key property. See {@link InventItemPrices.priceCreatedDateTime}.
   * @returns A request builder for creating requests that delete an entity of type `InventItemPrices`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    costingVersionId: string,
    priceType: CostingVersionPriceType,
    fromDate: Moment,
    priceSiteId: string,
    productConfigurationId: string,
    productColorId: string,
    productSizeId: string,
    productStyleId: string,
    isActive: NoYes,
    priceCreatedDateTime: Moment
  ): DeleteRequestBuilder<InventItemPrices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventItemPrices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventItemPrices` by taking the entity as a parameter.
   */
  delete(
    entity: InventItemPrices<T>
  ): DeleteRequestBuilder<InventItemPrices<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    costingVersionId?: string,
    priceType?: CostingVersionPriceType,
    fromDate?: Moment,
    priceSiteId?: string,
    productConfigurationId?: string,
    productColorId?: string,
    productSizeId?: string,
    productStyleId?: string,
    isActive?: NoYes,
    priceCreatedDateTime?: Moment
  ): DeleteRequestBuilder<InventItemPrices<T>, T> {
    return new DeleteRequestBuilder<InventItemPrices<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventItemPrices
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            CostingVersionId: costingVersionId!,
            PriceType: priceType!,
            FromDate: fromDate!,
            PriceSiteId: priceSiteId!,
            ProductConfigurationId: productConfigurationId!,
            ProductColorId: productColorId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!,
            IsActive: isActive!,
            PriceCreatedDateTime: priceCreatedDateTime!
          }
    );
  }
}
