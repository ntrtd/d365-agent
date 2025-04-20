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
import { OnlineChannelCountryRegions } from './OnlineChannelCountryRegions';

/**
 * Request builder class for operations supported on the {@link OnlineChannelCountryRegions} entity.
 */
export class OnlineChannelCountryRegionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OnlineChannelCountryRegions<T>, T> {
  /**
   * Returns a request builder for querying all `OnlineChannelCountryRegions` entities.
   * @returns A request builder for creating requests to retrieve all `OnlineChannelCountryRegions` entities.
   */
  getAll(): GetAllRequestBuilder<OnlineChannelCountryRegions<T>, T> {
    return new GetAllRequestBuilder<OnlineChannelCountryRegions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OnlineChannelCountryRegions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OnlineChannelCountryRegions`.
   */
  create(
    entity: OnlineChannelCountryRegions<T>
  ): CreateRequestBuilder<OnlineChannelCountryRegions<T>, T> {
    return new CreateRequestBuilder<OnlineChannelCountryRegions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OnlineChannelCountryRegions` entity based on its keys.
   * @param countryRegionId Key property. See {@link OnlineChannelCountryRegions.countryRegionId}.
   * @param omOperatingUnitNumber Key property. See {@link OnlineChannelCountryRegions.omOperatingUnitNumber}.
   * @returns A request builder for creating requests to retrieve one `OnlineChannelCountryRegions` entity based on its keys.
   */
  getByKey(
    countryRegionId: DeserializedType<T, 'Edm.String'>,
    omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OnlineChannelCountryRegions<T>, T> {
    return new GetByKeyRequestBuilder<OnlineChannelCountryRegions<T>, T>(
      this.entityApi,
      {
        CountryRegionId: countryRegionId,
        OMOperatingUnitNumber: omOperatingUnitNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OnlineChannelCountryRegions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OnlineChannelCountryRegions`.
   */
  update(
    entity: OnlineChannelCountryRegions<T>
  ): UpdateRequestBuilder<OnlineChannelCountryRegions<T>, T> {
    return new UpdateRequestBuilder<OnlineChannelCountryRegions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OnlineChannelCountryRegions`.
   * @param countryRegionId Key property. See {@link OnlineChannelCountryRegions.countryRegionId}.
   * @param omOperatingUnitNumber Key property. See {@link OnlineChannelCountryRegions.omOperatingUnitNumber}.
   * @returns A request builder for creating requests that delete an entity of type `OnlineChannelCountryRegions`.
   */
  delete(
    countryRegionId: string,
    omOperatingUnitNumber: string
  ): DeleteRequestBuilder<OnlineChannelCountryRegions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OnlineChannelCountryRegions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OnlineChannelCountryRegions` by taking the entity as a parameter.
   */
  delete(
    entity: OnlineChannelCountryRegions<T>
  ): DeleteRequestBuilder<OnlineChannelCountryRegions<T>, T>;
  delete(
    countryRegionIdOrEntity: any,
    omOperatingUnitNumber?: string
  ): DeleteRequestBuilder<OnlineChannelCountryRegions<T>, T> {
    return new DeleteRequestBuilder<OnlineChannelCountryRegions<T>, T>(
      this.entityApi,
      countryRegionIdOrEntity instanceof OnlineChannelCountryRegions
        ? countryRegionIdOrEntity
        : {
            CountryRegionId: countryRegionIdOrEntity!,
            OMOperatingUnitNumber: omOperatingUnitNumber!
          }
    );
  }
}
