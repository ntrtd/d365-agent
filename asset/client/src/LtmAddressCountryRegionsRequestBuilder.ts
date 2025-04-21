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
import { LtmAddressCountryRegions } from './LtmAddressCountryRegions';

/**
 * Request builder class for operations supported on the {@link LtmAddressCountryRegions} entity.
 */
export class LtmAddressCountryRegionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmAddressCountryRegions<T>, T> {
  /**
   * Returns a request builder for querying all `LtmAddressCountryRegions` entities.
   * @returns A request builder for creating requests to retrieve all `LtmAddressCountryRegions` entities.
   */
  getAll(): GetAllRequestBuilder<LtmAddressCountryRegions<T>, T> {
    return new GetAllRequestBuilder<LtmAddressCountryRegions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LtmAddressCountryRegions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmAddressCountryRegions`.
   */
  create(
    entity: LtmAddressCountryRegions<T>
  ): CreateRequestBuilder<LtmAddressCountryRegions<T>, T> {
    return new CreateRequestBuilder<LtmAddressCountryRegions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmAddressCountryRegions` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmAddressCountryRegions.dataAreaId}.
   * @param countryRegionId Key property. See {@link LtmAddressCountryRegions.countryRegionId}.
   * @returns A request builder for creating requests to retrieve one `LtmAddressCountryRegions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    countryRegionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmAddressCountryRegions<T>, T> {
    return new GetByKeyRequestBuilder<LtmAddressCountryRegions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CountryRegionId: countryRegionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LtmAddressCountryRegions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmAddressCountryRegions`.
   */
  update(
    entity: LtmAddressCountryRegions<T>
  ): UpdateRequestBuilder<LtmAddressCountryRegions<T>, T> {
    return new UpdateRequestBuilder<LtmAddressCountryRegions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmAddressCountryRegions`.
   * @param dataAreaId Key property. See {@link LtmAddressCountryRegions.dataAreaId}.
   * @param countryRegionId Key property. See {@link LtmAddressCountryRegions.countryRegionId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmAddressCountryRegions`.
   */
  delete(
    dataAreaId: string,
    countryRegionId: string
  ): DeleteRequestBuilder<LtmAddressCountryRegions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmAddressCountryRegions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmAddressCountryRegions` by taking the entity as a parameter.
   */
  delete(
    entity: LtmAddressCountryRegions<T>
  ): DeleteRequestBuilder<LtmAddressCountryRegions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    countryRegionId?: string
  ): DeleteRequestBuilder<LtmAddressCountryRegions<T>, T> {
    return new DeleteRequestBuilder<LtmAddressCountryRegions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmAddressCountryRegions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CountryRegionId: countryRegionId!
          }
    );
  }
}
