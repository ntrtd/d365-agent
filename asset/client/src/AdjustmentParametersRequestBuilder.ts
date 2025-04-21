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
import { AdjustmentParameters } from './AdjustmentParameters';

/**
 * Request builder class for operations supported on the {@link AdjustmentParameters} entity.
 */
export class AdjustmentParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AdjustmentParameters<T>, T> {
  /**
   * Returns a request builder for querying all `AdjustmentParameters` entities.
   * @returns A request builder for creating requests to retrieve all `AdjustmentParameters` entities.
   */
  getAll(): GetAllRequestBuilder<AdjustmentParameters<T>, T> {
    return new GetAllRequestBuilder<AdjustmentParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AdjustmentParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AdjustmentParameters`.
   */
  create(
    entity: AdjustmentParameters<T>
  ): CreateRequestBuilder<AdjustmentParameters<T>, T> {
    return new CreateRequestBuilder<AdjustmentParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AdjustmentParameters` entity based on its keys.
   * @param ledgerName Key property. See {@link AdjustmentParameters.ledgerName}.
   * @returns A request builder for creating requests to retrieve one `AdjustmentParameters` entity based on its keys.
   */
  getByKey(
    ledgerName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AdjustmentParameters<T>, T> {
    return new GetByKeyRequestBuilder<AdjustmentParameters<T>, T>(
      this.entityApi,
      { LedgerName: ledgerName }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AdjustmentParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AdjustmentParameters`.
   */
  update(
    entity: AdjustmentParameters<T>
  ): UpdateRequestBuilder<AdjustmentParameters<T>, T> {
    return new UpdateRequestBuilder<AdjustmentParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AdjustmentParameters`.
   * @param ledgerName Key property. See {@link AdjustmentParameters.ledgerName}.
   * @returns A request builder for creating requests that delete an entity of type `AdjustmentParameters`.
   */
  delete(ledgerName: string): DeleteRequestBuilder<AdjustmentParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AdjustmentParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AdjustmentParameters` by taking the entity as a parameter.
   */
  delete(
    entity: AdjustmentParameters<T>
  ): DeleteRequestBuilder<AdjustmentParameters<T>, T>;
  delete(
    ledgerNameOrEntity: any
  ): DeleteRequestBuilder<AdjustmentParameters<T>, T> {
    return new DeleteRequestBuilder<AdjustmentParameters<T>, T>(
      this.entityApi,
      ledgerNameOrEntity instanceof AdjustmentParameters
        ? ledgerNameOrEntity
        : { LedgerName: ledgerNameOrEntity! }
    );
  }
}
