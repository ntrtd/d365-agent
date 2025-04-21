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
import { PersonProjectRoles } from './PersonProjectRoles';

/**
 * Request builder class for operations supported on the {@link PersonProjectRoles} entity.
 */
export class PersonProjectRolesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PersonProjectRoles<T>, T> {
  /**
   * Returns a request builder for querying all `PersonProjectRoles` entities.
   * @returns A request builder for creating requests to retrieve all `PersonProjectRoles` entities.
   */
  getAll(): GetAllRequestBuilder<PersonProjectRoles<T>, T> {
    return new GetAllRequestBuilder<PersonProjectRoles<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PersonProjectRoles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PersonProjectRoles`.
   */
  create(
    entity: PersonProjectRoles<T>
  ): CreateRequestBuilder<PersonProjectRoles<T>, T> {
    return new CreateRequestBuilder<PersonProjectRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PersonProjectRoles` entity based on its keys.
   * @param partyNumber Key property. See {@link PersonProjectRoles.partyNumber}.
   * @param projectName Key property. See {@link PersonProjectRoles.projectName}.
   * @param role Key property. See {@link PersonProjectRoles.role}.
   * @param projectId Key property. See {@link PersonProjectRoles.projectId}.
   * @param dataArea Key property. See {@link PersonProjectRoles.dataArea}.
   * @returns A request builder for creating requests to retrieve one `PersonProjectRoles` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>,
    projectName: DeserializedType<T, 'Edm.String'>,
    role: DeserializedType<T, 'Edm.String'>,
    projectId: DeserializedType<T, 'Edm.String'>,
    dataArea: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PersonProjectRoles<T>, T> {
    return new GetByKeyRequestBuilder<PersonProjectRoles<T>, T>(
      this.entityApi,
      {
        PartyNumber: partyNumber,
        ProjectName: projectName,
        Role: role,
        ProjectId: projectId,
        DataArea: dataArea
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PersonProjectRoles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PersonProjectRoles`.
   */
  update(
    entity: PersonProjectRoles<T>
  ): UpdateRequestBuilder<PersonProjectRoles<T>, T> {
    return new UpdateRequestBuilder<PersonProjectRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PersonProjectRoles`.
   * @param partyNumber Key property. See {@link PersonProjectRoles.partyNumber}.
   * @param projectName Key property. See {@link PersonProjectRoles.projectName}.
   * @param role Key property. See {@link PersonProjectRoles.role}.
   * @param projectId Key property. See {@link PersonProjectRoles.projectId}.
   * @param dataArea Key property. See {@link PersonProjectRoles.dataArea}.
   * @returns A request builder for creating requests that delete an entity of type `PersonProjectRoles`.
   */
  delete(
    partyNumber: string,
    projectName: string,
    role: string,
    projectId: string,
    dataArea: string
  ): DeleteRequestBuilder<PersonProjectRoles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PersonProjectRoles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PersonProjectRoles` by taking the entity as a parameter.
   */
  delete(
    entity: PersonProjectRoles<T>
  ): DeleteRequestBuilder<PersonProjectRoles<T>, T>;
  delete(
    partyNumberOrEntity: any,
    projectName?: string,
    role?: string,
    projectId?: string,
    dataArea?: string
  ): DeleteRequestBuilder<PersonProjectRoles<T>, T> {
    return new DeleteRequestBuilder<PersonProjectRoles<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof PersonProjectRoles
        ? partyNumberOrEntity
        : {
            PartyNumber: partyNumberOrEntity!,
            ProjectName: projectName!,
            Role: role!,
            ProjectId: projectId!,
            DataArea: dataArea!
          }
    );
  }
}
