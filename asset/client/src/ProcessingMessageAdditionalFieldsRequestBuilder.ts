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
import { ProcessingMessageAdditionalFields } from './ProcessingMessageAdditionalFields';

/**
 * Request builder class for operations supported on the {@link ProcessingMessageAdditionalFields} entity.
 */
export class ProcessingMessageAdditionalFieldsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProcessingMessageAdditionalFields<T>, T> {
  /**
   * Returns a request builder for querying all `ProcessingMessageAdditionalFields` entities.
   * @returns A request builder for creating requests to retrieve all `ProcessingMessageAdditionalFields` entities.
   */
  getAll(): GetAllRequestBuilder<ProcessingMessageAdditionalFields<T>, T> {
    return new GetAllRequestBuilder<ProcessingMessageAdditionalFields<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProcessingMessageAdditionalFields` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProcessingMessageAdditionalFields`.
   */
  create(
    entity: ProcessingMessageAdditionalFields<T>
  ): CreateRequestBuilder<ProcessingMessageAdditionalFields<T>, T> {
    return new CreateRequestBuilder<ProcessingMessageAdditionalFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProcessingMessageAdditionalFields` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProcessingMessageAdditionalFields.dataAreaId}.
   * @param processing Key property. See {@link ProcessingMessageAdditionalFields.processing}.
   * @param fieldName Key property. See {@link ProcessingMessageAdditionalFields.fieldName}.
   * @returns A request builder for creating requests to retrieve one `ProcessingMessageAdditionalFields` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    processing: DeserializedType<T, 'Edm.String'>,
    fieldName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProcessingMessageAdditionalFields<T>, T> {
    return new GetByKeyRequestBuilder<ProcessingMessageAdditionalFields<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Processing: processing,
        FieldName: fieldName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProcessingMessageAdditionalFields`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProcessingMessageAdditionalFields`.
   */
  update(
    entity: ProcessingMessageAdditionalFields<T>
  ): UpdateRequestBuilder<ProcessingMessageAdditionalFields<T>, T> {
    return new UpdateRequestBuilder<ProcessingMessageAdditionalFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProcessingMessageAdditionalFields`.
   * @param dataAreaId Key property. See {@link ProcessingMessageAdditionalFields.dataAreaId}.
   * @param processing Key property. See {@link ProcessingMessageAdditionalFields.processing}.
   * @param fieldName Key property. See {@link ProcessingMessageAdditionalFields.fieldName}.
   * @returns A request builder for creating requests that delete an entity of type `ProcessingMessageAdditionalFields`.
   */
  delete(
    dataAreaId: string,
    processing: string,
    fieldName: string
  ): DeleteRequestBuilder<ProcessingMessageAdditionalFields<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProcessingMessageAdditionalFields`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProcessingMessageAdditionalFields` by taking the entity as a parameter.
   */
  delete(
    entity: ProcessingMessageAdditionalFields<T>
  ): DeleteRequestBuilder<ProcessingMessageAdditionalFields<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    processing?: string,
    fieldName?: string
  ): DeleteRequestBuilder<ProcessingMessageAdditionalFields<T>, T> {
    return new DeleteRequestBuilder<ProcessingMessageAdditionalFields<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProcessingMessageAdditionalFields
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Processing: processing!,
            FieldName: fieldName!
          }
    );
  }
}
