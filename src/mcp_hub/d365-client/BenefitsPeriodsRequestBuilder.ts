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
import { BenefitsPeriods } from './BenefitsPeriods';

/**
 * Request builder class for operations supported on the {@link BenefitsPeriods} entity.
 */
export class BenefitsPeriodsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsPeriods<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsPeriods` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsPeriods` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsPeriods<T>, T> {
    return new GetAllRequestBuilder<BenefitsPeriods<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BenefitsPeriods` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsPeriods`.
   */
  create(
    entity: BenefitsPeriods<T>
  ): CreateRequestBuilder<BenefitsPeriods<T>, T> {
    return new CreateRequestBuilder<BenefitsPeriods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsPeriods` entity based on its keys.
   * @param periodId Key property. See {@link BenefitsPeriods.periodId}.
   * @returns A request builder for creating requests to retrieve one `BenefitsPeriods` entity based on its keys.
   */
  getByKey(
    periodId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitsPeriods<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsPeriods<T>, T>(this.entityApi, {
      PeriodId: periodId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsPeriods`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsPeriods`.
   */
  update(
    entity: BenefitsPeriods<T>
  ): UpdateRequestBuilder<BenefitsPeriods<T>, T> {
    return new UpdateRequestBuilder<BenefitsPeriods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsPeriods`.
   * @param periodId Key property. See {@link BenefitsPeriods.periodId}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPeriods`.
   */
  delete(periodId: string): DeleteRequestBuilder<BenefitsPeriods<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsPeriods`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPeriods` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsPeriods<T>
  ): DeleteRequestBuilder<BenefitsPeriods<T>, T>;
  delete(periodIdOrEntity: any): DeleteRequestBuilder<BenefitsPeriods<T>, T> {
    return new DeleteRequestBuilder<BenefitsPeriods<T>, T>(
      this.entityApi,
      periodIdOrEntity instanceof BenefitsPeriods
        ? periodIdOrEntity
        : { PeriodId: periodIdOrEntity! }
    );
  }
}
