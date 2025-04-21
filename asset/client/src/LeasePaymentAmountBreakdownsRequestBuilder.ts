/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { LeasePaymentAmountBreakdowns } from './LeasePaymentAmountBreakdowns';

/**
 * Request builder class for operations supported on the {@link LeasePaymentAmountBreakdowns} entity.
 */
export class LeasePaymentAmountBreakdownsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeasePaymentAmountBreakdowns<T>, T> {
  /**
   * Returns a request builder for querying all `LeasePaymentAmountBreakdowns` entities.
   * @returns A request builder for creating requests to retrieve all `LeasePaymentAmountBreakdowns` entities.
   */
  getAll(): GetAllRequestBuilder<LeasePaymentAmountBreakdowns<T>, T> {
    return new GetAllRequestBuilder<LeasePaymentAmountBreakdowns<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeasePaymentAmountBreakdowns` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeasePaymentAmountBreakdowns`.
   */
  create(
    entity: LeasePaymentAmountBreakdowns<T>
  ): CreateRequestBuilder<LeasePaymentAmountBreakdowns<T>, T> {
    return new CreateRequestBuilder<LeasePaymentAmountBreakdowns<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeasePaymentAmountBreakdowns` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeasePaymentAmountBreakdowns.dataAreaId}.
   * @param leaseId Key property. See {@link LeasePaymentAmountBreakdowns.leaseId}.
   * @param startDate Key property. See {@link LeasePaymentAmountBreakdowns.startDate}.
   * @param paymentAmountType Key property. See {@link LeasePaymentAmountBreakdowns.paymentAmountType}.
   * @returns A request builder for creating requests to retrieve one `LeasePaymentAmountBreakdowns` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    leaseId: DeserializedType<T, 'Edm.String'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    paymentAmountType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LeasePaymentAmountBreakdowns<T>, T> {
    return new GetByKeyRequestBuilder<LeasePaymentAmountBreakdowns<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LeaseId: leaseId,
        StartDate: startDate,
        PaymentAmountType: paymentAmountType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeasePaymentAmountBreakdowns`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeasePaymentAmountBreakdowns`.
   */
  update(
    entity: LeasePaymentAmountBreakdowns<T>
  ): UpdateRequestBuilder<LeasePaymentAmountBreakdowns<T>, T> {
    return new UpdateRequestBuilder<LeasePaymentAmountBreakdowns<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeasePaymentAmountBreakdowns`.
   * @param dataAreaId Key property. See {@link LeasePaymentAmountBreakdowns.dataAreaId}.
   * @param leaseId Key property. See {@link LeasePaymentAmountBreakdowns.leaseId}.
   * @param startDate Key property. See {@link LeasePaymentAmountBreakdowns.startDate}.
   * @param paymentAmountType Key property. See {@link LeasePaymentAmountBreakdowns.paymentAmountType}.
   * @returns A request builder for creating requests that delete an entity of type `LeasePaymentAmountBreakdowns`.
   */
  delete(
    dataAreaId: string,
    leaseId: string,
    startDate: Moment,
    paymentAmountType: string
  ): DeleteRequestBuilder<LeasePaymentAmountBreakdowns<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeasePaymentAmountBreakdowns`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeasePaymentAmountBreakdowns` by taking the entity as a parameter.
   */
  delete(
    entity: LeasePaymentAmountBreakdowns<T>
  ): DeleteRequestBuilder<LeasePaymentAmountBreakdowns<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    leaseId?: string,
    startDate?: Moment,
    paymentAmountType?: string
  ): DeleteRequestBuilder<LeasePaymentAmountBreakdowns<T>, T> {
    return new DeleteRequestBuilder<LeasePaymentAmountBreakdowns<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeasePaymentAmountBreakdowns
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LeaseId: leaseId!,
            StartDate: startDate!,
            PaymentAmountType: paymentAmountType!
          }
    );
  }
}
