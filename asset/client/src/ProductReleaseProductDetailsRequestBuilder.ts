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
import { ProductReleaseProductDetails } from './ProductReleaseProductDetails';

/**
 * Request builder class for operations supported on the {@link ProductReleaseProductDetails} entity.
 */
export class ProductReleaseProductDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductReleaseProductDetails<T>, T> {
  /**
   * Returns a request builder for querying all `ProductReleaseProductDetails` entities.
   * @returns A request builder for creating requests to retrieve all `ProductReleaseProductDetails` entities.
   */
  getAll(): GetAllRequestBuilder<ProductReleaseProductDetails<T>, T> {
    return new GetAllRequestBuilder<ProductReleaseProductDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductReleaseProductDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductReleaseProductDetails`.
   */
  create(
    entity: ProductReleaseProductDetails<T>
  ): CreateRequestBuilder<ProductReleaseProductDetails<T>, T> {
    return new CreateRequestBuilder<ProductReleaseProductDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductReleaseProductDetails` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductReleaseProductDetails.dataAreaId}.
   * @param productNumber Key property. See {@link ProductReleaseProductDetails.productNumber}.
   * @param productVersionId Key property. See {@link ProductReleaseProductDetails.productVersionId}.
   * @returns A request builder for creating requests to retrieve one `ProductReleaseProductDetails` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    productNumber: DeserializedType<T, 'Edm.String'>,
    productVersionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductReleaseProductDetails<T>, T> {
    return new GetByKeyRequestBuilder<ProductReleaseProductDetails<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProductNumber: productNumber,
        ProductVersionId: productVersionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductReleaseProductDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductReleaseProductDetails`.
   */
  update(
    entity: ProductReleaseProductDetails<T>
  ): UpdateRequestBuilder<ProductReleaseProductDetails<T>, T> {
    return new UpdateRequestBuilder<ProductReleaseProductDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductReleaseProductDetails`.
   * @param dataAreaId Key property. See {@link ProductReleaseProductDetails.dataAreaId}.
   * @param productNumber Key property. See {@link ProductReleaseProductDetails.productNumber}.
   * @param productVersionId Key property. See {@link ProductReleaseProductDetails.productVersionId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductReleaseProductDetails`.
   */
  delete(
    dataAreaId: string,
    productNumber: string,
    productVersionId: string
  ): DeleteRequestBuilder<ProductReleaseProductDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductReleaseProductDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductReleaseProductDetails` by taking the entity as a parameter.
   */
  delete(
    entity: ProductReleaseProductDetails<T>
  ): DeleteRequestBuilder<ProductReleaseProductDetails<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    productNumber?: string,
    productVersionId?: string
  ): DeleteRequestBuilder<ProductReleaseProductDetails<T>, T> {
    return new DeleteRequestBuilder<ProductReleaseProductDetails<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProductReleaseProductDetails
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProductNumber: productNumber!,
            ProductVersionId: productVersionId!
          }
    );
  }
}
