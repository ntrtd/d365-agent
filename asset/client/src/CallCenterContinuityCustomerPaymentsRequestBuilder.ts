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
import { CallCenterContinuityCustomerPayments } from './CallCenterContinuityCustomerPayments';

/**
 * Request builder class for operations supported on the {@link CallCenterContinuityCustomerPayments} entity.
 */
export class CallCenterContinuityCustomerPaymentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CallCenterContinuityCustomerPayments<T>, T> {
  /**
   * Returns a request builder for querying all `CallCenterContinuityCustomerPayments` entities.
   * @returns A request builder for creating requests to retrieve all `CallCenterContinuityCustomerPayments` entities.
   */
  getAll(): GetAllRequestBuilder<CallCenterContinuityCustomerPayments<T>, T> {
    return new GetAllRequestBuilder<CallCenterContinuityCustomerPayments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CallCenterContinuityCustomerPayments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CallCenterContinuityCustomerPayments`.
   */
  create(
    entity: CallCenterContinuityCustomerPayments<T>
  ): CreateRequestBuilder<CallCenterContinuityCustomerPayments<T>, T> {
    return new CreateRequestBuilder<CallCenterContinuityCustomerPayments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CallCenterContinuityCustomerPayments` entity based on its keys.
   * @param dataAreaId Key property. See {@link CallCenterContinuityCustomerPayments.dataAreaId}.
   * @param lineNumber Key property. See {@link CallCenterContinuityCustomerPayments.lineNumber}.
   * @param continuityInventoryTransactionId Key property. See {@link CallCenterContinuityCustomerPayments.continuityInventoryTransactionId}.
   * @param continuityScheduleId Key property. See {@link CallCenterContinuityCustomerPayments.continuityScheduleId}.
   * @returns A request builder for creating requests to retrieve one `CallCenterContinuityCustomerPayments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    continuityInventoryTransactionId: DeserializedType<T, 'Edm.String'>,
    continuityScheduleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CallCenterContinuityCustomerPayments<T>, T> {
    return new GetByKeyRequestBuilder<
      CallCenterContinuityCustomerPayments<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LineNumber: lineNumber,
      ContinuityInventoryTransactionId: continuityInventoryTransactionId,
      ContinuityScheduleId: continuityScheduleId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CallCenterContinuityCustomerPayments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CallCenterContinuityCustomerPayments`.
   */
  update(
    entity: CallCenterContinuityCustomerPayments<T>
  ): UpdateRequestBuilder<CallCenterContinuityCustomerPayments<T>, T> {
    return new UpdateRequestBuilder<CallCenterContinuityCustomerPayments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CallCenterContinuityCustomerPayments`.
   * @param dataAreaId Key property. See {@link CallCenterContinuityCustomerPayments.dataAreaId}.
   * @param lineNumber Key property. See {@link CallCenterContinuityCustomerPayments.lineNumber}.
   * @param continuityInventoryTransactionId Key property. See {@link CallCenterContinuityCustomerPayments.continuityInventoryTransactionId}.
   * @param continuityScheduleId Key property. See {@link CallCenterContinuityCustomerPayments.continuityScheduleId}.
   * @returns A request builder for creating requests that delete an entity of type `CallCenterContinuityCustomerPayments`.
   */
  delete(
    dataAreaId: string,
    lineNumber: BigNumber,
    continuityInventoryTransactionId: string,
    continuityScheduleId: string
  ): DeleteRequestBuilder<CallCenterContinuityCustomerPayments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CallCenterContinuityCustomerPayments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CallCenterContinuityCustomerPayments` by taking the entity as a parameter.
   */
  delete(
    entity: CallCenterContinuityCustomerPayments<T>
  ): DeleteRequestBuilder<CallCenterContinuityCustomerPayments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineNumber?: BigNumber,
    continuityInventoryTransactionId?: string,
    continuityScheduleId?: string
  ): DeleteRequestBuilder<CallCenterContinuityCustomerPayments<T>, T> {
    return new DeleteRequestBuilder<CallCenterContinuityCustomerPayments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CallCenterContinuityCustomerPayments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineNumber: lineNumber!,
            ContinuityInventoryTransactionId: continuityInventoryTransactionId!,
            ContinuityScheduleId: continuityScheduleId!
          }
    );
  }
}
