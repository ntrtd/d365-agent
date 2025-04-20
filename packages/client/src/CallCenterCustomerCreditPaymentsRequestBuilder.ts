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
import { CallCenterCustomerCreditPayments } from './CallCenterCustomerCreditPayments';

/**
 * Request builder class for operations supported on the {@link CallCenterCustomerCreditPayments} entity.
 */
export class CallCenterCustomerCreditPaymentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CallCenterCustomerCreditPayments<T>, T> {
  /**
   * Returns a request builder for querying all `CallCenterCustomerCreditPayments` entities.
   * @returns A request builder for creating requests to retrieve all `CallCenterCustomerCreditPayments` entities.
   */
  getAll(): GetAllRequestBuilder<CallCenterCustomerCreditPayments<T>, T> {
    return new GetAllRequestBuilder<CallCenterCustomerCreditPayments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CallCenterCustomerCreditPayments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CallCenterCustomerCreditPayments`.
   */
  create(
    entity: CallCenterCustomerCreditPayments<T>
  ): CreateRequestBuilder<CallCenterCustomerCreditPayments<T>, T> {
    return new CreateRequestBuilder<CallCenterCustomerCreditPayments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CallCenterCustomerCreditPayments` entity based on its keys.
   * @param dataAreaId Key property. See {@link CallCenterCustomerCreditPayments.dataAreaId}.
   * @param lineNumber Key property. See {@link CallCenterCustomerCreditPayments.lineNumber}.
   * @param customerCreditId Key property. See {@link CallCenterCustomerCreditPayments.customerCreditId}.
   * @returns A request builder for creating requests to retrieve one `CallCenterCustomerCreditPayments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    customerCreditId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CallCenterCustomerCreditPayments<T>, T> {
    return new GetByKeyRequestBuilder<CallCenterCustomerCreditPayments<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LineNumber: lineNumber,
        CustomerCreditId: customerCreditId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CallCenterCustomerCreditPayments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CallCenterCustomerCreditPayments`.
   */
  update(
    entity: CallCenterCustomerCreditPayments<T>
  ): UpdateRequestBuilder<CallCenterCustomerCreditPayments<T>, T> {
    return new UpdateRequestBuilder<CallCenterCustomerCreditPayments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CallCenterCustomerCreditPayments`.
   * @param dataAreaId Key property. See {@link CallCenterCustomerCreditPayments.dataAreaId}.
   * @param lineNumber Key property. See {@link CallCenterCustomerCreditPayments.lineNumber}.
   * @param customerCreditId Key property. See {@link CallCenterCustomerCreditPayments.customerCreditId}.
   * @returns A request builder for creating requests that delete an entity of type `CallCenterCustomerCreditPayments`.
   */
  delete(
    dataAreaId: string,
    lineNumber: BigNumber,
    customerCreditId: string
  ): DeleteRequestBuilder<CallCenterCustomerCreditPayments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CallCenterCustomerCreditPayments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CallCenterCustomerCreditPayments` by taking the entity as a parameter.
   */
  delete(
    entity: CallCenterCustomerCreditPayments<T>
  ): DeleteRequestBuilder<CallCenterCustomerCreditPayments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineNumber?: BigNumber,
    customerCreditId?: string
  ): DeleteRequestBuilder<CallCenterCustomerCreditPayments<T>, T> {
    return new DeleteRequestBuilder<CallCenterCustomerCreditPayments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CallCenterCustomerCreditPayments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineNumber: lineNumber!,
            CustomerCreditId: customerCreditId!
          }
    );
  }
}
