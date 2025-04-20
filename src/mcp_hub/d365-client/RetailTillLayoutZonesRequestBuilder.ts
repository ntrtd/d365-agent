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
import { RetailTillLayoutZones } from './RetailTillLayoutZones';
import { RetailZoneType } from './RetailZoneType';

/**
 * Request builder class for operations supported on the {@link RetailTillLayoutZones} entity.
 */
export class RetailTillLayoutZonesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTillLayoutZones<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTillLayoutZones` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTillLayoutZones` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTillLayoutZones<T>, T> {
    return new GetAllRequestBuilder<RetailTillLayoutZones<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTillLayoutZones` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTillLayoutZones`.
   */
  create(
    entity: RetailTillLayoutZones<T>
  ): CreateRequestBuilder<RetailTillLayoutZones<T>, T> {
    return new CreateRequestBuilder<RetailTillLayoutZones<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTillLayoutZones` entity based on its keys.
   * @param deviceType Key property. See {@link RetailTillLayoutZones.deviceType}.
   * @param zoneType Key property. See {@link RetailTillLayoutZones.zoneType}.
   * @param zoneId Key property. See {@link RetailTillLayoutZones.zoneId}.
   * @returns A request builder for creating requests to retrieve one `RetailTillLayoutZones` entity based on its keys.
   */
  getByKey(
    deviceType: DeserializedType<T, 'Edm.Int32'>,
    zoneType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailZoneType'
    >,
    zoneId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTillLayoutZones<T>, T> {
    return new GetByKeyRequestBuilder<RetailTillLayoutZones<T>, T>(
      this.entityApi,
      {
        DeviceType: deviceType,
        ZoneType: zoneType,
        ZoneId: zoneId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTillLayoutZones`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTillLayoutZones`.
   */
  update(
    entity: RetailTillLayoutZones<T>
  ): UpdateRequestBuilder<RetailTillLayoutZones<T>, T> {
    return new UpdateRequestBuilder<RetailTillLayoutZones<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTillLayoutZones`.
   * @param deviceType Key property. See {@link RetailTillLayoutZones.deviceType}.
   * @param zoneType Key property. See {@link RetailTillLayoutZones.zoneType}.
   * @param zoneId Key property. See {@link RetailTillLayoutZones.zoneId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTillLayoutZones`.
   */
  delete(
    deviceType: number,
    zoneType: RetailZoneType,
    zoneId: string
  ): DeleteRequestBuilder<RetailTillLayoutZones<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTillLayoutZones`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTillLayoutZones` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTillLayoutZones<T>
  ): DeleteRequestBuilder<RetailTillLayoutZones<T>, T>;
  delete(
    deviceTypeOrEntity: any,
    zoneType?: RetailZoneType,
    zoneId?: string
  ): DeleteRequestBuilder<RetailTillLayoutZones<T>, T> {
    return new DeleteRequestBuilder<RetailTillLayoutZones<T>, T>(
      this.entityApi,
      deviceTypeOrEntity instanceof RetailTillLayoutZones
        ? deviceTypeOrEntity
        : {
            DeviceType: deviceTypeOrEntity!,
            ZoneType: zoneType!,
            ZoneId: zoneId!
          }
    );
  }
}
