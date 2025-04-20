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
import { PartyContacts } from './PartyContacts';
import { LogisticsElectronicAddressMethodType } from './LogisticsElectronicAddressMethodType';

/**
 * Request builder class for operations supported on the {@link PartyContacts} entity.
 */
export class PartyContactsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PartyContacts<T>, T> {
  /**
   * Returns a request builder for querying all `PartyContacts` entities.
   * @returns A request builder for creating requests to retrieve all `PartyContacts` entities.
   */
  getAll(): GetAllRequestBuilder<PartyContacts<T>, T> {
    return new GetAllRequestBuilder<PartyContacts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PartyContacts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PartyContacts`.
   */
  create(entity: PartyContacts<T>): CreateRequestBuilder<PartyContacts<T>, T> {
    return new CreateRequestBuilder<PartyContacts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PartyContacts` entity based on its keys.
   * @param partyNumber Key property. See {@link PartyContacts.partyNumber}.
   * @param type Key property. See {@link PartyContacts.type}.
   * @param description Key property. See {@link PartyContacts.description}.
   * @param locator Key property. See {@link PartyContacts.locator}.
   * @returns A request builder for creating requests to retrieve one `PartyContacts` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>,
    type: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LogisticsElectronicAddressMethodType'
    >,
    description: DeserializedType<T, 'Edm.String'>,
    locator: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PartyContacts<T>, T> {
    return new GetByKeyRequestBuilder<PartyContacts<T>, T>(this.entityApi, {
      PartyNumber: partyNumber,
      Type: type,
      Description: description,
      Locator: locator
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PartyContacts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PartyContacts`.
   */
  update(entity: PartyContacts<T>): UpdateRequestBuilder<PartyContacts<T>, T> {
    return new UpdateRequestBuilder<PartyContacts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PartyContacts`.
   * @param partyNumber Key property. See {@link PartyContacts.partyNumber}.
   * @param type Key property. See {@link PartyContacts.type}.
   * @param description Key property. See {@link PartyContacts.description}.
   * @param locator Key property. See {@link PartyContacts.locator}.
   * @returns A request builder for creating requests that delete an entity of type `PartyContacts`.
   */
  delete(
    partyNumber: string,
    type: LogisticsElectronicAddressMethodType,
    description: string,
    locator: string
  ): DeleteRequestBuilder<PartyContacts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PartyContacts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PartyContacts` by taking the entity as a parameter.
   */
  delete(entity: PartyContacts<T>): DeleteRequestBuilder<PartyContacts<T>, T>;
  delete(
    partyNumberOrEntity: any,
    type?: LogisticsElectronicAddressMethodType,
    description?: string,
    locator?: string
  ): DeleteRequestBuilder<PartyContacts<T>, T> {
    return new DeleteRequestBuilder<PartyContacts<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof PartyContacts
        ? partyNumberOrEntity
        : {
            PartyNumber: partyNumberOrEntity!,
            Type: type!,
            Description: description!,
            Locator: locator!
          }
    );
  }
}
