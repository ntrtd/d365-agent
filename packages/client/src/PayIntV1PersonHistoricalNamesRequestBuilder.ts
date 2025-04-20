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
import { PayIntV1PersonHistoricalNames } from './PayIntV1PersonHistoricalNames';

/**
 * Request builder class for operations supported on the {@link PayIntV1PersonHistoricalNames} entity.
 */
export class PayIntV1PersonHistoricalNamesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1PersonHistoricalNames<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1PersonHistoricalNames` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1PersonHistoricalNames` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1PersonHistoricalNames<T>, T> {
    return new GetAllRequestBuilder<PayIntV1PersonHistoricalNames<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayIntV1PersonHistoricalNames` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1PersonHistoricalNames`.
   */
  create(
    entity: PayIntV1PersonHistoricalNames<T>
  ): CreateRequestBuilder<PayIntV1PersonHistoricalNames<T>, T> {
    return new CreateRequestBuilder<PayIntV1PersonHistoricalNames<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1PersonHistoricalNames` entity based on its keys.
   * @param partyNumber Key property. See {@link PayIntV1PersonHistoricalNames.partyNumber}.
   * @param validFrom Key property. See {@link PayIntV1PersonHistoricalNames.validFrom}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1PersonHistoricalNames` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PayIntV1PersonHistoricalNames<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1PersonHistoricalNames<T>, T>(
      this.entityApi,
      {
        PartyNumber: partyNumber,
        ValidFrom: validFrom
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1PersonHistoricalNames`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1PersonHistoricalNames`.
   */
  update(
    entity: PayIntV1PersonHistoricalNames<T>
  ): UpdateRequestBuilder<PayIntV1PersonHistoricalNames<T>, T> {
    return new UpdateRequestBuilder<PayIntV1PersonHistoricalNames<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1PersonHistoricalNames`.
   * @param partyNumber Key property. See {@link PayIntV1PersonHistoricalNames.partyNumber}.
   * @param validFrom Key property. See {@link PayIntV1PersonHistoricalNames.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1PersonHistoricalNames`.
   */
  delete(
    partyNumber: string,
    validFrom: Moment
  ): DeleteRequestBuilder<PayIntV1PersonHistoricalNames<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1PersonHistoricalNames`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1PersonHistoricalNames` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1PersonHistoricalNames<T>
  ): DeleteRequestBuilder<PayIntV1PersonHistoricalNames<T>, T>;
  delete(
    partyNumberOrEntity: any,
    validFrom?: Moment
  ): DeleteRequestBuilder<PayIntV1PersonHistoricalNames<T>, T> {
    return new DeleteRequestBuilder<PayIntV1PersonHistoricalNames<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof PayIntV1PersonHistoricalNames
        ? partyNumberOrEntity
        : {
            PartyNumber: partyNumberOrEntity!,
            ValidFrom: validFrom!
          }
    );
  }
}
