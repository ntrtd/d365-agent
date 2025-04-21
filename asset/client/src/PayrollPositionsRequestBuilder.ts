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
import { PayrollPositions } from './PayrollPositions';

/**
 * Request builder class for operations supported on the {@link PayrollPositions} entity.
 */
export class PayrollPositionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayrollPositions<T>, T> {
  /**
   * Returns a request builder for querying all `PayrollPositions` entities.
   * @returns A request builder for creating requests to retrieve all `PayrollPositions` entities.
   */
  getAll(): GetAllRequestBuilder<PayrollPositions<T>, T> {
    return new GetAllRequestBuilder<PayrollPositions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PayrollPositions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayrollPositions`.
   */
  create(
    entity: PayrollPositions<T>
  ): CreateRequestBuilder<PayrollPositions<T>, T> {
    return new CreateRequestBuilder<PayrollPositions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayrollPositions` entity based on its keys.
   * @param positionId Key property. See {@link PayrollPositions.positionId}.
   * @param validFrom Key property. See {@link PayrollPositions.validFrom}.
   * @returns A request builder for creating requests to retrieve one `PayrollPositions` entity based on its keys.
   */
  getByKey(
    positionId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PayrollPositions<T>, T> {
    return new GetByKeyRequestBuilder<PayrollPositions<T>, T>(this.entityApi, {
      PositionId: positionId,
      ValidFrom: validFrom
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PayrollPositions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayrollPositions`.
   */
  update(
    entity: PayrollPositions<T>
  ): UpdateRequestBuilder<PayrollPositions<T>, T> {
    return new UpdateRequestBuilder<PayrollPositions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayrollPositions`.
   * @param positionId Key property. See {@link PayrollPositions.positionId}.
   * @param validFrom Key property. See {@link PayrollPositions.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `PayrollPositions`.
   */
  delete(
    positionId: string,
    validFrom: Moment
  ): DeleteRequestBuilder<PayrollPositions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayrollPositions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayrollPositions` by taking the entity as a parameter.
   */
  delete(
    entity: PayrollPositions<T>
  ): DeleteRequestBuilder<PayrollPositions<T>, T>;
  delete(
    positionIdOrEntity: any,
    validFrom?: Moment
  ): DeleteRequestBuilder<PayrollPositions<T>, T> {
    return new DeleteRequestBuilder<PayrollPositions<T>, T>(
      this.entityApi,
      positionIdOrEntity instanceof PayrollPositions
        ? positionIdOrEntity
        : {
            PositionId: positionIdOrEntity!,
            ValidFrom: validFrom!
          }
    );
  }
}
