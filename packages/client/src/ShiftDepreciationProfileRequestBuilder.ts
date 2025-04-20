/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { ShiftDepreciationProfile } from './ShiftDepreciationProfile';

/**
 * Request builder class for operations supported on the {@link ShiftDepreciationProfile} entity.
 */
export class ShiftDepreciationProfileRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShiftDepreciationProfile<T>, T> {
  /**
   * Returns a request builder for querying all `ShiftDepreciationProfile` entities.
   * @returns A request builder for creating requests to retrieve all `ShiftDepreciationProfile` entities.
   */
  getAll(): GetAllRequestBuilder<ShiftDepreciationProfile<T>, T> {
    return new GetAllRequestBuilder<ShiftDepreciationProfile<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ShiftDepreciationProfile` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShiftDepreciationProfile`.
   */
  create(
    entity: ShiftDepreciationProfile<T>
  ): CreateRequestBuilder<ShiftDepreciationProfile<T>, T> {
    return new CreateRequestBuilder<ShiftDepreciationProfile<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ShiftDepreciationProfile` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShiftDepreciationProfile.dataAreaId}.
   * @param depreciationProfile Key property. See {@link ShiftDepreciationProfile.depreciationProfile}.
   * @param fromDate Key property. See {@link ShiftDepreciationProfile.fromDate}.
   * @param toDate Key property. See {@link ShiftDepreciationProfile.toDate}.
   * @returns A request builder for creating requests to retrieve one `ShiftDepreciationProfile` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    depreciationProfile: DeserializedType<T, 'Edm.String'>,
    fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    toDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<ShiftDepreciationProfile<T>, T> {
    return new GetByKeyRequestBuilder<ShiftDepreciationProfile<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DepreciationProfile: depreciationProfile,
        FromDate: fromDate,
        ToDate: toDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ShiftDepreciationProfile`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShiftDepreciationProfile`.
   */
  update(
    entity: ShiftDepreciationProfile<T>
  ): UpdateRequestBuilder<ShiftDepreciationProfile<T>, T> {
    return new UpdateRequestBuilder<ShiftDepreciationProfile<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ShiftDepreciationProfile`.
   * @param dataAreaId Key property. See {@link ShiftDepreciationProfile.dataAreaId}.
   * @param depreciationProfile Key property. See {@link ShiftDepreciationProfile.depreciationProfile}.
   * @param fromDate Key property. See {@link ShiftDepreciationProfile.fromDate}.
   * @param toDate Key property. See {@link ShiftDepreciationProfile.toDate}.
   * @returns A request builder for creating requests that delete an entity of type `ShiftDepreciationProfile`.
   */
  delete(
    dataAreaId: string,
    depreciationProfile: string,
    fromDate: Moment,
    toDate: Moment
  ): DeleteRequestBuilder<ShiftDepreciationProfile<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShiftDepreciationProfile`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShiftDepreciationProfile` by taking the entity as a parameter.
   */
  delete(
    entity: ShiftDepreciationProfile<T>
  ): DeleteRequestBuilder<ShiftDepreciationProfile<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    depreciationProfile?: string,
    fromDate?: Moment,
    toDate?: Moment
  ): DeleteRequestBuilder<ShiftDepreciationProfile<T>, T> {
    return new DeleteRequestBuilder<ShiftDepreciationProfile<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShiftDepreciationProfile
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DepreciationProfile: depreciationProfile!,
            FromDate: fromDate!,
            ToDate: toDate!
          }
    );
  }
}
