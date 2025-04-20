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
import { RetailInventItemLabelReportSetups } from './RetailInventItemLabelReportSetups';
import { RetailLabelTypeBase } from './RetailLabelTypeBase';

/**
 * Request builder class for operations supported on the {@link RetailInventItemLabelReportSetups} entity.
 */
export class RetailInventItemLabelReportSetupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailInventItemLabelReportSetups<T>, T> {
  /**
   * Returns a request builder for querying all `RetailInventItemLabelReportSetups` entities.
   * @returns A request builder for creating requests to retrieve all `RetailInventItemLabelReportSetups` entities.
   */
  getAll(): GetAllRequestBuilder<RetailInventItemLabelReportSetups<T>, T> {
    return new GetAllRequestBuilder<RetailInventItemLabelReportSetups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailInventItemLabelReportSetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailInventItemLabelReportSetups`.
   */
  create(
    entity: RetailInventItemLabelReportSetups<T>
  ): CreateRequestBuilder<RetailInventItemLabelReportSetups<T>, T> {
    return new CreateRequestBuilder<RetailInventItemLabelReportSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailInventItemLabelReportSetups` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailInventItemLabelReportSetups.dataAreaId}.
   * @param type Key property. See {@link RetailInventItemLabelReportSetups.type}.
   * @param reportName Key property. See {@link RetailInventItemLabelReportSetups.reportName}.
   * @returns A request builder for creating requests to retrieve one `RetailInventItemLabelReportSetups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    type: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailLabelTypeBase'
    >,
    reportName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailInventItemLabelReportSetups<T>, T> {
    return new GetByKeyRequestBuilder<RetailInventItemLabelReportSetups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Type: type,
        ReportName: reportName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailInventItemLabelReportSetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailInventItemLabelReportSetups`.
   */
  update(
    entity: RetailInventItemLabelReportSetups<T>
  ): UpdateRequestBuilder<RetailInventItemLabelReportSetups<T>, T> {
    return new UpdateRequestBuilder<RetailInventItemLabelReportSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailInventItemLabelReportSetups`.
   * @param dataAreaId Key property. See {@link RetailInventItemLabelReportSetups.dataAreaId}.
   * @param type Key property. See {@link RetailInventItemLabelReportSetups.type}.
   * @param reportName Key property. See {@link RetailInventItemLabelReportSetups.reportName}.
   * @returns A request builder for creating requests that delete an entity of type `RetailInventItemLabelReportSetups`.
   */
  delete(
    dataAreaId: string,
    type: RetailLabelTypeBase,
    reportName: string
  ): DeleteRequestBuilder<RetailInventItemLabelReportSetups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailInventItemLabelReportSetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailInventItemLabelReportSetups` by taking the entity as a parameter.
   */
  delete(
    entity: RetailInventItemLabelReportSetups<T>
  ): DeleteRequestBuilder<RetailInventItemLabelReportSetups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    type?: RetailLabelTypeBase,
    reportName?: string
  ): DeleteRequestBuilder<RetailInventItemLabelReportSetups<T>, T> {
    return new DeleteRequestBuilder<RetailInventItemLabelReportSetups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailInventItemLabelReportSetups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Type: type!,
            ReportName: reportName!
          }
    );
  }
}
