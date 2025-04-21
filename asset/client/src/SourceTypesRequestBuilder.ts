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
import { SourceTypes } from './SourceTypes';

/**
 * Request builder class for operations supported on the {@link SourceTypes} entity.
 */
export class SourceTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SourceTypes<T>, T> {
  /**
   * Returns a request builder for querying all `SourceTypes` entities.
   * @returns A request builder for creating requests to retrieve all `SourceTypes` entities.
   */
  getAll(): GetAllRequestBuilder<SourceTypes<T>, T> {
    return new GetAllRequestBuilder<SourceTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SourceTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SourceTypes`.
   */
  create(entity: SourceTypes<T>): CreateRequestBuilder<SourceTypes<T>, T> {
    return new CreateRequestBuilder<SourceTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SourceTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link SourceTypes.dataAreaId}.
   * @param sourceTypeId Key property. See {@link SourceTypes.sourceTypeId}.
   * @returns A request builder for creating requests to retrieve one `SourceTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SourceTypes<T>, T> {
    return new GetByKeyRequestBuilder<SourceTypes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      SourceTypeId: sourceTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SourceTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SourceTypes`.
   */
  update(entity: SourceTypes<T>): UpdateRequestBuilder<SourceTypes<T>, T> {
    return new UpdateRequestBuilder<SourceTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SourceTypes`.
   * @param dataAreaId Key property. See {@link SourceTypes.dataAreaId}.
   * @param sourceTypeId Key property. See {@link SourceTypes.sourceTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `SourceTypes`.
   */
  delete(
    dataAreaId: string,
    sourceTypeId: string
  ): DeleteRequestBuilder<SourceTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SourceTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SourceTypes` by taking the entity as a parameter.
   */
  delete(entity: SourceTypes<T>): DeleteRequestBuilder<SourceTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceTypeId?: string
  ): DeleteRequestBuilder<SourceTypes<T>, T> {
    return new DeleteRequestBuilder<SourceTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SourceTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceTypeId: sourceTypeId!
          }
    );
  }
}
