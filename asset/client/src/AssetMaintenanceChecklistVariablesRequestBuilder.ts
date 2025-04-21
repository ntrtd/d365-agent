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
import { AssetMaintenanceChecklistVariables } from './AssetMaintenanceChecklistVariables';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceChecklistVariables} entity.
 */
export class AssetMaintenanceChecklistVariablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceChecklistVariables<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceChecklistVariables` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceChecklistVariables` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceChecklistVariables<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceChecklistVariables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceChecklistVariables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceChecklistVariables`.
   */
  create(
    entity: AssetMaintenanceChecklistVariables<T>
  ): CreateRequestBuilder<AssetMaintenanceChecklistVariables<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceChecklistVariables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceChecklistVariables` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceChecklistVariables.dataAreaId}.
   * @param checklistVariableId Key property. See {@link AssetMaintenanceChecklistVariables.checklistVariableId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceChecklistVariables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    checklistVariableId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceChecklistVariables<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceChecklistVariables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ChecklistVariableId: checklistVariableId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceChecklistVariables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceChecklistVariables`.
   */
  update(
    entity: AssetMaintenanceChecklistVariables<T>
  ): UpdateRequestBuilder<AssetMaintenanceChecklistVariables<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceChecklistVariables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceChecklistVariables`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceChecklistVariables.dataAreaId}.
   * @param checklistVariableId Key property. See {@link AssetMaintenanceChecklistVariables.checklistVariableId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceChecklistVariables`.
   */
  delete(
    dataAreaId: string,
    checklistVariableId: string
  ): DeleteRequestBuilder<AssetMaintenanceChecklistVariables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceChecklistVariables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceChecklistVariables` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceChecklistVariables<T>
  ): DeleteRequestBuilder<AssetMaintenanceChecklistVariables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    checklistVariableId?: string
  ): DeleteRequestBuilder<AssetMaintenanceChecklistVariables<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceChecklistVariables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceChecklistVariables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ChecklistVariableId: checklistVariableId!
          }
    );
  }
}
