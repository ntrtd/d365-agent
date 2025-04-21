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
import { RetailChannelReportDefinitions } from './RetailChannelReportDefinitions';

/**
 * Request builder class for operations supported on the {@link RetailChannelReportDefinitions} entity.
 */
export class RetailChannelReportDefinitionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailChannelReportDefinitions<T>, T> {
  /**
   * Returns a request builder for querying all `RetailChannelReportDefinitions` entities.
   * @returns A request builder for creating requests to retrieve all `RetailChannelReportDefinitions` entities.
   */
  getAll(): GetAllRequestBuilder<RetailChannelReportDefinitions<T>, T> {
    return new GetAllRequestBuilder<RetailChannelReportDefinitions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailChannelReportDefinitions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailChannelReportDefinitions`.
   */
  create(
    entity: RetailChannelReportDefinitions<T>
  ): CreateRequestBuilder<RetailChannelReportDefinitions<T>, T> {
    return new CreateRequestBuilder<RetailChannelReportDefinitions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailChannelReportDefinitions` entity based on its keys.
   * @param reportId Key property. See {@link RetailChannelReportDefinitions.reportId}.
   * @returns A request builder for creating requests to retrieve one `RetailChannelReportDefinitions` entity based on its keys.
   */
  getByKey(
    reportId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailChannelReportDefinitions<T>, T> {
    return new GetByKeyRequestBuilder<RetailChannelReportDefinitions<T>, T>(
      this.entityApi,
      { ReportId: reportId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailChannelReportDefinitions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailChannelReportDefinitions`.
   */
  update(
    entity: RetailChannelReportDefinitions<T>
  ): UpdateRequestBuilder<RetailChannelReportDefinitions<T>, T> {
    return new UpdateRequestBuilder<RetailChannelReportDefinitions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailChannelReportDefinitions`.
   * @param reportId Key property. See {@link RetailChannelReportDefinitions.reportId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailChannelReportDefinitions`.
   */
  delete(
    reportId: string
  ): DeleteRequestBuilder<RetailChannelReportDefinitions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailChannelReportDefinitions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailChannelReportDefinitions` by taking the entity as a parameter.
   */
  delete(
    entity: RetailChannelReportDefinitions<T>
  ): DeleteRequestBuilder<RetailChannelReportDefinitions<T>, T>;
  delete(
    reportIdOrEntity: any
  ): DeleteRequestBuilder<RetailChannelReportDefinitions<T>, T> {
    return new DeleteRequestBuilder<RetailChannelReportDefinitions<T>, T>(
      this.entityApi,
      reportIdOrEntity instanceof RetailChannelReportDefinitions
        ? reportIdOrEntity
        : { ReportId: reportIdOrEntity! }
    );
  }
}
