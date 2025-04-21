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
import { PayIntV1HcmPositionDetails } from './PayIntV1HcmPositionDetails';

/**
 * Request builder class for operations supported on the {@link PayIntV1HcmPositionDetails} entity.
 */
export class PayIntV1HcmPositionDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1HcmPositionDetails<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1HcmPositionDetails` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1HcmPositionDetails` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1HcmPositionDetails<T>, T> {
    return new GetAllRequestBuilder<PayIntV1HcmPositionDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayIntV1HcmPositionDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1HcmPositionDetails`.
   */
  create(
    entity: PayIntV1HcmPositionDetails<T>
  ): CreateRequestBuilder<PayIntV1HcmPositionDetails<T>, T> {
    return new CreateRequestBuilder<PayIntV1HcmPositionDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1HcmPositionDetails` entity based on its keys.
   * @param positionId Key property. See {@link PayIntV1HcmPositionDetails.positionId}.
   * @param validFrom Key property. See {@link PayIntV1HcmPositionDetails.validFrom}.
   * @param validTo Key property. See {@link PayIntV1HcmPositionDetails.validTo}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1HcmPositionDetails` entity based on its keys.
   */
  getByKey(
    positionId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PayIntV1HcmPositionDetails<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1HcmPositionDetails<T>, T>(
      this.entityApi,
      {
        PositionId: positionId,
        ValidFrom: validFrom,
        ValidTo: validTo
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1HcmPositionDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1HcmPositionDetails`.
   */
  update(
    entity: PayIntV1HcmPositionDetails<T>
  ): UpdateRequestBuilder<PayIntV1HcmPositionDetails<T>, T> {
    return new UpdateRequestBuilder<PayIntV1HcmPositionDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1HcmPositionDetails`.
   * @param positionId Key property. See {@link PayIntV1HcmPositionDetails.positionId}.
   * @param validFrom Key property. See {@link PayIntV1HcmPositionDetails.validFrom}.
   * @param validTo Key property. See {@link PayIntV1HcmPositionDetails.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1HcmPositionDetails`.
   */
  delete(
    positionId: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<PayIntV1HcmPositionDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1HcmPositionDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1HcmPositionDetails` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1HcmPositionDetails<T>
  ): DeleteRequestBuilder<PayIntV1HcmPositionDetails<T>, T>;
  delete(
    positionIdOrEntity: any,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<PayIntV1HcmPositionDetails<T>, T> {
    return new DeleteRequestBuilder<PayIntV1HcmPositionDetails<T>, T>(
      this.entityApi,
      positionIdOrEntity instanceof PayIntV1HcmPositionDetails
        ? positionIdOrEntity
        : {
            PositionId: positionIdOrEntity!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
