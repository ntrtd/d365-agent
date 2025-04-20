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
import { BenefitsPayFrequencies } from './BenefitsPayFrequencies';

/**
 * Request builder class for operations supported on the {@link BenefitsPayFrequencies} entity.
 */
export class BenefitsPayFrequenciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsPayFrequencies<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsPayFrequencies` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsPayFrequencies` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsPayFrequencies<T>, T> {
    return new GetAllRequestBuilder<BenefitsPayFrequencies<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitsPayFrequencies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsPayFrequencies`.
   */
  create(
    entity: BenefitsPayFrequencies<T>
  ): CreateRequestBuilder<BenefitsPayFrequencies<T>, T> {
    return new CreateRequestBuilder<BenefitsPayFrequencies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsPayFrequencies` entity based on its keys.
   * @param payFrequencyId Key property. See {@link BenefitsPayFrequencies.payFrequencyId}.
   * @returns A request builder for creating requests to retrieve one `BenefitsPayFrequencies` entity based on its keys.
   */
  getByKey(
    payFrequencyId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitsPayFrequencies<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsPayFrequencies<T>, T>(
      this.entityApi,
      { PayFrequencyId: payFrequencyId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsPayFrequencies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsPayFrequencies`.
   */
  update(
    entity: BenefitsPayFrequencies<T>
  ): UpdateRequestBuilder<BenefitsPayFrequencies<T>, T> {
    return new UpdateRequestBuilder<BenefitsPayFrequencies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsPayFrequencies`.
   * @param payFrequencyId Key property. See {@link BenefitsPayFrequencies.payFrequencyId}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPayFrequencies`.
   */
  delete(
    payFrequencyId: string
  ): DeleteRequestBuilder<BenefitsPayFrequencies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsPayFrequencies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPayFrequencies` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsPayFrequencies<T>
  ): DeleteRequestBuilder<BenefitsPayFrequencies<T>, T>;
  delete(
    payFrequencyIdOrEntity: any
  ): DeleteRequestBuilder<BenefitsPayFrequencies<T>, T> {
    return new DeleteRequestBuilder<BenefitsPayFrequencies<T>, T>(
      this.entityApi,
      payFrequencyIdOrEntity instanceof BenefitsPayFrequencies
        ? payFrequencyIdOrEntity
        : { PayFrequencyId: payFrequencyIdOrEntity! }
    );
  }
}
