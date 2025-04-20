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
import { IdentificationTypes } from './IdentificationTypes';

/**
 * Request builder class for operations supported on the {@link IdentificationTypes} entity.
 */
export class IdentificationTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IdentificationTypes<T>, T> {
  /**
   * Returns a request builder for querying all `IdentificationTypes` entities.
   * @returns A request builder for creating requests to retrieve all `IdentificationTypes` entities.
   */
  getAll(): GetAllRequestBuilder<IdentificationTypes<T>, T> {
    return new GetAllRequestBuilder<IdentificationTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `IdentificationTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IdentificationTypes`.
   */
  create(
    entity: IdentificationTypes<T>
  ): CreateRequestBuilder<IdentificationTypes<T>, T> {
    return new CreateRequestBuilder<IdentificationTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `IdentificationTypes` entity based on its keys.
   * @param identificationTypeId Key property. See {@link IdentificationTypes.identificationTypeId}.
   * @returns A request builder for creating requests to retrieve one `IdentificationTypes` entity based on its keys.
   */
  getByKey(
    identificationTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<IdentificationTypes<T>, T> {
    return new GetByKeyRequestBuilder<IdentificationTypes<T>, T>(
      this.entityApi,
      { IdentificationTypeId: identificationTypeId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `IdentificationTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IdentificationTypes`.
   */
  update(
    entity: IdentificationTypes<T>
  ): UpdateRequestBuilder<IdentificationTypes<T>, T> {
    return new UpdateRequestBuilder<IdentificationTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `IdentificationTypes`.
   * @param identificationTypeId Key property. See {@link IdentificationTypes.identificationTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `IdentificationTypes`.
   */
  delete(
    identificationTypeId: string
  ): DeleteRequestBuilder<IdentificationTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IdentificationTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IdentificationTypes` by taking the entity as a parameter.
   */
  delete(
    entity: IdentificationTypes<T>
  ): DeleteRequestBuilder<IdentificationTypes<T>, T>;
  delete(
    identificationTypeIdOrEntity: any
  ): DeleteRequestBuilder<IdentificationTypes<T>, T> {
    return new DeleteRequestBuilder<IdentificationTypes<T>, T>(
      this.entityApi,
      identificationTypeIdOrEntity instanceof IdentificationTypes
        ? identificationTypeIdOrEntity
        : { IdentificationTypeId: identificationTypeIdOrEntity! }
    );
  }
}
