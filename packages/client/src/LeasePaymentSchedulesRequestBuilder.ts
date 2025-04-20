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
import { LeasePaymentSchedules } from './LeasePaymentSchedules';

/**
 * Request builder class for operations supported on the {@link LeasePaymentSchedules} entity.
 */
export class LeasePaymentSchedulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeasePaymentSchedules<T>, T> {
  /**
   * Returns a request builder for querying all `LeasePaymentSchedules` entities.
   * @returns A request builder for creating requests to retrieve all `LeasePaymentSchedules` entities.
   */
  getAll(): GetAllRequestBuilder<LeasePaymentSchedules<T>, T> {
    return new GetAllRequestBuilder<LeasePaymentSchedules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeasePaymentSchedules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeasePaymentSchedules`.
   */
  create(
    entity: LeasePaymentSchedules<T>
  ): CreateRequestBuilder<LeasePaymentSchedules<T>, T> {
    return new CreateRequestBuilder<LeasePaymentSchedules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeasePaymentSchedules` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeasePaymentSchedules.dataAreaId}.
   * @param transDate Key property. See {@link LeasePaymentSchedules.transDate}.
   * @param leaseId Key property. See {@link LeasePaymentSchedules.leaseId}.
   * @returns A request builder for creating requests to retrieve one `LeasePaymentSchedules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    leaseId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LeasePaymentSchedules<T>, T> {
    return new GetByKeyRequestBuilder<LeasePaymentSchedules<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransDate: transDate,
        LeaseId: leaseId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeasePaymentSchedules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeasePaymentSchedules`.
   */
  update(
    entity: LeasePaymentSchedules<T>
  ): UpdateRequestBuilder<LeasePaymentSchedules<T>, T> {
    return new UpdateRequestBuilder<LeasePaymentSchedules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeasePaymentSchedules`.
   * @param dataAreaId Key property. See {@link LeasePaymentSchedules.dataAreaId}.
   * @param transDate Key property. See {@link LeasePaymentSchedules.transDate}.
   * @param leaseId Key property. See {@link LeasePaymentSchedules.leaseId}.
   * @returns A request builder for creating requests that delete an entity of type `LeasePaymentSchedules`.
   */
  delete(
    dataAreaId: string,
    transDate: Moment,
    leaseId: string
  ): DeleteRequestBuilder<LeasePaymentSchedules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeasePaymentSchedules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeasePaymentSchedules` by taking the entity as a parameter.
   */
  delete(
    entity: LeasePaymentSchedules<T>
  ): DeleteRequestBuilder<LeasePaymentSchedules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transDate?: Moment,
    leaseId?: string
  ): DeleteRequestBuilder<LeasePaymentSchedules<T>, T> {
    return new DeleteRequestBuilder<LeasePaymentSchedules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeasePaymentSchedules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransDate: transDate!,
            LeaseId: leaseId!
          }
    );
  }
}
