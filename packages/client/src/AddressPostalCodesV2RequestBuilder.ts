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
import { AddressPostalCodesV2 } from './AddressPostalCodesV2';
import { AllEvenOdd } from './AllEvenOdd';

/**
 * Request builder class for operations supported on the {@link AddressPostalCodesV2} entity.
 */
export class AddressPostalCodesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AddressPostalCodesV2<T>, T> {
  /**
   * Returns a request builder for querying all `AddressPostalCodesV2` entities.
   * @returns A request builder for creating requests to retrieve all `AddressPostalCodesV2` entities.
   */
  getAll(): GetAllRequestBuilder<AddressPostalCodesV2<T>, T> {
    return new GetAllRequestBuilder<AddressPostalCodesV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AddressPostalCodesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressPostalCodesV2`.
   */
  create(
    entity: AddressPostalCodesV2<T>
  ): CreateRequestBuilder<AddressPostalCodesV2<T>, T> {
    return new CreateRequestBuilder<AddressPostalCodesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AddressPostalCodesV2` entity based on its keys.
   * @param zipCode Key property. See {@link AddressPostalCodesV2.zipCode}.
   * @param countryRegionId Key property. See {@link AddressPostalCodesV2.countryRegionId}.
   * @param stateId Key property. See {@link AddressPostalCodesV2.stateId}.
   * @param countyId Key property. See {@link AddressPostalCodesV2.countyId}.
   * @param cityId Key property. See {@link AddressPostalCodesV2.cityId}.
   * @param districtId Key property. See {@link AddressPostalCodesV2.districtId}.
   * @param streetNumberMinimum Key property. See {@link AddressPostalCodesV2.streetNumberMinimum}.
   * @param streetNumberMaximum Key property. See {@link AddressPostalCodesV2.streetNumberMaximum}.
   * @param streetNumberValidity Key property. See {@link AddressPostalCodesV2.streetNumberValidity}.
   * @returns A request builder for creating requests to retrieve one `AddressPostalCodesV2` entity based on its keys.
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
    >
  ): GetByKeyRequestBuilder<AddressPostalCodesV2<T>, T> {
    return new GetByKeyRequestBuilder<AddressPostalCodesV2<T>, T>(
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
        StreetNumberValidity: streetNumberValidity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AddressPostalCodesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressPostalCodesV2`.
   */
  update(
    entity: AddressPostalCodesV2<T>
  ): UpdateRequestBuilder<AddressPostalCodesV2<T>, T> {
    return new UpdateRequestBuilder<AddressPostalCodesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AddressPostalCodesV2`.
   * @param zipCode Key property. See {@link AddressPostalCodesV2.zipCode}.
   * @param countryRegionId Key property. See {@link AddressPostalCodesV2.countryRegionId}.
   * @param stateId Key property. See {@link AddressPostalCodesV2.stateId}.
   * @param countyId Key property. See {@link AddressPostalCodesV2.countyId}.
   * @param cityId Key property. See {@link AddressPostalCodesV2.cityId}.
   * @param districtId Key property. See {@link AddressPostalCodesV2.districtId}.
   * @param streetNumberMinimum Key property. See {@link AddressPostalCodesV2.streetNumberMinimum}.
   * @param streetNumberMaximum Key property. See {@link AddressPostalCodesV2.streetNumberMaximum}.
   * @param streetNumberValidity Key property. See {@link AddressPostalCodesV2.streetNumberValidity}.
   * @returns A request builder for creating requests that delete an entity of type `AddressPostalCodesV2`.
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
    streetNumberValidity: AllEvenOdd
  ): DeleteRequestBuilder<AddressPostalCodesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressPostalCodesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressPostalCodesV2` by taking the entity as a parameter.
   */
  delete(
    entity: AddressPostalCodesV2<T>
  ): DeleteRequestBuilder<AddressPostalCodesV2<T>, T>;
  delete(
    zipCodeOrEntity: any,
    countryRegionId?: string,
    stateId?: string,
    countyId?: string,
    cityId?: string,
    districtId?: string,
    streetNumberMinimum?: number,
    streetNumberMaximum?: number,
    streetNumberValidity?: AllEvenOdd
  ): DeleteRequestBuilder<AddressPostalCodesV2<T>, T> {
    return new DeleteRequestBuilder<AddressPostalCodesV2<T>, T>(
      this.entityApi,
      zipCodeOrEntity instanceof AddressPostalCodesV2
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
            StreetNumberValidity: streetNumberValidity!
          }
    );
  }
}
