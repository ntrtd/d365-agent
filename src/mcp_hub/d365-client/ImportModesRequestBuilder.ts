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
import { ImportModes } from './ImportModes';

/**
 * Request builder class for operations supported on the {@link ImportModes} entity.
 */
export class ImportModesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ImportModes<T>, T> {
  /**
   * Returns a request builder for querying all `ImportModes` entities.
   * @returns A request builder for creating requests to retrieve all `ImportModes` entities.
   */
  getAll(): GetAllRequestBuilder<ImportModes<T>, T> {
    return new GetAllRequestBuilder<ImportModes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ImportModes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ImportModes`.
   */
  create(entity: ImportModes<T>): CreateRequestBuilder<ImportModes<T>, T> {
    return new CreateRequestBuilder<ImportModes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ImportModes` entity based on its keys.
   * @param dataAreaId Key property. See {@link ImportModes.dataAreaId}.
   * @param methodOfImport Key property. See {@link ImportModes.methodOfImport}.
   * @returns A request builder for creating requests to retrieve one `ImportModes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    methodOfImport: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ImportModes<T>, T> {
    return new GetByKeyRequestBuilder<ImportModes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      MethodOfImport: methodOfImport
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ImportModes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ImportModes`.
   */
  update(entity: ImportModes<T>): UpdateRequestBuilder<ImportModes<T>, T> {
    return new UpdateRequestBuilder<ImportModes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ImportModes`.
   * @param dataAreaId Key property. See {@link ImportModes.dataAreaId}.
   * @param methodOfImport Key property. See {@link ImportModes.methodOfImport}.
   * @returns A request builder for creating requests that delete an entity of type `ImportModes`.
   */
  delete(
    dataAreaId: string,
    methodOfImport: string
  ): DeleteRequestBuilder<ImportModes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ImportModes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ImportModes` by taking the entity as a parameter.
   */
  delete(entity: ImportModes<T>): DeleteRequestBuilder<ImportModes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    methodOfImport?: string
  ): DeleteRequestBuilder<ImportModes<T>, T> {
    return new DeleteRequestBuilder<ImportModes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ImportModes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MethodOfImport: methodOfImport!
          }
    );
  }
}
