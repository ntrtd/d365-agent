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
import { ReleasedProductCreationsV2 } from './ReleasedProductCreationsV2';

/**
 * Request builder class for operations supported on the {@link ReleasedProductCreationsV2} entity.
 */
export class ReleasedProductCreationsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReleasedProductCreationsV2<T>, T> {
  /**
   * Returns a request builder for querying all `ReleasedProductCreationsV2` entities.
   * @returns A request builder for creating requests to retrieve all `ReleasedProductCreationsV2` entities.
   */
  getAll(): GetAllRequestBuilder<ReleasedProductCreationsV2<T>, T> {
    return new GetAllRequestBuilder<ReleasedProductCreationsV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ReleasedProductCreationsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReleasedProductCreationsV2`.
   */
  create(
    entity: ReleasedProductCreationsV2<T>
  ): CreateRequestBuilder<ReleasedProductCreationsV2<T>, T> {
    return new CreateRequestBuilder<ReleasedProductCreationsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReleasedProductCreationsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReleasedProductCreationsV2.dataAreaId}.
   * @param itemNumber Key property. See {@link ReleasedProductCreationsV2.itemNumber}.
   * @returns A request builder for creating requests to retrieve one `ReleasedProductCreationsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ReleasedProductCreationsV2<T>, T> {
    return new GetByKeyRequestBuilder<ReleasedProductCreationsV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReleasedProductCreationsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReleasedProductCreationsV2`.
   */
  update(
    entity: ReleasedProductCreationsV2<T>
  ): UpdateRequestBuilder<ReleasedProductCreationsV2<T>, T> {
    return new UpdateRequestBuilder<ReleasedProductCreationsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReleasedProductCreationsV2`.
   * @param dataAreaId Key property. See {@link ReleasedProductCreationsV2.dataAreaId}.
   * @param itemNumber Key property. See {@link ReleasedProductCreationsV2.itemNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedProductCreationsV2`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string
  ): DeleteRequestBuilder<ReleasedProductCreationsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReleasedProductCreationsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedProductCreationsV2` by taking the entity as a parameter.
   */
  delete(
    entity: ReleasedProductCreationsV2<T>
  ): DeleteRequestBuilder<ReleasedProductCreationsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string
  ): DeleteRequestBuilder<ReleasedProductCreationsV2<T>, T> {
    return new DeleteRequestBuilder<ReleasedProductCreationsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReleasedProductCreationsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!
          }
    );
  }
}
