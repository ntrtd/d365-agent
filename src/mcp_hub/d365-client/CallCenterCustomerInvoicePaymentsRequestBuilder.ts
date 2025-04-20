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
import { CallCenterCustomerInvoicePayments } from './CallCenterCustomerInvoicePayments';

/**
 * Request builder class for operations supported on the {@link CallCenterCustomerInvoicePayments} entity.
 */
export class CallCenterCustomerInvoicePaymentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CallCenterCustomerInvoicePayments<T>, T> {
  /**
   * Returns a request builder for querying all `CallCenterCustomerInvoicePayments` entities.
   * @returns A request builder for creating requests to retrieve all `CallCenterCustomerInvoicePayments` entities.
   */
  getAll(): GetAllRequestBuilder<CallCenterCustomerInvoicePayments<T>, T> {
    return new GetAllRequestBuilder<CallCenterCustomerInvoicePayments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CallCenterCustomerInvoicePayments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CallCenterCustomerInvoicePayments`.
   */
  create(
    entity: CallCenterCustomerInvoicePayments<T>
  ): CreateRequestBuilder<CallCenterCustomerInvoicePayments<T>, T> {
    return new CreateRequestBuilder<CallCenterCustomerInvoicePayments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CallCenterCustomerInvoicePayments` entity based on its keys.
   * @param dataAreaId Key property. See {@link CallCenterCustomerInvoicePayments.dataAreaId}.
   * @param lineNumber Key property. See {@link CallCenterCustomerInvoicePayments.lineNumber}.
   * @param invoiceId Key property. See {@link CallCenterCustomerInvoicePayments.invoiceId}.
   * @returns A request builder for creating requests to retrieve one `CallCenterCustomerInvoicePayments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    invoiceId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CallCenterCustomerInvoicePayments<T>, T> {
    return new GetByKeyRequestBuilder<CallCenterCustomerInvoicePayments<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LineNumber: lineNumber,
        InvoiceId: invoiceId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CallCenterCustomerInvoicePayments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CallCenterCustomerInvoicePayments`.
   */
  update(
    entity: CallCenterCustomerInvoicePayments<T>
  ): UpdateRequestBuilder<CallCenterCustomerInvoicePayments<T>, T> {
    return new UpdateRequestBuilder<CallCenterCustomerInvoicePayments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CallCenterCustomerInvoicePayments`.
   * @param dataAreaId Key property. See {@link CallCenterCustomerInvoicePayments.dataAreaId}.
   * @param lineNumber Key property. See {@link CallCenterCustomerInvoicePayments.lineNumber}.
   * @param invoiceId Key property. See {@link CallCenterCustomerInvoicePayments.invoiceId}.
   * @returns A request builder for creating requests that delete an entity of type `CallCenterCustomerInvoicePayments`.
   */
  delete(
    dataAreaId: string,
    lineNumber: BigNumber,
    invoiceId: string
  ): DeleteRequestBuilder<CallCenterCustomerInvoicePayments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CallCenterCustomerInvoicePayments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CallCenterCustomerInvoicePayments` by taking the entity as a parameter.
   */
  delete(
    entity: CallCenterCustomerInvoicePayments<T>
  ): DeleteRequestBuilder<CallCenterCustomerInvoicePayments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineNumber?: BigNumber,
    invoiceId?: string
  ): DeleteRequestBuilder<CallCenterCustomerInvoicePayments<T>, T> {
    return new DeleteRequestBuilder<CallCenterCustomerInvoicePayments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CallCenterCustomerInvoicePayments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineNumber: lineNumber!,
            InvoiceId: invoiceId!
          }
    );
  }
}
