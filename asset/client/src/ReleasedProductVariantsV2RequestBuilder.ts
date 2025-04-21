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
import { ReleasedProductVariantsV2 } from './ReleasedProductVariantsV2';

/**
 * Request builder class for operations supported on the {@link ReleasedProductVariantsV2} entity.
 */
export class ReleasedProductVariantsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReleasedProductVariantsV2<T>, T> {
  /**
   * Returns a request builder for querying all `ReleasedProductVariantsV2` entities.
   * @returns A request builder for creating requests to retrieve all `ReleasedProductVariantsV2` entities.
   */
  getAll(): GetAllRequestBuilder<ReleasedProductVariantsV2<T>, T> {
    return new GetAllRequestBuilder<ReleasedProductVariantsV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ReleasedProductVariantsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReleasedProductVariantsV2`.
   */
  create(
    entity: ReleasedProductVariantsV2<T>
  ): CreateRequestBuilder<ReleasedProductVariantsV2<T>, T> {
    return new CreateRequestBuilder<ReleasedProductVariantsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReleasedProductVariantsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReleasedProductVariantsV2.dataAreaId}.
   * @param productMasterNumber Key property. See {@link ReleasedProductVariantsV2.productMasterNumber}.
   * @param productConfigurationId Key property. See {@link ReleasedProductVariantsV2.productConfigurationId}.
   * @param productSizeId Key property. See {@link ReleasedProductVariantsV2.productSizeId}.
   * @param productColorId Key property. See {@link ReleasedProductVariantsV2.productColorId}.
   * @param productStyleId Key property. See {@link ReleasedProductVariantsV2.productStyleId}.
   * @param productVersionId Key property. See {@link ReleasedProductVariantsV2.productVersionId}.
   * @returns A request builder for creating requests to retrieve one `ReleasedProductVariantsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    productMasterNumber: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productVersionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ReleasedProductVariantsV2<T>, T> {
    return new GetByKeyRequestBuilder<ReleasedProductVariantsV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProductMasterNumber: productMasterNumber,
        ProductConfigurationId: productConfigurationId,
        ProductSizeId: productSizeId,
        ProductColorId: productColorId,
        ProductStyleId: productStyleId,
        ProductVersionId: productVersionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReleasedProductVariantsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReleasedProductVariantsV2`.
   */
  update(
    entity: ReleasedProductVariantsV2<T>
  ): UpdateRequestBuilder<ReleasedProductVariantsV2<T>, T> {
    return new UpdateRequestBuilder<ReleasedProductVariantsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReleasedProductVariantsV2`.
   * @param dataAreaId Key property. See {@link ReleasedProductVariantsV2.dataAreaId}.
   * @param productMasterNumber Key property. See {@link ReleasedProductVariantsV2.productMasterNumber}.
   * @param productConfigurationId Key property. See {@link ReleasedProductVariantsV2.productConfigurationId}.
   * @param productSizeId Key property. See {@link ReleasedProductVariantsV2.productSizeId}.
   * @param productColorId Key property. See {@link ReleasedProductVariantsV2.productColorId}.
   * @param productStyleId Key property. See {@link ReleasedProductVariantsV2.productStyleId}.
   * @param productVersionId Key property. See {@link ReleasedProductVariantsV2.productVersionId}.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedProductVariantsV2`.
   */
  delete(
    dataAreaId: string,
    productMasterNumber: string,
    productConfigurationId: string,
    productSizeId: string,
    productColorId: string,
    productStyleId: string,
    productVersionId: string
  ): DeleteRequestBuilder<ReleasedProductVariantsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReleasedProductVariantsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedProductVariantsV2` by taking the entity as a parameter.
   */
  delete(
    entity: ReleasedProductVariantsV2<T>
  ): DeleteRequestBuilder<ReleasedProductVariantsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    productMasterNumber?: string,
    productConfigurationId?: string,
    productSizeId?: string,
    productColorId?: string,
    productStyleId?: string,
    productVersionId?: string
  ): DeleteRequestBuilder<ReleasedProductVariantsV2<T>, T> {
    return new DeleteRequestBuilder<ReleasedProductVariantsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReleasedProductVariantsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProductMasterNumber: productMasterNumber!,
            ProductConfigurationId: productConfigurationId!,
            ProductSizeId: productSizeId!,
            ProductColorId: productColorId!,
            ProductStyleId: productStyleId!,
            ProductVersionId: productVersionId!
          }
    );
  }
}
