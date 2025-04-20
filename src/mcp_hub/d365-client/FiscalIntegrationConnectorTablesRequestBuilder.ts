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
import { FiscalIntegrationConnectorTables } from './FiscalIntegrationConnectorTables';

/**
 * Request builder class for operations supported on the {@link FiscalIntegrationConnectorTables} entity.
 */
export class FiscalIntegrationConnectorTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalIntegrationConnectorTables<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalIntegrationConnectorTables` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalIntegrationConnectorTables` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalIntegrationConnectorTables<T>, T> {
    return new GetAllRequestBuilder<FiscalIntegrationConnectorTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FiscalIntegrationConnectorTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalIntegrationConnectorTables`.
   */
  create(
    entity: FiscalIntegrationConnectorTables<T>
  ): CreateRequestBuilder<FiscalIntegrationConnectorTables<T>, T> {
    return new CreateRequestBuilder<FiscalIntegrationConnectorTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FiscalIntegrationConnectorTables` entity based on its keys.
   * @param connectorName Key property. See {@link FiscalIntegrationConnectorTables.connectorName}.
   * @returns A request builder for creating requests to retrieve one `FiscalIntegrationConnectorTables` entity based on its keys.
   */
  getByKey(
    connectorName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalIntegrationConnectorTables<T>, T> {
    return new GetByKeyRequestBuilder<FiscalIntegrationConnectorTables<T>, T>(
      this.entityApi,
      { ConnectorName: connectorName }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalIntegrationConnectorTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalIntegrationConnectorTables`.
   */
  update(
    entity: FiscalIntegrationConnectorTables<T>
  ): UpdateRequestBuilder<FiscalIntegrationConnectorTables<T>, T> {
    return new UpdateRequestBuilder<FiscalIntegrationConnectorTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalIntegrationConnectorTables`.
   * @param connectorName Key property. See {@link FiscalIntegrationConnectorTables.connectorName}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalIntegrationConnectorTables`.
   */
  delete(
    connectorName: string
  ): DeleteRequestBuilder<FiscalIntegrationConnectorTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalIntegrationConnectorTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalIntegrationConnectorTables` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalIntegrationConnectorTables<T>
  ): DeleteRequestBuilder<FiscalIntegrationConnectorTables<T>, T>;
  delete(
    connectorNameOrEntity: any
  ): DeleteRequestBuilder<FiscalIntegrationConnectorTables<T>, T> {
    return new DeleteRequestBuilder<FiscalIntegrationConnectorTables<T>, T>(
      this.entityApi,
      connectorNameOrEntity instanceof FiscalIntegrationConnectorTables
        ? connectorNameOrEntity
        : { ConnectorName: connectorNameOrEntity! }
    );
  }
}
