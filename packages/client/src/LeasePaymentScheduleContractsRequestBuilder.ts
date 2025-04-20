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
import { LeasePaymentScheduleContracts } from './LeasePaymentScheduleContracts';

/**
 * Request builder class for operations supported on the {@link LeasePaymentScheduleContracts} entity.
 */
export class LeasePaymentScheduleContractsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeasePaymentScheduleContracts<T>, T> {
  /**
   * Returns a request builder for querying all `LeasePaymentScheduleContracts` entities.
   * @returns A request builder for creating requests to retrieve all `LeasePaymentScheduleContracts` entities.
   */
  getAll(): GetAllRequestBuilder<LeasePaymentScheduleContracts<T>, T> {
    return new GetAllRequestBuilder<LeasePaymentScheduleContracts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeasePaymentScheduleContracts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeasePaymentScheduleContracts`.
   */
  create(
    entity: LeasePaymentScheduleContracts<T>
  ): CreateRequestBuilder<LeasePaymentScheduleContracts<T>, T> {
    return new CreateRequestBuilder<LeasePaymentScheduleContracts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeasePaymentScheduleContracts` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeasePaymentScheduleContracts.dataAreaId}.
   * @param leaseId Key property. See {@link LeasePaymentScheduleContracts.leaseId}.
   * @param startDate Key property. See {@link LeasePaymentScheduleContracts.startDate}.
   * @returns A request builder for creating requests to retrieve one `LeasePaymentScheduleContracts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    leaseId: DeserializedType<T, 'Edm.String'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<LeasePaymentScheduleContracts<T>, T> {
    return new GetByKeyRequestBuilder<LeasePaymentScheduleContracts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LeaseId: leaseId,
        StartDate: startDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeasePaymentScheduleContracts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeasePaymentScheduleContracts`.
   */
  update(
    entity: LeasePaymentScheduleContracts<T>
  ): UpdateRequestBuilder<LeasePaymentScheduleContracts<T>, T> {
    return new UpdateRequestBuilder<LeasePaymentScheduleContracts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeasePaymentScheduleContracts`.
   * @param dataAreaId Key property. See {@link LeasePaymentScheduleContracts.dataAreaId}.
   * @param leaseId Key property. See {@link LeasePaymentScheduleContracts.leaseId}.
   * @param startDate Key property. See {@link LeasePaymentScheduleContracts.startDate}.
   * @returns A request builder for creating requests that delete an entity of type `LeasePaymentScheduleContracts`.
   */
  delete(
    dataAreaId: string,
    leaseId: string,
    startDate: Moment
  ): DeleteRequestBuilder<LeasePaymentScheduleContracts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeasePaymentScheduleContracts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeasePaymentScheduleContracts` by taking the entity as a parameter.
   */
  delete(
    entity: LeasePaymentScheduleContracts<T>
  ): DeleteRequestBuilder<LeasePaymentScheduleContracts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    leaseId?: string,
    startDate?: Moment
  ): DeleteRequestBuilder<LeasePaymentScheduleContracts<T>, T> {
    return new DeleteRequestBuilder<LeasePaymentScheduleContracts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeasePaymentScheduleContracts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LeaseId: leaseId!,
            StartDate: startDate!
          }
    );
  }
}
