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
import { IntentLetters } from './IntentLetters';

/**
 * Request builder class for operations supported on the {@link IntentLetters} entity.
 */
export class IntentLettersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IntentLetters<T>, T> {
  /**
   * Returns a request builder for querying all `IntentLetters` entities.
   * @returns A request builder for creating requests to retrieve all `IntentLetters` entities.
   */
  getAll(): GetAllRequestBuilder<IntentLetters<T>, T> {
    return new GetAllRequestBuilder<IntentLetters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `IntentLetters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IntentLetters`.
   */
  create(entity: IntentLetters<T>): CreateRequestBuilder<IntentLetters<T>, T> {
    return new CreateRequestBuilder<IntentLetters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `IntentLetters` entity based on its keys.
   * @param dataAreaId Key property. See {@link IntentLetters.dataAreaId}.
   * @param intentLetterId Key property. See {@link IntentLetters.intentLetterId}.
   * @returns A request builder for creating requests to retrieve one `IntentLetters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    intentLetterId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<IntentLetters<T>, T> {
    return new GetByKeyRequestBuilder<IntentLetters<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      IntentLetterId: intentLetterId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `IntentLetters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IntentLetters`.
   */
  update(entity: IntentLetters<T>): UpdateRequestBuilder<IntentLetters<T>, T> {
    return new UpdateRequestBuilder<IntentLetters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `IntentLetters`.
   * @param dataAreaId Key property. See {@link IntentLetters.dataAreaId}.
   * @param intentLetterId Key property. See {@link IntentLetters.intentLetterId}.
   * @returns A request builder for creating requests that delete an entity of type `IntentLetters`.
   */
  delete(
    dataAreaId: string,
    intentLetterId: string
  ): DeleteRequestBuilder<IntentLetters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IntentLetters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IntentLetters` by taking the entity as a parameter.
   */
  delete(entity: IntentLetters<T>): DeleteRequestBuilder<IntentLetters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    intentLetterId?: string
  ): DeleteRequestBuilder<IntentLetters<T>, T> {
    return new DeleteRequestBuilder<IntentLetters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof IntentLetters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            IntentLetterId: intentLetterId!
          }
    );
  }
}
