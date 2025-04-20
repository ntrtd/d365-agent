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
import { TaxErrorMessages } from './TaxErrorMessages';

/**
 * Request builder class for operations supported on the {@link TaxErrorMessages} entity.
 */
export class TaxErrorMessagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxErrorMessages<T>, T> {
  /**
   * Returns a request builder for querying all `TaxErrorMessages` entities.
   * @returns A request builder for creating requests to retrieve all `TaxErrorMessages` entities.
   */
  getAll(): GetAllRequestBuilder<TaxErrorMessages<T>, T> {
    return new GetAllRequestBuilder<TaxErrorMessages<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxErrorMessages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxErrorMessages`.
   */
  create(
    entity: TaxErrorMessages<T>
  ): CreateRequestBuilder<TaxErrorMessages<T>, T> {
    return new CreateRequestBuilder<TaxErrorMessages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxErrorMessages` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxErrorMessages.dataAreaId}.
   * @param errorId Key property. See {@link TaxErrorMessages.errorId}.
   * @returns A request builder for creating requests to retrieve one `TaxErrorMessages` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    errorId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxErrorMessages<T>, T> {
    return new GetByKeyRequestBuilder<TaxErrorMessages<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ErrorId: errorId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TaxErrorMessages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxErrorMessages`.
   */
  update(
    entity: TaxErrorMessages<T>
  ): UpdateRequestBuilder<TaxErrorMessages<T>, T> {
    return new UpdateRequestBuilder<TaxErrorMessages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxErrorMessages`.
   * @param dataAreaId Key property. See {@link TaxErrorMessages.dataAreaId}.
   * @param errorId Key property. See {@link TaxErrorMessages.errorId}.
   * @returns A request builder for creating requests that delete an entity of type `TaxErrorMessages`.
   */
  delete(
    dataAreaId: string,
    errorId: string
  ): DeleteRequestBuilder<TaxErrorMessages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxErrorMessages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxErrorMessages` by taking the entity as a parameter.
   */
  delete(
    entity: TaxErrorMessages<T>
  ): DeleteRequestBuilder<TaxErrorMessages<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    errorId?: string
  ): DeleteRequestBuilder<TaxErrorMessages<T>, T> {
    return new DeleteRequestBuilder<TaxErrorMessages<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxErrorMessages
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ErrorId: errorId!
          }
    );
  }
}
