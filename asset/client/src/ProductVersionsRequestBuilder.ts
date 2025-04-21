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
import { ProductVersions } from './ProductVersions';

/**
 * Request builder class for operations supported on the {@link ProductVersions} entity.
 */
export class ProductVersionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductVersions<T>, T> {
  /**
   * Returns a request builder for querying all `ProductVersions` entities.
   * @returns A request builder for creating requests to retrieve all `ProductVersions` entities.
   */
  getAll(): GetAllRequestBuilder<ProductVersions<T>, T> {
    return new GetAllRequestBuilder<ProductVersions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductVersions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductVersions`.
   */
  create(
    entity: ProductVersions<T>
  ): CreateRequestBuilder<ProductVersions<T>, T> {
    return new CreateRequestBuilder<ProductVersions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductVersions` entity based on its keys.
   * @param versionId Key property. See {@link ProductVersions.versionId}.
   * @returns A request builder for creating requests to retrieve one `ProductVersions` entity based on its keys.
   */
  getByKey(
    versionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductVersions<T>, T> {
    return new GetByKeyRequestBuilder<ProductVersions<T>, T>(this.entityApi, {
      VersionId: versionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductVersions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductVersions`.
   */
  update(
    entity: ProductVersions<T>
  ): UpdateRequestBuilder<ProductVersions<T>, T> {
    return new UpdateRequestBuilder<ProductVersions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductVersions`.
   * @param versionId Key property. See {@link ProductVersions.versionId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductVersions`.
   */
  delete(versionId: string): DeleteRequestBuilder<ProductVersions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductVersions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductVersions` by taking the entity as a parameter.
   */
  delete(
    entity: ProductVersions<T>
  ): DeleteRequestBuilder<ProductVersions<T>, T>;
  delete(versionIdOrEntity: any): DeleteRequestBuilder<ProductVersions<T>, T> {
    return new DeleteRequestBuilder<ProductVersions<T>, T>(
      this.entityApi,
      versionIdOrEntity instanceof ProductVersions
        ? versionIdOrEntity
        : { VersionId: versionIdOrEntity! }
    );
  }
}
