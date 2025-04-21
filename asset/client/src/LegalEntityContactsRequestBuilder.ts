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
import { LegalEntityContacts } from './LegalEntityContacts';
import { LogisticsElectronicAddressMethodType } from './LogisticsElectronicAddressMethodType';

/**
 * Request builder class for operations supported on the {@link LegalEntityContacts} entity.
 */
export class LegalEntityContactsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LegalEntityContacts<T>, T> {
  /**
   * Returns a request builder for querying all `LegalEntityContacts` entities.
   * @returns A request builder for creating requests to retrieve all `LegalEntityContacts` entities.
   */
  getAll(): GetAllRequestBuilder<LegalEntityContacts<T>, T> {
    return new GetAllRequestBuilder<LegalEntityContacts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LegalEntityContacts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LegalEntityContacts`.
   */
  create(
    entity: LegalEntityContacts<T>
  ): CreateRequestBuilder<LegalEntityContacts<T>, T> {
    return new CreateRequestBuilder<LegalEntityContacts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LegalEntityContacts` entity based on its keys.
   * @param type Key property. See {@link LegalEntityContacts.type}.
   * @param description Key property. See {@link LegalEntityContacts.description}.
   * @param locator Key property. See {@link LegalEntityContacts.locator}.
   * @param dataArea Key property. See {@link LegalEntityContacts.dataArea}.
   * @returns A request builder for creating requests to retrieve one `LegalEntityContacts` entity based on its keys.
   */
  getByKey(
    type: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LogisticsElectronicAddressMethodType'
    >,
    description: DeserializedType<T, 'Edm.String'>,
    locator: DeserializedType<T, 'Edm.String'>,
    dataArea: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LegalEntityContacts<T>, T> {
    return new GetByKeyRequestBuilder<LegalEntityContacts<T>, T>(
      this.entityApi,
      {
        Type: type,
        Description: description,
        Locator: locator,
        DataArea: dataArea
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LegalEntityContacts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LegalEntityContacts`.
   */
  update(
    entity: LegalEntityContacts<T>
  ): UpdateRequestBuilder<LegalEntityContacts<T>, T> {
    return new UpdateRequestBuilder<LegalEntityContacts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LegalEntityContacts`.
   * @param type Key property. See {@link LegalEntityContacts.type}.
   * @param description Key property. See {@link LegalEntityContacts.description}.
   * @param locator Key property. See {@link LegalEntityContacts.locator}.
   * @param dataArea Key property. See {@link LegalEntityContacts.dataArea}.
   * @returns A request builder for creating requests that delete an entity of type `LegalEntityContacts`.
   */
  delete(
    type: LogisticsElectronicAddressMethodType,
    description: string,
    locator: string,
    dataArea: string
  ): DeleteRequestBuilder<LegalEntityContacts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LegalEntityContacts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LegalEntityContacts` by taking the entity as a parameter.
   */
  delete(
    entity: LegalEntityContacts<T>
  ): DeleteRequestBuilder<LegalEntityContacts<T>, T>;
  delete(
    typeOrEntity: any,
    description?: string,
    locator?: string,
    dataArea?: string
  ): DeleteRequestBuilder<LegalEntityContacts<T>, T> {
    return new DeleteRequestBuilder<LegalEntityContacts<T>, T>(
      this.entityApi,
      typeOrEntity instanceof LegalEntityContacts
        ? typeOrEntity
        : {
            Type: typeOrEntity!,
            Description: description!,
            Locator: locator!,
            DataArea: dataArea!
          }
    );
  }
}
