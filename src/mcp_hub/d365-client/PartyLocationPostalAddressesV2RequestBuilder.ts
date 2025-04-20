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
import { PartyLocationPostalAddressesV2 } from './PartyLocationPostalAddressesV2';

/**
 * Request builder class for operations supported on the {@link PartyLocationPostalAddressesV2} entity.
 */
export class PartyLocationPostalAddressesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PartyLocationPostalAddressesV2<T>, T> {
  /**
   * Returns a request builder for querying all `PartyLocationPostalAddressesV2` entities.
   * @returns A request builder for creating requests to retrieve all `PartyLocationPostalAddressesV2` entities.
   */
  getAll(): GetAllRequestBuilder<PartyLocationPostalAddressesV2<T>, T> {
    return new GetAllRequestBuilder<PartyLocationPostalAddressesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PartyLocationPostalAddressesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PartyLocationPostalAddressesV2`.
   */
  create(
    entity: PartyLocationPostalAddressesV2<T>
  ): CreateRequestBuilder<PartyLocationPostalAddressesV2<T>, T> {
    return new CreateRequestBuilder<PartyLocationPostalAddressesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PartyLocationPostalAddressesV2` entity based on its keys.
   * @param partyNumber Key property. See {@link PartyLocationPostalAddressesV2.partyNumber}.
   * @param locationId Key property. See {@link PartyLocationPostalAddressesV2.locationId}.
   * @param validFrom Key property. See {@link PartyLocationPostalAddressesV2.validFrom}.
   * @returns A request builder for creating requests to retrieve one `PartyLocationPostalAddressesV2` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>,
    locationId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PartyLocationPostalAddressesV2<T>, T> {
    return new GetByKeyRequestBuilder<PartyLocationPostalAddressesV2<T>, T>(
      this.entityApi,
      {
        PartyNumber: partyNumber,
        LocationId: locationId,
        ValidFrom: validFrom
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PartyLocationPostalAddressesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PartyLocationPostalAddressesV2`.
   */
  update(
    entity: PartyLocationPostalAddressesV2<T>
  ): UpdateRequestBuilder<PartyLocationPostalAddressesV2<T>, T> {
    return new UpdateRequestBuilder<PartyLocationPostalAddressesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PartyLocationPostalAddressesV2`.
   * @param partyNumber Key property. See {@link PartyLocationPostalAddressesV2.partyNumber}.
   * @param locationId Key property. See {@link PartyLocationPostalAddressesV2.locationId}.
   * @param validFrom Key property. See {@link PartyLocationPostalAddressesV2.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `PartyLocationPostalAddressesV2`.
   */
  delete(
    partyNumber: string,
    locationId: string,
    validFrom: Moment
  ): DeleteRequestBuilder<PartyLocationPostalAddressesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PartyLocationPostalAddressesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PartyLocationPostalAddressesV2` by taking the entity as a parameter.
   */
  delete(
    entity: PartyLocationPostalAddressesV2<T>
  ): DeleteRequestBuilder<PartyLocationPostalAddressesV2<T>, T>;
  delete(
    partyNumberOrEntity: any,
    locationId?: string,
    validFrom?: Moment
  ): DeleteRequestBuilder<PartyLocationPostalAddressesV2<T>, T> {
    return new DeleteRequestBuilder<PartyLocationPostalAddressesV2<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof PartyLocationPostalAddressesV2
        ? partyNumberOrEntity
        : {
            PartyNumber: partyNumberOrEntity!,
            LocationId: locationId!,
            ValidFrom: validFrom!
          }
    );
  }
}
