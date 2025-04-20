/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { InventItemPricesV3 } from './InventItemPricesV3';
import { CostingVersionPriceType } from './CostingVersionPriceType';
import { NoYes } from './NoYes';

/**
 * Request builder class for operations supported on the {@link InventItemPricesV3} entity.
 */
export class InventItemPricesV3RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventItemPricesV3<T>, T> {
  /**
   * Returns a request builder for querying all `InventItemPricesV3` entities.
   * @returns A request builder for creating requests to retrieve all `InventItemPricesV3` entities.
   */
  getAll(): GetAllRequestBuilder<InventItemPricesV3<T>, T> {
    return new GetAllRequestBuilder<InventItemPricesV3<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InventItemPricesV3` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventItemPricesV3`.
   */
  create(
    entity: InventItemPricesV3<T>
  ): CreateRequestBuilder<InventItemPricesV3<T>, T> {
    return new CreateRequestBuilder<InventItemPricesV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventItemPricesV3` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventItemPricesV3.dataAreaId}.
   * @param itemNumber Key property. See {@link InventItemPricesV3.itemNumber}.
   * @param costingVersionId Key property. See {@link InventItemPricesV3.costingVersionId}.
   * @param priceType Key property. See {@link InventItemPricesV3.priceType}.
   * @param fromDate Key property. See {@link InventItemPricesV3.fromDate}.
   * @param priceSiteId Key property. See {@link InventItemPricesV3.priceSiteId}.
   * @param productConfigurationId Key property. See {@link InventItemPricesV3.productConfigurationId}.
   * @param productColorId Key property. See {@link InventItemPricesV3.productColorId}.
   * @param productSizeId Key property. See {@link InventItemPricesV3.productSizeId}.
   * @param productStyleId Key property. See {@link InventItemPricesV3.productStyleId}.
   * @param productVersionId Key property. See {@link InventItemPricesV3.productVersionId}.
   * @param isActive Key property. See {@link InventItemPricesV3.isActive}.
   * @param priceCreatedDateTime Key property. See {@link InventItemPricesV3.priceCreatedDateTime}.
   * @param recordId Key property. See {@link InventItemPricesV3.recordId}.
   * @returns A request builder for creating requests to retrieve one `InventItemPricesV3` entity based on its keys.
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
    priceCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>,
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<InventItemPricesV3<T>, T> {
    return new GetByKeyRequestBuilder<InventItemPricesV3<T>, T>(
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
        PriceCreatedDateTime: priceCreatedDateTime,
        RecordId: recordId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventItemPricesV3`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventItemPricesV3`.
   */
  update(
    entity: InventItemPricesV3<T>
  ): UpdateRequestBuilder<InventItemPricesV3<T>, T> {
    return new UpdateRequestBuilder<InventItemPricesV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventItemPricesV3`.
   * @param dataAreaId Key property. See {@link InventItemPricesV3.dataAreaId}.
   * @param itemNumber Key property. See {@link InventItemPricesV3.itemNumber}.
   * @param costingVersionId Key property. See {@link InventItemPricesV3.costingVersionId}.
   * @param priceType Key property. See {@link InventItemPricesV3.priceType}.
   * @param fromDate Key property. See {@link InventItemPricesV3.fromDate}.
   * @param priceSiteId Key property. See {@link InventItemPricesV3.priceSiteId}.
   * @param productConfigurationId Key property. See {@link InventItemPricesV3.productConfigurationId}.
   * @param productColorId Key property. See {@link InventItemPricesV3.productColorId}.
   * @param productSizeId Key property. See {@link InventItemPricesV3.productSizeId}.
   * @param productStyleId Key property. See {@link InventItemPricesV3.productStyleId}.
   * @param productVersionId Key property. See {@link InventItemPricesV3.productVersionId}.
   * @param isActive Key property. See {@link InventItemPricesV3.isActive}.
   * @param priceCreatedDateTime Key property. See {@link InventItemPricesV3.priceCreatedDateTime}.
   * @param recordId Key property. See {@link InventItemPricesV3.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `InventItemPricesV3`.
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
    priceCreatedDateTime: Moment,
    recordId: BigNumber
  ): DeleteRequestBuilder<InventItemPricesV3<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventItemPricesV3`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventItemPricesV3` by taking the entity as a parameter.
   */
  delete(
    entity: InventItemPricesV3<T>
  ): DeleteRequestBuilder<InventItemPricesV3<T>, T>;
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
    priceCreatedDateTime?: Moment,
    recordId?: BigNumber
  ): DeleteRequestBuilder<InventItemPricesV3<T>, T> {
    return new DeleteRequestBuilder<InventItemPricesV3<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventItemPricesV3
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
            PriceCreatedDateTime: priceCreatedDateTime!,
            RecordId: recordId!
          }
    );
  }
}
