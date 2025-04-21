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
import { RetailSupportedCountryRegions } from './RetailSupportedCountryRegions';

/**
 * Request builder class for operations supported on the {@link RetailSupportedCountryRegions} entity.
 */
export class RetailSupportedCountryRegionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailSupportedCountryRegions<T>, T> {
  /**
   * Returns a request builder for querying all `RetailSupportedCountryRegions` entities.
   * @returns A request builder for creating requests to retrieve all `RetailSupportedCountryRegions` entities.
   */
  getAll(): GetAllRequestBuilder<RetailSupportedCountryRegions<T>, T> {
    return new GetAllRequestBuilder<RetailSupportedCountryRegions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailSupportedCountryRegions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailSupportedCountryRegions`.
   */
  create(
    entity: RetailSupportedCountryRegions<T>
  ): CreateRequestBuilder<RetailSupportedCountryRegions<T>, T> {
    return new CreateRequestBuilder<RetailSupportedCountryRegions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailSupportedCountryRegions` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailSupportedCountryRegions.dataAreaId}.
   * @param supportedCountryRegionIsoCode Key property. See {@link RetailSupportedCountryRegions.supportedCountryRegionIsoCode}.
   * @returns A request builder for creating requests to retrieve one `RetailSupportedCountryRegions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    supportedCountryRegionIsoCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailSupportedCountryRegions<T>, T> {
    return new GetByKeyRequestBuilder<RetailSupportedCountryRegions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        supportedCountryRegionISOCode: supportedCountryRegionIsoCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailSupportedCountryRegions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailSupportedCountryRegions`.
   */
  update(
    entity: RetailSupportedCountryRegions<T>
  ): UpdateRequestBuilder<RetailSupportedCountryRegions<T>, T> {
    return new UpdateRequestBuilder<RetailSupportedCountryRegions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailSupportedCountryRegions`.
   * @param dataAreaId Key property. See {@link RetailSupportedCountryRegions.dataAreaId}.
   * @param supportedCountryRegionIsoCode Key property. See {@link RetailSupportedCountryRegions.supportedCountryRegionIsoCode}.
   * @returns A request builder for creating requests that delete an entity of type `RetailSupportedCountryRegions`.
   */
  delete(
    dataAreaId: string,
    supportedCountryRegionIsoCode: string
  ): DeleteRequestBuilder<RetailSupportedCountryRegions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailSupportedCountryRegions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailSupportedCountryRegions` by taking the entity as a parameter.
   */
  delete(
    entity: RetailSupportedCountryRegions<T>
  ): DeleteRequestBuilder<RetailSupportedCountryRegions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    supportedCountryRegionIsoCode?: string
  ): DeleteRequestBuilder<RetailSupportedCountryRegions<T>, T> {
    return new DeleteRequestBuilder<RetailSupportedCountryRegions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailSupportedCountryRegions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            supportedCountryRegionISOCode: supportedCountryRegionIsoCode!
          }
    );
  }
}
