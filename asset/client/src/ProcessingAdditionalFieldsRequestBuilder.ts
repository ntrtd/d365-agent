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
import { ProcessingAdditionalFields } from './ProcessingAdditionalFields';

/**
 * Request builder class for operations supported on the {@link ProcessingAdditionalFields} entity.
 */
export class ProcessingAdditionalFieldsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProcessingAdditionalFields<T>, T> {
  /**
   * Returns a request builder for querying all `ProcessingAdditionalFields` entities.
   * @returns A request builder for creating requests to retrieve all `ProcessingAdditionalFields` entities.
   */
  getAll(): GetAllRequestBuilder<ProcessingAdditionalFields<T>, T> {
    return new GetAllRequestBuilder<ProcessingAdditionalFields<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProcessingAdditionalFields` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProcessingAdditionalFields`.
   */
  create(
    entity: ProcessingAdditionalFields<T>
  ): CreateRequestBuilder<ProcessingAdditionalFields<T>, T> {
    return new CreateRequestBuilder<ProcessingAdditionalFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProcessingAdditionalFields` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProcessingAdditionalFields.dataAreaId}.
   * @param processing Key property. See {@link ProcessingAdditionalFields.processing}.
   * @param messgeItemType Key property. See {@link ProcessingAdditionalFields.messgeItemType}.
   * @param fieldName Key property. See {@link ProcessingAdditionalFields.fieldName}.
   * @returns A request builder for creating requests to retrieve one `ProcessingAdditionalFields` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    processing: DeserializedType<T, 'Edm.String'>,
    messgeItemType: DeserializedType<T, 'Edm.String'>,
    fieldName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProcessingAdditionalFields<T>, T> {
    return new GetByKeyRequestBuilder<ProcessingAdditionalFields<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Processing: processing,
        MessgeItemType: messgeItemType,
        FieldName: fieldName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProcessingAdditionalFields`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProcessingAdditionalFields`.
   */
  update(
    entity: ProcessingAdditionalFields<T>
  ): UpdateRequestBuilder<ProcessingAdditionalFields<T>, T> {
    return new UpdateRequestBuilder<ProcessingAdditionalFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProcessingAdditionalFields`.
   * @param dataAreaId Key property. See {@link ProcessingAdditionalFields.dataAreaId}.
   * @param processing Key property. See {@link ProcessingAdditionalFields.processing}.
   * @param messgeItemType Key property. See {@link ProcessingAdditionalFields.messgeItemType}.
   * @param fieldName Key property. See {@link ProcessingAdditionalFields.fieldName}.
   * @returns A request builder for creating requests that delete an entity of type `ProcessingAdditionalFields`.
   */
  delete(
    dataAreaId: string,
    processing: string,
    messgeItemType: string,
    fieldName: string
  ): DeleteRequestBuilder<ProcessingAdditionalFields<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProcessingAdditionalFields`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProcessingAdditionalFields` by taking the entity as a parameter.
   */
  delete(
    entity: ProcessingAdditionalFields<T>
  ): DeleteRequestBuilder<ProcessingAdditionalFields<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    processing?: string,
    messgeItemType?: string,
    fieldName?: string
  ): DeleteRequestBuilder<ProcessingAdditionalFields<T>, T> {
    return new DeleteRequestBuilder<ProcessingAdditionalFields<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProcessingAdditionalFields
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Processing: processing!,
            MessgeItemType: messgeItemType!,
            FieldName: fieldName!
          }
    );
  }
}
