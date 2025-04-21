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
import { BrazilianElectronicReportingParameters } from './BrazilianElectronicReportingParameters';
import { ElectronicReportingTypeBr } from './ElectronicReportingTypeBr';

/**
 * Request builder class for operations supported on the {@link BrazilianElectronicReportingParameters} entity.
 */
export class BrazilianElectronicReportingParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BrazilianElectronicReportingParameters<T>, T> {
  /**
   * Returns a request builder for querying all `BrazilianElectronicReportingParameters` entities.
   * @returns A request builder for creating requests to retrieve all `BrazilianElectronicReportingParameters` entities.
   */
  getAll(): GetAllRequestBuilder<BrazilianElectronicReportingParameters<T>, T> {
    return new GetAllRequestBuilder<
      BrazilianElectronicReportingParameters<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BrazilianElectronicReportingParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BrazilianElectronicReportingParameters`.
   */
  create(
    entity: BrazilianElectronicReportingParameters<T>
  ): CreateRequestBuilder<BrazilianElectronicReportingParameters<T>, T> {
    return new CreateRequestBuilder<
      BrazilianElectronicReportingParameters<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BrazilianElectronicReportingParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link BrazilianElectronicReportingParameters.dataAreaId}.
   * @param reportType Key property. See {@link BrazilianElectronicReportingParameters.reportType}.
   * @returns A request builder for creating requests to retrieve one `BrazilianElectronicReportingParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    reportType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.ElectronicReportingType_BR'
    >
  ): GetByKeyRequestBuilder<BrazilianElectronicReportingParameters<T>, T> {
    return new GetByKeyRequestBuilder<
      BrazilianElectronicReportingParameters<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ReportType: reportType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BrazilianElectronicReportingParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BrazilianElectronicReportingParameters`.
   */
  update(
    entity: BrazilianElectronicReportingParameters<T>
  ): UpdateRequestBuilder<BrazilianElectronicReportingParameters<T>, T> {
    return new UpdateRequestBuilder<
      BrazilianElectronicReportingParameters<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BrazilianElectronicReportingParameters`.
   * @param dataAreaId Key property. See {@link BrazilianElectronicReportingParameters.dataAreaId}.
   * @param reportType Key property. See {@link BrazilianElectronicReportingParameters.reportType}.
   * @returns A request builder for creating requests that delete an entity of type `BrazilianElectronicReportingParameters`.
   */
  delete(
    dataAreaId: string,
    reportType: ElectronicReportingTypeBr
  ): DeleteRequestBuilder<BrazilianElectronicReportingParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BrazilianElectronicReportingParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BrazilianElectronicReportingParameters` by taking the entity as a parameter.
   */
  delete(
    entity: BrazilianElectronicReportingParameters<T>
  ): DeleteRequestBuilder<BrazilianElectronicReportingParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    reportType?: ElectronicReportingTypeBr
  ): DeleteRequestBuilder<BrazilianElectronicReportingParameters<T>, T> {
    return new DeleteRequestBuilder<
      BrazilianElectronicReportingParameters<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof BrazilianElectronicReportingParameters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReportType: reportType!
          }
    );
  }
}
