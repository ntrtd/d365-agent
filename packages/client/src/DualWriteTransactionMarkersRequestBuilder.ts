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
import { DualWriteTransactionMarkers } from './DualWriteTransactionMarkers';
import { DualWriteTransactionStatus } from './DualWriteTransactionStatus';

/**
 * Request builder class for operations supported on the {@link DualWriteTransactionMarkers} entity.
 */
export class DualWriteTransactionMarkersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DualWriteTransactionMarkers<T>, T> {
  /**
   * Returns a request builder for querying all `DualWriteTransactionMarkers` entities.
   * @returns A request builder for creating requests to retrieve all `DualWriteTransactionMarkers` entities.
   */
  getAll(): GetAllRequestBuilder<DualWriteTransactionMarkers<T>, T> {
    return new GetAllRequestBuilder<DualWriteTransactionMarkers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DualWriteTransactionMarkers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DualWriteTransactionMarkers`.
   */
  create(
    entity: DualWriteTransactionMarkers<T>
  ): CreateRequestBuilder<DualWriteTransactionMarkers<T>, T> {
    return new CreateRequestBuilder<DualWriteTransactionMarkers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DualWriteTransactionMarkers` entity based on its keys.
   * @param transactionId Key property. See {@link DualWriteTransactionMarkers.transactionId}.
   * @param transactionCreatedDateTime Key property. See {@link DualWriteTransactionMarkers.transactionCreatedDateTime}.
   * @param fnOTransactionStatus Key property. See {@link DualWriteTransactionMarkers.fnOTransactionStatus}.
   * @returns A request builder for creating requests to retrieve one `DualWriteTransactionMarkers` entity based on its keys.
   */
  getByKey(
    transactionId: DeserializedType<T, 'Edm.String'>,
    transactionCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>,
    fnOTransactionStatus: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.DualWriteTransactionStatus'
    >
  ): GetByKeyRequestBuilder<DualWriteTransactionMarkers<T>, T> {
    return new GetByKeyRequestBuilder<DualWriteTransactionMarkers<T>, T>(
      this.entityApi,
      {
        TransactionId: transactionId,
        TransactionCreatedDateTime: transactionCreatedDateTime,
        FnOTransactionStatus: fnOTransactionStatus
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DualWriteTransactionMarkers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DualWriteTransactionMarkers`.
   */
  update(
    entity: DualWriteTransactionMarkers<T>
  ): UpdateRequestBuilder<DualWriteTransactionMarkers<T>, T> {
    return new UpdateRequestBuilder<DualWriteTransactionMarkers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DualWriteTransactionMarkers`.
   * @param transactionId Key property. See {@link DualWriteTransactionMarkers.transactionId}.
   * @param transactionCreatedDateTime Key property. See {@link DualWriteTransactionMarkers.transactionCreatedDateTime}.
   * @param fnOTransactionStatus Key property. See {@link DualWriteTransactionMarkers.fnOTransactionStatus}.
   * @returns A request builder for creating requests that delete an entity of type `DualWriteTransactionMarkers`.
   */
  delete(
    transactionId: string,
    transactionCreatedDateTime: Moment,
    fnOTransactionStatus: DualWriteTransactionStatus
  ): DeleteRequestBuilder<DualWriteTransactionMarkers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DualWriteTransactionMarkers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DualWriteTransactionMarkers` by taking the entity as a parameter.
   */
  delete(
    entity: DualWriteTransactionMarkers<T>
  ): DeleteRequestBuilder<DualWriteTransactionMarkers<T>, T>;
  delete(
    transactionIdOrEntity: any,
    transactionCreatedDateTime?: Moment,
    fnOTransactionStatus?: DualWriteTransactionStatus
  ): DeleteRequestBuilder<DualWriteTransactionMarkers<T>, T> {
    return new DeleteRequestBuilder<DualWriteTransactionMarkers<T>, T>(
      this.entityApi,
      transactionIdOrEntity instanceof DualWriteTransactionMarkers
        ? transactionIdOrEntity
        : {
            TransactionId: transactionIdOrEntity!,
            TransactionCreatedDateTime: transactionCreatedDateTime!,
            FnOTransactionStatus: fnOTransactionStatus!
          }
    );
  }
}
