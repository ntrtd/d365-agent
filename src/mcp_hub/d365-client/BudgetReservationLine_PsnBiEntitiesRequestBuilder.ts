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
import { BudgetReservationLine_PsnBiEntities } from './BudgetReservationLine_PsnBiEntities';

/**
 * Request builder class for operations supported on the {@link BudgetReservationLine_PsnBiEntities} entity.
 */
export class BudgetReservationLine_PsnBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetReservationLine_PsnBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetReservationLine_PsnBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetReservationLine_PsnBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetReservationLine_PsnBiEntities<T>, T> {
    return new GetAllRequestBuilder<BudgetReservationLine_PsnBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BudgetReservationLine_PsnBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetReservationLine_PsnBiEntities`.
   */
  create(
    entity: BudgetReservationLine_PsnBiEntities<T>
  ): CreateRequestBuilder<BudgetReservationLine_PsnBiEntities<T>, T> {
    return new CreateRequestBuilder<BudgetReservationLine_PsnBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetReservationLine_PsnBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetReservationLine_PsnBiEntities.dataAreaId}.
   * @param budgetReservationHeaderPsn Key property. See {@link BudgetReservationLine_PsnBiEntities.budgetReservationHeaderPsn}.
   * @param lineNumber Key property. See {@link BudgetReservationLine_PsnBiEntities.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `BudgetReservationLine_PsnBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    budgetReservationHeaderPsn: DeserializedType<T, 'Edm.Int64'>,
    lineNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BudgetReservationLine_PsnBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      BudgetReservationLine_PsnBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      BudgetReservationHeader_PSN: budgetReservationHeaderPsn,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetReservationLine_PsnBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetReservationLine_PsnBiEntities`.
   */
  update(
    entity: BudgetReservationLine_PsnBiEntities<T>
  ): UpdateRequestBuilder<BudgetReservationLine_PsnBiEntities<T>, T> {
    return new UpdateRequestBuilder<BudgetReservationLine_PsnBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetReservationLine_PsnBiEntities`.
   * @param dataAreaId Key property. See {@link BudgetReservationLine_PsnBiEntities.dataAreaId}.
   * @param budgetReservationHeaderPsn Key property. See {@link BudgetReservationLine_PsnBiEntities.budgetReservationHeaderPsn}.
   * @param lineNumber Key property. See {@link BudgetReservationLine_PsnBiEntities.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetReservationLine_PsnBiEntities`.
   */
  delete(
    dataAreaId: string,
    budgetReservationHeaderPsn: BigNumber,
    lineNumber: number
  ): DeleteRequestBuilder<BudgetReservationLine_PsnBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetReservationLine_PsnBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetReservationLine_PsnBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetReservationLine_PsnBiEntities<T>
  ): DeleteRequestBuilder<BudgetReservationLine_PsnBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    budgetReservationHeaderPsn?: BigNumber,
    lineNumber?: number
  ): DeleteRequestBuilder<BudgetReservationLine_PsnBiEntities<T>, T> {
    return new DeleteRequestBuilder<BudgetReservationLine_PsnBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetReservationLine_PsnBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BudgetReservationHeader_PSN: budgetReservationHeaderPsn!,
            LineNumber: lineNumber!
          }
    );
  }
}
