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
import { LedgerReportIndexZakatEntities } from './LedgerReportIndexZakatEntities';
import { LedgerReportTypeZakatSa } from './LedgerReportTypeZakatSa';

/**
 * Request builder class for operations supported on the {@link LedgerReportIndexZakatEntities} entity.
 */
export class LedgerReportIndexZakatEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerReportIndexZakatEntities<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerReportIndexZakatEntities` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerReportIndexZakatEntities` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerReportIndexZakatEntities<T>, T> {
    return new GetAllRequestBuilder<LedgerReportIndexZakatEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LedgerReportIndexZakatEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerReportIndexZakatEntities`.
   */
  create(
    entity: LedgerReportIndexZakatEntities<T>
  ): CreateRequestBuilder<LedgerReportIndexZakatEntities<T>, T> {
    return new CreateRequestBuilder<LedgerReportIndexZakatEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerReportIndexZakatEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerReportIndexZakatEntities.dataAreaId}.
   * @param reportType Key property. See {@link LedgerReportIndexZakatEntities.reportType}.
   * @returns A request builder for creating requests to retrieve one `LedgerReportIndexZakatEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    reportType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LedgerReportTypeZakat_SA'
    >
  ): GetByKeyRequestBuilder<LedgerReportIndexZakatEntities<T>, T> {
    return new GetByKeyRequestBuilder<LedgerReportIndexZakatEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ReportType: reportType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerReportIndexZakatEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerReportIndexZakatEntities`.
   */
  update(
    entity: LedgerReportIndexZakatEntities<T>
  ): UpdateRequestBuilder<LedgerReportIndexZakatEntities<T>, T> {
    return new UpdateRequestBuilder<LedgerReportIndexZakatEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerReportIndexZakatEntities`.
   * @param dataAreaId Key property. See {@link LedgerReportIndexZakatEntities.dataAreaId}.
   * @param reportType Key property. See {@link LedgerReportIndexZakatEntities.reportType}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerReportIndexZakatEntities`.
   */
  delete(
    dataAreaId: string,
    reportType: LedgerReportTypeZakatSa
  ): DeleteRequestBuilder<LedgerReportIndexZakatEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerReportIndexZakatEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerReportIndexZakatEntities` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerReportIndexZakatEntities<T>
  ): DeleteRequestBuilder<LedgerReportIndexZakatEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    reportType?: LedgerReportTypeZakatSa
  ): DeleteRequestBuilder<LedgerReportIndexZakatEntities<T>, T> {
    return new DeleteRequestBuilder<LedgerReportIndexZakatEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerReportIndexZakatEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReportType: reportType!
          }
    );
  }
}
