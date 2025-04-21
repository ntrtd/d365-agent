/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { SalesProductSetDetailsV2 } from './SalesProductSetDetailsV2';

/**
 * Request builder class for operations supported on the {@link SalesProductSetDetailsV2} entity.
 */
export class SalesProductSetDetailsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesProductSetDetailsV2<T>, T> {
  /**
   * Returns a request builder for querying all `SalesProductSetDetailsV2` entities.
   * @returns A request builder for creating requests to retrieve all `SalesProductSetDetailsV2` entities.
   */
  getAll(): GetAllRequestBuilder<SalesProductSetDetailsV2<T>, T> {
    return new GetAllRequestBuilder<SalesProductSetDetailsV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesProductSetDetailsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesProductSetDetailsV2`.
   */
  create(
    entity: SalesProductSetDetailsV2<T>
  ): CreateRequestBuilder<SalesProductSetDetailsV2<T>, T> {
    return new CreateRequestBuilder<SalesProductSetDetailsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesProductSetDetailsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesProductSetDetailsV2.dataAreaId}.
   * @param salesProductSetNumber Key property. See {@link SalesProductSetDetailsV2.salesProductSetNumber}.
   * @param itemNumber Key property. See {@link SalesProductSetDetailsV2.itemNumber}.
   * @param productColorId Key property. See {@link SalesProductSetDetailsV2.productColorId}.
   * @param productStyleId Key property. See {@link SalesProductSetDetailsV2.productStyleId}.
   * @param productVersionId Key property. See {@link SalesProductSetDetailsV2.productVersionId}.
   * @param productSizeId Key property. See {@link SalesProductSetDetailsV2.productSizeId}.
   * @param productConfigurationId Key property. See {@link SalesProductSetDetailsV2.productConfigurationId}.
   * @returns A request builder for creating requests to retrieve one `SalesProductSetDetailsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesProductSetNumber: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productVersionId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesProductSetDetailsV2<T>, T> {
    return new GetByKeyRequestBuilder<SalesProductSetDetailsV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesProductSetNumber: salesProductSetNumber,
        ItemNumber: itemNumber,
        ProductColorId: productColorId,
        ProductStyleId: productStyleId,
        ProductVersionId: productVersionId,
        ProductSizeId: productSizeId,
        ProductConfigurationId: productConfigurationId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesProductSetDetailsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesProductSetDetailsV2`.
   */
  update(
    entity: SalesProductSetDetailsV2<T>
  ): UpdateRequestBuilder<SalesProductSetDetailsV2<T>, T> {
    return new UpdateRequestBuilder<SalesProductSetDetailsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesProductSetDetailsV2`.
   * @param dataAreaId Key property. See {@link SalesProductSetDetailsV2.dataAreaId}.
   * @param salesProductSetNumber Key property. See {@link SalesProductSetDetailsV2.salesProductSetNumber}.
   * @param itemNumber Key property. See {@link SalesProductSetDetailsV2.itemNumber}.
   * @param productColorId Key property. See {@link SalesProductSetDetailsV2.productColorId}.
   * @param productStyleId Key property. See {@link SalesProductSetDetailsV2.productStyleId}.
   * @param productVersionId Key property. See {@link SalesProductSetDetailsV2.productVersionId}.
   * @param productSizeId Key property. See {@link SalesProductSetDetailsV2.productSizeId}.
   * @param productConfigurationId Key property. See {@link SalesProductSetDetailsV2.productConfigurationId}.
   * @returns A request builder for creating requests that delete an entity of type `SalesProductSetDetailsV2`.
   */
  delete(
    dataAreaId: string,
    salesProductSetNumber: string,
    itemNumber: string,
    productColorId: string,
    productStyleId: string,
    productVersionId: string,
    productSizeId: string,
    productConfigurationId: string
  ): DeleteRequestBuilder<SalesProductSetDetailsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesProductSetDetailsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesProductSetDetailsV2` by taking the entity as a parameter.
   */
  delete(
    entity: SalesProductSetDetailsV2<T>
  ): DeleteRequestBuilder<SalesProductSetDetailsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesProductSetNumber?: string,
    itemNumber?: string,
    productColorId?: string,
    productStyleId?: string,
    productVersionId?: string,
    productSizeId?: string,
    productConfigurationId?: string
  ): DeleteRequestBuilder<SalesProductSetDetailsV2<T>, T> {
    return new DeleteRequestBuilder<SalesProductSetDetailsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesProductSetDetailsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesProductSetNumber: salesProductSetNumber!,
            ItemNumber: itemNumber!,
            ProductColorId: productColorId!,
            ProductStyleId: productStyleId!,
            ProductVersionId: productVersionId!,
            ProductSizeId: productSizeId!,
            ProductConfigurationId: productConfigurationId!
          }
    );
  }
}
