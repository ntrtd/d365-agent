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
import { AddressDistricts } from './AddressDistricts';

/**
 * Request builder class for operations supported on the {@link AddressDistricts} entity.
 */
export class AddressDistrictsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AddressDistricts<T>, T> {
  /**
   * Returns a request builder for querying all `AddressDistricts` entities.
   * @returns A request builder for creating requests to retrieve all `AddressDistricts` entities.
   */
  getAll(): GetAllRequestBuilder<AddressDistricts<T>, T> {
    return new GetAllRequestBuilder<AddressDistricts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AddressDistricts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressDistricts`.
   */
  create(
    entity: AddressDistricts<T>
  ): CreateRequestBuilder<AddressDistricts<T>, T> {
    return new CreateRequestBuilder<AddressDistricts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AddressDistricts` entity based on its keys.
   * @param district Key property. See {@link AddressDistricts.district}.
   * @param cityKey Key property. See {@link AddressDistricts.cityKey}.
   * @param countryRegionId Key property. See {@link AddressDistricts.countryRegionId}.
   * @param stateId Key property. See {@link AddressDistricts.stateId}.
   * @param countyId Key property. See {@link AddressDistricts.countyId}.
   * @returns A request builder for creating requests to retrieve one `AddressDistricts` entity based on its keys.
   */
  getByKey(
    district: DeserializedType<T, 'Edm.String'>,
    cityKey: DeserializedType<T, 'Edm.String'>,
    countryRegionId: DeserializedType<T, 'Edm.String'>,
    stateId: DeserializedType<T, 'Edm.String'>,
    countyId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AddressDistricts<T>, T> {
    return new GetByKeyRequestBuilder<AddressDistricts<T>, T>(this.entityApi, {
      District: district,
      CityKey: cityKey,
      CountryRegionId: countryRegionId,
      StateId: stateId,
      CountyId: countyId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AddressDistricts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressDistricts`.
   */
  update(
    entity: AddressDistricts<T>
  ): UpdateRequestBuilder<AddressDistricts<T>, T> {
    return new UpdateRequestBuilder<AddressDistricts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AddressDistricts`.
   * @param district Key property. See {@link AddressDistricts.district}.
   * @param cityKey Key property. See {@link AddressDistricts.cityKey}.
   * @param countryRegionId Key property. See {@link AddressDistricts.countryRegionId}.
   * @param stateId Key property. See {@link AddressDistricts.stateId}.
   * @param countyId Key property. See {@link AddressDistricts.countyId}.
   * @returns A request builder for creating requests that delete an entity of type `AddressDistricts`.
   */
  delete(
    district: string,
    cityKey: string,
    countryRegionId: string,
    stateId: string,
    countyId: string
  ): DeleteRequestBuilder<AddressDistricts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressDistricts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressDistricts` by taking the entity as a parameter.
   */
  delete(
    entity: AddressDistricts<T>
  ): DeleteRequestBuilder<AddressDistricts<T>, T>;
  delete(
    districtOrEntity: any,
    cityKey?: string,
    countryRegionId?: string,
    stateId?: string,
    countyId?: string
  ): DeleteRequestBuilder<AddressDistricts<T>, T> {
    return new DeleteRequestBuilder<AddressDistricts<T>, T>(
      this.entityApi,
      districtOrEntity instanceof AddressDistricts
        ? districtOrEntity
        : {
            District: districtOrEntity!,
            CityKey: cityKey!,
            CountryRegionId: countryRegionId!,
            StateId: stateId!,
            CountyId: countyId!
          }
    );
  }
}
