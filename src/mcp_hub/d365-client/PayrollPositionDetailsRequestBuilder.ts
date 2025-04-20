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
import { PayrollPositionDetails } from './PayrollPositionDetails';

/**
 * Request builder class for operations supported on the {@link PayrollPositionDetails} entity.
 */
export class PayrollPositionDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayrollPositionDetails<T>, T> {
  /**
   * Returns a request builder for querying all `PayrollPositionDetails` entities.
   * @returns A request builder for creating requests to retrieve all `PayrollPositionDetails` entities.
   */
  getAll(): GetAllRequestBuilder<PayrollPositionDetails<T>, T> {
    return new GetAllRequestBuilder<PayrollPositionDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayrollPositionDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayrollPositionDetails`.
   */
  create(
    entity: PayrollPositionDetails<T>
  ): CreateRequestBuilder<PayrollPositionDetails<T>, T> {
    return new CreateRequestBuilder<PayrollPositionDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayrollPositionDetails` entity based on its keys.
   * @param positionId Key property. See {@link PayrollPositionDetails.positionId}.
   * @param validFrom Key property. See {@link PayrollPositionDetails.validFrom}.
   * @param validTo Key property. See {@link PayrollPositionDetails.validTo}.
   * @returns A request builder for creating requests to retrieve one `PayrollPositionDetails` entity based on its keys.
   */
  getByKey(
    positionId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PayrollPositionDetails<T>, T> {
    return new GetByKeyRequestBuilder<PayrollPositionDetails<T>, T>(
      this.entityApi,
      {
        PositionId: positionId,
        ValidFrom: validFrom,
        ValidTo: validTo
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayrollPositionDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayrollPositionDetails`.
   */
  update(
    entity: PayrollPositionDetails<T>
  ): UpdateRequestBuilder<PayrollPositionDetails<T>, T> {
    return new UpdateRequestBuilder<PayrollPositionDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayrollPositionDetails`.
   * @param positionId Key property. See {@link PayrollPositionDetails.positionId}.
   * @param validFrom Key property. See {@link PayrollPositionDetails.validFrom}.
   * @param validTo Key property. See {@link PayrollPositionDetails.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `PayrollPositionDetails`.
   */
  delete(
    positionId: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<PayrollPositionDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayrollPositionDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayrollPositionDetails` by taking the entity as a parameter.
   */
  delete(
    entity: PayrollPositionDetails<T>
  ): DeleteRequestBuilder<PayrollPositionDetails<T>, T>;
  delete(
    positionIdOrEntity: any,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<PayrollPositionDetails<T>, T> {
    return new DeleteRequestBuilder<PayrollPositionDetails<T>, T>(
      this.entityApi,
      positionIdOrEntity instanceof PayrollPositionDetails
        ? positionIdOrEntity
        : {
            PositionId: positionIdOrEntity!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
