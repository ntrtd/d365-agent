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
import { ReleasedProductMastersV2 } from './ReleasedProductMastersV2';

/**
 * Request builder class for operations supported on the {@link ReleasedProductMastersV2} entity.
 */
export class ReleasedProductMastersV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReleasedProductMastersV2<T>, T> {
  /**
   * Returns a request builder for querying all `ReleasedProductMastersV2` entities.
   * @returns A request builder for creating requests to retrieve all `ReleasedProductMastersV2` entities.
   */
  getAll(): GetAllRequestBuilder<ReleasedProductMastersV2<T>, T> {
    return new GetAllRequestBuilder<ReleasedProductMastersV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ReleasedProductMastersV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReleasedProductMastersV2`.
   */
  create(
    entity: ReleasedProductMastersV2<T>
  ): CreateRequestBuilder<ReleasedProductMastersV2<T>, T> {
    return new CreateRequestBuilder<ReleasedProductMastersV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReleasedProductMastersV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReleasedProductMastersV2.dataAreaId}.
   * @param itemNumber Key property. See {@link ReleasedProductMastersV2.itemNumber}.
   * @returns A request builder for creating requests to retrieve one `ReleasedProductMastersV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ReleasedProductMastersV2<T>, T> {
    return new GetByKeyRequestBuilder<ReleasedProductMastersV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReleasedProductMastersV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReleasedProductMastersV2`.
   */
  update(
    entity: ReleasedProductMastersV2<T>
  ): UpdateRequestBuilder<ReleasedProductMastersV2<T>, T> {
    return new UpdateRequestBuilder<ReleasedProductMastersV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReleasedProductMastersV2`.
   * @param dataAreaId Key property. See {@link ReleasedProductMastersV2.dataAreaId}.
   * @param itemNumber Key property. See {@link ReleasedProductMastersV2.itemNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedProductMastersV2`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string
  ): DeleteRequestBuilder<ReleasedProductMastersV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReleasedProductMastersV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedProductMastersV2` by taking the entity as a parameter.
   */
  delete(
    entity: ReleasedProductMastersV2<T>
  ): DeleteRequestBuilder<ReleasedProductMastersV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string
  ): DeleteRequestBuilder<ReleasedProductMastersV2<T>, T> {
    return new DeleteRequestBuilder<ReleasedProductMastersV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReleasedProductMastersV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!
          }
    );
  }
}
