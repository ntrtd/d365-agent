/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { FormW2BoxReportingAdjustments } from './FormW2BoxReportingAdjustments';
import { PayrollW2BoxNumber } from './PayrollW2BoxNumber';

/**
 * Request builder class for operations supported on the {@link FormW2BoxReportingAdjustments} entity.
 */
export class FormW2BoxReportingAdjustmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FormW2BoxReportingAdjustments<T>, T> {
  /**
   * Returns a request builder for querying all `FormW2BoxReportingAdjustments` entities.
   * @returns A request builder for creating requests to retrieve all `FormW2BoxReportingAdjustments` entities.
   */
  getAll(): GetAllRequestBuilder<FormW2BoxReportingAdjustments<T>, T> {
    return new GetAllRequestBuilder<FormW2BoxReportingAdjustments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FormW2BoxReportingAdjustments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FormW2BoxReportingAdjustments`.
   */
  create(
    entity: FormW2BoxReportingAdjustments<T>
  ): CreateRequestBuilder<FormW2BoxReportingAdjustments<T>, T> {
    return new CreateRequestBuilder<FormW2BoxReportingAdjustments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FormW2BoxReportingAdjustments` entity based on its keys.
   * @param dataAreaId Key property. See {@link FormW2BoxReportingAdjustments.dataAreaId}.
   * @param personnelNumber Key property. See {@link FormW2BoxReportingAdjustments.personnelNumber}.
   * @param w2BoxNumber Key property. See {@link FormW2BoxReportingAdjustments.w2BoxNumber}.
   * @param reportingDate Key property. See {@link FormW2BoxReportingAdjustments.reportingDate}.
   * @returns A request builder for creating requests to retrieve one `FormW2BoxReportingAdjustments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    w2BoxNumber: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.PayrollW2BoxNumber'
    >,
    reportingDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<FormW2BoxReportingAdjustments<T>, T> {
    return new GetByKeyRequestBuilder<FormW2BoxReportingAdjustments<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PersonnelNumber: personnelNumber,
        W2BoxNumber: w2BoxNumber,
        ReportingDate: reportingDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FormW2BoxReportingAdjustments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FormW2BoxReportingAdjustments`.
   */
  update(
    entity: FormW2BoxReportingAdjustments<T>
  ): UpdateRequestBuilder<FormW2BoxReportingAdjustments<T>, T> {
    return new UpdateRequestBuilder<FormW2BoxReportingAdjustments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FormW2BoxReportingAdjustments`.
   * @param dataAreaId Key property. See {@link FormW2BoxReportingAdjustments.dataAreaId}.
   * @param personnelNumber Key property. See {@link FormW2BoxReportingAdjustments.personnelNumber}.
   * @param w2BoxNumber Key property. See {@link FormW2BoxReportingAdjustments.w2BoxNumber}.
   * @param reportingDate Key property. See {@link FormW2BoxReportingAdjustments.reportingDate}.
   * @returns A request builder for creating requests that delete an entity of type `FormW2BoxReportingAdjustments`.
   */
  delete(
    dataAreaId: string,
    personnelNumber: string,
    w2BoxNumber: PayrollW2BoxNumber,
    reportingDate: Moment
  ): DeleteRequestBuilder<FormW2BoxReportingAdjustments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FormW2BoxReportingAdjustments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FormW2BoxReportingAdjustments` by taking the entity as a parameter.
   */
  delete(
    entity: FormW2BoxReportingAdjustments<T>
  ): DeleteRequestBuilder<FormW2BoxReportingAdjustments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    personnelNumber?: string,
    w2BoxNumber?: PayrollW2BoxNumber,
    reportingDate?: Moment
  ): DeleteRequestBuilder<FormW2BoxReportingAdjustments<T>, T> {
    return new DeleteRequestBuilder<FormW2BoxReportingAdjustments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FormW2BoxReportingAdjustments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PersonnelNumber: personnelNumber!,
            W2BoxNumber: w2BoxNumber!,
            ReportingDate: reportingDate!
          }
    );
  }
}
