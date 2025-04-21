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
import { BenefitCalculationRates } from './BenefitCalculationRates';

/**
 * Request builder class for operations supported on the {@link BenefitCalculationRates} entity.
 */
export class BenefitCalculationRatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitCalculationRates<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitCalculationRates` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitCalculationRates` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitCalculationRates<T>, T> {
    return new GetAllRequestBuilder<BenefitCalculationRates<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitCalculationRates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitCalculationRates`.
   */
  create(
    entity: BenefitCalculationRates<T>
  ): CreateRequestBuilder<BenefitCalculationRates<T>, T> {
    return new CreateRequestBuilder<BenefitCalculationRates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitCalculationRates` entity based on its keys.
   * @param name Key property. See {@link BenefitCalculationRates.name}.
   * @returns A request builder for creating requests to retrieve one `BenefitCalculationRates` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitCalculationRates<T>, T> {
    return new GetByKeyRequestBuilder<BenefitCalculationRates<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitCalculationRates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitCalculationRates`.
   */
  update(
    entity: BenefitCalculationRates<T>
  ): UpdateRequestBuilder<BenefitCalculationRates<T>, T> {
    return new UpdateRequestBuilder<BenefitCalculationRates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitCalculationRates`.
   * @param name Key property. See {@link BenefitCalculationRates.name}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitCalculationRates`.
   */
  delete(name: string): DeleteRequestBuilder<BenefitCalculationRates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitCalculationRates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitCalculationRates` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitCalculationRates<T>
  ): DeleteRequestBuilder<BenefitCalculationRates<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<BenefitCalculationRates<T>, T> {
    return new DeleteRequestBuilder<BenefitCalculationRates<T>, T>(
      this.entityApi,
      nameOrEntity instanceof BenefitCalculationRates
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
