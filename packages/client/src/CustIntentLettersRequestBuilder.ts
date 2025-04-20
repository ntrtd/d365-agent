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
import { CustIntentLetters } from './CustIntentLetters';

/**
 * Request builder class for operations supported on the {@link CustIntentLetters} entity.
 */
export class CustIntentLettersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustIntentLetters<T>, T> {
  /**
   * Returns a request builder for querying all `CustIntentLetters` entities.
   * @returns A request builder for creating requests to retrieve all `CustIntentLetters` entities.
   */
  getAll(): GetAllRequestBuilder<CustIntentLetters<T>, T> {
    return new GetAllRequestBuilder<CustIntentLetters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustIntentLetters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustIntentLetters`.
   */
  create(
    entity: CustIntentLetters<T>
  ): CreateRequestBuilder<CustIntentLetters<T>, T> {
    return new CreateRequestBuilder<CustIntentLetters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustIntentLetters` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustIntentLetters.dataAreaId}.
   * @param internalLetterId Key property. See {@link CustIntentLetters.internalLetterId}.
   * @returns A request builder for creating requests to retrieve one `CustIntentLetters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    internalLetterId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustIntentLetters<T>, T> {
    return new GetByKeyRequestBuilder<CustIntentLetters<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      InternalLetterId: internalLetterId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CustIntentLetters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustIntentLetters`.
   */
  update(
    entity: CustIntentLetters<T>
  ): UpdateRequestBuilder<CustIntentLetters<T>, T> {
    return new UpdateRequestBuilder<CustIntentLetters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustIntentLetters`.
   * @param dataAreaId Key property. See {@link CustIntentLetters.dataAreaId}.
   * @param internalLetterId Key property. See {@link CustIntentLetters.internalLetterId}.
   * @returns A request builder for creating requests that delete an entity of type `CustIntentLetters`.
   */
  delete(
    dataAreaId: string,
    internalLetterId: string
  ): DeleteRequestBuilder<CustIntentLetters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustIntentLetters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustIntentLetters` by taking the entity as a parameter.
   */
  delete(
    entity: CustIntentLetters<T>
  ): DeleteRequestBuilder<CustIntentLetters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    internalLetterId?: string
  ): DeleteRequestBuilder<CustIntentLetters<T>, T> {
    return new DeleteRequestBuilder<CustIntentLetters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustIntentLetters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InternalLetterId: internalLetterId!
          }
    );
  }
}
