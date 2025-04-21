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
import { AddressCounties } from './AddressCounties';

/**
 * Request builder class for operations supported on the {@link AddressCounties} entity.
 */
export class AddressCountiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AddressCounties<T>, T> {
  /**
   * Returns a request builder for querying all `AddressCounties` entities.
   * @returns A request builder for creating requests to retrieve all `AddressCounties` entities.
   */
  getAll(): GetAllRequestBuilder<AddressCounties<T>, T> {
    return new GetAllRequestBuilder<AddressCounties<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AddressCounties` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressCounties`.
   */
  create(
    entity: AddressCounties<T>
  ): CreateRequestBuilder<AddressCounties<T>, T> {
    return new CreateRequestBuilder<AddressCounties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AddressCounties` entity based on its keys.
   * @param countryRegionId Key property. See {@link AddressCounties.countryRegionId}.
   * @param stateId Key property. See {@link AddressCounties.stateId}.
   * @param countyId Key property. See {@link AddressCounties.countyId}.
   * @returns A request builder for creating requests to retrieve one `AddressCounties` entity based on its keys.
   */
  getByKey(
    countryRegionId: DeserializedType<T, 'Edm.String'>,
    stateId: DeserializedType<T, 'Edm.String'>,
    countyId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AddressCounties<T>, T> {
    return new GetByKeyRequestBuilder<AddressCounties<T>, T>(this.entityApi, {
      CountryRegionId: countryRegionId,
      StateId: stateId,
      CountyId: countyId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AddressCounties`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressCounties`.
   */
  update(
    entity: AddressCounties<T>
  ): UpdateRequestBuilder<AddressCounties<T>, T> {
    return new UpdateRequestBuilder<AddressCounties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AddressCounties`.
   * @param countryRegionId Key property. See {@link AddressCounties.countryRegionId}.
   * @param stateId Key property. See {@link AddressCounties.stateId}.
   * @param countyId Key property. See {@link AddressCounties.countyId}.
   * @returns A request builder for creating requests that delete an entity of type `AddressCounties`.
   */
  delete(
    countryRegionId: string,
    stateId: string,
    countyId: string
  ): DeleteRequestBuilder<AddressCounties<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressCounties`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressCounties` by taking the entity as a parameter.
   */
  delete(
    entity: AddressCounties<T>
  ): DeleteRequestBuilder<AddressCounties<T>, T>;
  delete(
    countryRegionIdOrEntity: any,
    stateId?: string,
    countyId?: string
  ): DeleteRequestBuilder<AddressCounties<T>, T> {
    return new DeleteRequestBuilder<AddressCounties<T>, T>(
      this.entityApi,
      countryRegionIdOrEntity instanceof AddressCounties
        ? countryRegionIdOrEntity
        : {
            CountryRegionId: countryRegionIdOrEntity!,
            StateId: stateId!,
            CountyId: countyId!
          }
    );
  }
}
