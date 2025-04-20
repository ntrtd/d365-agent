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
import { LeaseBooks } from './LeaseBooks';

/**
 * Request builder class for operations supported on the {@link LeaseBooks} entity.
 */
export class LeaseBooksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaseBooks<T>, T> {
  /**
   * Returns a request builder for querying all `LeaseBooks` entities.
   * @returns A request builder for creating requests to retrieve all `LeaseBooks` entities.
   */
  getAll(): GetAllRequestBuilder<LeaseBooks<T>, T> {
    return new GetAllRequestBuilder<LeaseBooks<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LeaseBooks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaseBooks`.
   */
  create(entity: LeaseBooks<T>): CreateRequestBuilder<LeaseBooks<T>, T> {
    return new CreateRequestBuilder<LeaseBooks<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `LeaseBooks` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaseBooks.dataAreaId}.
   * @param leaseId Key property. See {@link LeaseBooks.leaseId}.
   * @returns A request builder for creating requests to retrieve one `LeaseBooks` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    leaseId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LeaseBooks<T>, T> {
    return new GetByKeyRequestBuilder<LeaseBooks<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      LeaseId: leaseId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LeaseBooks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaseBooks`.
   */
  update(entity: LeaseBooks<T>): UpdateRequestBuilder<LeaseBooks<T>, T> {
    return new UpdateRequestBuilder<LeaseBooks<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaseBooks`.
   * @param dataAreaId Key property. See {@link LeaseBooks.dataAreaId}.
   * @param leaseId Key property. See {@link LeaseBooks.leaseId}.
   * @returns A request builder for creating requests that delete an entity of type `LeaseBooks`.
   */
  delete(
    dataAreaId: string,
    leaseId: string
  ): DeleteRequestBuilder<LeaseBooks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaseBooks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaseBooks` by taking the entity as a parameter.
   */
  delete(entity: LeaseBooks<T>): DeleteRequestBuilder<LeaseBooks<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    leaseId?: string
  ): DeleteRequestBuilder<LeaseBooks<T>, T> {
    return new DeleteRequestBuilder<LeaseBooks<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaseBooks
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LeaseId: leaseId!
          }
    );
  }
}
