/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { CustomerPaymentJournalFees } from './CustomerPaymentJournalFees';

/**
 * Request builder class for operations supported on the {@link CustomerPaymentJournalFees} entity.
 */
export class CustomerPaymentJournalFeesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerPaymentJournalFees<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerPaymentJournalFees` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerPaymentJournalFees` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerPaymentJournalFees<T>, T> {
    return new GetAllRequestBuilder<CustomerPaymentJournalFees<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomerPaymentJournalFees` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerPaymentJournalFees`.
   */
  create(
    entity: CustomerPaymentJournalFees<T>
  ): CreateRequestBuilder<CustomerPaymentJournalFees<T>, T> {
    return new CreateRequestBuilder<CustomerPaymentJournalFees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerPaymentJournalFees` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomerPaymentJournalFees.dataAreaId}.
   * @param sourceJournalBatchNumber Key property. See {@link CustomerPaymentJournalFees.sourceJournalBatchNumber}.
   * @param sourceJournalLineNumber Key property. See {@link CustomerPaymentJournalFees.sourceJournalLineNumber}.
   * @param paymentFeeId Key property. See {@link CustomerPaymentJournalFees.paymentFeeId}.
   * @returns A request builder for creating requests to retrieve one `CustomerPaymentJournalFees` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceJournalBatchNumber: DeserializedType<T, 'Edm.String'>,
    sourceJournalLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    paymentFeeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerPaymentJournalFees<T>, T> {
    return new GetByKeyRequestBuilder<CustomerPaymentJournalFees<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceJournalBatchNumber: sourceJournalBatchNumber,
        SourceJournalLineNumber: sourceJournalLineNumber,
        PaymentFeeId: paymentFeeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerPaymentJournalFees`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerPaymentJournalFees`.
   */
  update(
    entity: CustomerPaymentJournalFees<T>
  ): UpdateRequestBuilder<CustomerPaymentJournalFees<T>, T> {
    return new UpdateRequestBuilder<CustomerPaymentJournalFees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerPaymentJournalFees`.
   * @param dataAreaId Key property. See {@link CustomerPaymentJournalFees.dataAreaId}.
   * @param sourceJournalBatchNumber Key property. See {@link CustomerPaymentJournalFees.sourceJournalBatchNumber}.
   * @param sourceJournalLineNumber Key property. See {@link CustomerPaymentJournalFees.sourceJournalLineNumber}.
   * @param paymentFeeId Key property. See {@link CustomerPaymentJournalFees.paymentFeeId}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerPaymentJournalFees`.
   */
  delete(
    dataAreaId: string,
    sourceJournalBatchNumber: string,
    sourceJournalLineNumber: BigNumber,
    paymentFeeId: string
  ): DeleteRequestBuilder<CustomerPaymentJournalFees<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerPaymentJournalFees`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerPaymentJournalFees` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerPaymentJournalFees<T>
  ): DeleteRequestBuilder<CustomerPaymentJournalFees<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceJournalBatchNumber?: string,
    sourceJournalLineNumber?: BigNumber,
    paymentFeeId?: string
  ): DeleteRequestBuilder<CustomerPaymentJournalFees<T>, T> {
    return new DeleteRequestBuilder<CustomerPaymentJournalFees<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomerPaymentJournalFees
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceJournalBatchNumber: sourceJournalBatchNumber!,
            SourceJournalLineNumber: sourceJournalLineNumber!,
            PaymentFeeId: paymentFeeId!
          }
    );
  }
}
