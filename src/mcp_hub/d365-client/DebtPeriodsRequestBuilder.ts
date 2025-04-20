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
import { DebtPeriods } from './DebtPeriods';
import { RTax25DebtType } from './RTax25DebtType';
import { RTax25BadDebtType } from './RTax25BadDebtType';

/**
 * Request builder class for operations supported on the {@link DebtPeriods} entity.
 */
export class DebtPeriodsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DebtPeriods<T>, T> {
  /**
   * Returns a request builder for querying all `DebtPeriods` entities.
   * @returns A request builder for creating requests to retrieve all `DebtPeriods` entities.
   */
  getAll(): GetAllRequestBuilder<DebtPeriods<T>, T> {
    return new GetAllRequestBuilder<DebtPeriods<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DebtPeriods` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DebtPeriods`.
   */
  create(entity: DebtPeriods<T>): CreateRequestBuilder<DebtPeriods<T>, T> {
    return new CreateRequestBuilder<DebtPeriods<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `DebtPeriods` entity based on its keys.
   * @param dataAreaId Key property. See {@link DebtPeriods.dataAreaId}.
   * @param debtType Key property. See {@link DebtPeriods.debtType}.
   * @param periodDebtType Key property. See {@link DebtPeriods.periodDebtType}.
   * @param from Key property. See {@link DebtPeriods.from}.
   * @returns A request builder for creating requests to retrieve one `DebtPeriods` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    debtType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RTax25DebtType'
    >,
    periodDebtType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RTax25BadDebtType'
    >,
    from: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<DebtPeriods<T>, T> {
    return new GetByKeyRequestBuilder<DebtPeriods<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      DebtType: debtType,
      PeriodDebtType: periodDebtType,
      From: from
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DebtPeriods`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DebtPeriods`.
   */
  update(entity: DebtPeriods<T>): UpdateRequestBuilder<DebtPeriods<T>, T> {
    return new UpdateRequestBuilder<DebtPeriods<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `DebtPeriods`.
   * @param dataAreaId Key property. See {@link DebtPeriods.dataAreaId}.
   * @param debtType Key property. See {@link DebtPeriods.debtType}.
   * @param periodDebtType Key property. See {@link DebtPeriods.periodDebtType}.
   * @param from Key property. See {@link DebtPeriods.from}.
   * @returns A request builder for creating requests that delete an entity of type `DebtPeriods`.
   */
  delete(
    dataAreaId: string,
    debtType: RTax25DebtType,
    periodDebtType: RTax25BadDebtType,
    from: number
  ): DeleteRequestBuilder<DebtPeriods<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DebtPeriods`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DebtPeriods` by taking the entity as a parameter.
   */
  delete(entity: DebtPeriods<T>): DeleteRequestBuilder<DebtPeriods<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    debtType?: RTax25DebtType,
    periodDebtType?: RTax25BadDebtType,
    from?: number
  ): DeleteRequestBuilder<DebtPeriods<T>, T> {
    return new DeleteRequestBuilder<DebtPeriods<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DebtPeriods
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DebtType: debtType!,
            PeriodDebtType: periodDebtType!,
            From: from!
          }
    );
  }
}
