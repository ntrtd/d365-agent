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
import { ReleasedProductVariantExternalCodes } from './ReleasedProductVariantExternalCodes';

/**
 * Request builder class for operations supported on the {@link ReleasedProductVariantExternalCodes} entity.
 */
export class ReleasedProductVariantExternalCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReleasedProductVariantExternalCodes<T>, T> {
  /**
   * Returns a request builder for querying all `ReleasedProductVariantExternalCodes` entities.
   * @returns A request builder for creating requests to retrieve all `ReleasedProductVariantExternalCodes` entities.
   */
  getAll(): GetAllRequestBuilder<ReleasedProductVariantExternalCodes<T>, T> {
    return new GetAllRequestBuilder<ReleasedProductVariantExternalCodes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ReleasedProductVariantExternalCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReleasedProductVariantExternalCodes`.
   */
  create(
    entity: ReleasedProductVariantExternalCodes<T>
  ): CreateRequestBuilder<ReleasedProductVariantExternalCodes<T>, T> {
    return new CreateRequestBuilder<ReleasedProductVariantExternalCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReleasedProductVariantExternalCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReleasedProductVariantExternalCodes.dataAreaId}.
   * @param releasedProductVariantExternalCodeClassId Key property. See {@link ReleasedProductVariantExternalCodes.releasedProductVariantExternalCodeClassId}.
   * @param itemNumber Key property. See {@link ReleasedProductVariantExternalCodes.itemNumber}.
   * @param productConfigurationId Key property. See {@link ReleasedProductVariantExternalCodes.productConfigurationId}.
   * @param productSizeId Key property. See {@link ReleasedProductVariantExternalCodes.productSizeId}.
   * @param productStyleId Key property. See {@link ReleasedProductVariantExternalCodes.productStyleId}.
   * @param productColorId Key property. See {@link ReleasedProductVariantExternalCodes.productColorId}.
   * @returns A request builder for creating requests to retrieve one `ReleasedProductVariantExternalCodes` entity based on its keys.
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
    productColorId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ReleasedProductVariantExternalCodes<T>, T> {
    return new GetByKeyRequestBuilder<
      ReleasedProductVariantExternalCodes<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ReleasedProductVariantExternalCodeClassId:
        releasedProductVariantExternalCodeClassId,
      ItemNumber: itemNumber,
      ProductConfigurationId: productConfigurationId,
      ProductSizeId: productSizeId,
      ProductStyleId: productStyleId,
      ProductColorId: productColorId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ReleasedProductVariantExternalCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReleasedProductVariantExternalCodes`.
   */
  update(
    entity: ReleasedProductVariantExternalCodes<T>
  ): UpdateRequestBuilder<ReleasedProductVariantExternalCodes<T>, T> {
    return new UpdateRequestBuilder<ReleasedProductVariantExternalCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReleasedProductVariantExternalCodes`.
   * @param dataAreaId Key property. See {@link ReleasedProductVariantExternalCodes.dataAreaId}.
   * @param releasedProductVariantExternalCodeClassId Key property. See {@link ReleasedProductVariantExternalCodes.releasedProductVariantExternalCodeClassId}.
   * @param itemNumber Key property. See {@link ReleasedProductVariantExternalCodes.itemNumber}.
   * @param productConfigurationId Key property. See {@link ReleasedProductVariantExternalCodes.productConfigurationId}.
   * @param productSizeId Key property. See {@link ReleasedProductVariantExternalCodes.productSizeId}.
   * @param productStyleId Key property. See {@link ReleasedProductVariantExternalCodes.productStyleId}.
   * @param productColorId Key property. See {@link ReleasedProductVariantExternalCodes.productColorId}.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedProductVariantExternalCodes`.
   */
  delete(
    dataAreaId: string,
    releasedProductVariantExternalCodeClassId: string,
    itemNumber: string,
    productConfigurationId: string,
    productSizeId: string,
    productStyleId: string,
    productColorId: string
  ): DeleteRequestBuilder<ReleasedProductVariantExternalCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReleasedProductVariantExternalCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedProductVariantExternalCodes` by taking the entity as a parameter.
   */
  delete(
    entity: ReleasedProductVariantExternalCodes<T>
  ): DeleteRequestBuilder<ReleasedProductVariantExternalCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    releasedProductVariantExternalCodeClassId?: string,
    itemNumber?: string,
    productConfigurationId?: string,
    productSizeId?: string,
    productStyleId?: string,
    productColorId?: string
  ): DeleteRequestBuilder<ReleasedProductVariantExternalCodes<T>, T> {
    return new DeleteRequestBuilder<ReleasedProductVariantExternalCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReleasedProductVariantExternalCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReleasedProductVariantExternalCodeClassId:
              releasedProductVariantExternalCodeClassId!,
            ItemNumber: itemNumber!,
            ProductConfigurationId: productConfigurationId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!,
            ProductColorId: productColorId!
          }
    );
  }
}
