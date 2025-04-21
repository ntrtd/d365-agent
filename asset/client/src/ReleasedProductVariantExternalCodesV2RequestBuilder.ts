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
import { ReleasedProductVariantExternalCodesV2 } from './ReleasedProductVariantExternalCodesV2';

/**
 * Request builder class for operations supported on the {@link ReleasedProductVariantExternalCodesV2} entity.
 */
export class ReleasedProductVariantExternalCodesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReleasedProductVariantExternalCodesV2<T>, T> {
  /**
   * Returns a request builder for querying all `ReleasedProductVariantExternalCodesV2` entities.
   * @returns A request builder for creating requests to retrieve all `ReleasedProductVariantExternalCodesV2` entities.
   */
  getAll(): GetAllRequestBuilder<ReleasedProductVariantExternalCodesV2<T>, T> {
    return new GetAllRequestBuilder<
      ReleasedProductVariantExternalCodesV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ReleasedProductVariantExternalCodesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReleasedProductVariantExternalCodesV2`.
   */
  create(
    entity: ReleasedProductVariantExternalCodesV2<T>
  ): CreateRequestBuilder<ReleasedProductVariantExternalCodesV2<T>, T> {
    return new CreateRequestBuilder<
      ReleasedProductVariantExternalCodesV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ReleasedProductVariantExternalCodesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReleasedProductVariantExternalCodesV2.dataAreaId}.
   * @param releasedProductVariantExternalCodeClassId Key property. See {@link ReleasedProductVariantExternalCodesV2.releasedProductVariantExternalCodeClassId}.
   * @param itemNumber Key property. See {@link ReleasedProductVariantExternalCodesV2.itemNumber}.
   * @param productConfigurationId Key property. See {@link ReleasedProductVariantExternalCodesV2.productConfigurationId}.
   * @param productSizeId Key property. See {@link ReleasedProductVariantExternalCodesV2.productSizeId}.
   * @param productStyleId Key property. See {@link ReleasedProductVariantExternalCodesV2.productStyleId}.
   * @param productVersionId Key property. See {@link ReleasedProductVariantExternalCodesV2.productVersionId}.
   * @param productColorId Key property. See {@link ReleasedProductVariantExternalCodesV2.productColorId}.
   * @returns A request builder for creating requests to retrieve one `ReleasedProductVariantExternalCodesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    releasedProductVariantExternalCodeClassId: DeserializedType<
      T,
      'Edm.String'
    >,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productVersionId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ReleasedProductVariantExternalCodesV2<T>, T> {
    return new GetByKeyRequestBuilder<
      ReleasedProductVariantExternalCodesV2<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ReleasedProductVariantExternalCodeClassId:
        releasedProductVariantExternalCodeClassId,
      ItemNumber: itemNumber,
      ProductConfigurationId: productConfigurationId,
      ProductSizeId: productSizeId,
      ProductStyleId: productStyleId,
      ProductVersionId: productVersionId,
      ProductColorId: productColorId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ReleasedProductVariantExternalCodesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReleasedProductVariantExternalCodesV2`.
   */
  update(
    entity: ReleasedProductVariantExternalCodesV2<T>
  ): UpdateRequestBuilder<ReleasedProductVariantExternalCodesV2<T>, T> {
    return new UpdateRequestBuilder<
      ReleasedProductVariantExternalCodesV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ReleasedProductVariantExternalCodesV2`.
   * @param dataAreaId Key property. See {@link ReleasedProductVariantExternalCodesV2.dataAreaId}.
   * @param releasedProductVariantExternalCodeClassId Key property. See {@link ReleasedProductVariantExternalCodesV2.releasedProductVariantExternalCodeClassId}.
   * @param itemNumber Key property. See {@link ReleasedProductVariantExternalCodesV2.itemNumber}.
   * @param productConfigurationId Key property. See {@link ReleasedProductVariantExternalCodesV2.productConfigurationId}.
   * @param productSizeId Key property. See {@link ReleasedProductVariantExternalCodesV2.productSizeId}.
   * @param productStyleId Key property. See {@link ReleasedProductVariantExternalCodesV2.productStyleId}.
   * @param productVersionId Key property. See {@link ReleasedProductVariantExternalCodesV2.productVersionId}.
   * @param productColorId Key property. See {@link ReleasedProductVariantExternalCodesV2.productColorId}.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedProductVariantExternalCodesV2`.
   */
  delete(
    dataAreaId: string,
    releasedProductVariantExternalCodeClassId: string,
    itemNumber: string,
    productConfigurationId: string,
    productSizeId: string,
    productStyleId: string,
    productVersionId: string,
    productColorId: string
  ): DeleteRequestBuilder<ReleasedProductVariantExternalCodesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReleasedProductVariantExternalCodesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedProductVariantExternalCodesV2` by taking the entity as a parameter.
   */
  delete(
    entity: ReleasedProductVariantExternalCodesV2<T>
  ): DeleteRequestBuilder<ReleasedProductVariantExternalCodesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    releasedProductVariantExternalCodeClassId?: string,
    itemNumber?: string,
    productConfigurationId?: string,
    productSizeId?: string,
    productStyleId?: string,
    productVersionId?: string,
    productColorId?: string
  ): DeleteRequestBuilder<ReleasedProductVariantExternalCodesV2<T>, T> {
    return new DeleteRequestBuilder<
      ReleasedProductVariantExternalCodesV2<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReleasedProductVariantExternalCodesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReleasedProductVariantExternalCodeClassId:
              releasedProductVariantExternalCodeClassId!,
            ItemNumber: itemNumber!,
            ProductConfigurationId: productConfigurationId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!,
            ProductVersionId: productVersionId!,
            ProductColorId: productColorId!
          }
    );
  }
}
