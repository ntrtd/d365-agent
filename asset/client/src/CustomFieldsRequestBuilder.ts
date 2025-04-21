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
import { CustomFields } from './CustomFields';

/**
 * Request builder class for operations supported on the {@link CustomFields} entity.
 */
export class CustomFieldsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomFields<T>, T> {
  /**
   * Returns a request builder for querying all `CustomFields` entities.
   * @returns A request builder for creating requests to retrieve all `CustomFields` entities.
   */
  getAll(): GetAllRequestBuilder<CustomFields<T>, T> {
    return new GetAllRequestBuilder<CustomFields<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustomFields` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomFields`.
   */
  create(entity: CustomFields<T>): CreateRequestBuilder<CustomFields<T>, T> {
    return new CreateRequestBuilder<CustomFields<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CustomFields` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomFields.dataAreaId}.
   * @param customField Key property. See {@link CustomFields.customField}.
   * @returns A request builder for creating requests to retrieve one `CustomFields` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    customField: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomFields<T>, T> {
    return new GetByKeyRequestBuilder<CustomFields<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CustomField: customField
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CustomFields`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomFields`.
   */
  update(entity: CustomFields<T>): UpdateRequestBuilder<CustomFields<T>, T> {
    return new UpdateRequestBuilder<CustomFields<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomFields`.
   * @param dataAreaId Key property. See {@link CustomFields.dataAreaId}.
   * @param customField Key property. See {@link CustomFields.customField}.
   * @returns A request builder for creating requests that delete an entity of type `CustomFields`.
   */
  delete(
    dataAreaId: string,
    customField: string
  ): DeleteRequestBuilder<CustomFields<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomFields`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomFields` by taking the entity as a parameter.
   */
  delete(entity: CustomFields<T>): DeleteRequestBuilder<CustomFields<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    customField?: string
  ): DeleteRequestBuilder<CustomFields<T>, T> {
    return new DeleteRequestBuilder<CustomFields<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomFields
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CustomField: customField!
          }
    );
  }
}
