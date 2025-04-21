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
import { PersonnelActionTypes } from './PersonnelActionTypes';

/**
 * Request builder class for operations supported on the {@link PersonnelActionTypes} entity.
 */
export class PersonnelActionTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PersonnelActionTypes<T>, T> {
  /**
   * Returns a request builder for querying all `PersonnelActionTypes` entities.
   * @returns A request builder for creating requests to retrieve all `PersonnelActionTypes` entities.
   */
  getAll(): GetAllRequestBuilder<PersonnelActionTypes<T>, T> {
    return new GetAllRequestBuilder<PersonnelActionTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PersonnelActionTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PersonnelActionTypes`.
   */
  create(
    entity: PersonnelActionTypes<T>
  ): CreateRequestBuilder<PersonnelActionTypes<T>, T> {
    return new CreateRequestBuilder<PersonnelActionTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PersonnelActionTypes` entity based on its keys.
   * @param personnelActionType Key property. See {@link PersonnelActionTypes.personnelActionType}.
   * @returns A request builder for creating requests to retrieve one `PersonnelActionTypes` entity based on its keys.
   */
  getByKey(
    personnelActionType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PersonnelActionTypes<T>, T> {
    return new GetByKeyRequestBuilder<PersonnelActionTypes<T>, T>(
      this.entityApi,
      { PersonnelActionType: personnelActionType }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PersonnelActionTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PersonnelActionTypes`.
   */
  update(
    entity: PersonnelActionTypes<T>
  ): UpdateRequestBuilder<PersonnelActionTypes<T>, T> {
    return new UpdateRequestBuilder<PersonnelActionTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PersonnelActionTypes`.
   * @param personnelActionType Key property. See {@link PersonnelActionTypes.personnelActionType}.
   * @returns A request builder for creating requests that delete an entity of type `PersonnelActionTypes`.
   */
  delete(
    personnelActionType: string
  ): DeleteRequestBuilder<PersonnelActionTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PersonnelActionTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PersonnelActionTypes` by taking the entity as a parameter.
   */
  delete(
    entity: PersonnelActionTypes<T>
  ): DeleteRequestBuilder<PersonnelActionTypes<T>, T>;
  delete(
    personnelActionTypeOrEntity: any
  ): DeleteRequestBuilder<PersonnelActionTypes<T>, T> {
    return new DeleteRequestBuilder<PersonnelActionTypes<T>, T>(
      this.entityApi,
      personnelActionTypeOrEntity instanceof PersonnelActionTypes
        ? personnelActionTypeOrEntity
        : { PersonnelActionType: personnelActionTypeOrEntity! }
    );
  }
}
