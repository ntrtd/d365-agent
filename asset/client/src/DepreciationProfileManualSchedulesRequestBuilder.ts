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
import { DepreciationProfileManualSchedules } from './DepreciationProfileManualSchedules';

/**
 * Request builder class for operations supported on the {@link DepreciationProfileManualSchedules} entity.
 */
export class DepreciationProfileManualSchedulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DepreciationProfileManualSchedules<T>, T> {
  /**
   * Returns a request builder for querying all `DepreciationProfileManualSchedules` entities.
   * @returns A request builder for creating requests to retrieve all `DepreciationProfileManualSchedules` entities.
   */
  getAll(): GetAllRequestBuilder<DepreciationProfileManualSchedules<T>, T> {
    return new GetAllRequestBuilder<DepreciationProfileManualSchedules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DepreciationProfileManualSchedules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DepreciationProfileManualSchedules`.
   */
  create(
    entity: DepreciationProfileManualSchedules<T>
  ): CreateRequestBuilder<DepreciationProfileManualSchedules<T>, T> {
    return new CreateRequestBuilder<DepreciationProfileManualSchedules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DepreciationProfileManualSchedules` entity based on its keys.
   * @param dataAreaId Key property. See {@link DepreciationProfileManualSchedules.dataAreaId}.
   * @param profileId Key property. See {@link DepreciationProfileManualSchedules.profileId}.
   * @param intervalNumber Key property. See {@link DepreciationProfileManualSchedules.intervalNumber}.
   * @returns A request builder for creating requests to retrieve one `DepreciationProfileManualSchedules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    profileId: DeserializedType<T, 'Edm.String'>,
    intervalNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<DepreciationProfileManualSchedules<T>, T> {
    return new GetByKeyRequestBuilder<DepreciationProfileManualSchedules<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProfileId: profileId,
        IntervalNumber: intervalNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DepreciationProfileManualSchedules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DepreciationProfileManualSchedules`.
   */
  update(
    entity: DepreciationProfileManualSchedules<T>
  ): UpdateRequestBuilder<DepreciationProfileManualSchedules<T>, T> {
    return new UpdateRequestBuilder<DepreciationProfileManualSchedules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DepreciationProfileManualSchedules`.
   * @param dataAreaId Key property. See {@link DepreciationProfileManualSchedules.dataAreaId}.
   * @param profileId Key property. See {@link DepreciationProfileManualSchedules.profileId}.
   * @param intervalNumber Key property. See {@link DepreciationProfileManualSchedules.intervalNumber}.
   * @returns A request builder for creating requests that delete an entity of type `DepreciationProfileManualSchedules`.
   */
  delete(
    dataAreaId: string,
    profileId: string,
    intervalNumber: number
  ): DeleteRequestBuilder<DepreciationProfileManualSchedules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DepreciationProfileManualSchedules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DepreciationProfileManualSchedules` by taking the entity as a parameter.
   */
  delete(
    entity: DepreciationProfileManualSchedules<T>
  ): DeleteRequestBuilder<DepreciationProfileManualSchedules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    profileId?: string,
    intervalNumber?: number
  ): DeleteRequestBuilder<DepreciationProfileManualSchedules<T>, T> {
    return new DeleteRequestBuilder<DepreciationProfileManualSchedules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DepreciationProfileManualSchedules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProfileId: profileId!,
            IntervalNumber: intervalNumber!
          }
    );
  }
}
