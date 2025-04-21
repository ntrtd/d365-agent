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
import { ShipPortTables } from './ShipPortTables';

/**
 * Request builder class for operations supported on the {@link ShipPortTables} entity.
 */
export class ShipPortTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShipPortTables<T>, T> {
  /**
   * Returns a request builder for querying all `ShipPortTables` entities.
   * @returns A request builder for creating requests to retrieve all `ShipPortTables` entities.
   */
  getAll(): GetAllRequestBuilder<ShipPortTables<T>, T> {
    return new GetAllRequestBuilder<ShipPortTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ShipPortTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShipPortTables`.
   */
  create(
    entity: ShipPortTables<T>
  ): CreateRequestBuilder<ShipPortTables<T>, T> {
    return new CreateRequestBuilder<ShipPortTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ShipPortTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShipPortTables.dataAreaId}.
   * @param portId Key property. See {@link ShipPortTables.portId}.
   * @returns A request builder for creating requests to retrieve one `ShipPortTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    portId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShipPortTables<T>, T> {
    return new GetByKeyRequestBuilder<ShipPortTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      PortId: portId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ShipPortTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShipPortTables`.
   */
  update(
    entity: ShipPortTables<T>
  ): UpdateRequestBuilder<ShipPortTables<T>, T> {
    return new UpdateRequestBuilder<ShipPortTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ShipPortTables`.
   * @param dataAreaId Key property. See {@link ShipPortTables.dataAreaId}.
   * @param portId Key property. See {@link ShipPortTables.portId}.
   * @returns A request builder for creating requests that delete an entity of type `ShipPortTables`.
   */
  delete(
    dataAreaId: string,
    portId: string
  ): DeleteRequestBuilder<ShipPortTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShipPortTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShipPortTables` by taking the entity as a parameter.
   */
  delete(entity: ShipPortTables<T>): DeleteRequestBuilder<ShipPortTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    portId?: string
  ): DeleteRequestBuilder<ShipPortTables<T>, T> {
    return new DeleteRequestBuilder<ShipPortTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShipPortTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PortId: portId!
          }
    );
  }
}
