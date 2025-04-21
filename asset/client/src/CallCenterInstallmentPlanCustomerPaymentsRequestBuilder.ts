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
import { CallCenterInstallmentPlanCustomerPayments } from './CallCenterInstallmentPlanCustomerPayments';

/**
 * Request builder class for operations supported on the {@link CallCenterInstallmentPlanCustomerPayments} entity.
 */
export class CallCenterInstallmentPlanCustomerPaymentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CallCenterInstallmentPlanCustomerPayments<T>, T> {
  /**
   * Returns a request builder for querying all `CallCenterInstallmentPlanCustomerPayments` entities.
   * @returns A request builder for creating requests to retrieve all `CallCenterInstallmentPlanCustomerPayments` entities.
   */
  getAll(): GetAllRequestBuilder<
    CallCenterInstallmentPlanCustomerPayments<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CallCenterInstallmentPlanCustomerPayments<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CallCenterInstallmentPlanCustomerPayments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CallCenterInstallmentPlanCustomerPayments`.
   */
  create(
    entity: CallCenterInstallmentPlanCustomerPayments<T>
  ): CreateRequestBuilder<CallCenterInstallmentPlanCustomerPayments<T>, T> {
    return new CreateRequestBuilder<
      CallCenterInstallmentPlanCustomerPayments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CallCenterInstallmentPlanCustomerPayments` entity based on its keys.
   * @param dataAreaId Key property. See {@link CallCenterInstallmentPlanCustomerPayments.dataAreaId}.
   * @param lineNumber Key property. See {@link CallCenterInstallmentPlanCustomerPayments.lineNumber}.
   * @param installmentSalesOrderId Key property. See {@link CallCenterInstallmentPlanCustomerPayments.installmentSalesOrderId}.
   * @param installmentPaymentScheduleId Key property. See {@link CallCenterInstallmentPlanCustomerPayments.installmentPaymentScheduleId}.
   * @returns A request builder for creating requests to retrieve one `CallCenterInstallmentPlanCustomerPayments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    installmentSalesOrderId: DeserializedType<T, 'Edm.String'>,
    installmentPaymentScheduleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CallCenterInstallmentPlanCustomerPayments<T>, T> {
    return new GetByKeyRequestBuilder<
      CallCenterInstallmentPlanCustomerPayments<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LineNumber: lineNumber,
      InstallmentSalesOrderId: installmentSalesOrderId,
      InstallmentPaymentScheduleId: installmentPaymentScheduleId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CallCenterInstallmentPlanCustomerPayments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CallCenterInstallmentPlanCustomerPayments`.
   */
  update(
    entity: CallCenterInstallmentPlanCustomerPayments<T>
  ): UpdateRequestBuilder<CallCenterInstallmentPlanCustomerPayments<T>, T> {
    return new UpdateRequestBuilder<
      CallCenterInstallmentPlanCustomerPayments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CallCenterInstallmentPlanCustomerPayments`.
   * @param dataAreaId Key property. See {@link CallCenterInstallmentPlanCustomerPayments.dataAreaId}.
   * @param lineNumber Key property. See {@link CallCenterInstallmentPlanCustomerPayments.lineNumber}.
   * @param installmentSalesOrderId Key property. See {@link CallCenterInstallmentPlanCustomerPayments.installmentSalesOrderId}.
   * @param installmentPaymentScheduleId Key property. See {@link CallCenterInstallmentPlanCustomerPayments.installmentPaymentScheduleId}.
   * @returns A request builder for creating requests that delete an entity of type `CallCenterInstallmentPlanCustomerPayments`.
   */
  delete(
    dataAreaId: string,
    lineNumber: BigNumber,
    installmentSalesOrderId: string,
    installmentPaymentScheduleId: string
  ): DeleteRequestBuilder<CallCenterInstallmentPlanCustomerPayments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CallCenterInstallmentPlanCustomerPayments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CallCenterInstallmentPlanCustomerPayments` by taking the entity as a parameter.
   */
  delete(
    entity: CallCenterInstallmentPlanCustomerPayments<T>
  ): DeleteRequestBuilder<CallCenterInstallmentPlanCustomerPayments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineNumber?: BigNumber,
    installmentSalesOrderId?: string,
    installmentPaymentScheduleId?: string
  ): DeleteRequestBuilder<CallCenterInstallmentPlanCustomerPayments<T>, T> {
    return new DeleteRequestBuilder<
      CallCenterInstallmentPlanCustomerPayments<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof CallCenterInstallmentPlanCustomerPayments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineNumber: lineNumber!,
            InstallmentSalesOrderId: installmentSalesOrderId!,
            InstallmentPaymentScheduleId: installmentPaymentScheduleId!
          }
    );
  }
}
