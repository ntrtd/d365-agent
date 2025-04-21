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
import { FiscalDocSourceTextReferenceProcesses } from './FiscalDocSourceTextReferenceProcesses';
import { AgencyBr } from './AgencyBr';

/**
 * Request builder class for operations supported on the {@link FiscalDocSourceTextReferenceProcesses} entity.
 */
export class FiscalDocSourceTextReferenceProcessesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalDocSourceTextReferenceProcesses<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalDocSourceTextReferenceProcesses` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalDocSourceTextReferenceProcesses` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalDocSourceTextReferenceProcesses<T>, T> {
    return new GetAllRequestBuilder<
      FiscalDocSourceTextReferenceProcesses<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FiscalDocSourceTextReferenceProcesses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalDocSourceTextReferenceProcesses`.
   */
  create(
    entity: FiscalDocSourceTextReferenceProcesses<T>
  ): CreateRequestBuilder<FiscalDocSourceTextReferenceProcesses<T>, T> {
    return new CreateRequestBuilder<
      FiscalDocSourceTextReferenceProcesses<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `FiscalDocSourceTextReferenceProcesses` entity based on its keys.
   * @param dataAreaId Key property. See {@link FiscalDocSourceTextReferenceProcesses.dataAreaId}.
   * @param fiscalDocumentText Key property. See {@link FiscalDocSourceTextReferenceProcesses.fiscalDocumentText}.
   * @param agency Key property. See {@link FiscalDocSourceTextReferenceProcesses.agency}.
   * @param referenceProcessNumber Key property. See {@link FiscalDocSourceTextReferenceProcesses.referenceProcessNumber}.
   * @returns A request builder for creating requests to retrieve one `FiscalDocSourceTextReferenceProcesses` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fiscalDocumentText: DeserializedType<T, 'Edm.String'>,
    agency: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.Agency_BR'>,
    referenceProcessNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalDocSourceTextReferenceProcesses<T>, T> {
    return new GetByKeyRequestBuilder<
      FiscalDocSourceTextReferenceProcesses<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      FiscalDocumentText: fiscalDocumentText,
      Agency: agency,
      ReferenceProcessNumber: referenceProcessNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalDocSourceTextReferenceProcesses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalDocSourceTextReferenceProcesses`.
   */
  update(
    entity: FiscalDocSourceTextReferenceProcesses<T>
  ): UpdateRequestBuilder<FiscalDocSourceTextReferenceProcesses<T>, T> {
    return new UpdateRequestBuilder<
      FiscalDocSourceTextReferenceProcesses<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalDocSourceTextReferenceProcesses`.
   * @param dataAreaId Key property. See {@link FiscalDocSourceTextReferenceProcesses.dataAreaId}.
   * @param fiscalDocumentText Key property. See {@link FiscalDocSourceTextReferenceProcesses.fiscalDocumentText}.
   * @param agency Key property. See {@link FiscalDocSourceTextReferenceProcesses.agency}.
   * @param referenceProcessNumber Key property. See {@link FiscalDocSourceTextReferenceProcesses.referenceProcessNumber}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalDocSourceTextReferenceProcesses`.
   */
  delete(
    dataAreaId: string,
    fiscalDocumentText: string,
    agency: AgencyBr,
    referenceProcessNumber: string
  ): DeleteRequestBuilder<FiscalDocSourceTextReferenceProcesses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalDocSourceTextReferenceProcesses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalDocSourceTextReferenceProcesses` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalDocSourceTextReferenceProcesses<T>
  ): DeleteRequestBuilder<FiscalDocSourceTextReferenceProcesses<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fiscalDocumentText?: string,
    agency?: AgencyBr,
    referenceProcessNumber?: string
  ): DeleteRequestBuilder<FiscalDocSourceTextReferenceProcesses<T>, T> {
    return new DeleteRequestBuilder<
      FiscalDocSourceTextReferenceProcesses<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof FiscalDocSourceTextReferenceProcesses
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FiscalDocumentText: fiscalDocumentText!,
            Agency: agency!,
            ReferenceProcessNumber: referenceProcessNumber!
          }
    );
  }
}
