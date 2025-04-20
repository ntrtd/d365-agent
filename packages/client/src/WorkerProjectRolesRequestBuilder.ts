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
import { WorkerProjectRoles } from './WorkerProjectRoles';

/**
 * Request builder class for operations supported on the {@link WorkerProjectRoles} entity.
 */
export class WorkerProjectRolesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerProjectRoles<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerProjectRoles` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerProjectRoles` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerProjectRoles<T>, T> {
    return new GetAllRequestBuilder<WorkerProjectRoles<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkerProjectRoles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerProjectRoles`.
   */
  create(
    entity: WorkerProjectRoles<T>
  ): CreateRequestBuilder<WorkerProjectRoles<T>, T> {
    return new CreateRequestBuilder<WorkerProjectRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerProjectRoles` entity based on its keys.
   * @param dataAreaId Key property. See {@link WorkerProjectRoles.dataAreaId}.
   * @param personnelNumber Key property. See {@link WorkerProjectRoles.personnelNumber}.
   * @param projectId Key property. See {@link WorkerProjectRoles.projectId}.
   * @param projectName Key property. See {@link WorkerProjectRoles.projectName}.
   * @param role Key property. See {@link WorkerProjectRoles.role}.
   * @param dataArea Key property. See {@link WorkerProjectRoles.dataArea}.
   * @returns A request builder for creating requests to retrieve one `WorkerProjectRoles` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    projectId: DeserializedType<T, 'Edm.String'>,
    projectName: DeserializedType<T, 'Edm.String'>,
    role: DeserializedType<T, 'Edm.String'>,
    dataArea: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkerProjectRoles<T>, T> {
    return new GetByKeyRequestBuilder<WorkerProjectRoles<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PersonnelNumber: personnelNumber,
        ProjectId: projectId,
        ProjectName: projectName,
        Role: role,
        DataArea: dataArea
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerProjectRoles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerProjectRoles`.
   */
  update(
    entity: WorkerProjectRoles<T>
  ): UpdateRequestBuilder<WorkerProjectRoles<T>, T> {
    return new UpdateRequestBuilder<WorkerProjectRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerProjectRoles`.
   * @param dataAreaId Key property. See {@link WorkerProjectRoles.dataAreaId}.
   * @param personnelNumber Key property. See {@link WorkerProjectRoles.personnelNumber}.
   * @param projectId Key property. See {@link WorkerProjectRoles.projectId}.
   * @param projectName Key property. See {@link WorkerProjectRoles.projectName}.
   * @param role Key property. See {@link WorkerProjectRoles.role}.
   * @param dataArea Key property. See {@link WorkerProjectRoles.dataArea}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerProjectRoles`.
   */
  delete(
    dataAreaId: string,
    personnelNumber: string,
    projectId: string,
    projectName: string,
    role: string,
    dataArea: string
  ): DeleteRequestBuilder<WorkerProjectRoles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerProjectRoles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerProjectRoles` by taking the entity as a parameter.
   */
  delete(
    entity: WorkerProjectRoles<T>
  ): DeleteRequestBuilder<WorkerProjectRoles<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    personnelNumber?: string,
    projectId?: string,
    projectName?: string,
    role?: string,
    dataArea?: string
  ): DeleteRequestBuilder<WorkerProjectRoles<T>, T> {
    return new DeleteRequestBuilder<WorkerProjectRoles<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WorkerProjectRoles
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PersonnelNumber: personnelNumber!,
            ProjectId: projectId!,
            ProjectName: projectName!,
            Role: role!,
            DataArea: dataArea!
          }
    );
  }
}
