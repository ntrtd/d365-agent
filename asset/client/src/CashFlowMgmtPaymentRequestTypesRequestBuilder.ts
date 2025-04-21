/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { CashFlowMgmtPaymentRequestTypes } from './CashFlowMgmtPaymentRequestTypes';

/**
 * Request builder class for operations supported on the {@link CashFlowMgmtPaymentRequestTypes} entity.
 */
export class CashFlowMgmtPaymentRequestTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CashFlowMgmtPaymentRequestTypes<T>, T> {
  /**
   * Returns a request builder for querying all `CashFlowMgmtPaymentRequestTypes` entities.
   * @returns A request builder for creating requests to retrieve all `CashFlowMgmtPaymentRequestTypes` entities.
   */
  getAll(): GetAllRequestBuilder<CashFlowMgmtPaymentRequestTypes<T>, T> {
    return new GetAllRequestBuilder<CashFlowMgmtPaymentRequestTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CashFlowMgmtPaymentRequestTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CashFlowMgmtPaymentRequestTypes`.
   */
  create(
    entity: CashFlowMgmtPaymentRequestTypes<T>
  ): CreateRequestBuilder<CashFlowMgmtPaymentRequestTypes<T>, T> {
    return new CreateRequestBuilder<CashFlowMgmtPaymentRequestTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CashFlowMgmtPaymentRequestTypes` entity based on its keys.
   * @param paymentRequestType Key property. See {@link CashFlowMgmtPaymentRequestTypes.paymentRequestType}.
   * @returns A request builder for creating requests to retrieve one `CashFlowMgmtPaymentRequestTypes` entity based on its keys.
   */
  getByKey(
    paymentRequestType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CashFlowMgmtPaymentRequestTypes<T>, T> {
    return new GetByKeyRequestBuilder<CashFlowMgmtPaymentRequestTypes<T>, T>(
      this.entityApi,
      { PaymentRequestType: paymentRequestType }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CashFlowMgmtPaymentRequestTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CashFlowMgmtPaymentRequestTypes`.
   */
  update(
    entity: CashFlowMgmtPaymentRequestTypes<T>
  ): UpdateRequestBuilder<CashFlowMgmtPaymentRequestTypes<T>, T> {
    return new UpdateRequestBuilder<CashFlowMgmtPaymentRequestTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CashFlowMgmtPaymentRequestTypes`.
   * @param paymentRequestType Key property. See {@link CashFlowMgmtPaymentRequestTypes.paymentRequestType}.
   * @returns A request builder for creating requests that delete an entity of type `CashFlowMgmtPaymentRequestTypes`.
   */
  delete(
    paymentRequestType: string
  ): DeleteRequestBuilder<CashFlowMgmtPaymentRequestTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CashFlowMgmtPaymentRequestTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CashFlowMgmtPaymentRequestTypes` by taking the entity as a parameter.
   */
  delete(
    entity: CashFlowMgmtPaymentRequestTypes<T>
  ): DeleteRequestBuilder<CashFlowMgmtPaymentRequestTypes<T>, T>;
  delete(
    paymentRequestTypeOrEntity: any
  ): DeleteRequestBuilder<CashFlowMgmtPaymentRequestTypes<T>, T> {
    return new DeleteRequestBuilder<CashFlowMgmtPaymentRequestTypes<T>, T>(
      this.entityApi,
      paymentRequestTypeOrEntity instanceof CashFlowMgmtPaymentRequestTypes
        ? paymentRequestTypeOrEntity
        : { PaymentRequestType: paymentRequestTypeOrEntity! }
    );
  }
}
