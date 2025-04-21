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
import { LtmAddressCountryRegionDTypes } from './LtmAddressCountryRegionDTypes';

/**
 * Request builder class for operations supported on the {@link LtmAddressCountryRegionDTypes} entity.
 */
export class LtmAddressCountryRegionDTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmAddressCountryRegionDTypes<T>, T> {
  /**
   * Returns a request builder for querying all `LtmAddressCountryRegionDTypes` entities.
   * @returns A request builder for creating requests to retrieve all `LtmAddressCountryRegionDTypes` entities.
   */
  getAll(): GetAllRequestBuilder<LtmAddressCountryRegionDTypes<T>, T> {
    return new GetAllRequestBuilder<LtmAddressCountryRegionDTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LtmAddressCountryRegionDTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmAddressCountryRegionDTypes`.
   */
  create(
    entity: LtmAddressCountryRegionDTypes<T>
  ): CreateRequestBuilder<LtmAddressCountryRegionDTypes<T>, T> {
    return new CreateRequestBuilder<LtmAddressCountryRegionDTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmAddressCountryRegionDTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmAddressCountryRegionDTypes.dataAreaId}.
   * @param countryDocTypeId Key property. See {@link LtmAddressCountryRegionDTypes.countryDocTypeId}.
   * @param countryRegionId Key property. See {@link LtmAddressCountryRegionDTypes.countryRegionId}.
   * @returns A request builder for creating requests to retrieve one `LtmAddressCountryRegionDTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    countryDocTypeId: DeserializedType<T, 'Edm.String'>,
    countryRegionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmAddressCountryRegionDTypes<T>, T> {
    return new GetByKeyRequestBuilder<LtmAddressCountryRegionDTypes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CountryDocTypeId: countryDocTypeId,
        CountryRegionId: countryRegionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LtmAddressCountryRegionDTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmAddressCountryRegionDTypes`.
   */
  update(
    entity: LtmAddressCountryRegionDTypes<T>
  ): UpdateRequestBuilder<LtmAddressCountryRegionDTypes<T>, T> {
    return new UpdateRequestBuilder<LtmAddressCountryRegionDTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmAddressCountryRegionDTypes`.
   * @param dataAreaId Key property. See {@link LtmAddressCountryRegionDTypes.dataAreaId}.
   * @param countryDocTypeId Key property. See {@link LtmAddressCountryRegionDTypes.countryDocTypeId}.
   * @param countryRegionId Key property. See {@link LtmAddressCountryRegionDTypes.countryRegionId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmAddressCountryRegionDTypes`.
   */
  delete(
    dataAreaId: string,
    countryDocTypeId: string,
    countryRegionId: string
  ): DeleteRequestBuilder<LtmAddressCountryRegionDTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmAddressCountryRegionDTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmAddressCountryRegionDTypes` by taking the entity as a parameter.
   */
  delete(
    entity: LtmAddressCountryRegionDTypes<T>
  ): DeleteRequestBuilder<LtmAddressCountryRegionDTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    countryDocTypeId?: string,
    countryRegionId?: string
  ): DeleteRequestBuilder<LtmAddressCountryRegionDTypes<T>, T> {
    return new DeleteRequestBuilder<LtmAddressCountryRegionDTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmAddressCountryRegionDTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CountryDocTypeId: countryDocTypeId!,
            CountryRegionId: countryRegionId!
          }
    );
  }
}
