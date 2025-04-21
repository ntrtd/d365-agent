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
import { RetailHardwareStations } from './RetailHardwareStations';

/**
 * Request builder class for operations supported on the {@link RetailHardwareStations} entity.
 */
export class RetailHardwareStationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailHardwareStations<T>, T> {
  /**
   * Returns a request builder for querying all `RetailHardwareStations` entities.
   * @returns A request builder for creating requests to retrieve all `RetailHardwareStations` entities.
   */
  getAll(): GetAllRequestBuilder<RetailHardwareStations<T>, T> {
    return new GetAllRequestBuilder<RetailHardwareStations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailHardwareStations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailHardwareStations`.
   */
  create(
    entity: RetailHardwareStations<T>
  ): CreateRequestBuilder<RetailHardwareStations<T>, T> {
    return new CreateRequestBuilder<RetailHardwareStations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailHardwareStations` entity based on its keys.
   * @param hardwareStationId Key property. See {@link RetailHardwareStations.hardwareStationId}.
   * @returns A request builder for creating requests to retrieve one `RetailHardwareStations` entity based on its keys.
   */
  getByKey(
    hardwareStationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailHardwareStations<T>, T> {
    return new GetByKeyRequestBuilder<RetailHardwareStations<T>, T>(
      this.entityApi,
      { HardwareStationId: hardwareStationId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailHardwareStations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailHardwareStations`.
   */
  update(
    entity: RetailHardwareStations<T>
  ): UpdateRequestBuilder<RetailHardwareStations<T>, T> {
    return new UpdateRequestBuilder<RetailHardwareStations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailHardwareStations`.
   * @param hardwareStationId Key property. See {@link RetailHardwareStations.hardwareStationId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailHardwareStations`.
   */
  delete(
    hardwareStationId: string
  ): DeleteRequestBuilder<RetailHardwareStations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailHardwareStations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailHardwareStations` by taking the entity as a parameter.
   */
  delete(
    entity: RetailHardwareStations<T>
  ): DeleteRequestBuilder<RetailHardwareStations<T>, T>;
  delete(
    hardwareStationIdOrEntity: any
  ): DeleteRequestBuilder<RetailHardwareStations<T>, T> {
    return new DeleteRequestBuilder<RetailHardwareStations<T>, T>(
      this.entityApi,
      hardwareStationIdOrEntity instanceof RetailHardwareStations
        ? hardwareStationIdOrEntity
        : { HardwareStationId: hardwareStationIdOrEntity! }
    );
  }
}
