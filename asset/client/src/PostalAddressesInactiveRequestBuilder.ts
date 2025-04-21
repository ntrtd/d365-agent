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
import { PostalAddressesInactive } from './PostalAddressesInactive';

/**
 * Request builder class for operations supported on the {@link PostalAddressesInactive} entity.
 */
export class PostalAddressesInactiveRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PostalAddressesInactive<T>, T> {
  /**
   * Returns a request builder for querying all `PostalAddressesInactive` entities.
   * @returns A request builder for creating requests to retrieve all `PostalAddressesInactive` entities.
   */
  getAll(): GetAllRequestBuilder<PostalAddressesInactive<T>, T> {
    return new GetAllRequestBuilder<PostalAddressesInactive<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PostalAddressesInactive` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PostalAddressesInactive`.
   */
  create(
    entity: PostalAddressesInactive<T>
  ): CreateRequestBuilder<PostalAddressesInactive<T>, T> {
    return new CreateRequestBuilder<PostalAddressesInactive<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PostalAddressesInactive` entity based on its keys.
   * @param locationLocationId Key property. See {@link PostalAddressesInactive.locationLocationId}.
   * @param validFrom Key property. See {@link PostalAddressesInactive.validFrom}.
   * @param partyNumber Key property. See {@link PostalAddressesInactive.partyNumber}.
   * @returns A request builder for creating requests to retrieve one `PostalAddressesInactive` entity based on its keys.
   */
  getByKey(
    locationLocationId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    partyNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PostalAddressesInactive<T>, T> {
    return new GetByKeyRequestBuilder<PostalAddressesInactive<T>, T>(
      this.entityApi,
      {
        location_LocationId: locationLocationId,
        ValidFrom: validFrom,
        PartyNumber: partyNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PostalAddressesInactive`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PostalAddressesInactive`.
   */
  update(
    entity: PostalAddressesInactive<T>
  ): UpdateRequestBuilder<PostalAddressesInactive<T>, T> {
    return new UpdateRequestBuilder<PostalAddressesInactive<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PostalAddressesInactive`.
   * @param locationLocationId Key property. See {@link PostalAddressesInactive.locationLocationId}.
   * @param validFrom Key property. See {@link PostalAddressesInactive.validFrom}.
   * @param partyNumber Key property. See {@link PostalAddressesInactive.partyNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PostalAddressesInactive`.
   */
  delete(
    locationLocationId: string,
    validFrom: Moment,
    partyNumber: string
  ): DeleteRequestBuilder<PostalAddressesInactive<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PostalAddressesInactive`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PostalAddressesInactive` by taking the entity as a parameter.
   */
  delete(
    entity: PostalAddressesInactive<T>
  ): DeleteRequestBuilder<PostalAddressesInactive<T>, T>;
  delete(
    locationLocationIdOrEntity: any,
    validFrom?: Moment,
    partyNumber?: string
  ): DeleteRequestBuilder<PostalAddressesInactive<T>, T> {
    return new DeleteRequestBuilder<PostalAddressesInactive<T>, T>(
      this.entityApi,
      locationLocationIdOrEntity instanceof PostalAddressesInactive
        ? locationLocationIdOrEntity
        : {
            location_LocationId: locationLocationIdOrEntity!,
            ValidFrom: validFrom!,
            PartyNumber: partyNumber!
          }
    );
  }
}
