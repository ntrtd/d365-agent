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
import { ExternalWarehouseManagementSystems } from './ExternalWarehouseManagementSystems';

/**
 * Request builder class for operations supported on the {@link ExternalWarehouseManagementSystems} entity.
 */
export class ExternalWarehouseManagementSystemsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExternalWarehouseManagementSystems<T>, T> {
  /**
   * Returns a request builder for querying all `ExternalWarehouseManagementSystems` entities.
   * @returns A request builder for creating requests to retrieve all `ExternalWarehouseManagementSystems` entities.
   */
  getAll(): GetAllRequestBuilder<ExternalWarehouseManagementSystems<T>, T> {
    return new GetAllRequestBuilder<ExternalWarehouseManagementSystems<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExternalWarehouseManagementSystems` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExternalWarehouseManagementSystems`.
   */
  create(
    entity: ExternalWarehouseManagementSystems<T>
  ): CreateRequestBuilder<ExternalWarehouseManagementSystems<T>, T> {
    return new CreateRequestBuilder<ExternalWarehouseManagementSystems<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExternalWarehouseManagementSystems` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExternalWarehouseManagementSystems.dataAreaId}.
   * @param externalWarehouseManagementSystemId Key property. See {@link ExternalWarehouseManagementSystems.externalWarehouseManagementSystemId}.
   * @returns A request builder for creating requests to retrieve one `ExternalWarehouseManagementSystems` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    externalWarehouseManagementSystemId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExternalWarehouseManagementSystems<T>, T> {
    return new GetByKeyRequestBuilder<ExternalWarehouseManagementSystems<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ExternalWarehouseManagementSystemId: externalWarehouseManagementSystemId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExternalWarehouseManagementSystems`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExternalWarehouseManagementSystems`.
   */
  update(
    entity: ExternalWarehouseManagementSystems<T>
  ): UpdateRequestBuilder<ExternalWarehouseManagementSystems<T>, T> {
    return new UpdateRequestBuilder<ExternalWarehouseManagementSystems<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExternalWarehouseManagementSystems`.
   * @param dataAreaId Key property. See {@link ExternalWarehouseManagementSystems.dataAreaId}.
   * @param externalWarehouseManagementSystemId Key property. See {@link ExternalWarehouseManagementSystems.externalWarehouseManagementSystemId}.
   * @returns A request builder for creating requests that delete an entity of type `ExternalWarehouseManagementSystems`.
   */
  delete(
    dataAreaId: string,
    externalWarehouseManagementSystemId: string
  ): DeleteRequestBuilder<ExternalWarehouseManagementSystems<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExternalWarehouseManagementSystems`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExternalWarehouseManagementSystems` by taking the entity as a parameter.
   */
  delete(
    entity: ExternalWarehouseManagementSystems<T>
  ): DeleteRequestBuilder<ExternalWarehouseManagementSystems<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    externalWarehouseManagementSystemId?: string
  ): DeleteRequestBuilder<ExternalWarehouseManagementSystems<T>, T> {
    return new DeleteRequestBuilder<ExternalWarehouseManagementSystems<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ExternalWarehouseManagementSystems
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ExternalWarehouseManagementSystemId:
              externalWarehouseManagementSystemId!
          }
    );
  }
}
