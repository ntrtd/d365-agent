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
import { BenefitsCreditPeriods } from './BenefitsCreditPeriods';

/**
 * Request builder class for operations supported on the {@link BenefitsCreditPeriods} entity.
 */
export class BenefitsCreditPeriodsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsCreditPeriods<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsCreditPeriods` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsCreditPeriods` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsCreditPeriods<T>, T> {
    return new GetAllRequestBuilder<BenefitsCreditPeriods<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitsCreditPeriods` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsCreditPeriods`.
   */
  create(
    entity: BenefitsCreditPeriods<T>
  ): CreateRequestBuilder<BenefitsCreditPeriods<T>, T> {
    return new CreateRequestBuilder<BenefitsCreditPeriods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsCreditPeriods` entity based on its keys.
   * @param dataAreaId Key property. See {@link BenefitsCreditPeriods.dataAreaId}.
   * @param periodId Key property. See {@link BenefitsCreditPeriods.periodId}.
   * @param creditId Key property. See {@link BenefitsCreditPeriods.creditId}.
   * @returns A request builder for creating requests to retrieve one `BenefitsCreditPeriods` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    periodId: DeserializedType<T, 'Edm.String'>,
    creditId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitsCreditPeriods<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsCreditPeriods<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PeriodId: periodId,
        CreditId: creditId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsCreditPeriods`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsCreditPeriods`.
   */
  update(
    entity: BenefitsCreditPeriods<T>
  ): UpdateRequestBuilder<BenefitsCreditPeriods<T>, T> {
    return new UpdateRequestBuilder<BenefitsCreditPeriods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsCreditPeriods`.
   * @param dataAreaId Key property. See {@link BenefitsCreditPeriods.dataAreaId}.
   * @param periodId Key property. See {@link BenefitsCreditPeriods.periodId}.
   * @param creditId Key property. See {@link BenefitsCreditPeriods.creditId}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsCreditPeriods`.
   */
  delete(
    dataAreaId: string,
    periodId: string,
    creditId: string
  ): DeleteRequestBuilder<BenefitsCreditPeriods<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsCreditPeriods`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsCreditPeriods` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsCreditPeriods<T>
  ): DeleteRequestBuilder<BenefitsCreditPeriods<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    periodId?: string,
    creditId?: string
  ): DeleteRequestBuilder<BenefitsCreditPeriods<T>, T> {
    return new DeleteRequestBuilder<BenefitsCreditPeriods<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BenefitsCreditPeriods
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PeriodId: periodId!,
            CreditId: creditId!
          }
    );
  }
}
