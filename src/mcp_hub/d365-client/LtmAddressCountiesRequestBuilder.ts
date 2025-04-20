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
import { LtmAddressCounties } from './LtmAddressCounties';

/**
 * Request builder class for operations supported on the {@link LtmAddressCounties} entity.
 */
export class LtmAddressCountiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmAddressCounties<T>, T> {
  /**
   * Returns a request builder for querying all `LtmAddressCounties` entities.
   * @returns A request builder for creating requests to retrieve all `LtmAddressCounties` entities.
   */
  getAll(): GetAllRequestBuilder<LtmAddressCounties<T>, T> {
    return new GetAllRequestBuilder<LtmAddressCounties<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LtmAddressCounties` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmAddressCounties`.
   */
  create(
    entity: LtmAddressCounties<T>
  ): CreateRequestBuilder<LtmAddressCounties<T>, T> {
    return new CreateRequestBuilder<LtmAddressCounties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmAddressCounties` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmAddressCounties.dataAreaId}.
   * @param countyId Key property. See {@link LtmAddressCounties.countyId}.
   * @param stateId Key property. See {@link LtmAddressCounties.stateId}.
   * @param countryRegionId Key property. See {@link LtmAddressCounties.countryRegionId}.
   * @returns A request builder for creating requests to retrieve one `LtmAddressCounties` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    countyId: DeserializedType<T, 'Edm.String'>,
    stateId: DeserializedType<T, 'Edm.String'>,
    countryRegionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmAddressCounties<T>, T> {
    return new GetByKeyRequestBuilder<LtmAddressCounties<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CountyId: countyId,
        StateId: stateId,
        CountryRegionId: countryRegionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LtmAddressCounties`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmAddressCounties`.
   */
  update(
    entity: LtmAddressCounties<T>
  ): UpdateRequestBuilder<LtmAddressCounties<T>, T> {
    return new UpdateRequestBuilder<LtmAddressCounties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmAddressCounties`.
   * @param dataAreaId Key property. See {@link LtmAddressCounties.dataAreaId}.
   * @param countyId Key property. See {@link LtmAddressCounties.countyId}.
   * @param stateId Key property. See {@link LtmAddressCounties.stateId}.
   * @param countryRegionId Key property. See {@link LtmAddressCounties.countryRegionId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmAddressCounties`.
   */
  delete(
    dataAreaId: string,
    countyId: string,
    stateId: string,
    countryRegionId: string
  ): DeleteRequestBuilder<LtmAddressCounties<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmAddressCounties`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmAddressCounties` by taking the entity as a parameter.
   */
  delete(
    entity: LtmAddressCounties<T>
  ): DeleteRequestBuilder<LtmAddressCounties<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    countyId?: string,
    stateId?: string,
    countryRegionId?: string
  ): DeleteRequestBuilder<LtmAddressCounties<T>, T> {
    return new DeleteRequestBuilder<LtmAddressCounties<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmAddressCounties
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CountyId: countyId!,
            StateId: stateId!,
            CountryRegionId: countryRegionId!
          }
    );
  }
}
