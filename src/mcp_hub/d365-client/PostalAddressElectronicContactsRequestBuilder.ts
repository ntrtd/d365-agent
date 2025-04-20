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
import { PostalAddressElectronicContacts } from './PostalAddressElectronicContacts';
import { LogisticsElectronicAddressMethodType } from './LogisticsElectronicAddressMethodType';

/**
 * Request builder class for operations supported on the {@link PostalAddressElectronicContacts} entity.
 */
export class PostalAddressElectronicContactsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PostalAddressElectronicContacts<T>, T> {
  /**
   * Returns a request builder for querying all `PostalAddressElectronicContacts` entities.
   * @returns A request builder for creating requests to retrieve all `PostalAddressElectronicContacts` entities.
   */
  getAll(): GetAllRequestBuilder<PostalAddressElectronicContacts<T>, T> {
    return new GetAllRequestBuilder<PostalAddressElectronicContacts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PostalAddressElectronicContacts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PostalAddressElectronicContacts`.
   */
  create(
    entity: PostalAddressElectronicContacts<T>
  ): CreateRequestBuilder<PostalAddressElectronicContacts<T>, T> {
    return new CreateRequestBuilder<PostalAddressElectronicContacts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PostalAddressElectronicContacts` entity based on its keys.
   * @param locator Key property. See {@link PostalAddressElectronicContacts.locator}.
   * @param type Key property. See {@link PostalAddressElectronicContacts.type}.
   * @param postalAddressLocationId Key property. See {@link PostalAddressElectronicContacts.postalAddressLocationId}.
   * @param description Key property. See {@link PostalAddressElectronicContacts.description}.
   * @returns A request builder for creating requests to retrieve one `PostalAddressElectronicContacts` entity based on its keys.
   */
  getByKey(
    locator: DeserializedType<T, 'Edm.String'>,
    type: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LogisticsElectronicAddressMethodType'
    >,
    postalAddressLocationId: DeserializedType<T, 'Edm.String'>,
    description: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PostalAddressElectronicContacts<T>, T> {
    return new GetByKeyRequestBuilder<PostalAddressElectronicContacts<T>, T>(
      this.entityApi,
      {
        Locator: locator,
        Type: type,
        PostalAddressLocationId: postalAddressLocationId,
        Description: description
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PostalAddressElectronicContacts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PostalAddressElectronicContacts`.
   */
  update(
    entity: PostalAddressElectronicContacts<T>
  ): UpdateRequestBuilder<PostalAddressElectronicContacts<T>, T> {
    return new UpdateRequestBuilder<PostalAddressElectronicContacts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PostalAddressElectronicContacts`.
   * @param locator Key property. See {@link PostalAddressElectronicContacts.locator}.
   * @param type Key property. See {@link PostalAddressElectronicContacts.type}.
   * @param postalAddressLocationId Key property. See {@link PostalAddressElectronicContacts.postalAddressLocationId}.
   * @param description Key property. See {@link PostalAddressElectronicContacts.description}.
   * @returns A request builder for creating requests that delete an entity of type `PostalAddressElectronicContacts`.
   */
  delete(
    locator: string,
    type: LogisticsElectronicAddressMethodType,
    postalAddressLocationId: string,
    description: string
  ): DeleteRequestBuilder<PostalAddressElectronicContacts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PostalAddressElectronicContacts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PostalAddressElectronicContacts` by taking the entity as a parameter.
   */
  delete(
    entity: PostalAddressElectronicContacts<T>
  ): DeleteRequestBuilder<PostalAddressElectronicContacts<T>, T>;
  delete(
    locatorOrEntity: any,
    type?: LogisticsElectronicAddressMethodType,
    postalAddressLocationId?: string,
    description?: string
  ): DeleteRequestBuilder<PostalAddressElectronicContacts<T>, T> {
    return new DeleteRequestBuilder<PostalAddressElectronicContacts<T>, T>(
      this.entityApi,
      locatorOrEntity instanceof PostalAddressElectronicContacts
        ? locatorOrEntity
        : {
            Locator: locatorOrEntity!,
            Type: type!,
            PostalAddressLocationId: postalAddressLocationId!,
            Description: description!
          }
    );
  }
}
