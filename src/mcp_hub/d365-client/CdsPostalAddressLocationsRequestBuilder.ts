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
import { CdsPostalAddressLocations } from './CdsPostalAddressLocations';

/**
 * Request builder class for operations supported on the {@link CdsPostalAddressLocations} entity.
 */
export class CdsPostalAddressLocationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsPostalAddressLocations<T>, T> {
  /**
   * Returns a request builder for querying all `CdsPostalAddressLocations` entities.
   * @returns A request builder for creating requests to retrieve all `CdsPostalAddressLocations` entities.
   */
  getAll(): GetAllRequestBuilder<CdsPostalAddressLocations<T>, T> {
    return new GetAllRequestBuilder<CdsPostalAddressLocations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CdsPostalAddressLocations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsPostalAddressLocations`.
   */
  create(
    entity: CdsPostalAddressLocations<T>
  ): CreateRequestBuilder<CdsPostalAddressLocations<T>, T> {
    return new CreateRequestBuilder<CdsPostalAddressLocations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsPostalAddressLocations` entity based on its keys.
   * @param locationId Key property. See {@link CdsPostalAddressLocations.locationId}.
   * @returns A request builder for creating requests to retrieve one `CdsPostalAddressLocations` entity based on its keys.
   */
  getByKey(
    locationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CdsPostalAddressLocations<T>, T> {
    return new GetByKeyRequestBuilder<CdsPostalAddressLocations<T>, T>(
      this.entityApi,
      { LocationId: locationId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsPostalAddressLocations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsPostalAddressLocations`.
   */
  update(
    entity: CdsPostalAddressLocations<T>
  ): UpdateRequestBuilder<CdsPostalAddressLocations<T>, T> {
    return new UpdateRequestBuilder<CdsPostalAddressLocations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsPostalAddressLocations`.
   * @param locationId Key property. See {@link CdsPostalAddressLocations.locationId}.
   * @returns A request builder for creating requests that delete an entity of type `CdsPostalAddressLocations`.
   */
  delete(
    locationId: string
  ): DeleteRequestBuilder<CdsPostalAddressLocations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsPostalAddressLocations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsPostalAddressLocations` by taking the entity as a parameter.
   */
  delete(
    entity: CdsPostalAddressLocations<T>
  ): DeleteRequestBuilder<CdsPostalAddressLocations<T>, T>;
  delete(
    locationIdOrEntity: any
  ): DeleteRequestBuilder<CdsPostalAddressLocations<T>, T> {
    return new DeleteRequestBuilder<CdsPostalAddressLocations<T>, T>(
      this.entityApi,
      locationIdOrEntity instanceof CdsPostalAddressLocations
        ? locationIdOrEntity
        : { LocationId: locationIdOrEntity! }
    );
  }
}
