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
import { PositionDurations } from './PositionDurations';

/**
 * Request builder class for operations supported on the {@link PositionDurations} entity.
 */
export class PositionDurationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PositionDurations<T>, T> {
  /**
   * Returns a request builder for querying all `PositionDurations` entities.
   * @returns A request builder for creating requests to retrieve all `PositionDurations` entities.
   */
  getAll(): GetAllRequestBuilder<PositionDurations<T>, T> {
    return new GetAllRequestBuilder<PositionDurations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PositionDurations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PositionDurations`.
   */
  create(
    entity: PositionDurations<T>
  ): CreateRequestBuilder<PositionDurations<T>, T> {
    return new CreateRequestBuilder<PositionDurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PositionDurations` entity based on its keys.
   * @param positionId Key property. See {@link PositionDurations.positionId}.
   * @param validFrom Key property. See {@link PositionDurations.validFrom}.
   * @param validTo Key property. See {@link PositionDurations.validTo}.
   * @returns A request builder for creating requests to retrieve one `PositionDurations` entity based on its keys.
   */
  getByKey(
    positionId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PositionDurations<T>, T> {
    return new GetByKeyRequestBuilder<PositionDurations<T>, T>(this.entityApi, {
      PositionId: positionId,
      ValidFrom: validFrom,
      ValidTo: validTo
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PositionDurations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PositionDurations`.
   */
  update(
    entity: PositionDurations<T>
  ): UpdateRequestBuilder<PositionDurations<T>, T> {
    return new UpdateRequestBuilder<PositionDurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PositionDurations`.
   * @param positionId Key property. See {@link PositionDurations.positionId}.
   * @param validFrom Key property. See {@link PositionDurations.validFrom}.
   * @param validTo Key property. See {@link PositionDurations.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `PositionDurations`.
   */
  delete(
    positionId: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<PositionDurations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PositionDurations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PositionDurations` by taking the entity as a parameter.
   */
  delete(
    entity: PositionDurations<T>
  ): DeleteRequestBuilder<PositionDurations<T>, T>;
  delete(
    positionIdOrEntity: any,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<PositionDurations<T>, T> {
    return new DeleteRequestBuilder<PositionDurations<T>, T>(
      this.entityApi,
      positionIdOrEntity instanceof PositionDurations
        ? positionIdOrEntity
        : {
            PositionId: positionIdOrEntity!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
