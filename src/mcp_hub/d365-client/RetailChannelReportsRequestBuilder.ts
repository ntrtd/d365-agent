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
import { RetailChannelReports } from './RetailChannelReports';

/**
 * Request builder class for operations supported on the {@link RetailChannelReports} entity.
 */
export class RetailChannelReportsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailChannelReports<T>, T> {
  /**
   * Returns a request builder for querying all `RetailChannelReports` entities.
   * @returns A request builder for creating requests to retrieve all `RetailChannelReports` entities.
   */
  getAll(): GetAllRequestBuilder<RetailChannelReports<T>, T> {
    return new GetAllRequestBuilder<RetailChannelReports<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailChannelReports` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailChannelReports`.
   */
  create(
    entity: RetailChannelReports<T>
  ): CreateRequestBuilder<RetailChannelReports<T>, T> {
    return new CreateRequestBuilder<RetailChannelReports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailChannelReports` entity based on its keys.
   * @param reportId Key property. See {@link RetailChannelReports.reportId}.
   * @returns A request builder for creating requests to retrieve one `RetailChannelReports` entity based on its keys.
   */
  getByKey(
    reportId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailChannelReports<T>, T> {
    return new GetByKeyRequestBuilder<RetailChannelReports<T>, T>(
      this.entityApi,
      { ReportID: reportId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailChannelReports`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailChannelReports`.
   */
  update(
    entity: RetailChannelReports<T>
  ): UpdateRequestBuilder<RetailChannelReports<T>, T> {
    return new UpdateRequestBuilder<RetailChannelReports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailChannelReports`.
   * @param reportId Key property. See {@link RetailChannelReports.reportId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailChannelReports`.
   */
  delete(reportId: string): DeleteRequestBuilder<RetailChannelReports<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailChannelReports`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailChannelReports` by taking the entity as a parameter.
   */
  delete(
    entity: RetailChannelReports<T>
  ): DeleteRequestBuilder<RetailChannelReports<T>, T>;
  delete(
    reportIdOrEntity: any
  ): DeleteRequestBuilder<RetailChannelReports<T>, T> {
    return new DeleteRequestBuilder<RetailChannelReports<T>, T>(
      this.entityApi,
      reportIdOrEntity instanceof RetailChannelReports
        ? reportIdOrEntity
        : { ReportID: reportIdOrEntity! }
    );
  }
}
