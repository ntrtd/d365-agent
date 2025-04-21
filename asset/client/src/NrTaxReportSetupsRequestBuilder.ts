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
import { NrTaxReportSetups } from './NrTaxReportSetups';
import { LvNrTaxFormNumber } from './LvNrTaxFormNumber';

/**
 * Request builder class for operations supported on the {@link NrTaxReportSetups} entity.
 */
export class NrTaxReportSetupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<NrTaxReportSetups<T>, T> {
  /**
   * Returns a request builder for querying all `NrTaxReportSetups` entities.
   * @returns A request builder for creating requests to retrieve all `NrTaxReportSetups` entities.
   */
  getAll(): GetAllRequestBuilder<NrTaxReportSetups<T>, T> {
    return new GetAllRequestBuilder<NrTaxReportSetups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `NrTaxReportSetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `NrTaxReportSetups`.
   */
  create(
    entity: NrTaxReportSetups<T>
  ): CreateRequestBuilder<NrTaxReportSetups<T>, T> {
    return new CreateRequestBuilder<NrTaxReportSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `NrTaxReportSetups` entity based on its keys.
   * @param dataAreaId Key property. See {@link NrTaxReportSetups.dataAreaId}.
   * @param formNumber Key property. See {@link NrTaxReportSetups.formNumber}.
   * @param sequenceNumber Key property. See {@link NrTaxReportSetups.sequenceNumber}.
   * @returns A request builder for creating requests to retrieve one `NrTaxReportSetups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    formNumber: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LvNRTaxFormNumber'
    >,
    sequenceNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<NrTaxReportSetups<T>, T> {
    return new GetByKeyRequestBuilder<NrTaxReportSetups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      FormNumber: formNumber,
      SequenceNumber: sequenceNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `NrTaxReportSetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `NrTaxReportSetups`.
   */
  update(
    entity: NrTaxReportSetups<T>
  ): UpdateRequestBuilder<NrTaxReportSetups<T>, T> {
    return new UpdateRequestBuilder<NrTaxReportSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `NrTaxReportSetups`.
   * @param dataAreaId Key property. See {@link NrTaxReportSetups.dataAreaId}.
   * @param formNumber Key property. See {@link NrTaxReportSetups.formNumber}.
   * @param sequenceNumber Key property. See {@link NrTaxReportSetups.sequenceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `NrTaxReportSetups`.
   */
  delete(
    dataAreaId: string,
    formNumber: LvNrTaxFormNumber,
    sequenceNumber: number
  ): DeleteRequestBuilder<NrTaxReportSetups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `NrTaxReportSetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `NrTaxReportSetups` by taking the entity as a parameter.
   */
  delete(
    entity: NrTaxReportSetups<T>
  ): DeleteRequestBuilder<NrTaxReportSetups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    formNumber?: LvNrTaxFormNumber,
    sequenceNumber?: number
  ): DeleteRequestBuilder<NrTaxReportSetups<T>, T> {
    return new DeleteRequestBuilder<NrTaxReportSetups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof NrTaxReportSetups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FormNumber: formNumber!,
            SequenceNumber: sequenceNumber!
          }
    );
  }
}
