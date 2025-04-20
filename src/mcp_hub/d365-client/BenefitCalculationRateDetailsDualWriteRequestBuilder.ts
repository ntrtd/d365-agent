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
import { BenefitCalculationRateDetailsDualWrite } from './BenefitCalculationRateDetailsDualWrite';

/**
 * Request builder class for operations supported on the {@link BenefitCalculationRateDetailsDualWrite} entity.
 */
export class BenefitCalculationRateDetailsDualWriteRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitCalculationRateDetailsDualWrite<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitCalculationRateDetailsDualWrite` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitCalculationRateDetailsDualWrite` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitCalculationRateDetailsDualWrite<T>, T> {
    return new GetAllRequestBuilder<
      BenefitCalculationRateDetailsDualWrite<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BenefitCalculationRateDetailsDualWrite` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitCalculationRateDetailsDualWrite`.
   */
  create(
    entity: BenefitCalculationRateDetailsDualWrite<T>
  ): CreateRequestBuilder<BenefitCalculationRateDetailsDualWrite<T>, T> {
    return new CreateRequestBuilder<
      BenefitCalculationRateDetailsDualWrite<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BenefitCalculationRateDetailsDualWrite` entity based on its keys.
   * @param name Key property. See {@link BenefitCalculationRateDetailsDualWrite.name}.
   * @param effective Key property. See {@link BenefitCalculationRateDetailsDualWrite.effective}.
   * @param workerDeduction Key property. See {@link BenefitCalculationRateDetailsDualWrite.workerDeduction}.
   * @returns A request builder for creating requests to retrieve one `BenefitCalculationRateDetailsDualWrite` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>,
    effective: DeserializedType<T, 'Edm.DateTimeOffset'>,
    workerDeduction: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<BenefitCalculationRateDetailsDualWrite<T>, T> {
    return new GetByKeyRequestBuilder<
      BenefitCalculationRateDetailsDualWrite<T>,
      T
    >(this.entityApi, {
      Name: name,
      Effective: effective,
      WorkerDeduction: workerDeduction
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitCalculationRateDetailsDualWrite`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitCalculationRateDetailsDualWrite`.
   */
  update(
    entity: BenefitCalculationRateDetailsDualWrite<T>
  ): UpdateRequestBuilder<BenefitCalculationRateDetailsDualWrite<T>, T> {
    return new UpdateRequestBuilder<
      BenefitCalculationRateDetailsDualWrite<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitCalculationRateDetailsDualWrite`.
   * @param name Key property. See {@link BenefitCalculationRateDetailsDualWrite.name}.
   * @param effective Key property. See {@link BenefitCalculationRateDetailsDualWrite.effective}.
   * @param workerDeduction Key property. See {@link BenefitCalculationRateDetailsDualWrite.workerDeduction}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitCalculationRateDetailsDualWrite`.
   */
  delete(
    name: string,
    effective: Moment,
    workerDeduction: BigNumber
  ): DeleteRequestBuilder<BenefitCalculationRateDetailsDualWrite<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitCalculationRateDetailsDualWrite`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitCalculationRateDetailsDualWrite` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitCalculationRateDetailsDualWrite<T>
  ): DeleteRequestBuilder<BenefitCalculationRateDetailsDualWrite<T>, T>;
  delete(
    nameOrEntity: any,
    effective?: Moment,
    workerDeduction?: BigNumber
  ): DeleteRequestBuilder<BenefitCalculationRateDetailsDualWrite<T>, T> {
    return new DeleteRequestBuilder<
      BenefitCalculationRateDetailsDualWrite<T>,
      T
    >(
      this.entityApi,
      nameOrEntity instanceof BenefitCalculationRateDetailsDualWrite
        ? nameOrEntity
        : {
            Name: nameOrEntity!,
            Effective: effective!,
            WorkerDeduction: workerDeduction!
          }
    );
  }
}
