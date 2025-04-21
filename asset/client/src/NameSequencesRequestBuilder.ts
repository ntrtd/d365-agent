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
import { NameSequences } from './NameSequences';

/**
 * Request builder class for operations supported on the {@link NameSequences} entity.
 */
export class NameSequencesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<NameSequences<T>, T> {
  /**
   * Returns a request builder for querying all `NameSequences` entities.
   * @returns A request builder for creating requests to retrieve all `NameSequences` entities.
   */
  getAll(): GetAllRequestBuilder<NameSequences<T>, T> {
    return new GetAllRequestBuilder<NameSequences<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `NameSequences` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `NameSequences`.
   */
  create(entity: NameSequences<T>): CreateRequestBuilder<NameSequences<T>, T> {
    return new CreateRequestBuilder<NameSequences<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `NameSequences` entity based on its keys.
   * @param nameSequence Key property. See {@link NameSequences.nameSequence}.
   * @param languageId Key property. See {@link NameSequences.languageId}.
   * @returns A request builder for creating requests to retrieve one `NameSequences` entity based on its keys.
   */
  getByKey(
    nameSequence: DeserializedType<T, 'Edm.String'>,
    languageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<NameSequences<T>, T> {
    return new GetByKeyRequestBuilder<NameSequences<T>, T>(this.entityApi, {
      NameSequence: nameSequence,
      LanguageId: languageId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `NameSequences`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `NameSequences`.
   */
  update(entity: NameSequences<T>): UpdateRequestBuilder<NameSequences<T>, T> {
    return new UpdateRequestBuilder<NameSequences<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `NameSequences`.
   * @param nameSequence Key property. See {@link NameSequences.nameSequence}.
   * @param languageId Key property. See {@link NameSequences.languageId}.
   * @returns A request builder for creating requests that delete an entity of type `NameSequences`.
   */
  delete(
    nameSequence: string,
    languageId: string
  ): DeleteRequestBuilder<NameSequences<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `NameSequences`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `NameSequences` by taking the entity as a parameter.
   */
  delete(entity: NameSequences<T>): DeleteRequestBuilder<NameSequences<T>, T>;
  delete(
    nameSequenceOrEntity: any,
    languageId?: string
  ): DeleteRequestBuilder<NameSequences<T>, T> {
    return new DeleteRequestBuilder<NameSequences<T>, T>(
      this.entityApi,
      nameSequenceOrEntity instanceof NameSequences
        ? nameSequenceOrEntity
        : {
            NameSequence: nameSequenceOrEntity!,
            LanguageId: languageId!
          }
    );
  }
}
