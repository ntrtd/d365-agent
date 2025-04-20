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
import { TransportationAppointments } from './TransportationAppointments';

/**
 * Request builder class for operations supported on the {@link TransportationAppointments} entity.
 */
export class TransportationAppointmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransportationAppointments<T>, T> {
  /**
   * Returns a request builder for querying all `TransportationAppointments` entities.
   * @returns A request builder for creating requests to retrieve all `TransportationAppointments` entities.
   */
  getAll(): GetAllRequestBuilder<TransportationAppointments<T>, T> {
    return new GetAllRequestBuilder<TransportationAppointments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TransportationAppointments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransportationAppointments`.
   */
  create(
    entity: TransportationAppointments<T>
  ): CreateRequestBuilder<TransportationAppointments<T>, T> {
    return new CreateRequestBuilder<TransportationAppointments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TransportationAppointments` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransportationAppointments.dataAreaId}.
   * @param appointmentId Key property. See {@link TransportationAppointments.appointmentId}.
   * @returns A request builder for creating requests to retrieve one `TransportationAppointments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    appointmentId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TransportationAppointments<T>, T> {
    return new GetByKeyRequestBuilder<TransportationAppointments<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AppointmentId: appointmentId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TransportationAppointments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransportationAppointments`.
   */
  update(
    entity: TransportationAppointments<T>
  ): UpdateRequestBuilder<TransportationAppointments<T>, T> {
    return new UpdateRequestBuilder<TransportationAppointments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TransportationAppointments`.
   * @param dataAreaId Key property. See {@link TransportationAppointments.dataAreaId}.
   * @param appointmentId Key property. See {@link TransportationAppointments.appointmentId}.
   * @returns A request builder for creating requests that delete an entity of type `TransportationAppointments`.
   */
  delete(
    dataAreaId: string,
    appointmentId: string
  ): DeleteRequestBuilder<TransportationAppointments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransportationAppointments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransportationAppointments` by taking the entity as a parameter.
   */
  delete(
    entity: TransportationAppointments<T>
  ): DeleteRequestBuilder<TransportationAppointments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    appointmentId?: string
  ): DeleteRequestBuilder<TransportationAppointments<T>, T> {
    return new DeleteRequestBuilder<TransportationAppointments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransportationAppointments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AppointmentId: appointmentId!
          }
    );
  }
}
