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
import { DualWriteTaxRegions } from './DualWriteTaxRegions';

/**
 * Request builder class for operations supported on the {@link DualWriteTaxRegions} entity.
 */
export class DualWriteTaxRegionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DualWriteTaxRegions<T>, T> {
  /**
   * Returns a request builder for querying all `DualWriteTaxRegions` entities.
   * @returns A request builder for creating requests to retrieve all `DualWriteTaxRegions` entities.
   */
  getAll(): GetAllRequestBuilder<DualWriteTaxRegions<T>, T> {
    return new GetAllRequestBuilder<DualWriteTaxRegions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DualWriteTaxRegions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DualWriteTaxRegions`.
   */
  create(
    entity: DualWriteTaxRegions<T>
  ): CreateRequestBuilder<DualWriteTaxRegions<T>, T> {
    return new CreateRequestBuilder<DualWriteTaxRegions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DualWriteTaxRegions` entity based on its keys.
   * @param taxRegionName Key property. See {@link DualWriteTaxRegions.taxRegionName}.
   * @param city Key property. See {@link DualWriteTaxRegions.city}.
   * @param countryOrRegion Key property. See {@link DualWriteTaxRegions.countryOrRegion}.
   * @param county Key property. See {@link DualWriteTaxRegions.county}.
   * @param state Key property. See {@link DualWriteTaxRegions.state}.
   * @returns A request builder for creating requests to retrieve one `DualWriteTaxRegions` entity based on its keys.
   */
  getByKey(
    taxRegionName: DeserializedType<T, 'Edm.String'>,
    city: DeserializedType<T, 'Edm.String'>,
    countryOrRegion: DeserializedType<T, 'Edm.String'>,
    county: DeserializedType<T, 'Edm.String'>,
    state: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DualWriteTaxRegions<T>, T> {
    return new GetByKeyRequestBuilder<DualWriteTaxRegions<T>, T>(
      this.entityApi,
      {
        TaxRegionName: taxRegionName,
        City: city,
        CountryOrRegion: countryOrRegion,
        County: county,
        State: state
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DualWriteTaxRegions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DualWriteTaxRegions`.
   */
  update(
    entity: DualWriteTaxRegions<T>
  ): UpdateRequestBuilder<DualWriteTaxRegions<T>, T> {
    return new UpdateRequestBuilder<DualWriteTaxRegions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DualWriteTaxRegions`.
   * @param taxRegionName Key property. See {@link DualWriteTaxRegions.taxRegionName}.
   * @param city Key property. See {@link DualWriteTaxRegions.city}.
   * @param countryOrRegion Key property. See {@link DualWriteTaxRegions.countryOrRegion}.
   * @param county Key property. See {@link DualWriteTaxRegions.county}.
   * @param state Key property. See {@link DualWriteTaxRegions.state}.
   * @returns A request builder for creating requests that delete an entity of type `DualWriteTaxRegions`.
   */
  delete(
    taxRegionName: string,
    city: string,
    countryOrRegion: string,
    county: string,
    state: string
  ): DeleteRequestBuilder<DualWriteTaxRegions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DualWriteTaxRegions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DualWriteTaxRegions` by taking the entity as a parameter.
   */
  delete(
    entity: DualWriteTaxRegions<T>
  ): DeleteRequestBuilder<DualWriteTaxRegions<T>, T>;
  delete(
    taxRegionNameOrEntity: any,
    city?: string,
    countryOrRegion?: string,
    county?: string,
    state?: string
  ): DeleteRequestBuilder<DualWriteTaxRegions<T>, T> {
    return new DeleteRequestBuilder<DualWriteTaxRegions<T>, T>(
      this.entityApi,
      taxRegionNameOrEntity instanceof DualWriteTaxRegions
        ? taxRegionNameOrEntity
        : {
            TaxRegionName: taxRegionNameOrEntity!,
            City: city!,
            CountryOrRegion: countryOrRegion!,
            County: county!,
            State: state!
          }
    );
  }
}
