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
import { ClmIntegrationAddressCountryRegions } from './ClmIntegrationAddressCountryRegions';

/**
 * Request builder class for operations supported on the {@link ClmIntegrationAddressCountryRegions} entity.
 */
export class ClmIntegrationAddressCountryRegionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ClmIntegrationAddressCountryRegions<T>, T> {
  /**
   * Returns a request builder for querying all `ClmIntegrationAddressCountryRegions` entities.
   * @returns A request builder for creating requests to retrieve all `ClmIntegrationAddressCountryRegions` entities.
   */
  getAll(): GetAllRequestBuilder<ClmIntegrationAddressCountryRegions<T>, T> {
    return new GetAllRequestBuilder<ClmIntegrationAddressCountryRegions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ClmIntegrationAddressCountryRegions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ClmIntegrationAddressCountryRegions`.
   */
  create(
    entity: ClmIntegrationAddressCountryRegions<T>
  ): CreateRequestBuilder<ClmIntegrationAddressCountryRegions<T>, T> {
    return new CreateRequestBuilder<ClmIntegrationAddressCountryRegions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ClmIntegrationAddressCountryRegions` entity based on its keys.
   * @param countryRegionId Key property. See {@link ClmIntegrationAddressCountryRegions.countryRegionId}.
   * @returns A request builder for creating requests to retrieve one `ClmIntegrationAddressCountryRegions` entity based on its keys.
   */
  getByKey(
    countryRegionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ClmIntegrationAddressCountryRegions<T>, T> {
    return new GetByKeyRequestBuilder<
      ClmIntegrationAddressCountryRegions<T>,
      T
    >(this.entityApi, { CountryRegionId: countryRegionId });
  }

  /**
   * Returns a request builder for updating an entity of type `ClmIntegrationAddressCountryRegions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ClmIntegrationAddressCountryRegions`.
   */
  update(
    entity: ClmIntegrationAddressCountryRegions<T>
  ): UpdateRequestBuilder<ClmIntegrationAddressCountryRegions<T>, T> {
    return new UpdateRequestBuilder<ClmIntegrationAddressCountryRegions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ClmIntegrationAddressCountryRegions`.
   * @param countryRegionId Key property. See {@link ClmIntegrationAddressCountryRegions.countryRegionId}.
   * @returns A request builder for creating requests that delete an entity of type `ClmIntegrationAddressCountryRegions`.
   */
  delete(
    countryRegionId: string
  ): DeleteRequestBuilder<ClmIntegrationAddressCountryRegions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ClmIntegrationAddressCountryRegions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ClmIntegrationAddressCountryRegions` by taking the entity as a parameter.
   */
  delete(
    entity: ClmIntegrationAddressCountryRegions<T>
  ): DeleteRequestBuilder<ClmIntegrationAddressCountryRegions<T>, T>;
  delete(
    countryRegionIdOrEntity: any
  ): DeleteRequestBuilder<ClmIntegrationAddressCountryRegions<T>, T> {
    return new DeleteRequestBuilder<ClmIntegrationAddressCountryRegions<T>, T>(
      this.entityApi,
      countryRegionIdOrEntity instanceof ClmIntegrationAddressCountryRegions
        ? countryRegionIdOrEntity
        : { CountryRegionId: countryRegionIdOrEntity! }
    );
  }
}
