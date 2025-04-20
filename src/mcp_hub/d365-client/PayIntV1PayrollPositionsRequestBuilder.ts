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
import { PayIntV1PayrollPositions } from './PayIntV1PayrollPositions';

/**
 * Request builder class for operations supported on the {@link PayIntV1PayrollPositions} entity.
 */
export class PayIntV1PayrollPositionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1PayrollPositions<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1PayrollPositions` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1PayrollPositions` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1PayrollPositions<T>, T> {
    return new GetAllRequestBuilder<PayIntV1PayrollPositions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayIntV1PayrollPositions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1PayrollPositions`.
   */
  create(
    entity: PayIntV1PayrollPositions<T>
  ): CreateRequestBuilder<PayIntV1PayrollPositions<T>, T> {
    return new CreateRequestBuilder<PayIntV1PayrollPositions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1PayrollPositions` entity based on its keys.
   * @param positionId Key property. See {@link PayIntV1PayrollPositions.positionId}.
   * @param validFrom Key property. See {@link PayIntV1PayrollPositions.validFrom}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1PayrollPositions` entity based on its keys.
   */
  getByKey(
    positionId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PayIntV1PayrollPositions<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1PayrollPositions<T>, T>(
      this.entityApi,
      {
        PositionId: positionId,
        ValidFrom: validFrom
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1PayrollPositions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1PayrollPositions`.
   */
  update(
    entity: PayIntV1PayrollPositions<T>
  ): UpdateRequestBuilder<PayIntV1PayrollPositions<T>, T> {
    return new UpdateRequestBuilder<PayIntV1PayrollPositions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1PayrollPositions`.
   * @param positionId Key property. See {@link PayIntV1PayrollPositions.positionId}.
   * @param validFrom Key property. See {@link PayIntV1PayrollPositions.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1PayrollPositions`.
   */
  delete(
    positionId: string,
    validFrom: Moment
  ): DeleteRequestBuilder<PayIntV1PayrollPositions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1PayrollPositions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1PayrollPositions` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1PayrollPositions<T>
  ): DeleteRequestBuilder<PayIntV1PayrollPositions<T>, T>;
  delete(
    positionIdOrEntity: any,
    validFrom?: Moment
  ): DeleteRequestBuilder<PayIntV1PayrollPositions<T>, T> {
    return new DeleteRequestBuilder<PayIntV1PayrollPositions<T>, T>(
      this.entityApi,
      positionIdOrEntity instanceof PayIntV1PayrollPositions
        ? positionIdOrEntity
        : {
            PositionId: positionIdOrEntity!,
            ValidFrom: validFrom!
          }
    );
  }
}
