/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { PeriodAllocationCategories } from './PeriodAllocationCategories';

/**
 * Request builder class for operations supported on the {@link PeriodAllocationCategories} entity.
 */
export class PeriodAllocationCategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PeriodAllocationCategories<T>, T> {
  /**
   * Returns a request builder for querying all `PeriodAllocationCategories` entities.
   * @returns A request builder for creating requests to retrieve all `PeriodAllocationCategories` entities.
   */
  getAll(): GetAllRequestBuilder<PeriodAllocationCategories<T>, T> {
    return new GetAllRequestBuilder<PeriodAllocationCategories<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PeriodAllocationCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PeriodAllocationCategories`.
   */
  create(
    entity: PeriodAllocationCategories<T>
  ): CreateRequestBuilder<PeriodAllocationCategories<T>, T> {
    return new CreateRequestBuilder<PeriodAllocationCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PeriodAllocationCategories` entity based on its keys.
   * @param dataAreaId Key property. See {@link PeriodAllocationCategories.dataAreaId}.
   * @param periodKey Key property. See {@link PeriodAllocationCategories.periodKey}.
   * @param lineNumber Key property. See {@link PeriodAllocationCategories.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `PeriodAllocationCategories` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    periodKey: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<PeriodAllocationCategories<T>, T> {
    return new GetByKeyRequestBuilder<PeriodAllocationCategories<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PeriodKey: periodKey,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PeriodAllocationCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PeriodAllocationCategories`.
   */
  update(
    entity: PeriodAllocationCategories<T>
  ): UpdateRequestBuilder<PeriodAllocationCategories<T>, T> {
    return new UpdateRequestBuilder<PeriodAllocationCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PeriodAllocationCategories`.
   * @param dataAreaId Key property. See {@link PeriodAllocationCategories.dataAreaId}.
   * @param periodKey Key property. See {@link PeriodAllocationCategories.periodKey}.
   * @param lineNumber Key property. See {@link PeriodAllocationCategories.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PeriodAllocationCategories`.
   */
  delete(
    dataAreaId: string,
    periodKey: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<PeriodAllocationCategories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PeriodAllocationCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PeriodAllocationCategories` by taking the entity as a parameter.
   */
  delete(
    entity: PeriodAllocationCategories<T>
  ): DeleteRequestBuilder<PeriodAllocationCategories<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    periodKey?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<PeriodAllocationCategories<T>, T> {
    return new DeleteRequestBuilder<PeriodAllocationCategories<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PeriodAllocationCategories
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PeriodKey: periodKey!,
            LineNumber: lineNumber!
          }
    );
  }
}
