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
import { InventItemPricesV2 } from './InventItemPricesV2';
import { CostingVersionPriceType } from './CostingVersionPriceType';
import { NoYes } from './NoYes';

/**
 * Request builder class for operations supported on the {@link InventItemPricesV2} entity.
 */
export class InventItemPricesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventItemPricesV2<T>, T> {
  /**
   * Returns a request builder for querying all `InventItemPricesV2` entities.
   * @returns A request builder for creating requests to retrieve all `InventItemPricesV2` entities.
   */
  getAll(): GetAllRequestBuilder<InventItemPricesV2<T>, T> {
    return new GetAllRequestBuilder<InventItemPricesV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InventItemPricesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventItemPricesV2`.
   */
  create(
    entity: InventItemPricesV2<T>
  ): CreateRequestBuilder<InventItemPricesV2<T>, T> {
    return new CreateRequestBuilder<InventItemPricesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventItemPricesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventItemPricesV2.dataAreaId}.
   * @param itemNumber Key property. See {@link InventItemPricesV2.itemNumber}.
   * @param costingVersionId Key property. See {@link InventItemPricesV2.costingVersionId}.
   * @param priceType Key property. See {@link InventItemPricesV2.priceType}.
   * @param fromDate Key property. See {@link InventItemPricesV2.fromDate}.
   * @param priceSiteId Key property. See {@link InventItemPricesV2.priceSiteId}.
   * @param productConfigurationId Key property. See {@link InventItemPricesV2.productConfigurationId}.
   * @param productColorId Key property. See {@link InventItemPricesV2.productColorId}.
   * @param productSizeId Key property. See {@link InventItemPricesV2.productSizeId}.
   * @param productStyleId Key property. See {@link InventItemPricesV2.productStyleId}.
   * @param productVersionId Key property. See {@link InventItemPricesV2.productVersionId}.
   * @param isActive Key property. See {@link InventItemPricesV2.isActive}.
   * @param priceCreatedDateTime Key property. See {@link InventItemPricesV2.priceCreatedDateTime}.
   * @returns A request builder for creating requests to retrieve one `InventItemPricesV2` entity based on its keys.
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
    productVersionId: DeserializedType<T, 'Edm.String'>,
    isActive: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.NoYes'>,
    priceCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<InventItemPricesV2<T>, T> {
    return new GetByKeyRequestBuilder<InventItemPricesV2<T>, T>(
      this.entityApi,
      {
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
        ProductVersionId: productVersionId,
        IsActive: isActive,
        PriceCreatedDateTime: priceCreatedDateTime
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventItemPricesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventItemPricesV2`.
   */
  update(
    entity: InventItemPricesV2<T>
  ): UpdateRequestBuilder<InventItemPricesV2<T>, T> {
    return new UpdateRequestBuilder<InventItemPricesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventItemPricesV2`.
   * @param dataAreaId Key property. See {@link InventItemPricesV2.dataAreaId}.
   * @param itemNumber Key property. See {@link InventItemPricesV2.itemNumber}.
   * @param costingVersionId Key property. See {@link InventItemPricesV2.costingVersionId}.
   * @param priceType Key property. See {@link InventItemPricesV2.priceType}.
   * @param fromDate Key property. See {@link InventItemPricesV2.fromDate}.
   * @param priceSiteId Key property. See {@link InventItemPricesV2.priceSiteId}.
   * @param productConfigurationId Key property. See {@link InventItemPricesV2.productConfigurationId}.
   * @param productColorId Key property. See {@link InventItemPricesV2.productColorId}.
   * @param productSizeId Key property. See {@link InventItemPricesV2.productSizeId}.
   * @param productStyleId Key property. See {@link InventItemPricesV2.productStyleId}.
   * @param productVersionId Key property. See {@link InventItemPricesV2.productVersionId}.
   * @param isActive Key property. See {@link InventItemPricesV2.isActive}.
   * @param priceCreatedDateTime Key property. See {@link InventItemPricesV2.priceCreatedDateTime}.
   * @returns A request builder for creating requests that delete an entity of type `InventItemPricesV2`.
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
    productVersionId: string,
    isActive: NoYes,
    priceCreatedDateTime: Moment
  ): DeleteRequestBuilder<InventItemPricesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventItemPricesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventItemPricesV2` by taking the entity as a parameter.
   */
  delete(
    entity: InventItemPricesV2<T>
  ): DeleteRequestBuilder<InventItemPricesV2<T>, T>;
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
    productVersionId?: string,
    isActive?: NoYes,
    priceCreatedDateTime?: Moment
  ): DeleteRequestBuilder<InventItemPricesV2<T>, T> {
    return new DeleteRequestBuilder<InventItemPricesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventItemPricesV2
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
            ProductVersionId: productVersionId!,
            IsActive: isActive!,
            PriceCreatedDateTime: priceCreatedDateTime!
          }
    );
  }
}
