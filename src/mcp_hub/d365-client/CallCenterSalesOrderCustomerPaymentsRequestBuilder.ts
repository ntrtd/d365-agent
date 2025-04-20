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
import { CallCenterSalesOrderCustomerPayments } from './CallCenterSalesOrderCustomerPayments';

/**
 * Request builder class for operations supported on the {@link CallCenterSalesOrderCustomerPayments} entity.
 */
export class CallCenterSalesOrderCustomerPaymentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CallCenterSalesOrderCustomerPayments<T>, T> {
  /**
   * Returns a request builder for querying all `CallCenterSalesOrderCustomerPayments` entities.
   * @returns A request builder for creating requests to retrieve all `CallCenterSalesOrderCustomerPayments` entities.
   */
  getAll(): GetAllRequestBuilder<CallCenterSalesOrderCustomerPayments<T>, T> {
    return new GetAllRequestBuilder<CallCenterSalesOrderCustomerPayments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CallCenterSalesOrderCustomerPayments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CallCenterSalesOrderCustomerPayments`.
   */
  create(
    entity: CallCenterSalesOrderCustomerPayments<T>
  ): CreateRequestBuilder<CallCenterSalesOrderCustomerPayments<T>, T> {
    return new CreateRequestBuilder<CallCenterSalesOrderCustomerPayments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CallCenterSalesOrderCustomerPayments` entity based on its keys.
   * @param dataAreaId Key property. See {@link CallCenterSalesOrderCustomerPayments.dataAreaId}.
   * @param lineNumber Key property. See {@link CallCenterSalesOrderCustomerPayments.lineNumber}.
   * @param salesOrderId Key property. See {@link CallCenterSalesOrderCustomerPayments.salesOrderId}.
   * @returns A request builder for creating requests to retrieve one `CallCenterSalesOrderCustomerPayments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    salesOrderId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CallCenterSalesOrderCustomerPayments<T>, T> {
    return new GetByKeyRequestBuilder<
      CallCenterSalesOrderCustomerPayments<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LineNumber: lineNumber,
      SalesOrderId: salesOrderId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CallCenterSalesOrderCustomerPayments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CallCenterSalesOrderCustomerPayments`.
   */
  update(
    entity: CallCenterSalesOrderCustomerPayments<T>
  ): UpdateRequestBuilder<CallCenterSalesOrderCustomerPayments<T>, T> {
    return new UpdateRequestBuilder<CallCenterSalesOrderCustomerPayments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CallCenterSalesOrderCustomerPayments`.
   * @param dataAreaId Key property. See {@link CallCenterSalesOrderCustomerPayments.dataAreaId}.
   * @param lineNumber Key property. See {@link CallCenterSalesOrderCustomerPayments.lineNumber}.
   * @param salesOrderId Key property. See {@link CallCenterSalesOrderCustomerPayments.salesOrderId}.
   * @returns A request builder for creating requests that delete an entity of type `CallCenterSalesOrderCustomerPayments`.
   */
  delete(
    dataAreaId: string,
    lineNumber: BigNumber,
    salesOrderId: string
  ): DeleteRequestBuilder<CallCenterSalesOrderCustomerPayments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CallCenterSalesOrderCustomerPayments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CallCenterSalesOrderCustomerPayments` by taking the entity as a parameter.
   */
  delete(
    entity: CallCenterSalesOrderCustomerPayments<T>
  ): DeleteRequestBuilder<CallCenterSalesOrderCustomerPayments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineNumber?: BigNumber,
    salesOrderId?: string
  ): DeleteRequestBuilder<CallCenterSalesOrderCustomerPayments<T>, T> {
    return new DeleteRequestBuilder<CallCenterSalesOrderCustomerPayments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CallCenterSalesOrderCustomerPayments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineNumber: lineNumber!,
            SalesOrderId: salesOrderId!
          }
    );
  }
}
