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
import { DvReleasedDistinctProducts } from './DvReleasedDistinctProducts';

/**
 * Request builder class for operations supported on the {@link DvReleasedDistinctProducts} entity.
 */
export class DvReleasedDistinctProductsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DvReleasedDistinctProducts<T>, T> {
  /**
   * Returns a request builder for querying all `DvReleasedDistinctProducts` entities.
   * @returns A request builder for creating requests to retrieve all `DvReleasedDistinctProducts` entities.
   */
  getAll(): GetAllRequestBuilder<DvReleasedDistinctProducts<T>, T> {
    return new GetAllRequestBuilder<DvReleasedDistinctProducts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DvReleasedDistinctProducts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DvReleasedDistinctProducts`.
   */
  create(
    entity: DvReleasedDistinctProducts<T>
  ): CreateRequestBuilder<DvReleasedDistinctProducts<T>, T> {
    return new CreateRequestBuilder<DvReleasedDistinctProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DvReleasedDistinctProducts` entity based on its keys.
   * @param dataAreaId Key property. See {@link DvReleasedDistinctProducts.dataAreaId}.
   * @param productNumber Key property. See {@link DvReleasedDistinctProducts.productNumber}.
   * @returns A request builder for creating requests to retrieve one `DvReleasedDistinctProducts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    productNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DvReleasedDistinctProducts<T>, T> {
    return new GetByKeyRequestBuilder<DvReleasedDistinctProducts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProductNumber: productNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DvReleasedDistinctProducts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DvReleasedDistinctProducts`.
   */
  update(
    entity: DvReleasedDistinctProducts<T>
  ): UpdateRequestBuilder<DvReleasedDistinctProducts<T>, T> {
    return new UpdateRequestBuilder<DvReleasedDistinctProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DvReleasedDistinctProducts`.
   * @param dataAreaId Key property. See {@link DvReleasedDistinctProducts.dataAreaId}.
   * @param productNumber Key property. See {@link DvReleasedDistinctProducts.productNumber}.
   * @returns A request builder for creating requests that delete an entity of type `DvReleasedDistinctProducts`.
   */
  delete(
    dataAreaId: string,
    productNumber: string
  ): DeleteRequestBuilder<DvReleasedDistinctProducts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DvReleasedDistinctProducts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DvReleasedDistinctProducts` by taking the entity as a parameter.
   */
  delete(
    entity: DvReleasedDistinctProducts<T>
  ): DeleteRequestBuilder<DvReleasedDistinctProducts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    productNumber?: string
  ): DeleteRequestBuilder<DvReleasedDistinctProducts<T>, T> {
    return new DeleteRequestBuilder<DvReleasedDistinctProducts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DvReleasedDistinctProducts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProductNumber: productNumber!
          }
    );
  }
}
