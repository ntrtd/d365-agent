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
import { PayIntV1PositionUnionAgreements } from './PayIntV1PositionUnionAgreements';

/**
 * Request builder class for operations supported on the {@link PayIntV1PositionUnionAgreements} entity.
 */
export class PayIntV1PositionUnionAgreementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1PositionUnionAgreements<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1PositionUnionAgreements` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1PositionUnionAgreements` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1PositionUnionAgreements<T>, T> {
    return new GetAllRequestBuilder<PayIntV1PositionUnionAgreements<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayIntV1PositionUnionAgreements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1PositionUnionAgreements`.
   */
  create(
    entity: PayIntV1PositionUnionAgreements<T>
  ): CreateRequestBuilder<PayIntV1PositionUnionAgreements<T>, T> {
    return new CreateRequestBuilder<PayIntV1PositionUnionAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1PositionUnionAgreements` entity based on its keys.
   * @param positionId Key property. See {@link PayIntV1PositionUnionAgreements.positionId}.
   * @param validFrom Key property. See {@link PayIntV1PositionUnionAgreements.validFrom}.
   * @param validTo Key property. See {@link PayIntV1PositionUnionAgreements.validTo}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1PositionUnionAgreements` entity based on its keys.
   */
  getByKey(
    positionId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PayIntV1PositionUnionAgreements<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1PositionUnionAgreements<T>, T>(
      this.entityApi,
      {
        PositionId: positionId,
        ValidFrom: validFrom,
        ValidTo: validTo
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1PositionUnionAgreements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1PositionUnionAgreements`.
   */
  update(
    entity: PayIntV1PositionUnionAgreements<T>
  ): UpdateRequestBuilder<PayIntV1PositionUnionAgreements<T>, T> {
    return new UpdateRequestBuilder<PayIntV1PositionUnionAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1PositionUnionAgreements`.
   * @param positionId Key property. See {@link PayIntV1PositionUnionAgreements.positionId}.
   * @param validFrom Key property. See {@link PayIntV1PositionUnionAgreements.validFrom}.
   * @param validTo Key property. See {@link PayIntV1PositionUnionAgreements.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1PositionUnionAgreements`.
   */
  delete(
    positionId: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<PayIntV1PositionUnionAgreements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1PositionUnionAgreements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1PositionUnionAgreements` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1PositionUnionAgreements<T>
  ): DeleteRequestBuilder<PayIntV1PositionUnionAgreements<T>, T>;
  delete(
    positionIdOrEntity: any,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<PayIntV1PositionUnionAgreements<T>, T> {
    return new DeleteRequestBuilder<PayIntV1PositionUnionAgreements<T>, T>(
      this.entityApi,
      positionIdOrEntity instanceof PayIntV1PositionUnionAgreements
        ? positionIdOrEntity
        : {
            PositionId: positionIdOrEntity!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
