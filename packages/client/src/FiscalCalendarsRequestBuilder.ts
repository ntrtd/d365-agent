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
import { FiscalCalendars } from './FiscalCalendars';

/**
 * Request builder class for operations supported on the {@link FiscalCalendars} entity.
 */
export class FiscalCalendarsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalCalendars<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalCalendars` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalCalendars` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalCalendars<T>, T> {
    return new GetAllRequestBuilder<FiscalCalendars<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FiscalCalendars` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalCalendars`.
   */
  create(
    entity: FiscalCalendars<T>
  ): CreateRequestBuilder<FiscalCalendars<T>, T> {
    return new CreateRequestBuilder<FiscalCalendars<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FiscalCalendars` entity based on its keys.
   * @param ledgerGregorianDateId Key property. See {@link FiscalCalendars.ledgerGregorianDateId}.
   * @returns A request builder for creating requests to retrieve one `FiscalCalendars` entity based on its keys.
   */
  getByKey(
    ledgerGregorianDateId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalCalendars<T>, T> {
    return new GetByKeyRequestBuilder<FiscalCalendars<T>, T>(this.entityApi, {
      LedgerGregorianDateId: ledgerGregorianDateId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalCalendars`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalCalendars`.
   */
  update(
    entity: FiscalCalendars<T>
  ): UpdateRequestBuilder<FiscalCalendars<T>, T> {
    return new UpdateRequestBuilder<FiscalCalendars<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalCalendars`.
   * @param ledgerGregorianDateId Key property. See {@link FiscalCalendars.ledgerGregorianDateId}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalCalendars`.
   */
  delete(
    ledgerGregorianDateId: string
  ): DeleteRequestBuilder<FiscalCalendars<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalCalendars`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalCalendars` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalCalendars<T>
  ): DeleteRequestBuilder<FiscalCalendars<T>, T>;
  delete(
    ledgerGregorianDateIdOrEntity: any
  ): DeleteRequestBuilder<FiscalCalendars<T>, T> {
    return new DeleteRequestBuilder<FiscalCalendars<T>, T>(
      this.entityApi,
      ledgerGregorianDateIdOrEntity instanceof FiscalCalendars
        ? ledgerGregorianDateIdOrEntity
        : { LedgerGregorianDateId: ledgerGregorianDateIdOrEntity! }
    );
  }
}
