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
import { CdsPartyPostalAddressLocations } from './CdsPartyPostalAddressLocations';

/**
 * Request builder class for operations supported on the {@link CdsPartyPostalAddressLocations} entity.
 */
export class CdsPartyPostalAddressLocationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsPartyPostalAddressLocations<T>, T> {
  /**
   * Returns a request builder for querying all `CdsPartyPostalAddressLocations` entities.
   * @returns A request builder for creating requests to retrieve all `CdsPartyPostalAddressLocations` entities.
   */
  getAll(): GetAllRequestBuilder<CdsPartyPostalAddressLocations<T>, T> {
    return new GetAllRequestBuilder<CdsPartyPostalAddressLocations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CdsPartyPostalAddressLocations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsPartyPostalAddressLocations`.
   */
  create(
    entity: CdsPartyPostalAddressLocations<T>
  ): CreateRequestBuilder<CdsPartyPostalAddressLocations<T>, T> {
    return new CreateRequestBuilder<CdsPartyPostalAddressLocations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsPartyPostalAddressLocations` entity based on its keys.
   * @param partyNumber Key property. See {@link CdsPartyPostalAddressLocations.partyNumber}.
   * @param locationId Key property. See {@link CdsPartyPostalAddressLocations.locationId}.
   * @returns A request builder for creating requests to retrieve one `CdsPartyPostalAddressLocations` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>,
    locationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CdsPartyPostalAddressLocations<T>, T> {
    return new GetByKeyRequestBuilder<CdsPartyPostalAddressLocations<T>, T>(
      this.entityApi,
      {
        PartyNumber: partyNumber,
        LocationId: locationId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsPartyPostalAddressLocations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsPartyPostalAddressLocations`.
   */
  update(
    entity: CdsPartyPostalAddressLocations<T>
  ): UpdateRequestBuilder<CdsPartyPostalAddressLocations<T>, T> {
    return new UpdateRequestBuilder<CdsPartyPostalAddressLocations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsPartyPostalAddressLocations`.
   * @param partyNumber Key property. See {@link CdsPartyPostalAddressLocations.partyNumber}.
   * @param locationId Key property. See {@link CdsPartyPostalAddressLocations.locationId}.
   * @returns A request builder for creating requests that delete an entity of type `CdsPartyPostalAddressLocations`.
   */
  delete(
    partyNumber: string,
    locationId: string
  ): DeleteRequestBuilder<CdsPartyPostalAddressLocations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsPartyPostalAddressLocations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsPartyPostalAddressLocations` by taking the entity as a parameter.
   */
  delete(
    entity: CdsPartyPostalAddressLocations<T>
  ): DeleteRequestBuilder<CdsPartyPostalAddressLocations<T>, T>;
  delete(
    partyNumberOrEntity: any,
    locationId?: string
  ): DeleteRequestBuilder<CdsPartyPostalAddressLocations<T>, T> {
    return new DeleteRequestBuilder<CdsPartyPostalAddressLocations<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof CdsPartyPostalAddressLocations
        ? partyNumberOrEntity
        : {
            PartyNumber: partyNumberOrEntity!,
            LocationId: locationId!
          }
    );
  }
}
