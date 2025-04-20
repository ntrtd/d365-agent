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
import { PersonAddresses } from './PersonAddresses';

/**
 * Request builder class for operations supported on the {@link PersonAddresses} entity.
 */
export class PersonAddressesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PersonAddresses<T>, T> {
  /**
   * Returns a request builder for querying all `PersonAddresses` entities.
   * @returns A request builder for creating requests to retrieve all `PersonAddresses` entities.
   */
  getAll(): GetAllRequestBuilder<PersonAddresses<T>, T> {
    return new GetAllRequestBuilder<PersonAddresses<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PersonAddresses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PersonAddresses`.
   */
  create(
    entity: PersonAddresses<T>
  ): CreateRequestBuilder<PersonAddresses<T>, T> {
    return new CreateRequestBuilder<PersonAddresses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PersonAddresses` entity based on its keys.
   * @param partyNumber Key property. See {@link PersonAddresses.partyNumber}.
   * @param locationId Key property. See {@link PersonAddresses.locationId}.
   * @returns A request builder for creating requests to retrieve one `PersonAddresses` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>,
    locationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PersonAddresses<T>, T> {
    return new GetByKeyRequestBuilder<PersonAddresses<T>, T>(this.entityApi, {
      PartyNumber: partyNumber,
      LocationId: locationId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PersonAddresses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PersonAddresses`.
   */
  update(
    entity: PersonAddresses<T>
  ): UpdateRequestBuilder<PersonAddresses<T>, T> {
    return new UpdateRequestBuilder<PersonAddresses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PersonAddresses`.
   * @param partyNumber Key property. See {@link PersonAddresses.partyNumber}.
   * @param locationId Key property. See {@link PersonAddresses.locationId}.
   * @returns A request builder for creating requests that delete an entity of type `PersonAddresses`.
   */
  delete(
    partyNumber: string,
    locationId: string
  ): DeleteRequestBuilder<PersonAddresses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PersonAddresses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PersonAddresses` by taking the entity as a parameter.
   */
  delete(
    entity: PersonAddresses<T>
  ): DeleteRequestBuilder<PersonAddresses<T>, T>;
  delete(
    partyNumberOrEntity: any,
    locationId?: string
  ): DeleteRequestBuilder<PersonAddresses<T>, T> {
    return new DeleteRequestBuilder<PersonAddresses<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof PersonAddresses
        ? partyNumberOrEntity
        : {
            PartyNumber: partyNumberOrEntity!,
            LocationId: locationId!
          }
    );
  }
}
