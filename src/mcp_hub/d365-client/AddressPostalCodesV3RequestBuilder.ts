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
import { AddressPostalCodesV3 } from './AddressPostalCodesV3';
import { AllEvenOdd } from './AllEvenOdd';
import { Timezone } from './Timezone';

/**
 * Request builder class for operations supported on the {@link AddressPostalCodesV3} entity.
 */
export class AddressPostalCodesV3RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AddressPostalCodesV3<T>, T> {
  /**
   * Returns a request builder for querying all `AddressPostalCodesV3` entities.
   * @returns A request builder for creating requests to retrieve all `AddressPostalCodesV3` entities.
   */
  getAll(): GetAllRequestBuilder<AddressPostalCodesV3<T>, T> {
    return new GetAllRequestBuilder<AddressPostalCodesV3<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AddressPostalCodesV3` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressPostalCodesV3`.
   */
  create(
    entity: AddressPostalCodesV3<T>
  ): CreateRequestBuilder<AddressPostalCodesV3<T>, T> {
    return new CreateRequestBuilder<AddressPostalCodesV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AddressPostalCodesV3` entity based on its keys.
   * @param zipCode Key property. See {@link AddressPostalCodesV3.zipCode}.
   * @param countryRegionId Key property. See {@link AddressPostalCodesV3.countryRegionId}.
   * @param stateId Key property. See {@link AddressPostalCodesV3.stateId}.
   * @param countyId Key property. See {@link AddressPostalCodesV3.countyId}.
   * @param cityId Key property. See {@link AddressPostalCodesV3.cityId}.
   * @param districtId Key property. See {@link AddressPostalCodesV3.districtId}.
   * @param streetNumberMinimum Key property. See {@link AddressPostalCodesV3.streetNumberMinimum}.
   * @param streetNumberMaximum Key property. See {@link AddressPostalCodesV3.streetNumberMaximum}.
   * @param streetNumberValidity Key property. See {@link AddressPostalCodesV3.streetNumberValidity}.
   * @param street Key property. See {@link AddressPostalCodesV3.street}.
   * @param timeZone Key property. See {@link AddressPostalCodesV3.timeZone}.
   * @returns A request builder for creating requests to retrieve one `AddressPostalCodesV3` entity based on its keys.
   */
  getByKey(
    zipCode: DeserializedType<T, 'Edm.String'>,
    countryRegionId: DeserializedType<T, 'Edm.String'>,
    stateId: DeserializedType<T, 'Edm.String'>,
    countyId: DeserializedType<T, 'Edm.String'>,
    cityId: DeserializedType<T, 'Edm.String'>,
    districtId: DeserializedType<T, 'Edm.String'>,
    streetNumberMinimum: DeserializedType<T, 'Edm.Int32'>,
    streetNumberMaximum: DeserializedType<T, 'Edm.Int32'>,
    streetNumberValidity: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.AllEvenOdd'
    >,
    street: DeserializedType<T, 'Edm.String'>,
    timeZone: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.Timezone'>
  ): GetByKeyRequestBuilder<AddressPostalCodesV3<T>, T> {
    return new GetByKeyRequestBuilder<AddressPostalCodesV3<T>, T>(
      this.entityApi,
      {
        ZipCode: zipCode,
        CountryRegionId: countryRegionId,
        StateId: stateId,
        CountyId: countyId,
        CityId: cityId,
        DistrictId: districtId,
        StreetNumberMinimum: streetNumberMinimum,
        StreetNumberMaximum: streetNumberMaximum,
        StreetNumberValidity: streetNumberValidity,
        Street: street,
        TimeZone: timeZone
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AddressPostalCodesV3`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressPostalCodesV3`.
   */
  update(
    entity: AddressPostalCodesV3<T>
  ): UpdateRequestBuilder<AddressPostalCodesV3<T>, T> {
    return new UpdateRequestBuilder<AddressPostalCodesV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AddressPostalCodesV3`.
   * @param zipCode Key property. See {@link AddressPostalCodesV3.zipCode}.
   * @param countryRegionId Key property. See {@link AddressPostalCodesV3.countryRegionId}.
   * @param stateId Key property. See {@link AddressPostalCodesV3.stateId}.
   * @param countyId Key property. See {@link AddressPostalCodesV3.countyId}.
   * @param cityId Key property. See {@link AddressPostalCodesV3.cityId}.
   * @param districtId Key property. See {@link AddressPostalCodesV3.districtId}.
   * @param streetNumberMinimum Key property. See {@link AddressPostalCodesV3.streetNumberMinimum}.
   * @param streetNumberMaximum Key property. See {@link AddressPostalCodesV3.streetNumberMaximum}.
   * @param streetNumberValidity Key property. See {@link AddressPostalCodesV3.streetNumberValidity}.
   * @param street Key property. See {@link AddressPostalCodesV3.street}.
   * @param timeZone Key property. See {@link AddressPostalCodesV3.timeZone}.
   * @returns A request builder for creating requests that delete an entity of type `AddressPostalCodesV3`.
   */
  delete(
    zipCode: string,
    countryRegionId: string,
    stateId: string,
    countyId: string,
    cityId: string,
    districtId: string,
    streetNumberMinimum: number,
    streetNumberMaximum: number,
    streetNumberValidity: AllEvenOdd,
    street: string,
    timeZone: Timezone
  ): DeleteRequestBuilder<AddressPostalCodesV3<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressPostalCodesV3`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressPostalCodesV3` by taking the entity as a parameter.
   */
  delete(
    entity: AddressPostalCodesV3<T>
  ): DeleteRequestBuilder<AddressPostalCodesV3<T>, T>;
  delete(
    zipCodeOrEntity: any,
    countryRegionId?: string,
    stateId?: string,
    countyId?: string,
    cityId?: string,
    districtId?: string,
    streetNumberMinimum?: number,
    streetNumberMaximum?: number,
    streetNumberValidity?: AllEvenOdd,
    street?: string,
    timeZone?: Timezone
  ): DeleteRequestBuilder<AddressPostalCodesV3<T>, T> {
    return new DeleteRequestBuilder<AddressPostalCodesV3<T>, T>(
      this.entityApi,
      zipCodeOrEntity instanceof AddressPostalCodesV3
        ? zipCodeOrEntity
        : {
            ZipCode: zipCodeOrEntity!,
            CountryRegionId: countryRegionId!,
            StateId: stateId!,
            CountyId: countyId!,
            CityId: cityId!,
            DistrictId: districtId!,
            StreetNumberMinimum: streetNumberMinimum!,
            StreetNumberMaximum: streetNumberMaximum!,
            StreetNumberValidity: streetNumberValidity!,
            Street: street!,
            TimeZone: timeZone!
          }
    );
  }
}
