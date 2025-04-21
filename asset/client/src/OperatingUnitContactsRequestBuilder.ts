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
import { OperatingUnitContacts } from './OperatingUnitContacts';
import { LogisticsElectronicAddressMethodType } from './LogisticsElectronicAddressMethodType';

/**
 * Request builder class for operations supported on the {@link OperatingUnitContacts} entity.
 */
export class OperatingUnitContactsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OperatingUnitContacts<T>, T> {
  /**
   * Returns a request builder for querying all `OperatingUnitContacts` entities.
   * @returns A request builder for creating requests to retrieve all `OperatingUnitContacts` entities.
   */
  getAll(): GetAllRequestBuilder<OperatingUnitContacts<T>, T> {
    return new GetAllRequestBuilder<OperatingUnitContacts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OperatingUnitContacts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OperatingUnitContacts`.
   */
  create(
    entity: OperatingUnitContacts<T>
  ): CreateRequestBuilder<OperatingUnitContacts<T>, T> {
    return new CreateRequestBuilder<OperatingUnitContacts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OperatingUnitContacts` entity based on its keys.
   * @param type Key property. See {@link OperatingUnitContacts.type}.
   * @param description Key property. See {@link OperatingUnitContacts.description}.
   * @param locator Key property. See {@link OperatingUnitContacts.locator}.
   * @param omOperatingUnitNumber Key property. See {@link OperatingUnitContacts.omOperatingUnitNumber}.
   * @returns A request builder for creating requests to retrieve one `OperatingUnitContacts` entity based on its keys.
   */
  getByKey(
    type: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LogisticsElectronicAddressMethodType'
    >,
    description: DeserializedType<T, 'Edm.String'>,
    locator: DeserializedType<T, 'Edm.String'>,
    omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OperatingUnitContacts<T>, T> {
    return new GetByKeyRequestBuilder<OperatingUnitContacts<T>, T>(
      this.entityApi,
      {
        Type: type,
        Description: description,
        Locator: locator,
        OMOperatingUnitNumber: omOperatingUnitNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OperatingUnitContacts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OperatingUnitContacts`.
   */
  update(
    entity: OperatingUnitContacts<T>
  ): UpdateRequestBuilder<OperatingUnitContacts<T>, T> {
    return new UpdateRequestBuilder<OperatingUnitContacts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OperatingUnitContacts`.
   * @param type Key property. See {@link OperatingUnitContacts.type}.
   * @param description Key property. See {@link OperatingUnitContacts.description}.
   * @param locator Key property. See {@link OperatingUnitContacts.locator}.
   * @param omOperatingUnitNumber Key property. See {@link OperatingUnitContacts.omOperatingUnitNumber}.
   * @returns A request builder for creating requests that delete an entity of type `OperatingUnitContacts`.
   */
  delete(
    type: LogisticsElectronicAddressMethodType,
    description: string,
    locator: string,
    omOperatingUnitNumber: string
  ): DeleteRequestBuilder<OperatingUnitContacts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OperatingUnitContacts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OperatingUnitContacts` by taking the entity as a parameter.
   */
  delete(
    entity: OperatingUnitContacts<T>
  ): DeleteRequestBuilder<OperatingUnitContacts<T>, T>;
  delete(
    typeOrEntity: any,
    description?: string,
    locator?: string,
    omOperatingUnitNumber?: string
  ): DeleteRequestBuilder<OperatingUnitContacts<T>, T> {
    return new DeleteRequestBuilder<OperatingUnitContacts<T>, T>(
      this.entityApi,
      typeOrEntity instanceof OperatingUnitContacts
        ? typeOrEntity
        : {
            Type: typeOrEntity!,
            Description: description!,
            Locator: locator!,
            OMOperatingUnitNumber: omOperatingUnitNumber!
          }
    );
  }
}
