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
import { AdvanceReports } from './AdvanceReports';

/**
 * Request builder class for operations supported on the {@link AdvanceReports} entity.
 */
export class AdvanceReportsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AdvanceReports<T>, T> {
  /**
   * Returns a request builder for querying all `AdvanceReports` entities.
   * @returns A request builder for creating requests to retrieve all `AdvanceReports` entities.
   */
  getAll(): GetAllRequestBuilder<AdvanceReports<T>, T> {
    return new GetAllRequestBuilder<AdvanceReports<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AdvanceReports` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AdvanceReports`.
   */
  create(
    entity: AdvanceReports<T>
  ): CreateRequestBuilder<AdvanceReports<T>, T> {
    return new CreateRequestBuilder<AdvanceReports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AdvanceReports` entity based on its keys.
   * @param dataAreaId Key property. See {@link AdvanceReports.dataAreaId}.
   * @param advanceReportId Key property. See {@link AdvanceReports.advanceReportId}.
   * @returns A request builder for creating requests to retrieve one `AdvanceReports` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    advanceReportId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AdvanceReports<T>, T> {
    return new GetByKeyRequestBuilder<AdvanceReports<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      AdvanceReportId: advanceReportId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AdvanceReports`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AdvanceReports`.
   */
  update(
    entity: AdvanceReports<T>
  ): UpdateRequestBuilder<AdvanceReports<T>, T> {
    return new UpdateRequestBuilder<AdvanceReports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AdvanceReports`.
   * @param dataAreaId Key property. See {@link AdvanceReports.dataAreaId}.
   * @param advanceReportId Key property. See {@link AdvanceReports.advanceReportId}.
   * @returns A request builder for creating requests that delete an entity of type `AdvanceReports`.
   */
  delete(
    dataAreaId: string,
    advanceReportId: string
  ): DeleteRequestBuilder<AdvanceReports<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AdvanceReports`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AdvanceReports` by taking the entity as a parameter.
   */
  delete(entity: AdvanceReports<T>): DeleteRequestBuilder<AdvanceReports<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    advanceReportId?: string
  ): DeleteRequestBuilder<AdvanceReports<T>, T> {
    return new DeleteRequestBuilder<AdvanceReports<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AdvanceReports
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AdvanceReportId: advanceReportId!
          }
    );
  }
}
