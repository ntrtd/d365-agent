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
import { ShipExporterTables } from './ShipExporterTables';

/**
 * Request builder class for operations supported on the {@link ShipExporterTables} entity.
 */
export class ShipExporterTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShipExporterTables<T>, T> {
  /**
   * Returns a request builder for querying all `ShipExporterTables` entities.
   * @returns A request builder for creating requests to retrieve all `ShipExporterTables` entities.
   */
  getAll(): GetAllRequestBuilder<ShipExporterTables<T>, T> {
    return new GetAllRequestBuilder<ShipExporterTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ShipExporterTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShipExporterTables`.
   */
  create(
    entity: ShipExporterTables<T>
  ): CreateRequestBuilder<ShipExporterTables<T>, T> {
    return new CreateRequestBuilder<ShipExporterTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ShipExporterTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShipExporterTables.dataAreaId}.
   * @param exporterId Key property. See {@link ShipExporterTables.exporterId}.
   * @returns A request builder for creating requests to retrieve one `ShipExporterTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    exporterId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShipExporterTables<T>, T> {
    return new GetByKeyRequestBuilder<ShipExporterTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ExporterId: exporterId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ShipExporterTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShipExporterTables`.
   */
  update(
    entity: ShipExporterTables<T>
  ): UpdateRequestBuilder<ShipExporterTables<T>, T> {
    return new UpdateRequestBuilder<ShipExporterTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ShipExporterTables`.
   * @param dataAreaId Key property. See {@link ShipExporterTables.dataAreaId}.
   * @param exporterId Key property. See {@link ShipExporterTables.exporterId}.
   * @returns A request builder for creating requests that delete an entity of type `ShipExporterTables`.
   */
  delete(
    dataAreaId: string,
    exporterId: string
  ): DeleteRequestBuilder<ShipExporterTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShipExporterTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShipExporterTables` by taking the entity as a parameter.
   */
  delete(
    entity: ShipExporterTables<T>
  ): DeleteRequestBuilder<ShipExporterTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    exporterId?: string
  ): DeleteRequestBuilder<ShipExporterTables<T>, T> {
    return new DeleteRequestBuilder<ShipExporterTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShipExporterTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ExporterId: exporterId!
          }
    );
  }
}
