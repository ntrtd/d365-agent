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
import { ProjectContracts } from './ProjectContracts';

/**
 * Request builder class for operations supported on the {@link ProjectContracts} entity.
 */
export class ProjectContractsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectContracts<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectContracts` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectContracts` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectContracts<T>, T> {
    return new GetAllRequestBuilder<ProjectContracts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjectContracts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectContracts`.
   */
  create(
    entity: ProjectContracts<T>
  ): CreateRequestBuilder<ProjectContracts<T>, T> {
    return new CreateRequestBuilder<ProjectContracts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectContracts` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectContracts.dataAreaId}.
   * @param projectContractId Key property. See {@link ProjectContracts.projectContractId}.
   * @returns A request builder for creating requests to retrieve one `ProjectContracts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projectContractId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectContracts<T>, T> {
    return new GetByKeyRequestBuilder<ProjectContracts<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ProjectContractID: projectContractId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectContracts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectContracts`.
   */
  update(
    entity: ProjectContracts<T>
  ): UpdateRequestBuilder<ProjectContracts<T>, T> {
    return new UpdateRequestBuilder<ProjectContracts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectContracts`.
   * @param dataAreaId Key property. See {@link ProjectContracts.dataAreaId}.
   * @param projectContractId Key property. See {@link ProjectContracts.projectContractId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectContracts`.
   */
  delete(
    dataAreaId: string,
    projectContractId: string
  ): DeleteRequestBuilder<ProjectContracts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectContracts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectContracts` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectContracts<T>
  ): DeleteRequestBuilder<ProjectContracts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projectContractId?: string
  ): DeleteRequestBuilder<ProjectContracts<T>, T> {
    return new DeleteRequestBuilder<ProjectContracts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectContracts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjectContractID: projectContractId!
          }
    );
  }
}
