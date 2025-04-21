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
import { McrCriteria } from './McrCriteria';

/**
 * Request builder class for operations supported on the {@link McrCriteria} entity.
 */
export class McrCriteriaRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<McrCriteria<T>, T> {
  /**
   * Returns a request builder for querying all `McrCriteria` entities.
   * @returns A request builder for creating requests to retrieve all `McrCriteria` entities.
   */
  getAll(): GetAllRequestBuilder<McrCriteria<T>, T> {
    return new GetAllRequestBuilder<McrCriteria<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `McrCriteria` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `McrCriteria`.
   */
  create(entity: McrCriteria<T>): CreateRequestBuilder<McrCriteria<T>, T> {
    return new CreateRequestBuilder<McrCriteria<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `McrCriteria` entity based on its keys.
   * @param dataAreaId Key property. See {@link McrCriteria.dataAreaId}.
   * @param fieldName Key property. See {@link McrCriteria.fieldName}.
   * @param viewOrTable Key property. See {@link McrCriteria.viewOrTable}.
   * @returns A request builder for creating requests to retrieve one `McrCriteria` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fieldName: DeserializedType<T, 'Edm.String'>,
    viewOrTable: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<McrCriteria<T>, T> {
    return new GetByKeyRequestBuilder<McrCriteria<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      FieldName: fieldName,
      ViewOrTable: viewOrTable
    });
  }

  /**
   * Returns a request builder for updating an entity of type `McrCriteria`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `McrCriteria`.
   */
  update(entity: McrCriteria<T>): UpdateRequestBuilder<McrCriteria<T>, T> {
    return new UpdateRequestBuilder<McrCriteria<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `McrCriteria`.
   * @param dataAreaId Key property. See {@link McrCriteria.dataAreaId}.
   * @param fieldName Key property. See {@link McrCriteria.fieldName}.
   * @param viewOrTable Key property. See {@link McrCriteria.viewOrTable}.
   * @returns A request builder for creating requests that delete an entity of type `McrCriteria`.
   */
  delete(
    dataAreaId: string,
    fieldName: string,
    viewOrTable: string
  ): DeleteRequestBuilder<McrCriteria<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `McrCriteria`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `McrCriteria` by taking the entity as a parameter.
   */
  delete(entity: McrCriteria<T>): DeleteRequestBuilder<McrCriteria<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fieldName?: string,
    viewOrTable?: string
  ): DeleteRequestBuilder<McrCriteria<T>, T> {
    return new DeleteRequestBuilder<McrCriteria<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof McrCriteria
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FieldName: fieldName!,
            ViewOrTable: viewOrTable!
          }
    );
  }
}
