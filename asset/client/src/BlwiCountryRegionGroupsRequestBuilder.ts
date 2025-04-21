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
import { BlwiCountryRegionGroups } from './BlwiCountryRegionGroups';

/**
 * Request builder class for operations supported on the {@link BlwiCountryRegionGroups} entity.
 */
export class BlwiCountryRegionGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BlwiCountryRegionGroups<T>, T> {
  /**
   * Returns a request builder for querying all `BlwiCountryRegionGroups` entities.
   * @returns A request builder for creating requests to retrieve all `BlwiCountryRegionGroups` entities.
   */
  getAll(): GetAllRequestBuilder<BlwiCountryRegionGroups<T>, T> {
    return new GetAllRequestBuilder<BlwiCountryRegionGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BlwiCountryRegionGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BlwiCountryRegionGroups`.
   */
  create(
    entity: BlwiCountryRegionGroups<T>
  ): CreateRequestBuilder<BlwiCountryRegionGroups<T>, T> {
    return new CreateRequestBuilder<BlwiCountryRegionGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BlwiCountryRegionGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link BlwiCountryRegionGroups.dataAreaId}.
   * @param groupId Key property. See {@link BlwiCountryRegionGroups.groupId}.
   * @param countryRegionId Key property. See {@link BlwiCountryRegionGroups.countryRegionId}.
   * @returns A request builder for creating requests to retrieve one `BlwiCountryRegionGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>,
    countryRegionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BlwiCountryRegionGroups<T>, T> {
    return new GetByKeyRequestBuilder<BlwiCountryRegionGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupID: groupId,
        CountryRegionId: countryRegionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BlwiCountryRegionGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BlwiCountryRegionGroups`.
   */
  update(
    entity: BlwiCountryRegionGroups<T>
  ): UpdateRequestBuilder<BlwiCountryRegionGroups<T>, T> {
    return new UpdateRequestBuilder<BlwiCountryRegionGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BlwiCountryRegionGroups`.
   * @param dataAreaId Key property. See {@link BlwiCountryRegionGroups.dataAreaId}.
   * @param groupId Key property. See {@link BlwiCountryRegionGroups.groupId}.
   * @param countryRegionId Key property. See {@link BlwiCountryRegionGroups.countryRegionId}.
   * @returns A request builder for creating requests that delete an entity of type `BlwiCountryRegionGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string,
    countryRegionId: string
  ): DeleteRequestBuilder<BlwiCountryRegionGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BlwiCountryRegionGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BlwiCountryRegionGroups` by taking the entity as a parameter.
   */
  delete(
    entity: BlwiCountryRegionGroups<T>
  ): DeleteRequestBuilder<BlwiCountryRegionGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string,
    countryRegionId?: string
  ): DeleteRequestBuilder<BlwiCountryRegionGroups<T>, T> {
    return new DeleteRequestBuilder<BlwiCountryRegionGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BlwiCountryRegionGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupID: groupId!,
            CountryRegionId: countryRegionId!
          }
    );
  }
}
