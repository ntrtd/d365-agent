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
import { PersonnelActionTypeSetupRoles } from './PersonnelActionTypeSetupRoles';

/**
 * Request builder class for operations supported on the {@link PersonnelActionTypeSetupRoles} entity.
 */
export class PersonnelActionTypeSetupRolesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PersonnelActionTypeSetupRoles<T>, T> {
  /**
   * Returns a request builder for querying all `PersonnelActionTypeSetupRoles` entities.
   * @returns A request builder for creating requests to retrieve all `PersonnelActionTypeSetupRoles` entities.
   */
  getAll(): GetAllRequestBuilder<PersonnelActionTypeSetupRoles<T>, T> {
    return new GetAllRequestBuilder<PersonnelActionTypeSetupRoles<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PersonnelActionTypeSetupRoles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PersonnelActionTypeSetupRoles`.
   */
  create(
    entity: PersonnelActionTypeSetupRoles<T>
  ): CreateRequestBuilder<PersonnelActionTypeSetupRoles<T>, T> {
    return new CreateRequestBuilder<PersonnelActionTypeSetupRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PersonnelActionTypeSetupRoles` entity based on its keys.
   * @param personnelActionTypeId Key property. See {@link PersonnelActionTypeSetupRoles.personnelActionTypeId}.
   * @param roleName Key property. See {@link PersonnelActionTypeSetupRoles.roleName}.
   * @returns A request builder for creating requests to retrieve one `PersonnelActionTypeSetupRoles` entity based on its keys.
   */
  getByKey(
    personnelActionTypeId: DeserializedType<T, 'Edm.String'>,
    roleName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PersonnelActionTypeSetupRoles<T>, T> {
    return new GetByKeyRequestBuilder<PersonnelActionTypeSetupRoles<T>, T>(
      this.entityApi,
      {
        PersonnelActionTypeId: personnelActionTypeId,
        RoleName: roleName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PersonnelActionTypeSetupRoles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PersonnelActionTypeSetupRoles`.
   */
  update(
    entity: PersonnelActionTypeSetupRoles<T>
  ): UpdateRequestBuilder<PersonnelActionTypeSetupRoles<T>, T> {
    return new UpdateRequestBuilder<PersonnelActionTypeSetupRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PersonnelActionTypeSetupRoles`.
   * @param personnelActionTypeId Key property. See {@link PersonnelActionTypeSetupRoles.personnelActionTypeId}.
   * @param roleName Key property. See {@link PersonnelActionTypeSetupRoles.roleName}.
   * @returns A request builder for creating requests that delete an entity of type `PersonnelActionTypeSetupRoles`.
   */
  delete(
    personnelActionTypeId: string,
    roleName: string
  ): DeleteRequestBuilder<PersonnelActionTypeSetupRoles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PersonnelActionTypeSetupRoles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PersonnelActionTypeSetupRoles` by taking the entity as a parameter.
   */
  delete(
    entity: PersonnelActionTypeSetupRoles<T>
  ): DeleteRequestBuilder<PersonnelActionTypeSetupRoles<T>, T>;
  delete(
    personnelActionTypeIdOrEntity: any,
    roleName?: string
  ): DeleteRequestBuilder<PersonnelActionTypeSetupRoles<T>, T> {
    return new DeleteRequestBuilder<PersonnelActionTypeSetupRoles<T>, T>(
      this.entityApi,
      personnelActionTypeIdOrEntity instanceof PersonnelActionTypeSetupRoles
        ? personnelActionTypeIdOrEntity
        : {
            PersonnelActionTypeId: personnelActionTypeIdOrEntity!,
            RoleName: roleName!
          }
    );
  }
}
