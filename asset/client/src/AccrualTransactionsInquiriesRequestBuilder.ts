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
import { AccrualTransactionsInquiries } from './AccrualTransactionsInquiries';

/**
 * Request builder class for operations supported on the {@link AccrualTransactionsInquiries} entity.
 */
export class AccrualTransactionsInquiriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AccrualTransactionsInquiries<T>, T> {
  /**
   * Returns a request builder for querying all `AccrualTransactionsInquiries` entities.
   * @returns A request builder for creating requests to retrieve all `AccrualTransactionsInquiries` entities.
   */
  getAll(): GetAllRequestBuilder<AccrualTransactionsInquiries<T>, T> {
    return new GetAllRequestBuilder<AccrualTransactionsInquiries<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AccrualTransactionsInquiries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AccrualTransactionsInquiries`.
   */
  create(
    entity: AccrualTransactionsInquiries<T>
  ): CreateRequestBuilder<AccrualTransactionsInquiries<T>, T> {
    return new CreateRequestBuilder<AccrualTransactionsInquiries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AccrualTransactionsInquiries` entity based on its keys.
   * @param transDate Key property. See {@link AccrualTransactionsInquiries.transDate}.
   * @returns A request builder for creating requests to retrieve one `AccrualTransactionsInquiries` entity based on its keys.
   */
  getByKey(
    transDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<AccrualTransactionsInquiries<T>, T> {
    return new GetByKeyRequestBuilder<AccrualTransactionsInquiries<T>, T>(
      this.entityApi,
      { TransDate: transDate }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AccrualTransactionsInquiries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AccrualTransactionsInquiries`.
   */
  update(
    entity: AccrualTransactionsInquiries<T>
  ): UpdateRequestBuilder<AccrualTransactionsInquiries<T>, T> {
    return new UpdateRequestBuilder<AccrualTransactionsInquiries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AccrualTransactionsInquiries`.
   * @param transDate Key property. See {@link AccrualTransactionsInquiries.transDate}.
   * @returns A request builder for creating requests that delete an entity of type `AccrualTransactionsInquiries`.
   */
  delete(
    transDate: Moment
  ): DeleteRequestBuilder<AccrualTransactionsInquiries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AccrualTransactionsInquiries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AccrualTransactionsInquiries` by taking the entity as a parameter.
   */
  delete(
    entity: AccrualTransactionsInquiries<T>
  ): DeleteRequestBuilder<AccrualTransactionsInquiries<T>, T>;
  delete(
    transDateOrEntity: any
  ): DeleteRequestBuilder<AccrualTransactionsInquiries<T>, T> {
    return new DeleteRequestBuilder<AccrualTransactionsInquiries<T>, T>(
      this.entityApi,
      transDateOrEntity instanceof AccrualTransactionsInquiries
        ? transDateOrEntity
        : { TransDate: transDateOrEntity! }
    );
  }
}
