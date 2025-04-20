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
import { ProjectContractLines } from './ProjectContractLines';

/**
 * Request builder class for operations supported on the {@link ProjectContractLines} entity.
 */
export class ProjectContractLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectContractLines<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectContractLines` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectContractLines` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectContractLines<T>, T> {
    return new GetAllRequestBuilder<ProjectContractLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjectContractLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectContractLines`.
   */
  create(
    entity: ProjectContractLines<T>
  ): CreateRequestBuilder<ProjectContractLines<T>, T> {
    return new CreateRequestBuilder<ProjectContractLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectContractLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectContractLines.dataAreaId}.
   * @param projectContractId Key property. See {@link ProjectContractLines.projectContractId}.
   * @param lineSequenceNumber Key property. See {@link ProjectContractLines.lineSequenceNumber}.
   * @returns A request builder for creating requests to retrieve one `ProjectContractLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projectContractId: DeserializedType<T, 'Edm.String'>,
    lineSequenceNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ProjectContractLines<T>, T> {
    return new GetByKeyRequestBuilder<ProjectContractLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProjectContractId: projectContractId,
        LineSequenceNumber: lineSequenceNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectContractLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectContractLines`.
   */
  update(
    entity: ProjectContractLines<T>
  ): UpdateRequestBuilder<ProjectContractLines<T>, T> {
    return new UpdateRequestBuilder<ProjectContractLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectContractLines`.
   * @param dataAreaId Key property. See {@link ProjectContractLines.dataAreaId}.
   * @param projectContractId Key property. See {@link ProjectContractLines.projectContractId}.
   * @param lineSequenceNumber Key property. See {@link ProjectContractLines.lineSequenceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectContractLines`.
   */
  delete(
    dataAreaId: string,
    projectContractId: string,
    lineSequenceNumber: number
  ): DeleteRequestBuilder<ProjectContractLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectContractLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectContractLines` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectContractLines<T>
  ): DeleteRequestBuilder<ProjectContractLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projectContractId?: string,
    lineSequenceNumber?: number
  ): DeleteRequestBuilder<ProjectContractLines<T>, T> {
    return new DeleteRequestBuilder<ProjectContractLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectContractLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjectContractId: projectContractId!,
            LineSequenceNumber: lineSequenceNumber!
          }
    );
  }
}
