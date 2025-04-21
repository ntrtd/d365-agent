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
import { DataManagementExecutionJobDetails } from './DataManagementExecutionJobDetails';

/**
 * Request builder class for operations supported on the {@link DataManagementExecutionJobDetails} entity.
 */
export class DataManagementExecutionJobDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DataManagementExecutionJobDetails<T>, T> {
  /**
   * Returns a request builder for querying all `DataManagementExecutionJobDetails` entities.
   * @returns A request builder for creating requests to retrieve all `DataManagementExecutionJobDetails` entities.
   */
  getAll(): GetAllRequestBuilder<DataManagementExecutionJobDetails<T>, T> {
    return new GetAllRequestBuilder<DataManagementExecutionJobDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DataManagementExecutionJobDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DataManagementExecutionJobDetails`.
   */
  create(
    entity: DataManagementExecutionJobDetails<T>
  ): CreateRequestBuilder<DataManagementExecutionJobDetails<T>, T> {
    return new CreateRequestBuilder<DataManagementExecutionJobDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DataManagementExecutionJobDetails` entity based on its keys.
   * @param definitionGroupId Key property. See {@link DataManagementExecutionJobDetails.definitionGroupId}.
   * @param jobId Key property. See {@link DataManagementExecutionJobDetails.jobId}.
   * @param entityName Key property. See {@link DataManagementExecutionJobDetails.entityName}.
   * @returns A request builder for creating requests to retrieve one `DataManagementExecutionJobDetails` entity based on its keys.
   */
  getByKey(
    definitionGroupId: DeserializedType<T, 'Edm.String'>,
    jobId: DeserializedType<T, 'Edm.String'>,
    entityName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DataManagementExecutionJobDetails<T>, T> {
    return new GetByKeyRequestBuilder<DataManagementExecutionJobDetails<T>, T>(
      this.entityApi,
      {
        DefinitionGroupId: definitionGroupId,
        JobId: jobId,
        EntityName: entityName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DataManagementExecutionJobDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DataManagementExecutionJobDetails`.
   */
  update(
    entity: DataManagementExecutionJobDetails<T>
  ): UpdateRequestBuilder<DataManagementExecutionJobDetails<T>, T> {
    return new UpdateRequestBuilder<DataManagementExecutionJobDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DataManagementExecutionJobDetails`.
   * @param definitionGroupId Key property. See {@link DataManagementExecutionJobDetails.definitionGroupId}.
   * @param jobId Key property. See {@link DataManagementExecutionJobDetails.jobId}.
   * @param entityName Key property. See {@link DataManagementExecutionJobDetails.entityName}.
   * @returns A request builder for creating requests that delete an entity of type `DataManagementExecutionJobDetails`.
   */
  delete(
    definitionGroupId: string,
    jobId: string,
    entityName: string
  ): DeleteRequestBuilder<DataManagementExecutionJobDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DataManagementExecutionJobDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DataManagementExecutionJobDetails` by taking the entity as a parameter.
   */
  delete(
    entity: DataManagementExecutionJobDetails<T>
  ): DeleteRequestBuilder<DataManagementExecutionJobDetails<T>, T>;
  delete(
    definitionGroupIdOrEntity: any,
    jobId?: string,
    entityName?: string
  ): DeleteRequestBuilder<DataManagementExecutionJobDetails<T>, T> {
    return new DeleteRequestBuilder<DataManagementExecutionJobDetails<T>, T>(
      this.entityApi,
      definitionGroupIdOrEntity instanceof DataManagementExecutionJobDetails
        ? definitionGroupIdOrEntity
        : {
            DefinitionGroupId: definitionGroupIdOrEntity!,
            JobId: jobId!,
            EntityName: entityName!
          }
    );
  }
}
