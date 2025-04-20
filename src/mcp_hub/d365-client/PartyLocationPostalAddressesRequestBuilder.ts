/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { PartyLocationPostalAddresses } from './PartyLocationPostalAddresses';

/**
 * Request builder class for operations supported on the {@link PartyLocationPostalAddresses} entity.
 */
export class PartyLocationPostalAddressesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PartyLocationPostalAddresses<T>, T> {
  /**
   * Returns a request builder for querying all `PartyLocationPostalAddresses` entities.
   * @returns A request builder for creating requests to retrieve all `PartyLocationPostalAddresses` entities.
   */
  getAll(): GetAllRequestBuilder<PartyLocationPostalAddresses<T>, T> {
    return new GetAllRequestBuilder<PartyLocationPostalAddresses<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PartyLocationPostalAddresses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PartyLocationPostalAddresses`.
   */
  create(
    entity: PartyLocationPostalAddresses<T>
  ): CreateRequestBuilder<PartyLocationPostalAddresses<T>, T> {
    return new CreateRequestBuilder<PartyLocationPostalAddresses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PartyLocationPostalAddresses` entity based on its keys.
   * @param partyNumber Key property. See {@link PartyLocationPostalAddresses.partyNumber}.
   * @param locationId Key property. See {@link PartyLocationPostalAddresses.locationId}.
   * @param validFrom Key property. See {@link PartyLocationPostalAddresses.validFrom}.
   * @returns A request builder for creating requests to retrieve one `PartyLocationPostalAddresses` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>,
    locationId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PartyLocationPostalAddresses<T>, T> {
    return new GetByKeyRequestBuilder<PartyLocationPostalAddresses<T>, T>(
      this.entityApi,
      {
        PartyNumber: partyNumber,
        LocationId: locationId,
        ValidFrom: validFrom
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PartyLocationPostalAddresses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PartyLocationPostalAddresses`.
   */
  update(
    entity: PartyLocationPostalAddresses<T>
  ): UpdateRequestBuilder<PartyLocationPostalAddresses<T>, T> {
    return new UpdateRequestBuilder<PartyLocationPostalAddresses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PartyLocationPostalAddresses`.
   * @param partyNumber Key property. See {@link PartyLocationPostalAddresses.partyNumber}.
   * @param locationId Key property. See {@link PartyLocationPostalAddresses.locationId}.
   * @param validFrom Key property. See {@link PartyLocationPostalAddresses.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `PartyLocationPostalAddresses`.
   */
  delete(
    partyNumber: string,
    locationId: string,
    validFrom: Moment
  ): DeleteRequestBuilder<PartyLocationPostalAddresses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PartyLocationPostalAddresses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PartyLocationPostalAddresses` by taking the entity as a parameter.
   */
  delete(
    entity: PartyLocationPostalAddresses<T>
  ): DeleteRequestBuilder<PartyLocationPostalAddresses<T>, T>;
  delete(
    partyNumberOrEntity: any,
    locationId?: string,
    validFrom?: Moment
  ): DeleteRequestBuilder<PartyLocationPostalAddresses<T>, T> {
    return new DeleteRequestBuilder<PartyLocationPostalAddresses<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof PartyLocationPostalAddresses
        ? partyNumberOrEntity
        : {
            PartyNumber: partyNumberOrEntity!,
            LocationId: locationId!,
            ValidFrom: validFrom!
          }
    );
  }
}
