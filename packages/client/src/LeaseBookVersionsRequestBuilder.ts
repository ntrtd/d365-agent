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
import { LeaseBookVersions } from './LeaseBookVersions';

/**
 * Request builder class for operations supported on the {@link LeaseBookVersions} entity.
 */
export class LeaseBookVersionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaseBookVersions<T>, T> {
  /**
   * Returns a request builder for querying all `LeaseBookVersions` entities.
   * @returns A request builder for creating requests to retrieve all `LeaseBookVersions` entities.
   */
  getAll(): GetAllRequestBuilder<LeaseBookVersions<T>, T> {
    return new GetAllRequestBuilder<LeaseBookVersions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LeaseBookVersions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaseBookVersions`.
   */
  create(
    entity: LeaseBookVersions<T>
  ): CreateRequestBuilder<LeaseBookVersions<T>, T> {
    return new CreateRequestBuilder<LeaseBookVersions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaseBookVersions` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaseBookVersions.dataAreaId}.
   * @param bookId Key property. See {@link LeaseBookVersions.bookId}.
   * @param leaseCounter Key property. See {@link LeaseBookVersions.leaseCounter}.
   * @returns A request builder for creating requests to retrieve one `LeaseBookVersions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    bookId: DeserializedType<T, 'Edm.String'>,
    leaseCounter: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<LeaseBookVersions<T>, T> {
    return new GetByKeyRequestBuilder<LeaseBookVersions<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      BookId: bookId,
      LeaseCounter: leaseCounter
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LeaseBookVersions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaseBookVersions`.
   */
  update(
    entity: LeaseBookVersions<T>
  ): UpdateRequestBuilder<LeaseBookVersions<T>, T> {
    return new UpdateRequestBuilder<LeaseBookVersions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaseBookVersions`.
   * @param dataAreaId Key property. See {@link LeaseBookVersions.dataAreaId}.
   * @param bookId Key property. See {@link LeaseBookVersions.bookId}.
   * @param leaseCounter Key property. See {@link LeaseBookVersions.leaseCounter}.
   * @returns A request builder for creating requests that delete an entity of type `LeaseBookVersions`.
   */
  delete(
    dataAreaId: string,
    bookId: string,
    leaseCounter: number
  ): DeleteRequestBuilder<LeaseBookVersions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaseBookVersions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaseBookVersions` by taking the entity as a parameter.
   */
  delete(
    entity: LeaseBookVersions<T>
  ): DeleteRequestBuilder<LeaseBookVersions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    bookId?: string,
    leaseCounter?: number
  ): DeleteRequestBuilder<LeaseBookVersions<T>, T> {
    return new DeleteRequestBuilder<LeaseBookVersions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaseBookVersions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BookId: bookId!,
            LeaseCounter: leaseCounter!
          }
    );
  }
}
