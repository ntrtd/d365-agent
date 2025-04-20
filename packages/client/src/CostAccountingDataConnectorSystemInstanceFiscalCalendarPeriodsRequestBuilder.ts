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
import { CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods } from './CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods';

/**
 * Request builder class for operations supported on the {@link CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods} entity.
 */
export class CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriodsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods<T>,
  T
> {
  /**
   * Returns a request builder for querying all `CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods` entities.
   * @returns A request builder for creating requests to retrieve all `CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods` entities.
   */
  getAll(): GetAllRequestBuilder<
    CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods`.
   */
  create(
    entity: CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods<T>
  ): CreateRequestBuilder<
    CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods<T>,
    T
  > {
    return new CreateRequestBuilder<
      CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods` entity based on its keys.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods.dataConnectorSystemInstanceSurrogateKey}.
   * @param calendarId Key property. See {@link CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods.calendarId}.
   * @param periodName Key property. See {@link CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods.periodName}.
   * @returns A request builder for creating requests to retrieve one `CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods` entity based on its keys.
   */
  getByKey(
    dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>,
    calendarId: DeserializedType<T, 'Edm.String'>,
    periodName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods<T>,
      T
    >(this.entityApi, {
      DataConnectorSystemInstanceSurrogateKey:
        dataConnectorSystemInstanceSurrogateKey,
      CalendarId: calendarId,
      PeriodName: periodName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods`.
   */
  update(
    entity: CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods<T>
  ): UpdateRequestBuilder<
    CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods<T>,
    T
  > {
    return new UpdateRequestBuilder<
      CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods`.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods.dataConnectorSystemInstanceSurrogateKey}.
   * @param calendarId Key property. See {@link CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods.calendarId}.
   * @param periodName Key property. See {@link CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods.periodName}.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods`.
   */
  delete(
    dataConnectorSystemInstanceSurrogateKey: string,
    calendarId: string,
    periodName: string
  ): DeleteRequestBuilder<
    CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods` by taking the entity as a parameter.
   */
  delete(
    entity: CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods<T>
  ): DeleteRequestBuilder<
    CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods<T>,
    T
  >;
  delete(
    dataConnectorSystemInstanceSurrogateKeyOrEntity: any,
    calendarId?: string,
    periodName?: string
  ): DeleteRequestBuilder<
    CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods<T>,
    T
  > {
    return new DeleteRequestBuilder<
      CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods<T>,
      T
    >(
      this.entityApi,
      dataConnectorSystemInstanceSurrogateKeyOrEntity instanceof
      CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods
        ? dataConnectorSystemInstanceSurrogateKeyOrEntity
        : {
            DataConnectorSystemInstanceSurrogateKey:
              dataConnectorSystemInstanceSurrogateKeyOrEntity!,
            CalendarId: calendarId!,
            PeriodName: periodName!
          }
    );
  }
}
