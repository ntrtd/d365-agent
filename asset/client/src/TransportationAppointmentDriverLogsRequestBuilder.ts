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
import { TransportationAppointmentDriverLogs } from './TransportationAppointmentDriverLogs';

/**
 * Request builder class for operations supported on the {@link TransportationAppointmentDriverLogs} entity.
 */
export class TransportationAppointmentDriverLogsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransportationAppointmentDriverLogs<T>, T> {
  /**
   * Returns a request builder for querying all `TransportationAppointmentDriverLogs` entities.
   * @returns A request builder for creating requests to retrieve all `TransportationAppointmentDriverLogs` entities.
   */
  getAll(): GetAllRequestBuilder<TransportationAppointmentDriverLogs<T>, T> {
    return new GetAllRequestBuilder<TransportationAppointmentDriverLogs<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TransportationAppointmentDriverLogs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransportationAppointmentDriverLogs`.
   */
  create(
    entity: TransportationAppointmentDriverLogs<T>
  ): CreateRequestBuilder<TransportationAppointmentDriverLogs<T>, T> {
    return new CreateRequestBuilder<TransportationAppointmentDriverLogs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TransportationAppointmentDriverLogs` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransportationAppointmentDriverLogs.dataAreaId}.
   * @param appointmentId Key property. See {@link TransportationAppointmentDriverLogs.appointmentId}.
   * @returns A request builder for creating requests to retrieve one `TransportationAppointmentDriverLogs` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    appointmentId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TransportationAppointmentDriverLogs<T>, T> {
    return new GetByKeyRequestBuilder<
      TransportationAppointmentDriverLogs<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      AppointmentId: appointmentId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TransportationAppointmentDriverLogs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransportationAppointmentDriverLogs`.
   */
  update(
    entity: TransportationAppointmentDriverLogs<T>
  ): UpdateRequestBuilder<TransportationAppointmentDriverLogs<T>, T> {
    return new UpdateRequestBuilder<TransportationAppointmentDriverLogs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TransportationAppointmentDriverLogs`.
   * @param dataAreaId Key property. See {@link TransportationAppointmentDriverLogs.dataAreaId}.
   * @param appointmentId Key property. See {@link TransportationAppointmentDriverLogs.appointmentId}.
   * @returns A request builder for creating requests that delete an entity of type `TransportationAppointmentDriverLogs`.
   */
  delete(
    dataAreaId: string,
    appointmentId: string
  ): DeleteRequestBuilder<TransportationAppointmentDriverLogs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransportationAppointmentDriverLogs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransportationAppointmentDriverLogs` by taking the entity as a parameter.
   */
  delete(
    entity: TransportationAppointmentDriverLogs<T>
  ): DeleteRequestBuilder<TransportationAppointmentDriverLogs<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    appointmentId?: string
  ): DeleteRequestBuilder<TransportationAppointmentDriverLogs<T>, T> {
    return new DeleteRequestBuilder<TransportationAppointmentDriverLogs<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransportationAppointmentDriverLogs
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AppointmentId: appointmentId!
          }
    );
  }
}
