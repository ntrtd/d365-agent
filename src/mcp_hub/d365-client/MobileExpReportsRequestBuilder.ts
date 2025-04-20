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
import { MobileExpReports } from './MobileExpReports';

/**
 * Request builder class for operations supported on the {@link MobileExpReports} entity.
 */
export class MobileExpReportsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MobileExpReports<T>, T> {
  /**
   * Returns a request builder for querying all `MobileExpReports` entities.
   * @returns A request builder for creating requests to retrieve all `MobileExpReports` entities.
   */
  getAll(): GetAllRequestBuilder<MobileExpReports<T>, T> {
    return new GetAllRequestBuilder<MobileExpReports<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MobileExpReports` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MobileExpReports`.
   */
  create(
    entity: MobileExpReports<T>
  ): CreateRequestBuilder<MobileExpReports<T>, T> {
    return new CreateRequestBuilder<MobileExpReports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MobileExpReports` entity based on its keys.
   * @param dataAreaId Key property. See {@link MobileExpReports.dataAreaId}.
   * @param expenseReportNumber Key property. See {@link MobileExpReports.expenseReportNumber}.
   * @param dataArea Key property. See {@link MobileExpReports.dataArea}.
   * @returns A request builder for creating requests to retrieve one `MobileExpReports` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    expenseReportNumber: DeserializedType<T, 'Edm.String'>,
    dataArea: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MobileExpReports<T>, T> {
    return new GetByKeyRequestBuilder<MobileExpReports<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ExpenseReportNumber: expenseReportNumber,
      DataArea: dataArea
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MobileExpReports`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MobileExpReports`.
   */
  update(
    entity: MobileExpReports<T>
  ): UpdateRequestBuilder<MobileExpReports<T>, T> {
    return new UpdateRequestBuilder<MobileExpReports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MobileExpReports`.
   * @param dataAreaId Key property. See {@link MobileExpReports.dataAreaId}.
   * @param expenseReportNumber Key property. See {@link MobileExpReports.expenseReportNumber}.
   * @param dataArea Key property. See {@link MobileExpReports.dataArea}.
   * @returns A request builder for creating requests that delete an entity of type `MobileExpReports`.
   */
  delete(
    dataAreaId: string,
    expenseReportNumber: string,
    dataArea: string
  ): DeleteRequestBuilder<MobileExpReports<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MobileExpReports`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MobileExpReports` by taking the entity as a parameter.
   */
  delete(
    entity: MobileExpReports<T>
  ): DeleteRequestBuilder<MobileExpReports<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    expenseReportNumber?: string,
    dataArea?: string
  ): DeleteRequestBuilder<MobileExpReports<T>, T> {
    return new DeleteRequestBuilder<MobileExpReports<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MobileExpReports
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ExpenseReportNumber: expenseReportNumber!,
            DataArea: dataArea!
          }
    );
  }
}
