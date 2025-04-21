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
import { DvReleasedProducts } from './DvReleasedProducts';

/**
 * Request builder class for operations supported on the {@link DvReleasedProducts} entity.
 */
export class DvReleasedProductsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DvReleasedProducts<T>, T> {
  /**
   * Returns a request builder for querying all `DvReleasedProducts` entities.
   * @returns A request builder for creating requests to retrieve all `DvReleasedProducts` entities.
   */
  getAll(): GetAllRequestBuilder<DvReleasedProducts<T>, T> {
    return new GetAllRequestBuilder<DvReleasedProducts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DvReleasedProducts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DvReleasedProducts`.
   */
  create(
    entity: DvReleasedProducts<T>
  ): CreateRequestBuilder<DvReleasedProducts<T>, T> {
    return new CreateRequestBuilder<DvReleasedProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DvReleasedProducts` entity based on its keys.
   * @param dataAreaId Key property. See {@link DvReleasedProducts.dataAreaId}.
   * @param itemNumber Key property. See {@link DvReleasedProducts.itemNumber}.
   * @returns A request builder for creating requests to retrieve one `DvReleasedProducts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DvReleasedProducts<T>, T> {
    return new GetByKeyRequestBuilder<DvReleasedProducts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DvReleasedProducts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DvReleasedProducts`.
   */
  update(
    entity: DvReleasedProducts<T>
  ): UpdateRequestBuilder<DvReleasedProducts<T>, T> {
    return new UpdateRequestBuilder<DvReleasedProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DvReleasedProducts`.
   * @param dataAreaId Key property. See {@link DvReleasedProducts.dataAreaId}.
   * @param itemNumber Key property. See {@link DvReleasedProducts.itemNumber}.
   * @returns A request builder for creating requests that delete an entity of type `DvReleasedProducts`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string
  ): DeleteRequestBuilder<DvReleasedProducts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DvReleasedProducts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DvReleasedProducts` by taking the entity as a parameter.
   */
  delete(
    entity: DvReleasedProducts<T>
  ): DeleteRequestBuilder<DvReleasedProducts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string
  ): DeleteRequestBuilder<DvReleasedProducts<T>, T> {
    return new DeleteRequestBuilder<DvReleasedProducts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DvReleasedProducts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!
          }
    );
  }
}
