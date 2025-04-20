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
import { Kitting_ReportParameters } from './Kitting_ReportParameters';
import { SalesPurch } from './SalesPurch';
import { KittingReportType } from './KittingReportType';
import { TableGroupAll } from './TableGroupAll';

/**
 * Request builder class for operations supported on the {@link Kitting_ReportParameters} entity.
 */
export class Kitting_ReportParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Kitting_ReportParameters<T>, T> {
  /**
   * Returns a request builder for querying all `Kitting_ReportParameters` entities.
   * @returns A request builder for creating requests to retrieve all `Kitting_ReportParameters` entities.
   */
  getAll(): GetAllRequestBuilder<Kitting_ReportParameters<T>, T> {
    return new GetAllRequestBuilder<Kitting_ReportParameters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `Kitting_ReportParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Kitting_ReportParameters`.
   */
  create(
    entity: Kitting_ReportParameters<T>
  ): CreateRequestBuilder<Kitting_ReportParameters<T>, T> {
    return new CreateRequestBuilder<Kitting_ReportParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `Kitting_ReportParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link Kitting_ReportParameters.dataAreaId}.
   * @param salesPurch Key property. See {@link Kitting_ReportParameters.salesPurch}.
   * @param reportType Key property. See {@link Kitting_ReportParameters.reportType}.
   * @param validFor Key property. See {@link Kitting_ReportParameters.validFor}.
   * @param itemRelation Key property. See {@link Kitting_ReportParameters.itemRelation}.
   * @returns A request builder for creating requests to retrieve one `Kitting_ReportParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesPurch: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.SalesPurch'
    >,
    reportType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.KittingReportType'
    >,
    validFor: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableGroupAll'
    >,
    itemRelation: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Kitting_ReportParameters<T>, T> {
    return new GetByKeyRequestBuilder<Kitting_ReportParameters<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesPurch: salesPurch,
        ReportType: reportType,
        ValidFor: validFor,
        ItemRelation: itemRelation
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `Kitting_ReportParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Kitting_ReportParameters`.
   */
  update(
    entity: Kitting_ReportParameters<T>
  ): UpdateRequestBuilder<Kitting_ReportParameters<T>, T> {
    return new UpdateRequestBuilder<Kitting_ReportParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `Kitting_ReportParameters`.
   * @param dataAreaId Key property. See {@link Kitting_ReportParameters.dataAreaId}.
   * @param salesPurch Key property. See {@link Kitting_ReportParameters.salesPurch}.
   * @param reportType Key property. See {@link Kitting_ReportParameters.reportType}.
   * @param validFor Key property. See {@link Kitting_ReportParameters.validFor}.
   * @param itemRelation Key property. See {@link Kitting_ReportParameters.itemRelation}.
   * @returns A request builder for creating requests that delete an entity of type `Kitting_ReportParameters`.
   */
  delete(
    dataAreaId: string,
    salesPurch: SalesPurch,
    reportType: KittingReportType,
    validFor: TableGroupAll,
    itemRelation: string
  ): DeleteRequestBuilder<Kitting_ReportParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Kitting_ReportParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Kitting_ReportParameters` by taking the entity as a parameter.
   */
  delete(
    entity: Kitting_ReportParameters<T>
  ): DeleteRequestBuilder<Kitting_ReportParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesPurch?: SalesPurch,
    reportType?: KittingReportType,
    validFor?: TableGroupAll,
    itemRelation?: string
  ): DeleteRequestBuilder<Kitting_ReportParameters<T>, T> {
    return new DeleteRequestBuilder<Kitting_ReportParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Kitting_ReportParameters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesPurch: salesPurch!,
            ReportType: reportType!,
            ValidFor: validFor!,
            ItemRelation: itemRelation!
          }
    );
  }
}
