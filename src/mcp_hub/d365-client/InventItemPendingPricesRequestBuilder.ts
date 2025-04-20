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
import { InventItemPendingPrices } from './InventItemPendingPrices';
import { CostingVersionPriceType } from './CostingVersionPriceType';

/**
 * Request builder class for operations supported on the {@link InventItemPendingPrices} entity.
 */
export class InventItemPendingPricesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventItemPendingPrices<T>, T> {
  /**
   * Returns a request builder for querying all `InventItemPendingPrices` entities.
   * @returns A request builder for creating requests to retrieve all `InventItemPendingPrices` entities.
   */
  getAll(): GetAllRequestBuilder<InventItemPendingPrices<T>, T> {
    return new GetAllRequestBuilder<InventItemPendingPrices<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventItemPendingPrices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventItemPendingPrices`.
   */
  create(
    entity: InventItemPendingPrices<T>
  ): CreateRequestBuilder<InventItemPendingPrices<T>, T> {
    return new CreateRequestBuilder<InventItemPendingPrices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventItemPendingPrices` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventItemPendingPrices.dataAreaId}.
   * @param itemNumber Key property. See {@link InventItemPendingPrices.itemNumber}.
   * @param costingVersionId Key property. See {@link InventItemPendingPrices.costingVersionId}.
   * @param fromDate Key property. See {@link InventItemPendingPrices.fromDate}.
   * @param priceType Key property. See {@link InventItemPendingPrices.priceType}.
   * @param priceSiteId Key property. See {@link InventItemPendingPrices.priceSiteId}.
   * @param productConfigurationId Key property. See {@link InventItemPendingPrices.productConfigurationId}.
   * @param productColorId Key property. See {@link InventItemPendingPrices.productColorId}.
   * @param productSizeId Key property. See {@link InventItemPendingPrices.productSizeId}.
   * @param productStyleId Key property. See {@link InventItemPendingPrices.productStyleId}.
   * @returns A request builder for creating requests to retrieve one `InventItemPendingPrices` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    costingVersionId: DeserializedType<T, 'Edm.String'>,
    fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    priceType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.CostingVersionPriceType'
    >,
    priceSiteId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventItemPendingPrices<T>, T> {
    return new GetByKeyRequestBuilder<InventItemPendingPrices<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber,
        CostingVersionId: costingVersionId,
        FromDate: fromDate,
        PriceType: priceType,
        PriceSiteId: priceSiteId,
        ProductConfigurationId: productConfigurationId,
        ProductColorId: productColorId,
        ProductSizeId: productSizeId,
        ProductStyleId: productStyleId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventItemPendingPrices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventItemPendingPrices`.
   */
  update(
    entity: InventItemPendingPrices<T>
  ): UpdateRequestBuilder<InventItemPendingPrices<T>, T> {
    return new UpdateRequestBuilder<InventItemPendingPrices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventItemPendingPrices`.
   * @param dataAreaId Key property. See {@link InventItemPendingPrices.dataAreaId}.
   * @param itemNumber Key property. See {@link InventItemPendingPrices.itemNumber}.
   * @param costingVersionId Key property. See {@link InventItemPendingPrices.costingVersionId}.
   * @param fromDate Key property. See {@link InventItemPendingPrices.fromDate}.
   * @param priceType Key property. See {@link InventItemPendingPrices.priceType}.
   * @param priceSiteId Key property. See {@link InventItemPendingPrices.priceSiteId}.
   * @param productConfigurationId Key property. See {@link InventItemPendingPrices.productConfigurationId}.
   * @param productColorId Key property. See {@link InventItemPendingPrices.productColorId}.
   * @param productSizeId Key property. See {@link InventItemPendingPrices.productSizeId}.
   * @param productStyleId Key property. See {@link InventItemPendingPrices.productStyleId}.
   * @returns A request builder for creating requests that delete an entity of type `InventItemPendingPrices`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    costingVersionId: string,
    fromDate: Moment,
    priceType: CostingVersionPriceType,
    priceSiteId: string,
    productConfigurationId: string,
    productColorId: string,
    productSizeId: string,
    productStyleId: string
  ): DeleteRequestBuilder<InventItemPendingPrices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventItemPendingPrices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventItemPendingPrices` by taking the entity as a parameter.
   */
  delete(
    entity: InventItemPendingPrices<T>
  ): DeleteRequestBuilder<InventItemPendingPrices<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    costingVersionId?: string,
    fromDate?: Moment,
    priceType?: CostingVersionPriceType,
    priceSiteId?: string,
    productConfigurationId?: string,
    productColorId?: string,
    productSizeId?: string,
    productStyleId?: string
  ): DeleteRequestBuilder<InventItemPendingPrices<T>, T> {
    return new DeleteRequestBuilder<InventItemPendingPrices<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventItemPendingPrices
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            CostingVersionId: costingVersionId!,
            FromDate: fromDate!,
            PriceType: priceType!,
            PriceSiteId: priceSiteId!,
            ProductConfigurationId: productConfigurationId!,
            ProductColorId: productColorId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!
          }
    );
  }
}
