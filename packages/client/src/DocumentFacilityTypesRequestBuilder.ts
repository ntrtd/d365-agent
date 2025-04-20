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
import { DocumentFacilityTypes } from './DocumentFacilityTypes';

/**
 * Request builder class for operations supported on the {@link DocumentFacilityTypes} entity.
 */
export class DocumentFacilityTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DocumentFacilityTypes<T>, T> {
  /**
   * Returns a request builder for querying all `DocumentFacilityTypes` entities.
   * @returns A request builder for creating requests to retrieve all `DocumentFacilityTypes` entities.
   */
  getAll(): GetAllRequestBuilder<DocumentFacilityTypes<T>, T> {
    return new GetAllRequestBuilder<DocumentFacilityTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DocumentFacilityTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DocumentFacilityTypes`.
   */
  create(
    entity: DocumentFacilityTypes<T>
  ): CreateRequestBuilder<DocumentFacilityTypes<T>, T> {
    return new CreateRequestBuilder<DocumentFacilityTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DocumentFacilityTypes` entity based on its keys.
   * @param name Key property. See {@link DocumentFacilityTypes.name}.
   * @returns A request builder for creating requests to retrieve one `DocumentFacilityTypes` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DocumentFacilityTypes<T>, T> {
    return new GetByKeyRequestBuilder<DocumentFacilityTypes<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DocumentFacilityTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DocumentFacilityTypes`.
   */
  update(
    entity: DocumentFacilityTypes<T>
  ): UpdateRequestBuilder<DocumentFacilityTypes<T>, T> {
    return new UpdateRequestBuilder<DocumentFacilityTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DocumentFacilityTypes`.
   * @param name Key property. See {@link DocumentFacilityTypes.name}.
   * @returns A request builder for creating requests that delete an entity of type `DocumentFacilityTypes`.
   */
  delete(name: string): DeleteRequestBuilder<DocumentFacilityTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DocumentFacilityTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DocumentFacilityTypes` by taking the entity as a parameter.
   */
  delete(
    entity: DocumentFacilityTypes<T>
  ): DeleteRequestBuilder<DocumentFacilityTypes<T>, T>;
  delete(nameOrEntity: any): DeleteRequestBuilder<DocumentFacilityTypes<T>, T> {
    return new DeleteRequestBuilder<DocumentFacilityTypes<T>, T>(
      this.entityApi,
      nameOrEntity instanceof DocumentFacilityTypes
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
