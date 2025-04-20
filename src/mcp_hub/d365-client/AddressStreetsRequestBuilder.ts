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
import { AddressStreets } from './AddressStreets';

/**
 * Request builder class for operations supported on the {@link AddressStreets} entity.
 */
export class AddressStreetsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AddressStreets<T>, T> {
  /**
   * Returns a request builder for querying all `AddressStreets` entities.
   * @returns A request builder for creating requests to retrieve all `AddressStreets` entities.
   */
  getAll(): GetAllRequestBuilder<AddressStreets<T>, T> {
    return new GetAllRequestBuilder<AddressStreets<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AddressStreets` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressStreets`.
   */
  create(
    entity: AddressStreets<T>
  ): CreateRequestBuilder<AddressStreets<T>, T> {
    return new CreateRequestBuilder<AddressStreets<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AddressStreets` entity based on its keys.
   * @param countryRegion Key property. See {@link AddressStreets.countryRegion}.
   * @param state Key property. See {@link AddressStreets.state}.
   * @param county Key property. See {@link AddressStreets.county}.
   * @param cityFkName Key property. See {@link AddressStreets.cityFkName}.
   * @param districtFkName Key property. See {@link AddressStreets.districtFkName}.
   * @param name Key property. See {@link AddressStreets.name}.
   * @param description Key property. See {@link AddressStreets.description}.
   * @returns A request builder for creating requests to retrieve one `AddressStreets` entity based on its keys.
   */
  getByKey(
    countryRegion: DeserializedType<T, 'Edm.String'>,
    state: DeserializedType<T, 'Edm.String'>,
    county: DeserializedType<T, 'Edm.String'>,
    cityFkName: DeserializedType<T, 'Edm.String'>,
    districtFkName: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>,
    description: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AddressStreets<T>, T> {
    return new GetByKeyRequestBuilder<AddressStreets<T>, T>(this.entityApi, {
      CountryRegion: countryRegion,
      State: state,
      County: county,
      City_FK_Name: cityFkName,
      District_FK_Name: districtFkName,
      Name: name,
      Description: description
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AddressStreets`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressStreets`.
   */
  update(
    entity: AddressStreets<T>
  ): UpdateRequestBuilder<AddressStreets<T>, T> {
    return new UpdateRequestBuilder<AddressStreets<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AddressStreets`.
   * @param countryRegion Key property. See {@link AddressStreets.countryRegion}.
   * @param state Key property. See {@link AddressStreets.state}.
   * @param county Key property. See {@link AddressStreets.county}.
   * @param cityFkName Key property. See {@link AddressStreets.cityFkName}.
   * @param districtFkName Key property. See {@link AddressStreets.districtFkName}.
   * @param name Key property. See {@link AddressStreets.name}.
   * @param description Key property. See {@link AddressStreets.description}.
   * @returns A request builder for creating requests that delete an entity of type `AddressStreets`.
   */
  delete(
    countryRegion: string,
    state: string,
    county: string,
    cityFkName: string,
    districtFkName: string,
    name: string,
    description: string
  ): DeleteRequestBuilder<AddressStreets<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressStreets`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressStreets` by taking the entity as a parameter.
   */
  delete(entity: AddressStreets<T>): DeleteRequestBuilder<AddressStreets<T>, T>;
  delete(
    countryRegionOrEntity: any,
    state?: string,
    county?: string,
    cityFkName?: string,
    districtFkName?: string,
    name?: string,
    description?: string
  ): DeleteRequestBuilder<AddressStreets<T>, T> {
    return new DeleteRequestBuilder<AddressStreets<T>, T>(
      this.entityApi,
      countryRegionOrEntity instanceof AddressStreets
        ? countryRegionOrEntity
        : {
            CountryRegion: countryRegionOrEntity!,
            State: state!,
            County: county!,
            City_FK_Name: cityFkName!,
            District_FK_Name: districtFkName!,
            Name: name!,
            Description: description!
          }
    );
  }
}
