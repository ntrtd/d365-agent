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
import { PersonalCharacterTypes } from './PersonalCharacterTypes';

/**
 * Request builder class for operations supported on the {@link PersonalCharacterTypes} entity.
 */
export class PersonalCharacterTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PersonalCharacterTypes<T>, T> {
  /**
   * Returns a request builder for querying all `PersonalCharacterTypes` entities.
   * @returns A request builder for creating requests to retrieve all `PersonalCharacterTypes` entities.
   */
  getAll(): GetAllRequestBuilder<PersonalCharacterTypes<T>, T> {
    return new GetAllRequestBuilder<PersonalCharacterTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PersonalCharacterTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PersonalCharacterTypes`.
   */
  create(
    entity: PersonalCharacterTypes<T>
  ): CreateRequestBuilder<PersonalCharacterTypes<T>, T> {
    return new CreateRequestBuilder<PersonalCharacterTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PersonalCharacterTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link PersonalCharacterTypes.dataAreaId}.
   * @param typeName Key property. See {@link PersonalCharacterTypes.typeName}.
   * @returns A request builder for creating requests to retrieve one `PersonalCharacterTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    typeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PersonalCharacterTypes<T>, T> {
    return new GetByKeyRequestBuilder<PersonalCharacterTypes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TypeName: typeName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PersonalCharacterTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PersonalCharacterTypes`.
   */
  update(
    entity: PersonalCharacterTypes<T>
  ): UpdateRequestBuilder<PersonalCharacterTypes<T>, T> {
    return new UpdateRequestBuilder<PersonalCharacterTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PersonalCharacterTypes`.
   * @param dataAreaId Key property. See {@link PersonalCharacterTypes.dataAreaId}.
   * @param typeName Key property. See {@link PersonalCharacterTypes.typeName}.
   * @returns A request builder for creating requests that delete an entity of type `PersonalCharacterTypes`.
   */
  delete(
    dataAreaId: string,
    typeName: string
  ): DeleteRequestBuilder<PersonalCharacterTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PersonalCharacterTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PersonalCharacterTypes` by taking the entity as a parameter.
   */
  delete(
    entity: PersonalCharacterTypes<T>
  ): DeleteRequestBuilder<PersonalCharacterTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    typeName?: string
  ): DeleteRequestBuilder<PersonalCharacterTypes<T>, T> {
    return new DeleteRequestBuilder<PersonalCharacterTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PersonalCharacterTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TypeName: typeName!
          }
    );
  }
}
