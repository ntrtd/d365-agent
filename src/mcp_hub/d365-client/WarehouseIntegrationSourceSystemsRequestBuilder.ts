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
import { WarehouseIntegrationSourceSystems } from './WarehouseIntegrationSourceSystems';

/**
 * Request builder class for operations supported on the {@link WarehouseIntegrationSourceSystems} entity.
 */
export class WarehouseIntegrationSourceSystemsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WarehouseIntegrationSourceSystems<T>, T> {
  /**
   * Returns a request builder for querying all `WarehouseIntegrationSourceSystems` entities.
   * @returns A request builder for creating requests to retrieve all `WarehouseIntegrationSourceSystems` entities.
   */
  getAll(): GetAllRequestBuilder<WarehouseIntegrationSourceSystems<T>, T> {
    return new GetAllRequestBuilder<WarehouseIntegrationSourceSystems<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WarehouseIntegrationSourceSystems` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehouseIntegrationSourceSystems`.
   */
  create(
    entity: WarehouseIntegrationSourceSystems<T>
  ): CreateRequestBuilder<WarehouseIntegrationSourceSystems<T>, T> {
    return new CreateRequestBuilder<WarehouseIntegrationSourceSystems<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WarehouseIntegrationSourceSystems` entity based on its keys.
   * @param dataAreaId Key property. See {@link WarehouseIntegrationSourceSystems.dataAreaId}.
   * @param sourceSystemId Key property. See {@link WarehouseIntegrationSourceSystems.sourceSystemId}.
   * @returns A request builder for creating requests to retrieve one `WarehouseIntegrationSourceSystems` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceSystemId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WarehouseIntegrationSourceSystems<T>, T> {
    return new GetByKeyRequestBuilder<WarehouseIntegrationSourceSystems<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceSystemId: sourceSystemId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WarehouseIntegrationSourceSystems`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehouseIntegrationSourceSystems`.
   */
  update(
    entity: WarehouseIntegrationSourceSystems<T>
  ): UpdateRequestBuilder<WarehouseIntegrationSourceSystems<T>, T> {
    return new UpdateRequestBuilder<WarehouseIntegrationSourceSystems<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehouseIntegrationSourceSystems`.
   * @param dataAreaId Key property. See {@link WarehouseIntegrationSourceSystems.dataAreaId}.
   * @param sourceSystemId Key property. See {@link WarehouseIntegrationSourceSystems.sourceSystemId}.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseIntegrationSourceSystems`.
   */
  delete(
    dataAreaId: string,
    sourceSystemId: string
  ): DeleteRequestBuilder<WarehouseIntegrationSourceSystems<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WarehouseIntegrationSourceSystems`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseIntegrationSourceSystems` by taking the entity as a parameter.
   */
  delete(
    entity: WarehouseIntegrationSourceSystems<T>
  ): DeleteRequestBuilder<WarehouseIntegrationSourceSystems<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceSystemId?: string
  ): DeleteRequestBuilder<WarehouseIntegrationSourceSystems<T>, T> {
    return new DeleteRequestBuilder<WarehouseIntegrationSourceSystems<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WarehouseIntegrationSourceSystems
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceSystemId: sourceSystemId!
          }
    );
  }
}
