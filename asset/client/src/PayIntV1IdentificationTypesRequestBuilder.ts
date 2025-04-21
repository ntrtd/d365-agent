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
import { PayIntV1IdentificationTypes } from './PayIntV1IdentificationTypes';

/**
 * Request builder class for operations supported on the {@link PayIntV1IdentificationTypes} entity.
 */
export class PayIntV1IdentificationTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1IdentificationTypes<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1IdentificationTypes` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1IdentificationTypes` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1IdentificationTypes<T>, T> {
    return new GetAllRequestBuilder<PayIntV1IdentificationTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayIntV1IdentificationTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1IdentificationTypes`.
   */
  create(
    entity: PayIntV1IdentificationTypes<T>
  ): CreateRequestBuilder<PayIntV1IdentificationTypes<T>, T> {
    return new CreateRequestBuilder<PayIntV1IdentificationTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1IdentificationTypes` entity based on its keys.
   * @param identificationTypeId Key property. See {@link PayIntV1IdentificationTypes.identificationTypeId}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1IdentificationTypes` entity based on its keys.
   */
  getByKey(
    identificationTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayIntV1IdentificationTypes<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1IdentificationTypes<T>, T>(
      this.entityApi,
      { IdentificationTypeId: identificationTypeId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1IdentificationTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1IdentificationTypes`.
   */
  update(
    entity: PayIntV1IdentificationTypes<T>
  ): UpdateRequestBuilder<PayIntV1IdentificationTypes<T>, T> {
    return new UpdateRequestBuilder<PayIntV1IdentificationTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1IdentificationTypes`.
   * @param identificationTypeId Key property. See {@link PayIntV1IdentificationTypes.identificationTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1IdentificationTypes`.
   */
  delete(
    identificationTypeId: string
  ): DeleteRequestBuilder<PayIntV1IdentificationTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1IdentificationTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1IdentificationTypes` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1IdentificationTypes<T>
  ): DeleteRequestBuilder<PayIntV1IdentificationTypes<T>, T>;
  delete(
    identificationTypeIdOrEntity: any
  ): DeleteRequestBuilder<PayIntV1IdentificationTypes<T>, T> {
    return new DeleteRequestBuilder<PayIntV1IdentificationTypes<T>, T>(
      this.entityApi,
      identificationTypeIdOrEntity instanceof PayIntV1IdentificationTypes
        ? identificationTypeIdOrEntity
        : { IdentificationTypeId: identificationTypeIdOrEntity! }
    );
  }
}
