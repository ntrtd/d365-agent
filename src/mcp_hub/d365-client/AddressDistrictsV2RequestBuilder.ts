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
import { AddressDistrictsV2 } from './AddressDistrictsV2';

/**
 * Request builder class for operations supported on the {@link AddressDistrictsV2} entity.
 */
export class AddressDistrictsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AddressDistrictsV2<T>, T> {
  /**
   * Returns a request builder for querying all `AddressDistrictsV2` entities.
   * @returns A request builder for creating requests to retrieve all `AddressDistrictsV2` entities.
   */
  getAll(): GetAllRequestBuilder<AddressDistrictsV2<T>, T> {
    return new GetAllRequestBuilder<AddressDistrictsV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AddressDistrictsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressDistrictsV2`.
   */
  create(
    entity: AddressDistrictsV2<T>
  ): CreateRequestBuilder<AddressDistrictsV2<T>, T> {
    return new CreateRequestBuilder<AddressDistrictsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AddressDistrictsV2` entity based on its keys.
   * @param district Key property. See {@link AddressDistrictsV2.district}.
   * @param cityKey Key property. See {@link AddressDistrictsV2.cityKey}.
   * @param countryRegionId Key property. See {@link AddressDistrictsV2.countryRegionId}.
   * @param stateId Key property. See {@link AddressDistrictsV2.stateId}.
   * @param countyId Key property. See {@link AddressDistrictsV2.countyId}.
   * @returns A request builder for creating requests to retrieve one `AddressDistrictsV2` entity based on its keys.
   */
  getByKey(
    district: DeserializedType<T, 'Edm.String'>,
    cityKey: DeserializedType<T, 'Edm.String'>,
    countryRegionId: DeserializedType<T, 'Edm.String'>,
    stateId: DeserializedType<T, 'Edm.String'>,
    countyId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AddressDistrictsV2<T>, T> {
    return new GetByKeyRequestBuilder<AddressDistrictsV2<T>, T>(
      this.entityApi,
      {
        District: district,
        CityKey: cityKey,
        CountryRegionId: countryRegionId,
        StateId: stateId,
        CountyId: countyId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AddressDistrictsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressDistrictsV2`.
   */
  update(
    entity: AddressDistrictsV2<T>
  ): UpdateRequestBuilder<AddressDistrictsV2<T>, T> {
    return new UpdateRequestBuilder<AddressDistrictsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AddressDistrictsV2`.
   * @param district Key property. See {@link AddressDistrictsV2.district}.
   * @param cityKey Key property. See {@link AddressDistrictsV2.cityKey}.
   * @param countryRegionId Key property. See {@link AddressDistrictsV2.countryRegionId}.
   * @param stateId Key property. See {@link AddressDistrictsV2.stateId}.
   * @param countyId Key property. See {@link AddressDistrictsV2.countyId}.
   * @returns A request builder for creating requests that delete an entity of type `AddressDistrictsV2`.
   */
  delete(
    district: string,
    cityKey: string,
    countryRegionId: string,
    stateId: string,
    countyId: string
  ): DeleteRequestBuilder<AddressDistrictsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressDistrictsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressDistrictsV2` by taking the entity as a parameter.
   */
  delete(
    entity: AddressDistrictsV2<T>
  ): DeleteRequestBuilder<AddressDistrictsV2<T>, T>;
  delete(
    districtOrEntity: any,
    cityKey?: string,
    countryRegionId?: string,
    stateId?: string,
    countyId?: string
  ): DeleteRequestBuilder<AddressDistrictsV2<T>, T> {
    return new DeleteRequestBuilder<AddressDistrictsV2<T>, T>(
      this.entityApi,
      districtOrEntity instanceof AddressDistrictsV2
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
