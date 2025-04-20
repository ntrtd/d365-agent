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
import { PayIntV1PayrollPositionDetails } from './PayIntV1PayrollPositionDetails';

/**
 * Request builder class for operations supported on the {@link PayIntV1PayrollPositionDetails} entity.
 */
export class PayIntV1PayrollPositionDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1PayrollPositionDetails<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1PayrollPositionDetails` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1PayrollPositionDetails` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1PayrollPositionDetails<T>, T> {
    return new GetAllRequestBuilder<PayIntV1PayrollPositionDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayIntV1PayrollPositionDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1PayrollPositionDetails`.
   */
  create(
    entity: PayIntV1PayrollPositionDetails<T>
  ): CreateRequestBuilder<PayIntV1PayrollPositionDetails<T>, T> {
    return new CreateRequestBuilder<PayIntV1PayrollPositionDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1PayrollPositionDetails` entity based on its keys.
   * @param positionId Key property. See {@link PayIntV1PayrollPositionDetails.positionId}.
   * @param validFrom Key property. See {@link PayIntV1PayrollPositionDetails.validFrom}.
   * @param validTo Key property. See {@link PayIntV1PayrollPositionDetails.validTo}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1PayrollPositionDetails` entity based on its keys.
   */
  getByKey(
    positionId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PayIntV1PayrollPositionDetails<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1PayrollPositionDetails<T>, T>(
      this.entityApi,
      {
        PositionId: positionId,
        ValidFrom: validFrom,
        ValidTo: validTo
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1PayrollPositionDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1PayrollPositionDetails`.
   */
  update(
    entity: PayIntV1PayrollPositionDetails<T>
  ): UpdateRequestBuilder<PayIntV1PayrollPositionDetails<T>, T> {
    return new UpdateRequestBuilder<PayIntV1PayrollPositionDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1PayrollPositionDetails`.
   * @param positionId Key property. See {@link PayIntV1PayrollPositionDetails.positionId}.
   * @param validFrom Key property. See {@link PayIntV1PayrollPositionDetails.validFrom}.
   * @param validTo Key property. See {@link PayIntV1PayrollPositionDetails.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1PayrollPositionDetails`.
   */
  delete(
    positionId: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<PayIntV1PayrollPositionDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1PayrollPositionDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1PayrollPositionDetails` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1PayrollPositionDetails<T>
  ): DeleteRequestBuilder<PayIntV1PayrollPositionDetails<T>, T>;
  delete(
    positionIdOrEntity: any,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<PayIntV1PayrollPositionDetails<T>, T> {
    return new DeleteRequestBuilder<PayIntV1PayrollPositionDetails<T>, T>(
      this.entityApi,
      positionIdOrEntity instanceof PayIntV1PayrollPositionDetails
        ? positionIdOrEntity
        : {
            PositionId: positionIdOrEntity!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
