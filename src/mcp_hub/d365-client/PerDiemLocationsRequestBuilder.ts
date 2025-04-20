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
import { PerDiemLocations } from './PerDiemLocations';

/**
 * Request builder class for operations supported on the {@link PerDiemLocations} entity.
 */
export class PerDiemLocationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PerDiemLocations<T>, T> {
  /**
   * Returns a request builder for querying all `PerDiemLocations` entities.
   * @returns A request builder for creating requests to retrieve all `PerDiemLocations` entities.
   */
  getAll(): GetAllRequestBuilder<PerDiemLocations<T>, T> {
    return new GetAllRequestBuilder<PerDiemLocations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PerDiemLocations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PerDiemLocations`.
   */
  create(
    entity: PerDiemLocations<T>
  ): CreateRequestBuilder<PerDiemLocations<T>, T> {
    return new CreateRequestBuilder<PerDiemLocations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PerDiemLocations` entity based on its keys.
   * @param dataAreaId Key property. See {@link PerDiemLocations.dataAreaId}.
   * @param location Key property. See {@link PerDiemLocations.location}.
   * @param stateId Key property. See {@link PerDiemLocations.stateId}.
   * @param countryRegionId Key property. See {@link PerDiemLocations.countryRegionId}.
   * @returns A request builder for creating requests to retrieve one `PerDiemLocations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    location: DeserializedType<T, 'Edm.String'>,
    stateId: DeserializedType<T, 'Edm.String'>,
    countryRegionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PerDiemLocations<T>, T> {
    return new GetByKeyRequestBuilder<PerDiemLocations<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Location: location,
      StateId: stateId,
      CountryRegionId: countryRegionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PerDiemLocations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PerDiemLocations`.
   */
  update(
    entity: PerDiemLocations<T>
  ): UpdateRequestBuilder<PerDiemLocations<T>, T> {
    return new UpdateRequestBuilder<PerDiemLocations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PerDiemLocations`.
   * @param dataAreaId Key property. See {@link PerDiemLocations.dataAreaId}.
   * @param location Key property. See {@link PerDiemLocations.location}.
   * @param stateId Key property. See {@link PerDiemLocations.stateId}.
   * @param countryRegionId Key property. See {@link PerDiemLocations.countryRegionId}.
   * @returns A request builder for creating requests that delete an entity of type `PerDiemLocations`.
   */
  delete(
    dataAreaId: string,
    location: string,
    stateId: string,
    countryRegionId: string
  ): DeleteRequestBuilder<PerDiemLocations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PerDiemLocations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PerDiemLocations` by taking the entity as a parameter.
   */
  delete(
    entity: PerDiemLocations<T>
  ): DeleteRequestBuilder<PerDiemLocations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    location?: string,
    stateId?: string,
    countryRegionId?: string
  ): DeleteRequestBuilder<PerDiemLocations<T>, T> {
    return new DeleteRequestBuilder<PerDiemLocations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PerDiemLocations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Location: location!,
            StateId: stateId!,
            CountryRegionId: countryRegionId!
          }
    );
  }
}
