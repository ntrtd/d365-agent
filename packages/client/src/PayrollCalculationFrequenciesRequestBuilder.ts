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
import { PayrollCalculationFrequencies } from './PayrollCalculationFrequencies';

/**
 * Request builder class for operations supported on the {@link PayrollCalculationFrequencies} entity.
 */
export class PayrollCalculationFrequenciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayrollCalculationFrequencies<T>, T> {
  /**
   * Returns a request builder for querying all `PayrollCalculationFrequencies` entities.
   * @returns A request builder for creating requests to retrieve all `PayrollCalculationFrequencies` entities.
   */
  getAll(): GetAllRequestBuilder<PayrollCalculationFrequencies<T>, T> {
    return new GetAllRequestBuilder<PayrollCalculationFrequencies<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayrollCalculationFrequencies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayrollCalculationFrequencies`.
   */
  create(
    entity: PayrollCalculationFrequencies<T>
  ): CreateRequestBuilder<PayrollCalculationFrequencies<T>, T> {
    return new CreateRequestBuilder<PayrollCalculationFrequencies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayrollCalculationFrequencies` entity based on its keys.
   * @param frequency Key property. See {@link PayrollCalculationFrequencies.frequency}.
   * @returns A request builder for creating requests to retrieve one `PayrollCalculationFrequencies` entity based on its keys.
   */
  getByKey(
    frequency: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayrollCalculationFrequencies<T>, T> {
    return new GetByKeyRequestBuilder<PayrollCalculationFrequencies<T>, T>(
      this.entityApi,
      { Frequency: frequency }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayrollCalculationFrequencies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayrollCalculationFrequencies`.
   */
  update(
    entity: PayrollCalculationFrequencies<T>
  ): UpdateRequestBuilder<PayrollCalculationFrequencies<T>, T> {
    return new UpdateRequestBuilder<PayrollCalculationFrequencies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayrollCalculationFrequencies`.
   * @param frequency Key property. See {@link PayrollCalculationFrequencies.frequency}.
   * @returns A request builder for creating requests that delete an entity of type `PayrollCalculationFrequencies`.
   */
  delete(
    frequency: string
  ): DeleteRequestBuilder<PayrollCalculationFrequencies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayrollCalculationFrequencies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayrollCalculationFrequencies` by taking the entity as a parameter.
   */
  delete(
    entity: PayrollCalculationFrequencies<T>
  ): DeleteRequestBuilder<PayrollCalculationFrequencies<T>, T>;
  delete(
    frequencyOrEntity: any
  ): DeleteRequestBuilder<PayrollCalculationFrequencies<T>, T> {
    return new DeleteRequestBuilder<PayrollCalculationFrequencies<T>, T>(
      this.entityApi,
      frequencyOrEntity instanceof PayrollCalculationFrequencies
        ? frequencyOrEntity
        : { Frequency: frequencyOrEntity! }
    );
  }
}
