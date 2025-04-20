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
import { ProductMasterVersions } from './ProductMasterVersions';

/**
 * Request builder class for operations supported on the {@link ProductMasterVersions} entity.
 */
export class ProductMasterVersionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductMasterVersions<T>, T> {
  /**
   * Returns a request builder for querying all `ProductMasterVersions` entities.
   * @returns A request builder for creating requests to retrieve all `ProductMasterVersions` entities.
   */
  getAll(): GetAllRequestBuilder<ProductMasterVersions<T>, T> {
    return new GetAllRequestBuilder<ProductMasterVersions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductMasterVersions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductMasterVersions`.
   */
  create(
    entity: ProductMasterVersions<T>
  ): CreateRequestBuilder<ProductMasterVersions<T>, T> {
    return new CreateRequestBuilder<ProductMasterVersions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductMasterVersions` entity based on its keys.
   * @param productMasterNumber Key property. See {@link ProductMasterVersions.productMasterNumber}.
   * @param productVersionId Key property. See {@link ProductMasterVersions.productVersionId}.
   * @returns A request builder for creating requests to retrieve one `ProductMasterVersions` entity based on its keys.
   */
  getByKey(
    productMasterNumber: DeserializedType<T, 'Edm.String'>,
    productVersionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductMasterVersions<T>, T> {
    return new GetByKeyRequestBuilder<ProductMasterVersions<T>, T>(
      this.entityApi,
      {
        ProductMasterNumber: productMasterNumber,
        ProductVersionId: productVersionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductMasterVersions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductMasterVersions`.
   */
  update(
    entity: ProductMasterVersions<T>
  ): UpdateRequestBuilder<ProductMasterVersions<T>, T> {
    return new UpdateRequestBuilder<ProductMasterVersions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductMasterVersions`.
   * @param productMasterNumber Key property. See {@link ProductMasterVersions.productMasterNumber}.
   * @param productVersionId Key property. See {@link ProductMasterVersions.productVersionId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductMasterVersions`.
   */
  delete(
    productMasterNumber: string,
    productVersionId: string
  ): DeleteRequestBuilder<ProductMasterVersions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductMasterVersions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductMasterVersions` by taking the entity as a parameter.
   */
  delete(
    entity: ProductMasterVersions<T>
  ): DeleteRequestBuilder<ProductMasterVersions<T>, T>;
  delete(
    productMasterNumberOrEntity: any,
    productVersionId?: string
  ): DeleteRequestBuilder<ProductMasterVersions<T>, T> {
    return new DeleteRequestBuilder<ProductMasterVersions<T>, T>(
      this.entityApi,
      productMasterNumberOrEntity instanceof ProductMasterVersions
        ? productMasterNumberOrEntity
        : {
            ProductMasterNumber: productMasterNumberOrEntity!,
            ProductVersionId: productVersionId!
          }
    );
  }
}
