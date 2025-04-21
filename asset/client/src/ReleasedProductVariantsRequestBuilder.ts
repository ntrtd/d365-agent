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
import { ReleasedProductVariants } from './ReleasedProductVariants';

/**
 * Request builder class for operations supported on the {@link ReleasedProductVariants} entity.
 */
export class ReleasedProductVariantsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReleasedProductVariants<T>, T> {
  /**
   * Returns a request builder for querying all `ReleasedProductVariants` entities.
   * @returns A request builder for creating requests to retrieve all `ReleasedProductVariants` entities.
   */
  getAll(): GetAllRequestBuilder<ReleasedProductVariants<T>, T> {
    return new GetAllRequestBuilder<ReleasedProductVariants<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ReleasedProductVariants` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReleasedProductVariants`.
   */
  create(
    entity: ReleasedProductVariants<T>
  ): CreateRequestBuilder<ReleasedProductVariants<T>, T> {
    return new CreateRequestBuilder<ReleasedProductVariants<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReleasedProductVariants` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReleasedProductVariants.dataAreaId}.
   * @param productMasterNumber Key property. See {@link ReleasedProductVariants.productMasterNumber}.
   * @param productConfigurationId Key property. See {@link ReleasedProductVariants.productConfigurationId}.
   * @param productSizeId Key property. See {@link ReleasedProductVariants.productSizeId}.
   * @param productColorId Key property. See {@link ReleasedProductVariants.productColorId}.
   * @param productStyleId Key property. See {@link ReleasedProductVariants.productStyleId}.
   * @returns A request builder for creating requests to retrieve one `ReleasedProductVariants` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    productMasterNumber: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ReleasedProductVariants<T>, T> {
    return new GetByKeyRequestBuilder<ReleasedProductVariants<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProductMasterNumber: productMasterNumber,
        ProductConfigurationId: productConfigurationId,
        ProductSizeId: productSizeId,
        ProductColorId: productColorId,
        ProductStyleId: productStyleId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReleasedProductVariants`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReleasedProductVariants`.
   */
  update(
    entity: ReleasedProductVariants<T>
  ): UpdateRequestBuilder<ReleasedProductVariants<T>, T> {
    return new UpdateRequestBuilder<ReleasedProductVariants<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReleasedProductVariants`.
   * @param dataAreaId Key property. See {@link ReleasedProductVariants.dataAreaId}.
   * @param productMasterNumber Key property. See {@link ReleasedProductVariants.productMasterNumber}.
   * @param productConfigurationId Key property. See {@link ReleasedProductVariants.productConfigurationId}.
   * @param productSizeId Key property. See {@link ReleasedProductVariants.productSizeId}.
   * @param productColorId Key property. See {@link ReleasedProductVariants.productColorId}.
   * @param productStyleId Key property. See {@link ReleasedProductVariants.productStyleId}.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedProductVariants`.
   */
  delete(
    dataAreaId: string,
    productMasterNumber: string,
    productConfigurationId: string,
    productSizeId: string,
    productColorId: string,
    productStyleId: string
  ): DeleteRequestBuilder<ReleasedProductVariants<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReleasedProductVariants`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedProductVariants` by taking the entity as a parameter.
   */
  delete(
    entity: ReleasedProductVariants<T>
  ): DeleteRequestBuilder<ReleasedProductVariants<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    productMasterNumber?: string,
    productConfigurationId?: string,
    productSizeId?: string,
    productColorId?: string,
    productStyleId?: string
  ): DeleteRequestBuilder<ReleasedProductVariants<T>, T> {
    return new DeleteRequestBuilder<ReleasedProductVariants<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReleasedProductVariants
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProductMasterNumber: productMasterNumber!,
            ProductConfigurationId: productConfigurationId!,
            ProductSizeId: productSizeId!,
            ProductColorId: productColorId!,
            ProductStyleId: productStyleId!
          }
    );
  }
}
