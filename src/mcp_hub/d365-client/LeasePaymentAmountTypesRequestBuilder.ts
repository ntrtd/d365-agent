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
import { LeasePaymentAmountTypes } from './LeasePaymentAmountTypes';

/**
 * Request builder class for operations supported on the {@link LeasePaymentAmountTypes} entity.
 */
export class LeasePaymentAmountTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeasePaymentAmountTypes<T>, T> {
  /**
   * Returns a request builder for querying all `LeasePaymentAmountTypes` entities.
   * @returns A request builder for creating requests to retrieve all `LeasePaymentAmountTypes` entities.
   */
  getAll(): GetAllRequestBuilder<LeasePaymentAmountTypes<T>, T> {
    return new GetAllRequestBuilder<LeasePaymentAmountTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeasePaymentAmountTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeasePaymentAmountTypes`.
   */
  create(
    entity: LeasePaymentAmountTypes<T>
  ): CreateRequestBuilder<LeasePaymentAmountTypes<T>, T> {
    return new CreateRequestBuilder<LeasePaymentAmountTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeasePaymentAmountTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeasePaymentAmountTypes.dataAreaId}.
   * @param paymentAmountType Key property. See {@link LeasePaymentAmountTypes.paymentAmountType}.
   * @returns A request builder for creating requests to retrieve one `LeasePaymentAmountTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    paymentAmountType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LeasePaymentAmountTypes<T>, T> {
    return new GetByKeyRequestBuilder<LeasePaymentAmountTypes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PaymentAmountType: paymentAmountType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeasePaymentAmountTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeasePaymentAmountTypes`.
   */
  update(
    entity: LeasePaymentAmountTypes<T>
  ): UpdateRequestBuilder<LeasePaymentAmountTypes<T>, T> {
    return new UpdateRequestBuilder<LeasePaymentAmountTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeasePaymentAmountTypes`.
   * @param dataAreaId Key property. See {@link LeasePaymentAmountTypes.dataAreaId}.
   * @param paymentAmountType Key property. See {@link LeasePaymentAmountTypes.paymentAmountType}.
   * @returns A request builder for creating requests that delete an entity of type `LeasePaymentAmountTypes`.
   */
  delete(
    dataAreaId: string,
    paymentAmountType: string
  ): DeleteRequestBuilder<LeasePaymentAmountTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeasePaymentAmountTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeasePaymentAmountTypes` by taking the entity as a parameter.
   */
  delete(
    entity: LeasePaymentAmountTypes<T>
  ): DeleteRequestBuilder<LeasePaymentAmountTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    paymentAmountType?: string
  ): DeleteRequestBuilder<LeasePaymentAmountTypes<T>, T> {
    return new DeleteRequestBuilder<LeasePaymentAmountTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeasePaymentAmountTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PaymentAmountType: paymentAmountType!
          }
    );
  }
}
