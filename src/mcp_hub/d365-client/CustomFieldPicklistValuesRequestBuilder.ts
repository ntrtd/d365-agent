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
import { CustomFieldPicklistValues } from './CustomFieldPicklistValues';

/**
 * Request builder class for operations supported on the {@link CustomFieldPicklistValues} entity.
 */
export class CustomFieldPicklistValuesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomFieldPicklistValues<T>, T> {
  /**
   * Returns a request builder for querying all `CustomFieldPicklistValues` entities.
   * @returns A request builder for creating requests to retrieve all `CustomFieldPicklistValues` entities.
   */
  getAll(): GetAllRequestBuilder<CustomFieldPicklistValues<T>, T> {
    return new GetAllRequestBuilder<CustomFieldPicklistValues<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomFieldPicklistValues` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomFieldPicklistValues`.
   */
  create(
    entity: CustomFieldPicklistValues<T>
  ): CreateRequestBuilder<CustomFieldPicklistValues<T>, T> {
    return new CreateRequestBuilder<CustomFieldPicklistValues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomFieldPicklistValues` entity based on its keys.
   * @param picklistId Key property. See {@link CustomFieldPicklistValues.picklistId}.
   * @param value Key property. See {@link CustomFieldPicklistValues.value}.
   * @returns A request builder for creating requests to retrieve one `CustomFieldPicklistValues` entity based on its keys.
   */
  getByKey(
    picklistId: DeserializedType<T, 'Edm.Int32'>,
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomFieldPicklistValues<T>, T> {
    return new GetByKeyRequestBuilder<CustomFieldPicklistValues<T>, T>(
      this.entityApi,
      {
        PicklistId: picklistId,
        Value: value
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomFieldPicklistValues`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomFieldPicklistValues`.
   */
  update(
    entity: CustomFieldPicklistValues<T>
  ): UpdateRequestBuilder<CustomFieldPicklistValues<T>, T> {
    return new UpdateRequestBuilder<CustomFieldPicklistValues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomFieldPicklistValues`.
   * @param picklistId Key property. See {@link CustomFieldPicklistValues.picklistId}.
   * @param value Key property. See {@link CustomFieldPicklistValues.value}.
   * @returns A request builder for creating requests that delete an entity of type `CustomFieldPicklistValues`.
   */
  delete(
    picklistId: number,
    value: string
  ): DeleteRequestBuilder<CustomFieldPicklistValues<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomFieldPicklistValues`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomFieldPicklistValues` by taking the entity as a parameter.
   */
  delete(
    entity: CustomFieldPicklistValues<T>
  ): DeleteRequestBuilder<CustomFieldPicklistValues<T>, T>;
  delete(
    picklistIdOrEntity: any,
    value?: string
  ): DeleteRequestBuilder<CustomFieldPicklistValues<T>, T> {
    return new DeleteRequestBuilder<CustomFieldPicklistValues<T>, T>(
      this.entityApi,
      picklistIdOrEntity instanceof CustomFieldPicklistValues
        ? picklistIdOrEntity
        : {
            PicklistId: picklistIdOrEntity!,
            Value: value!
          }
    );
  }
}
