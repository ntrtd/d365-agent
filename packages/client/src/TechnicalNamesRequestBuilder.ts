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
import { TechnicalNames } from './TechnicalNames';

/**
 * Request builder class for operations supported on the {@link TechnicalNames} entity.
 */
export class TechnicalNamesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TechnicalNames<T>, T> {
  /**
   * Returns a request builder for querying all `TechnicalNames` entities.
   * @returns A request builder for creating requests to retrieve all `TechnicalNames` entities.
   */
  getAll(): GetAllRequestBuilder<TechnicalNames<T>, T> {
    return new GetAllRequestBuilder<TechnicalNames<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TechnicalNames` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TechnicalNames`.
   */
  create(
    entity: TechnicalNames<T>
  ): CreateRequestBuilder<TechnicalNames<T>, T> {
    return new CreateRequestBuilder<TechnicalNames<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TechnicalNames` entity based on its keys.
   * @param technicalNameCode Key property. See {@link TechnicalNames.technicalNameCode}.
   * @returns A request builder for creating requests to retrieve one `TechnicalNames` entity based on its keys.
   */
  getByKey(
    technicalNameCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TechnicalNames<T>, T> {
    return new GetByKeyRequestBuilder<TechnicalNames<T>, T>(this.entityApi, {
      TechnicalNameCode: technicalNameCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TechnicalNames`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TechnicalNames`.
   */
  update(
    entity: TechnicalNames<T>
  ): UpdateRequestBuilder<TechnicalNames<T>, T> {
    return new UpdateRequestBuilder<TechnicalNames<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TechnicalNames`.
   * @param technicalNameCode Key property. See {@link TechnicalNames.technicalNameCode}.
   * @returns A request builder for creating requests that delete an entity of type `TechnicalNames`.
   */
  delete(technicalNameCode: string): DeleteRequestBuilder<TechnicalNames<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TechnicalNames`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TechnicalNames` by taking the entity as a parameter.
   */
  delete(entity: TechnicalNames<T>): DeleteRequestBuilder<TechnicalNames<T>, T>;
  delete(
    technicalNameCodeOrEntity: any
  ): DeleteRequestBuilder<TechnicalNames<T>, T> {
    return new DeleteRequestBuilder<TechnicalNames<T>, T>(
      this.entityApi,
      technicalNameCodeOrEntity instanceof TechnicalNames
        ? technicalNameCodeOrEntity
        : { TechnicalNameCode: technicalNameCodeOrEntity! }
    );
  }
}
