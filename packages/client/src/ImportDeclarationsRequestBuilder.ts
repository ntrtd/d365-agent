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
import { ImportDeclarations } from './ImportDeclarations';

/**
 * Request builder class for operations supported on the {@link ImportDeclarations} entity.
 */
export class ImportDeclarationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ImportDeclarations<T>, T> {
  /**
   * Returns a request builder for querying all `ImportDeclarations` entities.
   * @returns A request builder for creating requests to retrieve all `ImportDeclarations` entities.
   */
  getAll(): GetAllRequestBuilder<ImportDeclarations<T>, T> {
    return new GetAllRequestBuilder<ImportDeclarations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ImportDeclarations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ImportDeclarations`.
   */
  create(
    entity: ImportDeclarations<T>
  ): CreateRequestBuilder<ImportDeclarations<T>, T> {
    return new CreateRequestBuilder<ImportDeclarations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ImportDeclarations` entity based on its keys.
   * @param dataAreaId Key property. See {@link ImportDeclarations.dataAreaId}.
   * @param importDeclarationNumber Key property. See {@link ImportDeclarations.importDeclarationNumber}.
   * @returns A request builder for creating requests to retrieve one `ImportDeclarations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    importDeclarationNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ImportDeclarations<T>, T> {
    return new GetByKeyRequestBuilder<ImportDeclarations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ImportDeclarationNumber: importDeclarationNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ImportDeclarations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ImportDeclarations`.
   */
  update(
    entity: ImportDeclarations<T>
  ): UpdateRequestBuilder<ImportDeclarations<T>, T> {
    return new UpdateRequestBuilder<ImportDeclarations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ImportDeclarations`.
   * @param dataAreaId Key property. See {@link ImportDeclarations.dataAreaId}.
   * @param importDeclarationNumber Key property. See {@link ImportDeclarations.importDeclarationNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ImportDeclarations`.
   */
  delete(
    dataAreaId: string,
    importDeclarationNumber: string
  ): DeleteRequestBuilder<ImportDeclarations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ImportDeclarations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ImportDeclarations` by taking the entity as a parameter.
   */
  delete(
    entity: ImportDeclarations<T>
  ): DeleteRequestBuilder<ImportDeclarations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    importDeclarationNumber?: string
  ): DeleteRequestBuilder<ImportDeclarations<T>, T> {
    return new DeleteRequestBuilder<ImportDeclarations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ImportDeclarations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ImportDeclarationNumber: importDeclarationNumber!
          }
    );
  }
}
