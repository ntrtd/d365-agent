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
import { FiscalYears } from './FiscalYears';

/**
 * Request builder class for operations supported on the {@link FiscalYears} entity.
 */
export class FiscalYearsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalYears<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalYears` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalYears` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalYears<T>, T> {
    return new GetAllRequestBuilder<FiscalYears<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FiscalYears` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalYears`.
   */
  create(entity: FiscalYears<T>): CreateRequestBuilder<FiscalYears<T>, T> {
    return new CreateRequestBuilder<FiscalYears<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `FiscalYears` entity based on its keys.
   * @param legalEntityId Key property. See {@link FiscalYears.legalEntityId}.
   * @param calendar Key property. See {@link FiscalYears.calendar}.
   * @param fiscalYear Key property. See {@link FiscalYears.fiscalYear}.
   * @returns A request builder for creating requests to retrieve one `FiscalYears` entity based on its keys.
   */
  getByKey(
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    calendar: DeserializedType<T, 'Edm.String'>,
    fiscalYear: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalYears<T>, T> {
    return new GetByKeyRequestBuilder<FiscalYears<T>, T>(this.entityApi, {
      LegalEntityId: legalEntityId,
      Calendar: calendar,
      FiscalYear: fiscalYear
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalYears`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalYears`.
   */
  update(entity: FiscalYears<T>): UpdateRequestBuilder<FiscalYears<T>, T> {
    return new UpdateRequestBuilder<FiscalYears<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalYears`.
   * @param legalEntityId Key property. See {@link FiscalYears.legalEntityId}.
   * @param calendar Key property. See {@link FiscalYears.calendar}.
   * @param fiscalYear Key property. See {@link FiscalYears.fiscalYear}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalYears`.
   */
  delete(
    legalEntityId: string,
    calendar: string,
    fiscalYear: string
  ): DeleteRequestBuilder<FiscalYears<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalYears`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalYears` by taking the entity as a parameter.
   */
  delete(entity: FiscalYears<T>): DeleteRequestBuilder<FiscalYears<T>, T>;
  delete(
    legalEntityIdOrEntity: any,
    calendar?: string,
    fiscalYear?: string
  ): DeleteRequestBuilder<FiscalYears<T>, T> {
    return new DeleteRequestBuilder<FiscalYears<T>, T>(
      this.entityApi,
      legalEntityIdOrEntity instanceof FiscalYears
        ? legalEntityIdOrEntity
        : {
            LegalEntityId: legalEntityIdOrEntity!,
            Calendar: calendar!,
            FiscalYear: fiscalYear!
          }
    );
  }
}
