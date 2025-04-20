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
import { TransactionPostingDefinitionBudgetReservations } from './TransactionPostingDefinitionBudgetReservations';
import { BudgetReservationJournalizingTypePsn } from './BudgetReservationJournalizingTypePsn';
import { TableAll } from './TableAll';

/**
 * Request builder class for operations supported on the {@link TransactionPostingDefinitionBudgetReservations} entity.
 */
export class TransactionPostingDefinitionBudgetReservationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransactionPostingDefinitionBudgetReservations<T>, T> {
  /**
   * Returns a request builder for querying all `TransactionPostingDefinitionBudgetReservations` entities.
   * @returns A request builder for creating requests to retrieve all `TransactionPostingDefinitionBudgetReservations` entities.
   */
  getAll(): GetAllRequestBuilder<
    TransactionPostingDefinitionBudgetReservations<T>,
    T
  > {
    return new GetAllRequestBuilder<
      TransactionPostingDefinitionBudgetReservations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TransactionPostingDefinitionBudgetReservations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransactionPostingDefinitionBudgetReservations`.
   */
  create(
    entity: TransactionPostingDefinitionBudgetReservations<T>
  ): CreateRequestBuilder<
    TransactionPostingDefinitionBudgetReservations<T>,
    T
  > {
    return new CreateRequestBuilder<
      TransactionPostingDefinitionBudgetReservations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TransactionPostingDefinitionBudgetReservations` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransactionPostingDefinitionBudgetReservations.dataAreaId}.
   * @param budgetReservationTypeName Key property. See {@link TransactionPostingDefinitionBudgetReservations.budgetReservationTypeName}.
   * @param budgetReservationJournalizingType Key property. See {@link TransactionPostingDefinitionBudgetReservations.budgetReservationJournalizingType}.
   * @param budgetReservationTypeCode Key property. See {@link TransactionPostingDefinitionBudgetReservations.budgetReservationTypeCode}.
   * @returns A request builder for creating requests to retrieve one `TransactionPostingDefinitionBudgetReservations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    budgetReservationTypeName: DeserializedType<T, 'Edm.String'>,
    budgetReservationJournalizingType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BudgetReservationJournalizingType_PSN'
    >,
    budgetReservationTypeCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableAll'
    >
  ): GetByKeyRequestBuilder<
    TransactionPostingDefinitionBudgetReservations<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      TransactionPostingDefinitionBudgetReservations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      BudgetReservationTypeName: budgetReservationTypeName,
      BudgetReservationJournalizingType: budgetReservationJournalizingType,
      BudgetReservationTypeCode: budgetReservationTypeCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TransactionPostingDefinitionBudgetReservations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransactionPostingDefinitionBudgetReservations`.
   */
  update(
    entity: TransactionPostingDefinitionBudgetReservations<T>
  ): UpdateRequestBuilder<
    TransactionPostingDefinitionBudgetReservations<T>,
    T
  > {
    return new UpdateRequestBuilder<
      TransactionPostingDefinitionBudgetReservations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TransactionPostingDefinitionBudgetReservations`.
   * @param dataAreaId Key property. See {@link TransactionPostingDefinitionBudgetReservations.dataAreaId}.
   * @param budgetReservationTypeName Key property. See {@link TransactionPostingDefinitionBudgetReservations.budgetReservationTypeName}.
   * @param budgetReservationJournalizingType Key property. See {@link TransactionPostingDefinitionBudgetReservations.budgetReservationJournalizingType}.
   * @param budgetReservationTypeCode Key property. See {@link TransactionPostingDefinitionBudgetReservations.budgetReservationTypeCode}.
   * @returns A request builder for creating requests that delete an entity of type `TransactionPostingDefinitionBudgetReservations`.
   */
  delete(
    dataAreaId: string,
    budgetReservationTypeName: string,
    budgetReservationJournalizingType: BudgetReservationJournalizingTypePsn,
    budgetReservationTypeCode: TableAll
  ): DeleteRequestBuilder<TransactionPostingDefinitionBudgetReservations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransactionPostingDefinitionBudgetReservations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransactionPostingDefinitionBudgetReservations` by taking the entity as a parameter.
   */
  delete(
    entity: TransactionPostingDefinitionBudgetReservations<T>
  ): DeleteRequestBuilder<TransactionPostingDefinitionBudgetReservations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    budgetReservationTypeName?: string,
    budgetReservationJournalizingType?: BudgetReservationJournalizingTypePsn,
    budgetReservationTypeCode?: TableAll
  ): DeleteRequestBuilder<
    TransactionPostingDefinitionBudgetReservations<T>,
    T
  > {
    return new DeleteRequestBuilder<
      TransactionPostingDefinitionBudgetReservations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      TransactionPostingDefinitionBudgetReservations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BudgetReservationTypeName: budgetReservationTypeName!,
            BudgetReservationJournalizingType:
              budgetReservationJournalizingType!,
            BudgetReservationTypeCode: budgetReservationTypeCode!
          }
    );
  }
}
