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
import { Documents } from './Documents';

/**
 * Request builder class for operations supported on the {@link Documents} entity.
 */
export class DocumentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Documents<T>, T> {
  /**
   * Returns a request builder for querying all `Documents` entities.
   * @returns A request builder for creating requests to retrieve all `Documents` entities.
   */
  getAll(): GetAllRequestBuilder<Documents<T>, T> {
    return new GetAllRequestBuilder<Documents<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Documents` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Documents`.
   */
  create(entity: Documents<T>): CreateRequestBuilder<Documents<T>, T> {
    return new CreateRequestBuilder<Documents<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Documents` entity based on its keys.
   * @param dataAreaId Key property. See {@link Documents.dataAreaId}.
   * @param lineId Key property. See {@link Documents.lineId}.
   * @returns A request builder for creating requests to retrieve one `Documents` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<Documents<T>, T> {
    return new GetByKeyRequestBuilder<Documents<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      LineId: lineId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Documents`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Documents`.
   */
  update(entity: Documents<T>): UpdateRequestBuilder<Documents<T>, T> {
    return new UpdateRequestBuilder<Documents<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Documents`.
   * @param dataAreaId Key property. See {@link Documents.dataAreaId}.
   * @param lineId Key property. See {@link Documents.lineId}.
   * @returns A request builder for creating requests that delete an entity of type `Documents`.
   */
  delete(
    dataAreaId: string,
    lineId: string
  ): DeleteRequestBuilder<Documents<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Documents`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Documents` by taking the entity as a parameter.
   */
  delete(entity: Documents<T>): DeleteRequestBuilder<Documents<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineId?: string
  ): DeleteRequestBuilder<Documents<T>, T> {
    return new DeleteRequestBuilder<Documents<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Documents
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineId: lineId!
          }
    );
  }
}
