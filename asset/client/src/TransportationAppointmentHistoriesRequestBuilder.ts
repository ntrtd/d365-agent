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
import { TransportationAppointmentHistories } from './TransportationAppointmentHistories';

/**
 * Request builder class for operations supported on the {@link TransportationAppointmentHistories} entity.
 */
export class TransportationAppointmentHistoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransportationAppointmentHistories<T>, T> {
  /**
   * Returns a request builder for querying all `TransportationAppointmentHistories` entities.
   * @returns A request builder for creating requests to retrieve all `TransportationAppointmentHistories` entities.
   */
  getAll(): GetAllRequestBuilder<TransportationAppointmentHistories<T>, T> {
    return new GetAllRequestBuilder<TransportationAppointmentHistories<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TransportationAppointmentHistories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransportationAppointmentHistories`.
   */
  create(
    entity: TransportationAppointmentHistories<T>
  ): CreateRequestBuilder<TransportationAppointmentHistories<T>, T> {
    return new CreateRequestBuilder<TransportationAppointmentHistories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TransportationAppointmentHistories` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransportationAppointmentHistories.dataAreaId}.
   * @param appointmentId Key property. See {@link TransportationAppointmentHistories.appointmentId}.
   * @param transportationAppointmentHistoryEntryNumber Key property. See {@link TransportationAppointmentHistories.transportationAppointmentHistoryEntryNumber}.
   * @returns A request builder for creating requests to retrieve one `TransportationAppointmentHistories` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    appointmentId: DeserializedType<T, 'Edm.String'>,
    transportationAppointmentHistoryEntryNumber: DeserializedType<
      T,
      'Edm.Int64'
    >
  ): GetByKeyRequestBuilder<TransportationAppointmentHistories<T>, T> {
    return new GetByKeyRequestBuilder<TransportationAppointmentHistories<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AppointmentId: appointmentId,
        TransportationAppointmentHistoryEntryNumber:
          transportationAppointmentHistoryEntryNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TransportationAppointmentHistories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransportationAppointmentHistories`.
   */
  update(
    entity: TransportationAppointmentHistories<T>
  ): UpdateRequestBuilder<TransportationAppointmentHistories<T>, T> {
    return new UpdateRequestBuilder<TransportationAppointmentHistories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TransportationAppointmentHistories`.
   * @param dataAreaId Key property. See {@link TransportationAppointmentHistories.dataAreaId}.
   * @param appointmentId Key property. See {@link TransportationAppointmentHistories.appointmentId}.
   * @param transportationAppointmentHistoryEntryNumber Key property. See {@link TransportationAppointmentHistories.transportationAppointmentHistoryEntryNumber}.
   * @returns A request builder for creating requests that delete an entity of type `TransportationAppointmentHistories`.
   */
  delete(
    dataAreaId: string,
    appointmentId: string,
    transportationAppointmentHistoryEntryNumber: BigNumber
  ): DeleteRequestBuilder<TransportationAppointmentHistories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransportationAppointmentHistories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransportationAppointmentHistories` by taking the entity as a parameter.
   */
  delete(
    entity: TransportationAppointmentHistories<T>
  ): DeleteRequestBuilder<TransportationAppointmentHistories<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    appointmentId?: string,
    transportationAppointmentHistoryEntryNumber?: BigNumber
  ): DeleteRequestBuilder<TransportationAppointmentHistories<T>, T> {
    return new DeleteRequestBuilder<TransportationAppointmentHistories<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransportationAppointmentHistories
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AppointmentId: appointmentId!,
            TransportationAppointmentHistoryEntryNumber:
              transportationAppointmentHistoryEntryNumber!
          }
    );
  }
}
