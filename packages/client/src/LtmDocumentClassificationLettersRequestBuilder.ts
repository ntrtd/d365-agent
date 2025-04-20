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
import { LtmDocumentClassificationLetters } from './LtmDocumentClassificationLetters';

/**
 * Request builder class for operations supported on the {@link LtmDocumentClassificationLetters} entity.
 */
export class LtmDocumentClassificationLettersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmDocumentClassificationLetters<T>, T> {
  /**
   * Returns a request builder for querying all `LtmDocumentClassificationLetters` entities.
   * @returns A request builder for creating requests to retrieve all `LtmDocumentClassificationLetters` entities.
   */
  getAll(): GetAllRequestBuilder<LtmDocumentClassificationLetters<T>, T> {
    return new GetAllRequestBuilder<LtmDocumentClassificationLetters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LtmDocumentClassificationLetters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmDocumentClassificationLetters`.
   */
  create(
    entity: LtmDocumentClassificationLetters<T>
  ): CreateRequestBuilder<LtmDocumentClassificationLetters<T>, T> {
    return new CreateRequestBuilder<LtmDocumentClassificationLetters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmDocumentClassificationLetters` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmDocumentClassificationLetters.dataAreaId}.
   * @param name Key property. See {@link LtmDocumentClassificationLetters.name}.
   * @param id Key property. See {@link LtmDocumentClassificationLetters.id}.
   * @returns A request builder for creating requests to retrieve one `LtmDocumentClassificationLetters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>,
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmDocumentClassificationLetters<T>, T> {
    return new GetByKeyRequestBuilder<LtmDocumentClassificationLetters<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Name: name,
        Id: id
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LtmDocumentClassificationLetters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmDocumentClassificationLetters`.
   */
  update(
    entity: LtmDocumentClassificationLetters<T>
  ): UpdateRequestBuilder<LtmDocumentClassificationLetters<T>, T> {
    return new UpdateRequestBuilder<LtmDocumentClassificationLetters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmDocumentClassificationLetters`.
   * @param dataAreaId Key property. See {@link LtmDocumentClassificationLetters.dataAreaId}.
   * @param name Key property. See {@link LtmDocumentClassificationLetters.name}.
   * @param id Key property. See {@link LtmDocumentClassificationLetters.id}.
   * @returns A request builder for creating requests that delete an entity of type `LtmDocumentClassificationLetters`.
   */
  delete(
    dataAreaId: string,
    name: string,
    id: string
  ): DeleteRequestBuilder<LtmDocumentClassificationLetters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmDocumentClassificationLetters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmDocumentClassificationLetters` by taking the entity as a parameter.
   */
  delete(
    entity: LtmDocumentClassificationLetters<T>
  ): DeleteRequestBuilder<LtmDocumentClassificationLetters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string,
    id?: string
  ): DeleteRequestBuilder<LtmDocumentClassificationLetters<T>, T> {
    return new DeleteRequestBuilder<LtmDocumentClassificationLetters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmDocumentClassificationLetters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!,
            Id: id!
          }
    );
  }
}
