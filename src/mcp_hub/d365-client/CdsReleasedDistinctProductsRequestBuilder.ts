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
import { CdsReleasedDistinctProducts } from './CdsReleasedDistinctProducts';

/**
 * Request builder class for operations supported on the {@link CdsReleasedDistinctProducts} entity.
 */
export class CdsReleasedDistinctProductsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsReleasedDistinctProducts<T>, T> {
  /**
   * Returns a request builder for querying all `CdsReleasedDistinctProducts` entities.
   * @returns A request builder for creating requests to retrieve all `CdsReleasedDistinctProducts` entities.
   */
  getAll(): GetAllRequestBuilder<CdsReleasedDistinctProducts<T>, T> {
    return new GetAllRequestBuilder<CdsReleasedDistinctProducts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CdsReleasedDistinctProducts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsReleasedDistinctProducts`.
   */
  create(
    entity: CdsReleasedDistinctProducts<T>
  ): CreateRequestBuilder<CdsReleasedDistinctProducts<T>, T> {
    return new CreateRequestBuilder<CdsReleasedDistinctProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsReleasedDistinctProducts` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsReleasedDistinctProducts.dataAreaId}.
   * @param productNumber Key property. See {@link CdsReleasedDistinctProducts.productNumber}.
   * @returns A request builder for creating requests to retrieve one `CdsReleasedDistinctProducts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    productNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CdsReleasedDistinctProducts<T>, T> {
    return new GetByKeyRequestBuilder<CdsReleasedDistinctProducts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProductNumber: productNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsReleasedDistinctProducts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsReleasedDistinctProducts`.
   */
  update(
    entity: CdsReleasedDistinctProducts<T>
  ): UpdateRequestBuilder<CdsReleasedDistinctProducts<T>, T> {
    return new UpdateRequestBuilder<CdsReleasedDistinctProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsReleasedDistinctProducts`.
   * @param dataAreaId Key property. See {@link CdsReleasedDistinctProducts.dataAreaId}.
   * @param productNumber Key property. See {@link CdsReleasedDistinctProducts.productNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CdsReleasedDistinctProducts`.
   */
  delete(
    dataAreaId: string,
    productNumber: string
  ): DeleteRequestBuilder<CdsReleasedDistinctProducts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsReleasedDistinctProducts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsReleasedDistinctProducts` by taking the entity as a parameter.
   */
  delete(
    entity: CdsReleasedDistinctProducts<T>
  ): DeleteRequestBuilder<CdsReleasedDistinctProducts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    productNumber?: string
  ): DeleteRequestBuilder<CdsReleasedDistinctProducts<T>, T> {
    return new DeleteRequestBuilder<CdsReleasedDistinctProducts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsReleasedDistinctProducts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProductNumber: productNumber!
          }
    );
  }
}
