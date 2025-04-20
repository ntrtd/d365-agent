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
import { AdditionalFields } from './AdditionalFields';

/**
 * Request builder class for operations supported on the {@link AdditionalFields} entity.
 */
export class AdditionalFieldsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AdditionalFields<T>, T> {
  /**
   * Returns a request builder for querying all `AdditionalFields` entities.
   * @returns A request builder for creating requests to retrieve all `AdditionalFields` entities.
   */
  getAll(): GetAllRequestBuilder<AdditionalFields<T>, T> {
    return new GetAllRequestBuilder<AdditionalFields<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AdditionalFields` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AdditionalFields`.
   */
  create(
    entity: AdditionalFields<T>
  ): CreateRequestBuilder<AdditionalFields<T>, T> {
    return new CreateRequestBuilder<AdditionalFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AdditionalFields` entity based on its keys.
   * @param dataAreaId Key property. See {@link AdditionalFields.dataAreaId}.
   * @param fieldName Key property. See {@link AdditionalFields.fieldName}.
   * @returns A request builder for creating requests to retrieve one `AdditionalFields` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fieldName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AdditionalFields<T>, T> {
    return new GetByKeyRequestBuilder<AdditionalFields<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      FieldName: fieldName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AdditionalFields`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AdditionalFields`.
   */
  update(
    entity: AdditionalFields<T>
  ): UpdateRequestBuilder<AdditionalFields<T>, T> {
    return new UpdateRequestBuilder<AdditionalFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AdditionalFields`.
   * @param dataAreaId Key property. See {@link AdditionalFields.dataAreaId}.
   * @param fieldName Key property. See {@link AdditionalFields.fieldName}.
   * @returns A request builder for creating requests that delete an entity of type `AdditionalFields`.
   */
  delete(
    dataAreaId: string,
    fieldName: string
  ): DeleteRequestBuilder<AdditionalFields<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AdditionalFields`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AdditionalFields` by taking the entity as a parameter.
   */
  delete(
    entity: AdditionalFields<T>
  ): DeleteRequestBuilder<AdditionalFields<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fieldName?: string
  ): DeleteRequestBuilder<AdditionalFields<T>, T> {
    return new DeleteRequestBuilder<AdditionalFields<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AdditionalFields
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FieldName: fieldName!
          }
    );
  }
}
