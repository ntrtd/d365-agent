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
import { InventItemPendingPricesV2 } from './InventItemPendingPricesV2';
import { CostingVersionPriceType } from './CostingVersionPriceType';

/**
 * Request builder class for operations supported on the {@link InventItemPendingPricesV2} entity.
 */
export class InventItemPendingPricesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventItemPendingPricesV2<T>, T> {
  /**
   * Returns a request builder for querying all `InventItemPendingPricesV2` entities.
   * @returns A request builder for creating requests to retrieve all `InventItemPendingPricesV2` entities.
   */
  getAll(): GetAllRequestBuilder<InventItemPendingPricesV2<T>, T> {
    return new GetAllRequestBuilder<InventItemPendingPricesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventItemPendingPricesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventItemPendingPricesV2`.
   */
  create(
    entity: InventItemPendingPricesV2<T>
  ): CreateRequestBuilder<InventItemPendingPricesV2<T>, T> {
    return new CreateRequestBuilder<InventItemPendingPricesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventItemPendingPricesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventItemPendingPricesV2.dataAreaId}.
   * @param itemNumber Key property. See {@link InventItemPendingPricesV2.itemNumber}.
   * @param costingVersionId Key property. See {@link InventItemPendingPricesV2.costingVersionId}.
   * @param fromDate Key property. See {@link InventItemPendingPricesV2.fromDate}.
   * @param priceType Key property. See {@link InventItemPendingPricesV2.priceType}.
   * @param priceSiteId Key property. See {@link InventItemPendingPricesV2.priceSiteId}.
   * @param productConfigurationId Key property. See {@link InventItemPendingPricesV2.productConfigurationId}.
   * @param productColorId Key property. See {@link InventItemPendingPricesV2.productColorId}.
   * @param productSizeId Key property. See {@link InventItemPendingPricesV2.productSizeId}.
   * @param productStyleId Key property. See {@link InventItemPendingPricesV2.productStyleId}.
   * @param productVersionId Key property. See {@link InventItemPendingPricesV2.productVersionId}.
   * @returns A request builder for creating requests to retrieve one `InventItemPendingPricesV2` entity based on its keys.
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
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productVersionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventItemPendingPricesV2<T>, T> {
    return new GetByKeyRequestBuilder<InventItemPendingPricesV2<T>, T>(
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
        ProductStyleId: productStyleId,
        ProductVersionId: productVersionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventItemPendingPricesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventItemPendingPricesV2`.
   */
  update(
    entity: InventItemPendingPricesV2<T>
  ): UpdateRequestBuilder<InventItemPendingPricesV2<T>, T> {
    return new UpdateRequestBuilder<InventItemPendingPricesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventItemPendingPricesV2`.
   * @param dataAreaId Key property. See {@link InventItemPendingPricesV2.dataAreaId}.
   * @param itemNumber Key property. See {@link InventItemPendingPricesV2.itemNumber}.
   * @param costingVersionId Key property. See {@link InventItemPendingPricesV2.costingVersionId}.
   * @param fromDate Key property. See {@link InventItemPendingPricesV2.fromDate}.
   * @param priceType Key property. See {@link InventItemPendingPricesV2.priceType}.
   * @param priceSiteId Key property. See {@link InventItemPendingPricesV2.priceSiteId}.
   * @param productConfigurationId Key property. See {@link InventItemPendingPricesV2.productConfigurationId}.
   * @param productColorId Key property. See {@link InventItemPendingPricesV2.productColorId}.
   * @param productSizeId Key property. See {@link InventItemPendingPricesV2.productSizeId}.
   * @param productStyleId Key property. See {@link InventItemPendingPricesV2.productStyleId}.
   * @param productVersionId Key property. See {@link InventItemPendingPricesV2.productVersionId}.
   * @returns A request builder for creating requests that delete an entity of type `InventItemPendingPricesV2`.
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
    productStyleId: string,
    productVersionId: string
  ): DeleteRequestBuilder<InventItemPendingPricesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventItemPendingPricesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventItemPendingPricesV2` by taking the entity as a parameter.
   */
  delete(
    entity: InventItemPendingPricesV2<T>
  ): DeleteRequestBuilder<InventItemPendingPricesV2<T>, T>;
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
    productStyleId?: string,
    productVersionId?: string
  ): DeleteRequestBuilder<InventItemPendingPricesV2<T>, T> {
    return new DeleteRequestBuilder<InventItemPendingPricesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventItemPendingPricesV2
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
            ProductStyleId: productStyleId!,
            ProductVersionId: productVersionId!
          }
    );
  }
}
