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
import { AddressPostalCodes } from './AddressPostalCodes';

/**
 * Request builder class for operations supported on the {@link AddressPostalCodes} entity.
 */
export class AddressPostalCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AddressPostalCodes<T>, T> {
  /**
   * Returns a request builder for querying all `AddressPostalCodes` entities.
   * @returns A request builder for creating requests to retrieve all `AddressPostalCodes` entities.
   */
  getAll(): GetAllRequestBuilder<AddressPostalCodes<T>, T> {
    return new GetAllRequestBuilder<AddressPostalCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AddressPostalCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressPostalCodes`.
   */
  create(
    entity: AddressPostalCodes<T>
  ): CreateRequestBuilder<AddressPostalCodes<T>, T> {
    return new CreateRequestBuilder<AddressPostalCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AddressPostalCodes` entity based on its keys.
   * @param zipCode Key property. See {@link AddressPostalCodes.zipCode}.
   * @param countryRegionId Key property. See {@link AddressPostalCodes.countryRegionId}.
   * @param stateId Key property. See {@link AddressPostalCodes.stateId}.
   * @param countyId Key property. See {@link AddressPostalCodes.countyId}.
   * @param cityId Key property. See {@link AddressPostalCodes.cityId}.
   * @param districtId Key property. See {@link AddressPostalCodes.districtId}.
   * @param streetNumberMinimum Key property. See {@link AddressPostalCodes.streetNumberMinimum}.
   * @param streetNumberMaximum Key property. See {@link AddressPostalCodes.streetNumberMaximum}.
   * @returns A request builder for creating requests to retrieve one `AddressPostalCodes` entity based on its keys.
   */
  getByKey(
    zipCode: DeserializedType<T, 'Edm.String'>,
    countryRegionId: DeserializedType<T, 'Edm.String'>,
    stateId: DeserializedType<T, 'Edm.String'>,
    countyId: DeserializedType<T, 'Edm.String'>,
    cityId: DeserializedType<T, 'Edm.String'>,
    districtId: DeserializedType<T, 'Edm.String'>,
    streetNumberMinimum: DeserializedType<T, 'Edm.Int32'>,
    streetNumberMaximum: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<AddressPostalCodes<T>, T> {
    return new GetByKeyRequestBuilder<AddressPostalCodes<T>, T>(
      this.entityApi,
      {
        ZipCode: zipCode,
        CountryRegionId: countryRegionId,
        StateId: stateId,
        CountyId: countyId,
        CityId: cityId,
        DistrictId: districtId,
        StreetNumberMinimum: streetNumberMinimum,
        StreetNumberMaximum: streetNumberMaximum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AddressPostalCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressPostalCodes`.
   */
  update(
    entity: AddressPostalCodes<T>
  ): UpdateRequestBuilder<AddressPostalCodes<T>, T> {
    return new UpdateRequestBuilder<AddressPostalCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AddressPostalCodes`.
   * @param zipCode Key property. See {@link AddressPostalCodes.zipCode}.
   * @param countryRegionId Key property. See {@link AddressPostalCodes.countryRegionId}.
   * @param stateId Key property. See {@link AddressPostalCodes.stateId}.
   * @param countyId Key property. See {@link AddressPostalCodes.countyId}.
   * @param cityId Key property. See {@link AddressPostalCodes.cityId}.
   * @param districtId Key property. See {@link AddressPostalCodes.districtId}.
   * @param streetNumberMinimum Key property. See {@link AddressPostalCodes.streetNumberMinimum}.
   * @param streetNumberMaximum Key property. See {@link AddressPostalCodes.streetNumberMaximum}.
   * @returns A request builder for creating requests that delete an entity of type `AddressPostalCodes`.
   */
  delete(
    zipCode: string,
    countryRegionId: string,
    stateId: string,
    countyId: string,
    cityId: string,
    districtId: string,
    streetNumberMinimum: number,
    streetNumberMaximum: number
  ): DeleteRequestBuilder<AddressPostalCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressPostalCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressPostalCodes` by taking the entity as a parameter.
   */
  delete(
    entity: AddressPostalCodes<T>
  ): DeleteRequestBuilder<AddressPostalCodes<T>, T>;
  delete(
    zipCodeOrEntity: any,
    countryRegionId?: string,
    stateId?: string,
    countyId?: string,
    cityId?: string,
    districtId?: string,
    streetNumberMinimum?: number,
    streetNumberMaximum?: number
  ): DeleteRequestBuilder<AddressPostalCodes<T>, T> {
    return new DeleteRequestBuilder<AddressPostalCodes<T>, T>(
      this.entityApi,
      zipCodeOrEntity instanceof AddressPostalCodes
        ? zipCodeOrEntity
        : {
            ZipCode: zipCodeOrEntity!,
            CountryRegionId: countryRegionId!,
            StateId: stateId!,
            CountyId: countyId!,
            CityId: cityId!,
            DistrictId: districtId!,
            StreetNumberMinimum: streetNumberMinimum!,
            StreetNumberMaximum: streetNumberMaximum!
          }
    );
  }
}
