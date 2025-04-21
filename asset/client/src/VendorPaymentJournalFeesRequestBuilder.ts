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
import { VendorPaymentJournalFees } from './VendorPaymentJournalFees';

/**
 * Request builder class for operations supported on the {@link VendorPaymentJournalFees} entity.
 */
export class VendorPaymentJournalFeesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorPaymentJournalFees<T>, T> {
  /**
   * Returns a request builder for querying all `VendorPaymentJournalFees` entities.
   * @returns A request builder for creating requests to retrieve all `VendorPaymentJournalFees` entities.
   */
  getAll(): GetAllRequestBuilder<VendorPaymentJournalFees<T>, T> {
    return new GetAllRequestBuilder<VendorPaymentJournalFees<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendorPaymentJournalFees` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorPaymentJournalFees`.
   */
  create(
    entity: VendorPaymentJournalFees<T>
  ): CreateRequestBuilder<VendorPaymentJournalFees<T>, T> {
    return new CreateRequestBuilder<VendorPaymentJournalFees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorPaymentJournalFees` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorPaymentJournalFees.dataAreaId}.
   * @param sourceJournalBatchNumber Key property. See {@link VendorPaymentJournalFees.sourceJournalBatchNumber}.
   * @param sourceJournalLineNumber Key property. See {@link VendorPaymentJournalFees.sourceJournalLineNumber}.
   * @param paymentFeeId Key property. See {@link VendorPaymentJournalFees.paymentFeeId}.
   * @returns A request builder for creating requests to retrieve one `VendorPaymentJournalFees` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceJournalBatchNumber: DeserializedType<T, 'Edm.String'>,
    sourceJournalLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    paymentFeeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorPaymentJournalFees<T>, T> {
    return new GetByKeyRequestBuilder<VendorPaymentJournalFees<T>, T>(
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
   * Returns a request builder for updating an entity of type `VendorPaymentJournalFees`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorPaymentJournalFees`.
   */
  update(
    entity: VendorPaymentJournalFees<T>
  ): UpdateRequestBuilder<VendorPaymentJournalFees<T>, T> {
    return new UpdateRequestBuilder<VendorPaymentJournalFees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorPaymentJournalFees`.
   * @param dataAreaId Key property. See {@link VendorPaymentJournalFees.dataAreaId}.
   * @param sourceJournalBatchNumber Key property. See {@link VendorPaymentJournalFees.sourceJournalBatchNumber}.
   * @param sourceJournalLineNumber Key property. See {@link VendorPaymentJournalFees.sourceJournalLineNumber}.
   * @param paymentFeeId Key property. See {@link VendorPaymentJournalFees.paymentFeeId}.
   * @returns A request builder for creating requests that delete an entity of type `VendorPaymentJournalFees`.
   */
  delete(
    dataAreaId: string,
    sourceJournalBatchNumber: string,
    sourceJournalLineNumber: BigNumber,
    paymentFeeId: string
  ): DeleteRequestBuilder<VendorPaymentJournalFees<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorPaymentJournalFees`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorPaymentJournalFees` by taking the entity as a parameter.
   */
  delete(
    entity: VendorPaymentJournalFees<T>
  ): DeleteRequestBuilder<VendorPaymentJournalFees<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceJournalBatchNumber?: string,
    sourceJournalLineNumber?: BigNumber,
    paymentFeeId?: string
  ): DeleteRequestBuilder<VendorPaymentJournalFees<T>, T> {
    return new DeleteRequestBuilder<VendorPaymentJournalFees<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorPaymentJournalFees
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
