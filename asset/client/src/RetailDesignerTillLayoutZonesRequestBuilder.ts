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
import { RetailDesignerTillLayoutZones } from './RetailDesignerTillLayoutZones';

/**
 * Request builder class for operations supported on the {@link RetailDesignerTillLayoutZones} entity.
 */
export class RetailDesignerTillLayoutZonesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailDesignerTillLayoutZones<T>, T> {
  /**
   * Returns a request builder for querying all `RetailDesignerTillLayoutZones` entities.
   * @returns A request builder for creating requests to retrieve all `RetailDesignerTillLayoutZones` entities.
   */
  getAll(): GetAllRequestBuilder<RetailDesignerTillLayoutZones<T>, T> {
    return new GetAllRequestBuilder<RetailDesignerTillLayoutZones<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailDesignerTillLayoutZones` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailDesignerTillLayoutZones`.
   */
  create(
    entity: RetailDesignerTillLayoutZones<T>
  ): CreateRequestBuilder<RetailDesignerTillLayoutZones<T>, T> {
    return new CreateRequestBuilder<RetailDesignerTillLayoutZones<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailDesignerTillLayoutZones` entity based on its keys.
   * @param zoneId Key property. See {@link RetailDesignerTillLayoutZones.zoneId}.
   * @param zoneName Key property. See {@link RetailDesignerTillLayoutZones.zoneName}.
   * @returns A request builder for creating requests to retrieve one `RetailDesignerTillLayoutZones` entity based on its keys.
   */
  getByKey(
    zoneId: DeserializedType<T, 'Edm.String'>,
    zoneName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailDesignerTillLayoutZones<T>, T> {
    return new GetByKeyRequestBuilder<RetailDesignerTillLayoutZones<T>, T>(
      this.entityApi,
      {
        ZoneId: zoneId,
        ZoneName: zoneName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailDesignerTillLayoutZones`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailDesignerTillLayoutZones`.
   */
  update(
    entity: RetailDesignerTillLayoutZones<T>
  ): UpdateRequestBuilder<RetailDesignerTillLayoutZones<T>, T> {
    return new UpdateRequestBuilder<RetailDesignerTillLayoutZones<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailDesignerTillLayoutZones`.
   * @param zoneId Key property. See {@link RetailDesignerTillLayoutZones.zoneId}.
   * @param zoneName Key property. See {@link RetailDesignerTillLayoutZones.zoneName}.
   * @returns A request builder for creating requests that delete an entity of type `RetailDesignerTillLayoutZones`.
   */
  delete(
    zoneId: string,
    zoneName: string
  ): DeleteRequestBuilder<RetailDesignerTillLayoutZones<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailDesignerTillLayoutZones`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailDesignerTillLayoutZones` by taking the entity as a parameter.
   */
  delete(
    entity: RetailDesignerTillLayoutZones<T>
  ): DeleteRequestBuilder<RetailDesignerTillLayoutZones<T>, T>;
  delete(
    zoneIdOrEntity: any,
    zoneName?: string
  ): DeleteRequestBuilder<RetailDesignerTillLayoutZones<T>, T> {
    return new DeleteRequestBuilder<RetailDesignerTillLayoutZones<T>, T>(
      this.entityApi,
      zoneIdOrEntity instanceof RetailDesignerTillLayoutZones
        ? zoneIdOrEntity
        : {
            ZoneId: zoneIdOrEntity!,
            ZoneName: zoneName!
          }
    );
  }
}
