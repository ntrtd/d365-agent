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
import { ContactPersons } from './ContactPersons';

/**
 * Request builder class for operations supported on the {@link ContactPersons} entity.
 */
export class ContactPersonsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ContactPersons<T>, T> {
  /**
   * Returns a request builder for querying all `ContactPersons` entities.
   * @returns A request builder for creating requests to retrieve all `ContactPersons` entities.
   */
  getAll(): GetAllRequestBuilder<ContactPersons<T>, T> {
    return new GetAllRequestBuilder<ContactPersons<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ContactPersons` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ContactPersons`.
   */
  create(
    entity: ContactPersons<T>
  ): CreateRequestBuilder<ContactPersons<T>, T> {
    return new CreateRequestBuilder<ContactPersons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ContactPersons` entity based on its keys.
   * @param dataAreaId Key property. See {@link ContactPersons.dataAreaId}.
   * @param contactPersonId Key property. See {@link ContactPersons.contactPersonId}.
   * @returns A request builder for creating requests to retrieve one `ContactPersons` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    contactPersonId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ContactPersons<T>, T> {
    return new GetByKeyRequestBuilder<ContactPersons<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ContactPersonId: contactPersonId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ContactPersons`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ContactPersons`.
   */
  update(
    entity: ContactPersons<T>
  ): UpdateRequestBuilder<ContactPersons<T>, T> {
    return new UpdateRequestBuilder<ContactPersons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ContactPersons`.
   * @param dataAreaId Key property. See {@link ContactPersons.dataAreaId}.
   * @param contactPersonId Key property. See {@link ContactPersons.contactPersonId}.
   * @returns A request builder for creating requests that delete an entity of type `ContactPersons`.
   */
  delete(
    dataAreaId: string,
    contactPersonId: string
  ): DeleteRequestBuilder<ContactPersons<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ContactPersons`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ContactPersons` by taking the entity as a parameter.
   */
  delete(entity: ContactPersons<T>): DeleteRequestBuilder<ContactPersons<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    contactPersonId?: string
  ): DeleteRequestBuilder<ContactPersons<T>, T> {
    return new DeleteRequestBuilder<ContactPersons<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ContactPersons
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ContactPersonId: contactPersonId!
          }
    );
  }
}
