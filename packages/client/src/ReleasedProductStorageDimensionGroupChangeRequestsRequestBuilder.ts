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
import { ReleasedProductStorageDimensionGroupChangeRequests } from './ReleasedProductStorageDimensionGroupChangeRequests';

/**
 * Request builder class for operations supported on the {@link ReleasedProductStorageDimensionGroupChangeRequests} entity.
 */
export class ReleasedProductStorageDimensionGroupChangeRequestsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  ReleasedProductStorageDimensionGroupChangeRequests<T>,
  T
> {
  /**
   * Returns a request builder for querying all `ReleasedProductStorageDimensionGroupChangeRequests` entities.
   * @returns A request builder for creating requests to retrieve all `ReleasedProductStorageDimensionGroupChangeRequests` entities.
   */
  getAll(): GetAllRequestBuilder<
    ReleasedProductStorageDimensionGroupChangeRequests<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ReleasedProductStorageDimensionGroupChangeRequests<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ReleasedProductStorageDimensionGroupChangeRequests` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReleasedProductStorageDimensionGroupChangeRequests`.
   */
  create(
    entity: ReleasedProductStorageDimensionGroupChangeRequests<T>
  ): CreateRequestBuilder<
    ReleasedProductStorageDimensionGroupChangeRequests<T>,
    T
  > {
    return new CreateRequestBuilder<
      ReleasedProductStorageDimensionGroupChangeRequests<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ReleasedProductStorageDimensionGroupChangeRequests` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReleasedProductStorageDimensionGroupChangeRequests.dataAreaId}.
   * @param itemNumber Key property. See {@link ReleasedProductStorageDimensionGroupChangeRequests.itemNumber}.
   * @returns A request builder for creating requests to retrieve one `ReleasedProductStorageDimensionGroupChangeRequests` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    ReleasedProductStorageDimensionGroupChangeRequests<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      ReleasedProductStorageDimensionGroupChangeRequests<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ItemNumber: itemNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ReleasedProductStorageDimensionGroupChangeRequests`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReleasedProductStorageDimensionGroupChangeRequests`.
   */
  update(
    entity: ReleasedProductStorageDimensionGroupChangeRequests<T>
  ): UpdateRequestBuilder<
    ReleasedProductStorageDimensionGroupChangeRequests<T>,
    T
  > {
    return new UpdateRequestBuilder<
      ReleasedProductStorageDimensionGroupChangeRequests<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ReleasedProductStorageDimensionGroupChangeRequests`.
   * @param dataAreaId Key property. See {@link ReleasedProductStorageDimensionGroupChangeRequests.dataAreaId}.
   * @param itemNumber Key property. See {@link ReleasedProductStorageDimensionGroupChangeRequests.itemNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedProductStorageDimensionGroupChangeRequests`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string
  ): DeleteRequestBuilder<
    ReleasedProductStorageDimensionGroupChangeRequests<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `ReleasedProductStorageDimensionGroupChangeRequests`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedProductStorageDimensionGroupChangeRequests` by taking the entity as a parameter.
   */
  delete(
    entity: ReleasedProductStorageDimensionGroupChangeRequests<T>
  ): DeleteRequestBuilder<
    ReleasedProductStorageDimensionGroupChangeRequests<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string
  ): DeleteRequestBuilder<
    ReleasedProductStorageDimensionGroupChangeRequests<T>,
    T
  > {
    return new DeleteRequestBuilder<
      ReleasedProductStorageDimensionGroupChangeRequests<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      ReleasedProductStorageDimensionGroupChangeRequests
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!
          }
    );
  }
}
