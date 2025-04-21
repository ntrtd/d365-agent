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
import { ClmIntegrationReleasedProducts } from './ClmIntegrationReleasedProducts';

/**
 * Request builder class for operations supported on the {@link ClmIntegrationReleasedProducts} entity.
 */
export class ClmIntegrationReleasedProductsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ClmIntegrationReleasedProducts<T>, T> {
  /**
   * Returns a request builder for querying all `ClmIntegrationReleasedProducts` entities.
   * @returns A request builder for creating requests to retrieve all `ClmIntegrationReleasedProducts` entities.
   */
  getAll(): GetAllRequestBuilder<ClmIntegrationReleasedProducts<T>, T> {
    return new GetAllRequestBuilder<ClmIntegrationReleasedProducts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ClmIntegrationReleasedProducts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ClmIntegrationReleasedProducts`.
   */
  create(
    entity: ClmIntegrationReleasedProducts<T>
  ): CreateRequestBuilder<ClmIntegrationReleasedProducts<T>, T> {
    return new CreateRequestBuilder<ClmIntegrationReleasedProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ClmIntegrationReleasedProducts` entity based on its keys.
   * @param dataAreaId Key property. See {@link ClmIntegrationReleasedProducts.dataAreaId}.
   * @param itemNumber Key property. See {@link ClmIntegrationReleasedProducts.itemNumber}.
   * @returns A request builder for creating requests to retrieve one `ClmIntegrationReleasedProducts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ClmIntegrationReleasedProducts<T>, T> {
    return new GetByKeyRequestBuilder<ClmIntegrationReleasedProducts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ClmIntegrationReleasedProducts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ClmIntegrationReleasedProducts`.
   */
  update(
    entity: ClmIntegrationReleasedProducts<T>
  ): UpdateRequestBuilder<ClmIntegrationReleasedProducts<T>, T> {
    return new UpdateRequestBuilder<ClmIntegrationReleasedProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ClmIntegrationReleasedProducts`.
   * @param dataAreaId Key property. See {@link ClmIntegrationReleasedProducts.dataAreaId}.
   * @param itemNumber Key property. See {@link ClmIntegrationReleasedProducts.itemNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ClmIntegrationReleasedProducts`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string
  ): DeleteRequestBuilder<ClmIntegrationReleasedProducts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ClmIntegrationReleasedProducts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ClmIntegrationReleasedProducts` by taking the entity as a parameter.
   */
  delete(
    entity: ClmIntegrationReleasedProducts<T>
  ): DeleteRequestBuilder<ClmIntegrationReleasedProducts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string
  ): DeleteRequestBuilder<ClmIntegrationReleasedProducts<T>, T> {
    return new DeleteRequestBuilder<ClmIntegrationReleasedProducts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ClmIntegrationReleasedProducts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!
          }
    );
  }
}
