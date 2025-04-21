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
import { FmlaCaseCertifications } from './FmlaCaseCertifications';
import { HrmBlankYesNo } from './HrmBlankYesNo';
import { HcmFmlaReason } from './HcmFmlaReason';

/**
 * Request builder class for operations supported on the {@link FmlaCaseCertifications} entity.
 */
export class FmlaCaseCertificationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FmlaCaseCertifications<T>, T> {
  /**
   * Returns a request builder for querying all `FmlaCaseCertifications` entities.
   * @returns A request builder for creating requests to retrieve all `FmlaCaseCertifications` entities.
   */
  getAll(): GetAllRequestBuilder<FmlaCaseCertifications<T>, T> {
    return new GetAllRequestBuilder<FmlaCaseCertifications<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FmlaCaseCertifications` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FmlaCaseCertifications`.
   */
  create(
    entity: FmlaCaseCertifications<T>
  ): CreateRequestBuilder<FmlaCaseCertifications<T>, T> {
    return new CreateRequestBuilder<FmlaCaseCertifications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FmlaCaseCertifications` entity based on its keys.
   * @param dataAreaId Key property. See {@link FmlaCaseCertifications.dataAreaId}.
   * @param caseId Key property. See {@link FmlaCaseCertifications.caseId}.
   * @param validCertificate Key property. See {@link FmlaCaseCertifications.validCertificate}.
   * @param dateSent Key property. See {@link FmlaCaseCertifications.dateSent}.
   * @param dueDate Key property. See {@link FmlaCaseCertifications.dueDate}.
   * @param notes Key property. See {@link FmlaCaseCertifications.notes}.
   * @param reasonForInvalidCertificate Key property. See {@link FmlaCaseCertifications.reasonForInvalidCertificate}.
   * @param requestedDate Key property. See {@link FmlaCaseCertifications.requestedDate}.
   * @param dateReturned Key property. See {@link FmlaCaseCertifications.dateReturned}.
   * @returns A request builder for creating requests to retrieve one `FmlaCaseCertifications` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    caseId: DeserializedType<T, 'Edm.String'>,
    validCertificate: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.HrmBlankYesNo'
    >,
    dateSent: DeserializedType<T, 'Edm.DateTimeOffset'>,
    dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    notes: DeserializedType<T, 'Edm.String'>,
    reasonForInvalidCertificate: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.HcmFMLAReason'
    >,
    requestedDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    dateReturned: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<FmlaCaseCertifications<T>, T> {
    return new GetByKeyRequestBuilder<FmlaCaseCertifications<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CaseID: caseId,
        ValidCertificate: validCertificate,
        DateSent: dateSent,
        DueDate: dueDate,
        Notes: notes,
        ReasonForInvalidCertificate: reasonForInvalidCertificate,
        RequestedDate: requestedDate,
        DateReturned: dateReturned
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FmlaCaseCertifications`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FmlaCaseCertifications`.
   */
  update(
    entity: FmlaCaseCertifications<T>
  ): UpdateRequestBuilder<FmlaCaseCertifications<T>, T> {
    return new UpdateRequestBuilder<FmlaCaseCertifications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FmlaCaseCertifications`.
   * @param dataAreaId Key property. See {@link FmlaCaseCertifications.dataAreaId}.
   * @param caseId Key property. See {@link FmlaCaseCertifications.caseId}.
   * @param validCertificate Key property. See {@link FmlaCaseCertifications.validCertificate}.
   * @param dateSent Key property. See {@link FmlaCaseCertifications.dateSent}.
   * @param dueDate Key property. See {@link FmlaCaseCertifications.dueDate}.
   * @param notes Key property. See {@link FmlaCaseCertifications.notes}.
   * @param reasonForInvalidCertificate Key property. See {@link FmlaCaseCertifications.reasonForInvalidCertificate}.
   * @param requestedDate Key property. See {@link FmlaCaseCertifications.requestedDate}.
   * @param dateReturned Key property. See {@link FmlaCaseCertifications.dateReturned}.
   * @returns A request builder for creating requests that delete an entity of type `FmlaCaseCertifications`.
   */
  delete(
    dataAreaId: string,
    caseId: string,
    validCertificate: HrmBlankYesNo,
    dateSent: Moment,
    dueDate: Moment,
    notes: string,
    reasonForInvalidCertificate: HcmFmlaReason,
    requestedDate: Moment,
    dateReturned: Moment
  ): DeleteRequestBuilder<FmlaCaseCertifications<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FmlaCaseCertifications`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FmlaCaseCertifications` by taking the entity as a parameter.
   */
  delete(
    entity: FmlaCaseCertifications<T>
  ): DeleteRequestBuilder<FmlaCaseCertifications<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    caseId?: string,
    validCertificate?: HrmBlankYesNo,
    dateSent?: Moment,
    dueDate?: Moment,
    notes?: string,
    reasonForInvalidCertificate?: HcmFmlaReason,
    requestedDate?: Moment,
    dateReturned?: Moment
  ): DeleteRequestBuilder<FmlaCaseCertifications<T>, T> {
    return new DeleteRequestBuilder<FmlaCaseCertifications<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FmlaCaseCertifications
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CaseID: caseId!,
            ValidCertificate: validCertificate!,
            DateSent: dateSent!,
            DueDate: dueDate!,
            Notes: notes!,
            ReasonForInvalidCertificate: reasonForInvalidCertificate!,
            RequestedDate: requestedDate!,
            DateReturned: dateReturned!
          }
    );
  }
}
