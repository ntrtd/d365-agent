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
import { FinTagCustomListValues } from './FinTagCustomListValues';

/**
 * Request builder class for operations supported on the {@link FinTagCustomListValues} entity.
 */
export class FinTagCustomListValuesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FinTagCustomListValues<T>, T> {
  /**
   * Returns a request builder for querying all `FinTagCustomListValues` entities.
   * @returns A request builder for creating requests to retrieve all `FinTagCustomListValues` entities.
   */
  getAll(): GetAllRequestBuilder<FinTagCustomListValues<T>, T> {
    return new GetAllRequestBuilder<FinTagCustomListValues<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FinTagCustomListValues` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FinTagCustomListValues`.
   */
  create(
    entity: FinTagCustomListValues<T>
  ): CreateRequestBuilder<FinTagCustomListValues<T>, T> {
    return new CreateRequestBuilder<FinTagCustomListValues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FinTagCustomListValues` entity based on its keys.
   * @param company Key property. See {@link FinTagCustomListValues.company}.
   * @param tagName Key property. See {@link FinTagCustomListValues.tagName}.
   * @param value Key property. See {@link FinTagCustomListValues.value}.
   * @returns A request builder for creating requests to retrieve one `FinTagCustomListValues` entity based on its keys.
   */
  getByKey(
    company: DeserializedType<T, 'Edm.String'>,
    tagName: DeserializedType<T, 'Edm.String'>,
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FinTagCustomListValues<T>, T> {
    return new GetByKeyRequestBuilder<FinTagCustomListValues<T>, T>(
      this.entityApi,
      {
        Company: company,
        TagName: tagName,
        Value: value
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FinTagCustomListValues`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FinTagCustomListValues`.
   */
  update(
    entity: FinTagCustomListValues<T>
  ): UpdateRequestBuilder<FinTagCustomListValues<T>, T> {
    return new UpdateRequestBuilder<FinTagCustomListValues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FinTagCustomListValues`.
   * @param company Key property. See {@link FinTagCustomListValues.company}.
   * @param tagName Key property. See {@link FinTagCustomListValues.tagName}.
   * @param value Key property. See {@link FinTagCustomListValues.value}.
   * @returns A request builder for creating requests that delete an entity of type `FinTagCustomListValues`.
   */
  delete(
    company: string,
    tagName: string,
    value: string
  ): DeleteRequestBuilder<FinTagCustomListValues<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FinTagCustomListValues`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FinTagCustomListValues` by taking the entity as a parameter.
   */
  delete(
    entity: FinTagCustomListValues<T>
  ): DeleteRequestBuilder<FinTagCustomListValues<T>, T>;
  delete(
    companyOrEntity: any,
    tagName?: string,
    value?: string
  ): DeleteRequestBuilder<FinTagCustomListValues<T>, T> {
    return new DeleteRequestBuilder<FinTagCustomListValues<T>, T>(
      this.entityApi,
      companyOrEntity instanceof FinTagCustomListValues
        ? companyOrEntity
        : {
            Company: companyOrEntity!,
            TagName: tagName!,
            Value: value!
          }
    );
  }
}
