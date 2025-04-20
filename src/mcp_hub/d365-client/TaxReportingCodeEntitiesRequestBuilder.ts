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
import { TaxReportingCodeEntities } from './TaxReportingCodeEntities';
import { TaxReportLayout } from './TaxReportLayout';

/**
 * Request builder class for operations supported on the {@link TaxReportingCodeEntities} entity.
 */
export class TaxReportingCodeEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxReportingCodeEntities<T>, T> {
  /**
   * Returns a request builder for querying all `TaxReportingCodeEntities` entities.
   * @returns A request builder for creating requests to retrieve all `TaxReportingCodeEntities` entities.
   */
  getAll(): GetAllRequestBuilder<TaxReportingCodeEntities<T>, T> {
    return new GetAllRequestBuilder<TaxReportingCodeEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TaxReportingCodeEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxReportingCodeEntities`.
   */
  create(
    entity: TaxReportingCodeEntities<T>
  ): CreateRequestBuilder<TaxReportingCodeEntities<T>, T> {
    return new CreateRequestBuilder<TaxReportingCodeEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxReportingCodeEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxReportingCodeEntities.dataAreaId}.
   * @param taxReportingCode Key property. See {@link TaxReportingCodeEntities.taxReportingCode}.
   * @param reportLayout Key property. See {@link TaxReportingCodeEntities.reportLayout}.
   * @returns A request builder for creating requests to retrieve one `TaxReportingCodeEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxReportingCode: DeserializedType<T, 'Edm.Int32'>,
    reportLayout: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TaxReportLayout'
    >
  ): GetByKeyRequestBuilder<TaxReportingCodeEntities<T>, T> {
    return new GetByKeyRequestBuilder<TaxReportingCodeEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TaxReportingCode: taxReportingCode,
        ReportLayout: reportLayout
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxReportingCodeEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxReportingCodeEntities`.
   */
  update(
    entity: TaxReportingCodeEntities<T>
  ): UpdateRequestBuilder<TaxReportingCodeEntities<T>, T> {
    return new UpdateRequestBuilder<TaxReportingCodeEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxReportingCodeEntities`.
   * @param dataAreaId Key property. See {@link TaxReportingCodeEntities.dataAreaId}.
   * @param taxReportingCode Key property. See {@link TaxReportingCodeEntities.taxReportingCode}.
   * @param reportLayout Key property. See {@link TaxReportingCodeEntities.reportLayout}.
   * @returns A request builder for creating requests that delete an entity of type `TaxReportingCodeEntities`.
   */
  delete(
    dataAreaId: string,
    taxReportingCode: number,
    reportLayout: TaxReportLayout
  ): DeleteRequestBuilder<TaxReportingCodeEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxReportingCodeEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxReportingCodeEntities` by taking the entity as a parameter.
   */
  delete(
    entity: TaxReportingCodeEntities<T>
  ): DeleteRequestBuilder<TaxReportingCodeEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxReportingCode?: number,
    reportLayout?: TaxReportLayout
  ): DeleteRequestBuilder<TaxReportingCodeEntities<T>, T> {
    return new DeleteRequestBuilder<TaxReportingCodeEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxReportingCodeEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxReportingCode: taxReportingCode!,
            ReportLayout: reportLayout!
          }
    );
  }
}
