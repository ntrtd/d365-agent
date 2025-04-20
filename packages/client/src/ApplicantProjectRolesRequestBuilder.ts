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
import { ApplicantProjectRoles } from './ApplicantProjectRoles';

/**
 * Request builder class for operations supported on the {@link ApplicantProjectRoles} entity.
 */
export class ApplicantProjectRolesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ApplicantProjectRoles<T>, T> {
  /**
   * Returns a request builder for querying all `ApplicantProjectRoles` entities.
   * @returns A request builder for creating requests to retrieve all `ApplicantProjectRoles` entities.
   */
  getAll(): GetAllRequestBuilder<ApplicantProjectRoles<T>, T> {
    return new GetAllRequestBuilder<ApplicantProjectRoles<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ApplicantProjectRoles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApplicantProjectRoles`.
   */
  create(
    entity: ApplicantProjectRoles<T>
  ): CreateRequestBuilder<ApplicantProjectRoles<T>, T> {
    return new CreateRequestBuilder<ApplicantProjectRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ApplicantProjectRoles` entity based on its keys.
   * @param dataAreaId Key property. See {@link ApplicantProjectRoles.dataAreaId}.
   * @param applicantId Key property. See {@link ApplicantProjectRoles.applicantId}.
   * @param projectId Key property. See {@link ApplicantProjectRoles.projectId}.
   * @param projectName Key property. See {@link ApplicantProjectRoles.projectName}.
   * @param role Key property. See {@link ApplicantProjectRoles.role}.
   * @param dataArea Key property. See {@link ApplicantProjectRoles.dataArea}.
   * @returns A request builder for creating requests to retrieve one `ApplicantProjectRoles` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    applicantId: DeserializedType<T, 'Edm.String'>,
    projectId: DeserializedType<T, 'Edm.String'>,
    projectName: DeserializedType<T, 'Edm.String'>,
    role: DeserializedType<T, 'Edm.String'>,
    dataArea: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ApplicantProjectRoles<T>, T> {
    return new GetByKeyRequestBuilder<ApplicantProjectRoles<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ApplicantId: applicantId,
        ProjectId: projectId,
        ProjectName: projectName,
        Role: role,
        DataArea: dataArea
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ApplicantProjectRoles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApplicantProjectRoles`.
   */
  update(
    entity: ApplicantProjectRoles<T>
  ): UpdateRequestBuilder<ApplicantProjectRoles<T>, T> {
    return new UpdateRequestBuilder<ApplicantProjectRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ApplicantProjectRoles`.
   * @param dataAreaId Key property. See {@link ApplicantProjectRoles.dataAreaId}.
   * @param applicantId Key property. See {@link ApplicantProjectRoles.applicantId}.
   * @param projectId Key property. See {@link ApplicantProjectRoles.projectId}.
   * @param projectName Key property. See {@link ApplicantProjectRoles.projectName}.
   * @param role Key property. See {@link ApplicantProjectRoles.role}.
   * @param dataArea Key property. See {@link ApplicantProjectRoles.dataArea}.
   * @returns A request builder for creating requests that delete an entity of type `ApplicantProjectRoles`.
   */
  delete(
    dataAreaId: string,
    applicantId: string,
    projectId: string,
    projectName: string,
    role: string,
    dataArea: string
  ): DeleteRequestBuilder<ApplicantProjectRoles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApplicantProjectRoles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApplicantProjectRoles` by taking the entity as a parameter.
   */
  delete(
    entity: ApplicantProjectRoles<T>
  ): DeleteRequestBuilder<ApplicantProjectRoles<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    applicantId?: string,
    projectId?: string,
    projectName?: string,
    role?: string,
    dataArea?: string
  ): DeleteRequestBuilder<ApplicantProjectRoles<T>, T> {
    return new DeleteRequestBuilder<ApplicantProjectRoles<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ApplicantProjectRoles
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ApplicantId: applicantId!,
            ProjectId: projectId!,
            ProjectName: projectName!,
            Role: role!,
            DataArea: dataArea!
          }
    );
  }
}
