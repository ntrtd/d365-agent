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
import { ItemBasePricePending } from './ItemBasePricePending';
import { GupBasePriceType } from './GupBasePriceType';

/**
 * Request builder class for operations supported on the {@link ItemBasePricePending} entity.
 */
export class ItemBasePricePendingRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItemBasePricePending<T>, T> {
  /**
   * Returns a request builder for querying all `ItemBasePricePending` entities.
   * @returns A request builder for creating requests to retrieve all `ItemBasePricePending` entities.
   */
  getAll(): GetAllRequestBuilder<ItemBasePricePending<T>, T> {
    return new GetAllRequestBuilder<ItemBasePricePending<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ItemBasePricePending` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemBasePricePending`.
   */
  create(
    entity: ItemBasePricePending<T>
  ): CreateRequestBuilder<ItemBasePricePending<T>, T> {
    return new CreateRequestBuilder<ItemBasePricePending<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ItemBasePricePending` entity based on its keys.
   * @param dataAreaId Key property. See {@link ItemBasePricePending.dataAreaId}.
   * @param priceType Key property. See {@link ItemBasePricePending.priceType}.
   * @param itemId Key property. See {@link ItemBasePricePending.itemId}.
   * @param versionId Key property. See {@link ItemBasePricePending.versionId}.
   * @param fromDate Key property. See {@link ItemBasePricePending.fromDate}.
   * @param productConfigurationId Key property. See {@link ItemBasePricePending.productConfigurationId}.
   * @param productColorId Key property. See {@link ItemBasePricePending.productColorId}.
   * @param priceWarehouseId Key property. See {@link ItemBasePricePending.priceWarehouseId}.
   * @param priceSiteId Key property. See {@link ItemBasePricePending.priceSiteId}.
   * @param productSizeId Key property. See {@link ItemBasePricePending.productSizeId}.
   * @param productStyleId Key property. See {@link ItemBasePricePending.productStyleId}.
   * @param productVersionId Key property. See {@link ItemBasePricePending.productVersionId}.
   * @returns A request builder for creating requests to retrieve one `ItemBasePricePending` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    priceType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.GUPBasePriceType'
    >,
    itemId: DeserializedType<T, 'Edm.String'>,
    versionId: DeserializedType<T, 'Edm.String'>,
    fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    priceWarehouseId: DeserializedType<T, 'Edm.String'>,
    priceSiteId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productVersionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ItemBasePricePending<T>, T> {
    return new GetByKeyRequestBuilder<ItemBasePricePending<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PriceType: priceType,
        ItemId: itemId,
        VersionId: versionId,
        FromDate: fromDate,
        ProductConfigurationId: productConfigurationId,
        ProductColorId: productColorId,
        PriceWarehouseId: priceWarehouseId,
        PriceSiteId: priceSiteId,
        ProductSizeId: productSizeId,
        ProductStyleId: productStyleId,
        ProductVersionId: productVersionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ItemBasePricePending`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemBasePricePending`.
   */
  update(
    entity: ItemBasePricePending<T>
  ): UpdateRequestBuilder<ItemBasePricePending<T>, T> {
    return new UpdateRequestBuilder<ItemBasePricePending<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemBasePricePending`.
   * @param dataAreaId Key property. See {@link ItemBasePricePending.dataAreaId}.
   * @param priceType Key property. See {@link ItemBasePricePending.priceType}.
   * @param itemId Key property. See {@link ItemBasePricePending.itemId}.
   * @param versionId Key property. See {@link ItemBasePricePending.versionId}.
   * @param fromDate Key property. See {@link ItemBasePricePending.fromDate}.
   * @param productConfigurationId Key property. See {@link ItemBasePricePending.productConfigurationId}.
   * @param productColorId Key property. See {@link ItemBasePricePending.productColorId}.
   * @param priceWarehouseId Key property. See {@link ItemBasePricePending.priceWarehouseId}.
   * @param priceSiteId Key property. See {@link ItemBasePricePending.priceSiteId}.
   * @param productSizeId Key property. See {@link ItemBasePricePending.productSizeId}.
   * @param productStyleId Key property. See {@link ItemBasePricePending.productStyleId}.
   * @param productVersionId Key property. See {@link ItemBasePricePending.productVersionId}.
   * @returns A request builder for creating requests that delete an entity of type `ItemBasePricePending`.
   */
  delete(
    dataAreaId: string,
    priceType: GupBasePriceType,
    itemId: string,
    versionId: string,
    fromDate: Moment,
    productConfigurationId: string,
    productColorId: string,
    priceWarehouseId: string,
    priceSiteId: string,
    productSizeId: string,
    productStyleId: string,
    productVersionId: string
  ): DeleteRequestBuilder<ItemBasePricePending<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItemBasePricePending`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemBasePricePending` by taking the entity as a parameter.
   */
  delete(
    entity: ItemBasePricePending<T>
  ): DeleteRequestBuilder<ItemBasePricePending<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    priceType?: GupBasePriceType,
    itemId?: string,
    versionId?: string,
    fromDate?: Moment,
    productConfigurationId?: string,
    productColorId?: string,
    priceWarehouseId?: string,
    priceSiteId?: string,
    productSizeId?: string,
    productStyleId?: string,
    productVersionId?: string
  ): DeleteRequestBuilder<ItemBasePricePending<T>, T> {
    return new DeleteRequestBuilder<ItemBasePricePending<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ItemBasePricePending
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PriceType: priceType!,
            ItemId: itemId!,
            VersionId: versionId!,
            FromDate: fromDate!,
            ProductConfigurationId: productConfigurationId!,
            ProductColorId: productColorId!,
            PriceWarehouseId: priceWarehouseId!,
            PriceSiteId: priceSiteId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!,
            ProductVersionId: productVersionId!
          }
    );
  }
}
