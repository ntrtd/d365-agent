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
import { ContactsForAi } from './ContactsForAi';

/**
 * Request builder class for operations supported on the {@link ContactsForAi} entity.
 */
export class ContactsForAiRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ContactsForAi<T>, T> {
  /**
   * Returns a request builder for querying all `ContactsForAi` entities.
   * @returns A request builder for creating requests to retrieve all `ContactsForAi` entities.
   */
  getAll(): GetAllRequestBuilder<ContactsForAi<T>, T> {
    return new GetAllRequestBuilder<ContactsForAi<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ContactsForAi` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ContactsForAi`.
   */
  create(entity: ContactsForAi<T>): CreateRequestBuilder<ContactsForAi<T>, T> {
    return new CreateRequestBuilder<ContactsForAi<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ContactsForAi` entity based on its keys.
   * @param dataAreaId Key property. See {@link ContactsForAi.dataAreaId}.
   * @param contactPersonId Key property. See {@link ContactsForAi.contactPersonId}.
   * @returns A request builder for creating requests to retrieve one `ContactsForAi` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    contactPersonId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ContactsForAi<T>, T> {
    return new GetByKeyRequestBuilder<ContactsForAi<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ContactPersonId: contactPersonId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ContactsForAi`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ContactsForAi`.
   */
  update(entity: ContactsForAi<T>): UpdateRequestBuilder<ContactsForAi<T>, T> {
    return new UpdateRequestBuilder<ContactsForAi<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ContactsForAi`.
   * @param dataAreaId Key property. See {@link ContactsForAi.dataAreaId}.
   * @param contactPersonId Key property. See {@link ContactsForAi.contactPersonId}.
   * @returns A request builder for creating requests that delete an entity of type `ContactsForAi`.
   */
  delete(
    dataAreaId: string,
    contactPersonId: string
  ): DeleteRequestBuilder<ContactsForAi<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ContactsForAi`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ContactsForAi` by taking the entity as a parameter.
   */
  delete(entity: ContactsForAi<T>): DeleteRequestBuilder<ContactsForAi<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    contactPersonId?: string
  ): DeleteRequestBuilder<ContactsForAi<T>, T> {
    return new DeleteRequestBuilder<ContactsForAi<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ContactsForAi
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ContactPersonId: contactPersonId!
          }
    );
  }
}
