/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
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
import { ReconcilePayments } from './ReconcilePayments';

/**
 * Request builder class for operations supported on the {@link ReconcilePayments} entity.
 */
export class ReconcilePaymentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReconcilePayments<T>, T> {
  /**
   * Returns a request builder for querying all `ReconcilePayments` entities.
   * @returns A request builder for creating requests to retrieve all `ReconcilePayments` entities.
   */
  getAll(): GetAllRequestBuilder<ReconcilePayments<T>, T> {
    return new GetAllRequestBuilder<ReconcilePayments<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ReconcilePayments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReconcilePayments`.
   */
  create(
    entity: ReconcilePayments<T>
  ): CreateRequestBuilder<ReconcilePayments<T>, T> {
    return new CreateRequestBuilder<ReconcilePayments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReconcilePayments` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReconcilePayments.dataAreaId}.
   * @param transactionId Key property. See {@link ReconcilePayments.transactionId}.
   * @param paymentTransLineNumber Key property. See {@link ReconcilePayments.paymentTransLineNumber}.
   * @param commentTime Key property. See {@link ReconcilePayments.commentTime}.
   * @returns A request builder for creating requests to retrieve one `ReconcilePayments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    paymentTransLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    commentTime: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<ReconcilePayments<T>, T> {
    return new GetByKeyRequestBuilder<ReconcilePayments<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      TransactionId: transactionId,
      PaymentTransLineNumber: paymentTransLineNumber,
      CommentTime: commentTime
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ReconcilePayments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReconcilePayments`.
   */
  update(
    entity: ReconcilePayments<T>
  ): UpdateRequestBuilder<ReconcilePayments<T>, T> {
    return new UpdateRequestBuilder<ReconcilePayments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReconcilePayments`.
   * @param dataAreaId Key property. See {@link ReconcilePayments.dataAreaId}.
   * @param transactionId Key property. See {@link ReconcilePayments.transactionId}.
   * @param paymentTransLineNumber Key property. See {@link ReconcilePayments.paymentTransLineNumber}.
   * @param commentTime Key property. See {@link ReconcilePayments.commentTime}.
   * @returns A request builder for creating requests that delete an entity of type `ReconcilePayments`.
   */
  delete(
    dataAreaId: string,
    transactionId: string,
    paymentTransLineNumber: BigNumber,
    commentTime: Moment
  ): DeleteRequestBuilder<ReconcilePayments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReconcilePayments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReconcilePayments` by taking the entity as a parameter.
   */
  delete(
    entity: ReconcilePayments<T>
  ): DeleteRequestBuilder<ReconcilePayments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transactionId?: string,
    paymentTransLineNumber?: BigNumber,
    commentTime?: Moment
  ): DeleteRequestBuilder<ReconcilePayments<T>, T> {
    return new DeleteRequestBuilder<ReconcilePayments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReconcilePayments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransactionId: transactionId!,
            PaymentTransLineNumber: paymentTransLineNumber!,
            CommentTime: commentTime!
          }
    );
  }
}
