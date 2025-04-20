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
import { ContribCreditTypes } from './ContribCreditTypes';

/**
 * Request builder class for operations supported on the {@link ContribCreditTypes} entity.
 */
export class ContribCreditTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ContribCreditTypes<T>, T> {
  /**
   * Returns a request builder for querying all `ContribCreditTypes` entities.
   * @returns A request builder for creating requests to retrieve all `ContribCreditTypes` entities.
   */
  getAll(): GetAllRequestBuilder<ContribCreditTypes<T>, T> {
    return new GetAllRequestBuilder<ContribCreditTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ContribCreditTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ContribCreditTypes`.
   */
  create(
    entity: ContribCreditTypes<T>
  ): CreateRequestBuilder<ContribCreditTypes<T>, T> {
    return new CreateRequestBuilder<ContribCreditTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ContribCreditTypes` entity based on its keys.
   * @param creditType Key property. See {@link ContribCreditTypes.creditType}.
   * @returns A request builder for creating requests to retrieve one `ContribCreditTypes` entity based on its keys.
   */
  getByKey(
    creditType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ContribCreditTypes<T>, T> {
    return new GetByKeyRequestBuilder<ContribCreditTypes<T>, T>(
      this.entityApi,
      { CreditType: creditType }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ContribCreditTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ContribCreditTypes`.
   */
  update(
    entity: ContribCreditTypes<T>
  ): UpdateRequestBuilder<ContribCreditTypes<T>, T> {
    return new UpdateRequestBuilder<ContribCreditTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ContribCreditTypes`.
   * @param creditType Key property. See {@link ContribCreditTypes.creditType}.
   * @returns A request builder for creating requests that delete an entity of type `ContribCreditTypes`.
   */
  delete(creditType: string): DeleteRequestBuilder<ContribCreditTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ContribCreditTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ContribCreditTypes` by taking the entity as a parameter.
   */
  delete(
    entity: ContribCreditTypes<T>
  ): DeleteRequestBuilder<ContribCreditTypes<T>, T>;
  delete(
    creditTypeOrEntity: any
  ): DeleteRequestBuilder<ContribCreditTypes<T>, T> {
    return new DeleteRequestBuilder<ContribCreditTypes<T>, T>(
      this.entityApi,
      creditTypeOrEntity instanceof ContribCreditTypes
        ? creditTypeOrEntity
        : { CreditType: creditTypeOrEntity! }
    );
  }
}
