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
import { LedgerFiscalPeriods } from './LedgerFiscalPeriods';

/**
 * Request builder class for operations supported on the {@link LedgerFiscalPeriods} entity.
 */
export class LedgerFiscalPeriodsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerFiscalPeriods<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerFiscalPeriods` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerFiscalPeriods` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerFiscalPeriods<T>, T> {
    return new GetAllRequestBuilder<LedgerFiscalPeriods<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LedgerFiscalPeriods` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerFiscalPeriods`.
   */
  create(
    entity: LedgerFiscalPeriods<T>
  ): CreateRequestBuilder<LedgerFiscalPeriods<T>, T> {
    return new CreateRequestBuilder<LedgerFiscalPeriods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerFiscalPeriods` entity based on its keys.
   * @param ledgerName Key property. See {@link LedgerFiscalPeriods.ledgerName}.
   * @param calendar Key property. See {@link LedgerFiscalPeriods.calendar}.
   * @param yearName Key property. See {@link LedgerFiscalPeriods.yearName}.
   * @param periodName Key property. See {@link LedgerFiscalPeriods.periodName}.
   * @returns A request builder for creating requests to retrieve one `LedgerFiscalPeriods` entity based on its keys.
   */
  getByKey(
    ledgerName: DeserializedType<T, 'Edm.String'>,
    calendar: DeserializedType<T, 'Edm.String'>,
    yearName: DeserializedType<T, 'Edm.String'>,
    periodName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LedgerFiscalPeriods<T>, T> {
    return new GetByKeyRequestBuilder<LedgerFiscalPeriods<T>, T>(
      this.entityApi,
      {
        LedgerName: ledgerName,
        Calendar: calendar,
        YearName: yearName,
        PeriodName: periodName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerFiscalPeriods`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerFiscalPeriods`.
   */
  update(
    entity: LedgerFiscalPeriods<T>
  ): UpdateRequestBuilder<LedgerFiscalPeriods<T>, T> {
    return new UpdateRequestBuilder<LedgerFiscalPeriods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerFiscalPeriods`.
   * @param ledgerName Key property. See {@link LedgerFiscalPeriods.ledgerName}.
   * @param calendar Key property. See {@link LedgerFiscalPeriods.calendar}.
   * @param yearName Key property. See {@link LedgerFiscalPeriods.yearName}.
   * @param periodName Key property. See {@link LedgerFiscalPeriods.periodName}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerFiscalPeriods`.
   */
  delete(
    ledgerName: string,
    calendar: string,
    yearName: string,
    periodName: string
  ): DeleteRequestBuilder<LedgerFiscalPeriods<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerFiscalPeriods`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerFiscalPeriods` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerFiscalPeriods<T>
  ): DeleteRequestBuilder<LedgerFiscalPeriods<T>, T>;
  delete(
    ledgerNameOrEntity: any,
    calendar?: string,
    yearName?: string,
    periodName?: string
  ): DeleteRequestBuilder<LedgerFiscalPeriods<T>, T> {
    return new DeleteRequestBuilder<LedgerFiscalPeriods<T>, T>(
      this.entityApi,
      ledgerNameOrEntity instanceof LedgerFiscalPeriods
        ? ledgerNameOrEntity
        : {
            LedgerName: ledgerNameOrEntity!,
            Calendar: calendar!,
            YearName: yearName!,
            PeriodName: periodName!
          }
    );
  }
}
