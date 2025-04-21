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
import { UniqueCertificationValues } from './UniqueCertificationValues';
import { UniqueCertificationFieldTypeIt } from './UniqueCertificationFieldTypeIt';

/**
 * Request builder class for operations supported on the {@link UniqueCertificationValues} entity.
 */
export class UniqueCertificationValuesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<UniqueCertificationValues<T>, T> {
  /**
   * Returns a request builder for querying all `UniqueCertificationValues` entities.
   * @returns A request builder for creating requests to retrieve all `UniqueCertificationValues` entities.
   */
  getAll(): GetAllRequestBuilder<UniqueCertificationValues<T>, T> {
    return new GetAllRequestBuilder<UniqueCertificationValues<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `UniqueCertificationValues` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UniqueCertificationValues`.
   */
  create(
    entity: UniqueCertificationValues<T>
  ): CreateRequestBuilder<UniqueCertificationValues<T>, T> {
    return new CreateRequestBuilder<UniqueCertificationValues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `UniqueCertificationValues` entity based on its keys.
   * @param field Key property. See {@link UniqueCertificationValues.field}.
   * @param value Key property. See {@link UniqueCertificationValues.value}.
   * @returns A request builder for creating requests to retrieve one `UniqueCertificationValues` entity based on its keys.
   */
  getByKey(
    field: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.UniqueCertificationFieldType_IT'
    >,
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<UniqueCertificationValues<T>, T> {
    return new GetByKeyRequestBuilder<UniqueCertificationValues<T>, T>(
      this.entityApi,
      {
        Field: field,
        Value: value
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `UniqueCertificationValues`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UniqueCertificationValues`.
   */
  update(
    entity: UniqueCertificationValues<T>
  ): UpdateRequestBuilder<UniqueCertificationValues<T>, T> {
    return new UpdateRequestBuilder<UniqueCertificationValues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `UniqueCertificationValues`.
   * @param field Key property. See {@link UniqueCertificationValues.field}.
   * @param value Key property. See {@link UniqueCertificationValues.value}.
   * @returns A request builder for creating requests that delete an entity of type `UniqueCertificationValues`.
   */
  delete(
    field: UniqueCertificationFieldTypeIt,
    value: string
  ): DeleteRequestBuilder<UniqueCertificationValues<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `UniqueCertificationValues`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UniqueCertificationValues` by taking the entity as a parameter.
   */
  delete(
    entity: UniqueCertificationValues<T>
  ): DeleteRequestBuilder<UniqueCertificationValues<T>, T>;
  delete(
    fieldOrEntity: any,
    value?: string
  ): DeleteRequestBuilder<UniqueCertificationValues<T>, T> {
    return new DeleteRequestBuilder<UniqueCertificationValues<T>, T>(
      this.entityApi,
      fieldOrEntity instanceof UniqueCertificationValues
        ? fieldOrEntity
        : {
            Field: fieldOrEntity!,
            Value: value!
          }
    );
  }
}
