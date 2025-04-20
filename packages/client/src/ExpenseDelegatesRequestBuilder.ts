/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { ExpenseDelegates } from './ExpenseDelegates';

/**
 * Request builder class for operations supported on the {@link ExpenseDelegates} entity.
 */
export class ExpenseDelegatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpenseDelegates<T>, T> {
  /**
   * Returns a request builder for querying all `ExpenseDelegates` entities.
   * @returns A request builder for creating requests to retrieve all `ExpenseDelegates` entities.
   */
  getAll(): GetAllRequestBuilder<ExpenseDelegates<T>, T> {
    return new GetAllRequestBuilder<ExpenseDelegates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExpenseDelegates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpenseDelegates`.
   */
  create(
    entity: ExpenseDelegates<T>
  ): CreateRequestBuilder<ExpenseDelegates<T>, T> {
    return new CreateRequestBuilder<ExpenseDelegates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpenseDelegates` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExpenseDelegates.dataAreaId}.
   * @param delegatedUser Key property. See {@link ExpenseDelegates.delegatedUser}.
   * @param delegatingPersonnelNumber Key property. See {@link ExpenseDelegates.delegatingPersonnelNumber}.
   * @param fromDateUtc Key property. See {@link ExpenseDelegates.fromDateUtc}.
   * @param toDateUtc Key property. See {@link ExpenseDelegates.toDateUtc}.
   * @returns A request builder for creating requests to retrieve one `ExpenseDelegates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    delegatedUser: DeserializedType<T, 'Edm.String'>,
    delegatingPersonnelNumber: DeserializedType<T, 'Edm.String'>,
    fromDateUtc: DeserializedType<T, 'Edm.DateTimeOffset'>,
    toDateUtc: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<ExpenseDelegates<T>, T> {
    return new GetByKeyRequestBuilder<ExpenseDelegates<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      DelegatedUser: delegatedUser,
      DelegatingPersonnelNumber: delegatingPersonnelNumber,
      FromDateUTC: fromDateUtc,
      ToDateUTC: toDateUtc
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ExpenseDelegates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpenseDelegates`.
   */
  update(
    entity: ExpenseDelegates<T>
  ): UpdateRequestBuilder<ExpenseDelegates<T>, T> {
    return new UpdateRequestBuilder<ExpenseDelegates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpenseDelegates`.
   * @param dataAreaId Key property. See {@link ExpenseDelegates.dataAreaId}.
   * @param delegatedUser Key property. See {@link ExpenseDelegates.delegatedUser}.
   * @param delegatingPersonnelNumber Key property. See {@link ExpenseDelegates.delegatingPersonnelNumber}.
   * @param fromDateUtc Key property. See {@link ExpenseDelegates.fromDateUtc}.
   * @param toDateUtc Key property. See {@link ExpenseDelegates.toDateUtc}.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseDelegates`.
   */
  delete(
    dataAreaId: string,
    delegatedUser: string,
    delegatingPersonnelNumber: string,
    fromDateUtc: Moment,
    toDateUtc: Moment
  ): DeleteRequestBuilder<ExpenseDelegates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpenseDelegates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseDelegates` by taking the entity as a parameter.
   */
  delete(
    entity: ExpenseDelegates<T>
  ): DeleteRequestBuilder<ExpenseDelegates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    delegatedUser?: string,
    delegatingPersonnelNumber?: string,
    fromDateUtc?: Moment,
    toDateUtc?: Moment
  ): DeleteRequestBuilder<ExpenseDelegates<T>, T> {
    return new DeleteRequestBuilder<ExpenseDelegates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ExpenseDelegates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DelegatedUser: delegatedUser!,
            DelegatingPersonnelNumber: delegatingPersonnelNumber!,
            FromDateUTC: fromDateUtc!,
            ToDateUTC: toDateUtc!
          }
    );
  }
}
