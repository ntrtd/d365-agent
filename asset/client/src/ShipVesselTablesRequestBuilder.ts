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
import { ShipVesselTables } from './ShipVesselTables';

/**
 * Request builder class for operations supported on the {@link ShipVesselTables} entity.
 */
export class ShipVesselTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShipVesselTables<T>, T> {
  /**
   * Returns a request builder for querying all `ShipVesselTables` entities.
   * @returns A request builder for creating requests to retrieve all `ShipVesselTables` entities.
   */
  getAll(): GetAllRequestBuilder<ShipVesselTables<T>, T> {
    return new GetAllRequestBuilder<ShipVesselTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ShipVesselTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShipVesselTables`.
   */
  create(
    entity: ShipVesselTables<T>
  ): CreateRequestBuilder<ShipVesselTables<T>, T> {
    return new CreateRequestBuilder<ShipVesselTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ShipVesselTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShipVesselTables.dataAreaId}.
   * @param vesselId Key property. See {@link ShipVesselTables.vesselId}.
   * @returns A request builder for creating requests to retrieve one `ShipVesselTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    vesselId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShipVesselTables<T>, T> {
    return new GetByKeyRequestBuilder<ShipVesselTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      VesselId: vesselId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ShipVesselTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShipVesselTables`.
   */
  update(
    entity: ShipVesselTables<T>
  ): UpdateRequestBuilder<ShipVesselTables<T>, T> {
    return new UpdateRequestBuilder<ShipVesselTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ShipVesselTables`.
   * @param dataAreaId Key property. See {@link ShipVesselTables.dataAreaId}.
   * @param vesselId Key property. See {@link ShipVesselTables.vesselId}.
   * @returns A request builder for creating requests that delete an entity of type `ShipVesselTables`.
   */
  delete(
    dataAreaId: string,
    vesselId: string
  ): DeleteRequestBuilder<ShipVesselTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShipVesselTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShipVesselTables` by taking the entity as a parameter.
   */
  delete(
    entity: ShipVesselTables<T>
  ): DeleteRequestBuilder<ShipVesselTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    vesselId?: string
  ): DeleteRequestBuilder<ShipVesselTables<T>, T> {
    return new DeleteRequestBuilder<ShipVesselTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShipVesselTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VesselId: vesselId!
          }
    );
  }
}
