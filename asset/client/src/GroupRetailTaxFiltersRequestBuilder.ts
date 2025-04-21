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
import { GroupRetailTaxFilters } from './GroupRetailTaxFilters';

/**
 * Request builder class for operations supported on the {@link GroupRetailTaxFilters} entity.
 */
export class GroupRetailTaxFiltersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GroupRetailTaxFilters<T>, T> {
  /**
   * Returns a request builder for querying all `GroupRetailTaxFilters` entities.
   * @returns A request builder for creating requests to retrieve all `GroupRetailTaxFilters` entities.
   */
  getAll(): GetAllRequestBuilder<GroupRetailTaxFilters<T>, T> {
    return new GetAllRequestBuilder<GroupRetailTaxFilters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `GroupRetailTaxFilters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GroupRetailTaxFilters`.
   */
  create(
    entity: GroupRetailTaxFilters<T>
  ): CreateRequestBuilder<GroupRetailTaxFilters<T>, T> {
    return new CreateRequestBuilder<GroupRetailTaxFilters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `GroupRetailTaxFilters` entity based on its keys.
   * @param dataAreaId Key property. See {@link GroupRetailTaxFilters.dataAreaId}.
   * @param taxGroupId Key property. See {@link GroupRetailTaxFilters.taxGroupId}.
   * @param city Key property. See {@link GroupRetailTaxFilters.city}.
   * @param countryRegion Key property. See {@link GroupRetailTaxFilters.countryRegion}.
   * @param county Key property. See {@link GroupRetailTaxFilters.county}.
   * @param district Key property. See {@link GroupRetailTaxFilters.district}.
   * @param state Key property. See {@link GroupRetailTaxFilters.state}.
   * @param zipCode Key property. See {@link GroupRetailTaxFilters.zipCode}.
   * @returns A request builder for creating requests to retrieve one `GroupRetailTaxFilters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxGroupId: DeserializedType<T, 'Edm.String'>,
    city: DeserializedType<T, 'Edm.String'>,
    countryRegion: DeserializedType<T, 'Edm.String'>,
    county: DeserializedType<T, 'Edm.String'>,
    district: DeserializedType<T, 'Edm.String'>,
    state: DeserializedType<T, 'Edm.String'>,
    zipCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<GroupRetailTaxFilters<T>, T> {
    return new GetByKeyRequestBuilder<GroupRetailTaxFilters<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TaxGroupId: taxGroupId,
        City: city,
        CountryRegion: countryRegion,
        County: county,
        District: district,
        State: state,
        ZipCode: zipCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `GroupRetailTaxFilters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GroupRetailTaxFilters`.
   */
  update(
    entity: GroupRetailTaxFilters<T>
  ): UpdateRequestBuilder<GroupRetailTaxFilters<T>, T> {
    return new UpdateRequestBuilder<GroupRetailTaxFilters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `GroupRetailTaxFilters`.
   * @param dataAreaId Key property. See {@link GroupRetailTaxFilters.dataAreaId}.
   * @param taxGroupId Key property. See {@link GroupRetailTaxFilters.taxGroupId}.
   * @param city Key property. See {@link GroupRetailTaxFilters.city}.
   * @param countryRegion Key property. See {@link GroupRetailTaxFilters.countryRegion}.
   * @param county Key property. See {@link GroupRetailTaxFilters.county}.
   * @param district Key property. See {@link GroupRetailTaxFilters.district}.
   * @param state Key property. See {@link GroupRetailTaxFilters.state}.
   * @param zipCode Key property. See {@link GroupRetailTaxFilters.zipCode}.
   * @returns A request builder for creating requests that delete an entity of type `GroupRetailTaxFilters`.
   */
  delete(
    dataAreaId: string,
    taxGroupId: string,
    city: string,
    countryRegion: string,
    county: string,
    district: string,
    state: string,
    zipCode: string
  ): DeleteRequestBuilder<GroupRetailTaxFilters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GroupRetailTaxFilters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GroupRetailTaxFilters` by taking the entity as a parameter.
   */
  delete(
    entity: GroupRetailTaxFilters<T>
  ): DeleteRequestBuilder<GroupRetailTaxFilters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxGroupId?: string,
    city?: string,
    countryRegion?: string,
    county?: string,
    district?: string,
    state?: string,
    zipCode?: string
  ): DeleteRequestBuilder<GroupRetailTaxFilters<T>, T> {
    return new DeleteRequestBuilder<GroupRetailTaxFilters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof GroupRetailTaxFilters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxGroupId: taxGroupId!,
            City: city!,
            CountryRegion: countryRegion!,
            County: county!,
            District: district!,
            State: state!,
            ZipCode: zipCode!
          }
    );
  }
}
