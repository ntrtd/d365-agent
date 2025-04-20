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
import { ValidatePayments } from './ValidatePayments';

/**
 * Request builder class for operations supported on the {@link ValidatePayments} entity.
 */
export class ValidatePaymentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ValidatePayments<T>, T> {
  /**
   * Returns a request builder for querying all `ValidatePayments` entities.
   * @returns A request builder for creating requests to retrieve all `ValidatePayments` entities.
   */
  getAll(): GetAllRequestBuilder<ValidatePayments<T>, T> {
    return new GetAllRequestBuilder<ValidatePayments<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ValidatePayments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ValidatePayments`.
   */
  create(
    entity: ValidatePayments<T>
  ): CreateRequestBuilder<ValidatePayments<T>, T> {
    return new CreateRequestBuilder<ValidatePayments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ValidatePayments` entity based on its keys.
   * @param dataAreaId Key property. See {@link ValidatePayments.dataAreaId}.
   * @param expenseCategory Key property. See {@link ValidatePayments.expenseCategory}.
   * @param paymentMethod Key property. See {@link ValidatePayments.paymentMethod}.
   * @returns A request builder for creating requests to retrieve one `ValidatePayments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    expenseCategory: DeserializedType<T, 'Edm.String'>,
    paymentMethod: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ValidatePayments<T>, T> {
    return new GetByKeyRequestBuilder<ValidatePayments<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ExpenseCategory: expenseCategory,
      PaymentMethod: paymentMethod
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ValidatePayments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ValidatePayments`.
   */
  update(
    entity: ValidatePayments<T>
  ): UpdateRequestBuilder<ValidatePayments<T>, T> {
    return new UpdateRequestBuilder<ValidatePayments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ValidatePayments`.
   * @param dataAreaId Key property. See {@link ValidatePayments.dataAreaId}.
   * @param expenseCategory Key property. See {@link ValidatePayments.expenseCategory}.
   * @param paymentMethod Key property. See {@link ValidatePayments.paymentMethod}.
   * @returns A request builder for creating requests that delete an entity of type `ValidatePayments`.
   */
  delete(
    dataAreaId: string,
    expenseCategory: string,
    paymentMethod: string
  ): DeleteRequestBuilder<ValidatePayments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ValidatePayments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ValidatePayments` by taking the entity as a parameter.
   */
  delete(
    entity: ValidatePayments<T>
  ): DeleteRequestBuilder<ValidatePayments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    expenseCategory?: string,
    paymentMethod?: string
  ): DeleteRequestBuilder<ValidatePayments<T>, T> {
    return new DeleteRequestBuilder<ValidatePayments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ValidatePayments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ExpenseCategory: expenseCategory!,
            PaymentMethod: paymentMethod!
          }
    );
  }
}
