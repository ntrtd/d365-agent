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
import { RetailTerminals } from './RetailTerminals';

/**
 * Request builder class for operations supported on the {@link RetailTerminals} entity.
 */
export class RetailTerminalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTerminals<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTerminals` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTerminals` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTerminals<T>, T> {
    return new GetAllRequestBuilder<RetailTerminals<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTerminals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTerminals`.
   */
  create(
    entity: RetailTerminals<T>
  ): CreateRequestBuilder<RetailTerminals<T>, T> {
    return new CreateRequestBuilder<RetailTerminals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTerminals` entity based on its keys.
   * @param terminalNumber Key property. See {@link RetailTerminals.terminalNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailTerminals` entity based on its keys.
   */
  getByKey(
    terminalNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTerminals<T>, T> {
    return new GetByKeyRequestBuilder<RetailTerminals<T>, T>(this.entityApi, {
      TerminalNumber: terminalNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTerminals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTerminals`.
   */
  update(
    entity: RetailTerminals<T>
  ): UpdateRequestBuilder<RetailTerminals<T>, T> {
    return new UpdateRequestBuilder<RetailTerminals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTerminals`.
   * @param terminalNumber Key property. See {@link RetailTerminals.terminalNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTerminals`.
   */
  delete(terminalNumber: string): DeleteRequestBuilder<RetailTerminals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTerminals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTerminals` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTerminals<T>
  ): DeleteRequestBuilder<RetailTerminals<T>, T>;
  delete(
    terminalNumberOrEntity: any
  ): DeleteRequestBuilder<RetailTerminals<T>, T> {
    return new DeleteRequestBuilder<RetailTerminals<T>, T>(
      this.entityApi,
      terminalNumberOrEntity instanceof RetailTerminals
        ? terminalNumberOrEntity
        : { TerminalNumber: terminalNumberOrEntity! }
    );
  }
}
