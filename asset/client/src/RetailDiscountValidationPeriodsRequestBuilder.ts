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
import { RetailDiscountValidationPeriods } from './RetailDiscountValidationPeriods';

/**
 * Request builder class for operations supported on the {@link RetailDiscountValidationPeriods} entity.
 */
export class RetailDiscountValidationPeriodsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailDiscountValidationPeriods<T>, T> {
  /**
   * Returns a request builder for querying all `RetailDiscountValidationPeriods` entities.
   * @returns A request builder for creating requests to retrieve all `RetailDiscountValidationPeriods` entities.
   */
  getAll(): GetAllRequestBuilder<RetailDiscountValidationPeriods<T>, T> {
    return new GetAllRequestBuilder<RetailDiscountValidationPeriods<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailDiscountValidationPeriods` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailDiscountValidationPeriods`.
   */
  create(
    entity: RetailDiscountValidationPeriods<T>
  ): CreateRequestBuilder<RetailDiscountValidationPeriods<T>, T> {
    return new CreateRequestBuilder<RetailDiscountValidationPeriods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailDiscountValidationPeriods` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailDiscountValidationPeriods.dataAreaId}.
   * @param periodId Key property. See {@link RetailDiscountValidationPeriods.periodId}.
   * @returns A request builder for creating requests to retrieve one `RetailDiscountValidationPeriods` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    periodId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailDiscountValidationPeriods<T>, T> {
    return new GetByKeyRequestBuilder<RetailDiscountValidationPeriods<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PeriodId: periodId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailDiscountValidationPeriods`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailDiscountValidationPeriods`.
   */
  update(
    entity: RetailDiscountValidationPeriods<T>
  ): UpdateRequestBuilder<RetailDiscountValidationPeriods<T>, T> {
    return new UpdateRequestBuilder<RetailDiscountValidationPeriods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailDiscountValidationPeriods`.
   * @param dataAreaId Key property. See {@link RetailDiscountValidationPeriods.dataAreaId}.
   * @param periodId Key property. See {@link RetailDiscountValidationPeriods.periodId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailDiscountValidationPeriods`.
   */
  delete(
    dataAreaId: string,
    periodId: string
  ): DeleteRequestBuilder<RetailDiscountValidationPeriods<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailDiscountValidationPeriods`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailDiscountValidationPeriods` by taking the entity as a parameter.
   */
  delete(
    entity: RetailDiscountValidationPeriods<T>
  ): DeleteRequestBuilder<RetailDiscountValidationPeriods<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    periodId?: string
  ): DeleteRequestBuilder<RetailDiscountValidationPeriods<T>, T> {
    return new DeleteRequestBuilder<RetailDiscountValidationPeriods<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailDiscountValidationPeriods
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PeriodId: periodId!
          }
    );
  }
}
