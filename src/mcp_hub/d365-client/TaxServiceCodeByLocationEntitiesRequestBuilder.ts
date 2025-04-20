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
import { TaxServiceCodeByLocationEntities } from './TaxServiceCodeByLocationEntities';

/**
 * Request builder class for operations supported on the {@link TaxServiceCodeByLocationEntities} entity.
 */
export class TaxServiceCodeByLocationEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxServiceCodeByLocationEntities<T>, T> {
  /**
   * Returns a request builder for querying all `TaxServiceCodeByLocationEntities` entities.
   * @returns A request builder for creating requests to retrieve all `TaxServiceCodeByLocationEntities` entities.
   */
  getAll(): GetAllRequestBuilder<TaxServiceCodeByLocationEntities<T>, T> {
    return new GetAllRequestBuilder<TaxServiceCodeByLocationEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TaxServiceCodeByLocationEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxServiceCodeByLocationEntities`.
   */
  create(
    entity: TaxServiceCodeByLocationEntities<T>
  ): CreateRequestBuilder<TaxServiceCodeByLocationEntities<T>, T> {
    return new CreateRequestBuilder<TaxServiceCodeByLocationEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxServiceCodeByLocationEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxServiceCodeByLocationEntities.dataAreaId}.
   * @param parentServiceCode Key property. See {@link TaxServiceCodeByLocationEntities.parentServiceCode}.
   * @param countryRegion Key property. See {@link TaxServiceCodeByLocationEntities.countryRegion}.
   * @param state Key property. See {@link TaxServiceCodeByLocationEntities.state}.
   * @param city Key property. See {@link TaxServiceCodeByLocationEntities.city}.
   * @param serviceCode Key property. See {@link TaxServiceCodeByLocationEntities.serviceCode}.
   * @returns A request builder for creating requests to retrieve one `TaxServiceCodeByLocationEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    parentServiceCode: DeserializedType<T, 'Edm.String'>,
    countryRegion: DeserializedType<T, 'Edm.String'>,
    state: DeserializedType<T, 'Edm.String'>,
    city: DeserializedType<T, 'Edm.String'>,
    serviceCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxServiceCodeByLocationEntities<T>, T> {
    return new GetByKeyRequestBuilder<TaxServiceCodeByLocationEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ParentServiceCode: parentServiceCode,
        CountryRegion: countryRegion,
        State: state,
        City: city,
        ServiceCode: serviceCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxServiceCodeByLocationEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxServiceCodeByLocationEntities`.
   */
  update(
    entity: TaxServiceCodeByLocationEntities<T>
  ): UpdateRequestBuilder<TaxServiceCodeByLocationEntities<T>, T> {
    return new UpdateRequestBuilder<TaxServiceCodeByLocationEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxServiceCodeByLocationEntities`.
   * @param dataAreaId Key property. See {@link TaxServiceCodeByLocationEntities.dataAreaId}.
   * @param parentServiceCode Key property. See {@link TaxServiceCodeByLocationEntities.parentServiceCode}.
   * @param countryRegion Key property. See {@link TaxServiceCodeByLocationEntities.countryRegion}.
   * @param state Key property. See {@link TaxServiceCodeByLocationEntities.state}.
   * @param city Key property. See {@link TaxServiceCodeByLocationEntities.city}.
   * @param serviceCode Key property. See {@link TaxServiceCodeByLocationEntities.serviceCode}.
   * @returns A request builder for creating requests that delete an entity of type `TaxServiceCodeByLocationEntities`.
   */
  delete(
    dataAreaId: string,
    parentServiceCode: string,
    countryRegion: string,
    state: string,
    city: string,
    serviceCode: string
  ): DeleteRequestBuilder<TaxServiceCodeByLocationEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxServiceCodeByLocationEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxServiceCodeByLocationEntities` by taking the entity as a parameter.
   */
  delete(
    entity: TaxServiceCodeByLocationEntities<T>
  ): DeleteRequestBuilder<TaxServiceCodeByLocationEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    parentServiceCode?: string,
    countryRegion?: string,
    state?: string,
    city?: string,
    serviceCode?: string
  ): DeleteRequestBuilder<TaxServiceCodeByLocationEntities<T>, T> {
    return new DeleteRequestBuilder<TaxServiceCodeByLocationEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxServiceCodeByLocationEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ParentServiceCode: parentServiceCode!,
            CountryRegion: countryRegion!,
            State: state!,
            City: city!,
            ServiceCode: serviceCode!
          }
    );
  }
}
