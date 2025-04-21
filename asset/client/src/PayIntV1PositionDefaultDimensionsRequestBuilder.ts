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
import { PayIntV1PositionDefaultDimensions } from './PayIntV1PositionDefaultDimensions';

/**
 * Request builder class for operations supported on the {@link PayIntV1PositionDefaultDimensions} entity.
 */
export class PayIntV1PositionDefaultDimensionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1PositionDefaultDimensions<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1PositionDefaultDimensions` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1PositionDefaultDimensions` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1PositionDefaultDimensions<T>, T> {
    return new GetAllRequestBuilder<PayIntV1PositionDefaultDimensions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayIntV1PositionDefaultDimensions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1PositionDefaultDimensions`.
   */
  create(
    entity: PayIntV1PositionDefaultDimensions<T>
  ): CreateRequestBuilder<PayIntV1PositionDefaultDimensions<T>, T> {
    return new CreateRequestBuilder<PayIntV1PositionDefaultDimensions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1PositionDefaultDimensions` entity based on its keys.
   * @param positionId Key property. See {@link PayIntV1PositionDefaultDimensions.positionId}.
   * @param legalEntityDataArea Key property. See {@link PayIntV1PositionDefaultDimensions.legalEntityDataArea}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1PositionDefaultDimensions` entity based on its keys.
   */
  getByKey(
    positionId: DeserializedType<T, 'Edm.String'>,
    legalEntityDataArea: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayIntV1PositionDefaultDimensions<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1PositionDefaultDimensions<T>, T>(
      this.entityApi,
      {
        PositionId: positionId,
        LegalEntityDataArea: legalEntityDataArea
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1PositionDefaultDimensions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1PositionDefaultDimensions`.
   */
  update(
    entity: PayIntV1PositionDefaultDimensions<T>
  ): UpdateRequestBuilder<PayIntV1PositionDefaultDimensions<T>, T> {
    return new UpdateRequestBuilder<PayIntV1PositionDefaultDimensions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1PositionDefaultDimensions`.
   * @param positionId Key property. See {@link PayIntV1PositionDefaultDimensions.positionId}.
   * @param legalEntityDataArea Key property. See {@link PayIntV1PositionDefaultDimensions.legalEntityDataArea}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1PositionDefaultDimensions`.
   */
  delete(
    positionId: string,
    legalEntityDataArea: string
  ): DeleteRequestBuilder<PayIntV1PositionDefaultDimensions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1PositionDefaultDimensions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1PositionDefaultDimensions` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1PositionDefaultDimensions<T>
  ): DeleteRequestBuilder<PayIntV1PositionDefaultDimensions<T>, T>;
  delete(
    positionIdOrEntity: any,
    legalEntityDataArea?: string
  ): DeleteRequestBuilder<PayIntV1PositionDefaultDimensions<T>, T> {
    return new DeleteRequestBuilder<PayIntV1PositionDefaultDimensions<T>, T>(
      this.entityApi,
      positionIdOrEntity instanceof PayIntV1PositionDefaultDimensions
        ? positionIdOrEntity
        : {
            PositionId: positionIdOrEntity!,
            LegalEntityDataArea: legalEntityDataArea!
          }
    );
  }
}
