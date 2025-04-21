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
import { PayIntV1PersonIdentificationNumbers } from './PayIntV1PersonIdentificationNumbers';

/**
 * Request builder class for operations supported on the {@link PayIntV1PersonIdentificationNumbers} entity.
 */
export class PayIntV1PersonIdentificationNumbersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1PersonIdentificationNumbers<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1PersonIdentificationNumbers` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1PersonIdentificationNumbers` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1PersonIdentificationNumbers<T>, T> {
    return new GetAllRequestBuilder<PayIntV1PersonIdentificationNumbers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayIntV1PersonIdentificationNumbers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1PersonIdentificationNumbers`.
   */
  create(
    entity: PayIntV1PersonIdentificationNumbers<T>
  ): CreateRequestBuilder<PayIntV1PersonIdentificationNumbers<T>, T> {
    return new CreateRequestBuilder<PayIntV1PersonIdentificationNumbers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1PersonIdentificationNumbers` entity based on its keys.
   * @param partyNumber Key property. See {@link PayIntV1PersonIdentificationNumbers.partyNumber}.
   * @param identificationTypeId Key property. See {@link PayIntV1PersonIdentificationNumbers.identificationTypeId}.
   * @param identificationNumber Key property. See {@link PayIntV1PersonIdentificationNumbers.identificationNumber}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1PersonIdentificationNumbers` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>,
    identificationTypeId: DeserializedType<T, 'Edm.String'>,
    identificationNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayIntV1PersonIdentificationNumbers<T>, T> {
    return new GetByKeyRequestBuilder<
      PayIntV1PersonIdentificationNumbers<T>,
      T
    >(this.entityApi, {
      PartyNumber: partyNumber,
      IdentificationTypeId: identificationTypeId,
      IdentificationNumber: identificationNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1PersonIdentificationNumbers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1PersonIdentificationNumbers`.
   */
  update(
    entity: PayIntV1PersonIdentificationNumbers<T>
  ): UpdateRequestBuilder<PayIntV1PersonIdentificationNumbers<T>, T> {
    return new UpdateRequestBuilder<PayIntV1PersonIdentificationNumbers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1PersonIdentificationNumbers`.
   * @param partyNumber Key property. See {@link PayIntV1PersonIdentificationNumbers.partyNumber}.
   * @param identificationTypeId Key property. See {@link PayIntV1PersonIdentificationNumbers.identificationTypeId}.
   * @param identificationNumber Key property. See {@link PayIntV1PersonIdentificationNumbers.identificationNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1PersonIdentificationNumbers`.
   */
  delete(
    partyNumber: string,
    identificationTypeId: string,
    identificationNumber: string
  ): DeleteRequestBuilder<PayIntV1PersonIdentificationNumbers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1PersonIdentificationNumbers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1PersonIdentificationNumbers` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1PersonIdentificationNumbers<T>
  ): DeleteRequestBuilder<PayIntV1PersonIdentificationNumbers<T>, T>;
  delete(
    partyNumberOrEntity: any,
    identificationTypeId?: string,
    identificationNumber?: string
  ): DeleteRequestBuilder<PayIntV1PersonIdentificationNumbers<T>, T> {
    return new DeleteRequestBuilder<PayIntV1PersonIdentificationNumbers<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof PayIntV1PersonIdentificationNumbers
        ? partyNumberOrEntity
        : {
            PartyNumber: partyNumberOrEntity!,
            IdentificationTypeId: identificationTypeId!,
            IdentificationNumber: identificationNumber!
          }
    );
  }
}
