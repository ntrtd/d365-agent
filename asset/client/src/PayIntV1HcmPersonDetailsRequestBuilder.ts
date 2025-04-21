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
import { PayIntV1HcmPersonDetails } from './PayIntV1HcmPersonDetails';

/**
 * Request builder class for operations supported on the {@link PayIntV1HcmPersonDetails} entity.
 */
export class PayIntV1HcmPersonDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1HcmPersonDetails<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1HcmPersonDetails` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1HcmPersonDetails` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1HcmPersonDetails<T>, T> {
    return new GetAllRequestBuilder<PayIntV1HcmPersonDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayIntV1HcmPersonDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1HcmPersonDetails`.
   */
  create(
    entity: PayIntV1HcmPersonDetails<T>
  ): CreateRequestBuilder<PayIntV1HcmPersonDetails<T>, T> {
    return new CreateRequestBuilder<PayIntV1HcmPersonDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1HcmPersonDetails` entity based on its keys.
   * @param partyNumber Key property. See {@link PayIntV1HcmPersonDetails.partyNumber}.
   * @param validFrom Key property. See {@link PayIntV1HcmPersonDetails.validFrom}.
   * @param validTo Key property. See {@link PayIntV1HcmPersonDetails.validTo}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1HcmPersonDetails` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PayIntV1HcmPersonDetails<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1HcmPersonDetails<T>, T>(
      this.entityApi,
      {
        PartyNumber: partyNumber,
        ValidFrom: validFrom,
        ValidTo: validTo
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1HcmPersonDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1HcmPersonDetails`.
   */
  update(
    entity: PayIntV1HcmPersonDetails<T>
  ): UpdateRequestBuilder<PayIntV1HcmPersonDetails<T>, T> {
    return new UpdateRequestBuilder<PayIntV1HcmPersonDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1HcmPersonDetails`.
   * @param partyNumber Key property. See {@link PayIntV1HcmPersonDetails.partyNumber}.
   * @param validFrom Key property. See {@link PayIntV1HcmPersonDetails.validFrom}.
   * @param validTo Key property. See {@link PayIntV1HcmPersonDetails.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1HcmPersonDetails`.
   */
  delete(
    partyNumber: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<PayIntV1HcmPersonDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1HcmPersonDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1HcmPersonDetails` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1HcmPersonDetails<T>
  ): DeleteRequestBuilder<PayIntV1HcmPersonDetails<T>, T>;
  delete(
    partyNumberOrEntity: any,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<PayIntV1HcmPersonDetails<T>, T> {
    return new DeleteRequestBuilder<PayIntV1HcmPersonDetails<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof PayIntV1HcmPersonDetails
        ? partyNumberOrEntity
        : {
            PartyNumber: partyNumberOrEntity!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
