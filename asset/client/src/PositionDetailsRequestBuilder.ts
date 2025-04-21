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
import { PositionDetails } from './PositionDetails';

/**
 * Request builder class for operations supported on the {@link PositionDetails} entity.
 */
export class PositionDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PositionDetails<T>, T> {
  /**
   * Returns a request builder for querying all `PositionDetails` entities.
   * @returns A request builder for creating requests to retrieve all `PositionDetails` entities.
   */
  getAll(): GetAllRequestBuilder<PositionDetails<T>, T> {
    return new GetAllRequestBuilder<PositionDetails<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PositionDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PositionDetails`.
   */
  create(
    entity: PositionDetails<T>
  ): CreateRequestBuilder<PositionDetails<T>, T> {
    return new CreateRequestBuilder<PositionDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PositionDetails` entity based on its keys.
   * @param positionId Key property. See {@link PositionDetails.positionId}.
   * @param validFrom Key property. See {@link PositionDetails.validFrom}.
   * @param validTo Key property. See {@link PositionDetails.validTo}.
   * @returns A request builder for creating requests to retrieve one `PositionDetails` entity based on its keys.
   */
  getByKey(
    positionId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PositionDetails<T>, T> {
    return new GetByKeyRequestBuilder<PositionDetails<T>, T>(this.entityApi, {
      PositionId: positionId,
      ValidFrom: validFrom,
      ValidTo: validTo
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PositionDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PositionDetails`.
   */
  update(
    entity: PositionDetails<T>
  ): UpdateRequestBuilder<PositionDetails<T>, T> {
    return new UpdateRequestBuilder<PositionDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PositionDetails`.
   * @param positionId Key property. See {@link PositionDetails.positionId}.
   * @param validFrom Key property. See {@link PositionDetails.validFrom}.
   * @param validTo Key property. See {@link PositionDetails.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `PositionDetails`.
   */
  delete(
    positionId: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<PositionDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PositionDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PositionDetails` by taking the entity as a parameter.
   */
  delete(
    entity: PositionDetails<T>
  ): DeleteRequestBuilder<PositionDetails<T>, T>;
  delete(
    positionIdOrEntity: any,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<PositionDetails<T>, T> {
    return new DeleteRequestBuilder<PositionDetails<T>, T>(
      this.entityApi,
      positionIdOrEntity instanceof PositionDetails
        ? positionIdOrEntity
        : {
            PositionId: positionIdOrEntity!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
