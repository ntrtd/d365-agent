/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
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
import { BenefitCalculationRateDetails } from './BenefitCalculationRateDetails';

/**
 * Request builder class for operations supported on the {@link BenefitCalculationRateDetails} entity.
 */
export class BenefitCalculationRateDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitCalculationRateDetails<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitCalculationRateDetails` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitCalculationRateDetails` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitCalculationRateDetails<T>, T> {
    return new GetAllRequestBuilder<BenefitCalculationRateDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitCalculationRateDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitCalculationRateDetails`.
   */
  create(
    entity: BenefitCalculationRateDetails<T>
  ): CreateRequestBuilder<BenefitCalculationRateDetails<T>, T> {
    return new CreateRequestBuilder<BenefitCalculationRateDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitCalculationRateDetails` entity based on its keys.
   * @param name Key property. See {@link BenefitCalculationRateDetails.name}.
   * @param effective Key property. See {@link BenefitCalculationRateDetails.effective}.
   * @param expiration Key property. See {@link BenefitCalculationRateDetails.expiration}.
   * @param workerDeduction Key property. See {@link BenefitCalculationRateDetails.workerDeduction}.
   * @returns A request builder for creating requests to retrieve one `BenefitCalculationRateDetails` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>,
    effective: DeserializedType<T, 'Edm.DateTimeOffset'>,
    expiration: DeserializedType<T, 'Edm.DateTimeOffset'>,
    workerDeduction: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<BenefitCalculationRateDetails<T>, T> {
    return new GetByKeyRequestBuilder<BenefitCalculationRateDetails<T>, T>(
      this.entityApi,
      {
        Name: name,
        Effective: effective,
        Expiration: expiration,
        WorkerDeduction: workerDeduction
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitCalculationRateDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitCalculationRateDetails`.
   */
  update(
    entity: BenefitCalculationRateDetails<T>
  ): UpdateRequestBuilder<BenefitCalculationRateDetails<T>, T> {
    return new UpdateRequestBuilder<BenefitCalculationRateDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitCalculationRateDetails`.
   * @param name Key property. See {@link BenefitCalculationRateDetails.name}.
   * @param effective Key property. See {@link BenefitCalculationRateDetails.effective}.
   * @param expiration Key property. See {@link BenefitCalculationRateDetails.expiration}.
   * @param workerDeduction Key property. See {@link BenefitCalculationRateDetails.workerDeduction}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitCalculationRateDetails`.
   */
  delete(
    name: string,
    effective: Moment,
    expiration: Moment,
    workerDeduction: BigNumber
  ): DeleteRequestBuilder<BenefitCalculationRateDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitCalculationRateDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitCalculationRateDetails` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitCalculationRateDetails<T>
  ): DeleteRequestBuilder<BenefitCalculationRateDetails<T>, T>;
  delete(
    nameOrEntity: any,
    effective?: Moment,
    expiration?: Moment,
    workerDeduction?: BigNumber
  ): DeleteRequestBuilder<BenefitCalculationRateDetails<T>, T> {
    return new DeleteRequestBuilder<BenefitCalculationRateDetails<T>, T>(
      this.entityApi,
      nameOrEntity instanceof BenefitCalculationRateDetails
        ? nameOrEntity
        : {
            Name: nameOrEntity!,
            Effective: effective!,
            Expiration: expiration!,
            WorkerDeduction: workerDeduction!
          }
    );
  }
}
