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
import { FiscalBooksParametersPerStates } from './FiscalBooksParametersPerStates';

/**
 * Request builder class for operations supported on the {@link FiscalBooksParametersPerStates} entity.
 */
export class FiscalBooksParametersPerStatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalBooksParametersPerStates<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalBooksParametersPerStates` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalBooksParametersPerStates` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalBooksParametersPerStates<T>, T> {
    return new GetAllRequestBuilder<FiscalBooksParametersPerStates<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FiscalBooksParametersPerStates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalBooksParametersPerStates`.
   */
  create(
    entity: FiscalBooksParametersPerStates<T>
  ): CreateRequestBuilder<FiscalBooksParametersPerStates<T>, T> {
    return new CreateRequestBuilder<FiscalBooksParametersPerStates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FiscalBooksParametersPerStates` entity based on its keys.
   * @param state Key property. See {@link FiscalBooksParametersPerStates.state}.
   * @returns A request builder for creating requests to retrieve one `FiscalBooksParametersPerStates` entity based on its keys.
   */
  getByKey(
    state: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalBooksParametersPerStates<T>, T> {
    return new GetByKeyRequestBuilder<FiscalBooksParametersPerStates<T>, T>(
      this.entityApi,
      { State: state }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalBooksParametersPerStates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalBooksParametersPerStates`.
   */
  update(
    entity: FiscalBooksParametersPerStates<T>
  ): UpdateRequestBuilder<FiscalBooksParametersPerStates<T>, T> {
    return new UpdateRequestBuilder<FiscalBooksParametersPerStates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalBooksParametersPerStates`.
   * @param state Key property. See {@link FiscalBooksParametersPerStates.state}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalBooksParametersPerStates`.
   */
  delete(
    state: string
  ): DeleteRequestBuilder<FiscalBooksParametersPerStates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalBooksParametersPerStates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalBooksParametersPerStates` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalBooksParametersPerStates<T>
  ): DeleteRequestBuilder<FiscalBooksParametersPerStates<T>, T>;
  delete(
    stateOrEntity: any
  ): DeleteRequestBuilder<FiscalBooksParametersPerStates<T>, T> {
    return new DeleteRequestBuilder<FiscalBooksParametersPerStates<T>, T>(
      this.entityApi,
      stateOrEntity instanceof FiscalBooksParametersPerStates
        ? stateOrEntity
        : { State: stateOrEntity! }
    );
  }
}
