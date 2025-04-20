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
import { AddressCountryRegions } from './AddressCountryRegions';

/**
 * Request builder class for operations supported on the {@link AddressCountryRegions} entity.
 */
export class AddressCountryRegionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AddressCountryRegions<T>, T> {
  /**
   * Returns a request builder for querying all `AddressCountryRegions` entities.
   * @returns A request builder for creating requests to retrieve all `AddressCountryRegions` entities.
   */
  getAll(): GetAllRequestBuilder<AddressCountryRegions<T>, T> {
    return new GetAllRequestBuilder<AddressCountryRegions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AddressCountryRegions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressCountryRegions`.
   */
  create(
    entity: AddressCountryRegions<T>
  ): CreateRequestBuilder<AddressCountryRegions<T>, T> {
    return new CreateRequestBuilder<AddressCountryRegions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AddressCountryRegions` entity based on its keys.
   * @param countryRegion Key property. See {@link AddressCountryRegions.countryRegion}.
   * @returns A request builder for creating requests to retrieve one `AddressCountryRegions` entity based on its keys.
   */
  getByKey(
    countryRegion: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AddressCountryRegions<T>, T> {
    return new GetByKeyRequestBuilder<AddressCountryRegions<T>, T>(
      this.entityApi,
      { CountryRegion: countryRegion }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AddressCountryRegions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressCountryRegions`.
   */
  update(
    entity: AddressCountryRegions<T>
  ): UpdateRequestBuilder<AddressCountryRegions<T>, T> {
    return new UpdateRequestBuilder<AddressCountryRegions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AddressCountryRegions`.
   * @param countryRegion Key property. See {@link AddressCountryRegions.countryRegion}.
   * @returns A request builder for creating requests that delete an entity of type `AddressCountryRegions`.
   */
  delete(
    countryRegion: string
  ): DeleteRequestBuilder<AddressCountryRegions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressCountryRegions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressCountryRegions` by taking the entity as a parameter.
   */
  delete(
    entity: AddressCountryRegions<T>
  ): DeleteRequestBuilder<AddressCountryRegions<T>, T>;
  delete(
    countryRegionOrEntity: any
  ): DeleteRequestBuilder<AddressCountryRegions<T>, T> {
    return new DeleteRequestBuilder<AddressCountryRegions<T>, T>(
      this.entityApi,
      countryRegionOrEntity instanceof AddressCountryRegions
        ? countryRegionOrEntity
        : { CountryRegion: countryRegionOrEntity! }
    );
  }
}
