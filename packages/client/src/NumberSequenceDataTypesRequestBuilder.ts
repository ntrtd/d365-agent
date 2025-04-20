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
import { NumberSequenceDataTypes } from './NumberSequenceDataTypes';

/**
 * Request builder class for operations supported on the {@link NumberSequenceDataTypes} entity.
 */
export class NumberSequenceDataTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<NumberSequenceDataTypes<T>, T> {
  /**
   * Returns a request builder for querying all `NumberSequenceDataTypes` entities.
   * @returns A request builder for creating requests to retrieve all `NumberSequenceDataTypes` entities.
   */
  getAll(): GetAllRequestBuilder<NumberSequenceDataTypes<T>, T> {
    return new GetAllRequestBuilder<NumberSequenceDataTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `NumberSequenceDataTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `NumberSequenceDataTypes`.
   */
  create(
    entity: NumberSequenceDataTypes<T>
  ): CreateRequestBuilder<NumberSequenceDataTypes<T>, T> {
    return new CreateRequestBuilder<NumberSequenceDataTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `NumberSequenceDataTypes` entity based on its keys.
   * @param name Key property. See {@link NumberSequenceDataTypes.name}.
   * @returns A request builder for creating requests to retrieve one `NumberSequenceDataTypes` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<NumberSequenceDataTypes<T>, T> {
    return new GetByKeyRequestBuilder<NumberSequenceDataTypes<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `NumberSequenceDataTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `NumberSequenceDataTypes`.
   */
  update(
    entity: NumberSequenceDataTypes<T>
  ): UpdateRequestBuilder<NumberSequenceDataTypes<T>, T> {
    return new UpdateRequestBuilder<NumberSequenceDataTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `NumberSequenceDataTypes`.
   * @param name Key property. See {@link NumberSequenceDataTypes.name}.
   * @returns A request builder for creating requests that delete an entity of type `NumberSequenceDataTypes`.
   */
  delete(name: string): DeleteRequestBuilder<NumberSequenceDataTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `NumberSequenceDataTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `NumberSequenceDataTypes` by taking the entity as a parameter.
   */
  delete(
    entity: NumberSequenceDataTypes<T>
  ): DeleteRequestBuilder<NumberSequenceDataTypes<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<NumberSequenceDataTypes<T>, T> {
    return new DeleteRequestBuilder<NumberSequenceDataTypes<T>, T>(
      this.entityApi,
      nameOrEntity instanceof NumberSequenceDataTypes
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
